(r.d(t, { N: () => b }), r(388685), r(642613), r(290780));
var n = r(73800),
    l = r(392711),
    o = r.n(l),
    i = r(482820),
    a = r(442837),
    s = r(480294),
    c = r(597688),
    u = r(884697),
    d = r(26931),
    p = r(370039),
    g = r(937510),
    f = r(981631),
    h = r(388032);
let b = (e, t) => {
    let r = (0, a.e7)([s.Z], () => s.Z.hasConsented(f.pjP.PERSONALIZATION)),
        l = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.RECOMMENDED]) ? t : [];
        }, [e]),
        b = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && r,
        [_, C] = n.useState(m ? i.m.RECOMMENDED : i.m.POPULAR),
        [O, v] = n.useState(0),
        E = (0, d.u)(),
        S = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        y = (0, p.a)(),
        x = n.useMemo(() => {
            let e = [];
            return (
                _ === i.m.RECENT
                    ? (e = S)
                    : _ === i.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, r) => {
                            var n, l, o, i;
                            return (null != (o = null == (n = (0, u.Vw)(e, t, !1)) ? void 0 : n.amount) ? o : 0) - (null != (i = null == (l = (0, u.Vw)(r, t, !1)) ? void 0 : l.amount) ? i : 0);
                        }))
                      : _ === i.m.RECOMMENDED
                        ? (e = E(l))
                        : _ === i.m.POPULAR
                          ? (e = E(b))
                          : _ === i.m.RANDOM && (e = o().shuffle(S)),
                y(e)
            );
        }, [_, y, S, t, E, l, b, O]),
        j = n.useCallback(() => {
            (v((e) => e + 1), C(i.m.RANDOM));
        }, []);
    return {
        sortType: _,
        setSortType: C,
        sortedItems: (0, g.l)(x),
        sortOptions: n.useMemo(() => {
            let e = [
                {
                    value: i.m.POPULAR,
                    label: h.intl.string(h.t['1wQj4O'])
                },
                {
                    value: i.m.RECENT,
                    label: h.intl.string(h.t['6NZpt7'])
                },
                {
                    value: i.m.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.RTG4yM)
                }
            ];
            return (
                m &&
                    e.unshift({
                        value: i.m.RECOMMENDED,
                        label: h.intl.string(h.t.JrlKlp)
                    }),
                e
            );
        }, [m]),
        showRecommendationOption: m,
        shuffleProducts: j
    };
};
