var i = r(570596),
    a = r(294377),
    o = r(360518),
    s = r(691244);
e.exports = function () {
    var e = a('Symbol'),
        n = e && e.prototype,
        r = n && n.valueOf,
        l = o('toPrimitive');
    n &&
        !n[l] &&
        s(
            n,
            l,
            function (e) {
                return i(r, this);
            },
            { arity: 1 }
        );
};
