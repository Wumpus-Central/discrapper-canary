n.d(t, {
    AW: () => m,
    Cm: () => O,
    HU: () => A,
    IV: () => v,
    J0: () => I,
    K8: () => S,
    RE: () => E,
    Vt: () => N,
    aK: () => b,
    aP: () => D,
    f7: () => h,
    kN: () => T,
    lb: () => y,
    o0: () => P,
    o8: () => C,
    xg: () => w,
    yf: () => p,
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
let _ = ["1385035256058482798", "1385035256083648542", "1385035256104620154"],
    p = o()([...l()(_, i()(Array(_.length), new Date("2025-07-02").getTime()))]);
var h = (function (e) {
        return (
            (e[(e.VISIBLE = 0)] = "VISIBLE"),
            (e[(e.HIDDEN = 1)] = "HIDDEN"),
            (e[(e.IN = 2)] = "IN"),
            (e[(e.OUT = 3)] = "OUT"),
            e
        );
    })({}),
    m = (function (e) {
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
let g = ["avatar-decorations", "profile-effects", "nameplates", "bundles"],
    E = (e) => g.includes(e),
    b = (e) => null != e && "home" !== e && "catalog" !== e,
    y = 800,
    O = 604800000,
    v = 12,
    I = 518,
    T = 5,
    S = 3,
    A = ["1212569433839636530", "1212570343567261736", "1212582298893946880"];
var C = (function (e) {
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
let N = {
        ORB_PROFILE_BADGE: "1342211853484429445",
        FRACTIONAL_PREMIUM: f.a.PREMIUM_TIER_2_3_DAY,
    },
    R = new Set(Object.values(N)),
    P = (e) => R.has(e),
    w = [c.G.AVATAR_DECORATION, c.G.PROFILE_EFFECT, c.G.NAMEPLATE, c.G.BUNDLE],
    D = [
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
