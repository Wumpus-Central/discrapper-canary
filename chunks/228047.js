"use strict";
var r = n(353841),
    i = n(741623),
    a = n(547210),
    s = n(33831),
    o = n(227106);
e.exports = function (e) {
    if (!o(e)) throw new i("ToPropertyDescriptor requires an object");
    var t = {};
    if (
        (r(e, "enumerable") && (t["[[Enumerable]]"] = s(e.enumerable)),
        r(e, "configurable") && (t["[[Configurable]]"] = s(e.configurable)),
        r(e, "value") && (t["[[Value]]"] = e.value),
        r(e, "writable") && (t["[[Writable]]"] = s(e.writable)),
        r(e, "get"))
    ) {
        var n = e.get;
        if (void 0 !== n && !a(n)) throw new i("getter must be a function");
        t["[[Get]]"] = n;
    }
    if (r(e, "set")) {
        var l = e.set;
        if (void 0 !== l && !a(l)) throw new i("setter must be a function");
        t["[[Set]]"] = l;
    }
    if ((r(t, "[[Get]]") || r(t, "[[Set]]")) && (r(t, "[[Value]]") || r(t, "[[Writable]]")))
        throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
    return t;
};
