n.d(t, { N: () => h }), n(388685), n(642613), n(290780);
var r = n(73800),
    l = n(392711),
    a = n.n(l),
    i = n(482820),
    o = n(442837),
    s = n(480294),
    c = n(597688),
    u = n(884697),
    d = n(26931),
    p = n(370039),
    g = n(937510),
    f = n(981631),
    b = n(388032);
let h = (e, t) => {
    let n = (0, o.e7)([s.Z], () => s.Z.hasConsented(f.pjP.PERSONALIZATION)),
        l = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.RECOMMENDED]) ? t : [];
        }, [e]),
        h = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && n,
        [_, v] = r.useState(m ? i.m.RECOMMENDED : i.m.POPULAR),
        [C, O] = r.useState(0),
        E = (0, d.u)(),
        S = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        y = (0, p.a)(),
        x = r.useMemo(() => {
            let e = [];
            return (
                _ === i.m.RECENT
                    ? (e = S)
                    : _ === i.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, n) => {
                            var r, l, a, i;
                            return (
                                (null != (a = null == (r = (0, u.Vw)(e, t, !1)) ? void 0 : r.amount) ? a : 0) -
                                (null != (i = null == (l = (0, u.Vw)(n, t, !1)) ? void 0 : l.amount) ? i : 0)
                            );
                        }))
                      : _ === i.m.RECOMMENDED
                        ? (e = E(l))
                        : _ === i.m.POPULAR
                          ? (e = E(h))
                          : _ === i.m.RANDOM && (e = a().shuffle(S)),
                y(e)
            );
        }, [_, y, S, t, E, l, h, C]),
        j = r.useCallback(() => {
            O((e) => e + 1), v(i.m.RANDOM);
        }, []);
    return {
        sortType: _,
        setSortType: v,
        sortedItems: (0, g.l)(x),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: i.m.POPULAR,
                    label: b.intl.string(b.t["1wQj4O"]),
                },
                {
                    value: i.m.RECENT,
                    label: b.intl.string(b.t["6NZpt7"]),
                },
                {
                    value: i.m.PRICE_LOW_TO_HIGH,
                    label: b.intl.string(b.t.RTG4yM),
                },
            ];
            return (
                m &&
                    e.unshift({
                        value: i.m.RECOMMENDED,
                        label: b.intl.string(b.t.JrlKlp),
                    }),
                e
            );
        }, [m]),
        showRecommendationOption: m,
        shuffleProducts: j,
    };
};
