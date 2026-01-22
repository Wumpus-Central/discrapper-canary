n.d(t, { A: () => A });
var r = n(64700),
    i = n(311907),
    a = n(594061),
    s = n(967198),
    o = n(927813),
    l = n(661191),
    c = n(541689),
    u = n(256787),
    d = n(826673),
    f = n(367727),
    p = n(357186);
function _(e, t) {
    (0, c.IR)(t ? null : e);
}
function h(e, t) {
    let n = (0, p.c)(e),
        r = (0, f.J8)(e, {});
    return (_(e, t), t) ? ((0, a._N)(e), !1) : ((0, f.bQ)(e, n, r), !0);
}
function m(e, t) {
    let n = (0, f.J8)(e, {});
    return (_(e, t), t) ? ((0, a._N)(e), !1) : ((0, f.Uu)(e, l.default.fromTimestamp(Date.now() + f.rw), n), !0);
}
function g(e, t) {
    return (_(e, t), t) ? ((0, a._N)(e), !1) : ((0, f.ss)(e, (0, f.J8)(e, {})), !0);
}
function E(e, t) {
    return (_(e, t), t) ? ((0, a.xB)(e), !1) : ((0, a.o_)(e), !0);
}
function b(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, f.Sx)(e, t) : 1;
    return (_(e, n), n) ? ((0, f.R2)(e, t, r - 1), !1) : ((0, f.wH)(e, t, r), !0);
}
function y(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, f.Sx)(e, t) : 1;
    return (_(e, n), n) ? ((0, f.rZ)(e, t, r - 1), !1) : ((0, f.gG)(e, t, r), !0);
}
function O(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, f.Sx)(e, t) : 1;
    return (_(e, n), n)
        ? ((0, f.fb)(e, t, r - 1), !1)
        : ((0, f.G4)(e, l.default.fromTimestamp(Date.now() + f.rw), t, r), !0);
}
function A(e) {
    let t = (0, i.bG)([s.A], () => s.A.getGuildId()),
        n = (0, d.JZ)(e, {
            cooldownDurationMs: o.A.Millis.WEEK,
            guildId: t,
        }),
        a = (0, r.useCallback)(() => {
            if ((0, u.L0)(e)) return h(e, n);
            if ((0, u.IL)(e)) return m(e, n);
            if ((0, u.ki)(e)) return g(e, n);
            if ((0, u.ef)(e)) return b(e, t, n);
            if ((0, u.XQ)(e)) return y(e, t, n);
            else if ((0, u.PN)(e)) return O(e, t, n);
            else return E(e, n);
        }, [e, t, n]);
    return {
        isDismissed: n,
        handleToggleDismissState: a,
    };
}
