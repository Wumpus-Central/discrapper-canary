var e = n(570596),
    o = n(294377),
    i = n(360518),
    u = n(691244);
t.exports = function () {
    var t = o('Symbol'),
        r = t && t.prototype,
        n = r && r.valueOf,
        s = i('toPrimitive');
    r &&
        !r[s] &&
        u(
            r,
            s,
            function (t) {
                return e(n, this);
            },
            { arity: 1 }
        );
};
