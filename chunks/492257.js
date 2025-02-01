var i = n(192291),
    r = n(581031),
    a = n(526988),
    s = n(436330),
    o = i.aTypedArray,
    l = i.getTypedArrayConstructor,
    u = i.exportTypedArrayMethod,
    c = r(i.TypedArrayPrototype.sort);
u('toSorted', function (e) {
    void 0 !== e && a(e);
    var t = o(this);
    return c(s(l(t), t), e);
});
