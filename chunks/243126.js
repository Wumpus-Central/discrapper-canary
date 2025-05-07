n.d(t, { N: () => h }), n(388685), n(642613), n(290780);
var r = n(73800),
    l = n(392711),
    i = n.n(l),
    a = n(482820),
    o = n(442837),
    s = n(480294),
    c = n(597688),
    u = n(884697),
    d = n(26931),
    f = n(370039),
    b = n(937510),
    p = n(981631),
    g = n(388032);
let h = (e, t) => {
    let n = (0, o.e7)([s.Z], () => s.Z.hasConsented(p.pjP.PERSONALIZATION)),
        l = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[a.m.RECOMMENDED]) ? t : [];
        }, [e]),
        h = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[a.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && n,
        [_, C] = r.useState(m ? a.m.RECOMMENDED : a.m.POPULAR),
        [v, O] = r.useState(0),
        x = (0, d.u)(),
        S = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        j = (0, f.a)(),
        y = r.useMemo(() => {
            let e = [];
            return (
                _ === a.m.RECENT
                    ? (e = S)
                    : _ === a.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, n) => {
                            var r, l, i, a;
                            return (null != (i = null == (r = (0, u.Vw)(e, t, !1)) ? void 0 : r.amount) ? i : 0) - (null != (a = null == (l = (0, u.Vw)(n, t, !1)) ? void 0 : l.amount) ? a : 0);
                        }))
                      : _ === a.m.RECOMMENDED
                        ? (e = x(l))
                        : _ === a.m.POPULAR
                          ? (e = x(h))
                          : _ === a.m.RANDOM && (e = i().shuffle(S)),
                j(e)
            );
        }, [_, j, S, t, x, l, h, v]),
        E = r.useCallback(() => {
            O((e) => e + 1), C(a.m.RANDOM);
        }, []);
    return {
        sortType: _,
        setSortType: C,
        sortedItems: (0, b.l)(y),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: a.m.POPULAR,
                    label: g.intl.string(g.t['1wQj4O'])
                },
                {
                    value: a.m.RECENT,
                    label: g.intl.string(g.t['6NZpt7'])
                },
                {
                    value: a.m.PRICE_LOW_TO_HIGH,
                    label: g.intl.string(g.t.RTG4yM)
                }
            ];
            return (
                m &&
                    e.unshift({
                        value: a.m.RECOMMENDED,
                        label: g.intl.string(g.t.JrlKlp)
                    }),
                e
            );
        }, [m]),
        showRecommendationOption: m,
        shuffleProducts: E
    };
};
