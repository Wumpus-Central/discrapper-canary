a.d(t, { A0: () => eo, NI: () => ed, Ay: () => ec, Tb: () => er }), a(321073);
var s,
    i,
    n,
    r = a(627968),
    o = a(64700),
    d = a(696292),
    c = a(192308),
    l = a(403581),
    p = a(793574),
    m = a(688810),
    b = a(793943),
    f = a(31502),
    u = a(259065),
    g = a(532794),
    h = a(206835),
    R = a(192444),
    P = a(617986),
    U = a(591179),
    v = a(462463),
    E = a(780964),
    M = a(766075),
    S = a(676279),
    O = a(975571),
    _ = a(769623),
    A = a(707922),
    I = a(852218),
    T = a(382259),
    w = a(503698),
    C = a.n(w),
    y = a(907581),
    L = a(533873);
let N = o.forwardRef((e, t) => {
    let { className: a } = e,
        s = o.useRef(null);
    return (
        o.useImperativeHandle(t, () => ({
            play: () => {
                s.current?.play();
            },
            pause: () => s.current?.pause(),
        })),
        (0, r.jsx)("div", {
            className: C()(a, L.k),
            children: (0, r.jsx)(y.C, { ref: s, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
N.displayName = "PremiumRewardsBentoBoxAsset";
var Y = a(440005),
    x = a(49132),
    k = a(398523),
    V = a(881373),
    B = a(862990),
    D = a(202541),
    G = a(88001),
    H = a(652215),
    j = a(190107),
    F = a(355097),
    W = a(962995),
    X = a(466919),
    z = a(490285),
    K = a(375708),
    J = a(693227),
    Q = a(864386),
    Z = a(817577);
let q = "/assets/035ad0fba4997f3f.svg",
    $ =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    ee =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    et =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var ea = a(576765),
    es = a(88433),
    ei = a(909340),
    en = a(455482),
    er = (((s = {}).CONTAINED = "contained"), (s.OVERLAY = "overlay"), s),
    eo = (((i = {}).SMALL = "small"), (i.MEDIUM = "medium"), (i.LARGE = "large"), i),
    ed =
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
let ec = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, m.Ay)(p.A.PREMIUM_MARKETING_BENTO_BOX),
        s = (0, U.X)("useBentoBoxes"),
        i = (0, v.A)({ analyticsLocations: t }),
        n = (0, h.A)({ scrollPosition: F._F.TRY_IT_OUT, analyticsLocations: t }),
        w = (0, o.useCallback)(() => {
            (0, M.openUserSettings)(E.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, u.L)({ analyticsLocations: t }),
            );
        }, [t]),
        C = (0, o.useCallback)(() => {
            (0, g.A)({ subscriptionTier: D.pe.TIER_2, initialPlanId: D.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        y = (0, S.TM)(),
        L = O.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: er, multiplier: eo } = (0, R.lk)(j.rE.NITRO_HOME_MARKETING),
        ec = o.useRef(null),
        el = (0, f.l)("bento_box"),
        ep = {
            premiumGroup: { thumbnail: Z, assetUrl: Z },
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
                thumbnail: ea.A,
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : es.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: y
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: en.A, assetUrl: ei.A },
            orbMultiplier: { thumbnail: et, assetUrl: y ? $ : ee },
            combinedOrbs: { thumbnail: et, assetUrl: y ? $ : ee },
            threePPromotions: { thumbnail: el ? (0, r.jsx)(N, { ref: ec }) : q, assetUrl: el ? void 0 : q },
        },
        em = (0, _.Y)({ location: "bento_box" }),
        eb = (0, A.A)(!em),
        ef = {
            serverProfiles: {
                name: "serverProfiles",
                title: K.intl.string(K.t.I9TYMg),
                description: K.intl.string(K.t.HMSHeH),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                onClick: s ? i : n,
                previewImage: ep.serverProfiles.thumbnail,
                videoUrl: ep.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: K.intl.string(K.t.tPY4o9),
                description: K.intl.format(K.t.jRPQUH, { learnMoreLink: L }),
                previewImage: ep.referralProgram.thumbnail,
                videoUrl: ep.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: K.intl.string(J.default.XokIHM),
                description: K.intl.string(J.default["7esQMC"]),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                previewImage: ep.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: ep.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: K.intl.string(Q.default.ABtBDQ),
                description: K.intl.string(Q.default.MFNXZh),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                previewImage: ep.displayNameStyles.thumbnail,
                onClick: s ? i : w,
                videoUrl: ep.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: K.intl.formatToPlainString(X.default.VFEDDB, { premiumGroupProductName: (0, G.DP)() }),
                description:
                    em && null != eb
                        ? K.intl.formatToPlainString(X.default.vmvhN5, { pricePerPerson: eb, totalMember: G.LM })
                        : K.intl.formatToPlainString(X.default.WudmR3, {
                              totalSeats: G.aw,
                              premiumGroupProductName: (0, G.DP)(),
                          }),
                previewImage: ep.premiumGroup.thumbnail,
                videoUrl: ep.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: K.intl.formatToPlainString(X.default.LwdrNi, { premiumGroupProductName: (0, G.DP)() }),
                        onClick: C,
                        icon: l.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: K.intl.string(K.t.hvVgAZ),
                        onClick: () => {
                            (0, c.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([a.e("99709"), a.e("3370"), a.e("69595")]).then(
                                    a.bind(a, 526710),
                                );
                                return (t) => (0, r.jsx)(e, { ...t });
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
                previewImage: ep.showYourStyle.thumbnail,
                onClick: s ? i : n,
                videoUrl: ep.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: K.intl.string(K.t.Wme3nX),
                description: K.intl.string(K.t["/aAIqV"]),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                previewImage: ep.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = a(766075);
                        e(E.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: ep.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: K.intl.string(K.t.zY5PPb),
                description: K.intl.string(K.t.R5Xag2),
                previewImage: ep.emojis.thumbnail,
                videoUrl: ep.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: K.intl.string(K.t["6b3ydG"]),
                description: K.intl.string(K.t["Y+IJyg"]),
                previewImage: ep.noLimits.thumbnail,
                videoUrl: ep.noLimits.assetUrl,
            },
            threePPromotions: {
                name: "threePPromotions",
                title: el ? K.intl.string(K.t.E4U4SS) : K.intl.string(W.default.OlObRa),
                description: el ? K.intl.string(K.t["B4uSy/"]) : K.intl.string(W.default["8Gl8gP"]),
                descriptionCta: el ? K.intl.string(K.t.RzWDqY) : K.intl.string(W.default.HINTfJ),
                previewImage: ep.threePPromotions.thumbnail,
                videoUrl: ep.threePPromotions.assetUrl,
                onClick: () =>
                    (0, T.u)({
                        analyticsLocations: t,
                        partnerIds: [I.KS, I.Cs, I.XY, ...(el ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: el ? void 0 : K.intl.string(K.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: el ? ec : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: K.intl.string(z.default["ZFJ/NU"]),
                description: K.intl.string(z.default.wMi514),
                descriptionCta: K.intl.string(K.t.hvVgAZ),
                onClick: () => {
                    window.open(O.A.getArticleURL(H.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: ep.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: ep.orbRewards.assetUrl,
                badgeText: el ? void 0 : K.intl.string(K.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: K.intl.string(K.t.Csf5Ol),
                description: K.intl.format(K.t["G5k+lZ"], { bonusOrbMultiplier: eo }),
                descriptionCta: K.intl.string(K.t.jVcuVY),
                onClick: () => (0, P.navigateToQuestHome)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: ep.orbMultiplier.thumbnail,
                videoUrl: ep.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: K.intl.string(K.t.Tzhw6e),
                description: K.intl.format(K.t.djzJx6, { bonusOrbMultiplier: eo }),
                descriptionCta: K.intl.string(K.t.RzWDqY),
                onClick: () => (0, P.navigateToQuestHome)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: el ? void 0 : K.intl.string(K.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: ep.combinedOrbs.thumbnail,
                videoUrl: ep.combinedOrbs.assetUrl,
            },
        };
    function eu(e) {
        let t = ef[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eg = (function (e) {
            let t = (0, V.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: a } = k.Ay.useConfig({ location: "bento_box" }),
                s = (0, B.O9)(),
                i = (0, x.DK)(Y.W.NITRO, "useBentoBoxes"),
                n = i && e;
            return [
                ...(t || a ? [ed.THREE_P_PROMOTIONS] : []),
                ...(n ? [ed.COMBINED_ORBS] : []),
                ...(!n && e ? [ed.ORB_MULTIPLIER] : []),
                ...(s ? [ed.PREMIUM_GROUP] : []),
                ...(!n && i ? [ed.ORB_REWARDS] : []),
                ed.DISPLAY_NAME_STYLES,
                ed.CUSTOM_THEMES,
                ed.SERVER_PROFILES,
                ed.REFERRAL_PROGRAM,
            ];
        })(er),
        eh = [],
        eR = e ? null : eg[0],
        eP = eg.slice(+!e, e ? 2 : 3);
    return (
        null != eR && eh.push([eu(eR)]),
        1 === eP.length ? eh.push([eu(eP[0])]) : 2 === eP.length && eh.push([eu(eP[0]), eu(eP[1])]),
        {
            whatsNewBoxes: [...eh],
            bestOfBoxes: [[eu("showYourStyle")], [eu("yourSpace")], [eu("emojis"), eu("noLimits")]],
        }
    );
};
