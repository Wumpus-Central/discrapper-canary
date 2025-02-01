var e = r(936940),
    i = r(161581).RegExp,
    o = e(function () {
        var n = i('a', 'y');
        return (n.lastIndex = 2), null !== n.exec('abcd');
    }),
    u =
        o ||
        e(function () {
            return !i('a', 'y').sticky;
        }),
    a =
        o ||
        e(function () {
            var n = i('^r', 'gy');
            return (n.lastIndex = 2), null !== n.exec('str');
        });
n.exports = {
    BROKEN_CARET: a,
    MISSED_STICKY: u,
    UNSUPPORTED_Y: o
};
