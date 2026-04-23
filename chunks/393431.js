"use strict";
var r = n(739305),
    i = n(503199),
    s = n(120394),
    a = r.aTypedArray;
(0, r.exportTypedArrayMethod)("at", function (e) {
    var t = a(this),
        n = i(t),
        r = s(e),
        o = r >= 0 ? r : n + r;
    return o < 0 || o >= n ? void 0 : t[o];
});
