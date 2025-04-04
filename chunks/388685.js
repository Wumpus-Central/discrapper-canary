var r = a(127849),
    n = a(259821),
    _ = a(901175),
    o = a(366843),
    i = a(436207),
    c = a(25124),
    s = a(751736)('iterator'),
    E = o.values,
    l = function (t, e) {
        if (t) {
            if (t[s] !== E)
                try {
                    i(t, s, E);
                } catch (e) {
                    t[s] = E;
                }
            if ((c(t, e, !0), n[e])) {
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
for (var u in n) l(r[u] && r[u].prototype, u);
l(_, 'DOMTokenList');
