var r = n(805100),
    i = n(196322),
    a = n(830911),
    o = n(706627),
    s = n(828091);
e.exports = function (e, t, n, l) {
    if (!o(e)) return e;
    t = i(t, e);
    for (var c = -1, u = t.length, d = u - 1, f = e; null != f && ++c < u; ) {
        var p = s(t[c]),
            _ = n;
        if ("__proto__" === p || "constructor" === p || "prototype" === p) break;
        if (c != d) {
            var m = f[p];
            void 0 === (_ = l ? l(m, p, f) : void 0) && (_ = o(m) ? m : a(t[c + 1]) ? [] : {});
        }
        r(f, p, _), (f = f[p]);
    }
    return e;
};
