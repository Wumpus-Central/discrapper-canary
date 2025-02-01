var r = a(161581),
    n = a(824232),
    o = a(957833),
    _ = a(996173),
    i = a(251069),
    c = a(641236),
    s = c('iterator'),
    E = c('toStringTag'),
    l = _.values,
    u = function (t, e) {
        if (t) {
            if (t[s] !== l)
                try {
                    i(t, s, l);
                } catch (e) {
                    t[s] = l;
                }
            if ((t[E] || i(t, E, e), n[e])) {
                for (var a in _)
                    if (t[a] !== _[a])
                        try {
                            i(t, a, _[a]);
                        } catch (e) {
                            t[a] = _[a];
                        }
            }
        }
    };
for (var I in n) u(r[I] && r[I].prototype, I);
u(o, 'DOMTokenList');
