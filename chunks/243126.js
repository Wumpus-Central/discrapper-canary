r.d(t, { N: () => b }), r(388685), r(642613), r(290780);
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
    g = r(937510),
    f = r(981631),
    h = r(388032);
let b = (e, t) => {
    let r = (0, o.e7)([s.Z], () => s.Z.hasConsented(f.pjP.PERSONALIZATION)),
        l = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.RECOMMENDED]) ? t : [];
        }, [e]),
        b = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.POPULAR]) ? t : [];
        }, [e]),
        _ = l.length > 0 && r,
        [m, v] = n.useState(_ ? i.m.RECOMMENDED : i.m.POPULAR),
        [O, C] = n.useState(0),
        E = (0, d.u)(),
        S = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        y = (0, p.a)(),
        x = n.useMemo(() => {
            let e = [];
            return (
                m === i.m.RECENT
                    ? (e = S)
                    : m === i.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, r) => {
                            var n, l, a, i;
                            return (
                                (null != (a = null == (n = (0, u.Vw)(e, t, !1)) ? void 0 : n.amount) ? a : 0) -
                                (null != (i = null == (l = (0, u.Vw)(r, t, !1)) ? void 0 : l.amount) ? i : 0)
                            );
                        }))
                      : m === i.m.RECOMMENDED
                        ? (e = E(l))
                        : m === i.m.POPULAR
                          ? (e = E(b))
                          : m === i.m.RANDOM && (e = a().shuffle(S)),
                y(e)
            );
        }, [m, y, S, t, E, l, b, O]),
        j = n.useCallback(() => {
            C((e) => e + 1), v(i.m.RANDOM);
        }, []);
    return {
        sortType: m,
        setSortType: v,
        sortedItems: (0, g.l)(x),
        sortOptions: n.useMemo(() => {
            let e = [
                {
                    value: i.m.POPULAR,
                    label: h.intl.string(h.t["1wQj4O"]),
                },
                {
                    value: i.m.RECENT,
                    label: h.intl.string(h.t["6NZpt7"]),
                },
                {
                    value: i.m.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.RTG4yM),
                },
            ];
            return (
                _ &&
                    e.unshift({
                        value: i.m.RECOMMENDED,
                        label: h.intl.string(h.t.JrlKlp),
                    }),
                e
            );
        }, [_]),
        showRecommendationOption: _,
        shuffleProducts: j,
    };
};
