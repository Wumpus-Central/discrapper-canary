e.exports = function (e, t, n, r) {
    if (e.size) {
        var i = 0;
        e.reduce(function (e, a, s) {
            return t(e, a) || (n(e) && r(i, s), (i = s)), a;
        }),
            n(e.last()) && r(i, e.count());
    }
};
