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
    p = n(742850),
    _ = n(507604),
    m = n(511696),
    h = "DOMException",
    g = a("Error"),
    E = a(h),
    b = function () {
        c(this, y);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], "Error"),
            r = new E(t, n),
            i = new g(t);
        return (i.name = h), s(r, "stack", o(1, p(i.stack, 1))), u(r, this, b), r;
    },
    y = (b.prototype = E.prototype),
    O = "stack" in new g(h),
    v = "stack" in new E(1, 2),
    S = E && _ && Object.getOwnPropertyDescriptor(i, h),
    I = !!S && !(S.writable && S.configurable),
    T = O && !I && !v;
r(
    {
        global: !0,
        constructor: !0,
        forced: m || T,
    },
    { DOMException: T ? b : E },
);
var A = a(h),
    C = A.prototype;
if (C.constructor !== A) {
    for (var N in (m || s(C, "constructor", o(1, A)), f))
        if (l(f, N)) {
            var P = f[N],
                R = P.s;
            l(A, R) || s(A, R, o(6, P.c));
        }
}
