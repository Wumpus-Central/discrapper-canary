(n.d(t, { A0: () => ey, Tb: () => eS, Ay: () => eB }), n(321073));
var a,
    s,
    i = n(477900),
    r = n(582128),
    l = n(492462),
    d = n(696292),
    o = n(855986),
    c = n(403581),
    u = n(192308),
    m = n(793574),
    b = n(688810),
    p = n(793943),
    f = n(259065),
    h = n(169099),
    N = n(28863),
    g = n(713271),
    E = n(506988),
    R = n(590202),
    x = n(332560),
    A = n(62234),
    _ = n(324061),
    v = n(211824),
    O = n(701256),
    I = n(792996),
    P = n(724052);
let C = E.uF.NITRO_HOME_PERK_CARD;
function M() {
    (0, x.iM)({ content: C, questContentCTA: R.Cy.LEARN_MORE });
}
function T(e, t) {
    return (0, i.jsx)(N.Anchor, { href: v.j, onClick: M, children: e }, t);
}
var U = n(362280),
    j = n(325499),
    S = n(778705),
    y = n(206835),
    L = n(914313),
    B = n(216934),
    w = n(591179),
    k = n(462463),
    D = n(780964),
    Y = n(766075),
    G = n(166403),
    V = n(676279),
    H = n(975571),
    X = n(448645),
    W = n(769623),
    F = n(920050),
    z = n(418135),
    K = n(52530),
    q = n(261995),
    J = n(670328),
    $ = n(398523),
    Z = n(881373),
    Q = n(852218),
    ee = n(50949),
    et = n(503698),
    en = n.n(et),
    ea = n(915945),
    es = n(830370);
function ei(e) {
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
            className: en()(t, es.k),
            children: (0, i.jsx)(ea.C, { ref: a, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
ei.displayName = "PremiumRewardsBentoBoxAsset";
var er = n(728666),
    el = n(886205),
    ed = n(612413),
    eo = n(682901);
n(92737);
var ec = n(88001),
    eu = n(652215),
    em = n(221596),
    eb = n(355097),
    ep = n(691450),
    ef = n(107198),
    eh = n(17268),
    eN = n(524698),
    eg = n(958904),
    eE = n(842671),
    eR = n(831768),
    ex = n(505051),
    eA = n(817577);
let e_ = "/assets/035ad0fba4997f3f.svg",
    ev =
        "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov",
    eO =
        "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
    eI =
        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png";
var eP = n(112992),
    eC = n(679502),
    eM = n(576765),
    eT = n(88433),
    eU = n(909340),
    ej = n(455482),
    eS = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    ey = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eL = new Set([g.N.MACARON, g.N.YOUTUBE, g.N.XBOX_PARTNER_PASS, g.N.CODE_BLURPLE, g.N.THREE_P_PROMOTIONS]),
    eB = function () {
        let e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { analyticsLocations: a } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
            s = (0, w.X)("useBentoBoxes"),
            N = (0, k.A)({ analyticsLocations: a }),
            E = (0, r.useCallback)(() => {
                (0, U.A)(eu.BVt.NITRO_HOME, { search: (0, l.As)({ perk: F.XBOX_PREMIUM_PERK_CARD_ID }) });
            }, []),
            M = (0, y.A)({ scrollPosition: eb._F.TRY_IT_OUT, analyticsLocations: a }),
            et = (0, r.useCallback)(() => {
                (0, Y.openUserSettings)(D.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                    (0, f.L)({ analyticsLocations: a }),
                );
            }, [a]),
            en = (0, r.useCallback)(() => {
                (0, S.A)({
                    subscriptionTier: eo.pe.TIER_2,
                    initialPlanId: eo.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: a,
                });
            }, [a]),
            ea = (0, V.TM)(),
            es = H.A.getArticleURL(eu.MVz.REFERRAL_PROGRAM),
            { shouldShowBonusOrbsUX: eS, multiplier: ey } = (0, L.lk)(em.rE.NITRO_HOME_MARKETING),
            eB = r.useRef(null),
            ew = (0, j.b)("bento_box"),
            ek = (function () {
                let { enabled: e } = $.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                    t = (0, Z.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
                return r.useMemo(() => {
                    let n = { [Q.XY]: t, [Q.KS]: e };
                    return Q.mY.filter((e) => n[e]);
                }, [e, t, void 0]);
            })(),
            eD = {
                premiumGroup: { thumbnail: eA, assetUrl: eA },
                serverProfiles: {
                    thumbnail: "/assets/27e5bfe55cd9ceac.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                        : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
                },
                customThemes: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                        : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
                },
                displayNameStyles: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                        : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
                },
                referralProgram: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                        : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
                },
                showYourStyle: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                        : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
                },
                yourSpace: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                        : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
                },
                emojis: {
                    thumbnail: eM.A,
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                        : eT.A,
                },
                noLimits: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                        : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
                },
                orbRewards: { thumbnail: ej.A, assetUrl: eU.A },
                orbMultiplier: { thumbnail: eI, assetUrl: ea ? ev : eO },
                combinedOrbs: { thumbnail: eI, assetUrl: ea ? ev : eO },
                threePPromotions: { thumbnail: ew ? (0, i.jsx)(ei, { ref: eB }) : e_, assetUrl: ew ? void 0 : e_ },
                youtube: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
                },
                xboxPartnerPass: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
                },
            },
            eY = (0, W.Y)({ location: "bento_box" }),
            eG = (0, z.A)(!eY),
            eV = (0, o.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
            eH = null != eV && (0, X.Nc)(eV),
            eX = (0, q.uq)({ location: "bento_box" }),
            eW = (0, K.qN)("bento_box"),
            eF =
                ((e = (0, _.A)("bento_box")),
                r.useMemo(
                    () =>
                        e
                            ? {
                                  name: g.N.HEXAGON_CAMPAIGN,
                                  title: I.intl.string(O.default["fShp/D"]),
                                  description: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          I.intl.string(O.default["8yWAvp"]),
                                          " ",
                                          I.intl.format(O.default.y2YmJv, {
                                              nonPremiumEndDate: v.Fg,
                                              premiumEndDate: v.zv,
                                              learnMoreHook: T,
                                          }),
                                      ],
                                  }),
                                  previewImage: (0, i.jsx)("div", {
                                      className: P.U,
                                      children: (0, i.jsx)(h.r, { alt: "", ariaHidden: !0, width: 320 }),
                                  }),
                                  actions: [
                                      {
                                          variant: "secondary",
                                          text: I.intl.string(I.t.uw9zI7),
                                          onClick: function () {
                                              ((0, x.iM)({ content: C, questContentCTA: R.Cy.OPEN_AD_PERK_MODAL }),
                                                  (0, A.v6)());
                                          },
                                      },
                                  ],
                              }
                            : null,
                    [e],
                )),
            ez = {
                [g.N.MACARON]: null != eX ? eX : void 0,
                [g.N.CODE_BLURPLE]: null != eW ? eW : void 0,
                [g.N.HEXAGON_CAMPAIGN]: null != eF ? eF : void 0,
                [g.N.SERVER_PROFILES]: {
                    name: g.N.SERVER_PROFILES,
                    title: I.intl.string(I.t.I9TYMg),
                    description: I.intl.string(I.t.HMSHeH),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    onClick: s ? N : M,
                    previewImage: eD.serverProfiles.thumbnail,
                    videoUrl: eD.serverProfiles.assetUrl,
                },
                [g.N.REFERRAL_PROGRAM]: {
                    name: g.N.REFERRAL_PROGRAM,
                    title: I.intl.string(I.t.tPY4o9),
                    description: I.intl.format(I.t.jRPQUH, { learnMoreLink: es }),
                    previewImage: eD.referralProgram.thumbnail,
                    videoUrl: eD.referralProgram.assetUrl,
                },
                [g.N.CUSTOM_THEMES]: {
                    name: g.N.CUSTOM_THEMES,
                    title: I.intl.string(eg.default.XokIHM),
                    description: I.intl.string(eg.default["7esQMC"]),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: eD.customThemes.thumbnail,
                    onClick: () => {
                        (0, p.nf)(p.HP.CUSTOM_THEME);
                    },
                    videoUrl: eD.customThemes.assetUrl,
                },
                [g.N.DISPLAY_NAME_STYLES]: {
                    name: g.N.DISPLAY_NAME_STYLES,
                    title: I.intl.string(eE.default.ABtBDQ),
                    description: I.intl.string(eE.default.MFNXZh),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: eD.displayNameStyles.thumbnail,
                    onClick: s ? N : et,
                    videoUrl: eD.displayNameStyles.assetUrl,
                },
                [g.N.PREMIUM_GROUP]: {
                    name: g.N.PREMIUM_GROUP,
                    title: I.intl.formatToPlainString(ef.default.VFEDDB, { premiumGroupProductName: (0, ec.DP)() }),
                    description:
                        eY && null != eG
                            ? I.intl.formatToPlainString(ef.default.vmvhN5, { pricePerPerson: eG, totalMember: 5 })
                            : I.intl.formatToPlainString(ef.default.WudmR3, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, ec.DP)(),
                              }),
                    previewImage: eD.premiumGroup.thumbnail,
                    videoUrl: eD.premiumGroup.assetUrl,
                    actions: [
                        {
                            variant: "primary",
                            text: I.intl.formatToPlainString(ef.default.LwdrNi, {
                                premiumGroupProductName: (0, ec.DP)(),
                            }),
                            onClick: en,
                            icon: c.NitroWheelIcon,
                            iconPosition: "start",
                            disabled: eH,
                        },
                        {
                            variant: "secondary",
                            text: I.intl.string(I.t.hvVgAZ),
                            onClick: () => {
                                (0, u.mM)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e(499709),
                                        n.e(403370),
                                        n.e(569595),
                                    ]).then(n.bind(n, 526710));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                        },
                    ],
                    badgeText: I.intl.string(I.t.oW0eUd).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                },
                [g.N.SHOW_YOUR_STYLE]: {
                    name: g.N.SHOW_YOUR_STYLE,
                    title: I.intl.string(I.t.Ij3Zmv),
                    description: I.intl.string(I.t.UsOUxY),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: eD.showYourStyle.thumbnail,
                    onClick: s ? N : M,
                    videoUrl: eD.showYourStyle.assetUrl,
                },
                [g.N.YOUR_SPACE]: {
                    name: g.N.YOUR_SPACE,
                    title: I.intl.string(I.t.Wme3nX),
                    description: I.intl.string(I.t["/aAIqV"]),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: eD.yourSpace.thumbnail,
                    onClick: function () {
                        {
                            let { openUserSettings: e } = n(766075);
                            e(D.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                        }
                    },
                    videoUrl: eD.yourSpace.assetUrl,
                },
                [g.N.EMOJIS]: {
                    name: g.N.EMOJIS,
                    title: I.intl.string(I.t.zY5PPb),
                    description: I.intl.string(I.t.R5Xag2),
                    previewImage: eD.emojis.thumbnail,
                    videoUrl: eD.emojis.assetUrl,
                },
                [g.N.NO_LIMITS]: {
                    name: g.N.NO_LIMITS,
                    title: I.intl.string(I.t["6b3ydG"]),
                    description: I.intl.string(I.t["Y+IJyg"]),
                    previewImage: eD.noLimits.thumbnail,
                    videoUrl: eD.noLimits.assetUrl,
                },
                [g.N.THREE_P_PROMOTIONS]: {
                    name: g.N.THREE_P_PROMOTIONS,
                    title: ew ? I.intl.string(I.t.E4U4SS) : I.intl.string(ep.default.OlObRa),
                    description: ew ? I.intl.string(I.t["B4uSy/"]) : I.intl.string(ep.default["8Gl8gP"]),
                    descriptionCta: ew ? I.intl.string(I.t.RzWDqY) : I.intl.string(ep.default.HINTfJ),
                    previewImage: eD[g.N.THREE_P_PROMOTIONS].thumbnail,
                    videoUrl: eD[g.N.THREE_P_PROMOTIONS].assetUrl,
                    onClick: () =>
                        (0, J.P)({
                            analyticsLocations: a,
                            partnerIds: ek,
                            isLocked: !0,
                            showXboxCard: ew,
                            title: ew ? I.intl.string(I.t.NG1e6l) : I.intl.string(I.t["7ioAjs"]),
                            subtitle: ew
                                ? I.intl.format(eR.default.zS4GBR, {
                                      termsLink: H.A.getArticleURL(eu.MVz.NITRO_2_POINT_0),
                                  })
                                : I.intl.format(I.t.LOYRxB, {
                                      helpCenterLink: H.A.getArticleURL(eu.MVz.RECURRING_PROMOTION),
                                  }),
                        }),
                    badgeText: ew ? void 0 : I.intl.string(I.t.y2b7CA).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    mediaRef: ew ? eB : void 0,
                },
                [g.N.ORB_REWARDS]: {
                    name: g.N.ORB_REWARDS,
                    title: I.intl.string(eh.default["ZFJ/NU"]),
                    description: I.intl.string(eh.default.wMi514),
                    descriptionCta: I.intl.string(I.t.hvVgAZ),
                    onClick: () => {
                        window.open(H.A.getArticleURL(eu.MVz.ORBS_REWARDS_FAQ), "_blank");
                    },
                    previewImage: eD.orbRewards.thumbnail,
                    previewImageStyle: "overlay",
                    backgroundVideoUrl: eD.orbRewards.assetUrl,
                    badgeText: ew ? void 0 : I.intl.string(I.t.oW0eUd).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                },
                [g.N.ORB_MULTIPLIER]: {
                    name: g.N.ORB_MULTIPLIER,
                    title: I.intl.string(I.t.Csf5Ol),
                    description: I.intl.format(I.t["G5k+lZ"], { bonusOrbMultiplier: ey }),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    onClick: () => (0, B.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                    badgeVariant: "expressive",
                    previewImage: eD[g.N.ORB_MULTIPLIER].thumbnail,
                    videoUrl: eD[g.N.ORB_MULTIPLIER].assetUrl,
                },
                [g.N.COMBINED_ORBS]: {
                    name: g.N.COMBINED_ORBS,
                    title: I.intl.string(I.t.Tzhw6e),
                    description: I.intl.format(I.t.djzJx6, { bonusOrbMultiplier: ey }),
                    descriptionCta: I.intl.string(I.t.RzWDqY),
                    onClick: () => (0, B.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                    badgeText: ew ? void 0 : I.intl.string(I.t.oW0eUd).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    previewImage: eD[g.N.COMBINED_ORBS].thumbnail,
                    videoUrl: eD[g.N.COMBINED_ORBS].assetUrl,
                },
                [g.N.YOUTUBE]: {
                    name: g.N.YOUTUBE,
                    caption: (0, i.jsx)("img", { src: eC.A, alt: "YouTube Premium" }),
                    title: I.intl.string(eN.default["BdIVB+"]),
                    description: I.intl.format(eN.default["3jY5i3"], {
                        helpCenterUrl: H.A.getArticleURL(eu.MVz.YOUTUBE_PROMOTION),
                    }),
                    previewImage: eD[g.N.YOUTUBE].thumbnail,
                    descriptionCta: I.intl.string(eN.default.VwLXyT),
                    containerClassName: ex.youtubeGradient,
                    onClick: () => (0, ee.z)(a),
                },
                [g.N.XBOX_PARTNER_PASS]: {
                    name: g.N.XBOX_PARTNER_PASS,
                    caption: (0, i.jsx)("img", { src: eP.A, alt: "Xbox Game Pass" }),
                    title: I.intl.string(eR.default.IthhpG),
                    description: I.intl.format(eR.default.NKTF0a, {
                        helpCenterLink: H.A.getArticleURL(eu.MVz.NITRO_2_POINT_0),
                    }),
                    previewImage: eD[g.N.XBOX_PARTNER_PASS].thumbnail,
                    containerClassName: ex.xboxGradient,
                    actions: [
                        {
                            variant: "secondary",
                            text: I.intl.string(I.t["2pG5Ga"]),
                            onClick: () =>
                                (0, S.A)({
                                    subscriptionTier: eo.pe.TIER_2,
                                    analyticsLocations: a,
                                    onSubscriptionConfirmation: E,
                                }),
                            icon: c.NitroWheelIcon,
                            iconPosition: "start",
                        },
                    ],
                },
            };
        function eK(e) {
            let t = ez[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        }
        let eq = (function (e) {
                let t = (0, Z.YS)({ location: "bento_box" }).functionalityEnabled,
                    n = (0, ed.mh)({ location: "bento_box" }),
                    a = (0, j.b)("bento_box"),
                    { enabled: s } = $.A.useConfig({ location: "bento_box" }),
                    { enabled: i } = (0, q.vc)({ location: "bento_box" }),
                    { enabled: r } = el.A.useConfig({ location: "bento_box" }),
                    l = i && r,
                    d = null != (0, K.qN)("bento_box"),
                    o = (0, _.A)("bento_box"),
                    c = (0, er.O9)(),
                    u = [
                        ...(l ? [g.N.MACARON] : []),
                        ...(n ? [g.N.YOUTUBE] : []),
                        ...(a && (n || l) ? [g.N.XBOX_PARTNER_PASS] : []),
                        ...(d ? [g.N.CODE_BLURPLE] : []),
                        ...(t || s ? [g.N.THREE_P_PROMOTIONS] : []),
                        ...(e ? [g.N.COMBINED_ORBS] : []),
                        ...(c ? [g.N.PREMIUM_GROUP] : []),
                        ...(e ? [] : [g.N.ORB_REWARDS]),
                        g.N.DISPLAY_NAME_STYLES,
                        g.N.CUSTOM_THEMES,
                        g.N.SERVER_PROFILES,
                        g.N.REFERRAL_PROGRAM,
                    ];
                return (o && u.splice(1, 0, g.N.HEXAGON_CAMPAIGN), u);
            })(eS),
            eJ = [],
            e$ = eq.filter((e) => eL.has(e)).length >= 3,
            eZ = t ? null : eq[0];
        null != eZ && eJ.push([eK(eZ)]);
        let eQ = eq.slice(+!t, t ? 2 : 3);
        1 === eQ.length ? eJ.push([eK(eQ[0])]) : 2 === eQ.length && eJ.push([eK(eQ[0]), eK(eQ[1])]);
        let e0 = e$ ? eq.slice(t ? 2 : 3, t ? 4 : 5) : [];
        return (
            1 === e0.length ? eJ.push([eK(e0[0])]) : 2 === e0.length && eJ.push([eK(e0[0]), eK(e0[1])]),
            {
                whatsNewBoxes: [...eJ],
                bestOfBoxes: [[eK(g.N.SHOW_YOUR_STYLE)], [eK(g.N.YOUR_SPACE)], [eK(g.N.EMOJIS), eK(g.N.NO_LIMITS)]],
            }
        );
    };
