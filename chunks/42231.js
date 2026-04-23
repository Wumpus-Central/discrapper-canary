var n = e(739305),
    o = e(304052).findLastIndex,
    a = n.aTypedArray;
(0, n.exportTypedArrayMethod)("findLastIndex", function (r) {
    return o(a(this), r, arguments.length > 1 ? arguments[1] : void 0);
});
