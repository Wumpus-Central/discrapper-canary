var n = e(739305),
    o = e(304052).findLast,
    a = n.aTypedArray;
(0, n.exportTypedArrayMethod)("findLast", function (r) {
    return o(a(this), r, arguments.length > 1 ? arguments[1] : void 0);
});
