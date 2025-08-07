r.d(t, { N: () => h }), r(388685), r(642613), r(290780);
var n = r(73800),
    l = r(392711),
    a = r.n(l),
    i = r(482820),
    o = r(442837),
    s = r(480294),
    c = r(597688),
    u = r(884697),
    d = r(26931),
    p = r(370039),
    f = r(937510),
    g = r(981631),
    b = r(388032);
let h = (e, t) => {
    let r = (0, o.e7)([s.Z], () => s.Z.hasConsented(g.pjP.PERSONALIZATION)),
        l = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.RECOMMENDED]) ? t : [];
        }, [e]),
        h = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && r,
        [_, v] = n.useState(m ? i.m.RECOMMENDED : i.m.POPULAR),
        [C, O] = n.useState(0),
        E = (0, d.u)(),
        S = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        y = (0, p.a)(),
        x = n.useMemo(() => {
            let e = [];
            return (
                _ === i.m.RECENT
                    ? (e = S)
                    : _ === i.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, r) => {
                            var n, l, a, i;
                            return (
                                (null != (a = null == (n = (0, u.Vw)(e, t, !1)) ? void 0 : n.amount) ? a : 0) -
                                (null != (i = null == (l = (0, u.Vw)(r, t, !1)) ? void 0 : l.amount) ? i : 0)
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
        j = n.useCallback(() => {
            O((e) => e + 1), v(i.m.RANDOM);
        }, []);
    return {
        sortType: _,
        setSortType: v,
        sortedItems: (0, f.l)(x),
        sortOptions: n.useMemo(() => {
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
