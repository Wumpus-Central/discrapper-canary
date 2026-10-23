(n.d(t, { Tb: () => ex, A0: () => eE, Ay: () => eA }), n(321073));
var a,
    s,
    i = n(477900),
    r = n(582128),
    l = n(492462),
    d = n(696292),
    c = n(17928),
    o = n(403581),
    u = n(192308),
    m = n(793574),
    b = n(688810),
    p = n(793943),
    f = n(259065),
    h = n(741231),
    g = n(325499),
    N = n(75678),
    R = n(206835),
    x = n(192444),
    E = n(216934),
    _ = n(591179),
    A = n(462463),
    v = n(780964),
    O = n(766075),
    P = n(166403),
    I = n(676279),
    C = n(975571),
    U = n(927578),
    T = n(769623),
    M = n(920050),
    S = n(707922),
    j = n(52530),
    L = n(261995),
    y = n(164832),
    B = n(398523),
    w = n(881373),
    k = n(852218),
    Y = n(50949),
    D = n(713271),
    V = n(503698),
    G = n.n(V),
    H = n(907581),
    X = n(830370);
function W(e) {
    let { className: t, ref: n } = e,
        a = r.useRef(null);
    return (
        r.useImperativeHandle(n, () => ({
            play: () => {
                a.current?.play();
            },
            pause: () => a.current?.pause(),
        })),
        (0, i.jsx)("div", {
            className: G()(t, X.k),
            children: (0, i.jsx)(H.C, { ref: a, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
W.displayName = "PremiumRewardsBentoBoxAsset";
var z = n(989790),
    F = n(886205),
    K = n(612413),
    q = n(202541);
n(92737);
var $ = n(88001),
    J = n(652215),
    Z = n(190107),
    Q = n(355097),
    ee = n(334551),
    et = n(148155),
    en = n(1889),
    ea = n(762359),
    es = n(105292),
    ei = n(72191),
    er = n(701974),
    el = n(553875),
    ed = n(505051),
    ec = n(817577);
let eo = "/assets/035ad0fba4997f3f.svg",
    eu =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    em =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    eb =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var ep = n(112992),
    ef = n(679502),
    eh = n(576765),
    eg = n(88433),
    eN = n(909340),
    eR = n(455482),
    ex = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    eE = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let e_ = new Set([D.N.MACARON, D.N.YOUTUBE, D.N.XBOX_PARTNER_PASS, D.N.CODE_BLURPLE, D.N.THREE_P_PROMOTIONS]),
    eA = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { analyticsLocations: t } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
            a = (0, _.X)("useBentoBoxes"),
            s = (0, A.A)({ analyticsLocations: t }),
            V = (0, r.useCallback)(() => {
                (0, h.A)(J.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: M.XBOX_PREMIUM_PERK_CARD_ID }) });
            }, []),
            G = (0, R.A)({ scrollPosition: Q._F.TRY_IT_OUT, analyticsLocations: t }),
            H = (0, r.useCallback)(() => {
                (0, O.openUserSettings)(v.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                    (0, f.L)({ analyticsLocations: t }),
                );
            }, [t]),
            X = (0, r.useCallback)(() => {
                (0, N.A)({
                    subscriptionTier: q.pe.TIER_2,
                    initialPlanId: q.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: t,
                });
            }, [t]),
            ex = (0, I.TM)(),
            eE = C.A.getArticleURL(J.MVz.REFERRAL_PROGRAM),
            { shouldShowBonusOrbsUX: eA, multiplier: ev } = (0, x.lk)(Z.rE.NITRO_HOME_MARKETING),
            eO = r.useRef(null),
            eP = (0, g.b)("bento_box"),
            eI = (function () {
                let { enabled: e } = B.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                    t = (0, w.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
                return r.useMemo(() => {
                    let n = { [k.XY]: t, [k.KS]: e };
                    return k.mY.filter((e) => n[e]);
                }, [e, t, void 0]);
            })(),
            eC = {
                premiumGroup: { thumbnail: ec, assetUrl: ec },
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
                    thumbnail: eh.A,
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
                orbRewards: { thumbnail: eR.A, assetUrl: eN.A },
                orbMultiplier: { thumbnail: eb, assetUrl: ex ? eu : em },
                combinedOrbs: { thumbnail: eb, assetUrl: ex ? eu : em },
                threePPromotions: { thumbnail: eP ? (0, i.jsx)(W, { ref: eO }) : eo, assetUrl: eP ? void 0 : eo },
                youtube: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
                },
                xboxPartnerPass: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
                },
            },
            eU = (0, T.Y)({ location: "bento_box" }),
            eT = (0, S.A)(!eU),
            eM = (0, c.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
            eS = null != eM && (0, U.Nc)(eM),
            ej = (0, L.uq)({ location: "bento_box" }),
            eL = (0, j.qN)("bento_box"),
            ey = {
                [D.N.MACARON]: null != ej ? ej : void 0,
                [D.N.CODE_BLURPLE]: null != eL ? eL : void 0,
                [D.N.SERVER_PROFILES]: {
                    name: D.N.SERVER_PROFILES,
                    title: es.intl.string(es.t.I9TYMg),
                    description: es.intl.string(es.t.HMSHeH),
                    descriptionCta: es.intl.string(es.t.jVcuVY),
                    onClick: a ? s : G,
                    previewImage: eC.serverProfiles.thumbnail,
                    videoUrl: eC.serverProfiles.assetUrl,
                },
                [D.N.REFERRAL_PROGRAM]: {
                    name: D.N.REFERRAL_PROGRAM,
                    title: es.intl.string(es.t.tPY4o9),
                    description: es.intl.format(es.t.jRPQUH, { learnMoreLink: eE }),
                    previewImage: eC.referralProgram.thumbnail,
                    videoUrl: eC.referralProgram.assetUrl,
                },
                [D.N.CUSTOM_THEMES]: {
                    name: D.N.CUSTOM_THEMES,
                    title: es.intl.string(ei.default.XokIHM),
                    description: es.intl.string(ei.default["7esQMC"]),
                    descriptionCta: es.intl.string(es.t.jVcuVY),
                    previewImage: eC.customThemes.thumbnail,
                    onClick: () => {
                        (0, p.nf)(p.HP.CUSTOM_THEME);
                    },
                    videoUrl: eC.customThemes.assetUrl,
                },
                [D.N.DISPLAY_NAME_STYLES]: {
                    name: D.N.DISPLAY_NAME_STYLES,
                    title: es.intl.string(er.default.ABtBDQ),
                    description: es.intl.string(er.default.MFNXZh),
                    descriptionCta: es.intl.string(es.t.jVcuVY),
                    previewImage: eC.displayNameStyles.thumbnail,
                    onClick: a ? s : H,
                    videoUrl: eC.displayNameStyles.assetUrl,
                },
                [D.N.PREMIUM_GROUP]: {
                    name: D.N.PREMIUM_GROUP,
                    title: es.intl.formatToPlainString(et.default.VFEDDB, { premiumGroupProductName: (0, $.DP)() }),
                    description:
                        eU && null != eT
                            ? es.intl.formatToPlainString(et.default.vmvhN5, { pricePerPerson: eT, totalMember: $.LM })
                            : es.intl.formatToPlainString(et.default.WudmR3, {
                                  totalSeats: $.aw,
                                  premiumGroupProductName: (0, $.DP)(),
                              }),
                    previewImage: eC.premiumGroup.thumbnail,
                    videoUrl: eC.premiumGroup.assetUrl,
                    actions: [
                        {
                            variant: "primary",
                            text: es.intl.formatToPlainString(et.default.LwdrNi, {
                                premiumGroupProductName: (0, $.DP)(),
                            }),
                            onClick: X,
                            icon: o.t,
                            iconPosition: "start",
                            disabled: eS,
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
                [D.N.SHOW_YOUR_STYLE]: {
                    name: D.N.SHOW_YOUR_STYLE,
                    title: es.intl.string(es.t.Ij3Zmv),
                    description: es.intl.string(es.t.UsOUxY),
                    descriptionCta: es.intl.string(es.t.jVcuVY),
                    previewImage: eC.showYourStyle.thumbnail,
                    onClick: a ? s : G,
                    videoUrl: eC.showYourStyle.assetUrl,
                },
                [D.N.YOUR_SPACE]: {
                    name: D.N.YOUR_SPACE,
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
                [D.N.EMOJIS]: {
                    name: D.N.EMOJIS,
                    title: es.intl.string(es.t.zY5PPb),
                    description: es.intl.string(es.t.R5Xag2),
                    previewImage: eC.emojis.thumbnail,
                    videoUrl: eC.emojis.assetUrl,
                },
                [D.N.NO_LIMITS]: {
                    name: D.N.NO_LIMITS,
                    title: es.intl.string(es.t["6b3ydG"]),
                    description: es.intl.string(es.t["Y+IJyg"]),
                    previewImage: eC.noLimits.thumbnail,
                    videoUrl: eC.noLimits.assetUrl,
                },
                [D.N.THREE_P_PROMOTIONS]: {
                    name: D.N.THREE_P_PROMOTIONS,
                    title: eP ? es.intl.string(es.t.E4U4SS) : es.intl.string(ee.default.OlObRa),
                    description: eP ? es.intl.string(es.t["B4uSy/"]) : es.intl.string(ee.default["8Gl8gP"]),
                    descriptionCta: eP ? es.intl.string(es.t.RzWDqY) : es.intl.string(ee.default.HINTfJ),
                    previewImage: eC[D.N.THREE_P_PROMOTIONS].thumbnail,
                    videoUrl: eC[D.N.THREE_P_PROMOTIONS].assetUrl,
                    onClick: () =>
                        (0, y.P)({
                            analyticsLocations: t,
                            partnerIds: eI,
                            isLocked: !0,
                            showXboxCard: eP,
                            title: eP ? es.intl.string(es.t.NG1e6l) : es.intl.string(es.t["7ioAjs"]),
                            subtitle: eP
                                ? es.intl.format(el.default.zS4GBR, {
                                      termsLink: C.A.getArticleURL(J.MVz.NITRO_2_POINT_0),
                                  })
                                : es.intl.format(es.t.LOYRxB, {
                                      helpCenterLink: C.A.getArticleURL(J.MVz.RECURRING_PROMOTION),
                                  }),
                        }),
                    badgeText: eP ? void 0 : es.intl.string(es.t.y2b7CA).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    mediaRef: eP ? eO : void 0,
                },
                [D.N.ORB_REWARDS]: {
                    name: D.N.ORB_REWARDS,
                    title: es.intl.string(en.default["ZFJ/NU"]),
                    description: es.intl.string(en.default.wMi514),
                    descriptionCta: es.intl.string(es.t.hvVgAZ),
                    onClick: () => {
                        window.open(C.A.getArticleURL(J.MVz.ORBS_REWARDS_FAQ), "_blank");
                    },
                    previewImage: eC.orbRewards.thumbnail,
                    previewImageStyle: "overlay",
                    backgroundVideoUrl: eC.orbRewards.assetUrl,
                    badgeText: eP ? void 0 : es.intl.string(es.t.oW0eUd).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                },
                [D.N.ORB_MULTIPLIER]: {
                    name: D.N.ORB_MULTIPLIER,
                    title: es.intl.string(es.t.Csf5Ol),
                    description: es.intl.format(es.t["G5k+lZ"], { bonusOrbMultiplier: ev }),
                    descriptionCta: es.intl.string(es.t.jVcuVY),
                    onClick: () => (0, E.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                    badgeVariant: "expressive",
                    previewImage: eC[D.N.ORB_MULTIPLIER].thumbnail,
                    videoUrl: eC[D.N.ORB_MULTIPLIER].assetUrl,
                },
                [D.N.COMBINED_ORBS]: {
                    name: D.N.COMBINED_ORBS,
                    title: es.intl.string(es.t.Tzhw6e),
                    description: es.intl.format(es.t.djzJx6, { bonusOrbMultiplier: ev }),
                    descriptionCta: es.intl.string(es.t.RzWDqY),
                    onClick: () => (0, E.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                    badgeText: eP ? void 0 : es.intl.string(es.t.oW0eUd).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    previewImage: eC[D.N.COMBINED_ORBS].thumbnail,
                    videoUrl: eC[D.N.COMBINED_ORBS].assetUrl,
                },
                [D.N.YOUTUBE]: {
                    name: D.N.YOUTUBE,
                    caption: (0, i.jsx)("img", { src: ef.A, alt: "YouTube Premium" }),
                    title: es.intl.string(ea.default["BdIVB+"]),
                    description: es.intl.format(ea.default["3jY5i3"], {
                        helpCenterUrl: C.A.getArticleURL(J.MVz.YOUTUBE_PROMOTION),
                    }),
                    previewImage: eC[D.N.YOUTUBE].thumbnail,
                    descriptionCta: es.intl.string(ea.default.VwLXyT),
                    containerClassName: ed.youtubeGradient,
                    onClick: () => (0, Y.z)(t),
                },
                [D.N.XBOX_PARTNER_PASS]: {
                    name: D.N.XBOX_PARTNER_PASS,
                    caption: (0, i.jsx)("img", { src: ep.A, alt: "Xbox Game Pass" }),
                    title: es.intl.string(el.default.IthhpG),
                    description: es.intl.format(el.default.NKTF0a, {
                        helpCenterLink: C.A.getArticleURL(J.MVz.NITRO_2_POINT_0),
                    }),
                    previewImage: eC[D.N.XBOX_PARTNER_PASS].thumbnail,
                    containerClassName: ed.xboxGradient,
                    actions: [
                        {
                            variant: "secondary",
                            text: es.intl.string(es.t["2pG5Ga"]),
                            onClick: () =>
                                (0, N.A)({
                                    subscriptionTier: q.pe.TIER_2,
                                    analyticsLocations: t,
                                    onSubscriptionConfirmation: V,
                                }),
                            icon: o.t,
                            iconPosition: "start",
                        },
                    ],
                },
            };
        function eB(e) {
            let t = ey[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        }
        let ew = (function (e) {
                let t = (0, w.YS)({ location: "bento_box" }).functionalityEnabled,
                    n = (0, K.mh)({ location: "bento_box" }),
                    a = (0, g.b)("bento_box"),
                    { enabled: s } = B.A.useConfig({ location: "bento_box" }),
                    { enabled: i } = (0, L.vc)({ location: "bento_box" }),
                    { enabled: r } = F.A.useConfig({ location: "bento_box" }),
                    l = i && r,
                    d = null != (0, j.qN)("bento_box"),
                    c = (0, z.O9)();
                return [
                    ...(l ? [D.N.MACARON] : []),
                    ...(n ? [D.N.YOUTUBE] : []),
                    ...(a && (n || l) ? [D.N.XBOX_PARTNER_PASS] : []),
                    ...(d ? [D.N.CODE_BLURPLE] : []),
                    ...(t || s ? [D.N.THREE_P_PROMOTIONS] : []),
                    ...(e ? [D.N.COMBINED_ORBS] : []),
                    ...(c ? [D.N.PREMIUM_GROUP] : []),
                    ...(e ? [] : [D.N.ORB_REWARDS]),
                    D.N.DISPLAY_NAME_STYLES,
                    D.N.CUSTOM_THEMES,
                    D.N.SERVER_PROFILES,
                    D.N.REFERRAL_PROGRAM,
                ];
            })(eA),
            ek = [],
            eY = ew.filter((e) => e_.has(e)).length >= 3,
            eD = e ? null : ew[0];
        null != eD && ek.push([eB(eD)]);
        let eV = ew.slice(+!e, e ? 2 : 3);
        1 === eV.length ? ek.push([eB(eV[0])]) : 2 === eV.length && ek.push([eB(eV[0]), eB(eV[1])]);
        let eG = eY ? ew.slice(e ? 2 : 3, e ? 4 : 5) : [];
        return (
            1 === eG.length ? ek.push([eB(eG[0])]) : 2 === eG.length && ek.push([eB(eG[0]), eB(eG[1])]),
            {
                whatsNewBoxes: [...ek],
                bestOfBoxes: [[eB(D.N.SHOW_YOUR_STYLE)], [eB(D.N.YOUR_SPACE)], [eB(D.N.EMOJIS), eB(D.N.NO_LIMITS)]],
            }
        );
    };
