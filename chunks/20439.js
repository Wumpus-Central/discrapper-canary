"use strict";
n.d(t, { A: () => y });
var r = n(64700),
    i = n(311907),
    a = n(594061),
    s = n(967198),
    o = n(927813),
    l = n(661191),
    u = n(541689),
    c = n(256787),
    d = n(826673),
    _ = n(367727),
    f = n(357186);
function p(e, t) {
    (0, u.IR)(t ? null : e);
}
function h(e, t) {
    let n = (0, f.c)(e),
        r = (0, _.J8)(e, {});
    return (p(e, t), t) ? ((0, a._N)(e), !1) : ((0, _.bQ)(e, n, r), !0);
}
function m(e, t) {
    let n = (0, _.J8)(e, {});
    return (p(e, t), t) ? ((0, a._N)(e), !1) : ((0, _.Uu)(e, l.default.fromTimestamp(Date.now() + _.rw), n), !0);
}
function g(e, t) {
    return (p(e, t), t) ? ((0, a._N)(e), !1) : ((0, _.ss)(e, (0, _.J8)(e, {})), !0);
}
function E(e, t) {
    return (p(e, t), t) ? ((0, a.xB)(e), !1) : ((0, a.o_)(e), !0);
}
function A(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, _.Sx)(e, t) : 1;
    return (p(e, n), n) ? ((0, _.R2)(e, t, r - 1), !1) : ((0, _.wH)(e, t, r), !0);
}
function I(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, _.Sx)(e, t) : 1;
    return (p(e, n), n) ? ((0, _.rZ)(e, t, r - 1), !1) : ((0, _.gG)(e, t, r), !0);
}
function T(e, t, n) {
    if (null == t) return !1;
    let r = null != t ? (0, _.Sx)(e, t) : 1;
    return (p(e, n), n)
        ? ((0, _.fb)(e, t, r - 1), !1)
        : ((0, _.G4)(e, l.default.fromTimestamp(Date.now() + _.rw), t, r), !0);
}
function y(e) {
    let t = (0, i.bG)([s.A], () => s.A.getGuildId()),
        n = (0, d.JZ)(e, { cooldownDurationMs: o.A.Millis.WEEK, guildId: t }),
        a = (0, r.useCallback)(() => {
            if ((0, c.L0)(e)) return h(e, n);
            if ((0, c.IL)(e)) return m(e, n);
            if ((0, c.ki)(e)) return g(e, n);
            if ((0, c.ef)(e)) return A(e, t, n);
            if ((0, c.XQ)(e)) return I(e, t, n);
            else if ((0, c.PN)(e)) return T(e, t, n);
            else return E(e, n);
        }, [e, t, n]);
    return { isDismissed: n, handleToggleDismissState: a };
}
