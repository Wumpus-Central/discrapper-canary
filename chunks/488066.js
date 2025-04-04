var e = n(517522),
    o = n(178476),
    i = n(394370),
    u = n(342930);
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
