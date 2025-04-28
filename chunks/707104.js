var e = r(580983),
    o = r(434431),
    i = r(661970),
    u = r(3831),
    c = r(6819),
    a = r(751736),
    f = TypeError,
    s = a('toPrimitive');
t.exports = function (t, n) {
    if (!o(t) || i(t)) return t;
    var r,
        a = u(t, s);
    if (a) {
        if ((void 0 === n && (n = 'default'), !o((r = e(a, t, n))) || i(r))) return r;
        throw new f("Can't convert object to primitive value");
    }
    return void 0 === n && (n = 'number'), c(t, n);
};
