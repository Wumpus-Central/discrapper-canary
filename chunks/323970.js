n.d(t, { A: () => T });
var a = n(582754),
    i = n(736653),
    s = n(439174),
    l = n(881141),
    r = n(788868),
    o = n(164741),
    d = n(341094),
    c = n(115245),
    u = n(915880),
    m = n(203683),
    h = n(187446),
    x = n(935495),
    p = n(651714),
    g = n(416307),
    _ = n(497783),
    f = n(39579),
    v = n(673554),
    b = n(719401),
    j = n(128640),
    A = n(146925),
    C = n(789996);
let y = {
        [r.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [r.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [r.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [r.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [r.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [r.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [r.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [r.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    S = {
        [r.Ac.PREMIUM_TENURE_1_MONTH]: { dark: o.A, light: g.A },
        [r.Ac.PREMIUM_TENURE_3_MONTH]: { dark: d.A, light: _.A },
        [r.Ac.PREMIUM_TENURE_6_MONTH]: { dark: c.A, light: f.A },
        [r.Ac.PREMIUM_TENURE_12_MONTH]: { dark: u.A, light: v.A },
        [r.Ac.PREMIUM_TENURE_24_MONTH]: { dark: m.A, light: b.A },
        [r.Ac.PREMIUM_TENURE_36_MONTH]: { dark: h.A, light: j.A },
        [r.Ac.PREMIUM_TENURE_60_MONTH]: { dark: x.A, light: A.A },
        [r.Ac.PREMIUM_TENURE_72_MONTH]: { dark: p.A, light: C.A },
    };
function T() {
    let e = (0, l.A)(),
        t = (0, a.Mw)((0, i.Ay)());
    if (null == e) return null;
    let n = y[e],
        o = S[e],
        d = {
            currentBadge: (0, s.e0)(e),
            currentBadgeTextGradient: t ? n?.dark : n?.light,
            levelUpVideoSrc: t ? o?.dark : o?.light,
        },
        c = r.sp.indexOf(e);
    if (c > 0) {
        let e = r.sp[c - 1],
            n = y[e];
        (d.prevBadge = (0, s.e0)(e)), (d.prevBadgeTextGradient = t ? n?.dark : n?.light);
    }
    return d;
}
