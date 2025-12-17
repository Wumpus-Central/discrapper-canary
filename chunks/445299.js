var r = n(11537),
    i = n(961123),
    s = n(682653),
    a = n(661233),
    l = n(278757);
e.exports = function (e, t, n, o) {
    if (!a(e)) return e;
    t = i(t, e);
    for (var c = -1, u = t.length, d = u - 1, h = e; null != h && ++c < u; ) {
        var f = l(t[c]),
            g = n;
        if (c != d) {
            var m = h[f];
            void 0 === (g = o ? o(m, f, h) : void 0) && (g = a(m) ? m : s(t[c + 1]) ? [] : {});
        }
        r(h, f, g), (h = h[f]);
    }
    return e;
};
