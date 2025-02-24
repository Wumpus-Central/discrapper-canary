var n = r(625898),
    o = r(771701);
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
