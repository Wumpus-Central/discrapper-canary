"use strict";
n.d(t, { A0: () => er, NI: () => es, Ay: () => ea, Tb: () => ei }), n(321073);
var i,
    r,
    s,
    a = n(627968),
    o = n(64700),
    l = n(192308),
    u = n(403581),
    c = n(793574),
    d = n(688810),
    _ = n(793943),
    h = n(31502),
    f = n(259065),
    p = n(532794),
    E = n(206835),
    m = n(192444),
    g = n(976860),
    A = n(591179),
    I = n(462463),
    T = n(780964),
    S = n(766075),
    y = n(676279),
    N = n(975571),
    v = n(852218),
    C = n(382259),
    R = n(503698),
    O = n.n(R),
    b = n(907581),
    D = n(533873);
let L = o.forwardRef((e, t) => {
    let { className: n } = e,
        i = o.useRef(null);
    return (
        o.useImperativeHandle(t, () => ({
            play: () => {
                i.current?.play();
            },
            pause: () => i.current?.pause(),
        })),
        (0, a.jsx)("div", {
            className: O()(n, D.k),
            children: (0, a.jsx)(b.C, { ref: i, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
L.displayName = "PremiumRewardsBentoBoxAsset";
var w = n(440005),
    M = n(49132),
    P = n(398523),
    x = n(881373),
    k = n(39423),
    U = n(788868),
    G = n(88001),
    F = n(652215),
    V = n(190107),
    B = n(355097),
    H = n(962995),
    j = n(466919),
    Y = n(490285),
    W = n(375708),
    K = n(693227),
    $ = n(864386),
    z = n(817577);
let q = "/assets/035ad0fba4997f3f.svg",
    X =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    Z =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    Q =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var J = n(576765),
    ee = n(88433),
    et = n(909340),
    en = n(455482),
    ei = (((i = {}).CONTAINED = "contained"), (i.OVERLAY = "overlay"), i),
    er = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    es =
        (((s = {}).REFERRAL_PROGRAM = "referralProgram"),
        (s.SERVER_PROFILES = "serverProfiles"),
        (s.SHOW_YOUR_STYLE = "showYourStyle"),
        (s.YOUR_SPACE = "yourSpace"),
        (s.EMOJIS = "emojis"),
        (s.NO_LIMITS = "noLimits"),
        (s.CUSTOM_THEMES = "customThemes"),
        (s.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (s.PREMIUM_GROUP = "premiumGroup"),
        (s.THREE_P_PROMOTIONS = "threePPromotions"),
        (s.ORB_REWARDS = "orbRewards"),
        (s.ORB_MULTIPLIER = "orbMultiplier"),
        (s.COMBINED_ORBS = "combinedOrbs"),
        s);
let ea = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, d.Ay)(c.A.PREMIUM_MARKETING_BENTO_BOX),
        i = (0, A.X)("useBentoBoxes"),
        r = (0, I.A)({ analyticsLocations: t }),
        s = (0, E.A)({ scrollPosition: B._F.TRY_IT_OUT, analyticsLocations: t }),
        R = (0, o.useCallback)(() => {
            (0, S.openUserSettings)(T.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        O = (0, o.useCallback)(() => {
            (0, p.A)({ subscriptionTier: U.pe.TIER_2, initialPlanId: U.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        b = (0, y.TM)(),
        D = N.A.getArticleURL(F.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ei, multiplier: er } = (0, m.lk)(V.rE.NITRO_HOME_MARKETING),
        ea = o.useRef(null),
        eo = (0, h.l)("bento_box"),
        el = {
            premiumGroup: { thumbnail: z, assetUrl: z },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: b
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: b
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: b
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: b
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: b
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: b
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: J.A,
                assetUrl: b
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : ee.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: b
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: en.A, assetUrl: et.A },
            orbMultiplier: { thumbnail: Q, assetUrl: b ? X : Z },
            combinedOrbs: { thumbnail: Q, assetUrl: b ? X : Z },
            threePPromotions: { thumbnail: eo ? (0, a.jsx)(L, { ref: ea }) : q, assetUrl: eo ? void 0 : q },
        },
        eu = {
            serverProfiles: {
                name: "serverProfiles",
                title: W.intl.string(W.t.I9TYMg),
                description: W.intl.string(W.t.HMSHeH),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                onClick: i ? r : s,
                previewImage: el.serverProfiles.thumbnail,
                videoUrl: el.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: W.intl.string(W.t.tPY4o9),
                description: W.intl.format(W.t.jRPQUH, { learnMoreLink: D }),
                previewImage: el.referralProgram.thumbnail,
                videoUrl: el.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: W.intl.string(K.default.XokIHM),
                description: W.intl.string(K.default["7esQMC"]),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                previewImage: el.customThemes.thumbnail,
                onClick: () => {
                    (0, _.nf)(_.HP.CUSTOM_THEME);
                },
                videoUrl: el.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: W.intl.string($.default.ABtBDQ),
                description: W.intl.string($.default.MFNXZh),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                previewImage: el.displayNameStyles.thumbnail,
                onClick: i ? r : R,
                videoUrl: el.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: W.intl.formatToPlainString(j.default.VFEDDB, { premiumGroupProductName: (0, G.DP)() }),
                description: W.intl.formatToPlainString(j.default.WudmR3, {
                    totalSeats: G.aw,
                    premiumGroupProductName: (0, G.DP)(),
                }),
                previewImage: el.premiumGroup.thumbnail,
                videoUrl: el.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: W.intl.formatToPlainString(j.default.LwdrNi, { premiumGroupProductName: (0, G.DP)() }),
                        onClick: O,
                        icon: u.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: W.intl.string(W.t.hvVgAZ),
                        onClick: () => {
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("99709"), n.e("3370"), n.e("69595")]).then(
                                    n.bind(n, 526710),
                                );
                                return (t) => (0, a.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: W.intl.string(W.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: W.intl.string(W.t.Ij3Zmv),
                description: W.intl.string(W.t.UsOUxY),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                previewImage: el.showYourStyle.thumbnail,
                onClick: i ? r : s,
                videoUrl: el.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: W.intl.string(W.t.Wme3nX),
                description: W.intl.string(W.t["/aAIqV"]),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                previewImage: el.yourSpace.thumbnail,
                onClick: () => {
                    {
                        let { openUserSettings: e } = n(766075);
                        e(T.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: el.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: W.intl.string(W.t.zY5PPb),
                description: W.intl.string(W.t.R5Xag2),
                previewImage: el.emojis.thumbnail,
                videoUrl: el.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: W.intl.string(W.t["6b3ydG"]),
                description: W.intl.string(W.t["Y+IJyg"]),
                previewImage: el.noLimits.thumbnail,
                videoUrl: el.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: eo ? W.intl.string(W.t.E4U4SS) : W.intl.string(H.default.OlObRa),
                description: eo ? W.intl.string(W.t["B4uSy/"]) : W.intl.string(H.default["8Gl8gP"]),
                descriptionCta: eo ? W.intl.string(W.t.RzWDqY) : W.intl.string(H.default.HINTfJ),
                previewImage: el.threePPromotions.thumbnail,
                videoUrl: el.threePPromotions.assetUrl,
                onClick: () =>
                    (0, C.u)({ analyticsLocations: t, partnerIds: [v.KS, v.Cs, v.XY, ...(eo ? ["xbox"] : [])] }),
                badgeText: eo ? void 0 : W.intl.string(W.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eo ? ea : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: W.intl.string(Y.default["ZFJ/NU"]),
                description: W.intl.string(Y.default.wMi514),
                descriptionCta: W.intl.string(W.t.hvVgAZ),
                onClick: () => {
                    window.open(N.A.getArticleURL(F.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: el.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: el.orbRewards.assetUrl,
                badgeText: eo ? void 0 : W.intl.string(W.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: W.intl.string(W.t.Csf5Ol),
                description: W.intl.format(W.t["G5k+lZ"], { bonusOrbMultiplier: er }),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                onClick: () => (0, g.pX)(F.BVt.QUEST_HOME),
                badgeVariant: "expressive",
                previewImage: el.orbMultiplier.thumbnail,
                videoUrl: el.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: W.intl.string(W.t.Tzhw6e),
                description: W.intl.format(W.t.djzJx6, { bonusOrbMultiplier: er }),
                descriptionCta: W.intl.string(W.t.RzWDqY),
                onClick: () => (0, g.pX)(F.BVt.QUEST_HOME),
                badgeText: eo ? void 0 : W.intl.string(W.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: el.combinedOrbs.thumbnail,
                videoUrl: el.combinedOrbs.assetUrl,
            },
        },
        ec = (e) => {
            let t = eu[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        },
        ed = (function (e) {
            let t = (0, x.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: n } = P.Ay.useConfig({ location: "bento_box" }),
                i = (0, k.O9)(),
                r = (0, M.DK)(w.W.NITRO, "useBentoBoxes"),
                s = r && e;
            return [
                ...(t || n ? [es.THREE_P_PROMOTIONS] : []),
                ...(s ? [es.COMBINED_ORBS] : []),
                ...(!s && e ? [es.ORB_MULTIPLIER] : []),
                ...(i ? [es.PREMIUM_GROUP] : []),
                ...(!s && r ? [es.ORB_REWARDS] : []),
                es.DISPLAY_NAME_STYLES,
                es.CUSTOM_THEMES,
                es.SERVER_PROFILES,
                es.REFERRAL_PROGRAM,
            ];
        })(ei),
        e_ = [],
        eh = e ? null : ed[0],
        ef = ed.slice(+!e, e ? 2 : 3);
    return (
        null != eh && e_.push([ec(eh)]),
        1 === ef.length ? e_.push([ec(ef[0])]) : 2 === ef.length && e_.push([ec(ef[0]), ec(ef[1])]),
        {
            whatsNewBoxes: [...e_],
            bestOfBoxes: [[ec("showYourStyle")], [ec("yourSpace")], [ec("emojis"), ec("noLimits")]],
        }
    );
};
