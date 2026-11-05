t.d(l, { A: () => b });
var n = t(582128),
    a = t(855986),
    u = t(587895),
    r = t(287809),
    s = t(260498),
    i = t(73153);
let c = new Map();
class o extends a.Ay.Store {
    getStatus(e) {
        return c.get(e) ?? null;
    }
}
let d = new o(i.h, {
    CONJURE_SHARED_PROJECT_STATUS: function (e) {
        let { applicationId: l, status: t } = e;
        if (null != t) c.set(l, t);
        else if (!c.delete(l)) return !1;
    },
    LOGOUT: function () {
        if (0 === c.size) return !1;
        c.clear();
    },
});
var f = t(158390),
    p = t(627363),
    y = t(233470),
    g = t(714020),
    A = t(652215);
let m = null;
function _() {
    if (null != m) {
        for (let e of m.backoffs.values()) e.cancel();
        m = null;
    }
}
function h(e, l) {
    i.h.dispatch({ type: "CONJURE_SHARED_PROJECT_STATUS", applicationId: e, status: l });
}
function b(e) {
    let l = (0, a.bG)([d], () => d.getStatus(e), [e]),
        t = (0, a.bG)([u.A], () => u.A.getApplication(e) ?? null, [e]),
        i = l?.type === "ready" ? l.projectId : null,
        c = (0, a.bG)([s.Ay], () => (null != i ? (s.Ay.getProject(i) ?? null) : null), [i]),
        o = (0, a.bG)([r.default], () => r.default.getCurrentUser()?.id ?? null),
        b = null == l || (null != i && null == c);
    return (
        n.useEffect(() => {
            b &&
                null != o &&
                (function (e) {
                    let l =
                        ((null != m && (0, y.a3)(m.session)) ||
                            (_(), (m = { session: (0, y.gg)(), loading: new Set(), backoffs: new Map() })),
                        m);
                    if (null == l.session.userId || l.loading.has(e) || l.backoffs.get(e)?.pending === !0) return;
                    let t = d.getStatus(e);
                    (null == t || ("ready" === t.type && null == s.Ay.getProject(t.projectId))) &&
                        (async function e(l, t) {
                            (l.loading.add(t), null == d.getStatus(t) && h(t, { type: "loading" }));
                            let n = null;
                            try {
                                n = await (async function (e, l) {
                                    u.A.isHydrated(e) || (await p.Ay.fetchApplications([e]));
                                    let t = u.A.getApplication(e)?.conjureProjectId;
                                    if (null == t) return { type: "unavailable" };
                                    if (null != s.Ay.getProject(t)) return { type: "ready", projectId: t };
                                    if ((await (0, y.b8)(), s.Ay.getProjectLimitFailureCode() === A.t02.INVALID_ACCESS))
                                        return { type: "info_only" };
                                    try {
                                        await (0, y.U1)(t, void 0, l);
                                    } catch (e) {
                                        switch ((0, g.A)(e)) {
                                            case A.t02.INVALID_ACCESS:
                                            case A.t02.UNKNOWN_CONJURE_PROJECT:
                                                return { type: "no_access" };
                                            default:
                                                throw e;
                                        }
                                    }
                                    return { type: "ready", projectId: t };
                                })(t, l.session);
                            } catch {}
                            if ((l.loading.delete(t), l !== m || !(0, y.a3)(l.session))) {
                                m?.loading.has(t) !== !0 && d.getStatus(t)?.type === "loading" && h(t, null);
                                return;
                            }
                            let a = l.backoffs.get(t);
                            if (null == n) {
                                (null == a && ((a = new f.A(5e3, 3e5)), l.backoffs.set(t, a)),
                                    a.fail(() => {
                                        l !== m || l.loading.has(t) || e(l, t);
                                    }));
                                return;
                            }
                            (a?.succeed(), l.backoffs.delete(t), h(t, n));
                        })(l, e);
                })(e);
        }, [e, b, o]),
        n.useMemo(
            () =>
                null == l || "loading" === l.type
                    ? { type: "loading" }
                    : "unavailable" === l.type || "no_access" === l.type
                      ? { type: l.type }
                      : null == t
                        ? { type: "unavailable" }
                        : "info_only" === l.type
                          ? { type: "info_only", application: t }
                          : null == c
                            ? { type: "loading" }
                            : { type: "ready", application: t, project: c, canRemix: (0, s.H_)(c) },
            [l, t, c],
        )
    );
}
i.h.subscribe("LOGOUT", _);
