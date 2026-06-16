"use strict";
var i = n(741623),
    r = n(353841),
    s = {
        __proto__: null,
        "[[Configurable]]": !0,
        "[[Enumerable]]": !0,
        "[[Get]]": !0,
        "[[Set]]": !0,
        "[[Value]]": !0,
        "[[Writable]]": !0,
    };
e.exports = function (e) {
    if (!e || "object" != typeof e) return !1;
    for (var t in e) if (r(e, t) && !s[t]) return !1;
    var n = r(e, "[[Value]]") || r(e, "[[Writable]]"),
        a = r(e, "[[Get]]") || r(e, "[[Set]]");
    if (n && a) throw new i("Property Descriptors may not be both accessor and data descriptors");
    return !0;
};
