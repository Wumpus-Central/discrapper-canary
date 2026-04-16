"use strict";
s.d(t, { A: () => x }), s(667532);
var n = s(64700),
    l = s(735438),
    r = s.n(l),
    a = s(12544),
    i = s(311907),
    o = s(153488),
    c = s(590180),
    d = s(248352),
    u = s(993408),
    _ = s(511265),
    g = s(313276),
    m = s(206077),
    h = s(623373),
    p = s(652215),
    f = s(985018);
function x(e) {
    let { sortedSkuIds: t, isPremiumUser: s, prioritizeUserDiscounts: l, orbsSupportedOnly: x } = e,
        E = (0, i.bG)([o.A], () => o.A.hasConsented(p.YAq.PERSONALIZATION)),
        b = n.useMemo(() => t?.[a.i.RECOMMENDED] ?? [], [t]),
        C = n.useMemo(() => t?.[a.i.POPULAR] ?? [], [t]),
        A = b.length > 0 && E,
        [S, v] = n.useState(A ? a.i.RECOMMENDED : a.i.POPULAR),
        I = (0, i.bG)([c.A], () => c.A.productsWithVariantsAsGroup),
        L = n.useMemo(() => (0, u.CE)(I), [I]),
        j = (0, i.bG)([d.A], () => d.A.getUserDiscounts()),
        O = (0, g.A)(),
        k = (0, _.p)(),
        [T, y] = n.useState([]),
        N = n.useCallback(() => {
            v(a.i.RANDOM), y(r().shuffle(L));
        }, [L]);
    n.useEffect(() => {
        y(r().shuffle(L));
    }, [L]);
    let R = n.useMemo(() => {
        let e = [];
        if (S === a.i.RECENT) e = L;
        else if (S === a.i.PRICE_LOW_TO_HIGH) e = (0, u.bf)([...L], s, x);
        else if (S === a.i.RECOMMENDED) {
            let t = O(b);
            e = l ? (0, u.Bs)(t, j) : t;
        } else if (S === a.i.POPULAR) {
            let t = O(C);
            e = l ? (0, u.Bs)(t, j) : t;
        } else S === a.i.RANDOM && (e = T);
        return x ? (0, h.ex)(k(e)) : k(e);
    }, [S, x, k, s, L, O, b, l, j, C, T]);
    return {
        sortType: S,
        setSortType: v,
        sortedItems: (0, m.X)(R),
        sortOptions: n.useMemo(() => {
            let e = [
                { value: a.i.POPULAR, label: f.intl.string(f.t.Y68e5p) },
                { value: a.i.RECENT, label: f.intl.string(f.t["51Bhiz"]) },
                { value: a.i.PRICE_LOW_TO_HIGH, label: f.intl.string(f.t.m8RVU2) },
            ];
            return A && e.unshift({ value: a.i.RECOMMENDED, label: f.intl.string(f.t.zPWgFG) }), e;
        }, [A]),
        showRecommendationOption: A,
        shuffleProducts: N,
    };
}
