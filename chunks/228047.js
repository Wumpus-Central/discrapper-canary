"use strict";
var n = r(353841),
    o = r(741623),
    i = r(547210),
    a = r(33831),
    s = r(227106);
e.exports = function (e) {
    if (!s(e)) throw new o("ToPropertyDescriptor requires an object");
    var t = {};
    if (
        (n(e, "enumerable") && (t["[[Enumerable]]"] = a(e.enumerable)),
        n(e, "configurable") && (t["[[Configurable]]"] = a(e.configurable)),
        n(e, "value") && (t["[[Value]]"] = e.value),
        n(e, "writable") && (t["[[Writable]]"] = a(e.writable)),
        n(e, "get"))
    ) {
        var r = e.get;
        if (void 0 !== r && !i(r)) throw new o("getter must be a function");
        t["[[Get]]"] = r;
    }
    if (n(e, "set")) {
        var l = e.set;
        if (void 0 !== l && !i(l)) throw new o("setter must be a function");
        t["[[Set]]"] = l;
    }
    if ((n(t, "[[Get]]") || n(t, "[[Set]]")) && (n(t, "[[Value]]") || n(t, "[[Writable]]")))
        throw new o("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
    return t;
};
