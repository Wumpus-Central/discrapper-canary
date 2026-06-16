"use strict";
var n = e(950059),
    o = e(164336).f,
    s = e(180734),
    i = e(512008),
    u = e(861546),
    c = e(61748)("toStringTag");
t.exports = function (t, r, e, a) {
    var f = e ? t : t && t.prototype;
    f && (i(f, c) || o(f, c, { configurable: !0, value: r }), a && !n && s(f, "toString", u));
};
