"use strict";
var n = r(741623),
    o = r(899204),
    i = r(159367),
    a = r(14665);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!a(e)) throw new n("Assertion failed: `Desc` must be a Property Descriptor");
    return !(o(e) || i(e));
};
