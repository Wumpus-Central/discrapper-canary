n.d(t, { Z: () => T });
var i = n(780384),
    r = n(410030),
    s = n(804413),
    a = n(291175),
    l = n(474936),
    o = n(538092),
    c = n(533577),
    d = n(799974),
    u = n(264511),
    m = n(345614),
    p = n(925773),
    g = n(298342),
    h = n(761822),
    f = n(131664),
    b = n(389457),
    x = n(673252),
    _ = n(869708),
    j = n(288829),
    O = n(943323),
    E = n(958657),
    C = n(605493);
let v = {
        [l.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: ' #D76C1F, #F79C53',
            light: ' #8E2A0B, #D4681C'
        },
        [l.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: ' #8F9E9E, #C0CBD1',
            light: ' #53555F, #697979'
        },
        [l.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: ' #ED8200, #FFCE46',
            light: ' #744400, #CC7000'
        },
        [l.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: ' #36AAFF, #7BE7CB',
            light: ' #006394, #0089EB'
        },
        [l.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: ' #8670FF, #C2BDFF',
            light: ' #5423CC, #8670FF'
        },
        [l.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: ' #009423, #67FF33',
            light: ' #005C15, #009E25'
        },
        [l.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: ' #E83068, #FF8F70',
            light: ' #881141, #DD1852'
        },
        [l.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: ' #829AE8, #DDB4FF, #A2D6FF',
            light: ' #6881D4, #956CB8, #5491A0'
        }
    },
    S = {
        [l.VU.PREMIUM_TENURE_1_MONTH]: {
            dark: o.Z,
            light: f.Z
        },
        [l.VU.PREMIUM_TENURE_3_MONTH]: {
            dark: c.Z,
            light: b.Z
        },
        [l.VU.PREMIUM_TENURE_6_MONTH]: {
            dark: d.Z,
            light: x.Z
        },
        [l.VU.PREMIUM_TENURE_12_MONTH]: {
            dark: u.Z,
            light: _.Z
        },
        [l.VU.PREMIUM_TENURE_24_MONTH]: {
            dark: m.Z,
            light: j.Z
        },
        [l.VU.PREMIUM_TENURE_36_MONTH]: {
            dark: p.Z,
            light: O.Z
        },
        [l.VU.PREMIUM_TENURE_60_MONTH]: {
            dark: g.Z,
            light: E.Z
        },
        [l.VU.PREMIUM_TENURE_72_MONTH]: {
            dark: h.Z,
            light: C.Z
        }
    };
function T() {
    let e = (0, s.Z)(),
        t = (0, i.wj)((0, r.ZP)());
    if (!e) return null;
    let n = v[e],
        o = S[e],
        c = {
            currentBadge: (0, a.fv)(e),
            currentBadgeTextGradient: t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light,
            levelUpVideoSrc: t ? (null == o ? void 0 : o.dark) : null == o ? void 0 : o.light
        },
        d = l.Qh.indexOf(e);
    if (d > 0) {
        let e = l.Qh[d - 1],
            n = v[e];
        ((c.prevBadge = (0, a.fv)(e)), (c.prevBadgeTextGradient = t ? (null == n ? void 0 : n.dark) : null == n ? void 0 : n.light));
    }
    return c;
}
