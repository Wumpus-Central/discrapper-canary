var n = e(739305),
    o = e(503199),
    a = e(120394),
    i = n.aTypedArray;
(0, n.exportTypedArrayMethod)("at", function (r) {
    var t = i(this),
        e = o(t),
        n = a(r),
        p = n >= 0 ? n : e + n;
    return p < 0 || p >= e ? void 0 : t[p];
});
