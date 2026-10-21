(a.d(t, { Tb: () => eR, A0: () => eN, Ay: () => eE }), a(321073));
var n,
    s,
    i = a(477900),
    r = a(582128),
    l = a(492462),
    d = a(696292),
    c = a(17928),
    o = a(403581),
    u = a(192308),
    m = a(793574),
    b = a(688810),
    p = a(793943),
    f = a(259065),
    h = a(741231),
    g = a(325499),
    x = a(75678),
    R = a(206835),
    N = a(192444),
    E = a(216934),
    A = a(591179),
    _ = a(462463),
    v = a(780964),
    O = a(766075),
    I = a(166403),
    P = a(676279),
    C = a(975571),
    M = a(158045),
    U = a(769623),
    T = a(920050),
    j = a(707922),
    S = a(261995),
    y = a(164832),
    L = a(398523),
    B = a(881373),
    w = a(852218),
    k = a(50949),
    Y = a(713271),
    V = a(503698),
    D = a.n(V),
    G = a(907581),
    H = a(830370);
function X(e) {
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
            className: D()(t, H.k),
            children: (0, i.jsx)(G.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
X.displayName = "PremiumRewardsBentoBoxAsset";
var W = a(989790),
    z = a(886205),
    F = a(612413),
    K = a(202541);
a(92737);
var q = a(88001),
    $ = a(652215),
    J = a(190107),
    Z = a(355097),
    Q = a(334551),
    ee = a(148155),
    et = a(1889),
    ea = a(762359),
    en = a(105292),
    es = a(72191),
    ei = a(701974),
    er = a(553875),
    el = a(505051),
    ed = a(817577);
let ec = "/assets/035ad0fba4997f3f.svg",
    eo =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    eu =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    em =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var eb = a(112992),
    ep = a(679502),
    ef = a(576765),
    eh = a(88433),
    eg = a(909340),
    ex = a(455482),
    eR = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    eN = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eE = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, A.X)("useBentoBoxes"),
        s = (0, _.A)({ analyticsLocations: t }),
        V = (0, r.useCallback)(() => {
            (0, h.A)($.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: T.XBOX_PREMIUM_PERK_CARD_ID }) });
        }, []),
        D = (0, R.A)({ scrollPosition: Z._F.TRY_IT_OUT, analyticsLocations: t }),
        G = (0, r.useCallback)(() => {
            (0, O.openUserSettings)(v.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        H = (0, r.useCallback)(() => {
            (0, x.A)({ subscriptionTier: K.pe.TIER_2, initialPlanId: K.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        eR = (0, P.TM)(),
        eN = C.A.getArticleURL($.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: eE, multiplier: eA } = (0, N.lk)(J.rE.NITRO_HOME_MARKETING),
        e_ = r.useRef(null),
        ev = (0, g.b)("bento_box"),
        eO = (function () {
            let { enabled: e } = L.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, B.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return r.useMemo(() => {
                let a = { [w.XY]: t, [w.KS]: e };
                return w.mY.filter((e) => a[e]);
            }, [e, t, void 0]);
        })(),
        eI = {
            premiumGroup: { thumbnail: ed, assetUrl: ed },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: ef.A,
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : eh.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: ex.A, assetUrl: eg.A },
            orbMultiplier: { thumbnail: em, assetUrl: eR ? eo : eu },
            combinedOrbs: { thumbnail: em, assetUrl: eR ? eo : eu },
            threePPromotions: { thumbnail: ev ? (0, i.jsx)(X, { ref: e_ }) : ec, assetUrl: ev ? void 0 : ec },
            youtube: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
            },
            xboxPartnerPass: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
            },
        },
        eP = (0, U.Y)({ location: "bento_box" }),
        eC = (0, j.A)(!eP),
        eM = (0, c.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        eU = null != eM && (0, M.Nc)(eM),
        eT = (0, S.uq)({ location: "bento_box" }),
        ej = {
            [Y.N.MACARON]: null != eT ? eT : void 0,
            [Y.N.SERVER_PROFILES]: {
                name: Y.N.SERVER_PROFILES,
                title: en.intl.string(en.t.I9TYMg),
                description: en.intl.string(en.t.HMSHeH),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                onClick: n ? s : D,
                previewImage: eI.serverProfiles.thumbnail,
                videoUrl: eI.serverProfiles.assetUrl,
            },
            [Y.N.REFERRAL_PROGRAM]: {
                name: Y.N.REFERRAL_PROGRAM,
                title: en.intl.string(en.t.tPY4o9),
                description: en.intl.format(en.t.jRPQUH, { learnMoreLink: eN }),
                previewImage: eI.referralProgram.thumbnail,
                videoUrl: eI.referralProgram.assetUrl,
            },
            [Y.N.CUSTOM_THEMES]: {
                name: Y.N.CUSTOM_THEMES,
                title: en.intl.string(es.default.XokIHM),
                description: en.intl.string(es.default["7esQMC"]),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eI.customThemes.thumbnail,
                onClick: () => {
                    (0, p.nf)(p.HP.CUSTOM_THEME);
                },
                videoUrl: eI.customThemes.assetUrl,
            },
            [Y.N.DISPLAY_NAME_STYLES]: {
                name: Y.N.DISPLAY_NAME_STYLES,
                title: en.intl.string(ei.default.ABtBDQ),
                description: en.intl.string(ei.default.MFNXZh),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eI.displayNameStyles.thumbnail,
                onClick: n ? s : G,
                videoUrl: eI.displayNameStyles.assetUrl,
            },
            [Y.N.PREMIUM_GROUP]: {
                name: Y.N.PREMIUM_GROUP,
                title: en.intl.formatToPlainString(ee.default.VFEDDB, { premiumGroupProductName: (0, q.DP)() }),
                description:
                    eP && null != eC
                        ? en.intl.formatToPlainString(ee.default.vmvhN5, { pricePerPerson: eC, totalMember: q.LM })
                        : en.intl.formatToPlainString(ee.default.WudmR3, {
                              totalSeats: q.aw,
                              premiumGroupProductName: (0, q.DP)(),
                          }),
                previewImage: eI.premiumGroup.thumbnail,
                videoUrl: eI.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: en.intl.formatToPlainString(ee.default.LwdrNi, { premiumGroupProductName: (0, q.DP)() }),
                        onClick: H,
                        icon: o.t,
                        iconPosition: "start",
                        disabled: eU,
                    },
                    {
                        variant: "secondary",
                        text: en.intl.string(en.t.hvVgAZ),
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
                badgeText: en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.SHOW_YOUR_STYLE]: {
                name: Y.N.SHOW_YOUR_STYLE,
                title: en.intl.string(en.t.Ij3Zmv),
                description: en.intl.string(en.t.UsOUxY),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eI.showYourStyle.thumbnail,
                onClick: n ? s : D,
                videoUrl: eI.showYourStyle.assetUrl,
            },
            [Y.N.YOUR_SPACE]: {
                name: Y.N.YOUR_SPACE,
                title: en.intl.string(en.t.Wme3nX),
                description: en.intl.string(en.t["/aAIqV"]),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                previewImage: eI.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = a(766075);
                        e(v.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eI.yourSpace.assetUrl,
            },
            [Y.N.EMOJIS]: {
                name: Y.N.EMOJIS,
                title: en.intl.string(en.t.zY5PPb),
                description: en.intl.string(en.t.R5Xag2),
                previewImage: eI.emojis.thumbnail,
                videoUrl: eI.emojis.assetUrl,
            },
            [Y.N.NO_LIMITS]: {
                name: Y.N.NO_LIMITS,
                title: en.intl.string(en.t["6b3ydG"]),
                description: en.intl.string(en.t["Y+IJyg"]),
                previewImage: eI.noLimits.thumbnail,
                videoUrl: eI.noLimits.assetUrl,
            },
            [Y.N.THREE_P_PROMOTIONS]: {
                name: Y.N.THREE_P_PROMOTIONS,
                title: ev ? en.intl.string(en.t.E4U4SS) : en.intl.string(Q.default.OlObRa),
                description: ev ? en.intl.string(en.t["B4uSy/"]) : en.intl.string(Q.default["8Gl8gP"]),
                descriptionCta: ev ? en.intl.string(en.t.RzWDqY) : en.intl.string(Q.default.HINTfJ),
                previewImage: eI[Y.N.THREE_P_PROMOTIONS].thumbnail,
                videoUrl: eI[Y.N.THREE_P_PROMOTIONS].assetUrl,
                onClick: () =>
                    (0, y.P)({
                        analyticsLocations: t,
                        partnerIds: eO,
                        isLocked: !0,
                        showXboxCard: ev,
                        title: ev ? en.intl.string(en.t.NG1e6l) : en.intl.string(en.t["7ioAjs"]),
                        subtitle: ev
                            ? en.intl.format(er.default.zS4GBR, { termsLink: C.A.getArticleURL($.MVz.NITRO_2_POINT_0) })
                            : en.intl.format(en.t.LOYRxB, {
                                  helpCenterLink: C.A.getArticleURL($.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: ev ? void 0 : en.intl.string(en.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ev ? e_ : void 0,
            },
            [Y.N.ORB_REWARDS]: {
                name: Y.N.ORB_REWARDS,
                title: en.intl.string(et.default["ZFJ/NU"]),
                description: en.intl.string(et.default.wMi514),
                descriptionCta: en.intl.string(en.t.hvVgAZ),
                onClick: () => {
                    window.open(C.A.getArticleURL($.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eI.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eI.orbRewards.assetUrl,
                badgeText: ev ? void 0 : en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.ORB_MULTIPLIER]: {
                name: Y.N.ORB_MULTIPLIER,
                title: en.intl.string(en.t.Csf5Ol),
                description: en.intl.format(en.t["G5k+lZ"], { bonusOrbMultiplier: eA }),
                descriptionCta: en.intl.string(en.t.jVcuVY),
                onClick: () => (0, E.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eI[Y.N.ORB_MULTIPLIER].thumbnail,
                videoUrl: eI[Y.N.ORB_MULTIPLIER].assetUrl,
            },
            [Y.N.COMBINED_ORBS]: {
                name: Y.N.COMBINED_ORBS,
                title: en.intl.string(en.t.Tzhw6e),
                description: en.intl.format(en.t.djzJx6, { bonusOrbMultiplier: eA }),
                descriptionCta: en.intl.string(en.t.RzWDqY),
                onClick: () => (0, E.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: ev ? void 0 : en.intl.string(en.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eI[Y.N.COMBINED_ORBS].thumbnail,
                videoUrl: eI[Y.N.COMBINED_ORBS].assetUrl,
            },
            [Y.N.YOUTUBE]: {
                name: Y.N.YOUTUBE,
                caption: (0, i.jsx)("img", { src: ep.A, alt: "YouTube Premium" }),
                title: en.intl.string(ea.default["BdIVB+"]),
                description: en.intl.format(ea.default["3jY5i3"], {
                    helpCenterUrl: C.A.getArticleURL($.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eI[Y.N.YOUTUBE].thumbnail,
                descriptionCta: en.intl.string(ea.default.VwLXyT),
                containerClassName: el.youtubeGradient,
                onClick: () => (0, k.z)(t),
            },
            [Y.N.XBOX_PARTNER_PASS]: {
                name: Y.N.XBOX_PARTNER_PASS,
                caption: (0, i.jsx)("img", { src: eb.A, alt: "Xbox Game Pass" }),
                title: en.intl.string(er.default.IthhpG),
                description: en.intl.format(er.default.NKTF0a, {
                    helpCenterLink: C.A.getArticleURL($.MVz.NITRO_2_POINT_0),
                }),
                previewImage: eI[Y.N.XBOX_PARTNER_PASS].thumbnail,
                containerClassName: el.xboxGradient,
                actions: [
                    {
                        variant: "secondary",
                        text: en.intl.string(en.t["2pG5Ga"]),
                        onClick: () =>
                            (0, x.A)({
                                subscriptionTier: K.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: V,
                            }),
                        icon: o.t,
                        iconPosition: "start",
                    },
                ],
            },
        };
    function eS(e) {
        let t = ej[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let ey = (function (e) {
            let t = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                a = (0, F.mh)({ location: "bento_box" }),
                n = (0, g.b)("bento_box"),
                { enabled: s } = L.A.useConfig({ location: "bento_box" }),
                { enabled: i } = (0, S.vc)({ location: "bento_box" }),
                { enabled: r } = z.A.useConfig({ location: "bento_box" }),
                l = i && r,
                d = (0, W.O9)();
            return [
                ...(l ? [Y.N.MACARON] : []),
                ...(a ? [Y.N.YOUTUBE] : []),
                ...(n && (a || l) ? [Y.N.XBOX_PARTNER_PASS] : []),
                ...(t || s ? [Y.N.THREE_P_PROMOTIONS] : []),
                ...(e ? [Y.N.COMBINED_ORBS] : []),
                ...(d ? [Y.N.PREMIUM_GROUP] : []),
                ...(e ? [] : [Y.N.ORB_REWARDS]),
                Y.N.DISPLAY_NAME_STYLES,
                Y.N.CUSTOM_THEMES,
                Y.N.SERVER_PROFILES,
                Y.N.REFERRAL_PROGRAM,
            ];
        })(eE),
        eL = [],
        eB = e ? null : ey[0],
        ew = ey.slice(+!e, e ? 2 : 3);
    return (
        null != eB && eL.push([eS(eB)]),
        1 === ew.length ? eL.push([eS(ew[0])]) : 2 === ew.length && eL.push([eS(ew[0]), eS(ew[1])]),
        {
            whatsNewBoxes: [...eL],
            bestOfBoxes: [[eS(Y.N.SHOW_YOUR_STYLE)], [eS(Y.N.YOUR_SPACE)], [eS(Y.N.EMOJIS), eS(Y.N.NO_LIMITS)]],
        }
    );
};
