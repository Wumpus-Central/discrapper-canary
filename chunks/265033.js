"use strict";
var n = e(583296).IteratorPrototype,
    o = e(991207),
    s = e(426261),
    i = e(469516),
    u = e(158610),
    c = function () {
        return this;
    };
t.exports = function (t, r, e, a) {
    var f = r + " Iterator";
    return (t.prototype = o(n, { next: s(+!a, e) })), i(t, f, !1, !0), (u[f] = c), t;
};
