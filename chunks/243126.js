(n.d(t, { N: () => b }), n(388685), n(642613), n(290780));
var r = n(73800),
    l = n(392711),
    o = n.n(l),
    a = n(482820),
    i = n(442837),
    s = n(480294),
    c = n(597688),
    u = n(884697),
    d = n(26931),
    p = n(370039),
    g = n(937510),
    f = n(981631),
    h = n(388032);
let b = (e, t) => {
    let n = (0, i.e7)([s.Z], () => s.Z.hasConsented(f.pjP.PERSONALIZATION)),
        l = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[a.m.RECOMMENDED]) ? t : [];
        }, [e]),
        b = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[a.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && n,
        [_, C] = r.useState(m ? a.m.RECOMMENDED : a.m.POPULAR),
        [O, v] = r.useState(0),
        E = (0, d.u)(),
        S = (0, i.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        x = (0, p.a)(),
        y = r.useMemo(() => {
            let e = [];
            return (
                _ === a.m.RECENT
                    ? (e = S)
                    : _ === a.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, n) => {
                            var r, l, o, a;
                            return (null != (o = null == (r = (0, u.Vw)(e, t, !1)) ? void 0 : r.amount) ? o : 0) - (null != (a = null == (l = (0, u.Vw)(n, t, !1)) ? void 0 : l.amount) ? a : 0);
                        }))
                      : _ === a.m.RECOMMENDED
                        ? (e = E(l))
                        : _ === a.m.POPULAR
                          ? (e = E(b))
                          : _ === a.m.RANDOM && (e = o().shuffle(S)),
                x(e)
            );
        }, [_, x, S, t, E, l, b, O]),
        j = r.useCallback(() => {
            (v((e) => e + 1), C(a.m.RANDOM));
        }, []);
    return {
        sortType: _,
        setSortType: C,
        sortedItems: (0, g.l)(y),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: a.m.POPULAR,
                    label: h.intl.string(h.t['1wQj4O'])
                },
                {
                    value: a.m.RECENT,
                    label: h.intl.string(h.t['6NZpt7'])
                },
                {
                    value: a.m.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.RTG4yM)
                }
            ];
            return (
                m &&
                    e.unshift({
                        value: a.m.RECOMMENDED,
                        label: h.intl.string(h.t.JrlKlp)
                    }),
                e
            );
        }, [m]),
        showRecommendationOption: m,
        shuffleProducts: j
    };
};
