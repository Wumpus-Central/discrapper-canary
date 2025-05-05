n.d(t, {
    NA: () => Z,
    ZP: () => w,
    y$: () => D
});
var i,
    r,
    s = n(230711),
    l = n(100527),
    a = n(906732),
    o = n(300284),
    c = n(526167),
    d = n(63063),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    p = n(509614),
    h = n(880511),
    f = n(985443),
    b = n(612253),
    _ = n(872532),
    x = n(91342),
    E = n(181708),
    C = n(290650),
    j = n(751125),
    O = n(357003),
    S = n(904505),
    v = n(712626),
    T = n(386014),
    I = n(845571),
    N = n(220046),
    y = n(385874),
    A = n(371000),
    P = n(377679),
    R = n(825087),
    D = (((i = {}).SMALL = 'small'), (i.MEDIUM = 'medium'), (i.LARGE = 'large'), i),
    Z = (((r = {}).NEW_APP_STYLES = 'newAppStyles'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), (r.PERMADECOS = 'permadecos'), r);
let w = () => {
    let { analyticsLocations: e } = (0, a.ZP)(l.Z.PREMIUM_MARKETING_BENTO_BOX),
        t = (0, o.Z)({
            scrollPosition: m.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        n = (0, c.rO)(),
        i = d.Z.getArticleURL(u.BhN.REFERRAL_PROGRAM);
    return {
        whatsNewBoxes: {
            permadecos: {
                name: 'permadecos',
                title: g.intl.string(g.t['57ngoq']),
                description: g.intl.string(g.t.piFFjY),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: O.Z,
                onClick: t,
                videoUrl: O.Z,
                size: 'large'
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: g.intl.string(g.t.I9TYMj),
                description: g.intl.string(g.t.HMSHeH),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                onClick: t,
                previewImage: _,
                videoUrl: n ? I.ZP : N.ZP,
                size: 'large'
            },
            referralProgram: {
                name: 'referralProgram',
                title: g.intl.string(g.t.tPY4o6),
                description: g.intl.format(g.t.jRPQUF, { learnMoreLink: i }),
                previewImage: v.Z,
                videoUrl: n ? S.ZP : T.ZP,
                size: 'large'
            }
        },
        bestOfBoxes: {
            showYourStyle: {
                name: 'showYourStyle',
                title: g.intl.string(g.t.Ij3Zmp),
                description: g.intl.string(g.t.UsOUxc),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: b,
                onClick: t,
                videoUrl: n ? y.Z : A.Z,
                size: 'large'
            },
            yourSpace: {
                name: 'yourSpace',
                title: g.intl.string(g.t.Wme3nZ),
                description: g.intl.string(g.t['/aAIqa']),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: f,
                onClick: () => {
                    s.Z.open(u.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                videoUrl: n ? P.Z : R.Z,
                size: 'large'
            },
            emojis: {
                name: 'emojis',
                title: g.intl.string(g.t.zY5PPT),
                description: g.intl.string(g.t.R5Xag4),
                previewImage: p,
                videoUrl: n ? x.ZP : E.ZP,
                size: 'medium'
            },
            noLimits: {
                name: 'noLimits',
                title: g.intl.string(g.t['6b3ydH']),
                description: g.intl.string(g.t['Y+IJys']),
                previewImage: h,
                videoUrl: n ? C.ZP : j.ZP,
                size: 'medium'
            }
        }
    };
};
