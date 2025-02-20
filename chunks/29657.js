var r = n(570596),
    i = n(294377),
    o = n(360518),
    a = n(691244);
e.exports = function () {
    var e = i('Symbol'),
        t = e && e.prototype,
        n = t && t.valueOf,
        s = o('toPrimitive');
    t &&
        !t[s] &&
        a(
            t,
            s,
            function (e) {
                return r(n, this);
            },
            { arity: 1 }
        );
};
