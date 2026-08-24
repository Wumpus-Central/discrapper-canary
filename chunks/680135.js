"use strict";
var n = r(741623),
    i = r(732937),
    o = r(833658),
    a = r(227106);
e.exports = function (e, t, r) {
    if (!a(e)) throw new n("Assertion failed: Type(O) is not Object");
    if (!i(t)) throw new n("Assertion failed: P is not a Property Key");
    return o(e, t, { "[[Configurable]]": !0, "[[Enumerable]]": !0, "[[Value]]": r, "[[Writable]]": !0 });
};
