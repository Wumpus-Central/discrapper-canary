var r = n(840475),
    i = n(1266).findLast,
    a = r.aTypedArray;
(0, r.exportTypedArrayMethod)('findLast', function (e) {
    return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
