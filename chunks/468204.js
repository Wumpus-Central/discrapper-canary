n.d(t, { i: () => l });
var r = n(765981),
    i = n(714382),
    o = n(574543),
    a = n(92861),
    s = n(591723);
function l(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = c(i),
        l = new a.S(o, new s.V(o)),
        u = new r.f(o, l),
        d = e(u, t, n);
    return u.receiveBackend(d), u;
}
function c(e) {
    var t = 'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
    return (0, i.MT)(
        o.u,
        e &&
            t &&
            t({
                name: 'dnd-core',
                instanceId: 'dnd-core'
            })
    );
}
