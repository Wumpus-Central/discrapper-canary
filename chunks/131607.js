"use strict";
n.d(t, { iP: () => E, kn: () => c, x_: () => p, D8: () => m, Cc: () => h, RF: () => _, Wl: () => f, ww: () => d });
var i = n(595529),
    r = n(64700),
    s = n(787925),
    a = n(199773),
    o = n(256787),
    l = n(49999);
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        u = null != e && !n && !s.C.has(e);
    r.useEffect(
        () => () => {
            u &&
                (a.A.lastDismissed?.content !== e || ((0, o.vf)(e) && a.A.lastDismissed?.guildId !== i)) &&
                t(l.i.AUTO_DISMISS, !0);
        },
        [u, t, e, i],
    );
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        [r, s] = (0, i.DP)(e, t);
    return u(r, s, n), [r, s];
}
function d(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [s, a] = (0, i._L)(e, t, n);
    return u(s, a, r, t), [s, a];
}
function _(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [s, a] = (0, i.eE)(e, t, n);
    return u(s, a, r), [s, a];
}
function f(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [s, a] = (0, i.Bo)(e, t, n);
    return u(s, a, r), [s, a];
}
function h(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [s, a] = (0, i.Vu)(e, t, n);
    return u(s, a, r), [s, a];
}
function p(e, t, n, r) {
    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        [a, o] = (0, i.hI)(e, n, t, r);
    return u(a, o, s, t), [a, o];
}
function E(e, t, n, r) {
    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        [a, o] = (0, i.Tr)(e, n, t, r);
    return u(a, o, s), [a, o];
}
function m(e, t, n, r) {
    let [s, a] = (0, i.Ty)(e, t, n, r);
    return u(s, a, !1, t), [s, a];
}
