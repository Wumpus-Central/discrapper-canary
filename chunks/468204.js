n.d(t, { i: () => l });
var i = n(765981),
    r = n(714382),
    a = n(574543),
    s = n(92861),
    o = n(591723);
function l(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = u(r),
        l = new s.S(a, new o.V(a)),
        c = new i.f(a, l),
        d = e(c, t, n);
    return c.receiveBackend(d), c;
}
function u(e) {
    var t = 'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
    return (0, r.MT)(
        a.u,
        e &&
            t &&
            t({
                name: 'dnd-core',
                instanceId: 'dnd-core'
            })
    );
}
