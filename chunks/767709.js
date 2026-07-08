var n = e(739305),
    o = e(410323),
    i = e(514575),
    a = e(412405),
    u = n.aTypedArray,
    c = n.getTypedArrayConstructor,
    f = n.exportTypedArrayMethod,
    p = o(n.TypedArrayPrototype.sort);
f("toSorted", function (r) {
    void 0 !== r && i(r);
    var t = u(this);
    return p(a(c(t), t), r);
});
