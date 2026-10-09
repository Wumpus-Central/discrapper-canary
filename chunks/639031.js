(n.d(t, { Tb: () => ex, A0: () => eA, Ay: () => ev }), n(321073));
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
    b = n(688810),
    p = n(793943),
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
    j = n(395315),
    y = n(239016),
    B = n(398523),
    w = n(881373),
    D = n(852218),
    k = n(50949),
    Y = n(713271),
    G = n(503698),
    V = n.n(G),
    H = n(907581),
    F = n(830370);
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
            className: V()(t, F.k),
            children: (0, i.jsx)(H.C, { ref: a, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
X.displayName = "PremiumRewardsBentoBoxAsset";
var W = n(592909),
    z = n(989790),
    K = n(612413),
    q = n(202541);
n(92737);
var J = n(88001),
    $ = n(652215),
    Z = n(190107),
    Q = n(355097),
    ee = n(310235),
    et = n(334551),
    en = n(148155),
    ea = n(1889),
    es = n(762359),
    ei = n(660183),
    er = n(72191),
    el = n(701974),
    eo = n(553875),
    ec = n(505051),
    ed = n(817577);
let eu = "/assets/035ad0fba4997f3f.svg",
    em =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    eb =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    ep =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var ef = n(112992);
let e_ =
    "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var eE = n(679502),
    eg = n(576765),
    eh = n(88433),
    eR = n(909340),
    eN = n(455482),
    ex = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    eA = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let ev = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        a = (0, x.X)("useBentoBoxes"),
        s = (0, A.A)({ analyticsLocations: t }),
        G = (0, r.useCallback)(() => {
            (0, _.A)($.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: L.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        V = (0, r.useCallback)(() => {
            (0, _.A)($.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: L.XBOX_PREMIUM_PERK_CARD_ID }) });
        }, []),
        H = (0, h.A)({ scrollPosition: Q._F.TRY_IT_OUT, analyticsLocations: t }),
        F = (0, r.useCallback)(() => {
            (0, I.openUserSettings)(v.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        ex = (0, r.useCallback)(() => {
            (0, g.A)({ subscriptionTier: q.pe.TIER_2, initialPlanId: q.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        eA = (0, P.TM)(),
        ev = T.A.getArticleURL($.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: eI, multiplier: eO } = (0, R.lk)(Z.rE.NITRO_HOME_MARKETING),
        eP = r.useRef(null),
        eT = (0, E.b)("bento_box"),
        eC = (function () {
            let { enabled: e } = B.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, w.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return r.useMemo(() => {
                let n = { [D.XY]: t, [D.KS]: e };
                return D.mY.filter((e) => n[e]);
            }, [e, t, void 0]);
        })(),
        eU = {
            premiumGroup: { thumbnail: ed, assetUrl: ed },
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
                thumbnail: eg.A,
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
            orbMultiplier: { thumbnail: ep, assetUrl: eA ? em : eb },
            combinedOrbs: { thumbnail: ep, assetUrl: eA ? em : eb },
            callOfDuty: { thumbnail: e_, assetUrl: e_ },
            threePPromotions: { thumbnail: eT ? (0, i.jsx)(X, { ref: eP }) : eu, assetUrl: eT ? void 0 : eu },
            youtube: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
            },
            xboxPartnerPass: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
            },
            macaron: { thumbnail: "", assetUrl: "" },
        },
        eS = (0, S.Y)({ location: "bento_box" }),
        eL = (0, M.A)(!eS),
        eM = (0, c.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        ej = null != eM && (0, C.Nc)(eM),
        ey = (0, j.uq)({ location: "bento_box" }),
        eB = {
            [Y.N.MACARON]: null != ey ? ey : void 0,
            [Y.N.SERVER_PROFILES]: {
                name: Y.N.SERVER_PROFILES,
                title: ei.intl.string(ei.t.I9TYMg),
                description: ei.intl.string(ei.t.HMSHeH),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                onClick: a ? s : H,
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
                    (0, p.nf)(p.HP.CUSTOM_THEME);
                },
                videoUrl: eU.customThemes.assetUrl,
            },
            [Y.N.DISPLAY_NAME_STYLES]: {
                name: Y.N.DISPLAY_NAME_STYLES,
                title: ei.intl.string(el.default.ABtBDQ),
                description: ei.intl.string(el.default.MFNXZh),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                previewImage: eU.displayNameStyles.thumbnail,
                onClick: a ? s : F,
                videoUrl: eU.displayNameStyles.assetUrl,
            },
            [Y.N.PREMIUM_GROUP]: {
                name: Y.N.PREMIUM_GROUP,
                title: ei.intl.formatToPlainString(en.default.VFEDDB, { premiumGroupProductName: (0, J.DP)() }),
                description:
                    eS && null != eL
                        ? ei.intl.formatToPlainString(en.default.vmvhN5, { pricePerPerson: eL, totalMember: J.LM })
                        : ei.intl.formatToPlainString(en.default.WudmR3, {
                              totalSeats: J.aw,
                              premiumGroupProductName: (0, J.DP)(),
                          }),
                previewImage: eU.premiumGroup.thumbnail,
                videoUrl: eU.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: ei.intl.formatToPlainString(en.default.LwdrNi, { premiumGroupProductName: (0, J.DP)() }),
                        onClick: ex,
                        icon: d.t,
                        iconPosition: "start",
                        disabled: ej,
                    },
                    {
                        variant: "secondary",
                        text: ei.intl.string(ei.t.hvVgAZ),
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
                badgeText: ei.intl.string(ei.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.SHOW_YOUR_STYLE]: {
                name: Y.N.SHOW_YOUR_STYLE,
                title: ei.intl.string(ei.t.Ij3Zmv),
                description: ei.intl.string(ei.t.UsOUxY),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                previewImage: eU.showYourStyle.thumbnail,
                onClick: a ? s : H,
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
                        let { openUserSettings: e } = n(766075);
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
                containerClassName: ec.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: ei.intl.string(ee.default["9Rq7t1"]),
                        onClick: () =>
                            (0, g.A)({
                                subscriptionTier: q.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: G,
                            }),
                        icon: d.t,
                        iconPosition: "start",
                    },
                ],
            },
            [Y.N.THREE_P_PROMOTIONS]: {
                name: Y.N.THREE_P_PROMOTIONS,
                title: eT ? ei.intl.string(ei.t.E4U4SS) : ei.intl.string(et.default.OlObRa),
                description: eT ? ei.intl.string(ei.t["B4uSy/"]) : ei.intl.string(et.default["8Gl8gP"]),
                descriptionCta: eT ? ei.intl.string(ei.t.RzWDqY) : ei.intl.string(et.default.HINTfJ),
                previewImage: eU[Y.N.THREE_P_PROMOTIONS].thumbnail,
                videoUrl: eU[Y.N.THREE_P_PROMOTIONS].assetUrl,
                onClick: () =>
                    (0, y.P)({
                        analyticsLocations: t,
                        partnerIds: eC,
                        isLocked: !0,
                        showXboxCard: eT,
                        title: eT ? ei.intl.string(ei.t.NG1e6l) : ei.intl.string(ei.t["7ioAjs"]),
                        subtitle: eT
                            ? ei.intl.format(eo.default.zS4GBR, { termsLink: T.A.getArticleURL($.MVz.NITRO_2_POINT_0) })
                            : ei.intl.format(ei.t.LOYRxB, {
                                  helpCenterLink: T.A.getArticleURL($.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: eT ? void 0 : ei.intl.string(ei.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eT ? eP : void 0,
            },
            [Y.N.ORB_REWARDS]: {
                name: Y.N.ORB_REWARDS,
                title: ei.intl.string(ea.default["ZFJ/NU"]),
                description: ei.intl.string(ea.default.wMi514),
                descriptionCta: ei.intl.string(ei.t.hvVgAZ),
                onClick: () => {
                    window.open(T.A.getArticleURL($.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eU.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eU.orbRewards.assetUrl,
                badgeText: eT ? void 0 : ei.intl.string(ei.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [Y.N.ORB_MULTIPLIER]: {
                name: Y.N.ORB_MULTIPLIER,
                title: ei.intl.string(ei.t.Csf5Ol),
                description: ei.intl.format(ei.t["G5k+lZ"], { bonusOrbMultiplier: eO }),
                descriptionCta: ei.intl.string(ei.t.jVcuVY),
                onClick: () => (0, N.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eU[Y.N.ORB_MULTIPLIER].thumbnail,
                videoUrl: eU[Y.N.ORB_MULTIPLIER].assetUrl,
            },
            [Y.N.COMBINED_ORBS]: {
                name: Y.N.COMBINED_ORBS,
                title: ei.intl.string(ei.t.Tzhw6e),
                description: ei.intl.format(ei.t.djzJx6, { bonusOrbMultiplier: eO }),
                descriptionCta: ei.intl.string(ei.t.RzWDqY),
                onClick: () => (0, N.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeText: eT ? void 0 : ei.intl.string(ei.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eU[Y.N.COMBINED_ORBS].thumbnail,
                videoUrl: eU[Y.N.COMBINED_ORBS].assetUrl,
            },
            [Y.N.YOUTUBE]: {
                name: Y.N.YOUTUBE,
                caption: (0, i.jsx)("img", { src: eE.A, alt: "YouTube Premium" }),
                title: ei.intl.string(es.default["BdIVB+"]),
                description: ei.intl.format(es.default["3jY5i3"], {
                    helpCenterUrl: T.A.getArticleURL($.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eU[Y.N.YOUTUBE].thumbnail,
                descriptionCta: ei.intl.string(es.default.VwLXyT),
                containerClassName: ec.youtubeGradient,
                onClick: () => (0, k.z)(t),
            },
            [Y.N.XBOX_PARTNER_PASS]: {
                name: Y.N.XBOX_PARTNER_PASS,
                caption: (0, i.jsx)("img", { src: ef.A, alt: "Xbox Game Pass" }),
                title: ei.intl.string(eo.default.IthhpG),
                description: ei.intl.format(eo.default.NKTF0a, {
                    helpCenterLink: T.A.getArticleURL($.MVz.NITRO_2_POINT_0),
                }),
                previewImage: eU[Y.N.XBOX_PARTNER_PASS].thumbnail,
                containerClassName: ec.xboxGradient,
                actions: [
                    {
                        variant: "secondary",
                        text: ei.intl.string(ei.t["2pG5Ga"]),
                        onClick: () =>
                            (0, g.A)({
                                subscriptionTier: q.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: V,
                            }),
                        icon: d.t,
                        iconPosition: "start",
                    },
                ],
            },
        };
    function ew(e) {
        let t = eB[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eD = (function (e) {
            let t,
                n = (0, W.A0)({ location: "bento_box" }),
                a = (0, w.YS)({ location: "bento_box" }).functionalityEnabled,
                s = (0, K.mh)({ location: "bento_box" }),
                i = (0, E.b)("bento_box"),
                { enabled: r } = B.A.useConfig({ location: "bento_box" }),
                { enabled: l } = (0, j.vc)({ location: "bento_box" });
            t = n ? Y.N.CALL_OF_DUTY : Y.N.THREE_P_PROMOTIONS;
            let o = (0, z.O9)();
            return [
                ...(l ? [Y.N.MACARON] : []),
                ...(s ? [Y.N.YOUTUBE] : []),
                ...(i && (s || l) ? [Y.N.XBOX_PARTNER_PASS] : []),
                ...(n || a || r ? [t] : []),
                ...(e ? [Y.N.COMBINED_ORBS] : []),
                ...(o ? [Y.N.PREMIUM_GROUP] : []),
                ...(e ? [] : [Y.N.ORB_REWARDS]),
                Y.N.DISPLAY_NAME_STYLES,
                Y.N.CUSTOM_THEMES,
                Y.N.SERVER_PROFILES,
                Y.N.REFERRAL_PROGRAM,
            ];
        })(eI),
        ek = [],
        eY = e ? null : eD[0],
        eG = eD.slice(+!e, e ? 2 : 3);
    return (
        null != eY && ek.push([ew(eY)]),
        1 === eG.length ? ek.push([ew(eG[0])]) : 2 === eG.length && ek.push([ew(eG[0]), ew(eG[1])]),
        {
            whatsNewBoxes: [...ek],
            bestOfBoxes: [[ew(Y.N.SHOW_YOUR_STYLE)], [ew(Y.N.YOUR_SPACE)], [ew(Y.N.EMOJIS), ew(Y.N.NO_LIMITS)]],
        }
    );
};
