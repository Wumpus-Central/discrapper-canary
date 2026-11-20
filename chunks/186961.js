(n.d(t, { A0: () => ey, Tb: () => eU, Ay: () => eL }), n(321073));
var a,
    s,
    i = n(477900),
    r = n(582128),
    l = n(492462),
    c = n(696292),
    d = n(855986),
    o = n(403581),
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
    A = n(332560),
    R = n(62234),
    _ = n(324061),
    v = n(211824),
    O = n(701256),
    P = n(792996),
    I = n(724052);
let C = E.uF.NITRO_HOME_PERK_CARD;
function M() {
    (0, A.iM)({ content: C, questContentCTA: x.Cy.LEARN_MORE });
}
function T(e, t) {
    return (0, i.jsx)(N.Anchor, { href: v.j, onClick: M, children: e }, t);
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
    J = n(88210),
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
    ec = n(886205),
    ed = n(817695),
    eo = n(612413),
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
    eA = n(958904),
    eR = n(842671),
    e_ = n(831768),
    ev = n(505051),
    eO = n(817577);
let eP = "/assets/035ad0fba4997f3f.svg";
var eI = n(112992),
    eC = n(45116),
    eM = n(679502),
    eT = n(576765),
    ej = n(88433),
    eU = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    ey = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eS = new Set([
        g.N.MACARON,
        g.N.YOUTUBE,
        g.N.XBOX_PARTNER_PASS,
        g.N.CODE_BLURPLE,
        g.N.THREE_P_PROMOTIONS,
        g.N.VOICEMOD,
    ]),
    eL = function () {
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
            { shouldShowBonusOrbsUX: eU, multiplier: ey } = (0, L.lk)(ep.rE.NITRO_HOME_MARKETING),
            eL = r.useRef(null),
            eB = (0, U.b)("bento_box"),
            ek = (function () {
                let { enabled: e } = Z.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                    t = (0, Q.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
                    { enabled: n } = ee.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" });
                return r.useMemo(() => {
                    let a = { [K.XY]: t, [K.KS]: e, [K.uV]: n };
                    return K.mY.filter((e) => a[e]);
                }, [e, t, n, void 0]);
            })().filter((e) => e !== K.uV),
            eG = {
                premiumGroup: { thumbnail: eO, assetUrl: eO },
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
                    thumbnail: eT.A,
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                        : ej.A,
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
                threePPromotions: { thumbnail: eB ? (0, i.jsx)(er, { ref: eL }) : eP, assetUrl: eB ? void 0 : eP },
                youtube: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
                },
                xboxPartnerPass: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
                },
            },
            eV = (0, W.Y)({ location: "bento_box" }),
            eY = (0, z.A)(!eV),
            ew = (0, d.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
            eD = null != ew && (0, X.Nc)(ew),
            eH = (0, $.uq)({ location: "bento_box" }),
            eX = (0, q.qN)("bento_box"),
            eW =
                ((e = (0, _.A)("bento_box")),
                r.useMemo(
                    () =>
                        e
                            ? {
                                  name: g.N.HEXAGON_CAMPAIGN,
                                  title: P.intl.string(O.default["fShp/D"]),
                                  description: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          P.intl.string(O.default["8yWAvp"]),
                                          " ",
                                          P.intl.format(O.default.y2YmJv, {
                                              nonPremiumEndDate: v.Fg,
                                              premiumEndDate: v.zv,
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
                                              ((0, A.iM)({ content: C, questContentCTA: x.Cy.OPEN_AD_PERK_MODAL }),
                                                  (0, R.v6)());
                                          },
                                      },
                                  ],
                              }
                            : null,
                    [e],
                )),
            eF = {
                [g.N.MACARON]: null != eH ? eH : void 0,
                [g.N.CODE_BLURPLE]: null != eX ? eX : void 0,
                [g.N.HEXAGON_CAMPAIGN]: null != eW ? eW : void 0,
                [g.N.SERVER_PROFILES]: {
                    name: g.N.SERVER_PROFILES,
                    title: P.intl.string(P.t.I9TYMg),
                    description: P.intl.string(P.t.HMSHeH),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    onClick: s ? N : M,
                    previewImage: eG.serverProfiles.thumbnail,
                    videoUrl: eG.serverProfiles.assetUrl,
                },
                [g.N.REFERRAL_PROGRAM]: {
                    name: g.N.REFERRAL_PROGRAM,
                    title: P.intl.string(P.t.tPY4o9),
                    description: P.intl.format(P.t.jRPQUH, { learnMoreLink: ei }),
                    previewImage: eG.referralProgram.thumbnail,
                    videoUrl: eG.referralProgram.assetUrl,
                },
                [g.N.CUSTOM_THEMES]: {
                    name: g.N.CUSTOM_THEMES,
                    title: P.intl.string(eA.default.XokIHM),
                    description: P.intl.string(eA.default["7esQMC"]),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    previewImage: eG.customThemes.thumbnail,
                    onClick: () => {
                        (0, p.nf)(p.HP.CUSTOM_THEME);
                    },
                    videoUrl: eG.customThemes.assetUrl,
                },
                [g.N.DISPLAY_NAME_STYLES]: {
                    name: g.N.DISPLAY_NAME_STYLES,
                    title: P.intl.string(eR.default.ABtBDQ),
                    description: P.intl.string(eR.default.MFNXZh),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    previewImage: eG.displayNameStyles.thumbnail,
                    onClick: s ? N : en,
                    videoUrl: eG.displayNameStyles.assetUrl,
                },
                [g.N.PREMIUM_GROUP]: {
                    name: g.N.PREMIUM_GROUP,
                    title: P.intl.formatToPlainString(eN.default.VFEDDB, { premiumGroupProductName: (0, em.DP)() }),
                    description:
                        eV && null != eY
                            ? P.intl.formatToPlainString(eN.default.vmvhN5, { pricePerPerson: eY, totalMember: 5 })
                            : P.intl.formatToPlainString(eN.default.WudmR3, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, em.DP)(),
                              }),
                    previewImage: eG.premiumGroup.thumbnail,
                    videoUrl: eG.premiumGroup.assetUrl,
                    actions: [
                        {
                            variant: "primary",
                            text: P.intl.formatToPlainString(eN.default.LwdrNi, {
                                premiumGroupProductName: (0, em.DP)(),
                            }),
                            onClick: ea,
                            icon: o.NitroWheelIcon,
                            iconPosition: "start",
                            disabled: eD,
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
                    previewImage: eG.showYourStyle.thumbnail,
                    onClick: s ? N : M,
                    videoUrl: eG.showYourStyle.assetUrl,
                },
                [g.N.YOUR_SPACE]: {
                    name: g.N.YOUR_SPACE,
                    title: P.intl.string(P.t.Wme3nX),
                    description: P.intl.string(P.t["/aAIqV"]),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    previewImage: eG.yourSpace.thumbnail,
                    onClick: function () {
                        {
                            let { openUserSettings: e } = n(766075);
                            e(V.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                        }
                    },
                    videoUrl: eG.yourSpace.assetUrl,
                },
                [g.N.EMOJIS]: {
                    name: g.N.EMOJIS,
                    title: P.intl.string(P.t.zY5PPb),
                    description: P.intl.string(P.t.R5Xag2),
                    previewImage: eG.emojis.thumbnail,
                    videoUrl: eG.emojis.assetUrl,
                },
                [g.N.NO_LIMITS]: {
                    name: g.N.NO_LIMITS,
                    title: P.intl.string(P.t["6b3ydG"]),
                    description: P.intl.string(P.t["Y+IJyg"]),
                    previewImage: eG.noLimits.thumbnail,
                    videoUrl: eG.noLimits.assetUrl,
                },
                [g.N.THREE_P_PROMOTIONS]: {
                    name: g.N.THREE_P_PROMOTIONS,
                    title: eB ? P.intl.string(P.t.E4U4SS) : P.intl.string(eh.default.OlObRa),
                    description: eB ? P.intl.string(P.t["B4uSy/"]) : P.intl.string(eh.default["8Gl8gP"]),
                    descriptionCta: eB ? P.intl.string(P.t.RzWDqY) : P.intl.string(eh.default.HINTfJ),
                    previewImage: eG[g.N.THREE_P_PROMOTIONS].thumbnail,
                    videoUrl: eG[g.N.THREE_P_PROMOTIONS].assetUrl,
                    onClick: () =>
                        (0, J.P)({
                            analyticsLocations: a,
                            partnerIds: ek,
                            isLocked: !0,
                            showXboxCard: eB,
                            title: eB ? P.intl.string(P.t.NG1e6l) : P.intl.string(P.t["7ioAjs"]),
                            subtitle: eB
                                ? P.intl.format(e_.default.zS4GBR, {
                                      termsLink: H.A.getArticleURL(eb.MVz.NITRO_2_POINT_0),
                                  })
                                : P.intl.format(P.t.LOYRxB, {
                                      helpCenterLink: H.A.getArticleURL(eb.MVz.RECURRING_PROMOTION),
                                  }),
                        }),
                    badgeText: eB ? void 0 : P.intl.string(P.t.y2b7CA).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    mediaRef: eB ? eL : void 0,
                },
                [g.N.ORB_MULTIPLIER]: {
                    name: g.N.ORB_MULTIPLIER,
                    title: P.intl.string(P.t.Csf5Ol),
                    description: P.intl.format(P.t["G5k+lZ"], { bonusOrbMultiplier: ey }),
                    descriptionCta: P.intl.string(P.t.jVcuVY),
                    onClick: () => (0, B.m)({ fromContent: c.u.NITRO_HOME_PERK_CARD }),
                    badgeVariant: "expressive",
                    previewImage: eG[g.N.ORB_MULTIPLIER].thumbnail,
                    videoUrl: eG[g.N.ORB_MULTIPLIER].assetUrl,
                },
                [g.N.YOUTUBE]: {
                    name: g.N.YOUTUBE,
                    caption: (0, i.jsx)("img", { src: eM.A, alt: "YouTube Premium" }),
                    title: P.intl.string(ex.default["BdIVB+"]),
                    description: P.intl.format(ex.default["cCl3+a"], {
                        discountPercentage: 20,
                        months: 6,
                        helpCenterUrl: H.A.getArticleURL(eb.MVz.YOUTUBE_PROMOTION),
                    }),
                    previewImage: eG[g.N.YOUTUBE].thumbnail,
                    descriptionCta: P.intl.string(ex.default.VwLXyT),
                    containerClassName: ev.youtubeGradient,
                    onClick: () => (0, et.z)(a),
                },
                [g.N.VOICEMOD]: {
                    name: g.N.VOICEMOD,
                    caption: (0, i.jsx)("img", { src: eC.A, alt: "Voicemod" }),
                    title: P.intl.string(eE.default.pkGxhZ),
                    previewImage:
                        "https://cdn.discordapp.com/assets/content/172748c81c3d0208e7c0ee05aa10cb89d63655350cc95feeab0f54ea4bfdf699.png",
                    description: P.intl.format(eE.default["4ABTfP"], {
                        termsUrl: H.A.getArticleURL(eb.MVz.VOICEMOD_PROMOTION),
                    }),
                    descriptionCta: P.intl.string(eg.default.WMK6Pg),
                    containerClassName: ev.voicemodGradient,
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
                    previewImage: eG[g.N.XBOX_PARTNER_PASS].thumbnail,
                    containerClassName: ev.xboxGradient,
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
                            icon: o.NitroWheelIcon,
                            iconPosition: "start",
                        },
                    ],
                },
            };
        function ez(e) {
            let t = eF[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        }
        let eK = (function (e) {
                let t = (0, Q.YS)({ location: "bento_box" }).functionalityEnabled,
                    n = (0, eo.mh)({ location: "bento_box" }),
                    a = (0, U.b)("bento_box"),
                    { enabled: s } = Z.A.useConfig({ location: "bento_box" }),
                    { enabled: i } = (0, $.vc)({ location: "bento_box" }),
                    { enabled: r } = ec.A.useConfig({ location: "bento_box" }),
                    l = i && r,
                    c = null != (0, q.qN)("bento_box"),
                    d = (0, _.A)("bento_box"),
                    { enabled: o } = ee.A.useConfig({ location: "bento_box" }),
                    { enabled: u } = ed.A.useConfig({ location: "bento_box" }),
                    m = (0, el.O9)(),
                    b = [
                        ...(l ? [g.N.MACARON] : []),
                        ...(n ? [g.N.YOUTUBE] : []),
                        ...(a && (n || l) ? [g.N.XBOX_PARTNER_PASS] : []),
                        ...(c ? [g.N.CODE_BLURPLE] : []),
                        ...(t || s ? [g.N.THREE_P_PROMOTIONS] : []),
                        ...(o && u ? [g.N.VOICEMOD] : []),
                        ...(e ? [g.N.ORB_MULTIPLIER] : []),
                        ...(m ? [g.N.PREMIUM_GROUP] : []),
                        g.N.DISPLAY_NAME_STYLES,
                        g.N.CUSTOM_THEMES,
                        g.N.SERVER_PROFILES,
                        g.N.REFERRAL_PROGRAM,
                    ];
                return (d && b.splice(1, 0, g.N.HEXAGON_CAMPAIGN), b);
            })(eU),
            eq = [],
            e$ = eK.filter((e) => eS.has(e)).length >= 3,
            eJ = t ? null : eK[0];
        null != eJ && eq.push([ez(eJ)]);
        let eZ = eK.slice(+!t, t ? 2 : 3);
        1 === eZ.length ? eq.push([ez(eZ[0])]) : 2 === eZ.length && eq.push([ez(eZ[0]), ez(eZ[1])]);
        let eQ = e$ ? eK.slice(t ? 2 : 3, t ? 4 : 5) : [];
        return (
            1 === eQ.length ? eq.push([ez(eQ[0])]) : 2 === eQ.length && eq.push([ez(eQ[0]), ez(eQ[1])]),
            {
                whatsNewBoxes: [...eq],
                bestOfBoxes: [[ez(g.N.SHOW_YOUR_STYLE)], [ez(g.N.YOUR_SPACE)], [ez(g.N.EMOJIS), ez(g.N.NO_LIMITS)]],
            }
        );
    };
