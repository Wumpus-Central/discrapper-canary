var r = a(926515),
    n = a(622281),
    o = a(323979),
    _ = a(995739),
    i = a(337856),
    c = a(641236),
    s = TypeError,
    E = c('toPrimitive');
t.exports = function (t, e) {
    if (!n(t) || o(t)) return t;
    var a,
        c = _(t, E);
    if (c) {
        if ((void 0 === e && (e = 'default'), !n((a = r(c, t, e))) || o(a))) return a;
        throw s("Can't convert object to primitive value");
    }
    return void 0 === e && (e = 'number'), i(t, e);
};
