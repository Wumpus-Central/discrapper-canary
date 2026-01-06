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
    c = n(594928),
    u = n(829716),
    d = n(300284),
    f = n(313789),
    p = n(518596),
    _ = n(526167),
    m = n(63063),
    h = n(340625),
    g = n(260720),
    E = n(469165),
    b = n(282793),
    y = n(981631),
    O = n(526761),
    v = n(353149),
    S = n(388032),
    I = n(831989),
    T = n(143525),
    C = n(261778),
    A = n(872532),
    N = n(836236),
    P = n(94314),
    R = n(548475),
    w = n(967830),
    D = n(742694),
    x = n(406459),
    L = n(91830),
    j = n(32357),
    M = n(147146),
    k = n(801794),
    U = n(739790),
    G = n(779235),
    Z = n(511974),
    F = n(508111),
    B = n(459872),
    V = n(860751),
    H = n(584470),
    Y = n(810933),
    W = n(857245),
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
            thumbnail: C,
            assetUrl: C,
        },
        serverProfiles: {
            thumbnail: A,
            assetUrl: e ? Q.ZP : X.ZP,
        },
        customThemes: {
            thumbnail: z.Z,
            assetUrl: e ? K.Z : q.Z,
        },
        displayNameStyles: {
            thumbnail: R.Z,
            assetUrl: e ? P.Z : w.Z,
        },
        recurring3PPromotions: {
            thumbnail: N.Z,
            assetUrl: " ",
        },
        referralProgram: {
            thumbnail: G.Z,
            assetUrl: e ? U.Z : Z.Z,
        },
        showYourStyle: {
            thumbnail: B.Z,
            assetUrl: e ? F.Z : V.Z,
        },
        yourSpace: {
            thumbnail: Y.Z,
            assetUrl: e ? H.Z : W.Z,
        },
        emojis: {
            thumbnail: x.Z,
            assetUrl: e ? D.Z : L.Z,
        },
        noLimits: {
            thumbnail: M.Z,
            assetUrl: e ? j.Z : k.Z,
        },
    }),
    er = () => {
        let { analyticsLocations: e } = (0, s.ZP)(o.Z.PREMIUM_MARKETING_BENTO_BOX),
            t = (0, d.Z)({
                scrollPosition: O.Y_.TRY_IT_OUT,
                analyticsLocations: e,
            }),
            C = c.JH.useExperiment({ location: "useBentoBoxes" }).enabled,
            A = h.Z.useExperiment({ location: "useBentoBoxes" }),
            N = (0, g.QL)(),
            P = (0, i.useCallback)(() => {
                (0, p.openUserSettings)(
                    f.n.PROFILE_PANEL,
                    {
                        section: y.oAB.PROFILE_CUSTOMIZATION,
                        analyticsLocations: e,
                    },
                    () => (0, u.I)({ analyticsLocations: e }),
                );
            }, [e]),
            R = () => {
                {
                    let { openUserSettings: t } = n(518596);
                    t(f.n.APPEARANCE_PANEL, {
                        section: y.oAB.APPEARANCE,
                        analyticsLocations: e,
                    });
                }
            },
            w = (0, _.rO)(),
            D = m.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM),
            x = en(w),
            L = {
                name: "serverProfiles",
                title: S.intl.string(S.t.I9TYMg),
                description: S.intl.string(S.t.HMSHeH),
                descriptionCta: S.intl.string(S.t.jVcuVY),
                onClick: t,
                previewImage: x.serverProfiles.thumbnail,
                videoUrl: x.serverProfiles.assetUrl,
            },
            j = {
                name: "referralProgram",
                title: S.intl.string(S.t.tPY4o9),
                description: S.intl.format(S.t.jRPQUH, { learnMoreLink: D }),
                previewImage: x.referralProgram.thumbnail,
                videoUrl: x.referralProgram.assetUrl,
            },
            M = {
                name: "customThemes",
                title: S.intl.string(I.default.XokIHM),
                description: S.intl.string(I.default["7esQMC"]),
                descriptionCta: S.intl.string(S.t.jVcuVY),
                previewImage: x.customThemes.thumbnail,
                onClick: () => {
                    (0, l.XO)(l.wh.CUSTOM_THEME);
                },
                videoUrl: x.customThemes.assetUrl,
            },
            k = {
                name: "displayNameStyles",
                title: S.intl.string(T.default.ABtBDQ),
                description: S.intl.string(T.default.MFNXZh),
                descriptionCta: S.intl.string(S.t.jVcuVY),
                previewImage: x.displayNameStyles.thumbnail,
                onClick: P,
                badgeText: S.intl.string(S.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: x.displayNameStyles.assetUrl,
            },
            U = {
                name: "premiumGroup",
                title: S.intl.formatToPlainString(v.default.VFEDDB, { premiumGroupProductName: (0, b.sO)() }),
                description: S.intl.formatToPlainString(v.default.WudmR3, {
                    totalSeats: b.Q5,
                    premiumGroupProductName: (0, b.sO)(),
                }),
                descriptionCta: S.intl.string(S.t.hvVgAZ),
                previewImage: x.premiumGroup.thumbnail,
                videoUrl: x.premiumGroup.assetUrl,
                onClick: () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("33638").then(n.bind(n, 837244));
                        return (t) => (0, r.jsx)(e, $({}, t));
                    });
                },
                badgeText: S.intl.string(S.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            G = {
                name: "recurring3PPromotions",
                title: S.intl.string(S.t.m7PucM),
                description: S.intl.format(S.t.mqSNPd, {}),
                descriptionCta: S.intl.formatToPlainString(S.t.Bf1cBD, {
                    helpdeskArticle: m.Z.getArticleURL(y.BhN.RECURRING_PROMOTION),
                }),
                onClick: () => (0, E.wQ)({ analyticsLocations: e }),
                badgeText: S.intl.string(S.t.oW0eUd).toLocaleUpperCase(),
                previewImage: x.recurring3PPromotions.thumbnail,
                videoUrl: x.recurring3PPromotions.thumbnail,
            },
            Z = {
                name: "showYourStyle",
                title: S.intl.string(S.t.Ij3Zmv),
                description: S.intl.string(S.t.UsOUxY),
                descriptionCta: S.intl.string(S.t.jVcuVY),
                previewImage: x.showYourStyle.thumbnail,
                onClick: t,
                videoUrl: x.showYourStyle.assetUrl,
            },
            F = {
                name: "yourSpace",
                title: S.intl.string(S.t.Wme3nX),
                description: S.intl.string(S.t["/aAIqV"]),
                descriptionCta: S.intl.string(S.t.jVcuVY),
                previewImage: x.yourSpace.thumbnail,
                onClick: R,
                videoUrl: x.yourSpace.assetUrl,
            },
            B = {
                name: "emojis",
                title: S.intl.string(S.t.zY5PPb),
                description: S.intl.string(S.t.R5Xag2),
                previewImage: x.emojis.thumbnail,
                videoUrl: x.emojis.assetUrl,
            },
            V = {
                name: "noLimits",
                title: S.intl.string(S.t["6b3ydG"]),
                description: S.intl.string(S.t["Y+IJyg"]),
                previewImage: x.noLimits.thumbnail,
                videoUrl: x.noLimits.assetUrl,
            };
        return {
            whatsNewBoxes: N ? [[U], [L, j]] : C ? [[k], [M, j]] : A.enabled ? [[G], [L, j]] : [[M], [L, j]],
            bestOfBoxes: [[Z], [F], [B, V]],
        };
    };
