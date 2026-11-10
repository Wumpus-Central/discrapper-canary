n.d(e, { A: () => _ });
var t = n(582128),
    a = n(855986),
    u = n(587895),
    r = n(287809),
    i = n(260498),
    s = n(73153),
    c = n(729160);
let o = new Map();
class d extends a.Ay.Store {
    getStatus(l) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return o.get((0, c.Pl)(l, e)) ?? null;
    }
}
let f = new d(s.h, {
    CONJURE_SHARED_PROJECT_STATUS: function (l) {
        let { linkCode: e, status: n } = l;
        if (null != n) o.set(e, n);
        else if (!o.delete(e)) return !1;
    },
    LOGOUT: function () {
        if (0 === o.size) return !1;
        o.clear();
    },
});
var p = n(158390),
    g = n(627363),
    y = n(233470),
    h = n(714020),
    A = n(652215);
let m = null;
function v() {
    if (null != m) {
        for (let l of m.backoffs.values()) l.cancel();
        m = null;
    }
}
function I(l, e) {
    s.h.dispatch({ type: "CONJURE_SHARED_PROJECT_STATUS", linkCode: l, status: e });
}
function _(l) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = (0, a.bG)([f], () => f.getStatus(l, e), [l, e]),
        s = (0, a.bG)([u.A], () => u.A.getApplication(l) ?? null, [l]),
        o = n?.type === "ready" ? n.projectId : null,
        d = (0, a.bG)([i.Ay], () => (null != o ? (i.Ay.getProject(o) ?? null) : null), [o]),
        _ = (0, a.bG)([r.default], () => r.default.getCurrentUser()?.id ?? null),
        j = null == n || (null != o && null == d);
    return (
        t.useEffect(() => {
            j &&
                null != _ &&
                (function (l) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n =
                            ((null != m && (0, y.a3)(m.session)) ||
                                (v(),
                                (m = {
                                    session: (0, y.gg)(),
                                    loading: new Set(),
                                    backoffs: new Map(),
                                    ticketOnlyProjectIds: new Set(),
                                })),
                            m);
                    if (null == n.session.userId) return;
                    let t = (0, c.Pl)(l, e);
                    if (n.loading.has(t) || n.backoffs.get(t)?.pending === !0) return;
                    let a = f.getStatus(l, e);
                    (null == a || ("ready" === a.type && null == i.Ay.getProject(a.projectId))) &&
                        (async function l(e, n, t) {
                            let a = (0, c.Pl)(n, t);
                            (e.loading.add(a), null == f.getStatus(n, t) && I(a, { type: "loading" }));
                            let r = null;
                            try {
                                r = await (async function (l, e, n) {
                                    u.A.isHydrated(l) || (await g.Ay.fetchApplications([l]));
                                    let t = u.A.getApplication(l)?.conjureProjectId;
                                    if (null == t) return { type: "unavailable" };
                                    let a = null != i.Ay.getProject(t) && !n.ticketOnlyProjectIds.has(t);
                                    if (null == e && a) return { type: "ready", projectId: t, ticketValid: !1 };
                                    if ((await (0, y.b8)(), i.Ay.getProjectLimitFailureCode() === A.t02.INVALID_ACCESS))
                                        return { type: "info_only" };
                                    let r = !1;
                                    try {
                                        let l = await (0, y.U1)(t, void 0, n.session, e ?? void 0);
                                        r = null != e && !0 === l.body.share_ticket_valid;
                                    } catch (l) {
                                        switch ((0, h.A)(l)) {
                                            case A.t02.INVALID_ACCESS:
                                            case A.t02.UNKNOWN_CONJURE_PROJECT:
                                                return null != e && (0, c.BL)(e)
                                                    ? { type: "expired" }
                                                    : { type: "no_access" };
                                            default:
                                                throw l;
                                        }
                                    }
                                    return (
                                        null == e
                                            ? n.ticketOnlyProjectIds.delete(t)
                                            : r && !a && n.ticketOnlyProjectIds.add(t),
                                        { type: "ready", projectId: t, ticketValid: r }
                                    );
                                })(n, t, e);
                            } catch {}
                            if ((e.loading.delete(a), e !== m || !(0, y.a3)(e.session))) {
                                m?.loading.has(a) !== !0 && f.getStatus(n, t)?.type === "loading" && I(a, null);
                                return;
                            }
                            let s = e.backoffs.get(a);
                            if (null == r) {
                                (null == s && ((s = new p.A(5e3, 3e5)), e.backoffs.set(a, s)),
                                    s.fail(() => {
                                        e !== m || e.loading.has(a) || l(e, n, t);
                                    }));
                                return;
                            }
                            (s?.succeed(), e.backoffs.delete(a), I(a, r));
                        })(n, l, e);
                })(l, e);
        }, [l, e, j, _]),
        t.useMemo(
            () =>
                null == n || "loading" === n.type
                    ? { type: "loading" }
                    : "unavailable" === n.type || "no_access" === n.type || "expired" === n.type
                      ? { type: n.type }
                      : null == s
                        ? { type: "unavailable" }
                        : "info_only" === n.type
                          ? { type: "info_only", application: s }
                          : null == d
                            ? { type: "loading" }
                            : { type: "ready", application: s, project: d, canRemix: n.ticketValid || (0, i.H_)(d) },
            [n, s, d],
        )
    );
}
s.h.subscribe("LOGOUT", v);
