var n = e(739305),
    o = e(410323),
    a = e(514575),
    i = e(412405),
    p = n.aTypedArray,
    u = n.getTypedArrayConstructor,
    y = n.exportTypedArrayMethod,
    f = o(n.TypedArrayPrototype.sort);
y("toSorted", function (r) {
    void 0 !== r && a(r);
    var t = p(this);
    return f(i(u(t), t), r);
});
