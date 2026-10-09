(a.d(t, { Tb: () => e_, A0: () => eA, Ay: () => ev }), a(321073));
var n,
    s,
    i = a(477900),
    r = a(582128),
    l = a(492462),
    c = a(696292),
    d = a(17928),
    o = a(403581),
    u = a(192308),
    m = a(793574),
    p = a(688810),
    b = a(793943),
    f = a(259065),
    h = a(741231),
    g = a(325499),
    R = a(75678),
    E = a(206835),
    x = a(192444),
    N = a(216934),
    _ = a(591179),
    A = a(462463),
    v = a(780964),
    O = a(766075),
    I = a(166403),
    P = a(676279),
    C = a(975571),
    T = a(158045),
    U = a(789861),
    M = a(769623),
    S = a(920050),
    j = a(707922),
    L = a(261995),
    y = a(164832),
    B = a(398523),
    D = a(881373),
    k = a(852218),
    w = a(50949),
    Y = a(713271),
    V = a(503698),
    G = a.n(V),
    H = a(907581),
    X = a(830370);
function F(e) {
    let { className: t, ref: a } = e,
        n = r.useRef(null);
    return (
        r.useImperativeHandle(a, () => ({
            play: () => {
                n.current?.play();
            },
            pause: () => n.current?.pause(),
        })),
        (0, i.jsx)("div", {
            className: G()(t, X.k),
            children: (0, i.jsx)(H.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
F.displayName = "PremiumRewardsBentoBoxAsset";
var W = a(592909),
    z = a(989790),
    K = a(612413),
    q = a(202541);
a(92737);
var $ = a(88001),
    J = a(652215),
    Z = a(190107),
    Q = a(355097),
    ee = a(310235),
    et = a(334551),
    ea = a(148155),
    en = a(1889),
    es = a(762359),
    ei = a(660183),
    er = a(72191),
    el = a(701974),
    ec = a(553875),
    ed = a(505051),
    eo = a(817577);
let eu = "/assets/035ad0fba4997f3f.svg",
    em =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    ep =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    eb =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var ef = a(112992);
let eh =
    "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var eg = a(679502),
    eR = a(576765),
    eE = a(88433),
    ex = a(909340),
    eN = a(455482),
    e_ = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    eA = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let ev = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, p.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, _.X)("useBentoBoxes"),
        s = (0, A.A)({ analyticsLocations: t }),
        V = (0, r.useCallback)(() => {
            (0, h.A)(J.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: S.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        G = (0, r.useCallback)(() => {
            (0, h.A)(J.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: S.XBOX_PREMIUM_PERK_CARD_ID }) });
        }, []),
        H = (0, E.A)({ scrollPosition: Q._F.TRY_IT_OUT, analyticsLocations: t }),
        X = (0, r.useCallback)(() => {
            (0, O.openUserSettings)(v.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        e_ = (0, r.useCallback)(() => {
            (0, R.A)({ subscriptionTier: q.pe.TIER_2, initialPlanId: q.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        eA = (0, P.TM)(),
        ev = C.A.getArticleURL(J.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: eO, multiplier: eI } = (0, x.lk)(Z.rE.NITRO_HOME_MARKETING),
        eP = r.useRef(null),
        eC = (0, g.b)("bento_box"),
        eT = (function () {
            let { enabled: e } = B.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, D.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return r.useMemo(() => {
                let a = { [k.XY]: t, [k.KS]: e };
                return k.mY.filter((e) => a[e]);
            }, [e, t, void 0]);
        })(),
        eU = {
            premiumGroup: { thumbnail: eo, assetUrl: eo },
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
                thumbnail: eR.A,
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : eE.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: eA
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eN.A, assetUrl: ex.A },
            orbMultiplier: { thumbnail: eb, assetUrl: eA ? em : ep },
            combinedOrbs: { thumbnail: eb, assetUrl: eA ? em : ep },
            callOfDuty: { thumbnail: eh, assetUrl: eh },
            threePPromotions: { thumbnail: eC ? (0, i.jsx)(F, { ref: eP }) : eu, assetUrl: eC ? void 0 : eu },
            youtube: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
            },
            xboxPartnerPass: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
            },
        },
        eM = (0, M.Y)({ location: "bento_box" }),
        eS = (0, j.A)(!eM),
        ej = (0, d.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        eL = null != ej && (0, T.Nc)(ej),
        ey = (0, L.uq)({ location: "bento_box" }),
        eB = {
            [Y.N.MACARON]: null != ey ? ey : void 0,
            [Y.N.SERVER_PROFILES]: {
                name: Y.N.SERVER_PROFILES,
                title: ei.intl.string(ei.t.I9TYMg),
                description: ei.intl.string(ei.t.HMSHeH),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                onClick: n ? s : H,
                previewImage: eU.serverProfiles.thumbnail,
                videoUrl: eU.serverProfiles.assetUrl,
            },
            [Y.N.REFERRAL_PROGRAM]: {
                name: Y.N.REFERRAL_PROGRAM,
                title: ei.intl.string(ei.t.tPY4o9),
                description: ei.intl.format(ei.t.jRPQUH, { learnMoreLink: ev }),
                previewImage: eU.referralProgram.thumbnail,
                videoUrl: eU.referralProgram.assetUrl,
            },
            [Y.N.CUSTOM_THEMES]: {
                name: Y.N.CUSTOM_THEMES,
                title: ei.intl.string(er.default.XokIHM),
                description: ei.intl.string(er.default["7esQMC"]),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                previewImage: eU.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: eU.customThemes.assetUrl,
            },
            [Y.N.DISPLAY_NAME_STYLES]: {
                name: Y.N.DISPLAY_NAME_STYLES,
                title: ei.intl.string(el.default.ABtBDQ),
                description: ei.intl.string(el.default.MFNXZh),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                previewImage: eU.displayNameStyles.thumbnail,
                onClick: n ? s : X,
                videoUrl: eU.displayNameStyles.assetUrl,
            },
            [Y.N.PREMIUM_GROUP]: {
                name: Y.N.PREMIUM_GROUP,
                title: ei.intl.formatToPlainString(ea.default.VFEDDB, { premiumGroupProductName: (0, $.DP)() }),
                description:
                    eM && null != eS
                        ? ei.intl.formatToPlainString(ea.default.vmvhN5, { pricePerPerson: eS, totalMember: $.LM })
                        : ei.intl.formatToPlainString(ea.default.WudmR3, {
                              totalSeats: $.aw,
                              premiumGroupProductName: (0, $.DP)(),
                          }),
                previewImage: eU.premiumGroup.thumbnail,
                videoUrl: eU.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: ei.intl.formatToPlainString(ea.default.LwdrNi, { premiumGroupProductName: (0, $.DP)() }),
                        onClick: e_,
                        icon: o.t,
                        iconPosition: "start",
                        disabled: eL,
                    },
                    {
                        variant: "secondary",
                        text: ei.intl.string(ei.t.hvVgAZ),
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                    a.e("499709"),
                                    a.e("403370"),
                                    a.e("569595"),
                                ]).then(a.bind(a, 526710));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: ei.intl.string(ei.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.SHOW_YOUR_STYLE]: {
                name: Y.N.SHOW_YOUR_STYLE,
                title: ei.intl.string(ei.t.Ij3Zmv),
                description: ei.intl.string(ei.t.UsOUxY),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                previewImage: eU.showYourStyle.thumbnail,
                onClick: n ? s : H,
                videoUrl: eU.showYourStyle.assetUrl,
            },
            [Y.N.YOUR_SPACE]: {
                name: Y.N.YOUR_SPACE,
                title: ei.intl.string(ei.t.Wme3nX),
                description: ei.intl.string(ei.t["/aAIqV"]),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                previewImage: eU.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = a(766075);
                        e(v.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eU.yourSpace.assetUrl,
            },
            [Y.N.EMOJIS]: {
                name: Y.N.EMOJIS,
                title: ei.intl.string(ei.t.zY5PPb),
                description: ei.intl.string(ei.t.R5Xag2),
                previewImage: eU.emojis.thumbnail,
                videoUrl: eU.emojis.assetUrl,
            },
            [Y.N.NO_LIMITS]: {
                name: Y.N.NO_LIMITS,
                title: ei.intl.string(ei.t["6b3ydG"]),
                description: ei.intl.string(ei.t["Y+IJyg"]),
                previewImage: eU.noLimits.thumbnail,
                videoUrl: eU.noLimits.assetUrl,
            },
            [Y.N.CALL_OF_DUTY]: {
                name: Y.N.CALL_OF_DUTY,
                title: ei.intl.string(ee.default.sB5V0c),
                description: ei.intl.formatToPlainString(ee.default["RuZS+B"], { validDates: (0, U.a1)() }),
                previewImage: eU[Y.N.CALL_OF_DUTY].thumbnail,
                videoUrl: eU[Y.N.CALL_OF_DUTY].assetUrl,
                containerClassName: ed.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: ei.intl.string(ee.default["9Rq7t1"]),
                        onClick: () =>
                            (0, R.A)({
                                subscriptionTier: q.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: V,
                            }),
                        icon: o.t,
                        iconPosition: "start",
                    },
                ],
            },
            [Y.N.THREE_P_PROMOTIONS]: {
                name: Y.N.THREE_P_PROMOTIONS,
                title: eC ? ei.intl.string(ei.t.E4U4SS) : ei.intl.string(et.default.OlObRa),
                description: eC ? ei.intl.string(ei.t["B4uSy/"]) : ei.intl.string(et.default["8Gl8gP"]),
                descriptionCta: eC ? ei.intl.string(ei.t.RzWDqY) : ei.intl.string(et.default.HINTfJ),
                previewImage: eU[Y.N.THREE_P_PROMOTIONS].thumbnail,
                videoUrl: eU[Y.N.THREE_P_PROMOTIONS].assetUrl,
                onClick: () =>
                    (0, y.P)({
                        analyticsLocations: t,
                        partnerIds: eT,
                        isLocked: !0,
                        showXboxCard: eC,
                        title: eC ? ei.intl.string(ei.t.NG1e6l) : ei.intl.string(ei.t["7ioAjs"]),
                        subtitle: eC
                            ? ei.intl.format(ec.default.zS4GBR, { termsLink: C.A.getArticleURL(J.MVz.NITRO_2_POINT_0) })
                            : ei.intl.format(ei.t.LOYRxB, {
                                  helpCenterLink: C.A.getArticleURL(J.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: eC ? void 0 : ei.intl.string(ei.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eC ? eP : void 0,
            },
            [Y.N.ORB_REWARDS]: {
                name: Y.N.ORB_REWARDS,
                title: ei.intl.string(en.default["ZFJ/NU"]),
                description: ei.intl.string(en.default.wMi514),
                descriptionCta: ei.intl.string(ei.t.hvVgAZ),
                onClick: () => {
                    window.open(C.A.getArticleURL(J.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eU.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eU.orbRewards.assetUrl,
                badgeText: eC ? void 0 : ei.intl.string(ei.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.ORB_MULTIPLIER]: {
                name: Y.N.ORB_MULTIPLIER,
                title: ei.intl.string(ei.t.Csf5Ol),
                description: ei.intl.format(ei.t["G5k+lZ"], { bonusOrbMultiplier: eI }),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                onClick: () => (0, N.m)({ fromContent: c.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eU[Y.N.ORB_MULTIPLIER].thumbnail,
                videoUrl: eU[Y.N.ORB_MULTIPLIER].assetUrl,
            },
            [Y.N.COMBINED_ORBS]: {
                name: Y.N.COMBINED_ORBS,
                title: ei.intl.string(ei.t.Tzhw6e),
                description: ei.intl.format(ei.t.djzJx6, { bonusOrbMultiplier: eI }),
                descriptionCta: ei.intl.string(ei.t.RzWDqY),
                onClick: () => (0, N.m)({ fromContent: c.u.NITRO_HOME_PERK_CARD }),
                badgeText: eC ? void 0 : ei.intl.string(ei.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eU[Y.N.COMBINED_ORBS].thumbnail,
                videoUrl: eU[Y.N.COMBINED_ORBS].assetUrl,
            },
            [Y.N.YOUTUBE]: {
                name: Y.N.YOUTUBE,
                caption: (0, i.jsx)("img", { src: eg.A, alt: "YouTube Premium" }),
                title: ei.intl.string(es.default["BdIVB+"]),
                description: ei.intl.format(es.default["3jY5i3"], {
                    helpCenterUrl: C.A.getArticleURL(J.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eU[Y.N.YOUTUBE].thumbnail,
                descriptionCta: ei.intl.string(es.default.VwLXyT),
                containerClassName: ed.youtubeGradient,
                onClick: () => (0, w.z)(t),
            },
            [Y.N.XBOX_PARTNER_PASS]: {
                name: Y.N.XBOX_PARTNER_PASS,
                caption: (0, i.jsx)("img", { src: ef.A, alt: "Xbox Game Pass" }),
                title: ei.intl.string(ec.default.IthhpG),
                description: ei.intl.format(ec.default.NKTF0a, {
                    helpCenterLink: C.A.getArticleURL(J.MVz.NITRO_2_POINT_0),
                }),
                previewImage: eU[Y.N.XBOX_PARTNER_PASS].thumbnail,
                containerClassName: ed.xboxGradient,
                actions: [
                    {
                        variant: "secondary",
                        text: ei.intl.string(ei.t["2pG5Ga"]),
                        onClick: () =>
                            (0, R.A)({
                                subscriptionTier: q.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: G,
                            }),
                        icon: o.t,
                        iconPosition: "start",
                    },
                ],
            },
        };
    function eD(e) {
        let t = eB[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let ek = (function (e) {
            let t,
                a = (0, W.A0)({ location: "bento_box" }),
                n = (0, D.YS)({ location: "bento_box" }).functionalityEnabled,
                s = (0, K.mh)({ location: "bento_box" }),
                i = (0, g.b)("bento_box"),
                { enabled: r } = B.A.useConfig({ location: "bento_box" }),
                { enabled: l } = (0, L.vc)({ location: "bento_box" });
            t = a ? Y.N.CALL_OF_DUTY : Y.N.THREE_P_PROMOTIONS;
            let c = (0, z.O9)();
            return [
                ...(l ? [Y.N.MACARON] : []),
                ...(s ? [Y.N.YOUTUBE] : []),
                ...(i && (s || l) ? [Y.N.XBOX_PARTNER_PASS] : []),
                ...(a || n || r ? [t] : []),
                ...(e ? [Y.N.COMBINED_ORBS] : []),
                ...(c ? [Y.N.PREMIUM_GROUP] : []),
                ...(e ? [] : [Y.N.ORB_REWARDS]),
                Y.N.DISPLAY_NAME_STYLES,
                Y.N.CUSTOM_THEMES,
                Y.N.SERVER_PROFILES,
                Y.N.REFERRAL_PROGRAM,
            ];
        })(eO),
        ew = [],
        eY = e ? null : ek[0],
        eV = ek.slice(+!e, e ? 2 : 3);
    return (
        null != eY && ew.push([eD(eY)]),
        1 === eV.length ? ew.push([eD(eV[0])]) : 2 === eV.length && ew.push([eD(eV[0]), eD(eV[1])]),
        {
            whatsNewBoxes: [...ew],
            bestOfBoxes: [[eD(Y.N.SHOW_YOUR_STYLE)], [eD(Y.N.YOUR_SPACE)], [eD(Y.N.EMOJIS), eD(Y.N.NO_LIMITS)]],
        }
    );
};
