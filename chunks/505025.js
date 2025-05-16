var r = n(209957),
    i = n(840475),
    a = i.aTypedArray,
    o = i.exportTypedArrayMethod,
    s = i.getTypedArrayConstructor;
o('toReversed', function () {
    return r(a(this), s(this));
});
