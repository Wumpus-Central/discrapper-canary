n.d(t, {
    NA: () => w,
    ZP: () => k,
    y$: () => Z
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
    R = n(377679),
    D = n(825087),
    Z = (((i = {}).SMALL = 'small'), (i.MEDIUM = 'medium'), (i.LARGE = 'large'), i),
    w = (((r = {}).NEW_APP_STYLES = 'newAppStyles'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), (r.PERMADECOS = 'permadecos'), r);
let k = () => {
    var e, t;
    let { analyticsLocations: n } = (0, a.ZP)(l.Z.PREMIUM_MARKETING_BENTO_BOX),
        i = (0, o.Z)({
            scrollPosition: g.Y_.TRY_IT_OUT,
            analyticsLocations: n
        }),
        r = (0, c.rO)(),
        Z = d.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM),
        { whatsNewSectionVariant: w } = u.T.useExperiment({ location: 'WhatsNewSection' });
    return {
        whatsNewBoxes: {
            permadecos: {
                name: 'permadecos',
                title: p.intl.string(p.t['57ngoq']),
                description: p.intl.string(p.t.piFFjY),
                descriptionCta: p.intl.string(p.t.jVcuVV),
                previewImage: S.Z,
                onClick: i,
                videoUrl: S.Z,
                size: w === u.h.VARIANT_2 ? 'small' : 'large'
            },
            serverProfiles:
                ((e = (function (e) {
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
                })(
                    {
                        name: 'serverProfiles',
                        title: p.intl.string(p.t.I9TYMj),
                        description: p.intl.string(p.t.HMSHeH)
                    },
                    w !== u.h.VARIANT_2 && {
                        descriptionCta: p.intl.string(p.t.jVcuVV),
                        onClick: i
                    }
                )),
                (t = t =
                    {
                        previewImage: x,
                        videoUrl: r ? N.ZP : y.ZP,
                        size: w === u.h.VARIANT_1 ? 'medium' : w === u.h.VARIANT_2 ? 'small' : 'large'
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            referralProgram: {
                name: 'referralProgram',
                title: p.intl.string(p.t.tPY4o6),
                description: p.intl.format(p.t.jRPQUF, { learnMoreLink: Z }),
                previewImage: T.Z,
                videoUrl: r ? v.ZP : I.ZP,
                size: w === u.h.VARIANT_1 ? 'medium' : w === u.h.VARIANT_2 ? 'small' : 'large'
            }
        },
        bestOfBoxes: {
            showYourStyle: {
                name: 'showYourStyle',
                title: p.intl.string(p.t.Ij3Zmp),
                description: p.intl.string(p.t.UsOUxc),
                descriptionCta: p.intl.string(p.t.jVcuVV),
                previewImage: _,
                onClick: i,
                videoUrl: r ? A.Z : P.Z,
                size: 'large'
            },
            yourSpace: {
                name: 'yourSpace',
                title: p.intl.string(p.t.Wme3nZ),
                description: p.intl.string(p.t['/aAIqa']),
                descriptionCta: p.intl.string(p.t.jVcuVV),
                previewImage: b,
                onClick: () => {
                    s.Z.open(m.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: n
                    });
                },
                videoUrl: r ? R.Z : D.Z,
                size: 'large'
            },
            emojis: {
                name: 'emojis',
                title: p.intl.string(p.t.zY5PPT),
                description: p.intl.string(p.t.R5Xag4),
                previewImage: h,
                videoUrl: r ? E.ZP : j.ZP,
                size: 'medium'
            },
            noLimits: {
                name: 'noLimits',
                title: p.intl.string(p.t['6b3ydH']),
                description: p.intl.string(p.t['Y+IJys']),
                previewImage: f,
                videoUrl: r ? C.ZP : O.ZP,
                size: 'medium'
            }
        }
    };
};
