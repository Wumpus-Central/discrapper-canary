n.d(t, { N: () => b }), n(388685), n(642613), n(290780);
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
    f = n(937510),
    g = n(981631),
    h = n(388032);
let b = (e, t) => {
    let n = (0, o.e7)([s.Z], () => s.Z.hasConsented(g.pjP.PERSONALIZATION)),
        l = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.RECOMMENDED]) ? t : [];
        }, [e]),
        b = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && n,
        [_, C] = r.useState(m ? i.m.RECOMMENDED : i.m.POPULAR),
        [v, O] = r.useState(0),
        S = (0, d.u)(),
        x = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        E = (0, p.a)(),
        y = r.useMemo(() => {
            let e = [];
            return (
                _ === i.m.RECENT
                    ? (e = x)
                    : _ === i.m.PRICE_LOW_TO_HIGH
                      ? (e = [...x].sort((e, n) => {
                            var r, l, a, i;
                            return (null != (a = null == (r = (0, u.Vw)(e, t, !1)) ? void 0 : r.amount) ? a : 0) - (null != (i = null == (l = (0, u.Vw)(n, t, !1)) ? void 0 : l.amount) ? i : 0);
                        }))
                      : _ === i.m.RECOMMENDED
                        ? (e = S(l))
                        : _ === i.m.POPULAR
                          ? (e = S(b))
                          : _ === i.m.RANDOM && (e = a().shuffle(x)),
                E(e)
            );
        }, [_, E, x, t, S, l, b, v]),
        j = r.useCallback(() => {
            O((e) => e + 1), C(i.m.RANDOM);
        }, []);
    return {
        sortType: _,
        setSortType: C,
        sortedItems: (0, f.l)(y),
        sortOptions: r.useMemo(() => {
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
