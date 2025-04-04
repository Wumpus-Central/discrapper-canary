var r = n(840475),
    i = n(914331),
    o = n(77826),
    a = r.aTypedArray;
(0, r.exportTypedArrayMethod)('at', function (e) {
    var t = a(this),
        n = i(t),
        r = o(e),
        s = r >= 0 ? r : n + r;
    return s < 0 || s >= n ? void 0 : t[s];
});
