n.d(t, {
    NA: () => L,
    ZP: () => B,
    y$: () => k
});
var i,
    r,
    s = n(230711),
    l = n(100527),
    a = n(906732),
    o = n(300284),
    c = n(526167),
    d = n(63063),
    u = n(763365),
    m = n(981631),
    g = n(526761),
    p = n(388032),
    h = n(888723),
    f = n(509614),
    b = n(880511),
    _ = n(985443),
    x = n(612253),
    E = n(872532),
    C = n(91342),
    O = n(181708),
    j = n(290650),
    S = n(751125),
    v = n(357003),
    T = n(904505),
    N = n(712626),
    I = n(386014),
    y = n(845571),
    A = n(220046),
    P = n(385874),
    R = n(371000),
    D = n(377679),
    Z = n(825087);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
var k = (((i = {}).SMALL = 'small'), (i.MEDIUM = 'medium'), (i.LARGE = 'large'), i),
    L = (((r = {}).NEW_APP_STYLES = 'newAppStyles'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), (r.PERMADECOS = 'permadecos'), r);
let B = () => {
    let { analyticsLocations: e } = (0, a.ZP)(l.Z.PREMIUM_MARKETING_BENTO_BOX),
        t = (0, o.Z)({
            scrollPosition: g.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        n = (0, c.rO)(),
        i = d.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM),
        { whatsNewSectionVariant: r } = u.T.useExperiment({ location: 'WhatsNewSection' });
    return {
        whatsNewBoxes: {
            permadecos: {
                name: 'permadecos',
                title: p.intl.string(p.t['57ngoq']),
                description: p.intl.string(p.t.piFFjY),
                descriptionCta: p.intl.string(p.t.jVcuVV),
                previewImage: v.Z,
                onClick: t,
                videoUrl: v.Z,
                size: r === u.h.VARIANT_2 ? 'small' : 'large'
            },
            serverProfiles: w(
                {
                    name: 'serverProfiles',
                    title: p.intl.string(p.t.I9TYMj),
                    description: p.intl.string(p.t.HMSHeH),
                    descriptionCta: p.intl.string(p.t.jVcuVV),
                    onClick: t,
                    previewImage: E,
                    videoUrl: n ? y.ZP : A.ZP,
                    size: r === u.h.VARIANT_1 ? 'medium' : r === u.h.VARIANT_2 ? 'small' : 'large'
                },
                r === u.h.VARIANT_2 && { customVideoStyle: h.elevateProfileVideo }
            ),
            referralProgram: w(
                {
                    name: 'referralProgram',
                    title: p.intl.string(p.t.tPY4o6),
                    description: p.intl.format(p.t.jRPQUF, { learnMoreLink: i }),
                    previewImage: N.Z,
                    videoUrl: n ? T.ZP : I.ZP,
                    size: r === u.h.VARIANT_1 ? 'medium' : r === u.h.VARIANT_2 ? 'small' : 'large'
                },
                r === u.h.VARIANT_2 && { customVideoStyle: h.shareNitroVideo }
            )
        },
        bestOfBoxes: {
            showYourStyle: {
                name: 'showYourStyle',
                title: p.intl.string(p.t.Ij3Zmp),
                description: p.intl.string(p.t.UsOUxc),
                descriptionCta: p.intl.string(p.t.jVcuVV),
                previewImage: x,
                onClick: t,
                videoUrl: n ? P.Z : R.Z,
                size: 'large'
            },
            yourSpace: {
                name: 'yourSpace',
                title: p.intl.string(p.t.Wme3nZ),
                description: p.intl.string(p.t['/aAIqa']),
                descriptionCta: p.intl.string(p.t.jVcuVV),
                previewImage: _,
                onClick: () => {
                    s.Z.open(m.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                videoUrl: n ? D.Z : Z.Z,
                size: 'large'
            },
            emojis: {
                name: 'emojis',
                title: p.intl.string(p.t.zY5PPT),
                description: p.intl.string(p.t.R5Xag4),
                previewImage: f,
                videoUrl: n ? C.ZP : O.ZP,
                size: 'medium'
            },
            noLimits: {
                name: 'noLimits',
                title: p.intl.string(p.t['6b3ydH']),
                description: p.intl.string(p.t['Y+IJys']),
                previewImage: b,
                videoUrl: n ? j.ZP : S.ZP,
                size: 'medium'
            }
        }
    };
};
