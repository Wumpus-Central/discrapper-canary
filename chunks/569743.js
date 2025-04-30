var r = n(127849),
    i = n(621523),
    a = n(547514),
    o = n(840475).NATIVE_ARRAY_BUFFER_VIEWS,
    s = r.ArrayBuffer,
    l = r.Int8Array;
e.exports =
    !o ||
    !i(function () {
        l(1);
    }) ||
    !i(function () {
        new l(-1);
    }) ||
    !a(function (e) {
        new l(), new l(null), new l(1.5), new l(e);
    }, !0) ||
    i(function () {
        return 1 !== new l(new s(2), 1, void 0).length;
    });
