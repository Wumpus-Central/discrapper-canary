"use strict";
var n = r(741623),
    o = r(353841),
    i = r(14665);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!i(e)) throw new n("Assertion failed: `Desc` must be a Property Descriptor");
    return !!o(e, "[[Value]]") || !!o(e, "[[Writable]]");
};
