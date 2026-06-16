"use strict";
var i = n(741623),
    r = n(732937),
    s = n(833658),
    a = n(227106);
e.exports = function (e, t, n) {
    if (!a(e)) throw new i("Assertion failed: Type(O) is not Object");
    if (!r(t)) throw new i("Assertion failed: P is not a Property Key");
    return s(e, t, { "[[Configurable]]": !0, "[[Enumerable]]": !0, "[[Value]]": n, "[[Writable]]": !0 });
};
