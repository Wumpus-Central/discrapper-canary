var r = n(503628),
    i = n(860511).RegExp,
    a = r(function () {
        var e = i("a", "y");
        return (e.lastIndex = 2), null !== e.exec("abcd");
    }),
    s =
        a ||
        r(function () {
            return !i("a", "y").sticky;
        });
e.exports = {
    BROKEN_CARET:
        a ||
        r(function () {
            var e = i("^r", "gy");
            return (e.lastIndex = 2), null !== e.exec("str");
        }),
    MISSED_STICKY: s,
    UNSUPPORTED_Y: a,
};
