"use strict";
e(735692);
var n = e(781544),
    o = e(512008),
    s = e(715804),
    i = e(54548),
    u = Array.prototype,
    c = { DOMTokenList: !0, NodeList: !0 };
t.exports = function (t) {
    var r = t.entries;
    return t === u || (s(u, t) && r === u.entries) || o(c, n(t)) ? i : r;
};
