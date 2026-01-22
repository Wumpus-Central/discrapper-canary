n.d(t, {
    A: () => u,
    b: () => c,
});
var r = n(311907),
    i = n(415109),
    a = n(57220),
    s = n(869146),
    o = n(392164),
    l = n(652215);

function c() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.A,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.Y)();
    return null != (e = null != (t = n.getWindow(o.f)) ? t : r ? n.getWindow(l.MLl.ACTIVITY_POPOUT) : void 0)
        ? e
        : window;
}

function u() {
    let e = (0, a.V)();
    return (0, r.bG)([s.A], () => c(s.A, e));
}
