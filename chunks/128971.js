var r = n(448730),
    i = n(386015),
    l = n(232396),
    s = n(263604);
e.exports = function (e) {
    return function (t) {
        var n = i((t = s(t))) ? l(t) : void 0,
            a = n ? n[0] : t.charAt(0),
            o = n ? r(n, 1).join('') : t.slice(1);
        return a[e]() + o;
    };
};
