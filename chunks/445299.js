var r = n(11537),
    i = n(961123),
    s = n(682653),
    l = n(661233),
    a = n(278757);
e.exports = function (e, t, n, o) {
    if (!l(e)) return e;
    t = i(t, e);
    for (var c = -1, u = t.length, d = u - 1, h = e; null != h && ++c < u; ) {
        var g = a(t[c]),
            m = n;
        if (c != d) {
            var p = h[g];
            void 0 === (m = o ? o(p, g, h) : void 0) && (m = l(p) ? p : s(t[c + 1]) ? [] : {});
        }
        r(h, g, m), (h = h[g]);
    }
    return e;
};
