n.d(t, {
    NA: () => B,
    ZP: () => M,
    y$: () => L
});
var i,
    r,
    s = n(230711),
    l = n(100527),
    a = n(906732),
    o = n(300284),
    c = n(526167),
    d = n(63063),
    u = n(963590),
    m = n(981631),
    p = n(526761),
    g = n(388032),
    h = n(509614),
    f = n(880511),
    b = n(985443),
    x = n(612253),
    _ = n(872532),
    E = n(91342),
    j = n(181708),
    O = n(290650),
    C = n(751125),
    S = n(357003),
    v = n(904505),
    T = n(712626),
    N = n(386014),
    I = n(845571),
    y = n(220046),
    A = n(385874),
    P = n(371000),
    R = n(310960),
    D = n(815581),
    Z = n(479390),
    w = n(377679),
    k = n(825087),
    L = (((i = {}).SMALL = 'small'), (i.MEDIUM = 'medium'), (i.LARGE = 'large'), i),
    B = (((r = {}).NEW_APP_STYLES = 'newAppStyles'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), (r.PERMADECOS = 'permadecos'), (r.VOICE_FILTERS = 'voiceFilters'), r);
let M = () => {
    let { analyticsLocations: e } = (0, a.ZP)(l.Z.PREMIUM_MARKETING_BENTO_BOX),
        t = (0, o.Z)({
            scrollPosition: p.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        n = (0, c.rO)(),
        i = d.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM),
        r = (0, u.Z)({ location: 'WhatsNewSection' }),
        L = {
            name: 'voiceFilters',
            title: g.intl.format(g.t.iAzLOj, {}),
            description: g.intl.format(g.t['NT0/pa'], { learnMoreLink: m.EYA.VOICE_FILTERS_BLOG }),
            descriptionCta: g.intl.string(g.t.jVcuVV),
            previewImage: D.Z,
            videoUrl: n ? R.Z : Z.Z,
            badgeText: g.intl.string(g.t.EYxi0t)
        },
        B = {
            name: 'permadecos',
            title: g.intl.string(g.t['57ngoq']),
            description: g.intl.string(g.t.piFFjY),
            descriptionCta: g.intl.string(g.t.jVcuVV),
            previewImage: S.Z,
            onClick: t,
            videoUrl: S.Z
        },
        M = {
            name: 'serverProfiles',
            title: g.intl.string(g.t.I9TYMj),
            description: g.intl.string(g.t.HMSHeH),
            descriptionCta: g.intl.string(g.t.jVcuVV),
            onClick: t,
            previewImage: _,
            videoUrl: n ? I.ZP : y.ZP
        },
        U = {
            name: 'referralProgram',
            title: g.intl.string(g.t.tPY4o6),
            description: g.intl.format(g.t.jRPQUF, { learnMoreLink: i }),
            previewImage: T.Z,
            videoUrl: n ? v.ZP : N.ZP
        },
        V = {
            name: 'showYourStyle',
            title: g.intl.string(g.t.Ij3Zmp),
            description: g.intl.string(g.t.UsOUxc),
            descriptionCta: g.intl.string(g.t.jVcuVV),
            previewImage: x,
            onClick: t,
            videoUrl: n ? A.Z : P.Z
        },
        G = {
            name: 'yourSpace',
            title: g.intl.string(g.t.Wme3nZ),
            description: g.intl.string(g.t['/aAIqa']),
            descriptionCta: g.intl.string(g.t.jVcuVV),
            previewImage: b,
            onClick: () => {
                s.Z.open(m.oAB.APPEARANCE, null, {
                    openWithoutBackstack: !0,
                    analyticsLocations: e
                });
            },
            videoUrl: n ? w.Z : k.Z
        },
        F = {
            name: 'emojis',
            title: g.intl.string(g.t.zY5PPT),
            description: g.intl.string(g.t.R5Xag4),
            previewImage: h,
            videoUrl: n ? E.ZP : j.ZP
        };
    return {
        whatsNewBoxes: r ? [[L], [B, U]] : [[B], [M, U]],
        bestOfBoxes: [
            [V],
            [G],
            [
                F,
                {
                    name: 'noLimits',
                    title: g.intl.string(g.t['6b3ydH']),
                    description: g.intl.string(g.t['Y+IJys']),
                    previewImage: f,
                    videoUrl: n ? O.ZP : C.ZP
                }
            ]
        ]
    };
};
