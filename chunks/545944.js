var r = n(168110),
    i = 4294967294,
    a = Math.floor,
    s = Math.min;
e.exports = function (e, t, n, o) {
    var l = 0,
        c = null == e ? 0 : e.length;
    if (0 === c) return 0;
    for (var u = (t = n(t)) != t, d = null === t, f = r(t), p = void 0 === t; l < c; ) {
        var _ = a((l + c) / 2),
            h = n(e[_]),
            m = void 0 !== h,
            g = null === h,
            E = h == h,
            b = r(h);
        if (u) var y = o || E;
        else
            y = p
                ? E && (o || m)
                : d
                  ? E && m && (o || !g)
                  : f
                    ? E && m && !g && (o || !b)
                    : !g && !b && (o ? h <= t : h < t);
        y ? (l = _ + 1) : (c = _);
    }
    return s(c, i);
};
