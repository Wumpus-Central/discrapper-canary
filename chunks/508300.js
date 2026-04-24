var o = e(557939),
    c = e(860511),
    n = e(230606),
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
    m = n("Error"),
    v = n(_),
    I = function () {
        E(this, h);
        var r = arguments.length,
            t = f(r < 1 ? void 0 : arguments[0]),
            e = f(r < 2 ? void 0 : arguments[1], "Error"),
            o = new v(t, e),
            c = new m(t);
        return (c.name = _), s(o, "stack", a(1, R(c.stack, 1))), l(o, this, I), o;
    },
    h = (I.prototype = v.prototype),
    x = "stack" in new m(_),
    A = "stack" in new v(1, 2),
    O = v && u && Object.getOwnPropertyDescriptor(c, _),
    T = !!O && !(O.writable && O.configurable),
    b = x && !T && !A;
o({ global: !0, constructor: !0, forced: d || b }, { DOMException: b ? I : v });
var N = n(_),
    S = N.prototype;
if (S.constructor !== N) {
    for (var D in (d || s(S, "constructor", a(1, N)), p))
        if (i(p, D)) {
            var y = p[D],
                g = y.s;
            i(N, g) || s(N, g, a(6, y.c));
        }
}
