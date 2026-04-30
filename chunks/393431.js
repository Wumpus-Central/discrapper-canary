"use strict";
var i = n(739305),
    r = n(503199),
    s = n(120394),
    a = i.aTypedArray;
(0, i.exportTypedArrayMethod)("at", function (e) {
    var t = a(this),
        n = r(t),
        i = s(e),
        o = i >= 0 ? i : n + i;
    return o < 0 || o >= n ? void 0 : t[o];
});
