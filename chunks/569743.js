var e = r(127849),
    o = r(621523),
    i = r(547514),
    u = r(840475).NATIVE_ARRAY_BUFFER_VIEWS,
    c = e.ArrayBuffer,
    a = e.Int8Array;
t.exports =
    !u ||
    !o(function () {
        a(1);
    }) ||
    !o(function () {
        new a(-1);
    }) ||
    !i(function (t) {
        new a(), new a(null), new a(1.5), new a(t);
    }, !0) ||
    o(function () {
        return 1 !== new a(new c(2), 1, void 0).length;
    });
