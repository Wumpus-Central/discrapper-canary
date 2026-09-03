i.d(t, { A0: () => ex, NI: () => eC, Ay: () => ev, Tb: () => eg }), i(321073);
var s,
    n,
    r,
    a = i(477900),
    l = i(582128),
    o = i(492462),
    d = i(696292),
    c = i(17928),
    u = i(192308),
    m = i(403581),
    p = i(793574),
    f = i(688810),
    b = i(793943),
    h = i(259065),
    g = i(741231),
    x = i(325499),
    C = i(75678),
    v = i(206835),
    _ = i(192444),
    j = i(216934),
    E = i(591179),
    R = i(462463),
    P = i(780964),
    A = i(766075),
    y = i(166403),
    N = i(676279),
    I = i(975571),
    T = i(158045),
    O = i(789861),
    w = i(769623),
    M = i(920050),
    L = i(707922),
    U = i(852218),
    S = i(161319),
    k = i(503698),
    B = i.n(k),
    D = i(907581),
    V = i(830370);
let H = l.forwardRef((e, t) => {
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
            className: B()(i, V.k),
            children: (0, a.jsx)(D.C, { ref: s, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
H.displayName = "PremiumRewardsBentoBoxAsset";
var Y = i(440005),
    F = i(26508),
    G = i(592909),
    W = i(398523),
    K = i(881373),
    Z = i(989790),
    z = i(202541);
i(92737);
var X = i(88001),
    $ = i(652215),
    q = i(190107),
    J = i(355097),
    Q = i(310235),
    ee = i(334551),
    et = i(148155),
    ei = i(1889),
    es = i(375708),
    en = i(72191),
    er = i(701974),
    ea = i(505051),
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
    eb = i(909340),
    eh = i(455482),
    eg = (((s = {}).CONTAINED = "contained"), (s.OVERLAY = "overlay"), s),
    ex = (((n = {}).SMALL = "small"), (n.MEDIUM = "medium"), (n.LARGE = "large"), n),
    eC =
        (((r = {}).REFERRAL_PROGRAM = "referralProgram"),
        (r.SERVER_PROFILES = "serverProfiles"),
        (r.SHOW_YOUR_STYLE = "showYourStyle"),
        (r.YOUR_SPACE = "yourSpace"),
        (r.EMOJIS = "emojis"),
        (r.NO_LIMITS = "noLimits"),
        (r.CUSTOM_THEMES = "customThemes"),
        (r.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (r.PREMIUM_GROUP = "premiumGroup"),
        (r.CALL_OF_DUTY = "callOfDuty"),
        (r.THREE_P_PROMOTIONS = "threePPromotions"),
        (r.ORB_REWARDS = "orbRewards"),
        (r.ORB_MULTIPLIER = "orbMultiplier"),
        (r.COMBINED_ORBS = "combinedOrbs"),
        r);
let ev = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, f.Ay)(p.A.PREMIUM_MARKETING_BENTO_BOX),
        s = (0, E.X)("useBentoBoxes"),
        n = (0, R.A)({ analyticsLocations: t }),
        r = (0, l.useCallback)(() => {
            (0, g.A)($.BVt.NITRO_HOME, { search: (0, o.stringify)({ perk: M.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        k = (0, v.A)({ scrollPosition: J._F.TRY_IT_OUT, analyticsLocations: t }),
        B = (0, l.useCallback)(() => {
            (0, A.openUserSettings)(P.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, h.L)({ analyticsLocations: t }),
            );
        }, [t]),
        D = (0, l.useCallback)(() => {
            (0, C.A)({ subscriptionTier: z.pe.TIER_2, initialPlanId: z.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        V = (0, N.TM)(),
        eg = I.A.getArticleURL($.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ex, multiplier: ev } = (0, _.lk)(q.rE.NITRO_HOME_MARKETING),
        e_ = l.useRef(null),
        ej = (0, x.b)("bento_box"),
        eE = {
            premiumGroup: { thumbnail: el, assetUrl: el },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: ep.A,
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : ef.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eh.A, assetUrl: eb.A },
            orbMultiplier: { thumbnail: eu, assetUrl: V ? ed : ec },
            combinedOrbs: { thumbnail: eu, assetUrl: V ? ed : ec },
            callOfDuty: { thumbnail: em, assetUrl: em },
            threePPromotions: { thumbnail: ej ? (0, a.jsx)(H, { ref: e_ }) : eo, assetUrl: ej ? void 0 : eo },
        },
        eR = (0, w.Y)({ location: "bento_box" }),
        eP = (0, L.A)(!eR),
        eA = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        ey = null != eA && (0, T.Nc)(eA),
        eN = {
            serverProfiles: {
                name: "serverProfiles",
                title: es.intl.string(es.t.I9TYMg),
                description: es.intl.string(es.t.HMSHeH),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                onClick: s ? n : k,
                previewImage: eE.serverProfiles.thumbnail,
                videoUrl: eE.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: es.intl.string(es.t.tPY4o9),
                description: es.intl.format(es.t.jRPQUH, { learnMoreLink: eg }),
                previewImage: eE.referralProgram.thumbnail,
                videoUrl: eE.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: es.intl.string(en.default.XokIHM),
                description: es.intl.string(en.default["7esQMC"]),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                previewImage: eE.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: eE.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: es.intl.string(er.default.ABtBDQ),
                description: es.intl.string(er.default.MFNXZh),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                previewImage: eE.displayNameStyles.thumbnail,
                onClick: s ? n : B,
                videoUrl: eE.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: es.intl.formatToPlainString(et.default.VFEDDB, { premiumGroupProductName: (0, X.DP)() }),
                description:
                    eR && null != eP
                        ? es.intl.formatToPlainString(et.default.vmvhN5, { pricePerPerson: eP, totalMember: X.LM })
                        : es.intl.formatToPlainString(et.default.WudmR3, {
                              totalSeats: X.aw,
                              premiumGroupProductName: (0, X.DP)(),
                          }),
                previewImage: eE.premiumGroup.thumbnail,
                videoUrl: eE.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: es.intl.formatToPlainString(et.default.LwdrNi, { premiumGroupProductName: (0, X.DP)() }),
                        onClick: D,
                        icon: m.t,
                        iconPosition: "start",
                        disabled: ey,
                    },
                    {
                        variant: "secondary",
                        text: es.intl.string(es.t.hvVgAZ),
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    i.e("499709"),
                                    i.e("403370"),
                                    i.e("569595"),
                                ]).then(i.bind(i, 526710));
                                return (t) => (0, a.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: es.intl.string(es.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: es.intl.string(es.t.Ij3Zmv),
                description: es.intl.string(es.t.UsOUxY),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                previewImage: eE.showYourStyle.thumbnail,
                onClick: s ? n : k,
                videoUrl: eE.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: es.intl.string(es.t.Wme3nX),
                description: es.intl.string(es.t["/aAIqV"]),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                previewImage: eE.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = i(766075);
                        e(P.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eE.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: es.intl.string(es.t.zY5PPb),
                description: es.intl.string(es.t.R5Xag2),
                previewImage: eE.emojis.thumbnail,
                videoUrl: eE.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: es.intl.string(es.t["6b3ydG"]),
                description: es.intl.string(es.t["Y+IJyg"]),
                previewImage: eE.noLimits.thumbnail,
                videoUrl: eE.noLimits.assetUrl,
            },
            callOfDuty: {
                name: "callOfDuty",
                title: es.intl.string(Q.default.sB5V0c),
                description: es.intl.formatToPlainString(Q.default["RuZS+B"], { validDates: (0, O.a1)() }),
                previewImage: eE.callOfDuty.thumbnail,
                videoUrl: eE.callOfDuty.assetUrl,
                containerClassName: ea.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: es.intl.string(Q.default["9Rq7t1"]),
                        onClick: () =>
                            (0, C.A)({
                                subscriptionTier: z.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: r,
                            }),
                        icon: m.t,
                        iconPosition: "start",
                    },
                ],
            },
            threePPromotions: {
                name: "threePPromotions",
                title: ej ? es.intl.string(es.t.E4U4SS) : es.intl.string(ee.default.OlObRa),
                description: ej ? es.intl.string(es.t["B4uSy/"]) : es.intl.string(ee.default["8Gl8gP"]),
                descriptionCta: ej ? es.intl.string(es.t.RzWDqY) : es.intl.string(ee.default.HINTfJ),
                previewImage: eE.threePPromotions.thumbnail,
                videoUrl: eE.threePPromotions.assetUrl,
                onClick: () =>
                    (0, S.u)({
                        analyticsLocations: t,
                        partnerIds: [U.KS, U.Cs, U.XY, ...(ej ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: ej ? void 0 : es.intl.string(es.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ej ? e_ : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: es.intl.string(ei.default["ZFJ/NU"]),
                description: es.intl.string(ei.default.wMi514),
                descriptionCta: es.intl.string(es.t.hvVgAZ),
                onClick: () => {
                    window.open(I.A.getArticleURL($.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eE.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eE.orbRewards.assetUrl,
                badgeText: ej ? void 0 : es.intl.string(es.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: es.intl.string(es.t.Csf5Ol),
                description: es.intl.format(es.t["G5k+lZ"], { bonusOrbMultiplier: ev }),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                onClick: () => (0, j.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eE.orbMultiplier.thumbnail,
                videoUrl: eE.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: es.intl.string(es.t.Tzhw6e),
                description: es.intl.format(es.t.djzJx6, { bonusOrbMultiplier: ev }),
                descriptionCta: es.intl.string(es.t.RzWDqY),
                onClick: () => (0, j.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: ej ? void 0 : es.intl.string(es.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eE.combinedOrbs.thumbnail,
                videoUrl: eE.combinedOrbs.assetUrl,
            },
        };
    function eI(e) {
        let t = eN[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eT = (function (e) {
            let t = (0, G.A0)({ location: "bento_box" }),
                i = (0, K.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: s } = W.Ay.useConfig({ location: "bento_box" }),
                n = t ? eC.CALL_OF_DUTY : eC.THREE_P_PROMOTIONS,
                r = (0, Z.O9)(),
                a = (0, F.DK)(Y.W.NITRO, "useBentoBoxes"),
                l = a && e;
            return [
                ...(t || i || s ? [n] : []),
                ...(l ? [eC.COMBINED_ORBS] : []),
                ...(!l && e ? [eC.ORB_MULTIPLIER] : []),
                ...(r ? [eC.PREMIUM_GROUP] : []),
                ...(!l && a ? [eC.ORB_REWARDS] : []),
                eC.DISPLAY_NAME_STYLES,
                eC.CUSTOM_THEMES,
                eC.SERVER_PROFILES,
                eC.REFERRAL_PROGRAM,
            ];
        })(ex),
        eO = [],
        ew = e ? null : eT[0],
        eM = eT.slice(+!e, e ? 2 : 3);
    return (
        null != ew && eO.push([eI(ew)]),
        1 === eM.length ? eO.push([eI(eM[0])]) : 2 === eM.length && eO.push([eI(eM[0]), eI(eM[1])]),
        {
            whatsNewBoxes: [...eO],
            bestOfBoxes: [[eI("showYourStyle")], [eI("yourSpace")], [eI("emojis"), eI("noLimits")]],
        }
    );
};
