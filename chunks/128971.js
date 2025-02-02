var i = n(448730),
    r = n(386015),
    a = n(232396),
    o = n(263604);
e.exports = function (e) {
    return function (t) {
        var n = r((t = o(t))) ? a(t) : void 0,
            s = n ? n[0] : t.charAt(0),
            d = n ? i(n, 1).join('') : t.slice(1);
        return s[e]() + d;
    };
};
