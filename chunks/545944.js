var e = n(570596),
    o = n(982665),
    i = n(538769),
    u = n(621528),
    s = n(605722),
    c = n(360518),
    f = TypeError,
    a = c('toPrimitive');
t.exports = function (t, r) {
    if (!o(t) || i(t)) return t;
    var n,
        c = u(t, a);
    if (c) {
        if ((void 0 === r && (r = 'default'), !o((n = e(c, t, r))) || i(n))) return n;
        throw new f("Can't convert object to primitive value");
    }
    return void 0 === r && (r = 'number'), s(t, r);
};
