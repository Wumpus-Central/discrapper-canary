var n = r(741623),
    i = r(353841),
    o = {
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
    for (var t in e) if (i(e, t) && !o[t]) return !1;
    var r = i(e, "[[Value]]") || i(e, "[[Writable]]"),
        a = i(e, "[[Get]]") || i(e, "[[Set]]");
    if (r && a) throw new n("Property Descriptors may not be both accessor and data descriptors");
    return !0;
};
