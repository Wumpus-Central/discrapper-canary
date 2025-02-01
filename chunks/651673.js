var e = r(926515),
    i = r(24033),
    o = r(354848),
    u = r(332916),
    a = r(213265),
    c = TypeError;
n.exports = function (n, t) {
    var r = n.exec;
    if (o(r)) {
        var s = e(r, n, t);
        return null !== s && i(s), s;
    }
    if ('RegExp' === u(n)) return e(a, n, t);
    throw c('RegExp#exec called on incompatible receiver');
};
