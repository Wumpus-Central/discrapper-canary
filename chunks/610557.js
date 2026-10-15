(n.d(t, { Tb: () => eR, A0: () => eN, Ay: () => eE }), n(321073));
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
    x = n(75678),
    R = n(206835),
    N = n(192444),
    E = n(216934),
    A = n(591179),
    _ = n(462463),
    v = n(780964),
    O = n(766075),
    I = n(166403),
    P = n(676279),
    C = n(975571),
    M = n(158045),
    T = n(769623),
    U = n(920050),
    j = n(707922),
    S = n(261995),
    y = n(164832),
    L = n(398523),
    B = n(881373),
    w = n(852218),
    k = n(50949),
    Y = n(713271),
    V = n(503698),
    D = n.n(V),
    G = n(907581),
    H = n(830370);
function X(e) {
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
            className: D()(t, H.k),
            children: (0, i.jsx)(G.C, { ref: a, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
X.displayName = "PremiumRewardsBentoBoxAsset";
var W = n(989790),
    z = n(886205),
    F = n(612413),
    K = n(202541);
n(92737);
var q = n(88001),
    $ = n(652215),
    J = n(190107),
    Z = n(355097),
    Q = n(334551),
    ee = n(148155),
    et = n(1889),
    en = n(762359),
    ea = n(105292),
    es = n(72191),
    ei = n(701974),
    er = n(553875),
    el = n(505051),
    ed = n(817577);
let ec = "/assets/035ad0fba4997f3f.svg",
    eo =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    eu =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    em =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var eb = n(112992),
    ep = n(679502),
    ef = n(576765),
    eh = n(88433),
    eg = n(909340),
    ex = n(455482),
    eR = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    eN = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eE = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        a = (0, A.X)("useBentoBoxes"),
        s = (0, _.A)({ analyticsLocations: t }),
        V = (0, r.useCallback)(() => {
            (0, h.A)($.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: U.XBOX_PREMIUM_PERK_CARD_ID }) });
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
                let n = { [w.XY]: t, [w.KS]: e };
                return w.mY.filter((e) => n[e]);
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
        eP = (0, T.Y)({ location: "bento_box" }),
        eC = (0, j.A)(!eP),
        eM = (0, c.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        eT = null != eM && (0, M.Nc)(eM),
        eU = (0, S.uq)({ location: "bento_box" }),
        ej = {
            [Y.N.MACARON]: null != eU ? eU : void 0,
            [Y.N.SERVER_PROFILES]: {
                name: Y.N.SERVER_PROFILES,
                title: ea.intl.string(ea.t.I9TYMg),
                description: ea.intl.string(ea.t.HMSHeH),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                onClick: a ? s : D,
                previewImage: eI.serverProfiles.thumbnail,
                videoUrl: eI.serverProfiles.assetUrl,
            },
            [Y.N.REFERRAL_PROGRAM]: {
                name: Y.N.REFERRAL_PROGRAM,
                title: ea.intl.string(ea.t.tPY4o9),
                description: ea.intl.format(ea.t.jRPQUH, { learnMoreLink: eN }),
                previewImage: eI.referralProgram.thumbnail,
                videoUrl: eI.referralProgram.assetUrl,
            },
            [Y.N.CUSTOM_THEMES]: {
                name: Y.N.CUSTOM_THEMES,
                title: ea.intl.string(es.default.XokIHM),
                description: ea.intl.string(es.default["7esQMC"]),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                previewImage: eI.customThemes.thumbnail,
                onClick: () => {
                    (0, p.nf)(p.HP.CUSTOM_THEME);
                },
                videoUrl: eI.customThemes.assetUrl,
            },
            [Y.N.DISPLAY_NAME_STYLES]: {
                name: Y.N.DISPLAY_NAME_STYLES,
                title: ea.intl.string(ei.default.ABtBDQ),
                description: ea.intl.string(ei.default.MFNXZh),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                previewImage: eI.displayNameStyles.thumbnail,
                onClick: a ? s : G,
                videoUrl: eI.displayNameStyles.assetUrl,
            },
            [Y.N.PREMIUM_GROUP]: {
                name: Y.N.PREMIUM_GROUP,
                title: ea.intl.formatToPlainString(ee.default.VFEDDB, { premiumGroupProductName: (0, q.DP)() }),
                description:
                    eP && null != eC
                        ? ea.intl.formatToPlainString(ee.default.vmvhN5, { pricePerPerson: eC, totalMember: q.LM })
                        : ea.intl.formatToPlainString(ee.default.WudmR3, {
                              totalSeats: q.aw,
                              premiumGroupProductName: (0, q.DP)(),
                          }),
                previewImage: eI.premiumGroup.thumbnail,
                videoUrl: eI.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: ea.intl.formatToPlainString(ee.default.LwdrNi, { premiumGroupProductName: (0, q.DP)() }),
                        onClick: H,
                        icon: o.t,
                        iconPosition: "start",
                        disabled: eT,
                    },
                    {
                        variant: "secondary",
                        text: ea.intl.string(ea.t.hvVgAZ),
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
                badgeText: ea.intl.string(ea.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.SHOW_YOUR_STYLE]: {
                name: Y.N.SHOW_YOUR_STYLE,
                title: ea.intl.string(ea.t.Ij3Zmv),
                description: ea.intl.string(ea.t.UsOUxY),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                previewImage: eI.showYourStyle.thumbnail,
                onClick: a ? s : D,
                videoUrl: eI.showYourStyle.assetUrl,
            },
            [Y.N.YOUR_SPACE]: {
                name: Y.N.YOUR_SPACE,
                title: ea.intl.string(ea.t.Wme3nX),
                description: ea.intl.string(ea.t["/aAIqV"]),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                previewImage: eI.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = n(766075);
                        e(v.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eI.yourSpace.assetUrl,
            },
            [Y.N.EMOJIS]: {
                name: Y.N.EMOJIS,
                title: ea.intl.string(ea.t.zY5PPb),
                description: ea.intl.string(ea.t.R5Xag2),
                previewImage: eI.emojis.thumbnail,
                videoUrl: eI.emojis.assetUrl,
            },
            [Y.N.NO_LIMITS]: {
                name: Y.N.NO_LIMITS,
                title: ea.intl.string(ea.t["6b3ydG"]),
                description: ea.intl.string(ea.t["Y+IJyg"]),
                previewImage: eI.noLimits.thumbnail,
                videoUrl: eI.noLimits.assetUrl,
            },
            [Y.N.THREE_P_PROMOTIONS]: {
                name: Y.N.THREE_P_PROMOTIONS,
                title: ev ? ea.intl.string(ea.t.E4U4SS) : ea.intl.string(Q.default.OlObRa),
                description: ev ? ea.intl.string(ea.t["B4uSy/"]) : ea.intl.string(Q.default["8Gl8gP"]),
                descriptionCta: ev ? ea.intl.string(ea.t.RzWDqY) : ea.intl.string(Q.default.HINTfJ),
                previewImage: eI[Y.N.THREE_P_PROMOTIONS].thumbnail,
                videoUrl: eI[Y.N.THREE_P_PROMOTIONS].assetUrl,
                onClick: () =>
                    (0, y.P)({
                        analyticsLocations: t,
                        partnerIds: eO,
                        isLocked: !0,
                        showXboxCard: ev,
                        title: ev ? ea.intl.string(ea.t.NG1e6l) : ea.intl.string(ea.t["7ioAjs"]),
                        subtitle: ev
                            ? ea.intl.format(er.default.zS4GBR, { termsLink: C.A.getArticleURL($.MVz.NITRO_2_POINT_0) })
                            : ea.intl.format(ea.t.LOYRxB, {
                                  helpCenterLink: C.A.getArticleURL($.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: ev ? void 0 : ea.intl.string(ea.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: ev ? e_ : void 0,
            },
            [Y.N.ORB_REWARDS]: {
                name: Y.N.ORB_REWARDS,
                title: ea.intl.string(et.default["ZFJ/NU"]),
                description: ea.intl.string(et.default.wMi514),
                descriptionCta: ea.intl.string(ea.t.hvVgAZ),
                onClick: () => {
                    window.open(C.A.getArticleURL($.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eI.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eI.orbRewards.assetUrl,
                badgeText: ev ? void 0 : ea.intl.string(ea.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.ORB_MULTIPLIER]: {
                name: Y.N.ORB_MULTIPLIER,
                title: ea.intl.string(ea.t.Csf5Ol),
                description: ea.intl.format(ea.t["G5k+lZ"], { bonusOrbMultiplier: eA }),
                descriptionCta: ea.intl.string(ea.t.jVcuVY),
                onClick: () => (0, E.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eI[Y.N.ORB_MULTIPLIER].thumbnail,
                videoUrl: eI[Y.N.ORB_MULTIPLIER].assetUrl,
            },
            [Y.N.COMBINED_ORBS]: {
                name: Y.N.COMBINED_ORBS,
                title: ea.intl.string(ea.t.Tzhw6e),
                description: ea.intl.format(ea.t.djzJx6, { bonusOrbMultiplier: eA }),
                descriptionCta: ea.intl.string(ea.t.RzWDqY),
                onClick: () => (0, E.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: ev ? void 0 : ea.intl.string(ea.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eI[Y.N.COMBINED_ORBS].thumbnail,
                videoUrl: eI[Y.N.COMBINED_ORBS].assetUrl,
            },
            [Y.N.YOUTUBE]: {
                name: Y.N.YOUTUBE,
                caption: (0, i.jsx)("img", { src: ep.A, alt: "YouTube Premium" }),
                title: ea.intl.string(en.default["BdIVB+"]),
                description: ea.intl.format(en.default["3jY5i3"], {
                    helpCenterUrl: C.A.getArticleURL($.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eI[Y.N.YOUTUBE].thumbnail,
                descriptionCta: ea.intl.string(en.default.VwLXyT),
                containerClassName: el.youtubeGradient,
                onClick: () => (0, k.z)(t),
            },
            [Y.N.XBOX_PARTNER_PASS]: {
                name: Y.N.XBOX_PARTNER_PASS,
                caption: (0, i.jsx)("img", { src: eb.A, alt: "Xbox Game Pass" }),
                title: ea.intl.string(er.default.IthhpG),
                description: ea.intl.format(er.default.NKTF0a, {
                    helpCenterLink: C.A.getArticleURL($.MVz.NITRO_2_POINT_0),
                }),
                previewImage: eI[Y.N.XBOX_PARTNER_PASS].thumbnail,
                containerClassName: el.xboxGradient,
                actions: [
                    {
                        variant: "secondary",
                        text: ea.intl.string(ea.t["2pG5Ga"]),
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
                n = (0, F.mh)({ location: "bento_box" }),
                a = (0, g.b)("bento_box"),
                { enabled: s } = L.A.useConfig({ location: "bento_box" }),
                { enabled: i } = (0, S.vc)({ location: "bento_box" }),
                { enabled: r } = z.A.useConfig({ location: "bento_box" }),
                l = i && r,
                d = (0, W.O9)();
            return [
                ...(l ? [Y.N.MACARON] : []),
                ...(n ? [Y.N.YOUTUBE] : []),
                ...(a && (n || l) ? [Y.N.XBOX_PARTNER_PASS] : []),
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
