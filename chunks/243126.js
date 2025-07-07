(n.d(t, { N: () => b }), n(388685), n(642613), n(290780));
var r = n(73800),
    l = n(392711),
    i = n.n(l),
    o = n(482820),
    a = n(442837),
    s = n(480294),
    c = n(597688),
    u = n(884697),
    d = n(26931),
    p = n(370039),
    f = n(937510),
    g = n(981631),
    h = n(388032);
let b = (e, t) => {
    let n = (0, a.e7)([s.Z], () => s.Z.hasConsented(g.pjP.PERSONALIZATION)),
        l = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[o.m.RECOMMENDED]) ? t : [];
        }, [e]),
        b = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[o.m.POPULAR]) ? t : [];
        }, [e]),
        m = l.length > 0 && n,
        [_, C] = r.useState(m ? o.m.RECOMMENDED : o.m.POPULAR),
        [O, E] = r.useState(0),
        v = (0, d.u)(),
        S = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        x = (0, p.a)(),
        y = r.useMemo(() => {
            let e = [];
            return (
                _ === o.m.RECENT
                    ? (e = S)
                    : _ === o.m.PRICE_LOW_TO_HIGH
                      ? (e = [...S].sort((e, n) => {
                            var r, l, i, o;
                            return (null != (i = null == (r = (0, u.Vw)(e, t, !1)) ? void 0 : r.amount) ? i : 0) - (null != (o = null == (l = (0, u.Vw)(n, t, !1)) ? void 0 : l.amount) ? o : 0);
                        }))
                      : _ === o.m.RECOMMENDED
                        ? (e = v(l))
                        : _ === o.m.POPULAR
                          ? (e = v(b))
                          : _ === o.m.RANDOM && (e = i().shuffle(S)),
                x(e)
            );
        }, [_, x, S, t, v, l, b, O]),
        j = r.useCallback(() => {
            (E((e) => e + 1), C(o.m.RANDOM));
        }, []);
    return {
        sortType: _,
        setSortType: C,
        sortedItems: (0, f.l)(y),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: o.m.POPULAR,
                    label: h.intl.string(h.t['1wQj4O'])
                },
                {
                    value: o.m.RECENT,
                    label: h.intl.string(h.t['6NZpt7'])
                },
                {
                    value: o.m.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.RTG4yM)
                }
            ];
            return (
                m &&
                    e.unshift({
                        value: o.m.RECOMMENDED,
                        label: h.intl.string(h.t.JrlKlp)
                    }),
                e
            );
        }, [m]),
        showRecommendationOption: m,
        shuffleProducts: j
    };
};
