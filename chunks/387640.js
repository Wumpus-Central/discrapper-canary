i.d(t, { A0: () => em, NI: () => ep, Ay: () => ef, Tb: () => eu }), i(321073);
var n,
    s,
    a,
    r = i(477900),
    l = i(582128),
    o = i(696292),
    d = i(192308),
    c = i(403581),
    u = i(793574),
    m = i(688810),
    p = i(793943),
    f = i(259065),
    b = i(325499),
    h = i(532794),
    g = i(206835),
    x = i(192444),
    C = i(216934),
    v = i(591179),
    _ = i(462463),
    j = i(780964),
    R = i(766075),
    E = i(676279),
    P = i(975571),
    A = i(789861),
    y = i(769623),
    N = i(707922),
    T = i(852218),
    I = i(161319),
    w = i(503698),
    O = i.n(w),
    M = i(907581),
    U = i(817177);
let L = l.forwardRef((e, t) => {
    let { className: i } = e,
        n = l.useRef(null);
    return (
        l.useImperativeHandle(t, () => ({
            play: () => {
                n.current?.play();
            },
            pause: () => n.current?.pause(),
        })),
        (0, r.jsx)("div", {
            className: O()(i, U.k),
            children: (0, r.jsx)(M.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
L.displayName = "PremiumRewardsBentoBoxAsset";
var S = i(440005),
    k = i(26508),
    D = i(592909),
    B = i(398523),
    H = i(881373),
    V = i(862990),
    Y = i(202541),
    F = i(88001),
    G = i(652215),
    W = i(190107),
    Z = i(355097),
    K = i(806343),
    z = i(962995),
    X = i(466919),
    $ = i(490285),
    q = i(375708),
    J = i(693227),
    Q = i(864386),
    ee = i(950228),
    et = i(817577);
let ei = "/assets/035ad0fba4997f3f.svg",
    en =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    es =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    ea =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
    er =
        "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var el = i(576765),
    eo = i(88433),
    ed = i(909340),
    ec = i(455482),
    eu = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    em = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s),
    ep =
        (((a = {}).REFERRAL_PROGRAM = "referralProgram"),
        (a.SERVER_PROFILES = "serverProfiles"),
        (a.SHOW_YOUR_STYLE = "showYourStyle"),
        (a.YOUR_SPACE = "yourSpace"),
        (a.EMOJIS = "emojis"),
        (a.NO_LIMITS = "noLimits"),
        (a.CUSTOM_THEMES = "customThemes"),
        (a.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (a.PREMIUM_GROUP = "premiumGroup"),
        (a.CALL_OF_DUTY = "callOfDuty"),
        (a.THREE_P_PROMOTIONS = "threePPromotions"),
        (a.ORB_REWARDS = "orbRewards"),
        (a.ORB_MULTIPLIER = "orbMultiplier"),
        (a.COMBINED_ORBS = "combinedOrbs"),
        a);
let ef = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, m.Ay)(u.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, v.X)("useBentoBoxes"),
        s = (0, _.A)({ analyticsLocations: t }),
        a = (0, g.A)({ scrollPosition: Z._F.TRY_IT_OUT, analyticsLocations: t }),
        w = (0, l.useCallback)(() => {
            (0, R.openUserSettings)(j.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        O = (0, l.useCallback)(() => {
            (0, h.A)({ subscriptionTier: Y.pe.TIER_2, initialPlanId: Y.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        M = (0, E.TM)(),
        U = P.A.getArticleURL(G.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: eu, multiplier: em } = (0, x.lk)(W.rE.NITRO_HOME_MARKETING),
        ef = l.useRef(null),
        eb = (0, b.b)("bento_box"),
        eh = {
            premiumGroup: { thumbnail: et, assetUrl: et },
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
                thumbnail: el.A,
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : eo.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: M
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: ec.A, assetUrl: ed.A },
            orbMultiplier: { thumbnail: ea, assetUrl: M ? en : es },
            combinedOrbs: { thumbnail: ea, assetUrl: M ? en : es },
            callOfDuty: { thumbnail: er, assetUrl: er },
            threePPromotions: { thumbnail: eb ? (0, r.jsx)(L, { ref: ef }) : ei, assetUrl: eb ? void 0 : ei },
        },
        eg = (0, y.Y)({ location: "bento_box" }),
        ex = (0, N.A)(!eg),
        eC = {
            serverProfiles: {
                name: "serverProfiles",
                title: q.intl.string(q.t.I9TYMg),
                description: q.intl.string(q.t.HMSHeH),
                descriptionCta: q.intl.string(q.t.jVcuVY),
                onClick: n ? s : a,
                previewImage: eh.serverProfiles.thumbnail,
                videoUrl: eh.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: q.intl.string(q.t.tPY4o9),
                description: q.intl.format(q.t.jRPQUH, { learnMoreLink: U }),
                previewImage: eh.referralProgram.thumbnail,
                videoUrl: eh.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: q.intl.string(J.default.XokIHM),
                description: q.intl.string(J.default["7esQMC"]),
                descriptionCta: q.intl.string(q.t.jVcuVY),
                previewImage: eh.customThemes.thumbnail,
                onClick: () => {
                    (0, p.nf)(p.HP.CUSTOM_THEME);
                },
                videoUrl: eh.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: q.intl.string(Q.default.ABtBDQ),
                description: q.intl.string(Q.default.MFNXZh),
                descriptionCta: q.intl.string(q.t.jVcuVY),
                previewImage: eh.displayNameStyles.thumbnail,
                onClick: n ? s : w,
                videoUrl: eh.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: q.intl.formatToPlainString(X.default.VFEDDB, { premiumGroupProductName: (0, F.DP)() }),
                description:
                    eg && null != ex
                        ? q.intl.formatToPlainString(X.default.vmvhN5, { pricePerPerson: ex, totalMember: F.LM })
                        : q.intl.formatToPlainString(X.default.WudmR3, {
                              totalSeats: F.aw,
                              premiumGroupProductName: (0, F.DP)(),
                          }),
                previewImage: eh.premiumGroup.thumbnail,
                videoUrl: eh.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: q.intl.formatToPlainString(X.default.LwdrNi, { premiumGroupProductName: (0, F.DP)() }),
                        onClick: O,
                        icon: c.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: q.intl.string(q.t.hvVgAZ),
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("99709"), i.e("3370"), i.e("69595")]).then(
                                    i.bind(i, 526710),
                                );
                                return (t) => (0, r.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: q.intl.string(q.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: q.intl.string(q.t.Ij3Zmv),
                description: q.intl.string(q.t.UsOUxY),
                descriptionCta: q.intl.string(q.t.jVcuVY),
                previewImage: eh.showYourStyle.thumbnail,
                onClick: n ? s : a,
                videoUrl: eh.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: q.intl.string(q.t.Wme3nX),
                description: q.intl.string(q.t["/aAIqV"]),
                descriptionCta: q.intl.string(q.t.jVcuVY),
                previewImage: eh.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = i(766075);
                        e(j.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eh.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: q.intl.string(q.t.zY5PPb),
                description: q.intl.string(q.t.R5Xag2),
                previewImage: eh.emojis.thumbnail,
                videoUrl: eh.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: q.intl.string(q.t["6b3ydG"]),
                description: q.intl.string(q.t["Y+IJyg"]),
                previewImage: eh.noLimits.thumbnail,
                videoUrl: eh.noLimits.assetUrl,
            },
            callOfDuty: {
                name: "callOfDuty",
                title: q.intl.string(K.default.sB5V0c),
                description: q.intl.formatToPlainString(K.default["RuZS+B"], { validDates: (0, A.a)() }),
                previewImage: eh.callOfDuty.thumbnail,
                videoUrl: eh.callOfDuty.assetUrl,
                containerClassName: ee.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: q.intl.string(K.default["9Rq7t1"]),
                        onClick: () => (0, h.A)({ subscriptionTier: Y.pe.TIER_2, analyticsLocations: t }),
                        icon: c.t,
                        iconPosition: "start",
                    },
                ],
            },
            threePPromotions: {
                name: "threePPromotions",
                title: eb ? q.intl.string(q.t.E4U4SS) : q.intl.string(z.default.OlObRa),
                description: eb ? q.intl.string(q.t["B4uSy/"]) : q.intl.string(z.default["8Gl8gP"]),
                descriptionCta: eb ? q.intl.string(q.t.RzWDqY) : q.intl.string(z.default.HINTfJ),
                previewImage: eh.threePPromotions.thumbnail,
                videoUrl: eh.threePPromotions.assetUrl,
                onClick: () =>
                    (0, I.u)({
                        analyticsLocations: t,
                        partnerIds: [T.KS, T.Cs, T.XY, ...(eb ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: eb ? void 0 : q.intl.string(q.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eb ? ef : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: q.intl.string($.default["ZFJ/NU"]),
                description: q.intl.string($.default.wMi514),
                descriptionCta: q.intl.string(q.t.hvVgAZ),
                onClick: () => {
                    window.open(P.A.getArticleURL(G.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eh.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eh.orbRewards.assetUrl,
                badgeText: eb ? void 0 : q.intl.string(q.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: q.intl.string(q.t.Csf5Ol),
                description: q.intl.format(q.t["G5k+lZ"], { bonusOrbMultiplier: em }),
                descriptionCta: q.intl.string(q.t.jVcuVY),
                onClick: () => (0, C.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eh.orbMultiplier.thumbnail,
                videoUrl: eh.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: q.intl.string(q.t.Tzhw6e),
                description: q.intl.format(q.t.djzJx6, { bonusOrbMultiplier: em }),
                descriptionCta: q.intl.string(q.t.RzWDqY),
                onClick: () => (0, C.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeText: eb ? void 0 : q.intl.string(q.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eh.combinedOrbs.thumbnail,
                videoUrl: eh.combinedOrbs.assetUrl,
            },
        };
    function ev(e) {
        let t = eC[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let e_ = (function (e) {
            let t = (0, D.A0)({ location: "bento_box" }),
                i = (0, H.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: n } = B.Ay.useConfig({ location: "bento_box" }),
                s = t ? ep.CALL_OF_DUTY : ep.THREE_P_PROMOTIONS,
                a = (0, V.O9)(),
                r = (0, k.DK)(S.W.NITRO, "useBentoBoxes"),
                l = r && e;
            return [
                ...(t || i || n ? [s] : []),
                ...(l ? [ep.COMBINED_ORBS] : []),
                ...(!l && e ? [ep.ORB_MULTIPLIER] : []),
                ...(a ? [ep.PREMIUM_GROUP] : []),
                ...(!l && r ? [ep.ORB_REWARDS] : []),
                ep.DISPLAY_NAME_STYLES,
                ep.CUSTOM_THEMES,
                ep.SERVER_PROFILES,
                ep.REFERRAL_PROGRAM,
            ];
        })(eu),
        ej = [],
        eR = e ? null : e_[0],
        eE = e_.slice(+!e, e ? 2 : 3);
    return (
        null != eR && ej.push([ev(eR)]),
        1 === eE.length ? ej.push([ev(eE[0])]) : 2 === eE.length && ej.push([ev(eE[0]), ev(eE[1])]),
        {
            whatsNewBoxes: [...ej],
            bestOfBoxes: [[ev("showYourStyle")], [ev("yourSpace")], [ev("emojis"), ev("noLimits")]],
        }
    );
};
