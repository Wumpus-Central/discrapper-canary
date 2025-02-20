var r = n(192291),
    i = n(581031),
    o = n(526988),
    a = n(436330),
    s = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    c = r.exportTypedArrayMethod,
    u = i(r.TypedArrayPrototype.sort);
c('toSorted', function (e) {
    void 0 !== e && o(e);
    var t = s(this);
    return u(a(l(t), t), e);
});
