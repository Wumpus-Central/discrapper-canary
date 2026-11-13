n.d(t, {
    kn: () => _,
    EZ: () => u,
    ww: () => E,
    Cc: () => h,
    x_: () => I,
    Wl: () => f,
    D8: () => m,
    iP: () => p,
    RF: () => A,
});
var i = n(825272),
    r = n(409145),
    a = n(582128),
    s = n(392121),
    l = n(199773),
    o = n(256787),
    d = n(49999);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = null != e && !n && !s.Cq.has(e);
    a.useEffect(
        () => () => {
            r &&
                (l.A.lastDismissed?.content !== e || ((0, o.vf)(e) && l.A.lastDismissed?.guildId !== i)) &&
                t(d.i.AUTO_DISMISS, !0);
        },
        [r, t, e, i],
    );
}
function u(e) {
    let {
            groupName: t,
            bypassAutoDismiss: n = !1,
            deduplicateImpressions: a,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { candidate: s, visibleContent: l, markAsDismissed: o } = (0, r.tE)(e, t, a),
        d = null != l ? s : null;
    return (c(l, o, n, null != d ? (0, i.JK)(d).guildId : void 0), [l, o]);
}
function _(e, t) {
    let [n, r] = u(
        e.flatMap((e) => (0, i.qd)(e) ?? []),
        t,
    );
    return [n, r];
}
function E(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [a, s] = (0, r.AA)(e, t, n);
    return (c(a, s, i, t), [a, s]);
}
function A(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [a, s] = (0, r.eE)(e, t, n);
    return (c(a, s, i), [a, s]);
}
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [a, s] = (0, r.Bo)(e, t, n);
    return (c(a, s, i), [a, s]);
}
function h(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [a, s] = (0, r.Vu)(e, t, n);
    return (c(a, s, i), [a, s]);
}
function I(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        [s, l] = (0, r.b5)(e, n, t, i);
    return (c(s, l, a, t), [s, l]);
}
function p(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        [s, l] = (0, r.Tr)(e, n, t, i);
    return (c(s, l, a), [s, l]);
}
function m(e, t, n, i) {
    let [a, s] = (0, r.PP)(e, t, n, i);
    return (c(a, s, !1, t), [a, s]);
}
