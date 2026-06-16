var n = r(236553),
    o = r(969474);
e.exports = function (e, t) {
    var r = -1,
        a = o(e) ? Array(e.length) : [];
    return (
        n(e, function (e, n, o) {
            a[++r] = t(e, n, o);
        }),
        a
    );
};
