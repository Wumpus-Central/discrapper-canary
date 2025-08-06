e.exports = function (e, t, n, r) {
    if (e.size) {
        var i = 0;
        (e.reduce(function (e, o, a) {
            return (t(e, o) || (n(e) && r(i, a), (i = a)), o);
        }),
            n(e.last()) && r(i, e.count()));
    }
};
