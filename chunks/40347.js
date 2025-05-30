n.d(t, { Z: () => T });
var i = n(780384),
    r = n(410030),
    s = n(804413),
    l = n(291175),
    a = n(474936),
    o = n(538092),
    c = n(533577),
    d = n(799974),
    u = n(264511),
    m = n(345614),
    g = n(925773),
    p = n(298342),
    h = n(761822),
    f = n(131664),
    b = n(389457),
    _ = n(673252),
    x = n(869708),
    E = n(288829),
    C = n(943323),
    j = n(958657),
    O = n(605493);
let S = {
        [a.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: ' #D76C1F, #F79C53',
            light: ' #8E2A0B, #D4681C'
        },
        [a.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: ' #8F9E9E, #C0CBD1',
            light: ' #53555F, #697979'
        },
        [a.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: ' #ED8200, #FFCE46',
            light: ' #744400, #CC7000'
        },
        [a.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: ' #36AAFF, #7BE7CB',
            light: ' #006394, #0089EB'
        },
        [a.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: ' #8670FF, #C2BDFF',
            light: ' #5423CC, #8670FF'
        },
        [a.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: ' #009423, #67FF33',
            light: ' #005C15, #009E25'
        },
        [a.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: ' #E83068, #FF8F70',
            light: ' #881141, #DD1852'
        },
        [a.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: ' #829AE8, #DDB4FF, #A2D6FF',
            light: ' #6881D4, #956CB8, #5491A0'
        }
    },
    v = {
        [a.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: o.Z,
            light: f.Z
        },
        [a.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: c.Z,
            light: b.Z
        },
        [a.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: d.Z,
            light: _.Z
        },
        [a.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: u.Z,
            light: x.Z
        },
        [a.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: m.Z,
            light: E.Z
        },
        [a.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: g.Z,
            light: C.Z
        },
        [a.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: p.Z,
            light: j.Z
        },
        [a.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: h.Z,
            light: O.Z
        }
    };
function T() {
    let e = (0, s.Z)(),
        t = (0, i.wj)((0, r.ZP)());
    if (!e) return null;
    let n = S[e],
        o = v[e],
        c = {
            currentBadge: (0, l.fv)(e),
            currentBadgeTextGradient: t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light,
            levelUpVideoSrc: t ? (null == o ? void 0 : o.dark) : null == o ? void 0 : o.light
        },
        d = a.Qh.indexOf(e);
    if (d > 0) {
        let e = a.Qh[d - 1],
            n = S[e];
        (c.prevBadge = (0, l.fv)(e)), (c.prevBadgeTextGradient = t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light);
    }
    return c;
}
