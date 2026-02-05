"use strict";
var r = n(739305),
    i = n(503199),
    a = n(120394),
    s = r.aTypedArray;
(0, r.exportTypedArrayMethod)("at", function (e) {
    var t = s(this),
        n = i(t),
        r = a(e),
        o = r >= 0 ? r : n + r;
    return o < 0 || o >= n ? void 0 : t[o];
});
