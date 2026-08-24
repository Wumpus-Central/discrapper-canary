"use strict";
var n = r(741623),
    i = r(315646),
    o = r(227106),
    a = r(732937);
e.exports = function (e, t) {
    if (!o(e)) throw new n("Assertion failed: Type(O) is not Object");
    if (!a(t)) throw new n("Assertion failed: P is not a Property Key, got " + i(t));
    return e[t];
};
