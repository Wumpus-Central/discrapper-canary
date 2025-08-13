var n = f(448730),
    r = f(386015),
    e = f(232396),
    o = f(263604);
u.exports = function (u) {
    return function (t) {
        var f = r((t = o(t))) ? e(t) : void 0,
            i = f ? f[0] : t.charAt(0),
            c = f ? n(f, 1).join("") : t.slice(1);
        return i[u]() + c;
    };
};
