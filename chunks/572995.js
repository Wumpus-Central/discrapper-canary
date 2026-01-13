n.d(t, {
    P6: () => Q,
    ZP: () => $,
    y$: () => X,
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
    m = n(260720),
    h = n(282793),
    g = n(981631),
    E = n(526761),
    b = n(353149),
    y = n(388032),
    O = n(831989),
    v = n(143525),
    S = n(261778),
    I = n(872532),
    T = n(94314),
    C = n(548475),
    A = n(967830),
    N = n(742694),
    P = n(406459),
    R = n(91830),
    w = n(32357),
    D = n(147146),
    x = n(801794),
    L = n(739790),
    j = n(779235),
    M = n(511974),
    k = n(508111),
    U = n(459872),
    G = n(860751),
    Z = n(584470),
    F = n(810933),
    B = n(857245),
    V = n(383057),
    H = n(370026),
    Y = n(120368),
    W = n(378325),
    K = n(962526);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
var Q = (function (e) {
        return (e.CONTAINED = "contained"), (e.OVERLAY = "overlay"), e;
    })({}),
    X = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), e;
    })({});
let J = (e) => ({
        premiumGroup: {
            thumbnail: S,
            assetUrl: S,
        },
        serverProfiles: {
            thumbnail: I,
            assetUrl: e ? W.ZP : K.ZP,
        },
        customThemes: {
            thumbnail: H.Z,
            assetUrl: e ? V.Z : Y.Z,
        },
        displayNameStyles: {
            thumbnail: C.Z,
            assetUrl: e ? T.Z : A.Z,
        },
        referralProgram: {
            thumbnail: j.Z,
            assetUrl: e ? L.Z : M.Z,
        },
        showYourStyle: {
            thumbnail: U.Z,
            assetUrl: e ? k.Z : G.Z,
        },
        yourSpace: {
            thumbnail: F.Z,
            assetUrl: e ? Z.Z : B.Z,
        },
        emojis: {
            thumbnail: P.Z,
            assetUrl: e ? N.Z : R.Z,
        },
        noLimits: {
            thumbnail: D.Z,
            assetUrl: e ? w.Z : x.Z,
        },
    }),
    $ = () => {
        let e,
            { analyticsLocations: t } = (0, s.ZP)(o.Z.PREMIUM_MARKETING_BENTO_BOX),
            S = (0, u.Z)({
                scrollPosition: E.Y_.TRY_IT_OUT,
                analyticsLocations: t,
            }),
            I = (0, m.QL)(),
            T = (0, i.useCallback)(() => {
                (0, f.openUserSettings)(
                    d.n.PROFILE_PANEL,
                    {
                        section: g.oAB.PROFILE_CUSTOMIZATION,
                        analyticsLocations: t,
                    },
                    () => (0, c.I)({ analyticsLocations: t }),
                );
            }, [t]),
            C = () => {
                {
                    let { openUserSettings: e } = n(518596);
                    e(d.n.APPEARANCE_PANEL, {
                        section: g.oAB.APPEARANCE,
                        analyticsLocations: t,
                    });
                }
            },
            A = (0, p.rO)(),
            N = _.Z.getArticleURL(g.BhN.REFERRAL_PROGRAM),
            P = J(A),
            R = {
                name: "serverProfiles",
                title: y.intl.string(y.t.I9TYMg),
                description: y.intl.string(y.t.HMSHeH),
                descriptionCta: y.intl.string(y.t.jVcuVY),
                onClick: S,
                previewImage: P.serverProfiles.thumbnail,
                videoUrl: P.serverProfiles.assetUrl,
            },
            w = {
                name: "referralProgram",
                title: y.intl.string(y.t.tPY4o9),
                description: y.intl.format(y.t.jRPQUH, { learnMoreLink: N }),
                previewImage: P.referralProgram.thumbnail,
                videoUrl: P.referralProgram.assetUrl,
            },
            D = {
                name: "customThemes",
                title: y.intl.string(O.default.XokIHM),
                description: y.intl.string(O.default["7esQMC"]),
                descriptionCta: y.intl.string(y.t.jVcuVY),
                previewImage: P.customThemes.thumbnail,
                onClick: () => {
                    (0, l.XO)(l.wh.CUSTOM_THEME);
                },
                videoUrl: P.customThemes.assetUrl,
            },
            x = {
                name: "displayNameStyles",
                title: y.intl.string(v.default.ABtBDQ),
                description: y.intl.string(v.default.MFNXZh),
                descriptionCta: y.intl.string(y.t.jVcuVY),
                previewImage: P.displayNameStyles.thumbnail,
                onClick: T,
                badgeText: y.intl.string(y.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: P.displayNameStyles.assetUrl,
            },
            L = {
                name: "premiumGroup",
                title: y.intl.formatToPlainString(b.default.VFEDDB, { premiumGroupProductName: (0, h.sO)() }),
                description: y.intl.formatToPlainString(b.default.WudmR3, {
                    totalSeats: h.Q5,
                    premiumGroupProductName: (0, h.sO)(),
                }),
                descriptionCta: y.intl.string(y.t.hvVgAZ),
                previewImage: P.premiumGroup.thumbnail,
                videoUrl: P.premiumGroup.assetUrl,
                onClick: () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("33638").then(n.bind(n, 837244));
                        return (t) => (0, r.jsx)(e, q({}, t));
                    });
                },
                badgeText: y.intl.string(y.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            j = {
                name: "showYourStyle",
                title: y.intl.string(y.t.Ij3Zmv),
                description: y.intl.string(y.t.UsOUxY),
                descriptionCta: y.intl.string(y.t.jVcuVY),
                previewImage: P.showYourStyle.thumbnail,
                onClick: S,
                videoUrl: P.showYourStyle.assetUrl,
            },
            M = {
                name: "yourSpace",
                title: y.intl.string(y.t.Wme3nX),
                description: y.intl.string(y.t["/aAIqV"]),
                descriptionCta: y.intl.string(y.t.jVcuVY),
                previewImage: P.yourSpace.thumbnail,
                onClick: C,
                videoUrl: P.yourSpace.assetUrl,
            },
            k = {
                name: "emojis",
                title: y.intl.string(y.t.zY5PPb),
                description: y.intl.string(y.t.R5Xag2),
                previewImage: P.emojis.thumbnail,
                videoUrl: P.emojis.assetUrl,
            },
            U = [
                [j],
                [M],
                [
                    k,
                    {
                        name: "noLimits",
                        title: y.intl.string(y.t["6b3ydG"]),
                        description: y.intl.string(y.t["Y+IJyg"]),
                        previewImage: P.noLimits.thumbnail,
                        videoUrl: P.noLimits.assetUrl,
                    },
                ],
            ];
        return {
            whatsNewBoxes: (e = I ? [[L], [R, w]] : [[x], [D, w]]),
            bestOfBoxes: U,
        };
    };
