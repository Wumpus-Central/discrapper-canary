var n = e(739305),
    o = e(503199),
    i = e(120394),
    a = n.aTypedArray;
(0, n.exportTypedArrayMethod)("at", function (r) {
    var t = a(this),
        e = o(t),
        n = i(r),
        u = n >= 0 ? n : e + n;
    return u < 0 || u >= e ? void 0 : t[u];
});
