var r = n(621523),
    i = n(127849).RegExp,
    o = r(function () {
        var e = i("a", "y");
        return (e.lastIndex = 2), null !== e.exec("abcd");
    }),
    a =
        o ||
        r(function () {
            return !i("a", "y").sticky;
        });
e.exports = {
    BROKEN_CARET:
        o ||
        r(function () {
            var e = i("^r", "gy");
            return (e.lastIndex = 2), null !== e.exec("str");
        }),
    MISSED_STICKY: a,
    UNSUPPORTED_Y: o,
};
