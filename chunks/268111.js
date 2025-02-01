var i = n(192291),
    r = n(82246).findLast,
    a = i.aTypedArray;
(0, i.exportTypedArrayMethod)('findLast', function (e) {
    return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
