var n = r(621523),
    i = r(127849).RegExp,
    s = n(function () {
        var t = i('a', 'y');
        return (t.lastIndex = 2), null !== t.exec('abcd');
    }),
    a =
        s ||
        n(function () {
            return !i('a', 'y').sticky;
        });
t.exports = {
    BROKEN_CARET:
        s ||
        n(function () {
            var t = i('^r', 'gy');
            return (t.lastIndex = 2), null !== t.exec('str');
        }),
    MISSED_STICKY: a,
    UNSUPPORTED_Y: s
};
