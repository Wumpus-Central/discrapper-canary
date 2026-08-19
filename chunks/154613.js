"use strict";
var n = r(741623),
    o = r(227106),
    i = r(732937);
e.exports = function (e, t) {
    if (!o(e)) throw new n("Assertion failed: `O` must be an Object");
    if (!i(t)) throw new n("Assertion failed: `P` must be a Property Key");
    return t in e;
};
