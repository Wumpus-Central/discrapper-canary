"use strict";
n.d(t, { A0: () => eo, NI: () => el, Ay: () => eu, Tb: () => ea }), n(321073);
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
    E = n(259065),
    p = n(532794),
    m = n(206835),
    g = n(192444),
    A = n(216934),
    I = n(591179),
    T = n(462463),
    S = n(780964),
    N = n(766075),
    C = n(676279),
    y = n(975571),
    O = n(769623),
    R = n(707922),
    v = n(852218),
    b = n(382259),
    L = n(503698),
    D = n.n(L),
    w = n(907581),
    P = n(533873);
let M = o.forwardRef((e, t) => {
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
            className: D()(n, P.k),
            children: (0, a.jsx)(w.C, { ref: i, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
M.displayName = "PremiumRewardsBentoBoxAsset";
var x = n(440005),
    U = n(26508),
    k = n(398523),
    G = n(881373),
    V = n(862990),
    F = n(202541),
    B = n(88001),
    H = n(652215),
    j = n(190107),
    W = n(355097),
    Y = n(962995),
    K = n(466919),
    $ = n(490285),
    z = n(375708),
    q = n(693227),
    Z = n(864386),
    X = n(817577);
let Q = "/assets/035ad0fba4997f3f.svg",
    J =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    ee =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    et =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var en = n(576765),
    ei = n(88433),
    er = n(909340),
    es = n(455482),
    ea = (((i = {}).CONTAINED = "contained"), (i.OVERLAY = "overlay"), i),
    eo = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    el =
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
let eu = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, _.Ay)(d.A.PREMIUM_MARKETING_BENTO_BOX),
        i = (0, I.X)("useBentoBoxes"),
        r = (0, T.A)({ analyticsLocations: t }),
        s = (0, m.A)({ scrollPosition: W._F.TRY_IT_OUT, analyticsLocations: t }),
        L = (0, o.useCallback)(() => {
            (0, N.openUserSettings)(S.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, E.L)({ analyticsLocations: t }),
            );
        }, [t]),
        D = (0, o.useCallback)(() => {
            (0, p.A)({ subscriptionTier: F.pe.TIER_2, initialPlanId: F.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        w = (0, C.TM)(),
        P = y.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ea, multiplier: eo } = (0, g.lk)(j.rE.NITRO_HOME_MARKETING),
        eu = o.useRef(null),
        ec = (0, f.l)("bento_box"),
        ed = {
            premiumGroup: { thumbnail: X, assetUrl: X },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: w
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: w
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: w
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: w
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: w
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: w
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: en.A,
                assetUrl: w
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : ei.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: w
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: es.A, assetUrl: er.A },
            orbMultiplier: { thumbnail: et, assetUrl: w ? J : ee },
            combinedOrbs: { thumbnail: et, assetUrl: w ? J : ee },
            threePPromotions: { thumbnail: ec ? (0, a.jsx)(M, { ref: eu }) : Q, assetUrl: ec ? void 0 : Q },
        },
        e_ = (0, O.Y)({ location: "bento_box" }),
        eh = (0, R.A)(!e_),
        ef = {
            serverProfiles: {
                name: "serverProfiles",
                title: z.intl.string(z.t.I9TYMg),
                description: z.intl.string(z.t.HMSHeH),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                onClick: i ? r : s,
                previewImage: ed.serverProfiles.thumbnail,
                videoUrl: ed.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: z.intl.string(z.t.tPY4o9),
                description: z.intl.format(z.t.jRPQUH, { learnMoreLink: P }),
                previewImage: ed.referralProgram.thumbnail,
                videoUrl: ed.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: z.intl.string(q.default.XokIHM),
                description: z.intl.string(q.default["7esQMC"]),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: ed.customThemes.thumbnail,
                onClick: () => {
                    (0, h.nf)(h.HP.CUSTOM_THEME);
                },
                videoUrl: ed.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: z.intl.string(Z.default.ABtBDQ),
                description: z.intl.string(Z.default.MFNXZh),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: ed.displayNameStyles.thumbnail,
                onClick: i ? r : L,
                videoUrl: ed.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: z.intl.formatToPlainString(K.default.VFEDDB, { premiumGroupProductName: (0, B.DP)() }),
                description:
                    e_ && null != eh
                        ? z.intl.formatToPlainString(K.default.vmvhN5, { pricePerPerson: eh, totalMember: B.LM })
                        : z.intl.formatToPlainString(K.default.WudmR3, {
                              totalSeats: B.aw,
                              premiumGroupProductName: (0, B.DP)(),
                          }),
                previewImage: ed.premiumGroup.thumbnail,
                videoUrl: ed.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: z.intl.formatToPlainString(K.default.LwdrNi, { premiumGroupProductName: (0, B.DP)() }),
                        onClick: D,
                        icon: c.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: z.intl.string(z.t.hvVgAZ),
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
                badgeText: z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: z.intl.string(z.t.Ij3Zmv),
                description: z.intl.string(z.t.UsOUxY),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: ed.showYourStyle.thumbnail,
                onClick: i ? r : s,
                videoUrl: ed.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: z.intl.string(z.t.Wme3nX),
                description: z.intl.string(z.t["/aAIqV"]),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: ed.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = n(766075);
                        e(S.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: ed.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: z.intl.string(z.t.zY5PPb),
                description: z.intl.string(z.t.R5Xag2),
                previewImage: ed.emojis.thumbnail,
                videoUrl: ed.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: z.intl.string(z.t["6b3ydG"]),
                description: z.intl.string(z.t["Y+IJyg"]),
                previewImage: ed.noLimits.thumbnail,
                videoUrl: ed.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: ec ? z.intl.string(z.t.E4U4SS) : z.intl.string(Y.default.OlObRa),
                description: ec ? z.intl.string(z.t["B4uSy/"]) : z.intl.string(Y.default["8Gl8gP"]),
                descriptionCta: ec ? z.intl.string(z.t.RzWDqY) : z.intl.string(Y.default.HINTfJ),
                previewImage: ed.threePPromotions.thumbnail,
                videoUrl: ed.threePPromotions.assetUrl,
                onClick: () =>
                    (0, b.u)({
                        analyticsLocations: t,
                        partnerIds: [v.KS, v.Cs, v.XY, ...(ec ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: ec ? void 0 : z.intl.string(z.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ec ? eu : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: z.intl.string($.default["ZFJ/NU"]),
                description: z.intl.string($.default.wMi514),
                descriptionCta: z.intl.string(z.t.hvVgAZ),
                onClick: () => {
                    window.open(y.A.getArticleURL(H.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: ed.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: ed.orbRewards.assetUrl,
                badgeText: ec ? void 0 : z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: z.intl.string(z.t.Csf5Ol),
                description: z.intl.format(z.t["G5k+lZ"], { bonusOrbMultiplier: eo }),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                onClick: () => (0, A.m)({ fromContent: l.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: ed.orbMultiplier.thumbnail,
                videoUrl: ed.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: z.intl.string(z.t.Tzhw6e),
                description: z.intl.format(z.t.djzJx6, { bonusOrbMultiplier: eo }),
                descriptionCta: z.intl.string(z.t.RzWDqY),
                onClick: () => (0, A.m)({ fromContent: l.u.NITRO_HOME_PERK_CARD }),
                badgeText: ec ? void 0 : z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: ed.combinedOrbs.thumbnail,
                videoUrl: ed.combinedOrbs.assetUrl,
            },
        };
    function eE(e) {
        let t = ef[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let ep = (function (e) {
            let t = (0, G.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: n } = k.Ay.useConfig({ location: "bento_box" }),
                i = (0, V.O9)(),
                r = (0, U.DK)(x.W.NITRO, "useBentoBoxes"),
                s = r && e;
            return [
                ...(t || n ? [el.THREE_P_PROMOTIONS] : []),
                ...(s ? [el.COMBINED_ORBS] : []),
                ...(!s && e ? [el.ORB_MULTIPLIER] : []),
                ...(i ? [el.PREMIUM_GROUP] : []),
                ...(!s && r ? [el.ORB_REWARDS] : []),
                el.DISPLAY_NAME_STYLES,
                el.CUSTOM_THEMES,
                el.SERVER_PROFILES,
                el.REFERRAL_PROGRAM,
            ];
        })(ea),
        em = [],
        eg = e ? null : ep[0],
        eA = ep.slice(+!e, e ? 2 : 3);
    return (
        null != eg && em.push([eE(eg)]),
        1 === eA.length ? em.push([eE(eA[0])]) : 2 === eA.length && em.push([eE(eA[0]), eE(eA[1])]),
        {
            whatsNewBoxes: [...em],
            bestOfBoxes: [[eE("showYourStyle")], [eE("yourSpace")], [eE("emojis"), eE("noLimits")]],
        }
    );
};
