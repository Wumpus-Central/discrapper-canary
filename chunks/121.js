a.d(t, { A0: () => er, NI: () => en, Ay: () => ei, Tb: () => es }), a(321073);
var s,
    r,
    n,
    i = a(627968),
    o = a(64700),
    l = a(192308),
    c = a(403581),
    d = a(793574),
    p = a(688810),
    m = a(793943),
    b = a(31502),
    u = a(259065),
    f = a(532794),
    h = a(206835),
    g = a(245853),
    R = a(976860),
    v = a(591179),
    E = a(462463),
    U = a(780964),
    x = a(858897),
    A = a(676279),
    M = a(975571),
    P = a(852218),
    S = a(382259),
    O = a(503698),
    _ = a.n(O),
    T = a(907581),
    y = a(533873);
let I = o.forwardRef((e, t) => {
    let { className: a } = e,
        s = o.useRef(null);
    return (
        o.useImperativeHandle(t, () => ({
            play: () => {
                s.current?.play();
            },
            pause: () => s.current?.pause(),
        })),
        (0, i.jsx)("div", {
            className: _()(a, y.k),
            children: (0, i.jsx)(T.C, { ref: s, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
I.displayName = "PremiumRewardsBentoBoxAsset";
var C = a(636592),
    w = a(26508),
    N = a(398523),
    L = a(881373),
    j = a(612669),
    B = a(788868),
    V = a(88001),
    k = a(652215),
    Y = a(654487),
    G = a(355097),
    D = a(962995),
    H = a(466919),
    W = a(490285),
    F = a(985018),
    X = a(693227),
    z = a(864386),
    K = a(817577);
let Q = "/assets/035ad0fba4997f3f.svg",
    Z =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    J =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    $ =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var q = a(576765),
    ee = a(88433),
    et = a(909340),
    ea = a(455482),
    es = (((s = {}).CONTAINED = "contained"), (s.OVERLAY = "overlay"), s),
    er = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    en =
        (((n = {}).REFERRAL_PROGRAM = "referralProgram"),
        (n.SERVER_PROFILES = "serverProfiles"),
        (n.SHOW_YOUR_STYLE = "showYourStyle"),
        (n.YOUR_SPACE = "yourSpace"),
        (n.EMOJIS = "emojis"),
        (n.NO_LIMITS = "noLimits"),
        (n.CUSTOM_THEMES = "customThemes"),
        (n.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (n.PREMIUM_GROUP = "premiumGroup"),
        (n.THREE_P_PROMOTIONS = "threePPromotions"),
        (n.ORB_REWARDS = "orbRewards"),
        (n.ORB_MULTIPLIER = "orbMultiplier"),
        (n.COMBINED_ORBS = "combinedOrbs"),
        n);
let ei = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, p.Ay)(d.A.PREMIUM_MARKETING_BENTO_BOX),
        s = (0, v.X)("useBentoBoxes"),
        r = (0, E.A)({ analyticsLocations: t }),
        n = (0, h.A)({ scrollPosition: G._F.TRY_IT_OUT, analyticsLocations: t }),
        O = (0, o.useCallback)(() => {
            (0, x.openUserSettings)(U.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, u.L)({ analyticsLocations: t }),
            );
        }, [t]),
        _ = (0, o.useCallback)(() => {
            (0, f.A)({ subscriptionTier: B.pe.TIER_2, initialPlanId: B.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        T = (0, A.TM)(),
        y = M.A.getArticleURL(k.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: es, multiplier: er } = (0, g.Dl)(Y.rE.NITRO_HOME_MARKETING),
        ei = o.useRef(null),
        eo = (0, b.l)("bento_box"),
        el = {
            premiumGroup: { thumbnail: K, assetUrl: K },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/72d36b061ab77178d2666828a1b85ce56b72c724a46f877a60e2e9b4f1c7c013.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/3cd0c013f736727621e01a0769c6e507a706c3825b6ccbc213097f412578564f.mov"
                    : "https://cdn.discordapp.com/assets/content/94f80d726eb81f1fa904679024772933e61e41f96767013f107be590b6ede322.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/72051417853b20246c99455734826d61973176255ac6a6059209a8a55c38a173.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/8e84ec148cf712dad3b412b4b89732d10baeffa5000e5aab53fb33a8adad6cb0.mov"
                    : "https://cdn.discordapp.com/assets/content/b4934724ca9e27546d1e203c71d245ff00b16047d38d8ae06647d8c4055ef122.webm",
            },
            emojis: {
                thumbnail: q.A,
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/1482b28b18f9a99c93cf0177dbffc140e55622e5e87ec7f10c3f9ed518331fda.mov"
                    : ee.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/d4b073efb93f88764e1e34591b7d39e3d66828127dae2546aefc799c19a5ed95.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/277a0bd0bfc586489265ba2c8de4f5c8aebc9bcb027c93e46332ba5f7ecf80d2.mov"
                    : "https://cdn.discordapp.com/assets/content/13c6539235b8e84c4a85128b3a500c2af70809d3f64bba1a861b25b415f6c1ca.webm",
            },
            orbRewards: { thumbnail: ea.A, assetUrl: et.A },
            orbMultiplier: { thumbnail: $, assetUrl: T ? Z : J },
            combinedOrbs: { thumbnail: $, assetUrl: T ? Z : J },
            threePPromotions: { thumbnail: eo ? (0, i.jsx)(I, { ref: ei }) : Q, assetUrl: eo ? void 0 : Q },
        },
        ec = {
            serverProfiles: {
                name: "serverProfiles",
                title: F.intl.string(F.t.I9TYMg),
                description: F.intl.string(F.t.HMSHeH),
                descriptionCta: F.intl.string(F.t.jVcuVY),
                onClick: s ? r : n,
                previewImage: el.serverProfiles.thumbnail,
                videoUrl: el.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: F.intl.string(F.t.tPY4o9),
                description: F.intl.format(F.t.jRPQUH, { learnMoreLink: y }),
                previewImage: el.referralProgram.thumbnail,
                videoUrl: el.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: F.intl.string(X.default.XokIHM),
                description: F.intl.string(X.default["7esQMC"]),
                descriptionCta: F.intl.string(F.t.jVcuVY),
                previewImage: el.customThemes.thumbnail,
                onClick: () => {
                    (0, m.nf)(m.HP.CUSTOM_THEME);
                },
                videoUrl: el.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: F.intl.string(z.default.ABtBDQ),
                description: F.intl.string(z.default.MFNXZh),
                descriptionCta: F.intl.string(F.t.jVcuVY),
                previewImage: el.displayNameStyles.thumbnail,
                onClick: s ? r : O,
                videoUrl: el.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: F.intl.formatToPlainString(H.default.VFEDDB, { premiumGroupProductName: (0, V.DP)() }),
                description: F.intl.formatToPlainString(H.default.WudmR3, {
                    totalSeats: V.aw,
                    premiumGroupProductName: (0, V.DP)(),
                }),
                previewImage: el.premiumGroup.thumbnail,
                videoUrl: el.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: F.intl.formatToPlainString(H.default.LwdrNi, { premiumGroupProductName: (0, V.DP)() }),
                        onClick: _,
                        icon: c.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: F.intl.string(F.t.hvVgAZ),
                        onClick: () => {
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([a.e("3370"), a.e("99709"), a.e("69595")]).then(
                                    a.bind(a, 526710),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: F.intl.string(F.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: F.intl.string(F.t.Ij3Zmv),
                description: F.intl.string(F.t.UsOUxY),
                descriptionCta: F.intl.string(F.t.jVcuVY),
                previewImage: el.showYourStyle.thumbnail,
                onClick: s ? r : n,
                videoUrl: el.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: F.intl.string(F.t.Wme3nX),
                description: F.intl.string(F.t["/aAIqV"]),
                descriptionCta: F.intl.string(F.t.jVcuVY),
                previewImage: el.yourSpace.thumbnail,
                onClick: () => {
                    {
                        let { openUserSettings: e } = a(858897);
                        e(U.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: el.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: F.intl.string(F.t.zY5PPb),
                description: F.intl.string(F.t.R5Xag2),
                previewImage: el.emojis.thumbnail,
                videoUrl: el.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: F.intl.string(F.t["6b3ydG"]),
                description: F.intl.string(F.t["Y+IJyg"]),
                previewImage: el.noLimits.thumbnail,
                videoUrl: el.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: eo ? F.intl.string(F.t.E4U4SS) : F.intl.string(D.default.OlObRa),
                description: eo ? F.intl.string(F.t["B4uSy/"]) : F.intl.string(D.default["8Gl8gP"]),
                descriptionCta: eo ? F.intl.string(F.t.RzWDqY) : F.intl.string(D.default.HINTfJ),
                previewImage: el.threePPromotions.thumbnail,
                videoUrl: el.threePPromotions.assetUrl,
                onClick: () => (0, S.u)({ analyticsLocations: t, partnerIds: [P.KS, P.Cs, P.XY] }),
                badgeText: eo ? void 0 : F.intl.string(F.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eo ? ei : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: F.intl.string(W.default["ZFJ/NU"]),
                description: F.intl.string(W.default.wMi514),
                descriptionCta: F.intl.string(F.t.hvVgAZ),
                onClick: () => {
                    window.open(M.A.getArticleURL(k.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: el.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: el.orbRewards.assetUrl,
                badgeText: eo ? void 0 : F.intl.string(F.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: F.intl.string(F.t.F2MShO),
                description: F.intl.format(F.t["G5k+lZ"], { bonusOrbMultiplier: er }),
                descriptionCta: F.intl.string(F.t.jVcuVY),
                onClick: () => (0, R.pX)(k.BVt.QUEST_HOME),
                badgeText: eo ? void 0 : F.intl.string(F.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: el.orbMultiplier.thumbnail,
                videoUrl: el.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: F.intl.string(F.t.Tzhw6e),
                description: F.intl.format(F.t.djzJx6, { bonusOrbMultiplier: er }),
                descriptionCta: F.intl.string(F.t.RzWDqY),
                onClick: () => (0, R.pX)(k.BVt.QUEST_HOME),
                badgeText: eo ? void 0 : F.intl.string(F.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: el.combinedOrbs.thumbnail,
                videoUrl: el.combinedOrbs.assetUrl,
            },
        },
        ed = (e) => {
            let t = ec[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        },
        ep = (function (e) {
            let t = (0, L.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: a } = N.Ay.useConfig({ location: "bento_box" }),
                s = (0, j.O9)(),
                r = (0, w.DK)(C.W.NITRO, "useBentoBoxes"),
                n = r && e;
            return [
                ...(t || a ? [en.THREE_P_PROMOTIONS] : []),
                ...(n ? [en.COMBINED_ORBS] : []),
                ...(!n && e ? [en.ORB_MULTIPLIER] : []),
                ...(s ? [en.PREMIUM_GROUP] : []),
                ...(!n && r ? [en.ORB_REWARDS] : []),
                en.DISPLAY_NAME_STYLES,
                en.CUSTOM_THEMES,
                en.SERVER_PROFILES,
                en.REFERRAL_PROGRAM,
            ];
        })(es),
        em = [],
        eb = e ? null : ep[0],
        eu = ep.slice(+!e, e ? 2 : 3);
    return (
        null != eb && em.push([ed(eb)]),
        1 === eu.length ? em.push([ed(eu[0])]) : 2 === eu.length && em.push([ed(eu[0]), ed(eu[1])]),
        {
            whatsNewBoxes: [...em],
            bestOfBoxes: [[ed("showYourStyle")], [ed("yourSpace")], [ed("emojis"), ed("noLimits")]],
        }
    );
};
