"use strict";
var r = n(739305),
    i = n(304052).findLastIndex,
    s = r.aTypedArray;
(0, r.exportTypedArrayMethod)("findLastIndex", function (e) {
    return i(s(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
