var r = n(127849),
    i = n(259821),
    o = n(901175),
    a = n(366843),
    s = n(436207),
    l = n(25124),
    c = n(751736)("iterator"),
    u = a.values,
    d = function (e, t) {
        if (e) {
            if (e[c] !== u)
                try {
                    s(e, c, u);
                } catch (t) {
                    e[c] = u;
                }
            if ((l(e, t, !0), i[t])) {
                for (var n in a)
                    if (e[n] !== a[n])
                        try {
                            s(e, n, a[n]);
                        } catch (t) {
                            e[n] = a[n];
                        }
            }
        }
    };
for (var f in i) d(r[f] && r[f].prototype, f);
d(o, "DOMTokenList");
