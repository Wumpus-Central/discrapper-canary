var r = n(168110),
    i = Math.floor,
    s = Math.min;
e.exports = function (e, t, n, a) {
    var o = 0,
        l = null == e ? 0 : e.length;
    if (0 === l) return 0;
    for (var u = (t = n(t)) != t, d = null === t, c = r(t), _ = void 0 === t; o < l; ) {
        var f = i((o + l) / 2),
            E = n(e[f]),
            h = void 0 !== E,
            p = null === E,
            m = E == E,
            g = r(E);
        if (u) var A = a || m;
        else
            A = _
                ? m && (a || h)
                : d
                  ? m && h && (a || !p)
                  : c
                    ? m && h && !p && (a || !g)
                    : !p && !g && (a ? E <= t : E < t);
        A ? (o = f + 1) : (l = f);
    }
    return s(l, 0xfffffffe);
};
