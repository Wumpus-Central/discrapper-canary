var E = t(557939),
    c = t(860511),
    e = t(230606),
    R = t(231977),
    s = t(4940).f,
    n = t(210140),
    a = t(61132),
    i = t(486724),
    _ = t(862784),
    I = t(753609),
    p = t(949186),
    A = t(257943),
    T = t(105712),
    m = "DOMException",
    N = e("Error"),
    u = e(m),
    D = function () {
        a(this, O);
        var r = arguments.length,
            o = _(r < 1 ? void 0 : arguments[0]),
            t = _(r < 2 ? void 0 : arguments[1], "Error"),
            E = new u(o, t),
            c = new N(o);
        return (c.name = m), s(E, "stack", R(1, p(c.stack, 1))), i(E, this, D), E;
    },
    O = (D.prototype = u.prototype),
    d = "stack" in new N(m),
    S = "stack" in new u(1, 2),
    v = u && A && Object.getOwnPropertyDescriptor(c, m),
    l = !!v && !(v.writable && v.configurable),
    C = d && !l && !S;
E({ global: !0, constructor: !0, forced: T || C }, { DOMException: C ? D : u });
var f = e(m),
    M = f.prototype;
if (M.constructor !== f) {
    for (var h in (T || s(M, "constructor", R(1, f)), I))
        if (n(I, h)) {
            var w = I[h],
                y = w.s;
            n(f, y) || s(f, y, R(6, w.c));
        }
}
