"use strict";
var r = n(741623),
    i = n(227106),
    a = n(732937);
e.exports = function (e, t) {
    if (!i(e)) throw new r("Assertion failed: `O` must be an Object");
    if (!a(t)) throw new r("Assertion failed: `P` must be a Property Key");
    return t in e;
};
