var r = n(543744),
    i = n(436091);
e.exports = function (e, t) {
    var n = -1,
        o = i(e) ? Array(e.length) : [];
    return (
        r(e, function (e, r, i) {
            o[++n] = t(e, r, i);
        }),
        o
    );
};
