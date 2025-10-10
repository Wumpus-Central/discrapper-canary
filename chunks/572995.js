n.d(t, {
    NA: () => ea,
    ZP: () => es,
    y$: () => ei,
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
    p = n(47280),
    h = n(981631),
    m = n(526761),
    g = n(388032),
    E = n(119475),
    b = n(693450),
    y = n(509614),
    O = n(880511),
    v = n(985443),
    I = n(612253),
    T = n(872532),
    S = n(404583),
    A = n(295349),
    C = n(631572),
    N = n(999675),
    R = n(238027),
    P = n(997585),
    w = n(138431),
    D = n(305516),
    L = n(980984),
    x = n(952842),
    M = n(38244),
    j = n(491878),
    k = n(751049),
    U = n(518971),
    G = n(85726),
    B = n(281652),
    Z = n(982935),
    F = n(831399),
    V = n(91342),
    H = n(181708),
    Y = n(290650),
    W = n(751125),
    K = n(904505),
    z = n(712626),
    q = n(386014),
    X = n(845571),
    Q = n(220046),
    J = n(385874),
    $ = n(371000),
    ee = n(377679),
    et = n(825087);
function en(e, t, n) {
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
function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
var ei = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
    })({}),
    ea = (function (e) {
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
let eo = (e, t) =>
        er(
            {
                serverProfiles: {
                    thumbnail: T,
                    assetUrl: e ? X.ZP : Q.ZP,
                },
                customThemes: {
                    thumbnail: Z.Z,
                    assetUrl: e ? B.Z : F.Z,
                },
                displayNameStyles: {
                    thumbnail: Z.Z,
                    assetUrl: e ? B.Z : F.Z,
                },
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: D.Z,
                          assetUrl: e ? w.Z : L.Z,
                      },
                      showYourStyle: {
                          thumbnail: M.Z,
                          assetUrl: e ? x.Z : j.Z,
                      },
                      yourSpace: {
                          thumbnail: U.Z,
                          assetUrl: e ? k.Z : G.Z,
                      },
                      emojis: {
                          thumbnail: A.Z,
                          assetUrl: e ? S.Z : C.Z,
                      },
                      noLimits: {
                          thumbnail: R.Z,
                          assetUrl: e ? N.Z : P.Z,
                      },
                  }
                : {
                      referralProgram: {
                          thumbnail: z.Z,
                          assetUrl: e ? K.ZP : q.ZP,
                      },
                      showYourStyle: {
                          thumbnail: I,
                          assetUrl: e ? J.Z : $.Z,
                      },
                      yourSpace: {
                          thumbnail: v,
                          assetUrl: e ? ee.Z : et.Z,
                      },
                      emojis: {
                          thumbnail: y,
                          assetUrl: e ? V.ZP : H.ZP,
                      },
                      noLimits: {
                          thumbnail: O,
                          assetUrl: e ? Y.ZP : W.ZP,
                      },
                  },
        ),
    es = () => {
        let e,
            { analyticsLocations: t } = (0, a.ZP)(i.Z.PREMIUM_MARKETING_BENTO_BOX),
            y = (0, c.Z)({
                scrollPosition: m.Y_.TRY_IT_OUT,
                analyticsLocations: t,
            }),
            O = s.wL.useConfig({ location: "useBentoBoxes" }).enabled,
            v = (0, r.useCallback)(() => {
                (0, d.openUserSettings)(u.n.PROFILE_PANEL, {
                    section: h.oAB.PROFILE_CUSTOMIZATION,
                    analyticsLocations: t,
                }),
                    (0, l.I)({ analyticsLocations: t });
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
            A = eo(T, (0, p.ZP)({ location: "useBentoBoxes" })),
            C = {
                name: "serverProfiles",
                title: g.intl.string(g.t.I9TYMj),
                description: g.intl.string(g.t.HMSHeH),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                onClick: y,
                previewImage: A.serverProfiles.thumbnail,
                videoUrl: A.serverProfiles.assetUrl,
            },
            N = {
                name: "referralProgram",
                title: g.intl.string(g.t.tPY4o6),
                description: g.intl.format(g.t.jRPQUF, { learnMoreLink: S }),
                previewImage: A.referralProgram.thumbnail,
                videoUrl: A.referralProgram.assetUrl,
            },
            R = {
                name: "customThemes",
                title: g.intl.string(E.default.XokIHB),
                description: g.intl.string(E.default["7esQMD"]),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: A.customThemes.thumbnail,
                onClick: () => {
                    (0, o.XO)(o.wh.CUSTOM_THEME);
                },
                videoUrl: A.customThemes.assetUrl,
            },
            P = {
                name: "displayNameStyles",
                title: g.intl.string(b.default.ABtBDQ),
                description: g.intl.string(b.default.MFNXZm),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: A.displayNameStyles.thumbnail,
                onClick: v,
                badgeText: g.intl.string(g.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: A.displayNameStyles.assetUrl,
            },
            w = {
                name: "showYourStyle",
                title: g.intl.string(g.t.Ij3Zmp),
                description: g.intl.string(g.t.UsOUxc),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: A.showYourStyle.thumbnail,
                onClick: y,
                videoUrl: A.showYourStyle.assetUrl,
            },
            D = {
                name: "yourSpace",
                title: g.intl.string(g.t.Wme3nZ),
                description: g.intl.string(g.t["/aAIqa"]),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: A.yourSpace.thumbnail,
                onClick: I,
                videoUrl: A.yourSpace.assetUrl,
            },
            L = {
                name: "emojis",
                title: g.intl.string(g.t.zY5PPT),
                description: g.intl.string(g.t.R5Xag4),
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
                        title: g.intl.string(g.t["6b3ydH"]),
                        description: g.intl.string(g.t["Y+IJys"]),
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
