var i = n(448730),
    r = n(386015),
    l = n(232396),
    s = n(263604);
e.exports = function (e) {
    return function (t) {
        var n = r((t = s(t))) ? l(t) : void 0,
            a = n ? n[0] : t.charAt(0),
            o = n ? i(n, 1).join('') : t.slice(1);
        return a[e]() + o;
    };
};
