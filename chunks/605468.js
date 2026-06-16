"use strict";
var i = n(741623),
    r = n(315646),
    s = n(227106),
    a = n(732937);
e.exports = function (e, t) {
    if (!s(e)) throw new i("Assertion failed: Type(O) is not Object");
    if (!a(t)) throw new i("Assertion failed: P is not a Property Key, got " + r(t));
    return e[t];
};
