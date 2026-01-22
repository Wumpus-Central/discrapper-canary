var r = n(739305),
    i = n(304052).findLastIndex,
    a = r.aTypedArray;
(0, r.exportTypedArrayMethod)("findLastIndex", function (e) {
    return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
