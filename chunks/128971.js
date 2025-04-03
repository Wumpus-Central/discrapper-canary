var i = n(448730),
    r = n(386015),
    s = n(232396),
    o = n(263604);
e.exports = function (e) {
    return function (t) {
        var n = r((t = o(t))) ? s(t) : void 0,
            l = n ? n[0] : t.charAt(0),
            a = n ? i(n, 1).join('') : t.slice(1);
        return l[e]() + a;
    };
};
