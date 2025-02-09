var i = n(448730),
    o = n(386015),
    r = n(232396),
    a = n(263604);
e.exports = function (e) {
    return function (t) {
        var n = o((t = a(t))) ? r(t) : void 0,
            c = n ? n[0] : t.charAt(0),
            s = n ? i(n, 1).join('') : t.slice(1);
        return c[e]() + s;
    };
};
