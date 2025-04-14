var r = n(448730),
    i = n(386015),
    s = n(232396),
    l = n(263604);
e.exports = function (e) {
    return function (t) {
        var n = i((t = l(t))) ? s(t) : void 0,
            a = n ? n[0] : t.charAt(0),
            o = n ? r(n, 1).join('') : t.slice(1);
        return a[e]() + o;
    };
};
