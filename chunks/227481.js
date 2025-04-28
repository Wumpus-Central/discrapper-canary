var e = r(840475),
    o = r(914331),
    i = r(77826),
    u = e.aTypedArray;
(0, e.exportTypedArrayMethod)('at', function (t) {
    var n = u(this),
        r = o(n),
        e = i(t),
        c = e >= 0 ? e : r + e;
    return c < 0 || c >= r ? void 0 : n[c];
});
