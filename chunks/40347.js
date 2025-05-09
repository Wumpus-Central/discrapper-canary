a.d(t, { Z: () => N });
var d = a(780384),
    n = a(410030),
    c = a(848572),
    o = a(291175),
    s = a(474936),
    i = a(245013),
    l = a(662190),
    r = a(234372),
    f = a(23732),
    p = a(643193),
    _ = a(107120),
    u = a(261684),
    b = a(594393),
    h = a(636774),
    E = a(705821),
    T = a(927982),
    m = a(254673),
    g = a(38932),
    U = a(56946);
let M = {
        [s.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: ' #D76C1F, #F79C53',
            light: ' #8E2A0B, #D4681C'
        },
        [s.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: ' #8F9E9E, #C0CBD1',
            light: ' #53555F, #697979'
        },
        [s.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: ' #ED8200, #FFCE46',
            light: ' #744400, #CC7000'
        },
        [s.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: ' #36AAFF, #7BE7CB',
            light: ' #006394, #0089EB'
        },
        [s.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: ' #8670FF, #C2BDFF',
            light: ' #5423CC, #8670FF'
        },
        [s.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: ' #009423, #67FF33',
            light: ' #005C15, #009E25'
        },
        [s.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: ' #E83068, #FF8F70',
            light: ' #881141, #DD1852'
        },
        [s.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: ' #829AE8, #DDB4FF, #A2D6FF',
            light: ' #6881D4, #956CB8, #5491A0'
        }
    },
    x = {
        [s.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: i.Z,
            light: b.Z
        },
        [s.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: l.Z,
            light: h.Z
        },
        [s.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: r.Z,
            light: E.Z
        },
        [s.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: f.Z,
            light: T.Z
        },
        [s.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: p.Z,
            light: m.Z
        },
        [s.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: _.Z,
            light: g.Z
        },
        [s.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: u.Z,
            light: U.Z
        }
    };
function N() {
    let e = (0, c.kG)(),
        t = (0, d.wj)((0, n.ZP)()),
        a = e ? s.Qh[s.Qh.indexOf(e) - 1] : null;
    if (!e || !a) return null;
    let i = M[e],
        l = M[a],
        r = x[e];
    return {
        currentBadge: (0, o.fv)(e),
        prevBadge: (0, o.fv)(a),
        currentBadgeTextGradient: t ? (null == i ? void 0 : i.dark) : null == i ? void 0 : i.light,
        prevBadgeTextGradient: t ? (null == l ? void 0 : l.dark) : null == l ? void 0 : l.light,
        levelUpVideoSrc: t ? (null == r ? void 0 : r.dark) : null == r ? void 0 : r.light
    };
}
