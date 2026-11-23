n.d(e, { A: () => _ });
var t = n(582128),
    a = n(855986),
    r = n(587895),
    u = n(287809),
    i = n(260498),
    s = n(73153),
    o = n(729160);
let c = new Map();
class d extends a.Ay.Store {
    getStatus(l) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return c.get((0, o.Pl)(l, e)) ?? null;
    }
}
let f = new d(s.h, {
    CONJURE_SHARED_PROJECT_STATUS: function (l) {
        let { linkCode: e, status: n } = l;
        if (null != n) c.set(e, n);
        else if (!c.delete(e)) return !1;
    },
    LOGOUT: function () {
        if (0 === c.size) return !1;
        c.clear();
    },
});
var p = n(158390),
    g = n(627363),
    y = n(233470),
    A = n(714020),
    m = n(652215);
let h = null;
function I() {
    if (null != h) {
        for (let l of h.backoffs.values()) l.cancel();
        h = null;
    }
}
function v(l, e) {
    s.h.dispatch({ type: "CONJURE_SHARED_PROJECT_STATUS", linkCode: l, status: e });
}
function _(l) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = (0, a.bG)([f], () => f.getStatus(l, e), [l, e]),
        s = (0, a.bG)([r.A], () => r.A.getApplication(l) ?? null, [l]),
        c = n?.type === "ready" ? n.projectId : null,
        d = (0, a.bG)([i.Ay], () => (null != c ? (i.Ay.getProject(c) ?? null) : null), [c]),
        _ = (0, a.bG)([u.default], () => u.default.getCurrentUser()?.id ?? null),
        b = null == n || (null != c && null == d);
    return (
        t.useEffect(() => {
            b &&
                null != _ &&
                (function (l) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n =
                            ((null != h && (0, y.a3)(h.session)) ||
                                (I(),
                                (h = {
                                    session: (0, y.gg)(),
                                    loading: new Set(),
                                    backoffs: new Map(),
                                    ticketOnlyProjectIds: new Set(),
                                })),
                            h);
                    if (null == n.session.userId) return;
                    let t = (0, o.Pl)(l, e);
                    if (n.loading.has(t) || n.backoffs.get(t)?.pending === !0) return;
                    let a = f.getStatus(l, e);
                    (null == a || ("ready" === a.type && null == i.Ay.getProject(a.projectId))) &&
                        (async function l(e, n, t) {
                            let a = (0, o.Pl)(n, t);
                            (e.loading.add(a), null == f.getStatus(n, t) && v(a, { type: "loading" }));
                            let u = null;
                            try {
                                u = await (async function (l, e, n) {
                                    r.A.isHydrated(l) || (await g.Ay.fetchApplications([l]));
                                    let t = r.A.getApplication(l)?.conjureProjectId;
                                    if (null == t) return { type: "unavailable" };
                                    let a = null != i.Ay.getProject(t) && !n.ticketOnlyProjectIds.has(t);
                                    if (null == e && a) return { type: "ready", projectId: t, ticketValid: !1 };
                                    if ((await (0, y.b8)(), i.Ay.getProjectLimitFailureCode() === m.t02.INVALID_ACCESS))
                                        return { type: "info_only" };
                                    let u = !1;
                                    try {
                                        let l = await (0, y.U1)(t, void 0, n.session, e ?? void 0);
                                        u = null != e && !0 === l.body.share_ticket_valid;
                                    } catch (l) {
                                        switch ((0, A.A)(l)) {
                                            case m.t02.INVALID_ACCESS:
                                            case m.t02.UNKNOWN_CONJURE_PROJECT:
                                                return null != e && (0, o.BL)(e)
                                                    ? { type: "expired" }
                                                    : { type: "no_access" };
                                            default:
                                                throw l;
                                        }
                                    }
                                    return (
                                        null == e
                                            ? n.ticketOnlyProjectIds.delete(t)
                                            : u && !a && n.ticketOnlyProjectIds.add(t),
                                        { type: "ready", projectId: t, ticketValid: u }
                                    );
                                })(n, t, e);
                            } catch {}
                            if ((e.loading.delete(a), e !== h || !(0, y.a3)(e.session))) {
                                h?.loading.has(a) !== !0 && f.getStatus(n, t)?.type === "loading" && v(a, null);
                                return;
                            }
                            let s = e.backoffs.get(a);
                            if (null == u) {
                                (null == s && ((s = new p.A(5e3, 3e5)), e.backoffs.set(a, s)),
                                    s.fail(() => {
                                        e !== h || e.loading.has(a) || l(e, n, t);
                                    }));
                                return;
                            }
                            (s?.succeed(), e.backoffs.delete(a), v(a, u));
                        })(n, l, e);
                })(l, e);
        }, [l, e, b, _]),
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
s.h.subscribe("LOGOUT", I);
