var r = n(999843),
    a = n(529030),
    o = n(556598),
    i = n(794779),
    s = TypeError,
    l = "Reduce of empty array with no initial value",
    c = function (e) {
        return function (t, n, c, u) {
            var d = a(t),
                p = o(d),
                h = i(d);
            if ((r(n), 0 === h && c < 2)) throw new s(l);
            var f = e ? h - 1 : 0,
                m = e ? -1 : 1;
            if (c < 2)
                for (;;) {
                    if (f in p) {
                        (u = p[f]), (f += m);
                        break;
                    }
                    if (((f += m), e ? f < 0 : h <= f)) throw new s(l);
                }
            for (; e ? f >= 0 : h > f; f += m) f in p && (u = n(u, p[f], f, d));
            return u;
        };
    };
e.exports = {
    left: c(!1),
    right: c(!0),
};
