"use strict";
var r = n(739305),
    i = n(304052).findLast,
    s = r.aTypedArray;
(0, r.exportTypedArrayMethod)("findLast", function (e) {
    return i(s(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
