n.d(t, { F4: () => g, tb: () => j, gM: () => R, _V: () => b, k3: () => h });
var l = n(873298),
    s = n(73153),
    r = n(594061),
    u = n(617617),
    i = n(218461),
    c = n(513425),
    o = n(874421),
    d = n(886540),
    a = n(404373),
    A = n(738601),
    p = n(718299),
    E = n(855986);
let S = new Map();
class f extends E.Ay.Store {
    static displayName = "ConjureServerProjectVisitStore";
    getVisit(e) {
        return S.get(e) ?? null;
    }
}
let _ = new f(s.h, {
        CONJURE_SERVER_PROJECT_VISIT: function (e) {
            let { projectId: t, open: n } = e,
                l = Date.now();
            if (n) return (S.set(t, { openedAt: l, closedAt: null }), !0);
            let s = S.get(t);
            return null != s && null == s.closedAt && (S.set(t, { ...s, closedAt: l }), !0);
        },
        CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            return S.delete(t);
        },
        LOGOUT: function () {
            S = new Map();
        },
    }),
    g = [p.A, _, c.A, i.Ay, u.A];
function C(e, t) {
    let n = e.conjure?.projects[t]?.sidebarDismissedAt,
        l = null != n ? Number(n) : 0;
    return l > 0 ? l : null;
}
function R(e) {
    let t,
        n,
        l = C(u.A.settings, e);
    if (null == l || (0, a.tz)(e)) return !1;
    let s =
        (n = [null != (t = (0, d.Ji)(c.A.getMessages(e))) ? (0, o.S)(t) : null, p.A.getTurnStartedAt(e)].filter(
            (e) => null != e,
        )).length > 0
            ? Math.max(...n)
            : null;
    return null == s || s <= l;
}
function b(e) {
    let t = _.getVisit(e);
    if (null == t) return null;
    let n = C(u.A.settings, e);
    return null != n && t.openedAt <= n ? null : null != t.closedAt ? t.closedAt + 18e5 : 1 / 0;
}
function h(e, t) {
    s.h.dispatch({ type: "CONJURE_SERVER_PROJECT_VISIT", projectId: e, open: t });
}
function j(e) {
    let t = Date.now();
    ((0, a.rW)(e),
        r.wc.updateAsync(
            "conjure",
            (n) => {
                for (let [l, s] of Object.entries(n.projects)) {
                    let r = Number(s.sidebarDismissedAt);
                    l === e ||
                        r <= 0 ||
                        t - r < 18e5 ||
                        (null == (0, A.AK)(l) && (s.muted ? (s.sidebarDismissedAt = "0") : delete n.projects[l]));
                }
                n.projects[e] = l.Zy.create({ ...n.projects[e], sidebarDismissedAt: String(t) });
            },
            r.Sb.INFREQUENT_USER_ACTION,
        ));
}
