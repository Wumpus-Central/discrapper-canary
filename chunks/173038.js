(n.d(t, { A0: () => eP, NI: () => eT, Ay: () => eR, Tb: () => eC }), n(321073));
var i,
    a,
    r,
    s = n(477900),
    l = n(582128),
    o = n(492462),
    d = n(696292),
    c = n(17928),
    u = n(192308),
    m = n(403581),
    p = n(793574),
    b = n(688810),
    f = n(793943),
    g = n(259065),
    h = n(741231),
    x = n(325499),
    v = n(75678),
    _ = n(206835),
    C = n(192444),
    P = n(216934),
    T = n(591179),
    R = n(462463),
    A = n(780964),
    y = n(766075),
    E = n(166403),
    N = n(676279),
    j = n(975571),
    O = n(158045),
    I = n(789861),
    L = n(769623),
    U = n(920050),
    S = n(707922),
    M = n(852218),
    w = n(951780),
    k = n(398523),
    B = n(881373),
    D = n(503698),
    Y = n.n(D),
    G = n(907581),
    V = n(830370);
let H = l.forwardRef((e, t) => {
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
            className: Y()(n, V.k),
            children: (0, s.jsx)(G.C, { ref: i, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
H.displayName = "PremiumRewardsBentoBoxAsset";
var z = n(440005),
    K = n(26508),
    W = n(592909),
    F = n(989790),
    X = n(612413),
    $ = n(202541);
n(92737);
var q = n(88001),
    J = n(652215),
    Z = n(190107),
    Q = n(355097),
    ee = n(14429),
    et = n(810889),
    en = n(259589),
    ei = n(249755),
    ea = n(264865),
    er = n(375708),
    es = n(328157),
    el = n(763052),
    eo = n(428685),
    ed = n(505051),
    ec = n(817577);
let eu = "/assets/035ad0fba4997f3f.svg",
    em =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    ep =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    eb =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
    ef =
        "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp",
    eg =
        "https://cdn.discordapp.com/assets/content/e687daf063ffedbdc67b79a40f90aa610ea08116f2d3b0dcc83effb8bde97aea.webp";
var eh = n(576765),
    ex = n(88433),
    ev = n(909340),
    e_ = n(455482),
    eC = (((i = {}).CONTAINED = "contained"), (i.OVERLAY = "overlay"), i),
    eP = (((a = {}).SMALL = "small"), (a.MEDIUM = "medium"), (a.LARGE = "large"), a),
    eT =
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
        (r.YOUTUBE = "youtube"),
        r);
let eR = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, b.Ay)(p.A.PREMIUM_MARKETING_BENTO_BOX),
        i = (0, T.X)("useBentoBoxes"),
        a = (0, R.A)({ analyticsLocations: t }),
        r = (0, l.useCallback)(() => {
            (0, h.A)(J.BVt.NITRO_HOME, { search: (0, o.stringify)({ perk: U.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        D = (0, _.A)({ scrollPosition: Q._F.TRY_IT_OUT, analyticsLocations: t }),
        Y = (0, l.useCallback)(() => {
            (0, y.openUserSettings)(A.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, g.L)({ analyticsLocations: t }),
            );
        }, [t]),
        G = (0, l.useCallback)(() => {
            (0, v.A)({ subscriptionTier: $.pe.TIER_2, initialPlanId: $.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        V = (0, N.TM)(),
        eC = j.A.getArticleURL(J.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: eP, multiplier: eR } = (0, C.lk)(Z.rE.NITRO_HOME_MARKETING),
        eA = l.useRef(null),
        ey = (0, x.b)("bento_box"),
        eE = (function () {
            let { enabled: e } = k.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, B.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return l.useMemo(() => {
                let n = { [M.XY]: t, [M.KS]: e };
                return M.mY.filter((e) => n[e]);
            }, [e, t, void 0]);
        })(),
        eN = {
            premiumGroup: { thumbnail: ec, assetUrl: ec },
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
                thumbnail: eh.A,
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : ex.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: V
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: e_.A, assetUrl: ev.A },
            orbMultiplier: { thumbnail: eb, assetUrl: V ? em : ep },
            combinedOrbs: { thumbnail: eb, assetUrl: V ? em : ep },
            callOfDuty: { thumbnail: ef, assetUrl: ef },
            threePPromotions: { thumbnail: ey ? (0, s.jsx)(H, { ref: eA }) : eu, assetUrl: ey ? void 0 : eu },
            youtube: { thumbnail: eg, assetUrl: eg },
        },
        ej = (0, L.Y)({ location: "bento_box" }),
        eO = (0, S.A)(!ej),
        eI = (0, c.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        eL = null != eI && (0, O.Nc)(eI),
        eU = {
            serverProfiles: {
                name: "serverProfiles",
                title: er.intl.string(er.t.I9TYMg),
                description: er.intl.string(er.t.HMSHeH),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                onClick: i ? a : D,
                previewImage: eN.serverProfiles.thumbnail,
                videoUrl: eN.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: er.intl.string(er.t.tPY4o9),
                description: er.intl.format(er.t.jRPQUH, { learnMoreLink: eC }),
                previewImage: eN.referralProgram.thumbnail,
                videoUrl: eN.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: er.intl.string(es.default.XokIHM),
                description: er.intl.string(es.default["7esQMC"]),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eN.customThemes.thumbnail,
                onClick: () => {
                    (0, f.nf)(f.HP.CUSTOM_THEME);
                },
                videoUrl: eN.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: er.intl.string(el.default.ABtBDQ),
                description: er.intl.string(el.default.MFNXZh),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eN.displayNameStyles.thumbnail,
                onClick: i ? a : Y,
                videoUrl: eN.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: er.intl.formatToPlainString(en.default.VFEDDB, { premiumGroupProductName: (0, q.DP)() }),
                description:
                    ej && null != eO
                        ? er.intl.formatToPlainString(en.default.vmvhN5, { pricePerPerson: eO, totalMember: q.LM })
                        : er.intl.formatToPlainString(en.default.WudmR3, {
                              totalSeats: q.aw,
                              premiumGroupProductName: (0, q.DP)(),
                          }),
                previewImage: eN.premiumGroup.thumbnail,
                videoUrl: eN.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: er.intl.formatToPlainString(en.default.LwdrNi, { premiumGroupProductName: (0, q.DP)() }),
                        onClick: G,
                        icon: m.t,
                        iconPosition: "start",
                        disabled: eL,
                    },
                    {
                        variant: "secondary",
                        text: er.intl.string(er.t.hvVgAZ),
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    n.e("499709"),
                                    n.e("403370"),
                                    n.e("569595"),
                                ]).then(n.bind(n, 526710));
                                return (t) => (0, s.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: er.intl.string(er.t.Ij3Zmv),
                description: er.intl.string(er.t.UsOUxY),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eN.showYourStyle.thumbnail,
                onClick: i ? a : D,
                videoUrl: eN.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: er.intl.string(er.t.Wme3nX),
                description: er.intl.string(er.t["/aAIqV"]),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eN.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = n(766075);
                        e(A.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eN.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: er.intl.string(er.t.zY5PPb),
                description: er.intl.string(er.t.R5Xag2),
                previewImage: eN.emojis.thumbnail,
                videoUrl: eN.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: er.intl.string(er.t["6b3ydG"]),
                description: er.intl.string(er.t["Y+IJyg"]),
                previewImage: eN.noLimits.thumbnail,
                videoUrl: eN.noLimits.assetUrl,
            },
            callOfDuty: {
                name: "callOfDuty",
                title: er.intl.string(ee.default.sB5V0c),
                description: er.intl.formatToPlainString(ee.default["RuZS+B"], { validDates: (0, I.a1)() }),
                previewImage: eN.callOfDuty.thumbnail,
                videoUrl: eN.callOfDuty.assetUrl,
                containerClassName: ed.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: er.intl.string(ee.default["9Rq7t1"]),
                        onClick: () =>
                            (0, v.A)({
                                subscriptionTier: $.pe.TIER_2,
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
                title: ey ? er.intl.string(er.t.E4U4SS) : er.intl.string(et.default.OlObRa),
                description: ey ? er.intl.string(er.t["B4uSy/"]) : er.intl.string(et.default["8Gl8gP"]),
                descriptionCta: ey ? er.intl.string(er.t.RzWDqY) : er.intl.string(et.default.HINTfJ),
                previewImage: eN.threePPromotions.thumbnail,
                videoUrl: eN.threePPromotions.assetUrl,
                onClick: () =>
                    (0, w.P)({
                        analyticsLocations: t,
                        partnerIds: eE,
                        isLocked: !0,
                        showXboxCard: ey,
                        title: ey ? er.intl.string(er.t.NG1e6l) : er.intl.string(er.t["7ioAjs"]),
                        subtitle: ey
                            ? er.intl.format(eo.default.zS4GBR, { termsLink: j.A.getArticleURL(J.MVz.NITRO_2_POINT_0) })
                            : er.intl.format(er.t.LOYRxB, {
                                  helpCenterLink: j.A.getArticleURL(J.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: ey ? void 0 : er.intl.string(er.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ey ? eA : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: er.intl.string(ei.default["ZFJ/NU"]),
                description: er.intl.string(ei.default.wMi514),
                descriptionCta: er.intl.string(er.t.hvVgAZ),
                onClick: () => {
                    window.open(j.A.getArticleURL(J.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eN.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eN.orbRewards.assetUrl,
                badgeText: ey ? void 0 : er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: er.intl.string(er.t.Csf5Ol),
                description: er.intl.format(er.t["G5k+lZ"], { bonusOrbMultiplier: eR }),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                onClick: () => (0, P.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eN.orbMultiplier.thumbnail,
                videoUrl: eN.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: er.intl.string(er.t.Tzhw6e),
                description: er.intl.format(er.t.djzJx6, { bonusOrbMultiplier: eR }),
                descriptionCta: er.intl.string(er.t.RzWDqY),
                onClick: () => (0, P.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: ey ? void 0 : er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eN.combinedOrbs.thumbnail,
                videoUrl: eN.combinedOrbs.assetUrl,
            },
            youtube: {
                name: "youtube",
                title: er.intl.string(ea.default["1ADi0d"]),
                description: er.intl.format(ea.default.P5sLUo, {
                    helpCenterUrl: j.A.getArticleURL(J.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eN.youtube.thumbnail,
                videoUrl: eN.youtube.assetUrl,
                descriptionCta: er.intl.string(ea.default.VwLXyT),
                containerClassName: ed.youtubeGradient,
                onClick: () =>
                    (0, w.P)({
                        analyticsLocations: t,
                        partnerIds: [M.NC],
                        isLocked: !0,
                        title: er.intl.string(ea.default.TDZUui),
                        subtitle: er.intl.format(ea.default.BTLkvw, {
                            helpCenterUrl: j.A.getArticleURL(J.MVz.YOUTUBE_PROMOTION),
                        }),
                    }),
            },
        };
    function eS(e) {
        let t = eU[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eM = (function (e) {
            let t = (0, W.A0)({ location: "bento_box" }),
                n = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                i = (0, X.mh)({ location: "bento_box" }),
                { enabled: a } = k.A.useConfig({ location: "bento_box" }),
                r = t ? eT.CALL_OF_DUTY : eT.THREE_P_PROMOTIONS,
                s = (0, F.O9)(),
                l = (0, K.DK)(z.W.NITRO, "useBentoBoxes"),
                o = l && e;
            return [
                ...(i ? [eT.YOUTUBE] : []),
                ...(t || n || a ? [r] : []),
                ...(o ? [eT.COMBINED_ORBS] : []),
                ...(!o && e ? [eT.ORB_MULTIPLIER] : []),
                ...(s ? [eT.PREMIUM_GROUP] : []),
                ...(!o && l ? [eT.ORB_REWARDS] : []),
                eT.DISPLAY_NAME_STYLES,
                eT.CUSTOM_THEMES,
                eT.SERVER_PROFILES,
                eT.REFERRAL_PROGRAM,
            ];
        })(eP),
        ew = [],
        ek = e ? null : eM[0],
        eB = eM.slice(+!e, e ? 2 : 3);
    return (
        null != ek && ew.push([eS(ek)]),
        1 === eB.length ? ew.push([eS(eB[0])]) : 2 === eB.length && ew.push([eS(eB[0]), eS(eB[1])]),
        {
            whatsNewBoxes: [...ew],
            bestOfBoxes: [[eS("showYourStyle")], [eS("yourSpace")], [eS("emojis"), eS("noLimits")]],
        }
    );
};
