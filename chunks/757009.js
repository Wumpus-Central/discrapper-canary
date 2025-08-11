var a = n(785902),
    i = n(800128),
    r = n(256098),
    s = n(290677);
e.exports = function (e, t) {
    return function (n, o) {
        var d = s(n) ? a : i,
            c = t ? t() : {};
        return d(n, e, r(o, 2), c);
    };
};
