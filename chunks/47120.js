var n = e(161581),
    o = e(824232),
    i = e(957833),
    a = e(996173),
    s = e(251069),
    u = e(641236),
    c = u('iterator'),
    f = u('toStringTag'),
    l = a.values,
    p = function (t, r) {
        if (t) {
            if (t[c] !== l)
                try {
                    s(t, c, l);
                } catch (r) {
                    t[c] = l;
                }
            if ((t[f] || s(t, f, r), o[r])) {
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
for (var v in o) p(n[v] && n[v].prototype, v);
p(i, 'DOMTokenList');
