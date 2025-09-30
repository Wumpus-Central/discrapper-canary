n.d(t, {
    AW: () => v,
    Ch: () => B,
    Cm: () => C,
    HU: () => L,
    IV: () => N,
    J0: () => P,
    K8: () => D,
    RE: () => T,
    Vt: () => j,
    aK: () => S,
    aP: () => G,
    bu: () => h,
    cv: () => p,
    f7: () => O,
    i0: () => y,
    kN: () => w,
    lb: () => A,
    o0: () => k,
    o8: () => x,
    pv: () => R,
    rL: () => _,
    tb: () => m,
    xg: () => U,
    yf: () => b,
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
    m = "1382845914355470457",
    g = ["1385035256058482798", "1385035256083648542", "1385035256104620154"],
    E = [
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
    b = o()([...l()(g, i()(Array(g.length), new Date("2025-07-02").getTime()))]),
    y = o()([...l()(E, i()(Array(E.length), new Date("2025-03-08").getTime()))]);
var O = (function (e) {
        return (
            (e[(e.VISIBLE = 0)] = "VISIBLE"),
            (e[(e.HIDDEN = 1)] = "HIDDEN"),
            (e[(e.IN = 2)] = "IN"),
            (e[(e.OUT = 3)] = "OUT"),
            e
        );
    })({}),
    v = (function (e) {
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
let I = ["avatar-decorations", "profile-effects", "nameplates", "bundles"],
    T = (e) => I.includes(e),
    S = (e) => null != e && "home" !== e && "catalog" !== e,
    A = 800,
    C = 604800000,
    N = 12,
    R = 1128,
    P = 518,
    w = 5,
    D = 3,
    L = ["1212569433839636530", "1212570343567261736", "1212582298893946880"];
var x = (function (e) {
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
let j = {
        ORB_PROFILE_BADGE: "1342211853484429445",
        FRACTIONAL_PREMIUM: f.a.PREMIUM_TIER_2_3_DAY,
    },
    M = new Set(Object.values(j)),
    k = (e) => M.has(e),
    U = [c.G.AVATAR_DECORATION, c.G.PROFILE_EFFECT, c.G.NAMEPLATE, c.G.BUNDLE],
    G = [
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
var B = (function (e) {
    return (e.DEFAULT = "default"), (e.THUMBNAIL = "thumbnail"), e;
})({});
