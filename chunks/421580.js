"use strict";
var r = n(741623),
    i = n(899204),
    a = n(159367),
    s = n(14665);
e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!s(e)) throw new r("Assertion failed: `Desc` must be a Property Descriptor");
    return !(i(e) || a(e));
};
