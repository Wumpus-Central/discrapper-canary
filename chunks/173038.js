(n.d(t, { Tb: () => eA, A0: () => eO, Ay: () => ex }), n(321073));
var a,
    s,
    i = n(477900),
    r = n(582128),
    l = n(492462),
    o = n(696292),
    c = n(17928),
    d = n(403581),
    u = n(192308),
    m = n(793574),
    p = n(688810),
    b = n(793943),
    f = n(259065),
    _ = n(741231),
    g = n(325499),
    E = n(75678),
    h = n(206835),
    R = n(192444),
    N = n(216934),
    A = n(591179),
    O = n(462463),
    x = n(780964),
    I = n(766075),
    U = n(166403),
    v = n(676279),
    T = n(975571),
    P = n(158045),
    C = n(789861),
    S = n(769623),
    L = n(920050),
    M = n(707922),
    y = n(239016),
    j = n(398523),
    B = n(881373),
    w = n(852218),
    D = n(50949),
    Y = n(713271),
    k = n(503698),
    V = n.n(k),
    G = n(907581),
    H = n(830370);
let F = r.forwardRef((e, t) => {
    let { className: n } = e,
        a = r.useRef(null);
    return (
        r.useImperativeHandle(t, () => ({
            play: () => {
                a.current?.play();
            },
            pause: () => a.current?.pause(),
        })),
        (0, i.jsx)("div", {
            className: V()(n, H.k),
            children: (0, i.jsx)(G.C, { ref: a, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
F.displayName = "PremiumRewardsBentoBoxAsset";
var W = n(440005),
    z = n(17843),
    K = n(592909),
    X = n(989790),
    J = n(612413),
    q = n(202541);
n(92737);
var $ = n(88001),
    Z = n(652215),
    Q = n(190107),
    ee = n(355097),
    et = n(14429),
    en = n(810889),
    ea = n(259589),
    es = n(249755),
    ei = n(264865),
    er = n(375708),
    el = n(328157),
    eo = n(763052),
    ec = n(428685),
    ed = n(505051),
    eu = n(817577);
let em = "/assets/035ad0fba4997f3f.svg",
    ep =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    eb =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    ef =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
    e_ =
        "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp",
    eg =
        "https://cdn.discordapp.com/assets/content/e687daf063ffedbdc67b79a40f90aa610ea08116f2d3b0dcc83effb8bde97aea.webp";
var eE = n(576765),
    eh = n(88433),
    eR = n(909340),
    eN = n(455482),
    eA = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    eO = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let ex = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, p.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        a = (0, A.X)("useBentoBoxes"),
        s = (0, O.A)({ analyticsLocations: t }),
        k = (0, r.useCallback)(() => {
            (0, _.A)(Z.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: L.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        V = (0, h.A)({ scrollPosition: ee._F.TRY_IT_OUT, analyticsLocations: t }),
        G = (0, r.useCallback)(() => {
            (0, I.openUserSettings)(x.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        H = (0, r.useCallback)(() => {
            (0, E.A)({ subscriptionTier: q.pe.TIER_2, initialPlanId: q.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        eA = (0, v.TM)(),
        eO = T.A.getArticleURL(Z.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ex, multiplier: eI } = (0, R.lk)(Q.rE.NITRO_HOME_MARKETING),
        eU = r.useRef(null),
        ev = (0, g.b)("bento_box"),
        eT = (function () {
            let { enabled: e } = j.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, B.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return r.useMemo(() => {
                let n = { [w.XY]: t, [w.KS]: e };
                return w.mY.filter((e) => n[e]);
            }, [e, t, void 0]);
        })(),
        eP = {
            premiumGroup: { thumbnail: eu, assetUrl: eu },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: eE.A,
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : eh.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eN.A, assetUrl: eR.A },
            orbMultiplier: { thumbnail: ef, assetUrl: eA ? ep : eb },
            combinedOrbs: { thumbnail: ef, assetUrl: eA ? ep : eb },
            callOfDuty: { thumbnail: e_, assetUrl: e_ },
            threePPromotions: { thumbnail: ev ? (0, i.jsx)(F, { ref: eU }) : em, assetUrl: ev ? void 0 : em },
            youtube: { thumbnail: eg, assetUrl: eg },
        },
        eC = (0, S.Y)({ location: "bento_box" }),
        eS = (0, M.A)(!eC),
        eL = (0, c.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
        eM = null != eL && (0, P.Nc)(eL),
        ey = {
            [Y.N.SERVER_PROFILES]: {
                name: Y.N.SERVER_PROFILES,
                title: er.intl.string(er.t.I9TYMg),
                description: er.intl.string(er.t.HMSHeH),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                onClick: a ? s : V,
                previewImage: eP.serverProfiles.thumbnail,
                videoUrl: eP.serverProfiles.assetUrl,
            },
            [Y.N.REFERRAL_PROGRAM]: {
                name: Y.N.REFERRAL_PROGRAM,
                title: er.intl.string(er.t.tPY4o9),
                description: er.intl.format(er.t.jRPQUH, { learnMoreLink: eO }),
                previewImage: eP.referralProgram.thumbnail,
                videoUrl: eP.referralProgram.assetUrl,
            },
            [Y.N.CUSTOM_THEMES]: {
                name: Y.N.CUSTOM_THEMES,
                title: er.intl.string(el.default.XokIHM),
                description: er.intl.string(el.default["7esQMC"]),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eP.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: eP.customThemes.assetUrl,
            },
            [Y.N.DISPLAY_NAME_STYLES]: {
                name: Y.N.DISPLAY_NAME_STYLES,
                title: er.intl.string(eo.default.ABtBDQ),
                description: er.intl.string(eo.default.MFNXZh),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eP.displayNameStyles.thumbnail,
                onClick: a ? s : G,
                videoUrl: eP.displayNameStyles.assetUrl,
            },
            [Y.N.PREMIUM_GROUP]: {
                name: Y.N.PREMIUM_GROUP,
                title: er.intl.formatToPlainString(ea.default.VFEDDB, { premiumGroupProductName: (0, $.DP)() }),
                description:
                    eC && null != eS
                        ? er.intl.formatToPlainString(ea.default.vmvhN5, { pricePerPerson: eS, totalMember: $.LM })
                        : er.intl.formatToPlainString(ea.default.WudmR3, {
                              totalSeats: $.aw,
                              premiumGroupProductName: (0, $.DP)(),
                          }),
                previewImage: eP.premiumGroup.thumbnail,
                videoUrl: eP.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: er.intl.formatToPlainString(ea.default.LwdrNi, { premiumGroupProductName: (0, $.DP)() }),
                        onClick: H,
                        icon: d.t,
                        iconPosition: "start",
                        disabled: eM,
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
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.SHOW_YOUR_STYLE]: {
                name: Y.N.SHOW_YOUR_STYLE,
                title: er.intl.string(er.t.Ij3Zmv),
                description: er.intl.string(er.t.UsOUxY),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eP.showYourStyle.thumbnail,
                onClick: a ? s : V,
                videoUrl: eP.showYourStyle.assetUrl,
            },
            [Y.N.YOUR_SPACE]: {
                name: Y.N.YOUR_SPACE,
                title: er.intl.string(er.t.Wme3nX),
                description: er.intl.string(er.t["/aAIqV"]),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eP.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = n(766075);
                        e(x.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eP.yourSpace.assetUrl,
            },
            [Y.N.EMOJIS]: {
                name: Y.N.EMOJIS,
                title: er.intl.string(er.t.zY5PPb),
                description: er.intl.string(er.t.R5Xag2),
                previewImage: eP.emojis.thumbnail,
                videoUrl: eP.emojis.assetUrl,
            },
            [Y.N.NO_LIMITS]: {
                name: Y.N.NO_LIMITS,
                title: er.intl.string(er.t["6b3ydG"]),
                description: er.intl.string(er.t["Y+IJyg"]),
                previewImage: eP.noLimits.thumbnail,
                videoUrl: eP.noLimits.assetUrl,
            },
            [Y.N.CALL_OF_DUTY]: {
                name: Y.N.CALL_OF_DUTY,
                title: er.intl.string(et.default.sB5V0c),
                description: er.intl.formatToPlainString(et.default["RuZS+B"], { validDates: (0, C.a1)() }),
                previewImage: eP[Y.N.CALL_OF_DUTY].thumbnail,
                videoUrl: eP[Y.N.CALL_OF_DUTY].assetUrl,
                containerClassName: ed.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: er.intl.string(et.default["9Rq7t1"]),
                        onClick: () =>
                            (0, E.A)({
                                subscriptionTier: q.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: k,
                            }),
                        icon: d.t,
                        iconPosition: "start",
                    },
                ],
            },
            [Y.N.THREE_P_PROMOTIONS]: {
                name: Y.N.THREE_P_PROMOTIONS,
                title: ev ? er.intl.string(er.t.E4U4SS) : er.intl.string(en.default.OlObRa),
                description: ev ? er.intl.string(er.t["B4uSy/"]) : er.intl.string(en.default["8Gl8gP"]),
                descriptionCta: ev ? er.intl.string(er.t.RzWDqY) : er.intl.string(en.default.HINTfJ),
                previewImage: eP[Y.N.THREE_P_PROMOTIONS].thumbnail,
                videoUrl: eP[Y.N.THREE_P_PROMOTIONS].assetUrl,
                onClick: () =>
                    (0, y.P)({
                        analyticsLocations: t,
                        partnerIds: eT,
                        isLocked: !0,
                        showXboxCard: ev,
                        title: ev ? er.intl.string(er.t.NG1e6l) : er.intl.string(er.t["7ioAjs"]),
                        subtitle: ev
                            ? er.intl.format(ec.default.zS4GBR, { termsLink: T.A.getArticleURL(Z.MVz.NITRO_2_POINT_0) })
                            : er.intl.format(er.t.LOYRxB, {
                                  helpCenterLink: T.A.getArticleURL(Z.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: ev ? void 0 : er.intl.string(er.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ev ? eU : void 0,
            },
            [Y.N.ORB_REWARDS]: {
                name: Y.N.ORB_REWARDS,
                title: er.intl.string(es.default["ZFJ/NU"]),
                description: er.intl.string(es.default.wMi514),
                descriptionCta: er.intl.string(er.t.hvVgAZ),
                onClick: () => {
                    window.open(T.A.getArticleURL(Z.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eP.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eP.orbRewards.assetUrl,
                badgeText: ev ? void 0 : er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.ORB_MULTIPLIER]: {
                name: Y.N.ORB_MULTIPLIER,
                title: er.intl.string(er.t.Csf5Ol),
                description: er.intl.format(er.t["G5k+lZ"], { bonusOrbMultiplier: eI }),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                onClick: () => (0, N.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eP[Y.N.ORB_MULTIPLIER].thumbnail,
                videoUrl: eP[Y.N.ORB_MULTIPLIER].assetUrl,
            },
            [Y.N.COMBINED_ORBS]: {
                name: Y.N.COMBINED_ORBS,
                title: er.intl.string(er.t.Tzhw6e),
                description: er.intl.format(er.t.djzJx6, { bonusOrbMultiplier: eI }),
                descriptionCta: er.intl.string(er.t.RzWDqY),
                onClick: () => (0, N.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeText: ev ? void 0 : er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eP[Y.N.COMBINED_ORBS].thumbnail,
                videoUrl: eP[Y.N.COMBINED_ORBS].assetUrl,
            },
            [Y.N.YOUTUBE]: {
                name: Y.N.YOUTUBE,
                title: er.intl.string(ei.default["1ADi0d"]),
                description: er.intl.format(ei.default.P5sLUo, {
                    helpCenterUrl: T.A.getArticleURL(Z.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eP[Y.N.YOUTUBE].thumbnail,
                videoUrl: eP[Y.N.YOUTUBE].assetUrl,
                descriptionCta: er.intl.string(ei.default.VwLXyT),
                containerClassName: ed.youtubeGradient,
                onClick: () => (0, D.z)(t),
            },
        };
    function ej(e) {
        let t = ey[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eB = (function (e) {
            let t = (0, K.A0)({ location: "bento_box" }),
                n = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                a = (0, J.mh)({ location: "bento_box" }),
                { enabled: s } = j.A.useConfig({ location: "bento_box" }),
                i = t ? Y.N.CALL_OF_DUTY : Y.N.THREE_P_PROMOTIONS,
                r = (0, X.O9)(),
                l = (0, z.DK)(W.W.NITRO, "useBentoBoxes"),
                o = l && e;
            return [
                ...(a ? [Y.N.YOUTUBE] : []),
                ...(t || n || s ? [i] : []),
                ...(o ? [Y.N.COMBINED_ORBS] : []),
                ...(!o && e ? [Y.N.ORB_MULTIPLIER] : []),
                ...(r ? [Y.N.PREMIUM_GROUP] : []),
                ...(!o && l ? [Y.N.ORB_REWARDS] : []),
                Y.N.DISPLAY_NAME_STYLES,
                Y.N.CUSTOM_THEMES,
                Y.N.SERVER_PROFILES,
                Y.N.REFERRAL_PROGRAM,
            ];
        })(ex),
        ew = [],
        eD = e ? null : eB[0],
        eY = eB.slice(+!e, e ? 2 : 3);
    return (
        null != eD && ew.push([ej(eD)]),
        1 === eY.length ? ew.push([ej(eY[0])]) : 2 === eY.length && ew.push([ej(eY[0]), ej(eY[1])]),
        {
            whatsNewBoxes: [...ew],
            bestOfBoxes: [[ej(Y.N.SHOW_YOUR_STYLE)], [ej(Y.N.YOUR_SPACE)], [ej(Y.N.EMOJIS), ej(Y.N.NO_LIMITS)]],
        }
    );
};
