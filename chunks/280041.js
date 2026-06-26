"use strict";
n.d(t, { A0: () => es, NI: () => ea, Ay: () => eo, Tb: () => er }), n(321073);
var i,
    r,
    s,
    a = n(627968),
    o = n(64700),
    l = n(696292),
    u = n(192308),
    c = n(403581),
    d = n(793574),
    _ = n(688810),
    h = n(793943),
    f = n(31502),
    p = n(259065),
    E = n(532794),
    m = n(206835),
    g = n(192444),
    A = n(617986),
    I = n(591179),
    T = n(462463),
    S = n(780964),
    y = n(766075),
    C = n(676279),
    N = n(975571),
    v = n(852218),
    R = n(382259),
    O = n(503698),
    b = n.n(O),
    D = n(907581),
    L = n(184049);
let w = o.forwardRef((e, t) => {
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
            className: b()(n, L.k),
            children: (0, a.jsx)(D.C, { ref: i, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
w.displayName = "PremiumRewardsBentoBoxAsset";
var M = n(440005),
    P = n(49132),
    x = n(398523),
    k = n(881373),
    U = n(862990),
    G = n(788868),
    F = n(88001),
    V = n(652215),
    B = n(190107),
    j = n(355097),
    H = n(778414),
    Y = n(963458),
    W = n(587416),
    K = n(375708),
    $ = n(491404),
    z = n(745699),
    q = n(817577);
let Z = "/assets/035ad0fba4997f3f.svg",
    X =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    Q =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    J =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var ee = n(576765),
    et = n(88433),
    en = n(909340),
    ei = n(455482),
    er = (((i = {}).CONTAINED = "contained"), (i.OVERLAY = "overlay"), i),
    es = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    ea =
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
let eo = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, _.Ay)(d.A.PREMIUM_MARKETING_BENTO_BOX),
        i = (0, I.X)("useBentoBoxes"),
        r = (0, T.A)({ analyticsLocations: t }),
        s = (0, m.A)({ scrollPosition: j._F.TRY_IT_OUT, analyticsLocations: t }),
        O = (0, o.useCallback)(() => {
            (0, y.openUserSettings)(S.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, p.L)({ analyticsLocations: t }),
            );
        }, [t]),
        b = (0, o.useCallback)(() => {
            (0, E.A)({ subscriptionTier: G.pe.TIER_2, initialPlanId: G.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        D = (0, C.TM)(),
        L = N.A.getArticleURL(V.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: er, multiplier: es } = (0, g.lk)(B.rE.NITRO_HOME_MARKETING),
        eo = o.useRef(null),
        el = (0, f.l)("bento_box"),
        eu = {
            premiumGroup: { thumbnail: q, assetUrl: q },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: ee.A,
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : et.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: ei.A, assetUrl: en.A },
            orbMultiplier: { thumbnail: J, assetUrl: D ? X : Q },
            combinedOrbs: { thumbnail: J, assetUrl: D ? X : Q },
            threePPromotions: { thumbnail: el ? (0, a.jsx)(w, { ref: eo }) : Z, assetUrl: el ? void 0 : Z },
        },
        ec = {
            serverProfiles: {
                name: "serverProfiles",
                title: K.intl.string(K.t.I9TYMg),
                description: K.intl.string(K.t.HMSHeH),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                onClick: i ? r : s,
                previewImage: eu.serverProfiles.thumbnail,
                videoUrl: eu.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: K.intl.string(K.t.tPY4o9),
                description: K.intl.format(K.t.jRPQUH, { learnMoreLink: L }),
                previewImage: eu.referralProgram.thumbnail,
                videoUrl: eu.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: K.intl.string($.default.XokIHM),
                description: K.intl.string($.default["7esQMC"]),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                previewImage: eu.customThemes.thumbnail,
                onClick: () => {
                    (0, h.nf)(h.HP.CUSTOM_THEME);
                },
                videoUrl: eu.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: K.intl.string(z.default.ABtBDQ),
                description: K.intl.string(z.default.MFNXZh),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                previewImage: eu.displayNameStyles.thumbnail,
                onClick: i ? r : O,
                videoUrl: eu.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: K.intl.formatToPlainString(Y.default.VFEDDB, { premiumGroupProductName: (0, F.DP)() }),
                description: K.intl.formatToPlainString(Y.default.WudmR3, {
                    totalSeats: F.aw,
                    premiumGroupProductName: (0, F.DP)(),
                }),
                previewImage: eu.premiumGroup.thumbnail,
                videoUrl: eu.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: K.intl.formatToPlainString(Y.default.LwdrNi, { premiumGroupProductName: (0, F.DP)() }),
                        onClick: b,
                        icon: c.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: K.intl.string(K.t.hvVgAZ),
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("99709"), n.e("3370"), n.e("69595")]).then(
                                    n.bind(n, 526710),
                                );
                                return (t) => (0, a.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: K.intl.string(K.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: K.intl.string(K.t.Ij3Zmv),
                description: K.intl.string(K.t.UsOUxY),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                previewImage: eu.showYourStyle.thumbnail,
                onClick: i ? r : s,
                videoUrl: eu.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: K.intl.string(K.t.Wme3nX),
                description: K.intl.string(K.t["/aAIqV"]),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                previewImage: eu.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = n(766075);
                        e(S.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eu.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: K.intl.string(K.t.zY5PPb),
                description: K.intl.string(K.t.R5Xag2),
                previewImage: eu.emojis.thumbnail,
                videoUrl: eu.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: K.intl.string(K.t["6b3ydG"]),
                description: K.intl.string(K.t["Y+IJyg"]),
                previewImage: eu.noLimits.thumbnail,
                videoUrl: eu.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: el ? K.intl.string(K.t.E4U4SS) : K.intl.string(H.default.OlObRa),
                description: el ? K.intl.string(K.t["B4uSy/"]) : K.intl.string(H.default["8Gl8gP"]),
                descriptionCta: el ? K.intl.string(K.t.RzWDqY) : K.intl.string(H.default.HINTfJ),
                previewImage: eu.threePPromotions.thumbnail,
                videoUrl: eu.threePPromotions.assetUrl,
                onClick: () =>
                    (0, R.u)({
                        analyticsLocations: t,
                        partnerIds: [v.KS, v.Cs, v.XY, ...(el ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: el ? void 0 : K.intl.string(K.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: el ? eo : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: K.intl.string(W.default["ZFJ/NU"]),
                description: K.intl.string(W.default.wMi514),
                descriptionCta: K.intl.string(K.t.hvVgAZ),
                onClick: () => {
                    window.open(N.A.getArticleURL(V.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eu.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eu.orbRewards.assetUrl,
                badgeText: el ? void 0 : K.intl.string(K.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: K.intl.string(K.t.Csf5Ol),
                description: K.intl.format(K.t["G5k+lZ"], { bonusOrbMultiplier: es }),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                onClick: () => (0, A.navigateToQuestHome)({ fromContent: l.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eu.orbMultiplier.thumbnail,
                videoUrl: eu.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: K.intl.string(K.t.Tzhw6e),
                description: K.intl.format(K.t.djzJx6, { bonusOrbMultiplier: es }),
                descriptionCta: K.intl.string(K.t.RzWDqY),
                onClick: () => (0, A.navigateToQuestHome)({ fromContent: l.u.NITRO_HOME_PERK_CARD }),
                badgeText: el ? void 0 : K.intl.string(K.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eu.combinedOrbs.thumbnail,
                videoUrl: eu.combinedOrbs.assetUrl,
            },
        };
    function ed(e) {
        let t = ec[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let e_ = (function (e) {
            let t = (0, k.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: n } = x.Ay.useConfig({ location: "bento_box" }),
                i = (0, U.O9)(),
                r = (0, P.DK)(M.W.NITRO, "useBentoBoxes"),
                s = r && e;
            return [
                ...(t || n ? [ea.THREE_P_PROMOTIONS] : []),
                ...(s ? [ea.COMBINED_ORBS] : []),
                ...(!s && e ? [ea.ORB_MULTIPLIER] : []),
                ...(i ? [ea.PREMIUM_GROUP] : []),
                ...(!s && r ? [ea.ORB_REWARDS] : []),
                ea.DISPLAY_NAME_STYLES,
                ea.CUSTOM_THEMES,
                ea.SERVER_PROFILES,
                ea.REFERRAL_PROGRAM,
            ];
        })(er),
        eh = [],
        ef = e ? null : e_[0],
        ep = e_.slice(+!e, e ? 2 : 3);
    return (
        null != ef && eh.push([ed(ef)]),
        1 === ep.length ? eh.push([ed(ep[0])]) : 2 === ep.length && eh.push([ed(ep[0]), ed(ep[1])]),
        {
            whatsNewBoxes: [...eh],
            bestOfBoxes: [[ed("showYourStyle")], [ed("yourSpace")], [ed("emojis"), ed("noLimits")]],
        }
    );
};
