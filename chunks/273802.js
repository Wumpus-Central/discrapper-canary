var r = n(860511),
    i = n(503628),
    a = n(927241),
    s = n(739305).NATIVE_ARRAY_BUFFER_VIEWS,
    o = r.ArrayBuffer,
    l = r.Int8Array;
e.exports =
    !s ||
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
        return 1 !== new l(new o(2), 1, void 0).length;
    });
