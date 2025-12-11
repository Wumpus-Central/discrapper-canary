n.d(t, {
    NA: () => ed,
    ZP: () => ep,
    y$: () => eu,
});
var r = n(473749),
    i = n(100527),
    a = n(906732),
    o = n(550385),
    s = n(594928),
    l = n(829716),
    c = n(300284),
    u = n(313789),
    d = n(518596),
    f = n(526167),
    p = n(63063),
    _ = n(283066),
    m = n(340625),
    h = n(469165),
    g = n(981631),
    E = n(526761),
    b = n(388032),
    y = n(990551),
    O = n(324243),
    v = n(509614),
    S = n(880511),
    I = n(985443),
    T = n(612253),
    C = n(872532),
    A = n(836236),
    N = n(94314),
    P = n(548475),
    R = n(967830),
    w = n(742694),
    D = n(406459),
    x = n(91830),
    L = n(32357),
    j = n(147146),
    M = n(801794),
    k = n(739790),
    U = n(779235),
    G = n(511974),
    Z = n(508111),
    B = n(459872),
    F = n(860751),
    V = n(584470),
    H = n(810933),
    Y = n(857245),
    W = n(383057),
    K = n(370026),
    z = n(120368),
    q = n(73500),
    Q = n(763341),
    X = n(778851),
    J = n(399299),
    $ = n(646560),
    ee = n(27217),
    et = n(918009),
    en = n(378325),
    er = n(962526),
    ei = n(670948),
    ea = n(965468),
    eo = n(222419),
    es = n(740778);
function el(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                el(e, t, n[t]);
            });
    }
    return e;
}
var eu = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
    })({}),
    ed = (function (e) {
        return (
            (e.REFERRAL_PROGRAM = "referralProgram"),
            (e.SERVER_PROFILES = "serverProfiles"),
            (e.SHOW_YOUR_STYLE = "showYourStyle"),
            (e.YOUR_SPACE = "yourSpace"),
            (e.EMOJIS = "emojis"),
            (e.NO_LIMITS = "noLimits"),
            (e.CUSTOM_THEMES = "customThemes"),
            (e.DISPLAY_NAME_STYLES = "displayNameStyles"),
            (e.RECURRING_3P_PROMOTIONS = "recurring3PPromotions"),
            e
        );
    })({});
let ef = (e, t) =>
        ec(
            {
                serverProfiles: {
                    thumbnail: C,
                    assetUrl: e ? en.ZP : er.ZP,
                },
                customThemes: {
                    thumbnail: K.Z,
                    assetUrl: e ? W.Z : z.Z,
                },
                displayNameStyles: {
                    thumbnail: P.Z,
                    assetUrl: e ? N.Z : R.Z,
                },
                recurring3PPromotions: {
                    thumbnail: A.Z,
                    assetUrl: " ",
                },
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: U.Z,
                          assetUrl: e ? k.Z : G.Z,
                      },
                      showYourStyle: {
                          thumbnail: B.Z,
                          assetUrl: e ? Z.Z : F.Z,
                      },
                      yourSpace: {
                          thumbnail: H.Z,
                          assetUrl: e ? V.Z : Y.Z,
                      },
                      emojis: {
                          thumbnail: D.Z,
                          assetUrl: e ? w.Z : x.Z,
                      },
                      noLimits: {
                          thumbnail: j.Z,
                          assetUrl: e ? L.Z : M.Z,
                      },
                  }
                : {
                      referralProgram: {
                          thumbnail: ee.Z,
                          assetUrl: e ? $.ZP : et.ZP,
                      },
                      showYourStyle: {
                          thumbnail: T,
                          assetUrl: e ? ei.Z : ea.Z,
                      },
                      yourSpace: {
                          thumbnail: I,
                          assetUrl: e ? eo.Z : es.Z,
                      },
                      emojis: {
                          thumbnail: v,
                          assetUrl: e ? q.ZP : Q.ZP,
                      },
                      noLimits: {
                          thumbnail: S,
                          assetUrl: e ? X.ZP : J.ZP,
                      },
                  },
        ),
    ep = () => {
        let { analyticsLocations: e } = (0, a.ZP)(i.Z.PREMIUM_MARKETING_BENTO_BOX),
            t = (0, c.Z)({
                scrollPosition: E.Y_.TRY_IT_OUT,
                analyticsLocations: e,
            }),
            v = s.JH.useExperiment({ location: "useBentoBoxes" }).enabled,
            S = m.Z.useExperiment({ location: "useBentoBoxes" }),
            I = (0, r.useCallback)(() => {
                (0, d.openUserSettings)(
                    u.n.PROFILE_PANEL,
                    {
                        section: g.oAB.PROFILE_CUSTOMIZATION,
                        analyticsLocations: e,
                    },
                    () => (0, l.I)({ analyticsLocations: e }),
                );
            }, [e]),
            T = () => {
                {
                    let { openUserSettings: t } = n(518596);
                    t(u.n.APPEARANCE_PANEL, {
                        section: g.oAB.APPEARANCE,
                        analyticsLocations: e,
                    });
                }
            },
            C = (0, f.rO)(),
            A = p.Z.getArticleURL(g.BhN.REFERRAL_PROGRAM),
            N = ef(C, (0, _.Z)({ location: "useBentoBoxes" })),
            P = {
                name: "serverProfiles",
                title: b.intl.string(b.t.I9TYMg),
                description: b.intl.string(b.t.HMSHeH),
                descriptionCta: b.intl.string(b.t.jVcuVY),
                onClick: t,
                previewImage: N.serverProfiles.thumbnail,
                videoUrl: N.serverProfiles.assetUrl,
            },
            R = {
                name: "referralProgram",
                title: b.intl.string(b.t.tPY4o9),
                description: b.intl.format(b.t.jRPQUH, { learnMoreLink: A }),
                previewImage: N.referralProgram.thumbnail,
                videoUrl: N.referralProgram.assetUrl,
            },
            w = {
                name: "customThemes",
                title: b.intl.string(y.default.XokIHM),
                description: b.intl.string(y.default["7esQMC"]),
                descriptionCta: b.intl.string(b.t.jVcuVY),
                previewImage: N.customThemes.thumbnail,
                onClick: () => {
                    (0, o.XO)(o.wh.CUSTOM_THEME);
                },
                videoUrl: N.customThemes.assetUrl,
            },
            D = {
                name: "displayNameStyles",
                title: b.intl.string(O.default.ABtBDQ),
                description: b.intl.string(O.default.MFNXZh),
                descriptionCta: b.intl.string(b.t.jVcuVY),
                previewImage: N.displayNameStyles.thumbnail,
                onClick: I,
                badgeText: b.intl.string(b.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: N.displayNameStyles.assetUrl,
            },
            x = {
                name: "recurring3PPromotions",
                title: b.intl.string(b.t.m7PucM),
                description: b.intl.format(b.t.mqSNPd, {}),
                descriptionCta: b.intl.formatToPlainString(b.t.Bf1cBD, {
                    helpdeskArticle: p.Z.getArticleURL(g.BhN.RECURRING_PROMOTION),
                }),
                onClick: () => (0, h.wQ)({ analyticsLocations: e }),
                badgeText: b.intl.string(b.t.oW0eUd).toLocaleUpperCase(),
                previewImage: N.recurring3PPromotions.thumbnail,
                videoUrl: N.recurring3PPromotions.thumbnail,
            },
            L = {
                name: "showYourStyle",
                title: b.intl.string(b.t.Ij3Zmv),
                description: b.intl.string(b.t.UsOUxY),
                descriptionCta: b.intl.string(b.t.jVcuVY),
                previewImage: N.showYourStyle.thumbnail,
                onClick: t,
                videoUrl: N.showYourStyle.assetUrl,
            },
            j = {
                name: "yourSpace",
                title: b.intl.string(b.t.Wme3nX),
                description: b.intl.string(b.t["/aAIqV"]),
                descriptionCta: b.intl.string(b.t.jVcuVY),
                previewImage: N.yourSpace.thumbnail,
                onClick: T,
                videoUrl: N.yourSpace.assetUrl,
            },
            M = {
                name: "emojis",
                title: b.intl.string(b.t.zY5PPb),
                description: b.intl.string(b.t.R5Xag2),
                previewImage: N.emojis.thumbnail,
                videoUrl: N.emojis.assetUrl,
            },
            k = {
                name: "noLimits",
                title: b.intl.string(b.t["6b3ydG"]),
                description: b.intl.string(b.t["Y+IJyg"]),
                previewImage: N.noLimits.thumbnail,
                videoUrl: N.noLimits.assetUrl,
            };
        return {
            whatsNewBoxes: v ? [[D], [w, R]] : S.enabled ? [[x], [P, R]] : [[w], [P, R]],
            bestOfBoxes: [[L], [j], [M, k]],
        };
    };
