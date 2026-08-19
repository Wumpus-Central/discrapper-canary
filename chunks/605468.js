"use strict";
var n = r(741623),
    o = r(315646),
    i = r(227106),
    a = r(732937);
e.exports = function (e, t) {
    if (!i(e)) throw new n("Assertion failed: Type(O) is not Object");
    if (!a(t)) throw new n("Assertion failed: P is not a Property Key, got " + o(t));
    return e[t];
};
