"use strict";
var n = r(557939),
    a = r(860511),
    s = r(230606),
    i = r(231977),
    o = r(4940).f,
    l = r(210140),
    u = r(61132),
    c = r(486724),
    d = r(862784),
    f = r(753609),
    p = r(949186),
    h = r(257943),
    m = r(105712),
    _ = "DOMException",
    g = s("Error"),
    v = s(_),
    b = function () {
        u(this, y);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            r = d(e < 2 ? void 0 : arguments[1], "Error"),
            n = new v(t, r),
            a = new g(t);
        return (a.name = _), o(n, "stack", i(1, p(a.stack, 1))), c(n, this, b), n;
    },
    y = (b.prototype = v.prototype),
    E = "stack" in new g(_),
    S = "stack" in new v(1, 2),
    T = v && h && Object.getOwnPropertyDescriptor(a, _),
    x = !!T && !(T.writable && T.configurable),
    w = E && !x && !S;
n({ global: !0, constructor: !0, forced: m || w }, { DOMException: w ? b : v });
var C = s(_),
    D = C.prototype;
if (D.constructor !== C) {
    for (var O in (m || o(D, "constructor", i(1, C)), f))
        if (l(f, O)) {
            var A = f[O],
                M = A.s;
            l(C, M) || o(C, M, i(6, A.c));
        }
}
