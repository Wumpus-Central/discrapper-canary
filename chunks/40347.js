d.d(t, { Z: () => Z });
var a = d(780384),
    n = d(410030),
    c = d(848572),
    o = d(291175),
    s = d(474936),
    i = d(861885),
    l = d(245013),
    r = d(662190),
    f = d(234372),
    p = d(23732),
    _ = d(643193),
    u = d(107120),
    b = d(261684),
    h = d(831631),
    E = d(594393),
    m = d(636774),
    T = d(705821),
    g = d(927982),
    U = d(254673),
    M = d(38932),
    N = d(56946);
let x = {
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
    R = {
        [s.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: i.Z,
            light: h.Z
        },
        [s.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: l.Z,
            light: E.Z
        },
        [s.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: r.Z,
            light: m.Z
        },
        [s.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: f.Z,
            light: T.Z
        },
        [s.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: p.Z,
            light: g.Z
        },
        [s.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: _.Z,
            light: U.Z
        },
        [s.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: u.Z,
            light: M.Z
        },
        [s.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: b.Z,
            light: N.Z
        }
    };
function Z() {
    let e = (0, c.kG)(),
        t = (0, a.wj)((0, n.ZP)());
    if (!e) return null;
    let d = x[e],
        i = R[e],
        l = {
            currentBadge: (0, o.fv)(e),
            currentBadgeTextGradient: t ? (null == d ? void 0 : d.dark) : null == d ? void 0 : d.light,
            levelUpVideoSrc: t ? (null == i ? void 0 : i.dark) : null == i ? void 0 : i.light
        },
        r = s.Qh.indexOf(e);
    if (r > 0) {
        let e = s.Qh[r - 1],
            d = x[e];
        (l.prevBadge = (0, o.fv)(e)), (l.prevBadgeTextGradient = t ? (null == d ? void 0 : d.dark) : null == d ? void 0 : d.light);
    }
    return l;
}
