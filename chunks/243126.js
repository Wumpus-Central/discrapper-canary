n.d(t, { N: () => h }), n(388685), n(642613), n(290780);
var r = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(482820),
    i = n(442837),
    s = n(480294),
    c = n(597688),
    u = n(884697),
    d = n(26931),
    p = n(370039),
    f = n(937510),
    b = n(981631),
    g = n(388032);
let h = (e, t) => {
    let n = (0, i.e7)([s.Z], () => s.Z.hasConsented(b.pjP.PERSONALIZATION)),
        l = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[o.m.RECOMMENDED]) ? t : [];
        }, [e]),
        h = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[o.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && n,
        [_, C] = r.useState(m ? o.m.RECOMMENDED : o.m.POPULAR),
        [v, O] = r.useState(0),
        x = (0, d.u)(),
        S = (0, i.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        E = (0, p.a)(),
        y = r.useMemo(() => {
            let e = [];
            return (
                _ === o.m.RECENT
                    ? (e = S)
                    : _ === o.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, n) => {
                            var r, l, a, o;
                            return (null != (a = null == (r = (0, u.Vw)(e, t, !1)) ? void 0 : r.amount) ? a : 0) - (null != (o = null == (l = (0, u.Vw)(n, t, !1)) ? void 0 : l.amount) ? o : 0);
                        }))
                      : _ === o.m.RECOMMENDED
                        ? (e = x(l))
                        : _ === o.m.POPULAR
                          ? (e = x(h))
                          : _ === o.m.RANDOM && (e = a().shuffle(S)),
                E(e)
            );
        }, [_, E, S, t, x, l, h, v]),
        j = r.useCallback(() => {
            O((e) => e + 1), C(o.m.RANDOM);
        }, []);
    return {
        sortType: _,
        setSortType: C,
        sortedItems: (0, f.l)(y),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: o.m.POPULAR,
                    label: g.intl.string(g.t['1wQj4O'])
                },
                {
                    value: o.m.RECENT,
                    label: g.intl.string(g.t['6NZpt7'])
                },
                {
                    value: o.m.PRICE_LOW_TO_HIGH,
                    label: g.intl.string(g.t.RTG4yM)
                }
            ];
            return (
                m &&
                    e.unshift({
                        value: o.m.RECOMMENDED,
                        label: g.intl.string(g.t.JrlKlp)
                    }),
                e
            );
        }, [m]),
        showRecommendationOption: m,
        shuffleProducts: j
    };
};
