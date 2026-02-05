"use strict";
var r = n(741623),
    i = n(732937),
    a = n(833658),
    s = n(227106);
e.exports = function (e, t, n) {
    if (!s(e)) throw new r("Assertion failed: Type(O) is not Object");
    if (!i(t)) throw new r("Assertion failed: P is not a Property Key");
    return a(e, t, { "[[Configurable]]": !0, "[[Enumerable]]": !0, "[[Value]]": n, "[[Writable]]": !0 });
};
