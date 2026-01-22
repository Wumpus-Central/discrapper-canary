n.d(t, { A: () => O });
var a = n(582754),
    l = n(736653),
    i = n(439174),
    r = n(881141),
    s = n(788868),
    o = n(164741),
    c = n(118713),
    d = n(115245),
    u = n(915880),
    m = n(203683),
    p = n(187446),
    h = n(935495),
    f = n(651714),
    x = n(416307),
    b = n(497783),
    g = n(39579),
    v = n(673554),
    j = n(719401),
    y = n(128640),
    _ = n(146925),
    A = n(789996);
let C = {
        [s.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: " #D76C1F, #F79C53",
            light: " #8E2A0B, #D4681C",
        },
        [s.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: " #8F9E9E, #C0CBD1",
            light: " #53555F, #697979",
        },
        [s.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: " #ED8200, #FFCE46",
            light: " #744400, #CC7000",
        },
        [s.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: " #36AAFF, #7BE7CB",
            light: " #006394, #0089EB",
        },
        [s.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: " #8670FF, #C2BDFF",
            light: " #5423CC, #8670FF",
        },
        [s.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: " #009423, #67FF33",
            light: " #005C15, #009E25",
        },
        [s.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: " #E83068, #FF8F70",
            light: " #881141, #DD1852",
        },
        [s.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: " #829AE8, #DDB4FF, #A2D6FF",
            light: " #6881D4, #956CB8, #5491A0",
        },
    },
    S = {
        [s.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: o.A,
            light: x.A,
        },
        [s.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: c.A,
            light: b.A,
        },
        [s.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: d.A,
            light: g.A,
        },
        [s.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: u.A,
            light: v.A,
        },
        [s.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: m.A,
            light: j.A,
        },
        [s.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: p.A,
            light: y.A,
        },
        [s.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: h.A,
            light: _.A,
        },
        [s.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: f.A,
            light: A.A,
        },
    };
function O() {
    let e = (0, r.A)(),
        t = (0, a.Mw)((0, l.Ay)());
    if (!e) return null;
    let n = C[e],
        o = S[e],
        c = {
            currentBadge: (0, i.e0)(e),
            currentBadgeTextGradient: t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light,
            levelUpVideoSrc: t ? (null == o ? void 0 : o.dark) : null == o ? void 0 : o.light,
        },
        d = s.sp.indexOf(e);
    if (d > 0) {
        let e = s.sp[d - 1],
            n = C[e];
        (c.prevBadge = (0, i.e0)(e)),
            (c.prevBadgeTextGradient = t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light);
    }
    return c;
}
