var r = n(161581),
    i = n(936940),
    o = n(80270),
    a = n(192291).NATIVE_ARRAY_BUFFER_VIEWS,
    s = r.ArrayBuffer,
    l = r.Int8Array;
e.exports =
    !a ||
    !i(function () {
        l(1);
    }) ||
    !i(function () {
        new l(-1);
    }) ||
    !o(function (e) {
        new l(), new l(null), new l(1.5), new l(e);
    }, !0) ||
    i(function () {
        return 1 !== new l(new s(2), 1, void 0).length;
    });
