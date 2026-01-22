var r = n(111898),
    i = n(147818),
    s = n(978260),
    l = n(646344),
    a = n(63532);
e.exports = function (e, t, n, o) {
    if (!l(e)) return e;
    t = i(t, e);
    for (var c = -1, u = t.length, d = u - 1, h = e; null != h && ++c < u; ) {
        var f = a(t[c]),
            p = n;
        if (c != d) {
            var g = h[f];
            void 0 === (p = o ? o(g, f, h) : void 0) && (p = l(g) ? g : s(t[c + 1]) ? [] : {});
        }
        r(h, f, p), (h = h[f]);
    }
    return e;
};
