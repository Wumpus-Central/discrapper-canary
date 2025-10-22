n.d(t, {
    NA: () => el,
    ZP: () => eu,
    y$: () => es,
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
    h = n(981631),
    m = n(526761),
    g = n(388032),
    E = n(30038),
    b = n(54979),
    y = n(509614),
    O = n(880511),
    v = n(985443),
    I = n(612253),
    T = n(872532),
    S = n(184071),
    A = n(368243),
    C = n(119121),
    N = n(404583),
    R = n(295349),
    P = n(631572),
    w = n(999675),
    D = n(238027),
    L = n(997585),
    x = n(138431),
    M = n(305516),
    k = n(980984),
    j = n(952842),
    U = n(38244),
    G = n(491878),
    B = n(751049),
    Z = n(518971),
    F = n(85726),
    V = n(281652),
    H = n(982935),
    Y = n(831399),
    W = n(91342),
    K = n(181708),
    z = n(290650),
    q = n(751125),
    X = n(904505),
    Q = n(712626),
    J = n(386014),
    $ = n(845571),
    ee = n(220046),
    et = n(385874),
    en = n(371000),
    er = n(377679),
    ei = n(825087);
function ea(e, t, n) {
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
function eo(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}
var es = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
    })({}),
    el = (function (e) {
        return (
            (e.REFERRAL_PROGRAM = "referralProgram"),
            (e.SERVER_PROFILES = "serverProfiles"),
            (e.SHOW_YOUR_STYLE = "showYourStyle"),
            (e.YOUR_SPACE = "yourSpace"),
            (e.EMOJIS = "emojis"),
            (e.NO_LIMITS = "noLimits"),
            (e.CUSTOM_THEMES = "customThemes"),
            (e.DISPLAY_NAME_STYLES = "displayNameStyles"),
            e
        );
    })({});
let ec = (e, t) =>
        eo(
            {
                serverProfiles: {
                    thumbnail: T,
                    assetUrl: e ? $.ZP : ee.ZP,
                },
                customThemes: {
                    thumbnail: H.Z,
                    assetUrl: e ? V.Z : Y.Z,
                },
                displayNameStyles: {
                    thumbnail: A.Z,
                    assetUrl: e ? S.Z : C.Z,
                },
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: M.Z,
                          assetUrl: e ? x.Z : k.Z,
                      },
                      showYourStyle: {
                          thumbnail: U.Z,
                          assetUrl: e ? j.Z : G.Z,
                      },
                      yourSpace: {
                          thumbnail: Z.Z,
                          assetUrl: e ? B.Z : F.Z,
                      },
                      emojis: {
                          thumbnail: R.Z,
                          assetUrl: e ? N.Z : P.Z,
                      },
                      noLimits: {
                          thumbnail: D.Z,
                          assetUrl: e ? w.Z : L.Z,
                      },
                  }
                : {
                      referralProgram: {
                          thumbnail: Q.Z,
                          assetUrl: e ? X.ZP : J.ZP,
                      },
                      showYourStyle: {
                          thumbnail: I,
                          assetUrl: e ? et.Z : en.Z,
                      },
                      yourSpace: {
                          thumbnail: v,
                          assetUrl: e ? er.Z : ei.Z,
                      },
                      emojis: {
                          thumbnail: y,
                          assetUrl: e ? W.ZP : K.ZP,
                      },
                      noLimits: {
                          thumbnail: O,
                          assetUrl: e ? z.ZP : q.ZP,
                      },
                  },
        ),
    eu = () => {
        let e,
            { analyticsLocations: t } = (0, a.ZP)(i.Z.PREMIUM_MARKETING_BENTO_BOX),
            y = (0, c.Z)({
                scrollPosition: m.Y_.TRY_IT_OUT,
                analyticsLocations: t,
            }),
            O = (0, s.cL)({ location: "useBentoBoxes" }),
            v = (0, r.useCallback)(() => {
                (0, d.openUserSettings)(
                    u.n.PROFILE_PANEL,
                    {
                        section: h.oAB.PROFILE_CUSTOMIZATION,
                        analyticsLocations: t,
                    },
                    () => (0, l.I)({ analyticsLocations: t }),
                );
            }, [t]),
            I = () => {
                {
                    let { openUserSettings: e } = n(518596);
                    e(u.n.APPEARANCE_PANEL, {
                        section: h.oAB.APPEARANCE,
                        analyticsLocations: t,
                    });
                }
            },
            T = (0, f.rO)(),
            S = _.Z.getArticleURL(h.BhN.REFERRAL_PROGRAM),
            A = ec(T, (0, p.Z)({ location: "useBentoBoxes" })),
            C = {
                name: "serverProfiles",
                title: g.intl.string(g.t.I9TYMg),
                description: g.intl.string(g.t.HMSHeH),
                descriptionCta: g.intl.string(g.t.jVcuVY),
                onClick: y,
                previewImage: A.serverProfiles.thumbnail,
                videoUrl: A.serverProfiles.assetUrl,
            },
            N = {
                name: "referralProgram",
                title: g.intl.string(g.t.tPY4o9),
                description: g.intl.format(g.t.jRPQUH, { learnMoreLink: S }),
                previewImage: A.referralProgram.thumbnail,
                videoUrl: A.referralProgram.assetUrl,
            },
            R = {
                name: "customThemes",
                title: g.intl.string(E.default.XokIHM),
                description: g.intl.string(E.default["7esQMC"]),
                descriptionCta: g.intl.string(g.t.jVcuVY),
                previewImage: A.customThemes.thumbnail,
                onClick: () => {
                    (0, o.XO)(o.wh.CUSTOM_THEME);
                },
                videoUrl: A.customThemes.assetUrl,
            },
            P = {
                name: "displayNameStyles",
                title: g.intl.string(b.default.ABtBDQ),
                description: g.intl.string(b.default.MFNXZh),
                descriptionCta: g.intl.string(g.t.jVcuVY),
                previewImage: A.displayNameStyles.thumbnail,
                onClick: v,
                badgeText: g.intl.string(g.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: A.displayNameStyles.assetUrl,
            },
            w = {
                name: "showYourStyle",
                title: g.intl.string(g.t.Ij3Zmv),
                description: g.intl.string(g.t.UsOUxY),
                descriptionCta: g.intl.string(g.t.jVcuVY),
                previewImage: A.showYourStyle.thumbnail,
                onClick: y,
                videoUrl: A.showYourStyle.assetUrl,
            },
            D = {
                name: "yourSpace",
                title: g.intl.string(g.t.Wme3nX),
                description: g.intl.string(g.t["/aAIqV"]),
                descriptionCta: g.intl.string(g.t.jVcuVY),
                previewImage: A.yourSpace.thumbnail,
                onClick: I,
                videoUrl: A.yourSpace.assetUrl,
            },
            L = {
                name: "emojis",
                title: g.intl.string(g.t.zY5PPb),
                description: g.intl.string(g.t.R5Xag2),
                previewImage: A.emojis.thumbnail,
                videoUrl: A.emojis.assetUrl,
            },
            x = [
                [w],
                [D],
                [
                    L,
                    {
                        name: "noLimits",
                        title: g.intl.string(g.t["6b3ydG"]),
                        description: g.intl.string(g.t["Y+IJyg"]),
                        previewImage: A.noLimits.thumbnail,
                        videoUrl: A.noLimits.assetUrl,
                    },
                ],
            ];
        return {
            whatsNewBoxes: (e = O ? [[P], [R, N]] : [[R], [C, N]]),
            bestOfBoxes: x,
        };
    };
