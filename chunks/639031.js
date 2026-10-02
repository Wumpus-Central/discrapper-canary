(a.d(t, { Tb: () => eO, A0: () => ex, Ay: () => eI }), a(321073));
var n,
    s,
    i = a(477900),
    r = a(582128),
    l = a(492462),
    o = a(696292),
    c = a(17928),
    d = a(403581),
    u = a(192308),
    m = a(793574),
    p = a(688810),
    b = a(793943),
    f = a(259065),
    _ = a(741231),
    g = a(325499),
    R = a(75678),
    E = a(206835),
    N = a(192444),
    h = a(216934),
    A = a(591179),
    O = a(462463),
    x = a(780964),
    I = a(766075),
    v = a(166403),
    P = a(676279),
    T = a(975571),
    C = a(158045),
    U = a(789861),
    S = a(769623),
    M = a(920050),
    L = a(707922),
    y = a(239016),
    j = a(398523),
    B = a(881373),
    w = a(852218),
    D = a(50949),
    k = a(713271),
    Y = a(503698),
    G = a.n(Y),
    V = a(907581),
    H = a(830370);
let F = r.forwardRef((e, t) => {
    let { className: a } = e,
        n = r.useRef(null);
    return (
        r.useImperativeHandle(t, () => ({
            play: () => {
                n.current?.play();
            },
            pause: () => n.current?.pause(),
        })),
        (0, i.jsx)("div", {
            className: G()(a, H.k),
            children: (0, i.jsx)(V.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
F.displayName = "PremiumRewardsBentoBoxAsset";
var W = a(636592),
    X = a(17843),
    z = a(592909),
    K = a(989790),
    J = a(612413),
    $ = a(202541);
a(92737);
var q = a(88001),
    Z = a(652215),
    Q = a(190107),
    ee = a(355097),
    et = a(310235),
    ea = a(334551),
    en = a(148155),
    es = a(1889),
    ei = a(762359),
    er = a(375708),
    el = a(72191),
    eo = a(701974),
    ec = a(553875),
    ed = a(505051),
    eu = a(817577);
let em = "/assets/035ad0fba4997f3f.svg",
    ep =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    eb =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    ef =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var e_ = a(112992);
let eg =
    "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var eR = a(679502),
    eE = a(576765),
    eN = a(88433),
    eh = a(909340),
    eA = a(455482),
    eO = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    ex = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eI = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, p.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, A.X)("useBentoBoxes"),
        s = (0, O.A)({ analyticsLocations: t }),
        Y = (0, r.useCallback)(() => {
            (0, _.A)(Z.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: M.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        G = (0, r.useCallback)(() => {
            (0, _.A)(Z.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: M.XBOX_PREMIUM_PERK_CARD_ID }) });
        }, []),
        V = (0, E.A)({ scrollPosition: ee._F.TRY_IT_OUT, analyticsLocations: t }),
        H = (0, r.useCallback)(() => {
            (0, I.openUserSettings)(x.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, f.L)({ analyticsLocations: t }),
            );
        }, [t]),
        eO = (0, r.useCallback)(() => {
            (0, R.A)({ subscriptionTier: $.pe.TIER_2, initialPlanId: $.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        ex = (0, P.TM)(),
        eI = T.A.getArticleURL(Z.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: ev, multiplier: eP } = (0, N.lk)(Q.rE.NITRO_HOME_MARKETING),
        eT = r.useRef(null),
        eC = (0, g.b)("bento_box"),
        eU = (function () {
            let { enabled: e } = j.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                t = (0, B.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
            return r.useMemo(() => {
                let a = { [w.XY]: t, [w.KS]: e };
                return w.mY.filter((e) => a[e]);
            }, [e, t, void 0]);
        })(),
        eS = {
            premiumGroup: { thumbnail: eu, assetUrl: eu },
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
                    : eN.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: ex
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: eA.A, assetUrl: eh.A },
            orbMultiplier: { thumbnail: ef, assetUrl: ex ? ep : eb },
            combinedOrbs: { thumbnail: ef, assetUrl: ex ? ep : eb },
            callOfDuty: { thumbnail: eg, assetUrl: eg },
            threePPromotions: { thumbnail: eC ? (0, i.jsx)(F, { ref: eT }) : em, assetUrl: eC ? void 0 : em },
            youtube: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
            },
            xboxPartnerPass: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
            },
        },
        eM = (0, S.Y)({ location: "bento_box" }),
        eL = (0, L.A)(!eM),
        ey = (0, c.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        ej = null != ey && (0, C.Nc)(ey),
        eB = {
            [k.N.SERVER_PROFILES]: {
                name: k.N.SERVER_PROFILES,
                title: er.intl.string(er.t.I9TYMg),
                description: er.intl.string(er.t.HMSHeH),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                onClick: n ? s : V,
                previewImage: eS.serverProfiles.thumbnail,
                videoUrl: eS.serverProfiles.assetUrl,
            },
            [k.N.REFERRAL_PROGRAM]: {
                name: k.N.REFERRAL_PROGRAM,
                title: er.intl.string(er.t.tPY4o9),
                description: er.intl.format(er.t.jRPQUH, { learnMoreLink: eI }),
                previewImage: eS.referralProgram.thumbnail,
                videoUrl: eS.referralProgram.assetUrl,
            },
            [k.N.CUSTOM_THEMES]: {
                name: k.N.CUSTOM_THEMES,
                title: er.intl.string(el.default.XokIHM),
                description: er.intl.string(el.default["7esQMC"]),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eS.customThemes.thumbnail,
                onClick: () => {
                    (0, b.nf)(b.HP.CUSTOM_THEME);
                },
                videoUrl: eS.customThemes.assetUrl,
            },
            [k.N.DISPLAY_NAME_STYLES]: {
                name: k.N.DISPLAY_NAME_STYLES,
                title: er.intl.string(eo.default.ABtBDQ),
                description: er.intl.string(eo.default.MFNXZh),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eS.displayNameStyles.thumbnail,
                onClick: n ? s : H,
                videoUrl: eS.displayNameStyles.assetUrl,
            },
            [k.N.PREMIUM_GROUP]: {
                name: k.N.PREMIUM_GROUP,
                title: er.intl.formatToPlainString(en.default.VFEDDB, { premiumGroupProductName: (0, q.DP)() }),
                description:
                    eM && null != eL
                        ? er.intl.formatToPlainString(en.default.vmvhN5, { pricePerPerson: eL, totalMember: q.LM })
                        : er.intl.formatToPlainString(en.default.WudmR3, {
                              totalSeats: q.aw,
                              premiumGroupProductName: (0, q.DP)(),
                          }),
                previewImage: eS.premiumGroup.thumbnail,
                videoUrl: eS.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: er.intl.formatToPlainString(en.default.LwdrNi, { premiumGroupProductName: (0, q.DP)() }),
                        onClick: eO,
                        icon: d.t,
                        iconPosition: "start",
                        disabled: ej,
                    },
                    {
                        variant: "secondary",
                        text: er.intl.string(er.t.hvVgAZ),
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
                badgeText: er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [k.N.SHOW_YOUR_STYLE]: {
                name: k.N.SHOW_YOUR_STYLE,
                title: er.intl.string(er.t.Ij3Zmv),
                description: er.intl.string(er.t.UsOUxY),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eS.showYourStyle.thumbnail,
                onClick: n ? s : V,
                videoUrl: eS.showYourStyle.assetUrl,
            },
            [k.N.YOUR_SPACE]: {
                name: k.N.YOUR_SPACE,
                title: er.intl.string(er.t.Wme3nX),
                description: er.intl.string(er.t["/aAIqV"]),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                previewImage: eS.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = a(766075);
                        e(x.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: eS.yourSpace.assetUrl,
            },
            [k.N.EMOJIS]: {
                name: k.N.EMOJIS,
                title: er.intl.string(er.t.zY5PPb),
                description: er.intl.string(er.t.R5Xag2),
                previewImage: eS.emojis.thumbnail,
                videoUrl: eS.emojis.assetUrl,
            },
            [k.N.NO_LIMITS]: {
                name: k.N.NO_LIMITS,
                title: er.intl.string(er.t["6b3ydG"]),
                description: er.intl.string(er.t["Y+IJyg"]),
                previewImage: eS.noLimits.thumbnail,
                videoUrl: eS.noLimits.assetUrl,
            },
            [k.N.CALL_OF_DUTY]: {
                name: k.N.CALL_OF_DUTY,
                title: er.intl.string(et.default.sB5V0c),
                description: er.intl.formatToPlainString(et.default["RuZS+B"], { validDates: (0, U.a1)() }),
                previewImage: eS[k.N.CALL_OF_DUTY].thumbnail,
                videoUrl: eS[k.N.CALL_OF_DUTY].assetUrl,
                containerClassName: ed.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: er.intl.string(et.default["9Rq7t1"]),
                        onClick: () =>
                            (0, R.A)({
                                subscriptionTier: $.pe.TIER_2,
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
                title: eC ? er.intl.string(er.t.E4U4SS) : er.intl.string(ea.default.OlObRa),
                description: eC ? er.intl.string(er.t["B4uSy/"]) : er.intl.string(ea.default["8Gl8gP"]),
                descriptionCta: eC ? er.intl.string(er.t.RzWDqY) : er.intl.string(ea.default.HINTfJ),
                previewImage: eS[k.N.THREE_P_PROMOTIONS].thumbnail,
                videoUrl: eS[k.N.THREE_P_PROMOTIONS].assetUrl,
                onClick: () =>
                    (0, y.P)({
                        analyticsLocations: t,
                        partnerIds: eU,
                        isLocked: !0,
                        showXboxCard: eC,
                        title: eC ? er.intl.string(er.t.NG1e6l) : er.intl.string(er.t["7ioAjs"]),
                        subtitle: eC
                            ? er.intl.format(ec.default.zS4GBR, { termsLink: T.A.getArticleURL(Z.MVz.NITRO_2_POINT_0) })
                            : er.intl.format(er.t.LOYRxB, {
                                  helpCenterLink: T.A.getArticleURL(Z.MVz.RECURRING_PROMOTION),
                              }),
                    }),
                badgeText: eC ? void 0 : er.intl.string(er.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eC ? eT : void 0,
            },
            [k.N.ORB_REWARDS]: {
                name: k.N.ORB_REWARDS,
                title: er.intl.string(es.default["ZFJ/NU"]),
                description: er.intl.string(es.default.wMi514),
                descriptionCta: er.intl.string(er.t.hvVgAZ),
                onClick: () => {
                    window.open(T.A.getArticleURL(Z.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: eS.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: eS.orbRewards.assetUrl,
                badgeText: eC ? void 0 : er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            [k.N.ORB_MULTIPLIER]: {
                name: k.N.ORB_MULTIPLIER,
                title: er.intl.string(er.t.Csf5Ol),
                description: er.intl.format(er.t["G5k+lZ"], { bonusOrbMultiplier: eP }),
                descriptionCta: er.intl.string(er.t.jVcuVY),
                onClick: () => (0, h.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: eS[k.N.ORB_MULTIPLIER].thumbnail,
                videoUrl: eS[k.N.ORB_MULTIPLIER].assetUrl,
            },
            [k.N.COMBINED_ORBS]: {
                name: k.N.COMBINED_ORBS,
                title: er.intl.string(er.t.Tzhw6e),
                description: er.intl.format(er.t.djzJx6, { bonusOrbMultiplier: eP }),
                descriptionCta: er.intl.string(er.t.RzWDqY),
                onClick: () => (0, h.m)({ fromContent: o.u.NITRO_HOME_PERK_CARD }),
                badgeText: eC ? void 0 : er.intl.string(er.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: eS[k.N.COMBINED_ORBS].thumbnail,
                videoUrl: eS[k.N.COMBINED_ORBS].assetUrl,
            },
            [k.N.YOUTUBE]: {
                name: k.N.YOUTUBE,
                caption: (0, i.jsx)("img", { src: eR.A, alt: "YouTube Premium" }),
                title: er.intl.string(ei.default["BdIVB+"]),
                description: er.intl.format(ei.default["3jY5i3"], {
                    helpCenterUrl: T.A.getArticleURL(Z.MVz.YOUTUBE_PROMOTION),
                }),
                previewImage: eS[k.N.YOUTUBE].thumbnail,
                descriptionCta: er.intl.string(ei.default.VwLXyT),
                containerClassName: ed.youtubeGradient,
                onClick: () => (0, D.z)(t),
            },
            [k.N.XBOX_PARTNER_PASS]: {
                name: k.N.XBOX_PARTNER_PASS,
                caption: (0, i.jsx)("img", { src: e_.A, alt: "Xbox Game Pass" }),
                title: er.intl.string(ec.default.IthhpG),
                description: er.intl.format(ec.default.NKTF0a, {
                    helpCenterLink: T.A.getArticleURL(Z.MVz.NITRO_2_POINT_0),
                }),
                previewImage: eS[k.N.XBOX_PARTNER_PASS].thumbnail,
                containerClassName: ed.xboxGradient,
                actions: [
                    {
                        variant: "secondary",
                        text: er.intl.string(er.t["2pG5Ga"]),
                        onClick: () =>
                            (0, R.A)({
                                subscriptionTier: $.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: G,
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
            let t = (0, z.A0)({ location: "bento_box" }),
                a = (0, B.YS)({ location: "bento_box" }).functionalityEnabled,
                n = (0, J.mh)({ location: "bento_box" }),
                s = (0, g.b)("bento_box"),
                { enabled: i } = j.A.useConfig({ location: "bento_box" }),
                r = t ? k.N.CALL_OF_DUTY : k.N.THREE_P_PROMOTIONS,
                l = (0, K.O9)(),
                o = (0, X.DK)(W.W.NITRO, "useBentoBoxes"),
                c = o && e;
            return [
                ...(n ? [k.N.YOUTUBE] : []),
                ...(s && n ? [k.N.XBOX_PARTNER_PASS] : []),
                ...(t || a || i ? [r] : []),
                ...(c ? [k.N.COMBINED_ORBS] : []),
                ...(!c && e ? [k.N.ORB_MULTIPLIER] : []),
                ...(l ? [k.N.PREMIUM_GROUP] : []),
                ...(!c && o ? [k.N.ORB_REWARDS] : []),
                k.N.DISPLAY_NAME_STYLES,
                k.N.CUSTOM_THEMES,
                k.N.SERVER_PROFILES,
                k.N.REFERRAL_PROGRAM,
            ];
        })(ev),
        ek = [],
        eY = e ? null : eD[0],
        eG = eD.slice(+!e, e ? 2 : 3);
    return (
        null != eY && ek.push([ew(eY)]),
        1 === eG.length ? ek.push([ew(eG[0])]) : 2 === eG.length && ek.push([ew(eG[0]), ew(eG[1])]),
        {
            whatsNewBoxes: [...ek],
            bestOfBoxes: [[ew(k.N.SHOW_YOUR_STYLE)], [ew(k.N.YOUR_SPACE)], [ew(k.N.EMOJIS), ew(k.N.NO_LIMITS)]],
        }
    );
};
