var r = a(161581),
    n = a(824232),
    _ = a(957833),
    o = a(996173),
    i = a(251069),
    c = a(641236),
    s = c('iterator'),
    E = c('toStringTag'),
    l = o.values,
    u = function (t, e) {
        if (t) {
            if (t[s] !== l)
                try {
                    i(t, s, l);
                } catch (e) {
                    t[s] = l;
                }
            if ((t[E] || i(t, E, e), n[e])) {
                for (var a in o)
                    if (t[a] !== o[a])
                        try {
                            i(t, a, o[a]);
                        } catch (e) {
                            t[a] = o[a];
                        }
            }
        }
    };
for (var I in n) u(r[I] && r[I].prototype, I);
u(_, 'DOMTokenList');
