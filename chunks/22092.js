var i = n(161581),
    r = n(936940),
    a = n(80270),
    s = n(192291).NATIVE_ARRAY_BUFFER_VIEWS,
    o = i.ArrayBuffer,
    l = i.Int8Array;
e.exports =
    !s ||
    !r(function () {
        l(1);
    }) ||
    !r(function () {
        new l(-1);
    }) ||
    !a(function (e) {
        new l(), new l(null), new l(1.5), new l(e);
    }, !0) ||
    r(function () {
        return 1 !== new l(new o(2), 1, void 0).length;
    });
