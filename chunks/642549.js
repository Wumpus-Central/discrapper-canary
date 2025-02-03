var i = n(147018),
    r = n(161581),
    a = n(545576),
    s = n(879),
    o = n(97131).f,
    l = n(740362),
    u = n(603528),
    c = n(95948),
    d = n(892725),
    f = n(33995),
    _ = n(905145),
    p = n(325008),
    h = n(992051),
    m = 'DOMException',
    g = a('Error'),
    E = a(m),
    v = function () {
        u(this, y);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], 'Error'),
            i = new E(t, n),
            r = g(t);
        return (r.name = m), o(i, 'stack', s(1, _(r.stack, 1))), c(i, this, v), i;
    },
    y = (v.prototype = E.prototype),
    I = 'stack' in g(m),
    b = 'stack' in new E(1, 2),
    T = E && p && Object.getOwnPropertyDescriptor(r, m),
    S = !!T && !(T.writable && T.configurable),
    A = I && !S && !b;
i(
    {
        global: !0,
        constructor: !0,
        forced: h || A
    },
    { DOMException: A ? v : E }
);
var N = a(m),
    C = N.prototype;
if (C.constructor !== N) {
    for (var R in (h || o(C, 'constructor', s(1, N)), f))
        if (l(f, R)) {
            var O = f[R],
                D = O.s;
            l(N, D) || o(N, D, s(6, O.c));
        }
}
