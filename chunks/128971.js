var u = e(448730),
    n = e(386015),
    o = e(232396),
    f = e(263604);
t.exports = function (t) {
    return function (r) {
        var e = n((r = f(r))) ? o(r) : void 0,
            i = e ? e[0] : r.charAt(0),
            a = e ? u(e, 1).join('') : r.slice(1);
        return i[t]() + a;
    };
};
