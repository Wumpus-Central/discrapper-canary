n.d(t, {
    NA: () => ed,
    ZP: () => e_,
    y$: () => eu,
});
var r = n(647438),
    i = n(100527),
    a = n(906732),
    o = n(550385),
    s = n(594928),
    l = n(829716),
    c = n(300284),
    u = n(313789),
    d = n(518596),
    f = n(526167),
    _ = n(63063),
    p = n(283066),
    h = n(340625),
    m = n(469165),
    g = n(981631),
    E = n(526761),
    b = n(388032),
    y = n(531421),
    O = n(352609),
    v = n(509614),
    I = n(880511),
    T = n(985443),
    S = n(612253),
    A = n(872532),
    C = n(398300),
    N = n(184071),
    R = n(368243),
    P = n(119121),
    w = n(404583),
    D = n(295349),
    x = n(631572),
    L = n(999675),
    M = n(238027),
    k = n(997585),
    j = n(138431),
    U = n(305516),
    G = n(980984),
    B = n(952842),
    Z = n(38244),
    F = n(491878),
    V = n(751049),
    H = n(518971),
    Y = n(85726),
    W = n(281652),
    K = n(982935),
    z = n(831399),
    q = n(91342),
    X = n(181708),
    Q = n(290650),
    J = n(751125),
    $ = n(904505),
    ee = n(712626),
    et = n(386014),
    en = n(845571),
    er = n(220046),
    ei = n(385874),
    ea = n(371000),
    eo = n(377679),
    es = n(825087);
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
                    thumbnail: A,
                    assetUrl: e ? en.ZP : er.ZP,
                },
                customThemes: {
                    thumbnail: K.Z,
                    assetUrl: e ? W.Z : z.Z,
                },
                displayNameStyles: {
                    thumbnail: R.Z,
                    assetUrl: e ? N.Z : P.Z,
                },
                recurring3PPromotions: {
                    thumbnail: C.Z,
                    assetUrl: " ",
                },
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: U.Z,
                          assetUrl: e ? j.Z : G.Z,
                      },
                      showYourStyle: {
                          thumbnail: Z.Z,
                          assetUrl: e ? B.Z : F.Z,
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
                          thumbnail: M.Z,
                          assetUrl: e ? L.Z : k.Z,
                      },
                  }
                : {
                      referralProgram: {
                          thumbnail: ee.Z,
                          assetUrl: e ? $.ZP : et.ZP,
                      },
                      showYourStyle: {
                          thumbnail: S,
                          assetUrl: e ? ei.Z : ea.Z,
                      },
                      yourSpace: {
                          thumbnail: T,
                          assetUrl: e ? eo.Z : es.Z,
                      },
                      emojis: {
                          thumbnail: v,
                          assetUrl: e ? q.ZP : X.ZP,
                      },
                      noLimits: {
                          thumbnail: I,
                          assetUrl: e ? Q.ZP : J.ZP,
                      },
                  },
        ),
    e_ = () => {
        let { analyticsLocations: e } = (0, a.ZP)(i.Z.PREMIUM_MARKETING_BENTO_BOX),
            t = (0, c.Z)({
                scrollPosition: E.Y_.TRY_IT_OUT,
                analyticsLocations: e,
            }),
            v = (0, s.cL)({ location: "useBentoBoxes" }),
            I = h.Z.useExperiment({ location: "useBentoBoxes" }),
            T = (0, r.useCallback)(() => {
                (0, d.openUserSettings)(
                    u.n.PROFILE_PANEL,
                    {
                        section: g.oAB.PROFILE_CUSTOMIZATION,
                        analyticsLocations: e,
                    },
                    () => (0, l.I)({ analyticsLocations: e }),
                );
            }, [e]),
            S = () => {
                {
                    let { openUserSettings: t } = n(518596);
                    t(u.n.APPEARANCE_PANEL, {
                        section: g.oAB.APPEARANCE,
                        analyticsLocations: e,
                    });
                }
            },
            A = (0, f.rO)(),
            C = _.Z.getArticleURL(g.BhN.REFERRAL_PROGRAM),
            N = ef(A, (0, p.Z)({ location: "useBentoBoxes" })),
            R = {
                name: "serverProfiles",
                title: b.intl.string(b.t.I9TYMg),
                description: b.intl.string(b.t.HMSHeH),
                descriptionCta: b.intl.string(b.t.jVcuVY),
                onClick: t,
                previewImage: N.serverProfiles.thumbnail,
                videoUrl: N.serverProfiles.assetUrl,
            },
            P = {
                name: "referralProgram",
                title: b.intl.string(b.t.tPY4o9),
                description: b.intl.format(b.t.jRPQUH, { learnMoreLink: C }),
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
                onClick: T,
                badgeText: b.intl.string(b.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: N.displayNameStyles.assetUrl,
            },
            x = {
                name: "recurring3PPromotions",
                title: b.intl.string(b.t.m7PucM),
                description: b.intl.format(b.t.mqSNPd, {}),
                descriptionCta: b.intl.formatToPlainString(b.t.Bf1cBD, {
                    helpdeskArticle: _.Z.getArticleURL(g.BhN.RECURRING_PROMOTION),
                }),
                onClick: () => (0, m.wQ)({ analyticsLocations: e }),
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
            M = {
                name: "yourSpace",
                title: b.intl.string(b.t.Wme3nX),
                description: b.intl.string(b.t["/aAIqV"]),
                descriptionCta: b.intl.string(b.t.jVcuVY),
                previewImage: N.yourSpace.thumbnail,
                onClick: S,
                videoUrl: N.yourSpace.assetUrl,
            },
            k = {
                name: "emojis",
                title: b.intl.string(b.t.zY5PPb),
                description: b.intl.string(b.t.R5Xag2),
                previewImage: N.emojis.thumbnail,
                videoUrl: N.emojis.assetUrl,
            },
            j = {
                name: "noLimits",
                title: b.intl.string(b.t["6b3ydG"]),
                description: b.intl.string(b.t["Y+IJyg"]),
                previewImage: N.noLimits.thumbnail,
                videoUrl: N.noLimits.assetUrl,
            };
        return {
            whatsNewBoxes: v ? [[D], [w, P]] : I.enabled ? [[x], [R, P]] : [[w], [R, P]],
            bestOfBoxes: [[L], [M], [k, j]],
        };
    };
