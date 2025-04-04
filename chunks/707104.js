var r = a(580983),
    n = a(434431),
    _ = a(661970),
    o = a(3831),
    i = a(6819),
    c = a(751736),
    s = TypeError,
    E = c('toPrimitive');
t.exports = function (t, e) {
    if (!n(t) || _(t)) return t;
    var a,
        c = o(t, E);
    if (c) {
        if ((void 0 === e && (e = 'default'), !n((a = r(c, t, e))) || _(a))) return a;
        throw new s("Can't convert object to primitive value");
    }
    return void 0 === e && (e = 'number'), i(t, e);
};
