var r = n(570596),
    i = n(982665),
    o = n(538769),
    a = n(621528),
    s = n(605722),
    l = n(360518),
    c = TypeError,
    u = l('toPrimitive');
e.exports = function (e, t) {
    if (!i(e) || o(e)) return e;
    var n,
        l = a(e, u);
    if (l) {
        if ((void 0 === t && (t = 'default'), !i((n = r(l, e, t))) || o(n))) return n;
        throw new c("Can't convert object to primitive value");
    }
    return void 0 === t && (t = 'number'), s(e, t);
};
