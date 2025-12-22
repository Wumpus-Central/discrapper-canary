n.d(t, {
    NA: () => eg,
    ZP: () => eb,
    y$: () => eh,
});
var r = n(54381),
    i = n(473749),
    a = n(952265),
    o = n(100527),
    s = n(906732),
    l = n(550385),
    c = n(594928),
    u = n(829716),
    d = n(300284),
    f = n(313789),
    p = n(518596),
    _ = n(526167),
    m = n(63063),
    h = n(283066),
    g = n(340625),
    E = n(260720),
    b = n(469165),
    y = n(282793),
    O = n(981631),
    v = n(526761),
    S = n(353149),
    I = n(388032),
    T = n(831989),
    C = n(143525),
    A = n(261778),
    N = n(509614),
    P = n(880511),
    R = n(985443),
    w = n(612253),
    D = n(872532),
    x = n(836236),
    L = n(94314),
    j = n(548475),
    M = n(967830),
    k = n(742694),
    U = n(406459),
    G = n(91830),
    Z = n(32357),
    F = n(147146),
    B = n(801794),
    V = n(739790),
    H = n(779235),
    Y = n(511974),
    W = n(508111),
    K = n(459872),
    z = n(860751),
    q = n(584470),
    Q = n(810933),
    X = n(857245),
    J = n(383057),
    $ = n(370026),
    ee = n(120368),
    et = n(73500),
    en = n(763341),
    er = n(778851),
    ei = n(399299),
    ea = n(646560),
    eo = n(27217),
    es = n(918009),
    el = n(378325),
    ec = n(962526),
    eu = n(670948),
    ed = n(965468),
    ef = n(222419),
    ep = n(740778);
function e_(e, t, n) {
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
function em(e) {
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
                e_(e, t, n[t]);
            });
    }
    return e;
}
var eh = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
    })({}),
    eg = (function (e) {
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
            (e.PREMIUM_GROUP = "premiumGroup"),
            e
        );
    })({});
let eE = (e, t) =>
        em(
            {
                premiumGroup: {
                    thumbnail: A,
                    assetUrl: A,
                },
                serverProfiles: {
                    thumbnail: D,
                    assetUrl: e ? el.ZP : ec.ZP,
                },
                customThemes: {
                    thumbnail: $.Z,
                    assetUrl: e ? J.Z : ee.Z,
                },
                displayNameStyles: {
                    thumbnail: j.Z,
                    assetUrl: e ? L.Z : M.Z,
                },
                recurring3PPromotions: {
                    thumbnail: x.Z,
                    assetUrl: " ",
                },
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: H.Z,
                          assetUrl: e ? V.Z : Y.Z,
                      },
                      showYourStyle: {
                          thumbnail: K.Z,
                          assetUrl: e ? W.Z : z.Z,
                      },
                      yourSpace: {
                          thumbnail: Q.Z,
                          assetUrl: e ? q.Z : X.Z,
                      },
                      emojis: {
                          thumbnail: U.Z,
                          assetUrl: e ? k.Z : G.Z,
                      },
                      noLimits: {
                          thumbnail: F.Z,
                          assetUrl: e ? Z.Z : B.Z,
                      },
                  }
                : {
                      referralProgram: {
                          thumbnail: eo.Z,
                          assetUrl: e ? ea.ZP : es.ZP,
                      },
                      showYourStyle: {
                          thumbnail: w,
                          assetUrl: e ? eu.Z : ed.Z,
                      },
                      yourSpace: {
                          thumbnail: R,
                          assetUrl: e ? ef.Z : ep.Z,
                      },
                      emojis: {
                          thumbnail: N,
                          assetUrl: e ? et.ZP : en.ZP,
                      },
                      noLimits: {
                          thumbnail: P,
                          assetUrl: e ? er.ZP : ei.ZP,
                      },
                  },
        ),
    eb = () => {
        let { analyticsLocations: e } = (0, s.ZP)(o.Z.PREMIUM_MARKETING_BENTO_BOX),
            t = (0, d.Z)({
                scrollPosition: v.Y_.TRY_IT_OUT,
                analyticsLocations: e,
            }),
            A = c.JH.useExperiment({ location: "useBentoBoxes" }).enabled,
            N = g.Z.useExperiment({ location: "useBentoBoxes" }),
            P = (0, E.QL)(),
            R = (0, i.useCallback)(() => {
                (0, p.openUserSettings)(
                    f.n.PROFILE_PANEL,
                    {
                        section: O.oAB.PROFILE_CUSTOMIZATION,
                        analyticsLocations: e,
                    },
                    () => (0, u.I)({ analyticsLocations: e }),
                );
            }, [e]),
            w = () => {
                {
                    let { openUserSettings: t } = n(518596);
                    t(f.n.APPEARANCE_PANEL, {
                        section: O.oAB.APPEARANCE,
                        analyticsLocations: e,
                    });
                }
            },
            D = (0, _.rO)(),
            x = m.Z.getArticleURL(O.BhN.REFERRAL_PROGRAM),
            L = eE(D, (0, h.Z)({ location: "useBentoBoxes" })),
            j = {
                name: "serverProfiles",
                title: I.intl.string(I.t.I9TYMg),
                description: I.intl.string(I.t.HMSHeH),
                descriptionCta: I.intl.string(I.t.jVcuVY),
                onClick: t,
                previewImage: L.serverProfiles.thumbnail,
                videoUrl: L.serverProfiles.assetUrl,
            },
            M = {
                name: "referralProgram",
                title: I.intl.string(I.t.tPY4o9),
                description: I.intl.format(I.t.jRPQUH, { learnMoreLink: x }),
                previewImage: L.referralProgram.thumbnail,
                videoUrl: L.referralProgram.assetUrl,
            },
            k = {
                name: "customThemes",
                title: I.intl.string(T.default.XokIHM),
                description: I.intl.string(T.default["7esQMC"]),
                descriptionCta: I.intl.string(I.t.jVcuVY),
                previewImage: L.customThemes.thumbnail,
                onClick: () => {
                    (0, l.XO)(l.wh.CUSTOM_THEME);
                },
                videoUrl: L.customThemes.assetUrl,
            },
            U = {
                name: "displayNameStyles",
                title: I.intl.string(C.default.ABtBDQ),
                description: I.intl.string(C.default.MFNXZh),
                descriptionCta: I.intl.string(I.t.jVcuVY),
                previewImage: L.displayNameStyles.thumbnail,
                onClick: R,
                badgeText: I.intl.string(I.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: L.displayNameStyles.assetUrl,
            },
            G = {
                name: "premiumGroup",
                title: I.intl.formatToPlainString(S.default.VFEDDB, { premiumGroupProductName: (0, y.sO)() }),
                description: I.intl.formatToPlainString(S.default.WudmR3, {
                    totalSeats: y.Q5,
                    premiumGroupProductName: (0, y.sO)(),
                }),
                descriptionCta: I.intl.string(I.t.hvVgAZ),
                previewImage: L.premiumGroup.thumbnail,
                videoUrl: L.premiumGroup.assetUrl,
                onClick: () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("33638").then(n.bind(n, 837244));
                        return (t) => (0, r.jsx)(e, em({}, t));
                    });
                },
                badgeText: I.intl.string(I.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            Z = {
                name: "recurring3PPromotions",
                title: I.intl.string(I.t.m7PucM),
                description: I.intl.format(I.t.mqSNPd, {}),
                descriptionCta: I.intl.formatToPlainString(I.t.Bf1cBD, {
                    helpdeskArticle: m.Z.getArticleURL(O.BhN.RECURRING_PROMOTION),
                }),
                onClick: () => (0, b.wQ)({ analyticsLocations: e }),
                badgeText: I.intl.string(I.t.oW0eUd).toLocaleUpperCase(),
                previewImage: L.recurring3PPromotions.thumbnail,
                videoUrl: L.recurring3PPromotions.thumbnail,
            },
            F = {
                name: "showYourStyle",
                title: I.intl.string(I.t.Ij3Zmv),
                description: I.intl.string(I.t.UsOUxY),
                descriptionCta: I.intl.string(I.t.jVcuVY),
                previewImage: L.showYourStyle.thumbnail,
                onClick: t,
                videoUrl: L.showYourStyle.assetUrl,
            },
            B = {
                name: "yourSpace",
                title: I.intl.string(I.t.Wme3nX),
                description: I.intl.string(I.t["/aAIqV"]),
                descriptionCta: I.intl.string(I.t.jVcuVY),
                previewImage: L.yourSpace.thumbnail,
                onClick: w,
                videoUrl: L.yourSpace.assetUrl,
            },
            V = {
                name: "emojis",
                title: I.intl.string(I.t.zY5PPb),
                description: I.intl.string(I.t.R5Xag2),
                previewImage: L.emojis.thumbnail,
                videoUrl: L.emojis.assetUrl,
            },
            H = {
                name: "noLimits",
                title: I.intl.string(I.t["6b3ydG"]),
                description: I.intl.string(I.t["Y+IJyg"]),
                previewImage: L.noLimits.thumbnail,
                videoUrl: L.noLimits.assetUrl,
            };
        return {
            whatsNewBoxes: P ? [[G], [j, M]] : A ? [[U], [k, M]] : N.enabled ? [[Z], [j, M]] : [[k], [j, M]],
            bestOfBoxes: [[F], [B], [V, H]],
        };
    };
