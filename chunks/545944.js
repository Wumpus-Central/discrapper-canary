var i = r(570596),
    a = r(982665),
    o = r(538769),
    s = r(621528),
    l = r(605722),
    u = r(360518),
    c = TypeError,
    d = u('toPrimitive');
e.exports = function (e, n) {
    if (!a(e) || o(e)) return e;
    var r,
        u = s(e, d);
    if (u) {
        if ((void 0 === n && (n = 'default'), !a((r = i(u, e, n))) || o(r))) return r;
        throw new c("Can't convert object to primitive value");
    }
    return void 0 === n && (n = 'number'), l(e, n);
};
