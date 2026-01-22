var r = n(605616);
e.exports = function (e, t) {
    var n = -1,
        i = e.length,
        a = i - 1;
    for (t = void 0 === t ? i : t; ++n < t; ) {
        var s = r(n, a),
            o = e[s];
        (e[s] = e[n]), (e[n] = o);
    }
    return (e.length = t), e;
};
