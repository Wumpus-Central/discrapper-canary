(n.d(t, { A0: () => eU, Tb: () => ej, Ay: () => eS }), n(321073));
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
    x = n(590202),
    R = n(332560),
    A = n(62234),
    _ = n(324061),
    O = n(211824),
    v = n(701256),
    P = n(792996),
    I = n(724052);
let C = E.uF.NITRO_HOME_PERK_CARD;
function M() {
    (0, R.iM)({ content: C, questContentCTA: x.Cy.LEARN_MORE });
}
function T(e, t) {
    return (0, i.jsx)(N.Anchor, { href: O.j, onClick: M, children: e }, t);
}
var j = n(362280),
    U = n(325499),
    y = n(778705),
    S = n(206835),
    L = n(914313),
    B = n(216934),
    k = n(591179),
    G = n(462463),
    V = n(780964),
    Y = n(766075),
    w = n(166403),
    D = n(676279),
    H = n(975571),
    X = n(448645),
    W = n(769623),
    F = n(920050),
    z = n(418135),
    K = n(852218),
    q = n(52530),
    $ = n(261995),
    J = n(670328),
    Z = n(398523),
    Q = n(881373),
    ee = n(116420),
    et = n(50949),
    en = n(503698),
    ea = n.n(en),
    es = n(915945),
    ei = n(830370);
function er(e) {
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
            className: ea()(t, ei.k),
            children: (0, i.jsx)(es.C, { ref: a, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
er.displayName = "PremiumRewardsBentoBoxAsset";
var el = n(728666),
    ed = n(886205),
    eo = n(817695),
    ec = n(612413),
    eu = n(682901);
n(92737);
var em = n(88001);
n(675772);
var eb = n(652215),
    ep = n(221596),
    ef = n(355097),
    eh = n(691450),
    eN = n(107198),
    eg = n(116716),
    eE = n(12947),
    ex = n(524698),
    eR = n(958904),
    eA = n(842671),
    e_ = n(831768),
    eO = n(505051),
    ev = n(817577);
let eP = "/assets/035ad0fba4997f3f.svg";
var eI = n(112992),
    eC = n(679502),
    eM = n(576765),
    eT = n(88433),
    ej = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    eU = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let ey = new Set([
        g.N.MACARON,
        g.N.YOUTUBE,
        g.N.XBOX_PARTNER_PASS,
        g.N.CODE_BLURPLE,
        g.N.THREE_P_PROMOTIONS,
        g.N.VOICEMOD,
    ]),
    eS = function () {
        let e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { analyticsLocations: a } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
            s = (0, k.X)("useBentoBoxes"),
            N = (0, G.A)({ analyticsLocations: a }),
            E = (0, r.useCallback)(() => {
                (0, j.A)(eb.BVt.NITRO_HOME, { search: (0, l.As)({ perk: F.XBOX_PREMIUM_PERK_CARD_ID }) });
            }, []),
            M = (0, S.A)({ scrollPosition: ef._F.TRY_IT_OUT, analyticsLocations: a }),
            en = (0, r.useCallback)(() => {
                (0, Y.openUserSettings)(V.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                    (0, f.L)({ analyticsLocations: a }),
                );
            }, [a]),
            ea = (0, r.useCallback)(() => {
                (0, y.A)({
                    subscriptionTier: eu.pe.TIER_2,
                    initialPlanId: eu.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: a,
                });
            }, [a]),
            es = (0, D.TM)(),
            ei = H.A.getArticleURL(eb.MVz.REFERRAL_PROGRAM),
            { shouldShowBonusOrbsUX: ej, multiplier: eU } = (0, L.lk)(ep.rE.NITRO_HOME_MARKETING),
            eS = r.useRef(null),
            eL = (0, U.b)("bento_box"),
            eB = (function () {
                let { enabled: e } = Z.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                    t = (0, Q.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
                    { enabled: n } = ee.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" });
                return r.useMemo(() => {
                    let a = { [K.XY]: t, [K.KS]: e, [K.uV]: n };
                    return K.mY.filter((e) => a[e]);
                }, [e, t, n, void 0]);
            })().filter((e) => e !== K.uV),
            ek = {
                premiumGroup: { thumbnail: ev, assetUrl: ev },
                serverProfiles: {
                    thumbnail: "/assets/27e5bfe55cd9ceac.png",
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                        : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
                },
                customThemes: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                        : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
                },
                displayNameStyles: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                        : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
                },
                referralProgram: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                        : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
                },
                showYourStyle: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                        : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
                },
                yourSpace: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                        : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
                },
                emojis: {
                    thumbnail: eM.A,
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                        : eT.A,
                },
                noLimits: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                        : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
                },
                orbMultiplier: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov"
                        : "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
                },
                threePPromotions: { thumbnail: eL ? (0, i.jsx)(er, { ref: eS }) : eP, assetUrl: eL ? void 0 : eP },
                youtube: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
                },
                xboxPartnerPass: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
                },
            },
            eG = (0, W.Y)({ location: "bento_box" }),
            eV = (0, z.A)(!eG),
            eY = (0, o.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
            ew = null != eY && (0, X.Nc)(eY),
            eD = (0, $.uq)({ location: "bento_box" }),
            eH = (0, q.qN)("bento_box"),
            eX =
                ((e = (0, _.A)("bento_box")),
                r.useMemo(
                    () =>
                        e
                            ? {
                                  name: g.N.HEXAGON_CAMPAIGN,
                                  title: P.intl.string(v.default["fShp/D"]),
                                  description: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          P.intl.string(v.default["8yWAvp"]),
                                          " ",
                                          P.intl.format(v.default.y2YmJv, {
                                              nonPremiumEndDate: O.Fg,
                                              premiumEndDate: O.zv,
                                              learnMoreHook: T,
                                          }),
                                      ],
                                  }),
                                  previewImage: (0, i.jsx)("div", {
                                      className: I.U,
                                      children: (0, i.jsx)(h.r, { alt: "", ariaHidden: !0, width: 320 }),
                                  }),
                                  actions: [
                                      {
                                          variant: "secondary",
                                          text: P.intl.string(P.t.uw9zI7),
                                          onClick: function () {
                                              ((0, R.iM)({ content: C, questContentCTA: x.Cy.OPEN_AD_PERK_MODAL }),
                                                  (0, A.v6)());
                                          },
                                      },
                                  ],
                              }
                            : null,
                    [e],
                )),
            eW = {
                [g.N.MACARON]: null != eD ? eD : void 0,
                [g.N.CODE_BLURPLE]: null != eH ? eH : void 0,
                [g.N.HEXAGON_CAMPAIGN]: null != eX ? eX : void 0,
                [g.N.SERVER_PROFILES]: {
                    name: g.N.SERVER_PROFILES,
                    title: P.intl.string(P.t.I9TYMg),
                    description: P.intl.string(P.t.HMSHeH),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    onClick: s ? N : M,
                    previewImage: ek.serverProfiles.thumbnail,
                    videoUrl: ek.serverProfiles.assetUrl,
                },
                [g.N.REFERRAL_PROGRAM]: {
                    name: g.N.REFERRAL_PROGRAM,
                    title: P.intl.string(P.t.tPY4o9),
                    description: P.intl.format(P.t.jRPQUH, { learnMoreLink: ei }),
                    previewImage: ek.referralProgram.thumbnail,
                    videoUrl: ek.referralProgram.assetUrl,
                },
                [g.N.CUSTOM_THEMES]: {
                    name: g.N.CUSTOM_THEMES,
                    title: P.intl.string(eR.default.XokIHM),
                    description: P.intl.string(eR.default["7esQMC"]),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    previewImage: ek.customThemes.thumbnail,
                    onClick: () => {
                        (0, p.nf)(p.HP.CUSTOM_THEME);
                    },
                    videoUrl: ek.customThemes.assetUrl,
                },
                [g.N.DISPLAY_NAME_STYLES]: {
                    name: g.N.DISPLAY_NAME_STYLES,
                    title: P.intl.string(eA.default.ABtBDQ),
                    description: P.intl.string(eA.default.MFNXZh),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    previewImage: ek.displayNameStyles.thumbnail,
                    onClick: s ? N : en,
                    videoUrl: ek.displayNameStyles.assetUrl,
                },
                [g.N.PREMIUM_GROUP]: {
                    name: g.N.PREMIUM_GROUP,
                    title: P.intl.formatToPlainString(eN.default.VFEDDB, { premiumGroupProductName: (0, em.DP)() }),
                    description:
                        eG && null != eV
                            ? P.intl.formatToPlainString(eN.default.vmvhN5, { pricePerPerson: eV, totalMember: 5 })
                            : P.intl.formatToPlainString(eN.default.WudmR3, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, em.DP)(),
                              }),
                    previewImage: ek.premiumGroup.thumbnail,
                    videoUrl: ek.premiumGroup.assetUrl,
                    actions: [
                        {
                            variant: "primary",
                            text: P.intl.formatToPlainString(eN.default.LwdrNi, {
                                premiumGroupProductName: (0, em.DP)(),
                            }),
                            onClick: ea,
                            icon: c.NitroWheelIcon,
                            iconPosition: "start",
                            disabled: ew,
                        },
                        {
                            variant: "secondary",
                            text: P.intl.string(P.t.hvVgAZ),
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
                    badgeText: P.intl.string(P.t.oW0eUd).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                },
                [g.N.SHOW_YOUR_STYLE]: {
                    name: g.N.SHOW_YOUR_STYLE,
                    title: P.intl.string(P.t.Ij3Zmv),
                    description: P.intl.string(P.t.UsOUxY),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    previewImage: ek.showYourStyle.thumbnail,
                    onClick: s ? N : M,
                    videoUrl: ek.showYourStyle.assetUrl,
                },
                [g.N.YOUR_SPACE]: {
                    name: g.N.YOUR_SPACE,
                    title: P.intl.string(P.t.Wme3nX),
                    description: P.intl.string(P.t["/aAIqV"]),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    previewImage: ek.yourSpace.thumbnail,
                    onClick: function () {
                        {
                            let { openUserSettings: e } = n(766075);
                            e(V.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                        }
                    },
                    videoUrl: ek.yourSpace.assetUrl,
                },
                [g.N.EMOJIS]: {
                    name: g.N.EMOJIS,
                    title: P.intl.string(P.t.zY5PPb),
                    description: P.intl.string(P.t.R5Xag2),
                    previewImage: ek.emojis.thumbnail,
                    videoUrl: ek.emojis.assetUrl,
                },
                [g.N.NO_LIMITS]: {
                    name: g.N.NO_LIMITS,
                    title: P.intl.string(P.t["6b3ydG"]),
                    description: P.intl.string(P.t["Y+IJyg"]),
                    previewImage: ek.noLimits.thumbnail,
                    videoUrl: ek.noLimits.assetUrl,
                },
                [g.N.THREE_P_PROMOTIONS]: {
                    name: g.N.THREE_P_PROMOTIONS,
                    title: eL ? P.intl.string(P.t.E4U4SS) : P.intl.string(eh.default.OlObRa),
                    description: eL ? P.intl.string(P.t["B4uSy/"]) : P.intl.string(eh.default["8Gl8gP"]),
                    descriptionCta: eL ? P.intl.string(P.t.RzWDqY) : P.intl.string(eh.default.HINTfJ),
                    previewImage: ek[g.N.THREE_P_PROMOTIONS].thumbnail,
                    videoUrl: ek[g.N.THREE_P_PROMOTIONS].assetUrl,
                    onClick: () =>
                        (0, J.P)({
                            analyticsLocations: a,
                            partnerIds: eB,
                            isLocked: !0,
                            showXboxCard: eL,
                            title: eL ? P.intl.string(P.t.NG1e6l) : P.intl.string(P.t["7ioAjs"]),
                            subtitle: eL
                                ? P.intl.format(e_.default.zS4GBR, {
                                      termsLink: H.A.getArticleURL(eb.MVz.NITRO_2_POINT_0),
                                  })
                                : P.intl.format(P.t.LOYRxB, {
                                      helpCenterLink: H.A.getArticleURL(eb.MVz.RECURRING_PROMOTION),
                                  }),
                        }),
                    badgeText: eL ? void 0 : P.intl.string(P.t.y2b7CA).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    mediaRef: eL ? eS : void 0,
                },
                [g.N.ORB_MULTIPLIER]: {
                    name: g.N.ORB_MULTIPLIER,
                    title: P.intl.string(P.t.Csf5Ol),
                    description: P.intl.format(P.t["G5k+lZ"], { bonusOrbMultiplier: eU }),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    onClick: () => (0, B.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                    badgeVariant: "expressive",
                    previewImage: ek[g.N.ORB_MULTIPLIER].thumbnail,
                    videoUrl: ek[g.N.ORB_MULTIPLIER].assetUrl,
                },
                [g.N.YOUTUBE]: {
                    name: g.N.YOUTUBE,
                    caption: (0, i.jsx)("img", { src: eC.A, alt: "YouTube Premium" }),
                    title: P.intl.string(ex.default["BdIVB+"]),
                    description: P.intl.format(ex.default["cCl3+a"], {
                        discountPercentage: 20,
                        months: 6,
                        helpCenterUrl: H.A.getArticleURL(eb.MVz.YOUTUBE_PROMOTION),
                    }),
                    previewImage: ek[g.N.YOUTUBE].thumbnail,
                    descriptionCta: P.intl.string(ex.default.VwLXyT),
                    containerClassName: eO.youtubeGradient,
                    onClick: () => (0, et.z)(a),
                },
                [g.N.VOICEMOD]: {
                    name: g.N.VOICEMOD,
                    title: P.intl.string(eE.default.pkGxhZ),
                    description: P.intl.format(eE.default["4ABTfP"], {
                        termsUrl: H.A.getArticleURL(eb.MVz.VOICEMOD_PROMOTION),
                    }),
                    descriptionCta: P.intl.string(eg.default.WMK6Pg),
                    containerClassName: eO.voicemodGradient,
                    onClick: () =>
                        (0, J.P)({
                            analyticsLocations: a,
                            partnerIds: [K.uV],
                            isLocked: !0,
                            title: P.intl.string(eE.default.AX5oOl),
                            subtitle: P.intl.format(eg.default.B1kOFr, {
                                termsUrl: H.A.getArticleURL(eb.MVz.VOICEMOD_PROMOTION),
                            }),
                        }),
                },
                [g.N.XBOX_PARTNER_PASS]: {
                    name: g.N.XBOX_PARTNER_PASS,
                    caption: (0, i.jsx)("img", { src: eI.A, alt: "Xbox Game Pass" }),
                    title: P.intl.string(e_.default.IthhpG),
                    description: P.intl.format(e_.default.NKTF0a, {
                        helpCenterLink: H.A.getArticleURL(eb.MVz.NITRO_2_POINT_0),
                    }),
                    previewImage: ek[g.N.XBOX_PARTNER_PASS].thumbnail,
                    containerClassName: eO.xboxGradient,
                    actions: [
                        {
                            variant: "secondary",
                            text: P.intl.string(P.t["2pG5Ga"]),
                            onClick: () =>
                                (0, y.A)({
                                    subscriptionTier: eu.pe.TIER_2,
                                    analyticsLocations: a,
                                    onSubscriptionConfirmation: E,
                                }),
                            icon: c.NitroWheelIcon,
                            iconPosition: "start",
                        },
                    ],
                },
            };
        function eF(e) {
            let t = eW[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        }
        let ez = (function (e) {
                let t = (0, Q.YS)({ location: "bento_box" }).functionalityEnabled,
                    n = (0, ec.mh)({ location: "bento_box" }),
                    a = (0, U.b)("bento_box"),
                    { enabled: s } = Z.A.useConfig({ location: "bento_box" }),
                    { enabled: i } = (0, $.vc)({ location: "bento_box" }),
                    { enabled: r } = ed.A.useConfig({ location: "bento_box" }),
                    l = i && r,
                    d = null != (0, q.qN)("bento_box"),
                    o = (0, _.A)("bento_box"),
                    { enabled: c } = ee.A.useConfig({ location: "bento_box" }),
                    { enabled: u } = eo.A.useConfig({ location: "bento_box" }),
                    m = (0, el.O9)(),
                    b = [
                        ...(l ? [g.N.MACARON] : []),
                        ...(n ? [g.N.YOUTUBE] : []),
                        ...(a && (n || l) ? [g.N.XBOX_PARTNER_PASS] : []),
                        ...(d ? [g.N.CODE_BLURPLE] : []),
                        ...(t || s ? [g.N.THREE_P_PROMOTIONS] : []),
                        ...(c && u ? [g.N.VOICEMOD] : []),
                        ...(e ? [g.N.ORB_MULTIPLIER] : []),
                        ...(m ? [g.N.PREMIUM_GROUP] : []),
                        g.N.DISPLAY_NAME_STYLES,
                        g.N.CUSTOM_THEMES,
                        g.N.SERVER_PROFILES,
                        g.N.REFERRAL_PROGRAM,
                    ];
                return (o && b.splice(1, 0, g.N.HEXAGON_CAMPAIGN), b);
            })(ej),
            eK = [],
            eq = ez.filter((e) => ey.has(e)).length >= 3,
            e$ = t ? null : ez[0];
        null != e$ && eK.push([eF(e$)]);
        let eJ = ez.slice(+!t, t ? 2 : 3);
        1 === eJ.length ? eK.push([eF(eJ[0])]) : 2 === eJ.length && eK.push([eF(eJ[0]), eF(eJ[1])]);
        let eZ = eq ? ez.slice(t ? 2 : 3, t ? 4 : 5) : [];
        return (
            1 === eZ.length ? eK.push([eF(eZ[0])]) : 2 === eZ.length && eK.push([eF(eZ[0]), eF(eZ[1])]),
            {
                whatsNewBoxes: [...eK],
                bestOfBoxes: [[eF(g.N.SHOW_YOUR_STYLE)], [eF(g.N.YOUR_SPACE)], [eF(g.N.EMOJIS), eF(g.N.NO_LIMITS)]],
            }
        );
    };
