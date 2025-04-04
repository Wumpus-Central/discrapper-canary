var r = n(147018),
    i = n(161581),
    o = n(545576),
    a = n(879),
    s = n(97131).f,
    l = n(740362),
    c = n(603528),
    u = n(95948),
    d = n(892725),
    f = n(33995),
    _ = n(905145),
    p = n(325008),
    h = n(992051),
    m = 'DOMException',
    g = o('Error'),
    E = o(m),
    b = function () {
        c(this, y);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], 'Error'),
            r = new E(t, n),
            i = g(t);
        return (i.name = m), s(r, 'stack', a(1, _(i.stack, 1))), u(r, this, b), r;
    },
    y = (b.prototype = E.prototype),
    v = 'stack' in g(m),
    O = 'stack' in new E(1, 2),
    I = E && p && Object.getOwnPropertyDescriptor(i, m),
    S = !!I && !(I.writable && I.configurable),
    T = v && !S && !O;
r(
    {
        global: !0,
        constructor: !0,
        forced: h || T
    },
    { DOMException: T ? b : E }
);
var N = o(m),
    A = N.prototype;
if (A.constructor !== N) {
    for (var C in (h || s(A, 'constructor', a(1, N)), f))
        if (l(f, C)) {
            var R = f[C],
                P = R.s;
            l(N, P) || s(N, P, a(6, R.c));
        }
}
