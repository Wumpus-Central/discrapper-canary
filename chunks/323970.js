n.d(t, { A: () => j });
var i = n(462887),
    s = n(736653),
    l = n(439174),
    a = n(881141),
    r = n(788868),
    o = n(164741),
    d = n(341094),
    c = n(115245),
    u = n(915880),
    p = n(203683),
    h = n(187446),
    m = n(935495),
    _ = n(651714),
    A = n(416307),
    f = n(497783),
    g = n(39579),
    x = n(673554),
    E = n(719401),
    C = n(128640),
    T = n(369306),
    v = n(789996);
let S = {
        [r.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [r.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [r.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [r.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [r.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [r.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [r.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [r.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    b = {
        [r.Ac.PREMIUM_TENURE_1_MONTH]: { dark: o.A, light: A.A },
        [r.Ac.PREMIUM_TENURE_3_MONTH]: { dark: d.A, light: f.A },
        [r.Ac.PREMIUM_TENURE_6_MONTH]: { dark: c.A, light: g.A },
        [r.Ac.PREMIUM_TENURE_12_MONTH]: { dark: u.A, light: x.A },
        [r.Ac.PREMIUM_TENURE_24_MONTH]: { dark: p.A, light: E.A },
        [r.Ac.PREMIUM_TENURE_36_MONTH]: { dark: h.A, light: C.A },
        [r.Ac.PREMIUM_TENURE_60_MONTH]: { dark: m.A, light: T.A },
        [r.Ac.PREMIUM_TENURE_72_MONTH]: { dark: _.A, light: v.A },
    };
function j() {
    let e = (0, a.A)(),
        t = (0, i.M)((0, s.Ay)());
    if (null == e) return null;
    let n = S[e],
        o = b[e],
        d = {
            currentBadge: (0, l.e0)(e),
            currentBadgeTextGradient: t ? n?.dark : n?.light,
            levelUpVideoSrc: t ? o?.dark : o?.light,
        },
        c = r.sp.indexOf(e);
    if (c > 0) {
        let e = r.sp[c - 1],
            n = S[e];
        (d.prevBadge = (0, l.e0)(e)), (d.prevBadgeTextGradient = t ? n?.dark : n?.light);
    }
    return d;
}
