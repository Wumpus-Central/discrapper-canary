i.d(t, { A0: () => ex, NI: () => eC, Ay: () => ev, Tb: () => eg }), i(321073);
var n,
    r,
    s,
    a = i(477900),
    l = i(582128),
    o = i(492462),
    d = i(696292),
    c = i(17928),
    u = i(192308),
    m = i(403581),
    p = i(793574),
    f = i(688810),
    h = i(793943),
    b = i(259065),
    g = i(741231),
    x = i(325499),
    C = i(532794),
    v = i(206835),
    _ = i(192444),
    j = i(216934),
    R = i(591179),
    E = i(462463),
    P = i(780964),
    A = i(766075),
    y = i(166403),
    N = i(676279),
    T = i(975571),
    I = i(158045),
    w = i(789861),
    O = i(769623),
    M = i(920050),
    U = i(707922),
    L = i(852218),
    S = i(161319),
    k = i(503698),
    D = i.n(k),
    B = i(907581),
    F = i(817177);
let H = l.forwardRef((e, t) => {
    let { className: i } = e,
        n = l.useRef(null);
    return (
        l.useImperativeHandle(t, () => ({
            play: () => {
                n.current?.play();
            },
            pause: () => n.current?.pause(),
        })),
        (0, a.jsx)("div", {
            className: D()(i, F.k),
            children: (0, a.jsx)(B.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
H.displayName = "PremiumRewardsBentoBoxAsset";
var V = i(440005),
    Y = i(26508),
    G = i(592909),
    Z = i(398523),
    W = i(881373),
    K = i(862990),
    z = i(202541);
i(92737);
var X = i(88001),
    $ = i(652215),
    q = i(190107),
    J = i(355097),
    Q = i(806343),
    ee = i(962995),
    et = i(466919),
    ei = i(490285),
    en = i(375708),
    er = i(693227),
    es = i(864386),
    ea = i(950228),
    el = i(817577);
let eo = "/assets/035ad0fba4997f3f.svg",
    ed =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    ec =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    eu =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
    em =
        "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var ep = i(576765),
    ef = i(88433),
    eh = i(909340),
    eb = i(455482),
    eg = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    ex = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    eC =
        (((s = {}).REFERRAL_PROGRAM = "referralProgram"),
        (s.SERVER_PROFILES = "serverProfiles"),
        (s.SHOW_YOUR_STYLE = "showYourStyle"),
        (s.YOUR_SPACE = "yourSpace"),
        (s.EMOJIS = "emojis"),
        (s.NO_LIMITS = "noLimits"),
        (s.CUSTOM_THEMES = "customThemes"),
        (s.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (s.PREMIUM_GROUP = "premiumGroup"),
        (s.CALL_OF_DUTY = "callOfDuty"),
        (s.THREE_P_PROMOTIONS = "threePPromotions"),
        (s.ORB_REWARDS = "orbRewards"),
        (s.ORB_MULTIPLIER = "orbMultiplier"),
        (s.COMBINED_ORBS = "combinedOrbs"),
        s);
let ev = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, f.Ay)(p.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, R.X)("useBentoBoxes"),
        r = (0, E.A)({ analyticsLocations: t }),
        s = (0, l.useCallback)(() => {
            (0, g.A)($.BVt.NITRO_HOME, { search: (0, o.stringify)({ perk: M.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        k = (0, v.A)({ scrollPosition: J._F.TRY_IT_OUT, analyticsLocations: t }),
        D = (0, l.useCallback)(() => {
            (0, A.openUserSettings)(P.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, b.L)({ analyticsLocations: t }),
            );
        }, [t]),
        B = (0, l.useCallback)(() => {
            (0, C.A)({ subscriptionTier: z.pe.TIER_2, initialPlanId: z.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        F = (0, N.TM)(),
        eg = T.A.getArticleURL($.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ex, multiplier: ev } = (0, _.lk)(q.rE.NITRO_HOME_MARKETING),
        e_ = l.useRef(null),
        ej = (0, x.b)("bento_box"),
        eR = {
            premiumGroup: { thumbnail: el, assetUrl: el },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: F
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: F
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: F
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: F
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: F
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: F
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: ep.A,
                assetUrl: F
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : ef.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: F
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eb.A, assetUrl: eh.A },
            orbMultiplier: { thumbnail: eu, assetUrl: F ? ed : ec },
            combinedOrbs: { thumbnail: eu, assetUrl: F ? ed : ec },
            callOfDuty: { thumbnail: em, assetUrl: em },
            threePPromotions: { thumbnail: ej ? (0, a.jsx)(H, { ref: e_ }) : eo, assetUrl: ej ? void 0 : eo },
        },
        eE = (0, O.Y)({ location: "bento_box" }),
        eP = (0, U.A)(!eE),
        eA = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        ey = null != eA && (0, I.Nc)(eA),
        eN = {
            serverProfiles: {
                name: "serverProfiles",
                title: en.intl.string(en.t.I9TYMg),
                description: en.intl.string(en.t.HMSHeH),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                onClick: n ? r : k,
                previewImage: eR.serverProfiles.thumbnail,
                videoUrl: eR.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: en.intl.string(en.t.tPY4o9),
                description: en.intl.format(en.t.jRPQUH, { learnMoreLink: eg }),
                previewImage: eR.referralProgram.thumbnail,
                videoUrl: eR.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: en.intl.string(er.default.XokIHM),
                description: en.intl.string(er.default["7esQMC"]),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eR.customThemes.thumbnail,
                onClick: () => {
                    (0, h.nf)(h.HP.CUSTOM_THEME);
                },
                videoUrl: eR.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: en.intl.string(es.default.ABtBDQ),
                description: en.intl.string(es.default.MFNXZh),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eR.displayNameStyles.thumbnail,
                onClick: n ? r : D,
                videoUrl: eR.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: en.intl.formatToPlainString(et.default.VFEDDB, { premiumGroupProductName: (0, X.DP)() }),
                description:
                    eE && null != eP
                        ? en.intl.formatToPlainString(et.default.vmvhN5, { pricePerPerson: eP, totalMember: X.LM })
                        : en.intl.formatToPlainString(et.default.WudmR3, {
                              totalSeats: X.aw,
                              premiumGroupProductName: (0, X.DP)(),
                          }),
                previewImage: eR.premiumGroup.thumbnail,
                videoUrl: eR.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: en.intl.formatToPlainString(et.default.LwdrNi, { premiumGroupProductName: (0, X.DP)() }),
                        onClick: B,
                        icon: m.t,
                        iconPosition: "start",
                        disabled: ey,
                    },
                    {
                        variant: "secondary",
                        text: en.intl.string(en.t.hvVgAZ),
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("99709"), i.e("3370"), i.e("69595")]).then(
                                    i.bind(i, 526710),
                                );
                                return (t) => (0, a.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: en.intl.string(en.t.Ij3Zmv),
                description: en.intl.string(en.t.UsOUxY),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eR.showYourStyle.thumbnail,
                onClick: n ? r : k,
                videoUrl: eR.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: en.intl.string(en.t.Wme3nX),
                description: en.intl.string(en.t["/aAIqV"]),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eR.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = i(766075);
                        e(P.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eR.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: en.intl.string(en.t.zY5PPb),
                description: en.intl.string(en.t.R5Xag2),
                previewImage: eR.emojis.thumbnail,
                videoUrl: eR.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: en.intl.string(en.t["6b3ydG"]),
                description: en.intl.string(en.t["Y+IJyg"]),
                previewImage: eR.noLimits.thumbnail,
                videoUrl: eR.noLimits.assetUrl,
            },
            callOfDuty: {
                name: "callOfDuty",
                title: en.intl.string(Q.default.sB5V0c),
                description: en.intl.formatToPlainString(Q.default["RuZS+B"], { validDates: (0, w.a1)() }),
                previewImage: eR.callOfDuty.thumbnail,
                videoUrl: eR.callOfDuty.assetUrl,
                containerClassName: ea.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: en.intl.string(Q.default["9Rq7t1"]),
                        onClick: () =>
                            (0, C.A)({
                                subscriptionTier: z.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: s,
                            }),
                        icon: m.t,
                        iconPosition: "start",
                    },
                ],
            },
            threePPromotions: {
                name: "threePPromotions",
                title: ej ? en.intl.string(en.t.E4U4SS) : en.intl.string(ee.default.OlObRa),
                description: ej ? en.intl.string(en.t["B4uSy/"]) : en.intl.string(ee.default["8Gl8gP"]),
                descriptionCta: ej ? en.intl.string(en.t.RzWDqY) : en.intl.string(ee.default.HINTfJ),
                previewImage: eR.threePPromotions.thumbnail,
                videoUrl: eR.threePPromotions.assetUrl,
                onClick: () =>
                    (0, S.u)({
                        analyticsLocations: t,
                        partnerIds: [L.KS, L.Cs, L.XY, ...(ej ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: ej ? void 0 : en.intl.string(en.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ej ? e_ : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: en.intl.string(ei.default["ZFJ/NU"]),
                description: en.intl.string(ei.default.wMi514),
                descriptionCta: en.intl.string(en.t.hvVgAZ),
                onClick: () => {
                    window.open(T.A.getArticleURL($.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eR.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eR.orbRewards.assetUrl,
                badgeText: ej ? void 0 : en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: en.intl.string(en.t.Csf5Ol),
                description: en.intl.format(en.t["G5k+lZ"], { bonusOrbMultiplier: ev }),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                onClick: () => (0, j.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eR.orbMultiplier.thumbnail,
                videoUrl: eR.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: en.intl.string(en.t.Tzhw6e),
                description: en.intl.format(en.t.djzJx6, { bonusOrbMultiplier: ev }),
                descriptionCta: en.intl.string(en.t.RzWDqY),
                onClick: () => (0, j.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: ej ? void 0 : en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eR.combinedOrbs.thumbnail,
                videoUrl: eR.combinedOrbs.assetUrl,
            },
        };
    function eT(e) {
        let t = eN[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eI = (function (e) {
            let t = (0, G.A0)({ location: "bento_box" }),
                i = (0, W.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: n } = Z.Ay.useConfig({ location: "bento_box" }),
                r = t ? eC.CALL_OF_DUTY : eC.THREE_P_PROMOTIONS,
                s = (0, K.O9)(),
                a = (0, Y.DK)(V.W.NITRO, "useBentoBoxes"),
                l = a && e;
            return [
                ...(t || i || n ? [r] : []),
                ...(l ? [eC.COMBINED_ORBS] : []),
                ...(!l && e ? [eC.ORB_MULTIPLIER] : []),
                ...(s ? [eC.PREMIUM_GROUP] : []),
                ...(!l && a ? [eC.ORB_REWARDS] : []),
                eC.DISPLAY_NAME_STYLES,
                eC.CUSTOM_THEMES,
                eC.SERVER_PROFILES,
                eC.REFERRAL_PROGRAM,
            ];
        })(ex),
        ew = [],
        eO = e ? null : eI[0],
        eM = eI.slice(+!e, e ? 2 : 3);
    return (
        null != eO && ew.push([eT(eO)]),
        1 === eM.length ? ew.push([eT(eM[0])]) : 2 === eM.length && ew.push([eT(eM[0]), eT(eM[1])]),
        {
            whatsNewBoxes: [...ew],
            bestOfBoxes: [[eT("showYourStyle")], [eT("yourSpace")], [eT("emojis"), eT("noLimits")]],
        }
    );
};
