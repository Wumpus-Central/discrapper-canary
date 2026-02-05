"use strict";
s.d(t, { A: () => E }), s(667532);
var n = s(64700),
    r = s(735438),
    l = s.n(r),
    a = s(12544),
    i = s(311907),
    o = s(153488),
    c = s(590180),
    d = s(248352),
    u = s(993408),
    g = s(511265),
    m = s(313276),
    _ = s(206077),
    h = s(623373),
    p = s(652215),
    f = s(985018);
function E(e) {
    let { sortedSkuIds: t, isPremiumUser: s, prioritizeUserDiscounts: r, orbsSupportedOnly: E } = e,
        C = (0, i.bG)([o.A], () => o.A.hasConsented(p.YAq.PERSONALIZATION)),
        b = n.useMemo(() => t?.[a.i.RECOMMENDED] ?? [], [t]),
        A = n.useMemo(() => t?.[a.i.POPULAR] ?? [], [t]),
        x = b.length > 0 && C,
        [S, v] = n.useState(x ? a.i.RECOMMENDED : a.i.POPULAR),
        L = (0, i.bG)([c.A], () => c.A.productsWithVariantsAsGroup),
        T = n.useMemo(() => (0, u.CE)(L), [L]),
        I = (0, i.bG)([d.A], () => d.A.getUserDiscounts()),
        O = (0, m.A)(),
        y = (0, g.p)(),
        [j, N] = n.useState([]),
        k = n.useCallback(() => {
            v(a.i.RANDOM), N(l().shuffle(T));
        }, [T]);
    n.useEffect(() => {
        N(l().shuffle(T));
    }, [T]);
    let R = n.useMemo(() => {
        let e = [];
        if (S === a.i.RECENT) e = T;
        else if (S === a.i.PRICE_LOW_TO_HIGH) e = (0, u.bf)([...T], s, E);
        else if (S === a.i.RECOMMENDED) {
            let t = O(b);
            e = r ? (0, u.Bs)(t, I) : t;
        } else if (S === a.i.POPULAR) {
            let t = O(A);
            e = r ? (0, u.Bs)(t, I) : t;
        } else S === a.i.RANDOM && (e = j);
        return E ? (0, h.ex)(y(e)) : y(e);
    }, [S, E, y, s, T, O, b, r, I, A, j]);
    return {
        sortType: S,
        setSortType: v,
        sortedItems: (0, _.X)(R),
        sortOptions: n.useMemo(() => {
            let e = [
                { value: a.i.POPULAR, label: f.intl.string(f.t.Y68e5p) },
                { value: a.i.RECENT, label: f.intl.string(f.t["51Bhiz"]) },
                { value: a.i.PRICE_LOW_TO_HIGH, label: f.intl.string(f.t.m8RVU2) },
            ];
            return x && e.unshift({ value: a.i.RECOMMENDED, label: f.intl.string(f.t.zPWgFG) }), e;
        }, [x]),
        showRecommendationOption: x,
        shuffleProducts: k,
    };
}
