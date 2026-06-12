var i = n(300823),
    r = n(221637),
    s = n(615861),
    a = n(509185),
    o = n(983249);
e.exports = function (e, t, n, l) {
    if (!a(e)) return e;
    t = r(t, e);
    for (var u = -1, c = t.length, d = c - 1, _ = e; null != _ && ++u < c; ) {
        var h = o(t[u]),
            f = n;
        if ("__proto__" === h || "constructor" === h || "prototype" === h) break;
        if (u != d) {
            var p = _[h];
            void 0 === (f = l ? l(p, h, _) : void 0) && (f = a(p) ? p : s(t[u + 1]) ? [] : {});
        }
        i(_, h, f), (_ = _[h]);
    }
    return e;
};
