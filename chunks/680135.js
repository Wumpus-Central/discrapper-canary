"use strict";
var n = r(741623),
    o = r(732937),
    i = r(833658),
    a = r(227106);
e.exports = function (e, t, r) {
    if (!a(e)) throw new n("Assertion failed: Type(O) is not Object");
    if (!o(t)) throw new n("Assertion failed: P is not a Property Key");
    return i(e, t, { "[[Configurable]]": !0, "[[Enumerable]]": !0, "[[Value]]": r, "[[Writable]]": !0 });
};
