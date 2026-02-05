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
    y = "stack" in new E(1, 2),
    S = E && p && Object.getOwnPropertyDescriptor(i, m),
    v = !!S && !(S.writable && S.configurable),
    C = T && !v && !y;
r({ global: !0, constructor: !0, forced: h || C }, { DOMException: C ? A : E });
var b = a(m),
    N = b.prototype;
if (N.constructor !== b) {
    for (var R in (h || o(N, "constructor", s(1, b)), _))
        if (l(_, R)) {
            var O = _[R],
                D = O.s;
            l(b, D) || o(b, D, s(6, O.c));
        }
}
