"use strict";
s.d(t, { A: () => E }), s(667532);
var n = s(64700),
    l = s(735438),
    r = s.n(l),
    a = s(790163),
    i = s(311907),
    o = s(153488),
    c = s(590180),
    d = s(248352),
    u = s(993408),
    g = s(511265),
    h = s(313276),
    _ = s(206077),
    m = s(623373),
    p = s(652215),
    f = s(985018);
function E(e) {
    let { sortedSkuIds: t, isPremiumUser: s, prioritizeUserDiscounts: l, orbsSupportedOnly: E } = e,
        x = (0, i.bG)([o.A], () => o.A.hasConsented(p.YAq.PERSONALIZATION)),
        A = n.useMemo(() => t?.[a.i.RECOMMENDED] ?? [], [t]),
        C = n.useMemo(() => t?.[a.i.POPULAR] ?? [], [t]),
        S = A.length > 0 && x,
        [b, v] = n.useState(S ? a.i.RECOMMENDED : a.i.POPULAR),
        L = (0, i.bG)([c.A], () => c.A.productsWithVariantsAsGroup),
        I = n.useMemo(() => (0, u.CE)(L), [L]),
        j = (0, i.bG)([d.A], () => d.A.getUserDiscounts()),
        N = (0, h.A)(),
        T = (0, g.p)(),
        [O, y] = n.useState([]),
        k = n.useCallback(() => {
            v(a.i.RANDOM), y(r().shuffle(I));
        }, [I]);
    n.useEffect(() => {
        y(r().shuffle(I));
    }, [I]);
    let R = n.useMemo(() => {
        let e = [];
        if (b === a.i.RECENT) e = I;
        else if (b === a.i.PRICE_LOW_TO_HIGH) e = (0, u.bf)([...I], s, E);
        else if (b === a.i.RECOMMENDED) {
            let t = N(A);
            e = l ? (0, u.Bs)(t, j) : t;
        } else if (b === a.i.POPULAR) {
            let t = N(C);
            e = l ? (0, u.Bs)(t, j) : t;
        } else b === a.i.RANDOM && (e = O);
        return E ? (0, m.ex)(T(e)) : T(e);
    }, [b, E, T, s, I, N, A, l, j, C, O]);
    return {
        sortType: b,
        setSortType: v,
        sortedItems: (0, _.X)(R),
        sortOptions: n.useMemo(() => {
            let e = [
                { value: a.i.POPULAR, label: f.intl.string(f.t.Y68e5p) },
                { value: a.i.RECENT, label: f.intl.string(f.t["51Bhiz"]) },
                { value: a.i.PRICE_LOW_TO_HIGH, label: f.intl.string(f.t.m8RVU2) },
            ];
            return S && e.unshift({ value: a.i.RECOMMENDED, label: f.intl.string(f.t.zPWgFG) }), e;
        }, [S]),
        showRecommendationOption: S,
        shuffleProducts: k,
    };
}
