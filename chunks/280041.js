i.d(t, { A0: () => el, NI: () => eo, Ay: () => ed, Tb: () => ea }), i(321073);
var r,
    n,
    s,
    a = i(627968),
    l = i(64700),
    o = i(696292),
    d = i(192308),
    c = i(403581),
    u = i(793574),
    m = i(688810),
    p = i(793943),
    f = i(31502),
    b = i(259065),
    h = i(532794),
    C = i(206835),
    g = i(192444),
    R = i(216934),
    _ = i(591179),
    P = i(462463),
    E = i(780964),
    A = i(766075),
    x = i(676279),
    I = i(975571),
    v = i(769623),
    S = i(707922),
    O = i(852218),
    N = i(161319),
    M = i(503698),
    w = i.n(M),
    D = i(907581),
    T = i(184049);
let U = l.forwardRef((e, t) => {
    let { className: i } = e,
        r = l.useRef(null);
    return (
        l.useImperativeHandle(t, () => ({
            play: () => {
                r.current?.play();
            },
            pause: () => r.current?.pause(),
        })),
        (0, a.jsx)("div", {
            className: w()(i, T.k),
            children: (0, a.jsx)(D.C, { ref: r, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
U.displayName = "PremiumRewardsBentoBoxAsset";
var j = i(440005),
    y = i(26508),
    L = i(398523),
    k = i(881373),
    B = i(862990),
    F = i(202541),
    Y = i(88001),
    H = i(652215),
    G = i(190107),
    V = i(355097),
    W = i(778414),
    Z = i(963458),
    K = i(587416),
    X = i(375708),
    z = i(491404),
    J = i(745699),
    $ = i(817577);
let Q = "/assets/035ad0fba4997f3f.svg",
    q =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    ee =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    et =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var ei = i(576765),
    er = i(88433),
    en = i(909340),
    es = i(455482),
    ea = (((r = {}).CONTAINED = "contained"), (r.OVERLAY = "overlay"), r),
    el = (((n = {}).SMALL = "small"), (n.MEDIUM = "medium"), (n.LARGE = "large"), n),
    eo =
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
let ed = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, m.Ay)(u.A.PREMIUM_MARKETING_BENTO_BOX),
        r = (0, _.X)("useBentoBoxes"),
        n = (0, P.A)({ analyticsLocations: t }),
        s = (0, C.A)({ scrollPosition: V._F.TRY_IT_OUT, analyticsLocations: t }),
        M = (0, l.useCallback)(() => {
            (0, A.openUserSettings)(E.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, b.L)({ analyticsLocations: t }),
            );
        }, [t]),
        w = (0, l.useCallback)(() => {
            (0, h.A)({ subscriptionTier: F.pe.TIER_2, initialPlanId: F.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        D = (0, x.TM)(),
        T = I.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ea, multiplier: el } = (0, g.lk)(G.rE.NITRO_HOME_MARKETING),
        ed = l.useRef(null),
        ec = (0, f.l)("bento_box"),
        eu = {
            premiumGroup: { thumbnail: $, assetUrl: $ },
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
                thumbnail: ei.A,
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : er.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: D
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: es.A, assetUrl: en.A },
            orbMultiplier: { thumbnail: et, assetUrl: D ? q : ee },
            combinedOrbs: { thumbnail: et, assetUrl: D ? q : ee },
            threePPromotions: { thumbnail: ec ? (0, a.jsx)(U, { ref: ed }) : Q, assetUrl: ec ? void 0 : Q },
        },
        em = (0, v.Y)({ location: "bento_box" }),
        ep = (0, S.A)(!em),
        ef = {
            serverProfiles: {
                name: "serverProfiles",
                title: X.intl.string(X.t.I9TYMg),
                description: X.intl.string(X.t.HMSHeH),
                descriptionCta: X.intl.string(X.t.jVcuVY),
                onClick: r ? n : s,
                previewImage: eu.serverProfiles.thumbnail,
                videoUrl: eu.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: X.intl.string(X.t.tPY4o9),
                description: X.intl.format(X.t.jRPQUH, { learnMoreLink: T }),
                previewImage: eu.referralProgram.thumbnail,
                videoUrl: eu.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: X.intl.string(z.default.XokIHM),
                description: X.intl.string(z.default["7esQMC"]),
                descriptionCta: X.intl.string(X.t.jVcuVY),
                previewImage: eu.customThemes.thumbnail,
                onClick: () => {
                    (0, p.nf)(p.HP.CUSTOM_THEME);
                },
                videoUrl: eu.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: X.intl.string(J.default.ABtBDQ),
                description: X.intl.string(J.default.MFNXZh),
                descriptionCta: X.intl.string(X.t.jVcuVY),
                previewImage: eu.displayNameStyles.thumbnail,
                onClick: r ? n : M,
                videoUrl: eu.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: X.intl.formatToPlainString(Z.default.VFEDDB, { premiumGroupProductName: (0, Y.DP)() }),
                description:
                    em && null != ep
                        ? X.intl.formatToPlainString(Z.default.vmvhN5, { pricePerPerson: ep, totalMember: Y.LM })
                        : X.intl.formatToPlainString(Z.default.WudmR3, {
                              totalSeats: Y.aw,
                              premiumGroupProductName: (0, Y.DP)(),
                          }),
                previewImage: eu.premiumGroup.thumbnail,
                videoUrl: eu.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: X.intl.formatToPlainString(Z.default.LwdrNi, { premiumGroupProductName: (0, Y.DP)() }),
                        onClick: w,
                        icon: c.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: X.intl.string(X.t.hvVgAZ),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("99709"), i.e("3370"), i.e("69595")]).then(
                                    i.bind(i, 526710),
                                );
                                return (t) => (0, a.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: X.intl.string(X.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: X.intl.string(X.t.Ij3Zmv),
                description: X.intl.string(X.t.UsOUxY),
                descriptionCta: X.intl.string(X.t.jVcuVY),
                previewImage: eu.showYourStyle.thumbnail,
                onClick: r ? n : s,
                videoUrl: eu.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: X.intl.string(X.t.Wme3nX),
                description: X.intl.string(X.t["/aAIqV"]),
                descriptionCta: X.intl.string(X.t.jVcuVY),
                previewImage: eu.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = i(766075);
                        e(E.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eu.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: X.intl.string(X.t.zY5PPb),
                description: X.intl.string(X.t.R5Xag2),
                previewImage: eu.emojis.thumbnail,
                videoUrl: eu.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: X.intl.string(X.t["6b3ydG"]),
                description: X.intl.string(X.t["Y+IJyg"]),
                previewImage: eu.noLimits.thumbnail,
                videoUrl: eu.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: ec ? X.intl.string(X.t.E4U4SS) : X.intl.string(W.default.OlObRa),
                description: ec ? X.intl.string(X.t["B4uSy/"]) : X.intl.string(W.default["8Gl8gP"]),
                descriptionCta: ec ? X.intl.string(X.t.RzWDqY) : X.intl.string(W.default.HINTfJ),
                previewImage: eu.threePPromotions.thumbnail,
                videoUrl: eu.threePPromotions.assetUrl,
                onClick: () =>
                    (0, N.u)({
                        analyticsLocations: t,
                        partnerIds: [O.KS, O.Cs, O.XY, ...(ec ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: ec ? void 0 : X.intl.string(X.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ec ? ed : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: X.intl.string(K.default["ZFJ/NU"]),
                description: X.intl.string(K.default.wMi514),
                descriptionCta: X.intl.string(X.t.hvVgAZ),
                onClick: () => {
                    window.open(I.A.getArticleURL(H.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eu.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eu.orbRewards.assetUrl,
                badgeText: ec ? void 0 : X.intl.string(X.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: X.intl.string(X.t.Csf5Ol),
                description: X.intl.format(X.t["G5k+lZ"], { bonusOrbMultiplier: el }),
                descriptionCta: X.intl.string(X.t.jVcuVY),
                onClick: () => (0, R.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eu.orbMultiplier.thumbnail,
                videoUrl: eu.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: X.intl.string(X.t.Tzhw6e),
                description: X.intl.format(X.t.djzJx6, { bonusOrbMultiplier: el }),
                descriptionCta: X.intl.string(X.t.RzWDqY),
                onClick: () => (0, R.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeText: ec ? void 0 : X.intl.string(X.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eu.combinedOrbs.thumbnail,
                videoUrl: eu.combinedOrbs.assetUrl,
            },
        };
    function eb(e) {
        let t = ef[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eh = (function (e) {
            let t = (0, k.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: i } = L.Ay.useConfig({ location: "bento_box" }),
                r = (0, B.O9)(),
                n = (0, y.DK)(j.W.NITRO, "useBentoBoxes"),
                s = n && e;
            return [
                ...(t || i ? [eo.THREE_P_PROMOTIONS] : []),
                ...(s ? [eo.COMBINED_ORBS] : []),
                ...(!s && e ? [eo.ORB_MULTIPLIER] : []),
                ...(r ? [eo.PREMIUM_GROUP] : []),
                ...(!s && n ? [eo.ORB_REWARDS] : []),
                eo.DISPLAY_NAME_STYLES,
                eo.CUSTOM_THEMES,
                eo.SERVER_PROFILES,
                eo.REFERRAL_PROGRAM,
            ];
        })(ea),
        eC = [],
        eg = e ? null : eh[0],
        eR = eh.slice(+!e, e ? 2 : 3);
    return (
        null != eg && eC.push([eb(eg)]),
        1 === eR.length ? eC.push([eb(eR[0])]) : 2 === eR.length && eC.push([eb(eR[0]), eb(eR[1])]),
        {
            whatsNewBoxes: [...eC],
            bestOfBoxes: [[eb("showYourStyle")], [eb("yourSpace")], [eb("emojis"), eb("noLimits")]],
        }
    );
};
