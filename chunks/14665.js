var r = n(741623),
    i = n(353841),
    a = {
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
    for (var t in e) if (i(e, t) && !a[t]) return !1;
    var n = i(e, "[[Value]]") || i(e, "[[Writable]]"),
        s = i(e, "[[Get]]") || i(e, "[[Set]]");
    if (n && s) throw new r("Property Descriptors may not be both accessor and data descriptors");
    return !0;
};
