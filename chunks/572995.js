n.d(t, {
    P6: () => ee,
    ZP: () => er,
    y$: () => et,
});
var r = n(54381),
    i = n(473749),
    a = n(952265),
    o = n(100527),
    s = n(906732),
    l = n(550385),
    c = n(829716),
    u = n(300284),
    d = n(313789),
    f = n(518596),
    p = n(526167),
    _ = n(63063),
    h = n(260720),
    m = n(375527),
    g = n(282793),
    E = n(981631),
    b = n(526761),
    y = n(353149),
    O = n(618435),
    v = n(388032),
    S = n(831989),
    I = n(143525),
    T = n(261778),
    C = n(872532),
    A = n(94314),
    N = n(548475),
    P = n(967830),
    w = n(742694),
    R = n(406459),
    D = n(91830),
    x = n(32357),
    L = n(147146),
    j = n(801794),
    M = n(739790),
    k = n(779235),
    U = n(511974),
    G = n(508111),
    Z = n(459872),
    F = n(980463),
    B = n(584470),
    V = n(810933),
    H = n(857245),
    Y = n(900303),
    W = n(989448),
    K = n(383057),
    z = n(370026),
    q = n(120368),
    Q = n(378325),
    X = n(962526);
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
    })({});
let en = (e) => ({
        premiumGroup: {
            thumbnail: T,
            assetUrl: T,
        },
        serverProfiles: {
            thumbnail: C,
            assetUrl: e ? Q.ZP : X.ZP,
        },
        customThemes: {
            thumbnail: z.Z,
            assetUrl: e ? K.Z : q.Z,
        },
        displayNameStyles: {
            thumbnail: N.Z,
            assetUrl: e ? A.Z : P.Z,
        },
        referralProgram: {
            thumbnail: k.Z,
            assetUrl: e ? M.Z : U.Z,
        },
        showYourStyle: {
            thumbnail: Z.Z,
            assetUrl: e ? G.Z : F.Z,
        },
        yourSpace: {
            thumbnail: V.Z,
            assetUrl: e ? B.Z : H.Z,
        },
        emojis: {
            thumbnail: R.Z,
            assetUrl: e ? w.Z : D.Z,
        },
        noLimits: {
            thumbnail: L.Z,
            assetUrl: e ? x.Z : j.Z,
        },
        orbRewards: {
            thumbnail: W.Z,
            assetUrl: Y.Z,
        },
    }),
    er = () => {
        let e,
            { analyticsLocations: t } = (0, s.ZP)(o.Z.PREMIUM_MARKETING_BENTO_BOX),
            T = (0, u.Z)({
                scrollPosition: b.Y_.TRY_IT_OUT,
                analyticsLocations: t,
            }),
            C = (0, h.QL)(),
            A = (0, i.useCallback)(() => {
                (0, f.openUserSettings)(
                    d.n.PROFILE_PANEL,
                    {
                        section: E.oAB.PROFILE_CUSTOMIZATION,
                        analyticsLocations: t,
                    },
                    () => (0, c.I)({ analyticsLocations: t }),
                );
            }, [t]),
            N = () => {
                {
                    let { openUserSettings: e } = n(518596);
                    e(d.n.APPEARANCE_PANEL, {
                        section: E.oAB.APPEARANCE,
                        analyticsLocations: t,
                    });
                }
            },
            P = (0, p.rO)(),
            w = _.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM),
            R = en(P),
            D = {
                name: "serverProfiles",
                title: v.intl.string(v.t.I9TYMg),
                description: v.intl.string(v.t.HMSHeH),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                onClick: T,
                previewImage: R.serverProfiles.thumbnail,
                videoUrl: R.serverProfiles.assetUrl,
            },
            x = {
                name: "referralProgram",
                title: v.intl.string(v.t.tPY4o9),
                description: v.intl.format(v.t.jRPQUH, { learnMoreLink: w }),
                previewImage: R.referralProgram.thumbnail,
                videoUrl: R.referralProgram.assetUrl,
            },
            L = {
                name: "customThemes",
                title: v.intl.string(S.default.XokIHM),
                description: v.intl.string(S.default["7esQMC"]),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                previewImage: R.customThemes.thumbnail,
                onClick: () => {
                    (0, l.XO)(l.wh.CUSTOM_THEME);
                },
                videoUrl: R.customThemes.assetUrl,
            },
            j = {
                name: "displayNameStyles",
                title: v.intl.string(I.default.ABtBDQ),
                description: v.intl.string(I.default.MFNXZh),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                previewImage: R.displayNameStyles.thumbnail,
                onClick: A,
                badgeText: v.intl.string(v.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: R.displayNameStyles.assetUrl,
            },
            M = {
                name: "premiumGroup",
                title: v.intl.formatToPlainString(y.default.VFEDDB, { premiumGroupProductName: (0, g.sO)() }),
                description: v.intl.formatToPlainString(y.default.WudmR3, {
                    totalSeats: g.Q5,
                    premiumGroupProductName: (0, g.sO)(),
                }),
                descriptionCta: v.intl.string(v.t.hvVgAZ),
                previewImage: R.premiumGroup.thumbnail,
                videoUrl: R.premiumGroup.assetUrl,
                onClick: () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("33638").then(n.bind(n, 837244));
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
                previewImage: R.showYourStyle.thumbnail,
                onClick: T,
                videoUrl: R.showYourStyle.assetUrl,
            },
            U = {
                name: "yourSpace",
                title: v.intl.string(v.t.Wme3nX),
                description: v.intl.string(v.t["/aAIqV"]),
                descriptionCta: v.intl.string(v.t.jVcuVY),
                previewImage: R.yourSpace.thumbnail,
                onClick: N,
                videoUrl: R.yourSpace.assetUrl,
            },
            G = {
                name: "emojis",
                title: v.intl.string(v.t.zY5PPb),
                description: v.intl.string(v.t.R5Xag2),
                previewImage: R.emojis.thumbnail,
                videoUrl: R.emojis.assetUrl,
            },
            Z = {
                name: "noLimits",
                title: v.intl.string(v.t["6b3ydG"]),
                description: v.intl.string(v.t["Y+IJyg"]),
                previewImage: R.noLimits.thumbnail,
                videoUrl: R.noLimits.assetUrl,
            },
            { orbsRewardAmount: F, isInTreatment: B } = (0, m.er)("useBentoBoxes"),
            V = {
                name: "orbRewards",
                title: v.intl.string(O.default["ZFJ/NU"]),
                description: v.intl.formatToPlainString(O.default.VuvFfT, { orbsCount: F }),
                descriptionCta: v.intl.string(v.t.hvVgAZ),
                onClick: () => {
                    window.open(_.Z.getArticleURL(E.BhN.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: R.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: R.orbRewards.assetUrl,
                badgeText: v.intl.string(v.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            H = [[k], [U], [G, Z]];
        return {
            whatsNewBoxes: (e = C ? (B ? [[M], [V, x]] : [[M], [D, x]]) : B ? [[V], [D, x]] : [[j], [L, x]]),
            bestOfBoxes: H,
        };
    };
