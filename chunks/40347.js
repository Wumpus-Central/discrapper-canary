d.d(t, { Z: () => x });
var a = d(780384),
    c = d(410030),
    n = d(804413),
    s = d(291175),
    o = d(474936),
    i = d(538092),
    l = d(533577),
    r = d(799974),
    f = d(264511),
    _ = d(345614),
    u = d(925773),
    b = d(298342),
    E = d(761822),
    p = d(131664),
    T = d(389457),
    U = d(673252),
    m = d(869708),
    h = d(288829),
    g = d(943323),
    M = d(958657),
    N = d(605493);
let R = {
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
    Z = {
        [o.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: i.Z,
            light: p.Z
        },
        [o.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: l.Z,
            light: T.Z
        },
        [o.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: r.Z,
            light: U.Z
        },
        [o.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: f.Z,
            light: m.Z
        },
        [o.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: _.Z,
            light: h.Z
        },
        [o.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: u.Z,
            light: g.Z
        },
        [o.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: b.Z,
            light: M.Z
        },
        [o.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: E.Z,
            light: N.Z
        }
    };
function x() {
    let e = (0, n.Z)(),
        t = (0, a.wj)((0, c.ZP)());
    if (!e) return null;
    let d = R[e],
        i = Z[e],
        l = {
            currentBadge: (0, s.fv)(e),
            currentBadgeTextGradient: t ? (null == d ? void 0 : d.dark) : null == d ? void 0 : d.light,
            levelUpVideoSrc: t ? (null == i ? void 0 : i.dark) : null == i ? void 0 : i.light
        },
        r = o.Qh.indexOf(e);
    if (r > 0) {
        let e = o.Qh[r - 1],
            d = R[e];
        (l.prevBadge = (0, s.fv)(e)), (l.prevBadgeTextGradient = t ? (null == d ? void 0 : d.dark) : null == d ? void 0 : d.light);
    }
    return l;
}
