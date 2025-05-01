n.d(t, {
    N: () => R,
    Z: () => D
});
var i,
    r = n(230711),
    s = n(100527),
    l = n(906732),
    a = n(300284),
    o = n(526167),
    c = n(63063),
    d = n(981631),
    u = n(526761),
    m = n(388032),
    p = n(509614),
    g = n(880511),
    h = n(985443),
    f = n(612253),
    b = n(872532),
    _ = n(91342),
    x = n(181708),
    E = n(290650),
    j = n(751125),
    C = n(357003),
    O = n(904505),
    S = n(712626),
    v = n(386014),
    T = n(845571),
    I = n(220046),
    N = n(385874),
    y = n(371000),
    A = n(377679),
    P = n(825087),
    R = (((i = {}).NEW_APP_STYLES = 'newAppStyles'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHOW_YOUR_STYLE = 'showYourStyle'), (i.YOUR_SPACE = 'yourSpace'), (i.EMOJIS = 'emojis'), (i.NO_LIMITS = 'noLimits'), (i.PERMADECOS = 'permadecos'), i);
let D = () => {
    let { analyticsLocations: e } = (0, l.ZP)(s.Z.PREMIUM_MARKETING_BENTO_BOX),
        t = (0, a.Z)({
            scrollPosition: u.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        n = (0, o.rO)(),
        i = c.Z.getArticleURL(d.BhN.REFERRAL_PROGRAM),
        R = {
            permadecos: {
                name: 'permadecos',
                title: m.intl.string(m.t['57ngoq']),
                description: m.intl.string(m.t.piFFjY),
                descriptionCta: m.intl.string(m.t.jVcuVV),
                previewImage: C.Z,
                onClick: t,
                videoUrl: C.Z
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: m.intl.string(m.t.I9TYMj),
                description: m.intl.string(m.t.HMSHeH),
                descriptionCta: m.intl.string(m.t.jVcuVV),
                onClick: t,
                previewImage: b,
                videoUrl: n ? T.ZP : I.ZP
            },
            referralProgram: {
                name: 'referralProgram',
                title: m.intl.string(m.t.tPY4o6),
                description: m.intl.format(m.t.jRPQUF, { learnMoreLink: i }),
                previewImage: S.Z,
                videoUrl: n ? O.ZP : v.ZP
            }
        };
    return {
        whatsNewBoxes: R,
        bestOfBoxes: {
            showYourStyle: {
                name: 'showYourStyle',
                title: m.intl.string(m.t.Ij3Zmp),
                description: m.intl.string(m.t.UsOUxc),
                descriptionCta: m.intl.string(m.t.jVcuVV),
                previewImage: f,
                onClick: t,
                videoUrl: n ? N.Z : y.Z
            },
            yourSpace: {
                name: 'yourSpace',
                title: m.intl.string(m.t.Wme3nZ),
                description: m.intl.string(m.t['/aAIqa']),
                descriptionCta: m.intl.string(m.t.jVcuVV),
                previewImage: h,
                onClick: () => {
                    r.Z.open(d.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                videoUrl: n ? A.Z : P.Z
            }
        },
        compactBestOfBoxes: {
            emojis: {
                name: 'emojis',
                title: m.intl.string(m.t.zY5PPT),
                description: m.intl.string(m.t.R5Xag4),
                previewImage: p,
                videoUrl: n ? _.ZP : x.ZP,
                isCompact: !0
            },
            noLimits: {
                name: 'noLimits',
                title: m.intl.string(m.t['6b3ydH']),
                description: m.intl.string(m.t['Y+IJys']),
                previewImage: g,
                videoUrl: n ? E.ZP : j.ZP,
                isCompact: !0
            }
        }
    };
};
