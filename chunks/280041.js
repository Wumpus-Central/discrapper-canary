"use strict";
n.d(t, { A0: () => el, NI: () => eo, Ay: () => ed, Tb: () => es }), n(321073);
var i,
    r,
    a,
    s = n(627968),
    l = n(64700),
    o = n(696292),
    d = n(192308),
    c = n(403581),
    u = n(793574),
    _ = n(688810),
    E = n(793943),
    A = n(31502),
    h = n(259065),
    I = n(532794),
    f = n(206835),
    p = n(192444),
    T = n(216934),
    m = n(591179),
    g = n(462463),
    S = n(780964),
    N = n(766075),
    C = n(676279),
    R = n(975571),
    O = n(769623),
    L = n(707922),
    D = n(852218),
    y = n(161319),
    v = n(503698),
    b = n.n(v),
    M = n(907581),
    P = n(533873);
let U = l.forwardRef((e, t) => {
    let { className: n } = e,
        i = l.useRef(null);
    return (
        l.useImperativeHandle(t, () => ({
            play: () => {
                i.current?.play();
            },
            pause: () => i.current?.pause(),
        })),
        (0, s.jsx)("div", {
            className: b()(n, P.k),
            children: (0, s.jsx)(M.C, { ref: i, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
U.displayName = "PremiumRewardsBentoBoxAsset";
var w = n(440005),
    G = n(26508),
    x = n(398523),
    k = n(881373),
    F = n(862990),
    V = n(202541),
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
    ea = n(455482),
    es = (((i = {}).CONTAINED = "contained"), (i.OVERLAY = "overlay"), i),
    el = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    eo =
        (((a = {}).REFERRAL_PROGRAM = "referralProgram"),
        (a.SERVER_PROFILES = "serverProfiles"),
        (a.SHOW_YOUR_STYLE = "showYourStyle"),
        (a.YOUR_SPACE = "yourSpace"),
        (a.EMOJIS = "emojis"),
        (a.NO_LIMITS = "noLimits"),
        (a.CUSTOM_THEMES = "customThemes"),
        (a.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (a.PREMIUM_GROUP = "premiumGroup"),
        (a.THREE_P_PROMOTIONS = "threePPromotions"),
        (a.ORB_REWARDS = "orbRewards"),
        (a.ORB_MULTIPLIER = "orbMultiplier"),
        (a.COMBINED_ORBS = "combinedOrbs"),
        a);
let ed = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, _.Ay)(u.A.PREMIUM_MARKETING_BENTO_BOX),
        i = (0, m.X)("useBentoBoxes"),
        r = (0, g.A)({ analyticsLocations: t }),
        a = (0, f.A)({ scrollPosition: W._F.TRY_IT_OUT, analyticsLocations: t }),
        v = (0, l.useCallback)(() => {
            (0, N.openUserSettings)(S.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, h.L)({ analyticsLocations: t }),
            );
        }, [t]),
        b = (0, l.useCallback)(() => {
            (0, I.A)({ subscriptionTier: V.pe.TIER_2, initialPlanId: V.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        M = (0, C.TM)(),
        P = R.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: es, multiplier: el } = (0, p.lk)(j.rE.NITRO_HOME_MARKETING),
        ed = l.useRef(null),
        ec = (0, A.l)("bento_box"),
        eu = {
            premiumGroup: { thumbnail: X, assetUrl: X },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: en.A,
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : ei.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: ea.A, assetUrl: er.A },
            orbMultiplier: { thumbnail: et, assetUrl: M ? J : ee },
            combinedOrbs: { thumbnail: et, assetUrl: M ? J : ee },
            threePPromotions: { thumbnail: ec ? (0, s.jsx)(U, { ref: ed }) : Q, assetUrl: ec ? void 0 : Q },
        },
        e_ = (0, O.Y)({ location: "bento_box" }),
        eE = (0, L.A)(!e_),
        eA = {
            serverProfiles: {
                name: "serverProfiles",
                title: z.intl.string(z.t.I9TYMg),
                description: z.intl.string(z.t.HMSHeH),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                onClick: i ? r : a,
                previewImage: eu.serverProfiles.thumbnail,
                videoUrl: eu.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: z.intl.string(z.t.tPY4o9),
                description: z.intl.format(z.t.jRPQUH, { learnMoreLink: P }),
                previewImage: eu.referralProgram.thumbnail,
                videoUrl: eu.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: z.intl.string(q.default.XokIHM),
                description: z.intl.string(q.default["7esQMC"]),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eu.customThemes.thumbnail,
                onClick: () => {
                    (0, E.nf)(E.HP.CUSTOM_THEME);
                },
                videoUrl: eu.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: z.intl.string(Z.default.ABtBDQ),
                description: z.intl.string(Z.default.MFNXZh),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eu.displayNameStyles.thumbnail,
                onClick: i ? r : v,
                videoUrl: eu.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: z.intl.formatToPlainString(K.default.VFEDDB, { premiumGroupProductName: (0, B.DP)() }),
                description:
                    e_ && null != eE
                        ? z.intl.formatToPlainString(K.default.vmvhN5, { pricePerPerson: eE, totalMember: B.LM })
                        : z.intl.formatToPlainString(K.default.WudmR3, {
                              totalSeats: B.aw,
                              premiumGroupProductName: (0, B.DP)(),
                          }),
                previewImage: eu.premiumGroup.thumbnail,
                videoUrl: eu.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: z.intl.formatToPlainString(K.default.LwdrNi, { premiumGroupProductName: (0, B.DP)() }),
                        onClick: b,
                        icon: c.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: z.intl.string(z.t.hvVgAZ),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("99709"), n.e("3370"), n.e("69595")]).then(
                                    n.bind(n, 526710),
                                );
                                return (t) => (0, s.jsx)(e, { ...t });
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
                previewImage: eu.showYourStyle.thumbnail,
                onClick: i ? r : a,
                videoUrl: eu.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: z.intl.string(z.t.Wme3nX),
                description: z.intl.string(z.t["/aAIqV"]),
                descriptionCta: z.intl.string(z.t.jVcuVY),
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
                title: z.intl.string(z.t.zY5PPb),
                description: z.intl.string(z.t.R5Xag2),
                previewImage: eu.emojis.thumbnail,
                videoUrl: eu.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: z.intl.string(z.t["6b3ydG"]),
                description: z.intl.string(z.t["Y+IJyg"]),
                previewImage: eu.noLimits.thumbnail,
                videoUrl: eu.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: ec ? z.intl.string(z.t.E4U4SS) : z.intl.string(Y.default.OlObRa),
                description: ec ? z.intl.string(z.t["B4uSy/"]) : z.intl.string(Y.default["8Gl8gP"]),
                descriptionCta: ec ? z.intl.string(z.t.RzWDqY) : z.intl.string(Y.default.HINTfJ),
                previewImage: eu.threePPromotions.thumbnail,
                videoUrl: eu.threePPromotions.assetUrl,
                onClick: () =>
                    (0, y.u)({
                        analyticsLocations: t,
                        partnerIds: [D.KS, D.Cs, D.XY, ...(ec ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: ec ? void 0 : z.intl.string(z.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ec ? ed : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: z.intl.string($.default["ZFJ/NU"]),
                description: z.intl.string($.default.wMi514),
                descriptionCta: z.intl.string(z.t.hvVgAZ),
                onClick: () => {
                    window.open(R.A.getArticleURL(H.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eu.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eu.orbRewards.assetUrl,
                badgeText: ec ? void 0 : z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: z.intl.string(z.t.Csf5Ol),
                description: z.intl.format(z.t["G5k+lZ"], { bonusOrbMultiplier: el }),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                onClick: () => (0, T.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eu.orbMultiplier.thumbnail,
                videoUrl: eu.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: z.intl.string(z.t.Tzhw6e),
                description: z.intl.format(z.t.djzJx6, { bonusOrbMultiplier: el }),
                descriptionCta: z.intl.string(z.t.RzWDqY),
                onClick: () => (0, T.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeText: ec ? void 0 : z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eu.combinedOrbs.thumbnail,
                videoUrl: eu.combinedOrbs.assetUrl,
            },
        };
    function eh(e) {
        let t = eA[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eI = (function (e) {
            let t = (0, k.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: n } = x.Ay.useConfig({ location: "bento_box" }),
                i = (0, F.O9)(),
                r = (0, G.DK)(w.W.NITRO, "useBentoBoxes"),
                a = r && e;
            return [
                ...(t || n ? [eo.THREE_P_PROMOTIONS] : []),
                ...(a ? [eo.COMBINED_ORBS] : []),
                ...(!a && e ? [eo.ORB_MULTIPLIER] : []),
                ...(i ? [eo.PREMIUM_GROUP] : []),
                ...(!a && r ? [eo.ORB_REWARDS] : []),
                eo.DISPLAY_NAME_STYLES,
                eo.CUSTOM_THEMES,
                eo.SERVER_PROFILES,
                eo.REFERRAL_PROGRAM,
            ];
        })(es),
        ef = [],
        ep = e ? null : eI[0],
        eT = eI.slice(+!e, e ? 2 : 3);
    return (
        null != ep && ef.push([eh(ep)]),
        1 === eT.length ? ef.push([eh(eT[0])]) : 2 === eT.length && ef.push([eh(eT[0]), eh(eT[1])]),
        {
            whatsNewBoxes: [...ef],
            bestOfBoxes: [[eh("showYourStyle")], [eh("yourSpace")], [eh("emojis"), eh("noLimits")]],
        }
    );
};
