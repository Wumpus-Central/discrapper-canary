"use strict";
var i = n(353841),
    r = n(741623),
    s = n(547210),
    a = n(33831),
    o = n(227106);
e.exports = function (e) {
    if (!o(e)) throw new r("ToPropertyDescriptor requires an object");
    var t = {};
    if (
        (i(e, "enumerable") && (t["[[Enumerable]]"] = a(e.enumerable)),
        i(e, "configurable") && (t["[[Configurable]]"] = a(e.configurable)),
        i(e, "value") && (t["[[Value]]"] = e.value),
        i(e, "writable") && (t["[[Writable]]"] = a(e.writable)),
        i(e, "get"))
    ) {
        var n = e.get;
        if (void 0 !== n && !s(n)) throw new r("getter must be a function");
        t["[[Get]]"] = n;
    }
    if (i(e, "set")) {
        var l = e.set;
        if (void 0 !== l && !s(l)) throw new r("setter must be a function");
        t["[[Set]]"] = l;
    }
    if ((i(t, "[[Get]]") || i(t, "[[Set]]")) && (i(t, "[[Value]]") || i(t, "[[Writable]]")))
        throw new r("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
    return t;
};
