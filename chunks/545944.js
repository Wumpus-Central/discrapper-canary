var i = n(570596),
    r = n(982665),
    a = n(538769),
    s = n(621528),
    o = n(605722),
    l = n(360518),
    u = TypeError,
    c = l('toPrimitive');
e.exports = function (e, t) {
    if (!r(e) || a(e)) return e;
    var n,
        l = s(e, c);
    if (l) {
        if ((void 0 === t && (t = 'default'), !r((n = i(l, e, t))) || a(n))) return n;
        throw new u("Can't convert object to primitive value");
    }
    return void 0 === t && (t = 'number'), o(e, t);
};
