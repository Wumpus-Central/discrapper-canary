n.d(t, {
    NA: () => ee,
    ZP: () => en,
    y$: () => $,
});
var r = n(230711),
    i = n(100527),
    a = n(906732),
    o = n(300284),
    s = n(526167),
    l = n(63063),
    c = n(47280),
    u = n(963590),
    d = n(981631),
    f = n(526761),
    _ = n(388032),
    p = n(509614),
    h = n(880511),
    m = n(985443),
    g = n(612253),
    E = n(872532),
    b = n(404583),
    y = n(295349),
    O = n(631572),
    v = n(999675),
    I = n(238027),
    T = n(997585),
    S = n(138431),
    A = n(305516),
    C = n(980984),
    N = n(952842),
    R = n(38244),
    P = n(491878),
    w = n(751049),
    D = n(518971),
    x = n(85726),
    L = n(91342),
    j = n(181708),
    M = n(290650),
    k = n(751125),
    U = n(357003),
    G = n(904505),
    B = n(712626),
    Z = n(386014),
    V = n(845571),
    F = n(220046),
    H = n(385874),
    Y = n(371000),
    W = n(310960),
    K = n(815581),
    z = n(479390),
    q = n(377679),
    X = n(825087);
function Q(e, t, n) {
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
function J(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}
var $ = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
    })({}),
    ee = (function (e) {
        return (
            (e.REFERRAL_PROGRAM = "referralProgram"),
            (e.SERVER_PROFILES = "serverProfiles"),
            (e.SHOW_YOUR_STYLE = "showYourStyle"),
            (e.YOUR_SPACE = "yourSpace"),
            (e.EMOJIS = "emojis"),
            (e.NO_LIMITS = "noLimits"),
            (e.PERMADECOS = "permadecos"),
            (e.VOICE_FILTERS = "voiceFilters"),
            e
        );
    })({});
let et = (e, t) =>
        J(
            {
                voiceFilters: {
                    thumbnail: K.Z,
                    assetUrl: e ? W.Z : z.Z,
                },
                permadecos: {
                    thumbnail: U.Z,
                    assetUrl: U.Z,
                },
                serverProfiles: {
                    thumbnail: E,
                    assetUrl: e ? V.ZP : F.ZP,
                },
            },
            t
                ? {
                      referralProgram: {
                          thumbnail: A.Z,
                          assetUrl: e ? S.Z : C.Z,
                      },
                      showYourStyle: {
                          thumbnail: R.Z,
                          assetUrl: e ? N.Z : P.Z,
                      },
                      yourSpace: {
                          thumbnail: D.Z,
                          assetUrl: e ? w.Z : x.Z,
                      },
                      emojis: {
                          thumbnail: y.Z,
                          assetUrl: e ? b.Z : O.Z,
                      },
                      noLimits: {
                          thumbnail: I.Z,
                          assetUrl: e ? v.Z : T.Z,
                      },
                  }
                : {
                      referralProgram: {
                          thumbnail: B.Z,
                          assetUrl: e ? G.ZP : Z.ZP,
                      },
                      showYourStyle: {
                          thumbnail: g,
                          assetUrl: e ? H.Z : Y.Z,
                      },
                      yourSpace: {
                          thumbnail: m,
                          assetUrl: e ? q.Z : X.Z,
                      },
                      emojis: {
                          thumbnail: p,
                          assetUrl: e ? L.ZP : j.ZP,
                      },
                      noLimits: {
                          thumbnail: h,
                          assetUrl: e ? M.ZP : k.ZP,
                      },
                  },
        ),
    en = () => {
        let { analyticsLocations: e } = (0, a.ZP)(i.Z.PREMIUM_MARKETING_BENTO_BOX),
            t = (0, o.Z)({
                scrollPosition: f.Y_.TRY_IT_OUT,
                analyticsLocations: e,
            }),
            n = () => {
                r.Z.open(d.oAB.APPEARANCE, null, {
                    openWithoutBackstack: !0,
                    analyticsLocations: e,
                });
            },
            p = (0, s.rO)(),
            h = l.Z.getArticleURL(d.BhN.REFERRAL_PROGRAM),
            m = (0, u.Z)({ location: "WhatsNewSection" }),
            g = et(p, (0, c.ZP)({ location: "useBentoBoxes" })),
            E = {
                name: "voiceFilters",
                title: _.intl.format(_.t.iAzLOj, {}),
                description: _.intl.format(_.t["NT0/pa"], { learnMoreLink: d.EYA.VOICE_FILTERS_BLOG }),
                descriptionCta: _.intl.string(_.t.jVcuVV),
                previewImage: g.voiceFilters.thumbnail,
                videoUrl: g.voiceFilters.assetUrl,
                badgeText: _.intl.string(_.t.EYxi0t),
            },
            b = {
                name: "permadecos",
                title: _.intl.string(_.t["57ngoq"]),
                description: _.intl.string(_.t.piFFjY),
                descriptionCta: _.intl.string(_.t.jVcuVV),
                previewImage: g.permadecos.thumbnail,
                onClick: t,
                videoUrl: g.permadecos.assetUrl,
            },
            y = {
                name: "serverProfiles",
                title: _.intl.string(_.t.I9TYMj),
                description: _.intl.string(_.t.HMSHeH),
                descriptionCta: _.intl.string(_.t.jVcuVV),
                onClick: t,
                previewImage: g.serverProfiles.thumbnail,
                videoUrl: g.serverProfiles.assetUrl,
            },
            O = {
                name: "referralProgram",
                title: _.intl.string(_.t.tPY4o6),
                description: _.intl.format(_.t.jRPQUF, { learnMoreLink: h }),
                previewImage: g.referralProgram.thumbnail,
                videoUrl: g.referralProgram.assetUrl,
            },
            v = {
                name: "showYourStyle",
                title: _.intl.string(_.t.Ij3Zmp),
                description: _.intl.string(_.t.UsOUxc),
                descriptionCta: _.intl.string(_.t.jVcuVV),
                previewImage: g.showYourStyle.thumbnail,
                onClick: t,
                videoUrl: g.showYourStyle.assetUrl,
            },
            I = {
                name: "yourSpace",
                title: _.intl.string(_.t.Wme3nZ),
                description: _.intl.string(_.t["/aAIqa"]),
                descriptionCta: _.intl.string(_.t.jVcuVV),
                previewImage: g.yourSpace.thumbnail,
                onClick: n,
                videoUrl: g.yourSpace.assetUrl,
            },
            T = {
                name: "emojis",
                title: _.intl.string(_.t.zY5PPT),
                description: _.intl.string(_.t.R5Xag4),
                previewImage: g.emojis.thumbnail,
                videoUrl: g.emojis.assetUrl,
            };
        return {
            whatsNewBoxes: m ? [[E], [b, O]] : [[b], [y, O]],
            bestOfBoxes: [
                [v],
                [I],
                [
                    T,
                    {
                        name: "noLimits",
                        title: _.intl.string(_.t["6b3ydH"]),
                        description: _.intl.string(_.t["Y+IJys"]),
                        previewImage: g.noLimits.thumbnail,
                        videoUrl: g.noLimits.assetUrl,
                    },
                ],
            ],
        };
    };
