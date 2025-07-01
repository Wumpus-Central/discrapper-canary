var r = n(580983),
    i = n(434431),
    a = n(661970),
    o = n(3831),
    s = n(6819),
    l = n(751736),
    c = TypeError,
    u = l('toPrimitive');
e.exports = function (e, t) {
    if (!i(e) || a(e)) return e;
    var n,
        l = o(e, u);
    if (l) {
        if ((void 0 === t && (t = 'default'), !i((n = r(l, e, t))) || a(n))) return n;
        throw new c("Can't convert object to primitive value");
    }
    return (void 0 === t && (t = 'number'), s(e, t));
};
