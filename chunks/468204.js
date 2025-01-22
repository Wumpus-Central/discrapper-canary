r.d(n, {
    i: function () {
        return u;
    }
});
var i = r(765981),
    a = r(714382),
    o = r(574543),
    s = r(92861),
    l = r(591723);
function u(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = c(a),
        u = new s.S(o, new l.V(o)),
        d = new i.f(o, u),
        f = e(d, n, r);
    return d.receiveBackend(f), d;
}
function c(e) {
    var n = 'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
    return (0, a.MT)(
        o.u,
        e &&
            n &&
            n({
                name: 'dnd-core',
                instanceId: 'dnd-core'
            })
    );
}
