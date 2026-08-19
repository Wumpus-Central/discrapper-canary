"use strict";
var n = r(741623),
    o = r(353841),
    i = {
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
    for (var t in e) if (o(e, t) && !i[t]) return !1;
    var r = o(e, "[[Value]]") || o(e, "[[Writable]]"),
        a = o(e, "[[Get]]") || o(e, "[[Set]]");
    if (r && a) throw new n("Property Descriptors may not be both accessor and data descriptors");
    return !0;
};
