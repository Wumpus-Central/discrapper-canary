"use strict";
var n = e(675879),
    o = e(496133),
    s = e(57284),
    i = e(7662),
    u = e(693755),
    c = n(i),
    a = n("".slice),
    f = Math.ceil,
    p = function (t) {
        return function (r, e, n) {
            var i,
                p,
                l = s(u(r)),
                v = o(e),
                y = l.length,
                h = void 0 === n ? " " : s(n);
            return v <= y || "" === h
                ? l
                : ((p = c(h, f((i = v - y) / h.length))).length > i && (p = a(p, 0, i)), t ? l + p : p + l);
        };
    };
t.exports = { start: p(!1), end: p(!0) };
