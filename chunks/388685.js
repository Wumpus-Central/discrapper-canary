var n = e(127849),
    o = e(259821),
    i = e(901175),
    a = e(366843),
    s = e(436207),
    u = e(25124),
    c = e(751736)('iterator'),
    f = a.values,
    l = function (t, r) {
        if (t) {
            if (t[c] !== f)
                try {
                    s(t, c, f);
                } catch (r) {
                    t[c] = f;
                }
            if ((u(t, r, !0), o[r])) {
                for (var e in a)
                    if (t[e] !== a[e])
                        try {
                            s(t, e, a[e]);
                        } catch (r) {
                            t[e] = a[e];
                        }
            }
        }
    };
for (var p in o) l(n[p] && n[p].prototype, p);
l(i, 'DOMTokenList');
