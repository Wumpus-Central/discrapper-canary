n.d(t, {
    NA: () => eo,
    ZP: () => el,
    y$: () => ea,
});
var r = n(100527),
    i = n(906732),
    a = n(866419),
    o = n(550385),
    s = n(300284),
    l = n(313789),
    c = n(526167),
    u = n(63063),
    d = n(47280),
    f = n(963590),
    _ = n(981631),
    p = n(526761),
    h = n(388032),
    m = n(119475),
    g = n(509614),
    E = n(880511),
    b = n(985443),
    y = n(612253),
    O = n(872532),
    v = n(404583),
    I = n(295349),
    T = n(631572),
    S = n(999675),
    A = n(238027),
    C = n(997585),
    N = n(138431),
    R = n(305516),
    P = n(980984),
    w = n(952842),
    D = n(38244),
    x = n(491878),
    L = n(751049),
    j = n(518971),
    M = n(85726),
    k = n(281652),
    U = n(982935),
    G = n(831399),
    B = n(91342),
    Z = n(181708),
    F = n(290650),
    V = n(751125),
    H = n(357003),
    Y = n(904505),
    W = n(712626),
    K = n(386014),
    z = n(845571),
    q = n(220046),
    X = n(385874),
    Q = n(371000),
    J = n(310960),
    $ = n(815581),
    ee = n(479390),
    et = n(377679),
    en = n(825087);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            });
    }
    return e;
}
var ea = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
    })({}),
    eo = (function (e) {
        return (
            (e.REFERRAL_PROGRAM = "referralProgram"),
            (e.SERVER_PROFILES = "serverProfiles"),
            (e.SHOW_YOUR_STYLE = "showYourStyle"),
            (e.YOUR_SPACE = "yourSpace"),
            (e.EMOJIS = "emojis"),
            (e.NO_LIMITS = "noLimits"),
            (e.PERMADECOS = "permadecos"),
            (e.VOICE_FILTERS = "voiceFilters"),
            (e.CUSTOM_THEMES = "customThemes"),
            e
        );
    })({});
let es = (e, t) =>
        ei(
            {
                voiceFilters: {
                    thumbnail: $.Z,
                    assetUrl: e ? J.Z : ee.Z,
                },
                permadecos: {
                    thumbnail: H.Z,
                    assetUrl: H.Z,
                },
                serverProfiles: {
                    thumbnail: O,
                    assetUrl: e ? z.ZP : q.ZP,
                },
                customThemes: {
                    thumbnail: U.Z,
                    assetUrl: e ? k.Z : G.Z,
                },
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: R.Z,
                          assetUrl: e ? N.Z : P.Z,
                      },
                      showYourStyle: {
                          thumbnail: D.Z,
                          assetUrl: e ? w.Z : x.Z,
                      },
                      yourSpace: {
                          thumbnail: j.Z,
                          assetUrl: e ? L.Z : M.Z,
                      },
                      emojis: {
                          thumbnail: I.Z,
                          assetUrl: e ? v.Z : T.Z,
                      },
                      noLimits: {
                          thumbnail: A.Z,
                          assetUrl: e ? S.Z : C.Z,
                      },
                  }
                : {
                      referralProgram: {
                          thumbnail: W.Z,
                          assetUrl: e ? Y.ZP : K.ZP,
                      },
                      showYourStyle: {
                          thumbnail: y,
                          assetUrl: e ? X.Z : Q.Z,
                      },
                      yourSpace: {
                          thumbnail: b,
                          assetUrl: e ? et.Z : en.Z,
                      },
                      emojis: {
                          thumbnail: g,
                          assetUrl: e ? B.ZP : Z.ZP,
                      },
                      noLimits: {
                          thumbnail: E,
                          assetUrl: e ? F.ZP : V.ZP,
                      },
                  },
        ),
    el = () => {
        let { analyticsLocations: e } = (0, i.ZP)(r.Z.PREMIUM_MARKETING_BENTO_BOX),
            t = (0, s.Z)({
                scrollPosition: p.Y_.TRY_IT_OUT,
                analyticsLocations: e,
            }),
            g = () => {
                {
                    let { openUserSettings: t } = n(518596);
                    t(l.n.APPEARANCE_PANEL, {
                        section: _.oAB.APPEARANCE,
                        analyticsLocations: e,
                    });
                }
            },
            E = (0, c.rO)(),
            b = u.Z.getArticleURL(_.BhN.REFERRAL_PROGRAM),
            y = (0, f.Z)({ location: "WhatsNewSection" }),
            O = (0, a.YZ)("useBentoBoxes"),
            v = es(E, (0, d.ZP)({ location: "useBentoBoxes" })),
            I = {
                name: "voiceFilters",
                title: h.intl.format(h.t.iAzLOj, {}),
                description: h.intl.format(h.t["NT0/pa"], { learnMoreLink: _.EYA.VOICE_FILTERS_BLOG }),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: v.voiceFilters.thumbnail,
                videoUrl: v.voiceFilters.assetUrl,
                badgeText: h.intl.string(h.t.EYxi0t),
            },
            T = {
                name: "permadecos",
                title: h.intl.string(h.t["57ngoq"]),
                description: h.intl.string(h.t.piFFjY),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: v.permadecos.thumbnail,
                onClick: t,
                videoUrl: v.permadecos.assetUrl,
            },
            S = {
                name: "serverProfiles",
                title: h.intl.string(h.t.I9TYMj),
                description: h.intl.string(h.t.HMSHeH),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                onClick: t,
                previewImage: v.serverProfiles.thumbnail,
                videoUrl: v.serverProfiles.assetUrl,
            },
            A = {
                name: "referralProgram",
                title: h.intl.string(h.t.tPY4o6),
                description: h.intl.format(h.t.jRPQUF, { learnMoreLink: b }),
                previewImage: v.referralProgram.thumbnail,
                videoUrl: v.referralProgram.assetUrl,
            },
            C = {
                name: "customThemes",
                title: h.intl.string(m.default.XokIHB),
                description: h.intl.string(m.default["7esQMD"]),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: v.customThemes.thumbnail,
                onClick: () => {
                    (0, o.XO)(o.wh.CUSTOM_THEME);
                },
                videoUrl: v.customThemes.assetUrl,
            },
            N = {
                name: "showYourStyle",
                title: h.intl.string(h.t.Ij3Zmp),
                description: h.intl.string(h.t.UsOUxc),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: v.showYourStyle.thumbnail,
                onClick: t,
                videoUrl: v.showYourStyle.assetUrl,
            },
            R = {
                name: "yourSpace",
                title: h.intl.string(h.t.Wme3nZ),
                description: h.intl.string(h.t["/aAIqa"]),
                descriptionCta: h.intl.string(h.t.jVcuVV),
                previewImage: v.yourSpace.thumbnail,
                onClick: g,
                videoUrl: v.yourSpace.assetUrl,
            },
            P = {
                name: "emojis",
                title: h.intl.string(h.t.zY5PPT),
                description: h.intl.string(h.t.R5Xag4),
                previewImage: v.emojis.thumbnail,
                videoUrl: v.emojis.assetUrl,
            };
        return {
            whatsNewBoxes: O ? [[C], [S, A]] : y ? [[I], [T, A]] : [[T], [S, A]],
            bestOfBoxes: [
                [N],
                [R],
                [
                    P,
                    {
                        name: "noLimits",
                        title: h.intl.string(h.t["6b3ydH"]),
                        description: h.intl.string(h.t["Y+IJys"]),
                        previewImage: v.noLimits.thumbnail,
                        videoUrl: v.noLimits.assetUrl,
                    },
                ],
            ],
        };
    };
