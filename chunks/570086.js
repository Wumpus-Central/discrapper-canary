var r = n(98405),
    i = n(127849),
    a = n(154028),
    o = n(530575),
    s = n(117895).f,
    l = n(77025),
    c = n(170322),
    u = n(176682),
    d = n(759319),
    f = n(17204),
    _ = n(742850),
    p = n(507604),
    h = n(511696),
    m = 'DOMException',
    g = a('Error'),
    E = a(m),
    b = function () {
        c(this, y);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], 'Error'),
            r = new E(t, n),
            i = new g(t);
        return (i.name = m), s(r, 'stack', o(1, _(i.stack, 1))), u(r, this, b), r;
    },
    y = (b.prototype = E.prototype),
    O = 'stack' in new g(m),
    v = 'stack' in new E(1, 2),
    I = E && p && Object.getOwnPropertyDescriptor(i, m),
    S = !!I && !(I.writable && I.configurable),
    T = O && !S && !v;
r(
    {
        global: !0,
        constructor: !0,
        forced: h || T
    },
    { DOMException: T ? b : E }
);
var A = a(m),
    N = A.prototype;
if (N.constructor !== A) {
    for (var C in (h || s(N, 'constructor', o(1, A)), f))
        if (l(f, C)) {
            var R = f[C],
                P = R.s;
            l(A, P) || s(A, P, o(6, R.c));
        }
}
