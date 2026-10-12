(a.d(t, { Tb: () => eR, A0: () => eE, Ay: () => ex }), a(321073));
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
    p = a(688810),
    b = a(793943),
    f = a(259065),
    h = a(741231),
    g = a(325499),
    R = a(75678),
    E = a(206835),
    x = a(192444),
    N = a(216934),
    A = a(591179),
    _ = a(462463),
    v = a(780964),
    O = a(766075),
    I = a(166403),
    P = a(676279),
    T = a(975571),
    C = a(158045),
    U = a(769623),
    M = a(920050),
    j = a(707922),
    S = a(261995),
    y = a(164832),
    L = a(398523),
    B = a(881373),
    w = a(852218),
    k = a(50949),
    Y = a(713271),
    D = a(503698),
    V = a.n(D),
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
            className: V()(t, H.k),
            children: (0, i.jsx)(G.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
X.displayName = "PremiumRewardsBentoBoxAsset";
var W = a(989790),
    F = a(612413),
    z = a(202541);
a(92737);
var K = a(88001),
    q = a(652215),
    $ = a(190107),
    J = a(355097),
    Z = a(334551),
    Q = a(148155),
    ee = a(1889),
    et = a(762359),
    ea = a(660183),
    en = a(72191),
    es = a(701974),
    ei = a(553875),
    er = a(505051),
    el = a(817577);
let ed = "/assets/035ad0fba4997f3f.svg",
    ec =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    eo =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    eu =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var em = a(112992),
    ep = a(679502),
    eb = a(576765),
    ef = a(88433),
    eh = a(909340),
    eg = a(455482),
    eR = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    eE = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let ex = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, p.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, A.X)("useBentoBoxes"),
        s = (0, _.A)({ analyticsLocations: t }),
        D = (0, r.useCallback)(() => {
            (0, h.A)(q.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: M.XBOX_PREMIUM_PERK_CARD_ID }) });
        }, []),
        V = (0, E.A)({ scrollPosition: J._F.TRY_IT_OUT, analyticsLocations: t }),
        G = (0, r.useCallback)(() => {
            (0, O.openUserSettings)(v.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        H = (0, r.useCallback)(() => {
            (0, R.A)({ subscriptionTier: z.pe.TIER_2, initialPlanId: z.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        eR = (0, P.TM)(),
        eE = T.A.getArticleURL(q.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ex, multiplier: eN } = (0, x.lk)($.rE.NITRO_HOME_MARKETING),
        eA = r.useRef(null),
        e_ = (0, g.b)("bento_box"),
        ev = (function () {
            let { enabled: e } = L.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, B.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return r.useMemo(() => {
                let a = { [w.XY]: t, [w.KS]: e };
                return w.mY.filter((e) => a[e]);
            }, [e, t, void 0]);
        })(),
        eO = {
            premiumGroup: { thumbnail: el, assetUrl: el },
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
                thumbnail: eb.A,
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : ef.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: eR
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eg.A, assetUrl: eh.A },
            orbMultiplier: { thumbnail: eu, assetUrl: eR ? ec : eo },
            combinedOrbs: { thumbnail: eu, assetUrl: eR ? ec : eo },
            threePPromotions: { thumbnail: e_ ? (0, i.jsx)(X, { ref: eA }) : ed, assetUrl: e_ ? void 0 : ed },
            youtube: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
            },
            xboxPartnerPass: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
            },
        },
        eI = (0, U.Y)({ location: "bento_box" }),
        eP = (0, j.A)(!eI),
        eT = (0, c.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        eC = null != eT && (0, C.Nc)(eT),
        eU = (0, S.uq)({ location: "bento_box" }),
        eM = {
            [Y.N.MACARON]: null != eU ? eU : void 0,
            [Y.N.SERVER_PROFILES]: {
                name: Y.N.SERVER_PROFILES,
                title: ea.intl.string(ea.t.I9TYMg),
                description: ea.intl.string(ea.t.HMSHeH),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                onClick: n ? s : V,
                previewImage: eO.serverProfiles.thumbnail,
                videoUrl: eO.serverProfiles.assetUrl,
            },
            [Y.N.REFERRAL_PROGRAM]: {
                name: Y.N.REFERRAL_PROGRAM,
                title: ea.intl.string(ea.t.tPY4o9),
                description: ea.intl.format(ea.t.jRPQUH, { learnMoreLink: eE }),
                previewImage: eO.referralProgram.thumbnail,
                videoUrl: eO.referralProgram.assetUrl,
            },
            [Y.N.CUSTOM_THEMES]: {
                name: Y.N.CUSTOM_THEMES,
                title: ea.intl.string(en.default.XokIHM),
                description: ea.intl.string(en.default["7esQMC"]),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                previewImage: eO.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: eO.customThemes.assetUrl,
            },
            [Y.N.DISPLAY_NAME_STYLES]: {
                name: Y.N.DISPLAY_NAME_STYLES,
                title: ea.intl.string(es.default.ABtBDQ),
                description: ea.intl.string(es.default.MFNXZh),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                previewImage: eO.displayNameStyles.thumbnail,
                onClick: n ? s : G,
                videoUrl: eO.displayNameStyles.assetUrl,
            },
            [Y.N.PREMIUM_GROUP]: {
                name: Y.N.PREMIUM_GROUP,
                title: ea.intl.formatToPlainString(Q.default.VFEDDB, { premiumGroupProductName: (0, K.DP)() }),
                description:
                    eI && null != eP
                        ? ea.intl.formatToPlainString(Q.default.vmvhN5, { pricePerPerson: eP, totalMember: K.LM })
                        : ea.intl.formatToPlainString(Q.default.WudmR3, {
                              totalSeats: K.aw,
                              premiumGroupProductName: (0, K.DP)(),
                          }),
                previewImage: eO.premiumGroup.thumbnail,
                videoUrl: eO.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: ea.intl.formatToPlainString(Q.default.LwdrNi, { premiumGroupProductName: (0, K.DP)() }),
                        onClick: H,
                        icon: o.t,
                        iconPosition: "start",
                        disabled: eC,
                    },
                    {
                        variant: "secondary",
                        text: ea.intl.string(ea.t.hvVgAZ),
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
                badgeText: ea.intl.string(ea.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.SHOW_YOUR_STYLE]: {
                name: Y.N.SHOW_YOUR_STYLE,
                title: ea.intl.string(ea.t.Ij3Zmv),
                description: ea.intl.string(ea.t.UsOUxY),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                previewImage: eO.showYourStyle.thumbnail,
                onClick: n ? s : V,
                videoUrl: eO.showYourStyle.assetUrl,
            },
            [Y.N.YOUR_SPACE]: {
                name: Y.N.YOUR_SPACE,
                title: ea.intl.string(ea.t.Wme3nX),
                description: ea.intl.string(ea.t["/aAIqV"]),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                previewImage: eO.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = a(766075);
                        e(v.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eO.yourSpace.assetUrl,
            },
            [Y.N.EMOJIS]: {
                name: Y.N.EMOJIS,
                title: ea.intl.string(ea.t.zY5PPb),
                description: ea.intl.string(ea.t.R5Xag2),
                previewImage: eO.emojis.thumbnail,
                videoUrl: eO.emojis.assetUrl,
            },
            [Y.N.NO_LIMITS]: {
                name: Y.N.NO_LIMITS,
                title: ea.intl.string(ea.t["6b3ydG"]),
                description: ea.intl.string(ea.t["Y+IJyg"]),
                previewImage: eO.noLimits.thumbnail,
                videoUrl: eO.noLimits.assetUrl,
            },
            [Y.N.THREE_P_PROMOTIONS]: {
                name: Y.N.THREE_P_PROMOTIONS,
                title: e_ ? ea.intl.string(ea.t.E4U4SS) : ea.intl.string(Z.default.OlObRa),
                description: e_ ? ea.intl.string(ea.t["B4uSy/"]) : ea.intl.string(Z.default["8Gl8gP"]),
                descriptionCta: e_ ? ea.intl.string(ea.t.RzWDqY) : ea.intl.string(Z.default.HINTfJ),
                previewImage: eO[Y.N.THREE_P_PROMOTIONS].thumbnail,
                videoUrl: eO[Y.N.THREE_P_PROMOTIONS].assetUrl,
                onClick: () =>
                    (0, y.P)({
                        analyticsLocations: t,
                        partnerIds: ev,
                        isLocked: !0,
                        showXboxCard: e_,
                        title: e_ ? ea.intl.string(ea.t.NG1e6l) : ea.intl.string(ea.t["7ioAjs"]),
                        subtitle: e_
                            ? ea.intl.format(ei.default.zS4GBR, { termsLink: T.A.getArticleURL(q.MVz.NITRO_2_POINT_0) })
                            : ea.intl.format(ea.t.LOYRxB, {
                                  helpCenterLink: T.A.getArticleURL(q.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: e_ ? void 0 : ea.intl.string(ea.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: e_ ? eA : void 0,
            },
            [Y.N.ORB_REWARDS]: {
                name: Y.N.ORB_REWARDS,
                title: ea.intl.string(ee.default["ZFJ/NU"]),
                description: ea.intl.string(ee.default.wMi514),
                descriptionCta: ea.intl.string(ea.t.hvVgAZ),
                onClick: () => {
                    window.open(T.A.getArticleURL(q.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eO.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eO.orbRewards.assetUrl,
                badgeText: e_ ? void 0 : ea.intl.string(ea.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.ORB_MULTIPLIER]: {
                name: Y.N.ORB_MULTIPLIER,
                title: ea.intl.string(ea.t.Csf5Ol),
                description: ea.intl.format(ea.t["G5k+lZ"], { bonusOrbMultiplier: eN }),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                onClick: () => (0, N.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eO[Y.N.ORB_MULTIPLIER].thumbnail,
                videoUrl: eO[Y.N.ORB_MULTIPLIER].assetUrl,
            },
            [Y.N.COMBINED_ORBS]: {
                name: Y.N.COMBINED_ORBS,
                title: ea.intl.string(ea.t.Tzhw6e),
                description: ea.intl.format(ea.t.djzJx6, { bonusOrbMultiplier: eN }),
                descriptionCta: ea.intl.string(ea.t.RzWDqY),
                onClick: () => (0, N.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: e_ ? void 0 : ea.intl.string(ea.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eO[Y.N.COMBINED_ORBS].thumbnail,
                videoUrl: eO[Y.N.COMBINED_ORBS].assetUrl,
            },
            [Y.N.YOUTUBE]: {
                name: Y.N.YOUTUBE,
                caption: (0, i.jsx)("img", { src: ep.A, alt: "YouTube Premium" }),
                title: ea.intl.string(et.default["BdIVB+"]),
                description: ea.intl.format(et.default["3jY5i3"], {
                    helpCenterUrl: T.A.getArticleURL(q.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eO[Y.N.YOUTUBE].thumbnail,
                descriptionCta: ea.intl.string(et.default.VwLXyT),
                containerClassName: er.youtubeGradient,
                onClick: () => (0, k.z)(t),
            },
            [Y.N.XBOX_PARTNER_PASS]: {
                name: Y.N.XBOX_PARTNER_PASS,
                caption: (0, i.jsx)("img", { src: em.A, alt: "Xbox Game Pass" }),
                title: ea.intl.string(ei.default.IthhpG),
                description: ea.intl.format(ei.default.NKTF0a, {
                    helpCenterLink: T.A.getArticleURL(q.MVz.NITRO_2_POINT_0),
                }),
                previewImage: eO[Y.N.XBOX_PARTNER_PASS].thumbnail,
                containerClassName: er.xboxGradient,
                actions: [
                    {
                        variant: "secondary",
                        text: ea.intl.string(ea.t["2pG5Ga"]),
                        onClick: () =>
                            (0, R.A)({
                                subscriptionTier: z.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: D,
                            }),
                        icon: o.t,
                        iconPosition: "start",
                    },
                ],
            },
        };
    function ej(e) {
        let t = eM[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eS = (function (e) {
            let t = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                a = (0, F.mh)({ location: "bento_box" }),
                n = (0, g.b)("bento_box"),
                { enabled: s } = L.A.useConfig({ location: "bento_box" }),
                { enabled: i } = (0, S.vc)({ location: "bento_box" }),
                r = (0, W.O9)();
            return [
                ...(i ? [Y.N.MACARON] : []),
                ...(a ? [Y.N.YOUTUBE] : []),
                ...(n && (a || i) ? [Y.N.XBOX_PARTNER_PASS] : []),
                ...(t || s ? [Y.N.THREE_P_PROMOTIONS] : []),
                ...(e ? [Y.N.COMBINED_ORBS] : []),
                ...(r ? [Y.N.PREMIUM_GROUP] : []),
                ...(e ? [] : [Y.N.ORB_REWARDS]),
                Y.N.DISPLAY_NAME_STYLES,
                Y.N.CUSTOM_THEMES,
                Y.N.SERVER_PROFILES,
                Y.N.REFERRAL_PROGRAM,
            ];
        })(ex),
        ey = [],
        eL = e ? null : eS[0],
        eB = eS.slice(+!e, e ? 2 : 3);
    return (
        null != eL && ey.push([ej(eL)]),
        1 === eB.length ? ey.push([ej(eB[0])]) : 2 === eB.length && ey.push([ej(eB[0]), ej(eB[1])]),
        {
            whatsNewBoxes: [...ey],
            bestOfBoxes: [[ej(Y.N.SHOW_YOUR_STYLE)], [ej(Y.N.YOUR_SPACE)], [ej(Y.N.EMOJIS), ej(Y.N.NO_LIMITS)]],
        }
    );
};
