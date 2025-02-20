var n = r(926515),
    i = r(24033),
    o = r(354848),
    a = r(332916),
    c = r(213265),
    u = TypeError;
t.exports = function (t, e) {
    var r = t.exec;
    if (o(r)) {
        var s = n(r, t, e);
        return null !== s && i(s), s;
    }
    if ('RegExp' === a(t)) return n(c, t, e);
    throw u('RegExp#exec called on incompatible receiver');
};
