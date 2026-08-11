i.d(t, { A0: () => eh, NI: () => eb, Ay: () => eg, Tb: () => ef }), i(321073);
var n,
    r,
    s,
    a = i(477900),
    l = i(582128),
    o = i(492462),
    d = i(696292),
    c = i(192308),
    u = i(403581),
    m = i(793574),
    p = i(688810),
    f = i(793943),
    h = i(259065),
    b = i(741231),
    g = i(325499),
    x = i(532794),
    C = i(206835),
    v = i(192444),
    _ = i(216934),
    j = i(591179),
    R = i(462463),
    E = i(780964),
    P = i(766075),
    A = i(676279),
    y = i(975571),
    N = i(789861),
    T = i(769623),
    I = i(920050),
    w = i(707922),
    O = i(852218),
    M = i(161319),
    U = i(503698),
    L = i.n(U),
    S = i(907581),
    k = i(817177);
let D = l.forwardRef((e, t) => {
    let { className: i } = e,
        n = l.useRef(null);
    return (
        l.useImperativeHandle(t, () => ({
            play: () => {
                n.current?.play();
            },
            pause: () => n.current?.pause(),
        })),
        (0, a.jsx)("div", {
            className: L()(i, k.k),
            children: (0, a.jsx)(S.C, { ref: n, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
});
D.displayName = "PremiumRewardsBentoBoxAsset";
var B = i(440005),
    F = i(26508),
    H = i(592909),
    V = i(398523),
    Y = i(881373),
    G = i(862990),
    Z = i(202541);
i(92737);
var W = i(88001),
    K = i(652215),
    z = i(190107),
    X = i(355097),
    $ = i(806343),
    q = i(962995),
    J = i(466919),
    Q = i(490285),
    ee = i(375708),
    et = i(693227),
    ei = i(864386),
    en = i(950228),
    er = i(817577);
let es = "/assets/035ad0fba4997f3f.svg",
    ea =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    el =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    eo =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
    ed =
        "https://cdn.discordapp.com/assets/content/94614efcdbc454cb327b5744501edff7f4342aaf09cc67720a7b25a79262b08a.webp";
var ec = i(576765),
    eu = i(88433),
    em = i(909340),
    ep = i(455482),
    ef = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    eh = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    eb =
        (((s = {}).REFERRAL_PROGRAM = "referralProgram"),
        (s.SERVER_PROFILES = "serverProfiles"),
        (s.SHOW_YOUR_STYLE = "showYourStyle"),
        (s.YOUR_SPACE = "yourSpace"),
        (s.EMOJIS = "emojis"),
        (s.NO_LIMITS = "noLimits"),
        (s.CUSTOM_THEMES = "customThemes"),
        (s.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (s.PREMIUM_GROUP = "premiumGroup"),
        (s.CALL_OF_DUTY = "callOfDuty"),
        (s.THREE_P_PROMOTIONS = "threePPromotions"),
        (s.ORB_REWARDS = "orbRewards"),
        (s.ORB_MULTIPLIER = "orbMultiplier"),
        (s.COMBINED_ORBS = "combinedOrbs"),
        s);
let eg = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { analyticsLocations: t } = (0, p.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, j.X)("useBentoBoxes"),
        r = (0, R.A)({ analyticsLocations: t }),
        s = (0, l.useCallback)(() => {
            (0, b.A)(K.BVt.NITRO_HOME, { search: (0, o.stringify)({ perk: I.CALL_OF_DUTY_3PP_CARD_ID }) });
        }, []),
        U = (0, C.A)({ scrollPosition: X._F.TRY_IT_OUT, analyticsLocations: t }),
        L = (0, l.useCallback)(() => {
            (0, P.openUserSettings)(E.X.PROFILE_PANEL, { analyticsLocations: t }, () =>
                (0, h.L)({ analyticsLocations: t }),
            );
        }, [t]),
        S = (0, l.useCallback)(() => {
            (0, x.A)({ subscriptionTier: Z.pe.TIER_2, initialPlanId: Z.gD.PREMIUM_GROUP_MONTH, analyticsLocations: t });
        }, [t]),
        k = (0, A.TM)(),
        ef = y.A.getArticleURL(K.MVz.REFERRAL_PROGRAM),
        { shouldShowBonusOrbsUX: eh, multiplier: eg } = (0, v.lk)(z.rE.NITRO_HOME_MARKETING),
        ex = l.useRef(null),
        eC = (0, g.b)("bento_box"),
        ev = {
            premiumGroup: { thumbnail: er, assetUrl: er },
            serverProfiles: {
                thumbnail: "/assets/27e5bfe55cd9ceac.png",
                assetUrl: k
                    ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                    : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
            },
            customThemes: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                assetUrl: k
                    ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                    : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
            },
            displayNameStyles: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                assetUrl: k
                    ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                    : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
            },
            referralProgram: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                assetUrl: k
                    ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                    : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
            },
            showYourStyle: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                assetUrl: k
                    ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                    : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
            },
            yourSpace: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                assetUrl: k
                    ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                    : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
            },
            emojis: {
                thumbnail: ec.A,
                assetUrl: k
                    ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                    : eu.A,
            },
            noLimits: {
                thumbnail:
                    "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                assetUrl: k
                    ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                    : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
            },
            orbRewards: { thumbnail: ep.A, assetUrl: em.A },
            orbMultiplier: { thumbnail: eo, assetUrl: k ? ea : el },
            combinedOrbs: { thumbnail: eo, assetUrl: k ? ea : el },
            callOfDuty: { thumbnail: ed, assetUrl: ed },
            threePPromotions: { thumbnail: eC ? (0, a.jsx)(D, { ref: ex }) : es, assetUrl: eC ? void 0 : es },
        },
        e_ = (0, T.Y)({ location: "bento_box" }),
        ej = (0, w.A)(!e_),
        eR = {
            serverProfiles: {
                name: "serverProfiles",
                title: ee.intl.string(ee.t.I9TYMg),
                description: ee.intl.string(ee.t.HMSHeH),
                descriptionCta: ee.intl.string(ee.t.jVcuVY),
                onClick: n ? r : U,
                previewImage: ev.serverProfiles.thumbnail,
                videoUrl: ev.serverProfiles.assetUrl,
            },
            referralProgram: {
                name: "referralProgram",
                title: ee.intl.string(ee.t.tPY4o9),
                description: ee.intl.format(ee.t.jRPQUH, { learnMoreLink: ef }),
                previewImage: ev.referralProgram.thumbnail,
                videoUrl: ev.referralProgram.assetUrl,
            },
            customThemes: {
                name: "customThemes",
                title: ee.intl.string(et.default.XokIHM),
                description: ee.intl.string(et.default["7esQMC"]),
                descriptionCta: ee.intl.string(ee.t.jVcuVY),
                previewImage: ev.customThemes.thumbnail,
                onClick: () => {
                    (0, f.nf)(f.HP.CUSTOM_THEME);
                },
                videoUrl: ev.customThemes.assetUrl,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: ee.intl.string(ei.default.ABtBDQ),
                description: ee.intl.string(ei.default.MFNXZh),
                descriptionCta: ee.intl.string(ee.t.jVcuVY),
                previewImage: ev.displayNameStyles.thumbnail,
                onClick: n ? r : L,
                videoUrl: ev.displayNameStyles.assetUrl,
            },
            premiumGroup: {
                name: "premiumGroup",
                title: ee.intl.formatToPlainString(J.default.VFEDDB, { premiumGroupProductName: (0, W.DP)() }),
                description:
                    e_ && null != ej
                        ? ee.intl.formatToPlainString(J.default.vmvhN5, { pricePerPerson: ej, totalMember: W.LM })
                        : ee.intl.formatToPlainString(J.default.WudmR3, {
                              totalSeats: W.aw,
                              premiumGroupProductName: (0, W.DP)(),
                          }),
                previewImage: ev.premiumGroup.thumbnail,
                videoUrl: ev.premiumGroup.assetUrl,
                actions: [
                    {
                        variant: "primary",
                        text: ee.intl.formatToPlainString(J.default.LwdrNi, { premiumGroupProductName: (0, W.DP)() }),
                        onClick: S,
                        icon: u.t,
                        iconPosition: "start",
                    },
                    {
                        variant: "secondary",
                        text: ee.intl.string(ee.t.hvVgAZ),
                        onClick: () => {
                            (0, c.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("99709"), i.e("3370"), i.e("69595")]).then(
                                    i.bind(i, 526710),
                                );
                                return (t) => (0, a.jsx)(e, { ...t });
                            });
                        },
                    },
                ],
                badgeText: ee.intl.string(ee.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            showYourStyle: {
                name: "showYourStyle",
                title: ee.intl.string(ee.t.Ij3Zmv),
                description: ee.intl.string(ee.t.UsOUxY),
                descriptionCta: ee.intl.string(ee.t.jVcuVY),
                previewImage: ev.showYourStyle.thumbnail,
                onClick: n ? r : U,
                videoUrl: ev.showYourStyle.assetUrl,
            },
            yourSpace: {
                name: "yourSpace",
                title: ee.intl.string(ee.t.Wme3nX),
                description: ee.intl.string(ee.t["/aAIqV"]),
                descriptionCta: ee.intl.string(ee.t.jVcuVY),
                previewImage: ev.yourSpace.thumbnail,
                onClick: function () {
                    {
                        let { openUserSettings: e } = i(766075);
                        e(E.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: t });
                    }
                },
                videoUrl: ev.yourSpace.assetUrl,
            },
            emojis: {
                name: "emojis",
                title: ee.intl.string(ee.t.zY5PPb),
                description: ee.intl.string(ee.t.R5Xag2),
                previewImage: ev.emojis.thumbnail,
                videoUrl: ev.emojis.assetUrl,
            },
            noLimits: {
                name: "noLimits",
                title: ee.intl.string(ee.t["6b3ydG"]),
                description: ee.intl.string(ee.t["Y+IJyg"]),
                previewImage: ev.noLimits.thumbnail,
                videoUrl: ev.noLimits.assetUrl,
            },
            callOfDuty: {
                name: "callOfDuty",
                title: ee.intl.string($.default.sB5V0c),
                description: ee.intl.formatToPlainString($.default["RuZS+B"], { validDates: (0, N.a1)() }),
                previewImage: ev.callOfDuty.thumbnail,
                videoUrl: ev.callOfDuty.assetUrl,
                containerClassName: en.callOfDutyGradient,
                actions: [
                    {
                        variant: "primary",
                        text: ee.intl.string($.default["9Rq7t1"]),
                        onClick: () =>
                            (0, x.A)({
                                subscriptionTier: Z.pe.TIER_2,
                                analyticsLocations: t,
                                onSubscriptionConfirmation: s,
                            }),
                        icon: u.t,
                        iconPosition: "start",
                    },
                ],
            },
            threePPromotions: {
                name: "threePPromotions",
                title: eC ? ee.intl.string(ee.t.E4U4SS) : ee.intl.string(q.default.OlObRa),
                description: eC ? ee.intl.string(ee.t["B4uSy/"]) : ee.intl.string(q.default["8Gl8gP"]),
                descriptionCta: eC ? ee.intl.string(ee.t.RzWDqY) : ee.intl.string(q.default.HINTfJ),
                previewImage: ev.threePPromotions.thumbnail,
                videoUrl: ev.threePPromotions.assetUrl,
                onClick: () =>
                    (0, M.u)({
                        analyticsLocations: t,
                        partnerIds: [O.KS, O.Cs, O.XY, ...(eC ? ["xbox"] : [])],
                        isLocked: !0,
                    }),
                badgeText: eC ? void 0 : ee.intl.string(ee.t.y2b7CA).toLocaleUpperCase(),
                badgeVariant: "expressive",
                mediaRef: eC ? ex : void 0,
            },
            orbRewards: {
                name: "orbRewards",
                title: ee.intl.string(Q.default["ZFJ/NU"]),
                description: ee.intl.string(Q.default.wMi514),
                descriptionCta: ee.intl.string(ee.t.hvVgAZ),
                onClick: () => {
                    window.open(y.A.getArticleURL(K.MVz.ORBS_REWARDS_FAQ), "_blank");
                },
                previewImage: ev.orbRewards.thumbnail,
                previewImageStyle: "overlay",
                backgroundVideoUrl: ev.orbRewards.assetUrl,
                badgeText: eC ? void 0 : ee.intl.string(ee.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
            },
            orbMultiplier: {
                name: "orbMultiplier",
                title: ee.intl.string(ee.t.Csf5Ol),
                description: ee.intl.format(ee.t["G5k+lZ"], { bonusOrbMultiplier: eg }),
                descriptionCta: ee.intl.string(ee.t.jVcuVY),
                onClick: () => (0, _.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeVariant: "expressive",
                previewImage: ev.orbMultiplier.thumbnail,
                videoUrl: ev.orbMultiplier.assetUrl,
            },
            combinedOrbs: {
                name: "combinedOrbs",
                title: ee.intl.string(ee.t.Tzhw6e),
                description: ee.intl.format(ee.t.djzJx6, { bonusOrbMultiplier: eg }),
                descriptionCta: ee.intl.string(ee.t.RzWDqY),
                onClick: () => (0, _.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                badgeText: eC ? void 0 : ee.intl.string(ee.t.oW0eUd).toLocaleUpperCase(),
                badgeVariant: "expressive",
                previewImage: ev.combinedOrbs.thumbnail,
                videoUrl: ev.combinedOrbs.assetUrl,
            },
        };
    function eE(e) {
        let t = eR[e];
        if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
        return t;
    }
    let eP = (function (e) {
            let t = (0, H.A0)({ location: "bento_box" }),
                i = (0, Y.YS)({ location: "bento_box" }).functionalityEnabled,
                { enabled: n } = V.Ay.useConfig({ location: "bento_box" }),
                r = t ? eb.CALL_OF_DUTY : eb.THREE_P_PROMOTIONS,
                s = (0, G.O9)(),
                a = (0, F.DK)(B.W.NITRO, "useBentoBoxes"),
                l = a && e;
            return [
                ...(t || i || n ? [r] : []),
                ...(l ? [eb.COMBINED_ORBS] : []),
                ...(!l && e ? [eb.ORB_MULTIPLIER] : []),
                ...(s ? [eb.PREMIUM_GROUP] : []),
                ...(!l && a ? [eb.ORB_REWARDS] : []),
                eb.DISPLAY_NAME_STYLES,
                eb.CUSTOM_THEMES,
                eb.SERVER_PROFILES,
                eb.REFERRAL_PROGRAM,
            ];
        })(eh),
        eA = [],
        ey = e ? null : eP[0],
        eN = eP.slice(+!e, e ? 2 : 3);
    return (
        null != ey && eA.push([eE(ey)]),
        1 === eN.length ? eA.push([eE(eN[0])]) : 2 === eN.length && eA.push([eE(eN[0]), eE(eN[1])]),
        {
            whatsNewBoxes: [...eA],
            bestOfBoxes: [[eE("showYourStyle")], [eE("yourSpace")], [eE("emojis"), eE("noLimits")]],
        }
    );
};
