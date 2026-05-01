"use strict";
var i = n(739305),
    r = n(304052).findLastIndex,
    s = i.aTypedArray;
(0, i.exportTypedArrayMethod)("findLastIndex", function (e) {
    return r(s(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
