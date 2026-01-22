l.d(t, { A: () => E }), l(896048), l(667532);
var n = l(64700),
    r = l(735438),
    s = l.n(r),
    a = l(12544),
    i = l(311907),
    o = l(153488),
    c = l(590180),
    u = l(248352),
    d = l(993408),
    f = l(511265),
    b = l(313276),
    g = l(206077),
    p = l(623373),
    m = l(652215),
    h = l(985018);
function E(e) {
    let { sortedSkuIds: t, isPremiumUser: l, prioritizeUserDiscounts: r, orbsSupportedOnly: E } = e,
        v = (0, i.bG)([o.A], () => o.A.hasConsented(m.YAq.PERSONALIZATION)),
        A = n.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[a.i.RECOMMENDED]) ? e : [];
        }, [t]),
        x = n.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[a.i.POPULAR]) ? e : [];
        }, [t]),
        S = A.length > 0 && v,
        [C, O] = n.useState(S ? a.i.RECOMMENDED : a.i.POPULAR),
        _ = (0, i.bG)([c.A], () => c.A.productsWithVariantsAsGroup),
        y = n.useMemo(() => (0, d.CE)(_), [_]),
        j = (0, i.bG)([u.A], () => u.A.getUserDiscounts()),
        L = (0, b.A)(),
        T = (0, f.p)(),
        [I, N] = n.useState([]),
        k = n.useCallback(() => {
            O(a.i.RANDOM), N(s().shuffle(y));
        }, [y]);
    n.useEffect(() => {
        N(s().shuffle(y));
    }, [y]);
    let R = n.useMemo(() => {
        let e = [];
        if (C === a.i.RECENT) e = y;
        else if (C === a.i.PRICE_LOW_TO_HIGH) e = (0, d.bf)([...y], l, E);
        else if (C === a.i.RECOMMENDED) {
            let t = L(A);
            e = r ? (0, d.Bs)(t, j) : t;
        } else if (C === a.i.POPULAR) {
            let t = L(x);
            e = r ? (0, d.Bs)(t, j) : t;
        } else C === a.i.RANDOM && (e = I);
        return E ? (0, p.ex)(T(e)) : T(e);
    }, [C, E, T, l, y, L, A, r, j, x, I]);
    return {
        sortType: C,
        setSortType: O,
        sortedItems: (0, g.X)(R),
        sortOptions: n.useMemo(() => {
            let e = [
                {
                    value: a.i.POPULAR,
                    label: h.intl.string(h.t.Y68e5p),
                },
                {
                    value: a.i.RECENT,
                    label: h.intl.string(h.t["51Bhiz"]),
                },
                {
                    value: a.i.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.m8RVU2),
                },
            ];
            return (
                S &&
                    e.unshift({
                        value: a.i.RECOMMENDED,
                        label: h.intl.string(h.t.zPWgFG),
                    }),
                e
            );
        }, [S]),
        showRecommendationOption: S,
        shuffleProducts: k,
    };
}
