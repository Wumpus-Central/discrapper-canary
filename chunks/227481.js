var r = n(840475),
    i = n(914331),
    a = n(77826),
    o = r.aTypedArray;
(0, r.exportTypedArrayMethod)('at', function (e) {
    var t = o(this),
        n = i(t),
        r = a(e),
        s = r >= 0 ? r : n + r;
    return s < 0 || s >= n ? void 0 : t[s];
});
