var i = n(570596),
    r = n(294377),
    a = n(360518),
    s = n(691244);
e.exports = function () {
    var e = r('Symbol'),
        t = e && e.prototype,
        n = t && t.valueOf,
        o = a('toPrimitive');
    t &&
        !t[o] &&
        s(
            t,
            o,
            function (e) {
                return i(n, this);
            },
            { arity: 1 }
        );
};
