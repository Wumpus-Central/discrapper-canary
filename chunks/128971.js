var r = u(448730),
    n = u(386015),
    f = u(232396),
    o = u(263604);
e.exports = function (e) {
    return function (t) {
        var u = n((t = o(t))) ? f(t) : void 0,
            i = u ? u[0] : t.charAt(0),
            s = u ? r(u, 1).join("") : t.slice(1);
        return i[e]() + s;
    };
};
