n.d(t, {
    A0: () => et,
    Ay: () => ei,
    NI: () => en,
    Tb: () => ee,
});
var r = n(627968),
    i = n(64700),
    a = n(192308),
    s = n(793574),
    o = n(688810),
    l = n(793943),
    c = n(259065),
    u = n(206835),
    d = n(780964),
    f = n(840065),
    p = n(676279),
    _ = n(975571),
    h = n(612669),
    m = n(84483),
    g = n(88001),
    E = n(652215),
    y = n(355097),
    b = n(519412),
    O = n(49370),
    v = n(985018),
    A = n(520650),
    I = n(927961),
    S = n(817577),
    T = n(748222),
    C = n(743501),
    N = n(652700),
    w = n(282818),
    R = n(965132),
    P = n(576765),
    D = n(88433),
    x = n(206771),
    L = n(533234),
    j = n(39508),
    M = n(198962),
    k = n(636395),
    U = n(871891),
    G = n(116427),
    V = n(281146),
    F = n(324108),
    B = n(158178),
    H = n(199579),
    Y = n(170467),
    W = n(909340),
    K = n(455482),
    z = n(573573),
    q = n(233572),
    Z = n(437466),
    X = n(23145),
    Q = n(56582);

function J(e, t, n) {
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

function $(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
var ee = (function (e) {
        return (e.CONTAINED = "contained"), (e.OVERLAY = "overlay"), e;
    })({}),
    et = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
    })({}),
    en = (function (e) {
        return (
            (e.REFERRAL_PROGRAM = "referralProgram"),
            (e.SERVER_PROFILES = "serverProfiles"),
            (e.SHOW_YOUR_STYLE = "showYourStyle"),
            (e.YOUR_SPACE = "yourSpace"),
            (e.EMOJIS = "emojis"),
            (e.NO_LIMITS = "noLimits"),
            (e.CUSTOM_THEMES = "customThemes"),
            (e.DISPLAY_NAME_STYLES = "displayNameStyles"),
            (e.PREMIUM_GROUP = "premiumGroup"),
            (e.ORB_REWARDS = "orbRewards"),
            e
        );
    })({});
let er = (e) => ({
        premiumGroup: {
            thumbnail: S,
            assetUrl: S,
        },
        serverProfiles: {
            thumbnail: T,
            assetUrl: e ? X.Ay : Q.Ay,
        },
        customThemes: {
            thumbnail: q.A,
            assetUrl: e ? z.A : Z.A,
        },
        displayNameStyles: {
            thumbnail: N.A,
            assetUrl: e ? C.A : w.A,
        },
        referralProgram: {
            thumbnail: k.A,
            assetUrl: e ? M.A : U.A,
        },
        showYourStyle: {
            thumbnail: V.A,
            assetUrl: e ? G.A : F.A,
        },
        yourSpace: {
            thumbnail: H.A,
            assetUrl: e ? B.A : Y.A,
        },
        emojis: {
            thumbnail: P.A,
            assetUrl: e ? R.A : D.A,
        },
        noLimits: {
            thumbnail: L.A,
            assetUrl: e ? x.A : j.A,
        },
        orbRewards: {
            thumbnail: K.A,
            assetUrl: W.A,
        },
    }),
    ei = () => {
        let e,
            { analyticsLocations: t } = (0, o.Ay)(s.A.PREMIUM_MARKETING_BENTO_BOX),
            S = (0, u.A)({
                scrollPosition: y._F.TRY_IT_OUT,
                analyticsLocations: t,
            }),
            T = (0, h.O9)(),
            C = (0, i.useCallback)(() => {
                (0, f.openUserSettings)(
                    d.X.PROFILE_PANEL,
                    {
                        section: E.nc_.PROFILE_CUSTOMIZATION,
                        analyticsLocations: t,
                    },
                    () =>
                        (0, c.L)({
                            analyticsLocations: t,
                        }),
                );
            }, [t]),
            N = () => {
                {
                    let { openUserSettings: e } = n(840065);
                    e(d.X.APPEARANCE_PANEL, {
                        section: E.nc_.APPEARANCE,
                        analyticsLocations: t,
                    });
                }
            },
            w = (0, p.TM)(),
            R = _.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
            P = er(w),
            D = {
                name: "serverProfiles",
                title: v.intl.string(v.t.I9TYMg),
                description: v.intl.string(v.t.HMSHeH),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                onClick: S,
                previewImage: P.serverProfiles.thumbnail,
                videoUrl: P.serverProfiles.assetUrl,
            },
            x = {
                name: "referralProgram",
                title: v.intl.string(v.t.tPY4o9),
                description: v.intl.format(v.t.jRPQUH, {
                    learnMoreLink: R,
                }),
                previewImage: P.referralProgram.thumbnail,
                videoUrl: P.referralProgram.assetUrl,
            },
            L = {
                name: "customThemes",
                title: v.intl.string(A.default.XokIHM),
                description: v.intl.string(A.default["7esQMC"]),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                previewImage: P.customThemes.thumbnail,
                onClick: () => {
                    (0, l.nf)(l.HP.CUSTOM_THEME);
                },
                videoUrl: P.customThemes.assetUrl,
            },
            j = {
                name: "displayNameStyles",
                title: v.intl.string(I.default.ABtBDQ),
                description: v.intl.string(I.default.MFNXZh),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                previewImage: P.displayNameStyles.thumbnail,
                onClick: C,
                badgeText: v.intl.string(v.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: P.displayNameStyles.assetUrl,
            },
            M = {
                name: "premiumGroup",
                title: v.intl.formatToPlainString(b.default.VFEDDB, {
                    premiumGroupProductName: (0, g.DP)(),
                }),
                description: v.intl.formatToPlainString(b.default.WudmR3, {
                    totalSeats: g.aw,
                    premiumGroupProductName: (0, g.DP)(),
                }),
                descriptionCta: v.intl.string(v.t.hvVgAZ),
                previewImage: P.premiumGroup.thumbnail,
                videoUrl: P.premiumGroup.assetUrl,
                onClick: () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                        return (t) => (0, r.jsx)(e, $({}, t));
                    });
                },
                badgeText: v.intl.string(v.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            k = {
                name: "showYourStyle",
                title: v.intl.string(v.t.Ij3Zmv),
                description: v.intl.string(v.t.UsOUxY),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                previewImage: P.showYourStyle.thumbnail,
                onClick: S,
                videoUrl: P.showYourStyle.assetUrl,
            },
            U = {
                name: "yourSpace",
                title: v.intl.string(v.t.Wme3nX),
                description: v.intl.string(v.t["/aAIqV"]),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                previewImage: P.yourSpace.thumbnail,
                onClick: N,
                videoUrl: P.yourSpace.assetUrl,
            },
            G = {
                name: "emojis",
                title: v.intl.string(v.t.zY5PPb),
                description: v.intl.string(v.t.R5Xag2),
                previewImage: P.emojis.thumbnail,
                videoUrl: P.emojis.assetUrl,
            },
            V = {
                name: "noLimits",
                title: v.intl.string(v.t["6b3ydG"]),
                description: v.intl.string(v.t["Y+IJyg"]),
                previewImage: P.noLimits.thumbnail,
                videoUrl: P.noLimits.assetUrl,
            },
            { isInTreatment: F } = (0, m.uX)("useBentoBoxes"),
            B = {
                name: "orbRewards",
                title: v.intl.string(O.default["ZFJ/NU"]),
                description: v.intl.string(O.default.wMi514),
                descriptionCta: v.intl.string(v.t.hvVgAZ),
                onClick: () => {
                    window.open(_.A.getArticleURL(E.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: P.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: P.orbRewards.assetUrl,
                badgeText: v.intl.string(v.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            H = [[k], [U], [G, V]];
        return {
            whatsNewBoxes: (e = T ? (F ? [[M], [B, x]] : [[M], [D, x]]) : F ? [[B], [D, x]] : [[j], [L, x]]),
            bestOfBoxes: H,
        };
    };
