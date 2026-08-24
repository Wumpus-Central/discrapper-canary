"use strict";
var n = r(741623),
    i = r(899204),
    o = r(159367),
    a = r(14665);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!a(e)) throw new n("Assertion failed: `Desc` must be a Property Descriptor");
    return !(i(e) || o(e));
};
