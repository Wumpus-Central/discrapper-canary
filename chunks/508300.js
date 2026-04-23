var o = e(557939),
    n = e(860511),
    c = e(230606),
    a = e(231977),
    s = e(4940).f,
    i = e(210140),
    E = e(61132),
    l = e(486724),
    f = e(862784),
    p = e(753609),
    R = e(949186),
    u = e(257943),
    d = e(105712),
    _ = "DOMException",
    m = c("Error"),
    v = c(_),
    I = function () {
        E(this, O);
        var r = arguments.length,
            t = f(r < 1 ? void 0 : arguments[0]),
            e = f(r < 2 ? void 0 : arguments[1], "Error"),
            o = new v(t, e),
            n = new m(t);
        return (n.name = _), s(o, "stack", a(1, R(n.stack, 1))), l(o, this, I), o;
    },
    O = (I.prototype = v.prototype),
    b = "stack" in new m(_),
    h = "stack" in new v(1, 2),
    x = v && u && Object.getOwnPropertyDescriptor(n, _),
    A = !!x && !(x.writable && x.configurable),
    T = b && !A && !h;
o({ global: !0, constructor: !0, forced: d || T }, { DOMException: T ? I : v });
var N = c(_),
    S = N.prototype;
if (S.constructor !== N) {
    for (var y in (d || s(S, "constructor", a(1, N)), p))
        if (i(p, y)) {
            var D = p[y],
                g = D.s;
            i(N, g) || s(N, g, a(6, D.c));
        }
}
