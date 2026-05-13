a.d(t, { A0: () => er, NI: () => en, Ay: () => ei, Tb: () => es }), a(321073);
var s,
    r,
    n,
    i = a(627968),
    o = a(64700),
    d = a(192308),
    l = a(403581),
    c = a(793574),
    p = a(688810),
    m = a(793943),
    b = a(31502),
    u = a(259065),
    f = a(532794),
    h = a(206835),
    g = a(192444),
    R = a(976860),
    v = a(591179),
    E = a(462463),
    U = a(780964),
    x = a(766075),
    A = a(676279),
    M = a(975571),
    P = a(852218),
    S = a(382259),
    O = a(503698),
    _ = a.n(O),
    y = a(907581),
    T = a(533873);
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
            className: _()(a, T.k),
            children: (0, i.jsx)(y.C, { ref: s, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
I.displayName = "PremiumRewardsBentoBoxAsset";
var C = a(636592),
    w = a(26508),
    N = a(398523),
    j = a(881373),
    L = a(39423),
    B = a(788868),
    k = a(88001),
    V = a(652215),
    Y = a(190107),
    G = a(355097),
    D = a(962995),
    H = a(466919),
    F = a(490285),
    W = a(375708),
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
        { analyticsLocations: t } = (0, p.Ay)(c.A.PREMIUM_MARKETING_BENTO_BOX),
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
        y = (0, A.TM)(),
        T = M.A.getArticleURL(V.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: es, multiplier: er } = (0, g.lk)(Y.rE.NITRO_HOME_MARKETING),
        ei = o.useRef(null),
        eo = (0, b.l)("bento_box"),
        ed = {
            premiumGroup: { thumbnail: K, assetUrl: K },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: q.A,
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : ee.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: ea.A, assetUrl: et.A },
            orbMultiplier: { thumbnail: $, assetUrl: y ? Z : J },
            combinedOrbs: { thumbnail: $, assetUrl: y ? Z : J },
            threePPromotions: { thumbnail: eo ? (0, i.jsx)(I, { ref: ei }) : Q, assetUrl: eo ? void 0 : Q },
        },
        el = {
            serverProfiles: {
                name: "serverProfiles",
                title: W.intl.string(W.t.I9TYMg),
                description: W.intl.string(W.t.HMSHeH),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                onClick: s ? r : n,
                previewImage: ed.serverProfiles.thumbnail,
                videoUrl: ed.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: W.intl.string(W.t.tPY4o9),
                description: W.intl.format(W.t.jRPQUH, { learnMoreLink: T }),
                previewImage: ed.referralProgram.thumbnail,
                videoUrl: ed.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: W.intl.string(X.default.XokIHM),
                description: W.intl.string(X.default["7esQMC"]),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                previewImage: ed.customThemes.thumbnail,
                onClick: () => {
                    (0, m.nf)(m.HP.CUSTOM_THEME);
                },
                videoUrl: ed.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: W.intl.string(z.default.ABtBDQ),
                description: W.intl.string(z.default.MFNXZh),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                previewImage: ed.displayNameStyles.thumbnail,
                onClick: s ? r : O,
                videoUrl: ed.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: W.intl.formatToPlainString(H.default.VFEDDB, { premiumGroupProductName: (0, k.DP)() }),
                description: W.intl.formatToPlainString(H.default.WudmR3, {
                    totalSeats: k.aw,
                    premiumGroupProductName: (0, k.DP)(),
                }),
                previewImage: ed.premiumGroup.thumbnail,
                videoUrl: ed.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: W.intl.formatToPlainString(H.default.LwdrNi, { premiumGroupProductName: (0, k.DP)() }),
                        onClick: _,
                        icon: l.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: W.intl.string(W.t.hvVgAZ),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([a.e("99709"), a.e("3370"), a.e("69595")]).then(
                                    a.bind(a, 526710),
                                );
                                return (t) => (0, i.jsx)(e, { ...t });
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
                previewImage: ed.showYourStyle.thumbnail,
                onClick: s ? r : n,
                videoUrl: ed.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: W.intl.string(W.t.Wme3nX),
                description: W.intl.string(W.t["/aAIqV"]),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                previewImage: ed.yourSpace.thumbnail,
                onClick: () => {
                    {
                        let { openUserSettings: e } = a(766075);
                        e(U.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: ed.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: W.intl.string(W.t.zY5PPb),
                description: W.intl.string(W.t.R5Xag2),
                previewImage: ed.emojis.thumbnail,
                videoUrl: ed.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: W.intl.string(W.t["6b3ydG"]),
                description: W.intl.string(W.t["Y+IJyg"]),
                previewImage: ed.noLimits.thumbnail,
                videoUrl: ed.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: eo ? W.intl.string(W.t.E4U4SS) : W.intl.string(D.default.OlObRa),
                description: eo ? W.intl.string(W.t["B4uSy/"]) : W.intl.string(D.default["8Gl8gP"]),
                descriptionCta: eo ? W.intl.string(W.t.RzWDqY) : W.intl.string(D.default.HINTfJ),
                previewImage: ed.threePPromotions.thumbnail,
                videoUrl: ed.threePPromotions.assetUrl,
                onClick: () => (0, S.u)({ analyticsLocations: t, partnerIds: [P.KS, P.Cs, P.XY] }),
                badgeText: eo ? void 0 : W.intl.string(W.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eo ? ei : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: W.intl.string(F.default["ZFJ/NU"]),
                description: W.intl.string(F.default.wMi514),
                descriptionCta: W.intl.string(W.t.hvVgAZ),
                onClick: () => {
                    window.open(M.A.getArticleURL(V.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: ed.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: ed.orbRewards.assetUrl,
                badgeText: eo ? void 0 : W.intl.string(W.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: W.intl.string(W.t.F2MShO),
                description: W.intl.format(W.t["G5k+lZ"], { bonusOrbMultiplier: er }),
                descriptionCta: W.intl.string(W.t.jVcuVY),
                onClick: () => (0, R.pX)(V.BVt.QUEST_HOME),
                badgeVariant: "expressive",
                previewImage: ed.orbMultiplier.thumbnail,
                videoUrl: ed.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: W.intl.string(W.t.Tzhw6e),
                description: W.intl.format(W.t.djzJx6, { bonusOrbMultiplier: er }),
                descriptionCta: W.intl.string(W.t.RzWDqY),
                onClick: () => (0, R.pX)(V.BVt.QUEST_HOME),
                badgeText: eo ? void 0 : W.intl.string(W.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: ed.combinedOrbs.thumbnail,
                videoUrl: ed.combinedOrbs.assetUrl,
            },
        },
        ec = (e) => {
            let t = el[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        },
        ep = (function (e) {
            let t = (0, j.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: a } = N.Ay.useConfig({ location: "bento_box" }),
                s = (0, L.O9)(),
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
        null != eb && em.push([ec(eb)]),
        1 === eu.length ? em.push([ec(eu[0])]) : 2 === eu.length && em.push([ec(eu[0]), ec(eu[1])]),
        {
            whatsNewBoxes: [...em],
            bestOfBoxes: [[ec("showYourStyle")], [ec("yourSpace")], [ec("emojis"), ec("noLimits")]],
        }
    );
};
