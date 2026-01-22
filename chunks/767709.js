var r = n(739305),
    i = n(410323),
    a = n(514575),
    s = n(412405),
    o = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    c = r.exportTypedArrayMethod,
    u = i(r.TypedArrayPrototype.sort);
c("toSorted", function (e) {
    void 0 !== e && a(e);
    var t = o(this);
    return u(s(l(t), t), e);
});
