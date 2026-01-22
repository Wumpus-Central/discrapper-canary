var r = n(300823),
    i = n(221637),
    a = n(615861),
    s = n(509185),
    o = n(983249);
e.exports = function (e, t, n, l) {
    if (!s(e)) return e;
    t = i(t, e);
    for (var c = -1, u = t.length, d = u - 1, f = e; null != f && ++c < u; ) {
        var p = o(t[c]),
            _ = n;
        if ("__proto__" === p || "constructor" === p || "prototype" === p) break;
        if (c != d) {
            var h = f[p];
            void 0 === (_ = l ? l(h, p, f) : void 0) && (_ = s(h) ? h : a(t[c + 1]) ? [] : {});
        }
        r(f, p, _), (f = f[p]);
    }
    return e;
};
