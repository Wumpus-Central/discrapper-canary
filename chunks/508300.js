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
    h = n(949186),
    f = n(257943),
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
        return (r.name = E), o(i, "stack", a(1, h(r.stack, 1))), c(i, this, A), i;
    },
    I = (A.prototype = g.prototype),
    T = "stack" in new m(E),
    S = "stack" in new g(1, 2),
    y = g && f && Object.getOwnPropertyDescriptor(r, E),
    C = !!y && !(y.writable && y.configurable),
    N = T && !C && !S;
i({ global: !0, constructor: !0, forced: p || N }, { DOMException: N ? A : g });
var v = s(E),
    R = v.prototype;
if (R.constructor !== v) {
    for (var O in (p || o(R, "constructor", a(1, v)), _))
        if (l(_, O)) {
            var b = _[O],
                D = b.s;
            l(v, D) || o(v, D, a(6, b.c));
        }
}
