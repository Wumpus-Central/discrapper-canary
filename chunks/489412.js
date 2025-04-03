var r = a(936940),
    n = a(161581).RegExp,
    _ = r(function () {
        var t = n('a', 'y');
        return (t.lastIndex = 2), null !== t.exec('abcd');
    }),
    o =
        _ ||
        r(function () {
            return !n('a', 'y').sticky;
        });
t.exports = {
    BROKEN_CARET:
        _ ||
        r(function () {
            var t = n('^r', 'gy');
            return (t.lastIndex = 2), null !== t.exec('str');
        }),
    MISSED_STICKY: o,
    UNSUPPORTED_Y: _
};
