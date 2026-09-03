var n = e(664886),
    o = e(407057),
    s = e(389150),
    i = e(705323),
    u = e(459505),
    c = e(61748),
    a = TypeError,
    f = c("toPrimitive");
t.exports = function (t, r) {
    if (!o(t) || s(t)) return t;
    var e,
        c = i(t, f);
    if (c) {
        if ((void 0 === r && (r = "default"), !o((e = n(c, t, r))) || s(e))) return e;
        throw new a("Can't convert object to primitive value");
    }
    return void 0 === r && (r = "number"), u(t, r);
};
