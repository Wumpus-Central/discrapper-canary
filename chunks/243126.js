n.d(t, { N: () => h }), n(388685), n(642613), n(290780);
var r = n(192379),
    l = n(392711),
    a = n.n(l),
    i = n(482820),
    o = n(442837),
    s = n(480294),
    c = n(597688),
    u = n(884697),
    d = n(26931),
    b = n(370039),
    p = n(937510),
    f = n(981631),
    g = n(388032);
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
        [_, C] = r.useState(m ? i.m.RECOMMENDED : i.m.POPULAR),
        v = (0, d.u)(),
        O = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        x = (0, b.a)(),
        [j, y] = r.useState([]),
        S = r.useCallback(
            (e) => {
                y(x(e));
            },
            [x]
        );
    r.useEffect(() => {
        _ === i.m.RECENT
            ? S(O)
            : _ === i.m.PRICE_LOW_TO_HIGH
              ? S(
                    O.sort((e, n) => {
                        var r, l, a, i;
                        return (null != (a = null == (r = (0, u.Vw)(e, t, !1)) ? void 0 : r.amount) ? a : 0) - (null != (i = null == (l = (0, u.Vw)(n, t, !1)) ? void 0 : l.amount) ? i : 0);
                    })
                )
              : _ === i.m.RECOMMENDED
                ? S(v(l))
                : _ === i.m.POPULAR && S(v(h));
    }, [_, t, v, O, l, h, S]);
    let k = r.useCallback(() => {
        y(a().shuffle(j)), C(null);
    }, [j]);
    return {
        sortType: _,
        setSortType: C,
        sortedItems: (0, p.l)(j),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: i.m.POPULAR,
                    label: g.intl.string(g.t['1wQj4O'])
                },
                {
                    value: i.m.RECENT,
                    label: g.intl.string(g.t['6NZpt7'])
                },
                {
                    value: i.m.PRICE_LOW_TO_HIGH,
                    label: g.intl.string(g.t.RTG4yM)
                }
            ];
            return (
                m &&
                    e.unshift({
                        value: i.m.RECOMMENDED,
                        label: g.intl.string(g.t.JrlKlp)
                    }),
                e
            );
        }, [m]),
        shuffleProducts: k,
        showRecommendationOption: m
    };
};
