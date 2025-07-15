n.d(t, {
    NA: () => q,
    ZP: () => J,
    y$: () => K
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
    E = n(295349),
    O = n(631572),
    C = n(238027),
    v = n(997585),
    S = n(305516),
    T = n(980984),
    N = n(38244),
    I = n(491878),
    y = n(518971),
    A = n(85726),
    P = n(91342),
    R = n(181708),
    D = n(290650),
    Z = n(751125),
    w = n(357003),
    k = n(904505),
    L = n(712626),
    B = n(386014),
    M = n(845571),
    U = n(220046),
    V = n(385874),
    G = n(371000),
    F = n(310960),
    H = n(815581),
    z = n(479390),
    W = n(377679),
    Y = n(825087),
    K = (((i = {}).SMALL = 'small'), (i.MEDIUM = 'medium'), (i.LARGE = 'large'), i),
    q = (((r = {}).REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), (r.PERMADECOS = 'permadecos'), (r.VOICE_FILTERS = 'voiceFilters'), r);
let X = (e, t) =>
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
                    thumbnail: H.Z,
                    assetUrl: e ? F.Z : z.Z
                },
                permadecos: {
                    thumbnail: w.Z,
                    assetUrl: w.Z
                },
                serverProfiles: {
                    thumbnail: j,
                    assetUrl: e ? M.ZP : U.ZP
                }
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: S.Z,
                          assetUrl: T.Z
                      },
                      showYourStyle: {
                          thumbnail: N.Z,
                          assetUrl: I.Z
                      },
                      yourSpace: {
                          thumbnail: y.Z,
                          assetUrl: A.Z
                      },
                      emojis: {
                          thumbnail: E.Z,
                          assetUrl: O.Z
                      },
                      noLimits: {
                          thumbnail: C.Z,
                          assetUrl: v.Z
                      }
                  }
                : {
                      referralProgram: {
                          thumbnail: L.Z,
                          assetUrl: e ? k.ZP : B.ZP
                      },
                      showYourStyle: {
                          thumbnail: _,
                          assetUrl: e ? V.Z : G.Z
                      },
                      yourSpace: {
                          thumbnail: x,
                          assetUrl: e ? W.Z : Y.Z
                      },
                      emojis: {
                          thumbnail: f,
                          assetUrl: e ? P.ZP : R.ZP
                      },
                      noLimits: {
                          thumbnail: b,
                          assetUrl: e ? D.ZP : Z.ZP
                      }
                  }
        ),
    J = () => {
        let { analyticsLocations: e } = (0, l.ZP)(a.Z.PREMIUM_MARKETING_BENTO_BOX),
            t = (0, o.Z)({
                scrollPosition: g.Y_.TRY_IT_OUT,
                analyticsLocations: e
            }),
            n = (0, c.rO)(),
            i = d.Z.getArticleURL(p.BhN.REFERRAL_PROGRAM),
            r = (0, m.Z)({ location: 'WhatsNewSection' }),
            f = X(n, (0, u.Z)({ location: 'useBentoBoxes' })),
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
            E = {
                name: 'showYourStyle',
                title: h.intl.string(h.t.Ij3Zmp),
                description: h.intl.string(h.t.UsOUxc),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: f.showYourStyle.thumbnail,
                onClick: t,
                videoUrl: f.showYourStyle.assetUrl
            },
            O = {
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
            C = {
                name: 'emojis',
                title: h.intl.string(h.t.zY5PPT),
                description: h.intl.string(h.t.R5Xag4),
                previewImage: f.emojis.thumbnail,
                videoUrl: f.emojis.assetUrl
            };
        return {
            whatsNewBoxes: r ? [[b], [x, j]] : [[x], [_, j]],
            bestOfBoxes: [
                [E],
                [O],
                [
                    C,
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
