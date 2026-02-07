"use strict";
var r = n(557939),
    i = n(860511),
    a = n(230606),
    s = n(231977),
    o = n(4940).f,
    l = n(210140),
    u = n(61132),
    c = n(486724),
    d = n(862784),
    _ = n(753609),
    f = n(949186),
    p = n(257943),
    h = n(105712),
    m = "DOMException",
    g = a("Error"),
    E = a(m),
    A = function () {
        u(this, I);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], "Error"),
            r = new E(t, n),
            i = new g(t);
        return (i.name = m), o(r, "stack", s(1, f(i.stack, 1))), c(r, this, A), r;
    },
    I = (A.prototype = E.prototype),
    T = "stack" in new g(m),
    S = "stack" in new E(1, 2),
    y = E && p && Object.getOwnPropertyDescriptor(i, m),
    v = !!y && !(y.writable && y.configurable),
    C = T && !v && !S;
r({ global: !0, constructor: !0, forced: h || C }, { DOMException: C ? A : E });
var N = a(m),
    b = N.prototype;
if (b.constructor !== N) {
    for (var R in (h || o(b, "constructor", s(1, N)), _))
        if (l(_, R)) {
            var O = _[R],
                D = O.s;
            l(N, D) || o(N, D, s(6, O.c));
        }
}
