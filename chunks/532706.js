"use strict";
var i = n(739305),
    r = n(304052).findLast,
    s = i.aTypedArray;
(0, i.exportTypedArrayMethod)("findLast", function (e) {
    return r(s(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
