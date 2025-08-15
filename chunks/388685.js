var r = n(127849),
    i = n(259821),
    a = n(901175),
    o = n(366843),
    s = n(436207),
    l = n(25124),
    c = n(751736)("iterator"),
    u = o.values,
    d = function (e, t) {
        if (e) {
            if (e[c] !== u)
                try {
                    s(e, c, u);
                } catch (t) {
                    e[c] = u;
                }
            if ((l(e, t, !0), i[t])) {
                for (var n in o)
                    if (e[n] !== o[n])
                        try {
                            s(e, n, o[n]);
                        } catch (t) {
                            e[n] = o[n];
                        }
            }
        }
    };
for (var f in i) d(r[f] && r[f].prototype, f);
d(a, "DOMTokenList");
