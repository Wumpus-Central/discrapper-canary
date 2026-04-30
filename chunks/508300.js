"use strict";
var i = n(557939),
    r = n(860511),
    s = n(230606),
    a = n(231977),
    o = n(4940).f,
    l = n(210140),
    u = n(61132),
    c = n(486724),
    d = n(862784),
    _ = n(753609),
    f = n(949186),
    h = n(257943),
    p = n(105712),
    E = "DOMException",
    m = s("Error"),
    g = s(E),
    A = function () {
        u(this, I);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], "Error"),
            i = new g(t, n),
            r = new m(t);
        return (r.name = E), o(i, "stack", a(1, f(r.stack, 1))), c(i, this, A), i;
    },
    I = (A.prototype = g.prototype),
    T = "stack" in new m(E),
    S = "stack" in new g(1, 2),
    N = g && h && Object.getOwnPropertyDescriptor(r, E),
    y = !!N && !(N.writable && N.configurable),
    C = T && !y && !S;
i({ global: !0, constructor: !0, forced: p || C }, { DOMException: C ? A : g });
var v = s(E),
    O = v.prototype;
if (O.constructor !== v) {
    for (var R in (p || o(O, "constructor", a(1, v)), _))
        if (l(_, R)) {
            var b = _[R],
                D = b.s;
            l(v, D) || o(v, D, a(6, b.c));
        }
}
