(r.d(t, { N: () => b }), r(388685), r(642613), r(290780));
var n = r(73800),
    l = r(392711),
    i = r.n(l),
    a = r(482820),
    o = r(442837),
    s = r(480294),
    c = r(597688),
    u = r(884697),
    d = r(26931),
    p = r(370039),
    f = r(937510),
    g = r(981631),
    h = r(388032);
let b = (e, t) => {
    let r = (0, o.e7)([s.Z], () => s.Z.hasConsented(g.pjP.PERSONALIZATION)),
        l = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[a.m.RECOMMENDED]) ? t : [];
        }, [e]),
        b = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[a.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && r,
        [_, O] = n.useState(m ? a.m.RECOMMENDED : a.m.POPULAR),
        [C, v] = n.useState(0),
        E = (0, d.u)(),
        S = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        y = (0, p.a)(),
        x = n.useMemo(() => {
            let e = [];
            return (
                _ === a.m.RECENT
                    ? (e = S)
                    : _ === a.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, r) => {
                            var n, l, i, a;
                            return (null != (i = null == (n = (0, u.Vw)(e, t, !1)) ? void 0 : n.amount) ? i : 0) - (null != (a = null == (l = (0, u.Vw)(r, t, !1)) ? void 0 : l.amount) ? a : 0);
                        }))
                      : _ === a.m.RECOMMENDED
                        ? (e = E(l))
                        : _ === a.m.POPULAR
                          ? (e = E(b))
                          : _ === a.m.RANDOM && (e = i().shuffle(S)),
                y(e)
            );
        }, [_, y, S, t, E, l, b, C]),
        j = n.useCallback(() => {
            (v((e) => e + 1), O(a.m.RANDOM));
        }, []);
    return {
        sortType: _,
        setSortType: O,
        sortedItems: (0, f.l)(x),
        sortOptions: n.useMemo(() => {
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
