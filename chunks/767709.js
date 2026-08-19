var n = e(739305),
    o = e(410323),
    a = e(514575),
    i = e(412405),
    p = n.aTypedArray,
    f = n.getTypedArrayConstructor,
    u = n.exportTypedArrayMethod,
    y = o(n.TypedArrayPrototype.sort);
u("toSorted", function (r) {
    void 0 !== r && a(r);
    var t = p(this);
    return y(i(f(t), t), r);
});
