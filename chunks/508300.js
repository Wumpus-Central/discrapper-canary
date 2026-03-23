"use strict";
var r = n(557939),
    i = n(860511),
    s = n(230606),
    a = n(231977),
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
    E = s("Error"),
    g = s(m),
    A = function () {
        u(this, I);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], "Error"),
            r = new g(t, n),
            i = new E(t);
        return (i.name = m), o(r, "stack", a(1, f(i.stack, 1))), c(r, this, A), r;
    },
    I = (A.prototype = g.prototype),
    T = "stack" in new E(m),
    S = "stack" in new g(1, 2),
    y = g && p && Object.getOwnPropertyDescriptor(i, m),
    v = !!y && !(y.writable && y.configurable),
    N = T && !v && !S;
r({ global: !0, constructor: !0, forced: h || N }, { DOMException: N ? A : g });
var C = s(m),
    R = C.prototype;
if (R.constructor !== C) {
    for (var O in (h || o(R, "constructor", a(1, C)), _))
        if (l(_, O)) {
            var b = _[O],
                D = b.s;
            l(C, D) || o(C, D, a(6, b.c));
        }
}
