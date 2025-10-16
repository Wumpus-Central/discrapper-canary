n.d(t, {
    AW: () => E,
    Ch: () => M,
    Cm: () => I,
    HU: () => N,
    IV: () => T,
    J0: () => S,
    K8: () => C,
    RE: () => y,
    Vt: () => P,
    aK: () => O,
    aP: () => x,
    cv: () => p,
    f7: () => g,
    kN: () => A,
    lb: () => v,
    o0: () => D,
    o8: () => R,
    rL: () => _,
    xg: () => L,
    yf: () => m,
}),
    n(388685);
var r = n(463570),
    i = n.n(r),
    a = n(961238),
    o = n.n(a),
    s = n(705108),
    l = n.n(s),
    c = n(335818),
    u = n(497598),
    d = n(792091),
    f = n(314794);
let _ = "1225876188074082374",
    p = "1332505418219655258",
    h = ["1385035256058482798", "1385035256083648542", "1385035256104620154"],
    m = o()([...l()(h, i()(Array(h.length), new Date("2025-07-02").getTime()))]);
var g = (function (e) {
        return (
            (e[(e.VISIBLE = 0)] = "VISIBLE"),
            (e[(e.HIDDEN = 1)] = "HIDDEN"),
            (e[(e.IN = 2)] = "IN"),
            (e[(e.OUT = 3)] = "OUT"),
            e
        );
    })({}),
    E = (function (e) {
        return (
            (e.HOME = "home"),
            (e.CATALOG = "catalog"),
            (e.ORBS = "orbs"),
            (e.AVATAR_DECORATIONS = "avatar-decorations"),
            (e.PROFILE_EFFECTS = "profile-effects"),
            (e.NAMEPLATES = "nameplates"),
            (e.BUNDLES = "bundles"),
            e
        );
    })({});
let b = ["avatar-decorations", "profile-effects", "nameplates", "bundles"],
    y = (e) => b.includes(e),
    O = (e) => null != e && "home" !== e && "catalog" !== e,
    v = 800,
    I = 604800000,
    T = 12,
    S = 518,
    A = 5,
    C = 3,
    N = ["1212569433839636530", "1212570343567261736", "1212582298893946880"];
var R = (function (e) {
    return (
        (e[(e.FIAT = 0)] = "FIAT"),
        (e[(e.ORB = 1)] = "ORB"),
        (e[(e.PREMIUM_PURCHASE = 2)] = "PREMIUM_PURCHASE"),
        (e[(e.PROMOTIONAL = 3)] = "PROMOTIONAL"),
        (e[(e.TENURE_REWARD = 4)] = "TENURE_REWARD"),
        (e[(e.GIFT = 5)] = "GIFT"),
        e
    );
})({});
let P = {
        ORB_PROFILE_BADGE: "1342211853484429445",
        FRACTIONAL_PREMIUM: f.a.PREMIUM_TIER_2_3_DAY,
    },
    w = new Set(Object.values(P)),
    D = (e) => w.has(e),
    L = [c.G.AVATAR_DECORATION, c.G.PROFILE_EFFECT, c.G.NAMEPLATE, c.G.BUNDLE],
    x = [
        {
            sortType: d.E.RELEVANCE,
            sortDirection: u.F.DESC,
        },
        {
            sortType: d.E.RECENCY,
            sortDirection: u.F.DESC,
        },
        {
            sortType: d.E.PRICE,
            sortDirection: u.F.ASC,
        },
        {
            sortType: d.E.PRICE,
            sortDirection: u.F.DESC,
        },
        {
            sortType: d.E.POPULARITY,
            sortDirection: u.F.DESC,
        },
    ];
var M = (function (e) {
    return (e.DEFAULT = "default"), (e.THUMBNAIL = "thumbnail"), e;
})({});
