a.d(t, { A0: () => er, NI: () => es, Ay: () => en, Tb: () => ea }), a(321073);
var r,
    s,
    n,
    i = a(627968),
    o = a(64700),
    l = a(192308),
    c = a(403581),
    d = a(793574),
    p = a(688810),
    u = a(793943),
    b = a(715547),
    m = a(259065),
    f = a(532794),
    h = a(206835),
    g = a(245853),
    R = a(122720);
let v = o.forwardRef((e, t) => {
    let { className: a } = e,
        r = o.useRef(null);
    return (
        o.useImperativeHandle(t, () => ({
            play: () => {
                r.current?.play();
            },
            pause: () => r.current?.pause(),
        })),
        (0, i.jsx)("div", {
            className: a,
            style: { width: "100%", height: "100%" },
            children: (0, i.jsx)(R.E, {
                ref: r,
                autoplay: !1,
                artboard: "Torbs_Multiply",
                stateMachine: "SM_Torbs_Multiply",
                fit: "contain",
                style: { width: "100%", height: "100%" },
            }),
        })
    );
});
v.displayName = "QuestOrbsMultiplierBentoBoxAsset";
var E = a(976860),
    M = a(591179),
    x = a(462463),
    A = a(780964),
    P = a(858897),
    S = a(676279),
    y = a(975571),
    U = a(852218),
    _ = a(382259),
    T = a(503698),
    O = a.n(T),
    I = a(907581),
    w = a(533873);
let C = o.forwardRef((e, t) => {
    let { className: a } = e,
        r = o.useRef(null);
    return (
        o.useImperativeHandle(t, () => ({
            play: () => {
                r.current?.play();
            },
            pause: () => r.current?.pause(),
        })),
        (0, i.jsx)("div", {
            className: O()(a, w.k),
            children: (0, i.jsx)(I.C, { ref: r, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
C.displayName = "PremiumRewardsBentoBoxAsset";
var N = a(636592),
    j = a(26508),
    L = a(398523),
    B = a(881373),
    k = a(612669),
    V = a(788868),
    Y = a(88001),
    G = a(652215),
    D = a(654487),
    H = a(355097),
    W = a(962995),
    F = a(466919),
    X = a(490285),
    z = a(985018),
    Q = a(693227),
    K = a(864386),
    Z = a(817577);
let J = "/assets/b8d93bc2ac73e6a7.svg";
var $ = a(576765),
    q = a(88433),
    ee = a(909340),
    et = a(455482),
    ea = (((r = {}).CONTAINED = "contained"), (r.OVERLAY = "overlay"), r),
    er = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s),
    es =
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
let en = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, p.Ay)(d.A.PREMIUM_MARKETING_BENTO_BOX),
        r = (0, M.X)("useBentoBoxes"),
        s = (0, x.A)({ analyticsLocations: t }),
        n = (0, h.A)({ scrollPosition: H._F.TRY_IT_OUT, analyticsLocations: t }),
        R = (0, o.useCallback)(() => {
            (0, P.openUserSettings)(A.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, m.L)({ analyticsLocations: t }),
            );
        }, [t]),
        T = (0, o.useCallback)(() => {
            (0, f.A)({ subscriptionTier: V.pe.TIER_2, initialPlanId: V.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        O = (0, S.TM)(),
        I = y.A.getArticleURL(G.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: w, multiplier: ea } = (0, g.Dl)(D.rE.NITRO_HOME_MARKETING),
        er = o.useRef(null),
        en = o.useRef(null),
        ei = (0, b.l)("bento_box"),
        eo = {
            premiumGroup: { thumbnail: Z, assetUrl: Z },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: O
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: O
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: O
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: O
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/72d36b061ab77178d2666828a1b85ce56b72c724a46f877a60e2e9b4f1c7c013.png",
                assetUrl: O
                    ? "https://cdn.discordapp.com/assets/content/3cd0c013f736727621e01a0769c6e507a706c3825b6ccbc213097f412578564f.mov"
                    : "https://cdn.discordapp.com/assets/content/94f80d726eb81f1fa904679024772933e61e41f96767013f107be590b6ede322.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/72051417853b20246c99455734826d61973176255ac6a6059209a8a55c38a173.png",
                assetUrl: O
                    ? "https://cdn.discordapp.com/assets/content/8e84ec148cf712dad3b412b4b89732d10baeffa5000e5aab53fb33a8adad6cb0.mov"
                    : "https://cdn.discordapp.com/assets/content/b4934724ca9e27546d1e203c71d245ff00b16047d38d8ae06647d8c4055ef122.webm",
            },
            emojis: {
                thumbnail: $.A,
                assetUrl: O
                    ? "https://cdn.discordapp.com/assets/content/1482b28b18f9a99c93cf0177dbffc140e55622e5e87ec7f10c3f9ed518331fda.mov"
                    : q.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/d4b073efb93f88764e1e34591b7d39e3d66828127dae2546aefc799c19a5ed95.png",
                assetUrl: O
                    ? "https://cdn.discordapp.com/assets/content/277a0bd0bfc586489265ba2c8de4f5c8aebc9bcb027c93e46332ba5f7ecf80d2.mov"
                    : "https://cdn.discordapp.com/assets/content/13c6539235b8e84c4a85128b3a500c2af70809d3f64bba1a861b25b415f6c1ca.webm",
            },
            orbRewards: { thumbnail: et.A, assetUrl: ee.A },
            orbMultiplier: { thumbnail: (0, i.jsx)(v, { ref: er }) },
            combinedOrbs: { thumbnail: (0, i.jsx)(v, { ref: er }) },
            threePPromotions: { thumbnail: ei ? (0, i.jsx)(C, { ref: en }) : J, assetUrl: ei ? void 0 : J },
        },
        el = {
            serverProfiles: {
                name: "serverProfiles",
                title: z.intl.string(z.t.I9TYMg),
                description: z.intl.string(z.t.HMSHeH),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                onClick: r ? s : n,
                previewImage: eo.serverProfiles.thumbnail,
                videoUrl: eo.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: z.intl.string(z.t.tPY4o9),
                description: z.intl.format(z.t.jRPQUH, { learnMoreLink: I }),
                previewImage: eo.referralProgram.thumbnail,
                videoUrl: eo.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: z.intl.string(Q.default.XokIHM),
                description: z.intl.string(Q.default["7esQMC"]),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eo.customThemes.thumbnail,
                onClick: () => {
                    (0, u.nf)(u.HP.CUSTOM_THEME);
                },
                videoUrl: eo.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: z.intl.string(K.default.ABtBDQ),
                description: z.intl.string(K.default.MFNXZh),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eo.displayNameStyles.thumbnail,
                onClick: r ? s : R,
                badgeText: z.intl.string(z.t.y2b7CA).toLocaleUpperCase(),
                videoUrl: eo.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: z.intl.formatToPlainString(F.default.VFEDDB, { premiumGroupProductName: (0, Y.DP)() }),
                description: z.intl.formatToPlainString(F.default.WudmR3, {
                    totalSeats: Y.aw,
                    premiumGroupProductName: (0, Y.DP)(),
                }),
                previewImage: eo.premiumGroup.thumbnail,
                videoUrl: eo.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: z.intl.formatToPlainString(F.default.LwdrNi, { premiumGroupProductName: (0, Y.DP)() }),
                        onClick: T,
                        icon: c.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: z.intl.string(z.t.hvVgAZ),
                        onClick: () => {
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await a.e("69595").then(a.bind(a, 526710));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: z.intl.string(z.t.Ij3Zmv),
                description: z.intl.string(z.t.UsOUxY),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eo.showYourStyle.thumbnail,
                onClick: r ? s : n,
                videoUrl: eo.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: z.intl.string(z.t.Wme3nX),
                description: z.intl.string(z.t["/aAIqV"]),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eo.yourSpace.thumbnail,
                onClick: () => {
                    {
                        let { openUserSettings: e } = a(858897);
                        e(A.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eo.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: z.intl.string(z.t.zY5PPb),
                description: z.intl.string(z.t.R5Xag2),
                previewImage: eo.emojis.thumbnail,
                videoUrl: eo.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: z.intl.string(z.t["6b3ydG"]),
                description: z.intl.string(z.t["Y+IJyg"]),
                previewImage: eo.noLimits.thumbnail,
                videoUrl: eo.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: ei ? z.intl.string(z.t.E4U4SS) : z.intl.string(W.default.OlObRa),
                description: ei ? z.intl.string(z.t["B4uSy/"]) : z.intl.string(W.default["8Gl8gP"]),
                descriptionCta: ei ? z.intl.string(z.t.RzWDqY) : z.intl.string(W.default.HINTfJ),
                previewImage: eo.threePPromotions.thumbnail,
                videoUrl: eo.threePPromotions.assetUrl,
                onClick: () => (0, _.u)({ analyticsLocations: t, partnerIds: [U.KS, U.Cs, U.XY] }),
                badgeText: z.intl.string(z.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ei ? en : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: z.intl.string(X.default["ZFJ/NU"]),
                description: z.intl.string(X.default.wMi514),
                descriptionCta: z.intl.string(z.t.hvVgAZ),
                onClick: () => {
                    window.open(y.A.getArticleURL(G.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eo.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eo.orbRewards.assetUrl,
                badgeText: z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: z.intl.string(z.t.F2MShO),
                description: z.intl.format(z.t["G5k+lZ"], { bonusOrbMultiplier: ea }),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                onClick: () => (0, E.pX)(G.BVt.QUEST_HOME),
                badgeText: z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eo.orbMultiplier.thumbnail,
                mediaRef: er,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: z.intl.string(z.t.Tzhw6e),
                description: z.intl.format(z.t.djzJx6, { bonusOrbMultiplier: ea }),
                descriptionCta: z.intl.string(z.t.RzWDqY),
                onClick: () => (0, E.pX)(G.BVt.QUEST_HOME),
                badgeText: z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eo.combinedOrbs.thumbnail,
                mediaRef: er,
            },
        },
        ec = (e) => {
            let t = el[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        },
        ed = (function (e) {
            let t = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: a } = L.Ay.useConfig({ location: "bento_box" }),
                r = (0, k.O9)(),
                s = (0, j.DK)(N.W.NITRO, "useBentoBoxes"),
                n = s && e;
            return [
                ...(t || a ? [es.THREE_P_PROMOTIONS] : []),
                ...(n ? [es.COMBINED_ORBS] : []),
                ...(!n && e ? [es.ORB_MULTIPLIER] : []),
                ...(r ? [es.PREMIUM_GROUP] : []),
                ...(!n && s ? [es.ORB_REWARDS] : []),
                es.DISPLAY_NAME_STYLES,
                es.CUSTOM_THEMES,
                es.SERVER_PROFILES,
                es.REFERRAL_PROGRAM,
            ];
        })(w),
        ep = [],
        eu = e ? null : ed[0],
        eb = ed.slice(+!e, e ? 2 : 3);
    return (
        null != eu && ep.push([ec(eu)]),
        1 === eb.length ? ep.push([ec(eb[0])]) : 2 === eb.length && ep.push([ec(eb[0]), ec(eb[1])]),
        {
            whatsNewBoxes: [...ep],
            bestOfBoxes: [[ec("showYourStyle")], [ec("yourSpace")], [ec("emojis"), ec("noLimits")]],
        }
    );
};
