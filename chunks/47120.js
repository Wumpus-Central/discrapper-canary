var n = e(161581),
    o = e(824232),
    i = e(957833),
    u = e(996173),
    a = e(251069),
    c = e(641236),
    s = c('iterator'),
    f = c('toStringTag'),
    l = u.values,
    p = function (t, r) {
        if (t) {
            if (t[s] !== l)
                try {
                    a(t, s, l);
                } catch (r) {
                    t[s] = l;
                }
            if ((t[f] || a(t, f, r), o[r])) {
                for (var e in u)
                    if (t[e] !== u[e])
                        try {
                            a(t, e, u[e]);
                        } catch (r) {
                            t[e] = u[e];
                        }
            }
        }
    };
for (var v in o) p(n[v] && n[v].prototype, v);
p(i, 'DOMTokenList');
