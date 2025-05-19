d.d(t, { Z: () => Z });
var a = d(780384),
    c = d(410030),
    n = d(848572),
    s = d(291175),
    o = d(474936),
    l = d(861885),
    i = d(245013),
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
        [o.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: ' #D76C1F, #F79C53',
            light: ' #8E2A0B, #D4681C'
        },
        [o.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: ' #8F9E9E, #C0CBD1',
            light: ' #53555F, #697979'
        },
        [o.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: ' #ED8200, #FFCE46',
            light: ' #744400, #CC7000'
        },
        [o.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: ' #36AAFF, #7BE7CB',
            light: ' #006394, #0089EB'
        },
        [o.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: ' #8670FF, #C2BDFF',
            light: ' #5423CC, #8670FF'
        },
        [o.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: ' #009423, #67FF33',
            light: ' #005C15, #009E25'
        },
        [o.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: ' #E83068, #FF8F70',
            light: ' #881141, #DD1852'
        },
        [o.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: ' #829AE8, #DDB4FF, #A2D6FF',
            light: ' #6881D4, #956CB8, #5491A0'
        }
    },
    R = {
        [o.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: l.Z,
            light: h.Z
        },
        [o.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: i.Z,
            light: E.Z
        },
        [o.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: r.Z,
            light: m.Z
        },
        [o.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: f.Z,
            light: T.Z
        },
        [o.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: p.Z,
            light: g.Z
        },
        [o.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: _.Z,
            light: U.Z
        },
        [o.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: u.Z,
            light: M.Z
        },
        [o.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: b.Z,
            light: N.Z
        }
    };
function Z() {
    let e = (0, n.kG)(),
        t = (0, a.wj)((0, c.ZP)());
    if (!e) return null;
    let d = x[e],
        l = R[e],
        i = {
            currentBadge: (0, s.fv)(e),
            currentBadgeTextGradient: t ? (null == d ? void 0 : d.dark) : null == d ? void 0 : d.light,
            levelUpVideoSrc: t ? (null == l ? void 0 : l.dark) : null == l ? void 0 : l.light
        },
        r = o.Qh.indexOf(e);
    if (r > 0) {
        let e = o.Qh[r - 1],
            d = x[e];
        (i.prevBadge = (0, s.fv)(e)), (i.prevBadgeTextGradient = t ? (null == d ? void 0 : d.dark) : null == d ? void 0 : d.light);
    }
    return i;
}
