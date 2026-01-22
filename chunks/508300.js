var r = n(557939),
    i = n(860511),
    a = n(230606),
    s = n(231977),
    o = n(4940).f,
    l = n(210140),
    c = n(61132),
    u = n(486724),
    d = n(862784),
    f = n(753609),
    p = n(949186),
    _ = n(257943),
    h = n(105712),
    m = "DOMException",
    g = a("Error"),
    E = a(m),
    b = function () {
        c(this, y);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], "Error"),
            r = new E(t, n),
            i = new g(t);
        return (i.name = m), o(r, "stack", s(1, p(i.stack, 1))), u(r, this, b), r;
    },
    y = (b.prototype = E.prototype),
    O = "stack" in new g(m),
    A = "stack" in new E(1, 2),
    v = E && _ && Object.getOwnPropertyDescriptor(i, m),
    S = !!v && !(v.writable && v.configurable),
    I = O && !S && !A;
r(
    {
        global: !0,
        constructor: !0,
        forced: h || I,
    },
    {
        DOMException: I ? b : E,
    },
);
var T = a(m),
    C = T.prototype;
if (C.constructor !== T) {
    for (var N in (h || o(C, "constructor", s(1, T)), f))
        if (l(f, N)) {
            var R = f[N],
                w = R.s;
            l(T, w) || o(T, w, s(6, R.c));
        }
}
