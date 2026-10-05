(n.d(t, { Tb: () => eN, A0: () => ex, Ay: () => eA }), n(321073));
var a,
    s,
    i = n(477900),
    r = n(582128),
    l = n(492462),
    c = n(696292),
    o = n(17928),
    d = n(403581),
    u = n(192308),
    m = n(793574),
    p = n(688810),
    b = n(793943),
    f = n(259065),
    _ = n(741231),
    E = n(325499),
    g = n(75678),
    h = n(206835),
    R = n(192444),
    N = n(216934),
    x = n(591179),
    A = n(462463),
    v = n(780964),
    I = n(766075),
    O = n(166403),
    P = n(676279),
    T = n(975571),
    C = n(158045),
    U = n(789861),
    S = n(769623),
    L = n(920050),
    M = n(707922),
    j = n(239016),
    y = n(398523),
    B = n(881373),
    w = n(852218),
    D = n(50949),
    k = n(713271),
    Y = n(503698),
    G = n.n(Y),
    V = n(907581),
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
            className: G()(n, H.k),
            children: (0, i.jsx)(V.C, { ref: a, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
F.displayName = "PremiumRewardsBentoBoxAsset";
var X = n(592909),
    W = n(989790),
    z = n(612413),
    K = n(202541);
n(92737);
var q = n(88001),
    J = n(652215),
    $ = n(190107),
    Z = n(355097),
    Q = n(310235),
    ee = n(334551),
    et = n(148155),
    en = n(1889),
    ea = n(762359),
    es = n(375708),
    ei = n(72191),
    er = n(701974),
    el = n(553875),
    ec = n(505051),
    eo = n(817577);
let ed = "/assets/035ad0fba4997f3f.svg",
    eu =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    em =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    ep =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var eb = n(112992);
let ef =
    "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var e_ = n(679502),
    eE = n(576765),
    eg = n(88433),
    eh = n(909340),
    eR = n(455482),
    eN = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    ex = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eA = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, p.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        a = (0, x.X)("useBentoBoxes"),
        s = (0, A.A)({ analyticsLocations: t }),
        Y = (0, r.useCallback)(() => {
            (0, _.A)(J.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: L.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        G = (0, r.useCallback)(() => {
            (0, _.A)(J.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: L.XBOX_PREMIUM_PERK_CARD_ID }) });
        }, []),
        V = (0, h.A)({ scrollPosition: Z._F.TRY_IT_OUT, analyticsLocations: t }),
        H = (0, r.useCallback)(() => {
            (0, I.openUserSettings)(v.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        eN = (0, r.useCallback)(() => {
            (0, g.A)({ subscriptionTier: K.pe.TIER_2, initialPlanId: K.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        ex = (0, P.TM)(),
        eA = T.A.getArticleURL(J.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ev, multiplier: eI } = (0, R.lk)($.rE.NITRO_HOME_MARKETING),
        eO = r.useRef(null),
        eP = (0, E.b)("bento_box"),
        eT = (function () {
            let { enabled: e } = y.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, B.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return r.useMemo(() => {
                let n = { [w.XY]: t, [w.KS]: e };
                return w.mY.filter((e) => n[e]);
            }, [e, t, void 0]);
        })(),
        eC = {
            premiumGroup: { thumbnail: eo, assetUrl: eo },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: eE.A,
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : eg.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eR.A, assetUrl: eh.A },
            orbMultiplier: { thumbnail: ep, assetUrl: ex ? eu : em },
            combinedOrbs: { thumbnail: ep, assetUrl: ex ? eu : em },
            callOfDuty: { thumbnail: ef, assetUrl: ef },
            threePPromotions: { thumbnail: eP ? (0, i.jsx)(F, { ref: eO }) : ed, assetUrl: eP ? void 0 : ed },
            youtube: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
            },
            xboxPartnerPass: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
            },
        },
        eU = (0, S.Y)({ location: "bento_box" }),
        eS = (0, M.A)(!eU),
        eL = (0, o.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        eM = null != eL && (0, C.Nc)(eL),
        ej = {
            [k.N.SERVER_PROFILES]: {
                name: k.N.SERVER_PROFILES,
                title: es.intl.string(es.t.I9TYMg),
                description: es.intl.string(es.t.HMSHeH),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                onClick: a ? s : V,
                previewImage: eC.serverProfiles.thumbnail,
                videoUrl: eC.serverProfiles.assetUrl,
            },
            [k.N.REFERRAL_PROGRAM]: {
                name: k.N.REFERRAL_PROGRAM,
                title: es.intl.string(es.t.tPY4o9),
                description: es.intl.format(es.t.jRPQUH, { learnMoreLink: eA }),
                previewImage: eC.referralProgram.thumbnail,
                videoUrl: eC.referralProgram.assetUrl,
            },
            [k.N.CUSTOM_THEMES]: {
                name: k.N.CUSTOM_THEMES,
                title: es.intl.string(ei.default.XokIHM),
                description: es.intl.string(ei.default["7esQMC"]),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                previewImage: eC.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: eC.customThemes.assetUrl,
            },
            [k.N.DISPLAY_NAME_STYLES]: {
                name: k.N.DISPLAY_NAME_STYLES,
                title: es.intl.string(er.default.ABtBDQ),
                description: es.intl.string(er.default.MFNXZh),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                previewImage: eC.displayNameStyles.thumbnail,
                onClick: a ? s : H,
                videoUrl: eC.displayNameStyles.assetUrl,
            },
            [k.N.PREMIUM_GROUP]: {
                name: k.N.PREMIUM_GROUP,
                title: es.intl.formatToPlainString(et.default.VFEDDB, { premiumGroupProductName: (0, q.DP)() }),
                description:
                    eU && null != eS
                        ? es.intl.formatToPlainString(et.default.vmvhN5, { pricePerPerson: eS, totalMember: q.LM })
                        : es.intl.formatToPlainString(et.default.WudmR3, {
                              totalSeats: q.aw,
                              premiumGroupProductName: (0, q.DP)(),
                          }),
                previewImage: eC.premiumGroup.thumbnail,
                videoUrl: eC.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: es.intl.formatToPlainString(et.default.LwdrNi, { premiumGroupProductName: (0, q.DP)() }),
                        onClick: eN,
                        icon: d.t,
                        iconPosition: "start",
                        disabled: eM,
                    },
                    {
                        variant: "secondary",
                        text: es.intl.string(es.t.hvVgAZ),
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
                badgeText: es.intl.string(es.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [k.N.SHOW_YOUR_STYLE]: {
                name: k.N.SHOW_YOUR_STYLE,
                title: es.intl.string(es.t.Ij3Zmv),
                description: es.intl.string(es.t.UsOUxY),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                previewImage: eC.showYourStyle.thumbnail,
                onClick: a ? s : V,
                videoUrl: eC.showYourStyle.assetUrl,
            },
            [k.N.YOUR_SPACE]: {
                name: k.N.YOUR_SPACE,
                title: es.intl.string(es.t.Wme3nX),
                description: es.intl.string(es.t["/aAIqV"]),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                previewImage: eC.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = n(766075);
                        e(v.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eC.yourSpace.assetUrl,
            },
            [k.N.EMOJIS]: {
                name: k.N.EMOJIS,
                title: es.intl.string(es.t.zY5PPb),
                description: es.intl.string(es.t.R5Xag2),
                previewImage: eC.emojis.thumbnail,
                videoUrl: eC.emojis.assetUrl,
            },
            [k.N.NO_LIMITS]: {
                name: k.N.NO_LIMITS,
                title: es.intl.string(es.t["6b3ydG"]),
                description: es.intl.string(es.t["Y+IJyg"]),
                previewImage: eC.noLimits.thumbnail,
                videoUrl: eC.noLimits.assetUrl,
            },
            [k.N.CALL_OF_DUTY]: {
                name: k.N.CALL_OF_DUTY,
                title: es.intl.string(Q.default.sB5V0c),
                description: es.intl.formatToPlainString(Q.default["RuZS+B"], { validDates: (0, U.a1)() }),
                previewImage: eC[k.N.CALL_OF_DUTY].thumbnail,
                videoUrl: eC[k.N.CALL_OF_DUTY].assetUrl,
                containerClassName: ec.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: es.intl.string(Q.default["9Rq7t1"]),
                        onClick: () =>
                            (0, g.A)({
                                subscriptionTier: K.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: Y,
                            }),
                        icon: d.t,
                        iconPosition: "start",
                    },
                ],
            },
            [k.N.THREE_P_PROMOTIONS]: {
                name: k.N.THREE_P_PROMOTIONS,
                title: eP ? es.intl.string(es.t.E4U4SS) : es.intl.string(ee.default.OlObRa),
                description: eP ? es.intl.string(es.t["B4uSy/"]) : es.intl.string(ee.default["8Gl8gP"]),
                descriptionCta: eP ? es.intl.string(es.t.RzWDqY) : es.intl.string(ee.default.HINTfJ),
                previewImage: eC[k.N.THREE_P_PROMOTIONS].thumbnail,
                videoUrl: eC[k.N.THREE_P_PROMOTIONS].assetUrl,
                onClick: () =>
                    (0, j.P)({
                        analyticsLocations: t,
                        partnerIds: eT,
                        isLocked: !0,
                        showXboxCard: eP,
                        title: eP ? es.intl.string(es.t.NG1e6l) : es.intl.string(es.t["7ioAjs"]),
                        subtitle: eP
                            ? es.intl.format(el.default.zS4GBR, { termsLink: T.A.getArticleURL(J.MVz.NITRO_2_POINT_0) })
                            : es.intl.format(es.t.LOYRxB, {
                                  helpCenterLink: T.A.getArticleURL(J.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: eP ? void 0 : es.intl.string(es.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eP ? eO : void 0,
            },
            [k.N.ORB_REWARDS]: {
                name: k.N.ORB_REWARDS,
                title: es.intl.string(en.default["ZFJ/NU"]),
                description: es.intl.string(en.default.wMi514),
                descriptionCta: es.intl.string(es.t.hvVgAZ),
                onClick: () => {
                    window.open(T.A.getArticleURL(J.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eC.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eC.orbRewards.assetUrl,
                badgeText: eP ? void 0 : es.intl.string(es.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [k.N.ORB_MULTIPLIER]: {
                name: k.N.ORB_MULTIPLIER,
                title: es.intl.string(es.t.Csf5Ol),
                description: es.intl.format(es.t["G5k+lZ"], { bonusOrbMultiplier: eI }),
                descriptionCta: es.intl.string(es.t.jVcuVY),
                onClick: () => (0, N.m)({ fromContent: c.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eC[k.N.ORB_MULTIPLIER].thumbnail,
                videoUrl: eC[k.N.ORB_MULTIPLIER].assetUrl,
            },
            [k.N.COMBINED_ORBS]: {
                name: k.N.COMBINED_ORBS,
                title: es.intl.string(es.t.Tzhw6e),
                description: es.intl.format(es.t.djzJx6, { bonusOrbMultiplier: eI }),
                descriptionCta: es.intl.string(es.t.RzWDqY),
                onClick: () => (0, N.m)({ fromContent: c.u.NITRO_HOME_PERK_CARD }),
                badgeText: eP ? void 0 : es.intl.string(es.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eC[k.N.COMBINED_ORBS].thumbnail,
                videoUrl: eC[k.N.COMBINED_ORBS].assetUrl,
            },
            [k.N.YOUTUBE]: {
                name: k.N.YOUTUBE,
                caption: (0, i.jsx)("img", { src: e_.A, alt: "YouTube Premium" }),
                title: es.intl.string(ea.default["BdIVB+"]),
                description: es.intl.format(ea.default["3jY5i3"], {
                    helpCenterUrl: T.A.getArticleURL(J.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eC[k.N.YOUTUBE].thumbnail,
                descriptionCta: es.intl.string(ea.default.VwLXyT),
                containerClassName: ec.youtubeGradient,
                onClick: () => (0, D.z)(t),
            },
            [k.N.XBOX_PARTNER_PASS]: {
                name: k.N.XBOX_PARTNER_PASS,
                caption: (0, i.jsx)("img", { src: eb.A, alt: "Xbox Game Pass" }),
                title: es.intl.string(el.default.IthhpG),
                description: es.intl.format(el.default.NKTF0a, {
                    helpCenterLink: T.A.getArticleURL(J.MVz.NITRO_2_POINT_0),
                }),
                previewImage: eC[k.N.XBOX_PARTNER_PASS].thumbnail,
                containerClassName: ec.xboxGradient,
                actions: [
                    {
                        variant: "secondary",
                        text: es.intl.string(es.t["2pG5Ga"]),
                        onClick: () =>
                            (0, g.A)({
                                subscriptionTier: K.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: G,
                            }),
                        icon: d.t,
                        iconPosition: "start",
                    },
                ],
            },
        };
    function ey(e) {
        let t = ej[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eB = (function (e) {
            let t = (0, X.A0)({ location: "bento_box" }),
                n = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                a = (0, z.mh)({ location: "bento_box" }),
                s = (0, E.b)("bento_box"),
                { enabled: i } = y.A.useConfig({ location: "bento_box" }),
                r = t ? k.N.CALL_OF_DUTY : k.N.THREE_P_PROMOTIONS,
                l = (0, W.O9)();
            return [
                ...(a ? [k.N.YOUTUBE] : []),
                ...(s && a ? [k.N.XBOX_PARTNER_PASS] : []),
                ...(t || n || i ? [r] : []),
                ...(e ? [k.N.COMBINED_ORBS] : []),
                ...(l ? [k.N.PREMIUM_GROUP] : []),
                ...(e ? [] : [k.N.ORB_REWARDS]),
                k.N.DISPLAY_NAME_STYLES,
                k.N.CUSTOM_THEMES,
                k.N.SERVER_PROFILES,
                k.N.REFERRAL_PROGRAM,
            ];
        })(ev),
        ew = [],
        eD = e ? null : eB[0],
        ek = eB.slice(+!e, e ? 2 : 3);
    return (
        null != eD && ew.push([ey(eD)]),
        1 === ek.length ? ew.push([ey(ek[0])]) : 2 === ek.length && ew.push([ey(ek[0]), ey(ek[1])]),
        {
            whatsNewBoxes: [...ew],
            bestOfBoxes: [[ey(k.N.SHOW_YOUR_STYLE)], [ey(k.N.YOUR_SPACE)], [ey(k.N.EMOJIS), ey(k.N.NO_LIMITS)]],
        }
    );
};
