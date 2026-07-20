i.d(t, { A0: () => el, NI: () => eo, Ay: () => ed, Tb: () => ea }), i(321073);
var s,
    r,
    n,
    a = i(627968),
    l = i(64700),
    o = i(696292),
    d = i(192308),
    c = i(403581),
    u = i(793574),
    m = i(688810),
    p = i(793943),
    h = i(259065),
    f = i(325499),
    b = i(532794),
    g = i(206835),
    x = i(192444),
    C = i(216934),
    v = i(591179),
    j = i(462463),
    R = i(780964),
    P = i(766075),
    E = i(676279),
    _ = i(975571),
    A = i(769623),
    y = i(707922),
    N = i(852218),
    w = i(161319),
    M = i(503698),
    I = i.n(M),
    T = i(907581),
    O = i(184049);
let U = l.forwardRef((e, t) => {
    let { className: i } = e,
        s = l.useRef(null);
    return (
        l.useImperativeHandle(t, () => ({
            play: () => {
                s.current?.play();
            },
            pause: () => s.current?.pause(),
        })),
        (0, a.jsx)("div", {
            className: I()(i, O.k),
            children: (0, a.jsx)(T.C, { ref: s, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
U.displayName = "PremiumRewardsBentoBoxAsset";
var k = i(440005),
    S = i(26508),
    L = i(398523),
    B = i(881373),
    D = i(862990),
    H = i(202541),
    V = i(88001),
    Y = i(652215),
    F = i(190107),
    G = i(355097),
    W = i(778414),
    Z = i(963458),
    K = i(587416),
    z = i(375708),
    X = i(491404),
    $ = i(745699),
    q = i(817577);
let J = "/assets/035ad0fba4997f3f.svg",
    Q =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    ee =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    et =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var ei = i(576765),
    es = i(88433),
    er = i(909340),
    en = i(455482),
    ea = (((s = {}).CONTAINED = "contained"), (s.OVERLAY = "overlay"), s),
    el = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    eo =
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
let ed = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, m.Ay)(u.A.PREMIUM_MARKETING_BENTO_BOX),
        s = (0, v.X)("useBentoBoxes"),
        r = (0, j.A)({ analyticsLocations: t }),
        n = (0, g.A)({ scrollPosition: G._F.TRY_IT_OUT, analyticsLocations: t }),
        M = (0, l.useCallback)(() => {
            (0, P.openUserSettings)(R.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, h.L)({ analyticsLocations: t }),
            );
        }, [t]),
        I = (0, l.useCallback)(() => {
            (0, b.A)({ subscriptionTier: H.pe.TIER_2, initialPlanId: H.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        T = (0, E.TM)(),
        O = _.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ea, multiplier: el } = (0, x.lk)(F.rE.NITRO_HOME_MARKETING),
        ed = l.useRef(null),
        ec = (0, f.b)("bento_box"),
        eu = {
            premiumGroup: { thumbnail: q, assetUrl: q },
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
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: ei.A,
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : es.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: T
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: en.A, assetUrl: er.A },
            orbMultiplier: { thumbnail: et, assetUrl: T ? Q : ee },
            combinedOrbs: { thumbnail: et, assetUrl: T ? Q : ee },
            threePPromotions: { thumbnail: ec ? (0, a.jsx)(U, { ref: ed }) : J, assetUrl: ec ? void 0 : J },
        },
        em = (0, A.Y)({ location: "bento_box" }),
        ep = (0, y.A)(!em),
        eh = {
            serverProfiles: {
                name: "serverProfiles",
                title: z.intl.string(z.t.I9TYMg),
                description: z.intl.string(z.t.HMSHeH),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                onClick: s ? r : n,
                previewImage: eu.serverProfiles.thumbnail,
                videoUrl: eu.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: z.intl.string(z.t.tPY4o9),
                description: z.intl.format(z.t.jRPQUH, { learnMoreLink: O }),
                previewImage: eu.referralProgram.thumbnail,
                videoUrl: eu.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: z.intl.string(X.default.XokIHM),
                description: z.intl.string(X.default["7esQMC"]),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eu.customThemes.thumbnail,
                onClick: () => {
                    (0, p.nf)(p.HP.CUSTOM_THEME);
                },
                videoUrl: eu.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: z.intl.string($.default.ABtBDQ),
                description: z.intl.string($.default.MFNXZh),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eu.displayNameStyles.thumbnail,
                onClick: s ? r : M,
                videoUrl: eu.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: z.intl.formatToPlainString(Z.default.VFEDDB, { premiumGroupProductName: (0, V.DP)() }),
                description:
                    em && null != ep
                        ? z.intl.formatToPlainString(Z.default.vmvhN5, { pricePerPerson: ep, totalMember: V.LM })
                        : z.intl.formatToPlainString(Z.default.WudmR3, {
                              totalSeats: V.aw,
                              premiumGroupProductName: (0, V.DP)(),
                          }),
                previewImage: eu.premiumGroup.thumbnail,
                videoUrl: eu.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: z.intl.formatToPlainString(Z.default.LwdrNi, { premiumGroupProductName: (0, V.DP)() }),
                        onClick: I,
                        icon: c.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: z.intl.string(z.t.hvVgAZ),
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
                badgeText: z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: z.intl.string(z.t.Ij3Zmv),
                description: z.intl.string(z.t.UsOUxY),
                descriptionCta: z.intl.string(z.t.jVcuVY),
                previewImage: eu.showYourStyle.thumbnail,
                onClick: s ? r : n,
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
                        let { openUserSettings: e } = i(766075);
                        e(R.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
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
                title: ec ? z.intl.string(z.t.E4U4SS) : z.intl.string(W.default.OlObRa),
                description: ec ? z.intl.string(z.t["B4uSy/"]) : z.intl.string(W.default["8Gl8gP"]),
                descriptionCta: ec ? z.intl.string(z.t.RzWDqY) : z.intl.string(W.default.HINTfJ),
                previewImage: eu.threePPromotions.thumbnail,
                videoUrl: eu.threePPromotions.assetUrl,
                onClick: () =>
                    (0, w.u)({
                        analyticsLocations: t,
                        partnerIds: [N.KS, N.Cs, N.XY, ...(ec ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: ec ? void 0 : z.intl.string(z.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ec ? ed : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: z.intl.string(K.default["ZFJ/NU"]),
                description: z.intl.string(K.default.wMi514),
                descriptionCta: z.intl.string(z.t.hvVgAZ),
                onClick: () => {
                    window.open(_.A.getArticleURL(Y.MVz.ORBS_REWARDS_FAQ), "_blank");
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
                onClick: () => (0, C.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eu.orbMultiplier.thumbnail,
                videoUrl: eu.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: z.intl.string(z.t.Tzhw6e),
                description: z.intl.format(z.t.djzJx6, { bonusOrbMultiplier: el }),
                descriptionCta: z.intl.string(z.t.RzWDqY),
                onClick: () => (0, C.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeText: ec ? void 0 : z.intl.string(z.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eu.combinedOrbs.thumbnail,
                videoUrl: eu.combinedOrbs.assetUrl,
            },
        };
    function ef(e) {
        let t = eh[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eb = (function (e) {
            let t = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: i } = L.Ay.useConfig({ location: "bento_box" }),
                s = (0, D.O9)(),
                r = (0, S.DK)(k.W.NITRO, "useBentoBoxes"),
                n = r && e;
            return [
                ...(t || i ? [eo.THREE_P_PROMOTIONS] : []),
                ...(n ? [eo.COMBINED_ORBS] : []),
                ...(!n && e ? [eo.ORB_MULTIPLIER] : []),
                ...(s ? [eo.PREMIUM_GROUP] : []),
                ...(!n && r ? [eo.ORB_REWARDS] : []),
                eo.DISPLAY_NAME_STYLES,
                eo.CUSTOM_THEMES,
                eo.SERVER_PROFILES,
                eo.REFERRAL_PROGRAM,
            ];
        })(ea),
        eg = [],
        ex = e ? null : eb[0],
        eC = eb.slice(+!e, e ? 2 : 3);
    return (
        null != ex && eg.push([ef(ex)]),
        1 === eC.length ? eg.push([ef(eC[0])]) : 2 === eC.length && eg.push([ef(eC[0]), ef(eC[1])]),
        {
            whatsNewBoxes: [...eg],
            bestOfBoxes: [[ef("showYourStyle")], [ef("yourSpace")], [ef("emojis"), ef("noLimits")]],
        }
    );
};
