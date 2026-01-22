var n = e(664886),
    o = e(683570),
    s = e(61748),
    i = e(735811);
t.exports = function () {
    var t = o("Symbol"),
        r = t && t.prototype,
        e = r && r.valueOf,
        u = s("toPrimitive");
    r &&
        !r[u] &&
        i(
            r,
            u,
            function (t) {
                return n(e, this);
            },
            {
                arity: 1,
            },
        );
};
