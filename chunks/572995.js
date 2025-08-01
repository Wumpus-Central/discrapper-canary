n.d(t, {
    NA: () => ee,
    ZP: () => en,
    y$: () => $
});
var i,
    r,
    s = n(230711),
    a = n(100527),
    l = n(906732),
    o = n(300284),
    c = n(526167),
    d = n(63063),
    u = n(220654),
    m = n(963590),
    p = n(981631),
    g = n(526761),
    h = n(388032),
    f = n(509614),
    b = n(880511),
    x = n(985443),
    _ = n(612253),
    j = n(872532),
    O = n(404583),
    C = n(295349),
    E = n(631572),
    v = n(999675),
    S = n(238027),
    T = n(997585),
    N = n(138431),
    I = n(305516),
    y = n(980984),
    A = n(952842),
    P = n(38244),
    R = n(491878),
    D = n(751049),
    Z = n(518971),
    w = n(85726),
    k = n(91342),
    L = n(181708),
    B = n(290650),
    M = n(751125),
    U = n(357003),
    V = n(904505),
    G = n(712626),
    F = n(386014),
    H = n(845571),
    W = n(220046),
    z = n(385874),
    Y = n(371000),
    K = n(310960),
    q = n(815581),
    X = n(479390),
    J = n(377679),
    Q = n(825087),
    $ = (((i = {}).SMALL = 'small'), (i.MEDIUM = 'medium'), (i.LARGE = 'large'), i),
    ee = (((r = {}).REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), (r.PERMADECOS = 'permadecos'), (r.VOICE_FILTERS = 'voiceFilters'), r);
let et = (e, t) =>
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        ((i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i));
                    }));
            }
            return e;
        })(
            {
                voiceFilters: {
                    thumbnail: q.Z,
                    assetUrl: e ? K.Z : X.Z
                },
                permadecos: {
                    thumbnail: U.Z,
                    assetUrl: U.Z
                },
                serverProfiles: {
                    thumbnail: j,
                    assetUrl: e ? H.ZP : W.ZP
                }
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: I.Z,
                          assetUrl: e ? N.Z : y.Z
                      },
                      showYourStyle: {
                          thumbnail: P.Z,
                          assetUrl: e ? A.Z : R.Z
                      },
                      yourSpace: {
                          thumbnail: Z.Z,
                          assetUrl: e ? D.Z : w.Z
                      },
                      emojis: {
                          thumbnail: C.Z,
                          assetUrl: e ? O.Z : E.Z
                      },
                      noLimits: {
                          thumbnail: S.Z,
                          assetUrl: e ? v.Z : T.Z
                      }
                  }
                : {
                      referralProgram: {
                          thumbnail: G.Z,
                          assetUrl: e ? V.ZP : F.ZP
                      },
                      showYourStyle: {
                          thumbnail: _,
                          assetUrl: e ? z.Z : Y.Z
                      },
                      yourSpace: {
                          thumbnail: x,
                          assetUrl: e ? J.Z : Q.Z
                      },
                      emojis: {
                          thumbnail: f,
                          assetUrl: e ? k.ZP : L.ZP
                      },
                      noLimits: {
                          thumbnail: b,
                          assetUrl: e ? B.ZP : M.ZP
                      }
                  }
        ),
    en = () => {
        let { analyticsLocations: e } = (0, l.ZP)(a.Z.PREMIUM_MARKETING_BENTO_BOX),
            t = (0, o.Z)({
                scrollPosition: g.Y_.TRY_IT_OUT,
                analyticsLocations: e
            }),
            n = (0, c.rO)(),
            i = d.Z.getArticleURL(p.BhN.REFERRAL_PROGRAM),
            r = (0, m.Z)({ location: 'WhatsNewSection' }),
            f = et(n, (0, u.Z)({ location: 'useBentoBoxes' })),
            b = {
                name: 'voiceFilters',
                title: h.intl.format(h.t.iAzLOj, {}),
                description: h.intl.format(h.t['NT0/pa'], { learnMoreLink: p.EYA.VOICE_FILTERS_BLOG }),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: f.voiceFilters.thumbnail,
                videoUrl: f.voiceFilters.assetUrl,
                badgeText: h.intl.string(h.t.EYxi0t)
            },
            x = {
                name: 'permadecos',
                title: h.intl.string(h.t['57ngoq']),
                description: h.intl.string(h.t.piFFjY),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: f.permadecos.thumbnail,
                onClick: t,
                videoUrl: f.permadecos.assetUrl
            },
            _ = {
                name: 'serverProfiles',
                title: h.intl.string(h.t.I9TYMj),
                description: h.intl.string(h.t.HMSHeH),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                onClick: t,
                previewImage: f.serverProfiles.thumbnail,
                videoUrl: f.serverProfiles.assetUrl
            },
            j = {
                name: 'referralProgram',
                title: h.intl.string(h.t.tPY4o6),
                description: h.intl.format(h.t.jRPQUF, { learnMoreLink: i }),
                previewImage: f.referralProgram.thumbnail,
                videoUrl: f.referralProgram.assetUrl
            },
            O = {
                name: 'showYourStyle',
                title: h.intl.string(h.t.Ij3Zmp),
                description: h.intl.string(h.t.UsOUxc),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: f.showYourStyle.thumbnail,
                onClick: t,
                videoUrl: f.showYourStyle.assetUrl
            },
            C = {
                name: 'yourSpace',
                title: h.intl.string(h.t.Wme3nZ),
                description: h.intl.string(h.t['/aAIqa']),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: f.yourSpace.thumbnail,
                onClick: () => {
                    s.Z.open(p.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                videoUrl: f.yourSpace.assetUrl
            },
            E = {
                name: 'emojis',
                title: h.intl.string(h.t.zY5PPT),
                description: h.intl.string(h.t.R5Xag4),
                previewImage: f.emojis.thumbnail,
                videoUrl: f.emojis.assetUrl
            };
        return {
            whatsNewBoxes: r ? [[b], [x, j]] : [[x], [_, j]],
            bestOfBoxes: [
                [O],
                [C],
                [
                    E,
                    {
                        name: 'noLimits',
                        title: h.intl.string(h.t['6b3ydH']),
                        description: h.intl.string(h.t['Y+IJys']),
                        previewImage: f.noLimits.thumbnail,
                        videoUrl: f.noLimits.assetUrl
                    }
                ]
            ]
        };
    };
