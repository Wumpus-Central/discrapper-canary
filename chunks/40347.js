n.d(t, { Z: () => A });
var r = n(780384),
    i = n(410030),
    a = n(804413),
    o = n(291175),
    s = n(474936),
    l = n(538092),
    c = n(533577),
    u = n(799974),
    d = n(264511),
    f = n(345614),
    _ = n(925773),
    p = n(298342),
    h = n(761822),
    m = n(131664),
    g = n(389457),
    E = n(673252),
    b = n(869708),
    y = n(288829),
    O = n(943323),
    v = n(958657),
    I = n(605493);
let T = {
        [s.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: " #D76C1F, #F79C53",
            light: " #8E2A0B, #D4681C",
        },
        [s.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: " #8F9E9E, #C0CBD1",
            light: " #53555F, #697979",
        },
        [s.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: " #ED8200, #FFCE46",
            light: " #744400, #CC7000",
        },
        [s.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: " #36AAFF, #7BE7CB",
            light: " #006394, #0089EB",
        },
        [s.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: " #8670FF, #C2BDFF",
            light: " #5423CC, #8670FF",
        },
        [s.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: " #009423, #67FF33",
            light: " #005C15, #009E25",
        },
        [s.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: " #E83068, #FF8F70",
            light: " #881141, #DD1852",
        },
        [s.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: " #829AE8, #DDB4FF, #A2D6FF",
            light: " #6881D4, #956CB8, #5491A0",
        },
    },
    S = {
        [s.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: l.Z,
            light: m.Z,
        },
        [s.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: c.Z,
            light: g.Z,
        },
        [s.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: u.Z,
            light: E.Z,
        },
        [s.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: d.Z,
            light: b.Z,
        },
        [s.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: f.Z,
            light: y.Z,
        },
        [s.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: _.Z,
            light: O.Z,
        },
        [s.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: p.Z,
            light: v.Z,
        },
        [s.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: h.Z,
            light: I.Z,
        },
    };
function A() {
    let e = (0, a.Z)(),
        t = (0, r.wj)((0, i.ZP)());
    if (!e) return null;
    let n = T[e],
        l = S[e],
        c = {
            currentBadge: (0, o.fv)(e),
            currentBadgeTextGradient: t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light,
            levelUpVideoSrc: t ? (null == l ? void 0 : l.dark) : null == l ? void 0 : l.light,
        },
        u = s.Qh.indexOf(e);
    if (u > 0) {
        let e = s.Qh[u - 1],
            n = T[e];
        (c.prevBadge = (0, o.fv)(e)),
            (c.prevBadgeTextGradient = t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light);
    }
    return c;
}
