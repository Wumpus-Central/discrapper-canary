n.d(t, {
    AW: () => O,
    Ch: () => U,
    Cm: () => A,
    HU: () => w,
    IV: () => C,
    J0: () => N,
    K8: () => P,
    RE: () => I,
    Vt: () => L,
    aK: () => T,
    aP: () => k,
    bu: () => h,
    cv: () => p,
    f7: () => y,
    i0: () => b,
    kN: () => R,
    lb: () => S,
    o0: () => M,
    o8: () => D,
    rL: () => _,
    xg: () => j,
    yf: () => E,
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
    h = "1341506445249609728",
    m = ["1385035256058482798", "1385035256083648542", "1385035256104620154"],
    g = [
        "1144308439720394944",
        "1154896005045694555",
        "1144307257807491094",
        "1144305233707671573",
        "1144307629225672846",
        "1144308196723408958",
        "1144307957425778779",
        "1212569856189407352",
        "1212570343567261736",
        "1212570596970467378",
        "1212581390936178768",
        "1212569433839636530",
        "1212581147675205652",
        "1139323101881061466",
        "1139323093551165533",
        "1139323101008642101",
        "1212582298893946880",
        "1212582372877541427",
        "1212582452640350238",
        "1139323100568244355",
    ],
    E = o()([...l()(m, i()(Array(m.length), new Date("2025-07-02").getTime()))]),
    b = o()([...l()(g, i()(Array(g.length), new Date("2025-03-08").getTime()))]);
var y = (function (e) {
        return (
            (e[(e.VISIBLE = 0)] = "VISIBLE"),
            (e[(e.HIDDEN = 1)] = "HIDDEN"),
            (e[(e.IN = 2)] = "IN"),
            (e[(e.OUT = 3)] = "OUT"),
            e
        );
    })({}),
    O = (function (e) {
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
let v = ["avatar-decorations", "profile-effects", "nameplates", "bundles"],
    I = (e) => v.includes(e),
    T = (e) => null != e && "home" !== e && "catalog" !== e,
    S = 800,
    A = 604800000,
    C = 12,
    N = 518,
    R = 5,
    P = 3,
    w = ["1212569433839636530", "1212570343567261736", "1212582298893946880"];
var D = (function (e) {
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
let L = {
        ORB_PROFILE_BADGE: "1342211853484429445",
        FRACTIONAL_PREMIUM: f.a.PREMIUM_TIER_2_3_DAY,
    },
    x = new Set(Object.values(L)),
    M = (e) => x.has(e),
    j = [c.G.AVATAR_DECORATION, c.G.PROFILE_EFFECT, c.G.NAMEPLATE, c.G.BUNDLE],
    k = [
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
var U = (function (e) {
    return (e.DEFAULT = "default"), (e.THUMBNAIL = "thumbnail"), e;
})({});
