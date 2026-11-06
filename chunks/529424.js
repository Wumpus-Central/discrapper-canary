n.d(e, { A: () => _ });
var t = n(582128),
    a = n(855986),
    u = n(587895),
    r = n(287809),
    i = n(260498),
    s = n(73153);
let c = new Map();
class o extends a.Ay.Store {
    getStatus(l) {
        return c.get(l) ?? null;
    }
}
let d = new o(s.h, {
    CONJURE_SHARED_PROJECT_STATUS: function (l) {
        let { applicationId: e, status: n } = l;
        if (null != n) c.set(e, n);
        else if (!c.delete(e)) return !1;
    },
    LOGOUT: function () {
        if (0 === c.size) return !1;
        c.clear();
    },
});
var f = n(158390),
    p = n(627363),
    g = n(233470),
    y = n(714020),
    A = n(652215);
let h = null;
function m() {
    if (null != h) {
        for (let l of h.backoffs.values()) l.cancel();
        h = null;
    }
}
function v(l, e) {
    s.h.dispatch({ type: "CONJURE_SHARED_PROJECT_STATUS", applicationId: l, status: e });
}
function _(l) {
    let e = (0, a.bG)([d], () => d.getStatus(l), [l]),
        n = (0, a.bG)([u.A], () => u.A.getApplication(l) ?? null, [l]),
        s = e?.type === "ready" ? e.projectId : null,
        c = (0, a.bG)([i.Ay], () => (null != s ? (i.Ay.getProject(s) ?? null) : null), [s]),
        o = (0, a.bG)([r.default], () => r.default.getCurrentUser()?.id ?? null),
        _ = null == e || (null != s && null == c);
    return (
        t.useEffect(() => {
            _ &&
                null != o &&
                (function (l) {
                    let e =
                        ((null != h && (0, g.a3)(h.session)) ||
                            (m(), (h = { session: (0, g.gg)(), loading: new Set(), backoffs: new Map() })),
                        h);
                    if (null == e.session.userId || e.loading.has(l) || e.backoffs.get(l)?.pending === !0) return;
                    let n = d.getStatus(l);
                    (null == n || ("ready" === n.type && null == i.Ay.getProject(n.projectId))) &&
                        (async function l(e, n) {
                            (e.loading.add(n), null == d.getStatus(n) && v(n, { type: "loading" }));
                            let t = null;
                            try {
                                t = await (async function (l, e) {
                                    u.A.isHydrated(l) || (await p.Ay.fetchApplications([l]));
                                    let n = u.A.getApplication(l)?.conjureProjectId;
                                    if (null == n) return { type: "unavailable" };
                                    if (null != i.Ay.getProject(n)) return { type: "ready", projectId: n };
                                    if ((await (0, g.b8)(), i.Ay.getProjectLimitFailureCode() === A.t02.INVALID_ACCESS))
                                        return { type: "info_only" };
                                    try {
                                        await (0, g.U1)(n, void 0, e);
                                    } catch (l) {
                                        switch ((0, y.A)(l)) {
                                            case A.t02.INVALID_ACCESS:
                                            case A.t02.UNKNOWN_CONJURE_PROJECT:
                                                return { type: "no_access" };
                                            default:
                                                throw l;
                                        }
                                    }
                                    return { type: "ready", projectId: n };
                                })(n, e.session);
                            } catch {}
                            if ((e.loading.delete(n), e !== h || !(0, g.a3)(e.session))) {
                                h?.loading.has(n) !== !0 && d.getStatus(n)?.type === "loading" && v(n, null);
                                return;
                            }
                            let a = e.backoffs.get(n);
                            if (null == t) {
                                (null == a && ((a = new f.A(5e3, 3e5)), e.backoffs.set(n, a)),
                                    a.fail(() => {
                                        e !== h || e.loading.has(n) || l(e, n);
                                    }));
                                return;
                            }
                            (a?.succeed(), e.backoffs.delete(n), v(n, t));
                        })(e, l);
                })(l);
        }, [l, _, o]),
        t.useMemo(
            () =>
                null == e || "loading" === e.type
                    ? { type: "loading" }
                    : "unavailable" === e.type || "no_access" === e.type
                      ? { type: e.type }
                      : null == n
                        ? { type: "unavailable" }
                        : "info_only" === e.type
                          ? { type: "info_only", application: n }
                          : null == c
                            ? { type: "loading" }
                            : { type: "ready", application: n, project: c, canRemix: (0, i.H_)(c) },
            [e, n, c],
        )
    );
}
s.h.subscribe("LOGOUT", m);
