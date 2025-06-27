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
    g = n(526761),
    p = n(388032),
    h = n(509614),
    f = n(880511),
    b = n(985443),
    _ = n(612253),
    x = n(872532),
    E = n(91342),
    j = n(181708),
    C = n(290650),
    O = n(751125),
    S = n(357003),
    v = n(904505),
    T = n(712626),
    I = n(386014),
    N = n(845571),
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
            scrollPosition: g.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        n = (0, c.rO)(),
        i = d.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM),
        r = (0, u.Z)({ location: 'WhatsNewSection' }),
        L = {
            name: 'voiceFilters',
            title: p.intl.format(p.t.iAzLOj, {}),
            description: p.intl.format(p.t['NT0/pa'], { learnMoreLink: m.EYA.VOICE_FILTERS_BLOG }),
            descriptionCta: p.intl.string(p.t.jVcuVV),
            previewImage: D.Z,
            videoUrl: n ? R.Z : Z.Z,
            badgeText: p.intl.string(p.t.EYxi0t)
        },
        B = {
            name: 'permadecos',
            title: p.intl.string(p.t['57ngoq']),
            description: p.intl.string(p.t.piFFjY),
            descriptionCta: p.intl.string(p.t.jVcuVV),
            previewImage: S.Z,
            onClick: t,
            videoUrl: S.Z
        },
        M = {
            name: 'serverProfiles',
            title: p.intl.string(p.t.I9TYMj),
            description: p.intl.string(p.t.HMSHeH),
            descriptionCta: p.intl.string(p.t.jVcuVV),
            onClick: t,
            previewImage: x,
            videoUrl: n ? N.ZP : y.ZP
        },
        U = {
            name: 'referralProgram',
            title: p.intl.string(p.t.tPY4o6),
            description: p.intl.format(p.t.jRPQUF, { learnMoreLink: i }),
            previewImage: T.Z,
            videoUrl: n ? v.ZP : I.ZP
        },
        V = {
            name: 'showYourStyle',
            title: p.intl.string(p.t.Ij3Zmp),
            description: p.intl.string(p.t.UsOUxc),
            descriptionCta: p.intl.string(p.t.jVcuVV),
            previewImage: _,
            onClick: t,
            videoUrl: n ? A.Z : P.Z
        },
        G = {
            name: 'yourSpace',
            title: p.intl.string(p.t.Wme3nZ),
            description: p.intl.string(p.t['/aAIqa']),
            descriptionCta: p.intl.string(p.t.jVcuVV),
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
            title: p.intl.string(p.t.zY5PPT),
            description: p.intl.string(p.t.R5Xag4),
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
                    title: p.intl.string(p.t['6b3ydH']),
                    description: p.intl.string(p.t['Y+IJys']),
                    previewImage: f,
                    videoUrl: n ? C.ZP : O.ZP
                }
            ]
        ]
    };
};
