(n.d(t, { A0: () => eM, Tb: () => eC, Ay: () => ej }), n(321073));
var a,
    s,
    i = n(477900),
    r = n(582128),
    l = n(492462),
    d = n(696292),
    c = n(855986),
    o = n(403581),
    u = n(192308),
    m = n(793574),
    b = n(688810),
    p = n(793943),
    f = n(259065),
    h = n(169099),
    N = n(28863),
    E = n(713271),
    g = n(506988),
    x = n(590202),
    R = n(332560),
    A = n(62234),
    _ = n(324061),
    v = n(211824),
    P = n(701256),
    I = n(792996),
    O = n(724052);
let C = g.uF.NITRO_HOME_PERK_CARD;
function M() {
    (0, R.iM)({ content: C, questContentCTA: x.Cy.LEARN_MORE });
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
    Y = n(780964),
    w = n(766075),
    D = n(166403),
    V = n(676279),
    H = n(975571),
    X = n(448645),
    W = n(769623),
    F = n(920050),
    z = n(418135),
    K = n(52530),
    q = n(261995),
    $ = n(670328),
    J = n(398523),
    Q = n(881373),
    Z = n(852218);
let ee = (0, n(945810).mj)({
    name: "2026-11-voicemod-3p",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var et = n(50949),
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
    ec = n(612413),
    eo = n(682901);
n(92737);
var eu = n(88001);
n(675772);
var em = n(652215),
    eb = n(221596),
    ep = n(355097),
    ef = n(691450),
    eh = n(107198),
    eN = n(524698),
    eE = n(958904),
    eg = n(842671),
    ex = n(831768),
    eR = n(505051),
    eA = n(817577);
let e_ = "/assets/035ad0fba4997f3f.svg";
var ev = n(112992),
    eP = n(679502),
    eI = n(576765),
    eO = n(88433),
    eC = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    eM = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eT = new Set([E.N.MACARON, E.N.YOUTUBE, E.N.XBOX_PARTNER_PASS, E.N.CODE_BLURPLE, E.N.THREE_P_PROMOTIONS]),
    ej = function () {
        let e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { analyticsLocations: a } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
            s = (0, k.X)("useBentoBoxes"),
            N = (0, G.A)({ analyticsLocations: a }),
            g = (0, r.useCallback)(() => {
                (0, j.A)(em.BVt.NITRO_HOME, { search: (0, l.As)({ perk: F.XBOX_PREMIUM_PERK_CARD_ID }) });
            }, []),
            M = (0, S.A)({ scrollPosition: ep._F.TRY_IT_OUT, analyticsLocations: a }),
            en = (0, r.useCallback)(() => {
                (0, w.openUserSettings)(Y.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                    (0, f.L)({ analyticsLocations: a }),
                );
            }, [a]),
            ea = (0, r.useCallback)(() => {
                (0, y.A)({
                    subscriptionTier: eo.pe.TIER_2,
                    initialPlanId: eo.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: a,
                });
            }, [a]),
            es = (0, V.TM)(),
            ei = H.A.getArticleURL(em.MVz.REFERRAL_PROGRAM),
            { shouldShowBonusOrbsUX: eC, multiplier: eM } = (0, L.lk)(eb.rE.NITRO_HOME_MARKETING),
            ej = r.useRef(null),
            eU = (0, U.b)("bento_box"),
            ey = (function () {
                let { enabled: e } = J.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                    t = (0, Q.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
                    { enabled: n } = ee.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" });
                return r.useMemo(() => {
                    let a = { [Z.XY]: t, [Z.KS]: e, [Z.uV]: n };
                    return Z.mY.filter((e) => a[e]);
                }, [e, t, n, void 0]);
            })(),
            eS = {
                premiumGroup: { thumbnail: eA, assetUrl: eA },
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
                    thumbnail: eI.A,
                    assetUrl: es
                        ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                        : eO.A,
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
                threePPromotions: { thumbnail: eU ? (0, i.jsx)(er, { ref: ej }) : e_, assetUrl: eU ? void 0 : e_ },
                youtube: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
                },
                xboxPartnerPass: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
                },
            },
            eL = (0, W.Y)({ location: "bento_box" }),
            eB = (0, z.A)(!eL),
            ek = (0, c.bG)([D.A], () => D.A.getPremiumTypeSubscription()),
            eG = null != ek && (0, X.Nc)(ek),
            eY = (0, q.uq)({ location: "bento_box" }),
            ew = (0, K.qN)("bento_box"),
            eD =
                ((e = (0, _.A)("bento_box")),
                r.useMemo(
                    () =>
                        e
                            ? {
                                  name: E.N.HEXAGON_CAMPAIGN,
                                  title: I.intl.string(P.default["fShp/D"]),
                                  description: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          I.intl.string(P.default["8yWAvp"]),
                                          " ",
                                          I.intl.format(P.default.y2YmJv, {
                                              nonPremiumEndDate: v.Fg,
                                              premiumEndDate: v.zv,
                                              learnMoreHook: T,
                                          }),
                                      ],
                                  }),
                                  previewImage: (0, i.jsx)("div", {
                                      className: O.U,
                                      children: (0, i.jsx)(h.r, { alt: "", ariaHidden: !0, width: 320 }),
                                  }),
                                  actions: [
                                      {
                                          variant: "secondary",
                                          text: I.intl.string(I.t.uw9zI7),
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
            eV = {
                [E.N.MACARON]: null != eY ? eY : void 0,
                [E.N.CODE_BLURPLE]: null != ew ? ew : void 0,
                [E.N.HEXAGON_CAMPAIGN]: null != eD ? eD : void 0,
                [E.N.SERVER_PROFILES]: {
                    name: E.N.SERVER_PROFILES,
                    title: I.intl.string(I.t.I9TYMg),
                    description: I.intl.string(I.t.HMSHeH),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    onClick: s ? N : M,
                    previewImage: eS.serverProfiles.thumbnail,
                    videoUrl: eS.serverProfiles.assetUrl,
                },
                [E.N.REFERRAL_PROGRAM]: {
                    name: E.N.REFERRAL_PROGRAM,
                    title: I.intl.string(I.t.tPY4o9),
                    description: I.intl.format(I.t.jRPQUH, { learnMoreLink: ei }),
                    previewImage: eS.referralProgram.thumbnail,
                    videoUrl: eS.referralProgram.assetUrl,
                },
                [E.N.CUSTOM_THEMES]: {
                    name: E.N.CUSTOM_THEMES,
                    title: I.intl.string(eE.default.XokIHM),
                    description: I.intl.string(eE.default["7esQMC"]),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: eS.customThemes.thumbnail,
                    onClick: () => {
                        (0, p.nf)(p.HP.CUSTOM_THEME);
                    },
                    videoUrl: eS.customThemes.assetUrl,
                },
                [E.N.DISPLAY_NAME_STYLES]: {
                    name: E.N.DISPLAY_NAME_STYLES,
                    title: I.intl.string(eg.default.ABtBDQ),
                    description: I.intl.string(eg.default.MFNXZh),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: eS.displayNameStyles.thumbnail,
                    onClick: s ? N : en,
                    videoUrl: eS.displayNameStyles.assetUrl,
                },
                [E.N.PREMIUM_GROUP]: {
                    name: E.N.PREMIUM_GROUP,
                    title: I.intl.formatToPlainString(eh.default.VFEDDB, { premiumGroupProductName: (0, eu.DP)() }),
                    description:
                        eL && null != eB
                            ? I.intl.formatToPlainString(eh.default.vmvhN5, { pricePerPerson: eB, totalMember: 5 })
                            : I.intl.formatToPlainString(eh.default.WudmR3, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, eu.DP)(),
                              }),
                    previewImage: eS.premiumGroup.thumbnail,
                    videoUrl: eS.premiumGroup.assetUrl,
                    actions: [
                        {
                            variant: "primary",
                            text: I.intl.formatToPlainString(eh.default.LwdrNi, {
                                premiumGroupProductName: (0, eu.DP)(),
                            }),
                            onClick: ea,
                            icon: o.NitroWheelIcon,
                            iconPosition: "start",
                            disabled: eG,
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
                [E.N.SHOW_YOUR_STYLE]: {
                    name: E.N.SHOW_YOUR_STYLE,
                    title: I.intl.string(I.t.Ij3Zmv),
                    description: I.intl.string(I.t.UsOUxY),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: eS.showYourStyle.thumbnail,
                    onClick: s ? N : M,
                    videoUrl: eS.showYourStyle.assetUrl,
                },
                [E.N.YOUR_SPACE]: {
                    name: E.N.YOUR_SPACE,
                    title: I.intl.string(I.t.Wme3nX),
                    description: I.intl.string(I.t["/aAIqV"]),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: eS.yourSpace.thumbnail,
                    onClick: function () {
                        {
                            let { openUserSettings: e } = n(766075);
                            e(Y.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                        }
                    },
                    videoUrl: eS.yourSpace.assetUrl,
                },
                [E.N.EMOJIS]: {
                    name: E.N.EMOJIS,
                    title: I.intl.string(I.t.zY5PPb),
                    description: I.intl.string(I.t.R5Xag2),
                    previewImage: eS.emojis.thumbnail,
                    videoUrl: eS.emojis.assetUrl,
                },
                [E.N.NO_LIMITS]: {
                    name: E.N.NO_LIMITS,
                    title: I.intl.string(I.t["6b3ydG"]),
                    description: I.intl.string(I.t["Y+IJyg"]),
                    previewImage: eS.noLimits.thumbnail,
                    videoUrl: eS.noLimits.assetUrl,
                },
                [E.N.THREE_P_PROMOTIONS]: {
                    name: E.N.THREE_P_PROMOTIONS,
                    title: eU ? I.intl.string(I.t.E4U4SS) : I.intl.string(ef.default.OlObRa),
                    description: eU ? I.intl.string(I.t["B4uSy/"]) : I.intl.string(ef.default["8Gl8gP"]),
                    descriptionCta: eU ? I.intl.string(I.t.RzWDqY) : I.intl.string(ef.default.HINTfJ),
                    previewImage: eS[E.N.THREE_P_PROMOTIONS].thumbnail,
                    videoUrl: eS[E.N.THREE_P_PROMOTIONS].assetUrl,
                    onClick: () =>
                        (0, $.P)({
                            analyticsLocations: a,
                            partnerIds: ey,
                            isLocked: !0,
                            showXboxCard: eU,
                            title: eU ? I.intl.string(I.t.NG1e6l) : I.intl.string(I.t["7ioAjs"]),
                            subtitle: eU
                                ? I.intl.format(ex.default.zS4GBR, {
                                      termsLink: H.A.getArticleURL(em.MVz.NITRO_2_POINT_0),
                                  })
                                : I.intl.format(I.t.LOYRxB, {
                                      helpCenterLink: H.A.getArticleURL(em.MVz.RECURRING_PROMOTION),
                                  }),
                        }),
                    badgeText: eU ? void 0 : I.intl.string(I.t.y2b7CA).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    mediaRef: eU ? ej : void 0,
                },
                [E.N.ORB_MULTIPLIER]: {
                    name: E.N.ORB_MULTIPLIER,
                    title: I.intl.string(I.t.Csf5Ol),
                    description: I.intl.format(I.t["G5k+lZ"], { bonusOrbMultiplier: eM }),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    onClick: () => (0, B.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                    badgeVariant: "expressive",
                    previewImage: eS[E.N.ORB_MULTIPLIER].thumbnail,
                    videoUrl: eS[E.N.ORB_MULTIPLIER].assetUrl,
                },
                [E.N.YOUTUBE]: {
                    name: E.N.YOUTUBE,
                    caption: (0, i.jsx)("img", { src: eP.A, alt: "YouTube Premium" }),
                    title: I.intl.string(eN.default["BdIVB+"]),
                    description: I.intl.format(eN.default["cCl3+a"], {
                        discountPercentage: 20,
                        months: 6,
                        helpCenterUrl: H.A.getArticleURL(em.MVz.YOUTUBE_PROMOTION),
                    }),
                    previewImage: eS[E.N.YOUTUBE].thumbnail,
                    descriptionCta: I.intl.string(eN.default.VwLXyT),
                    containerClassName: eR.youtubeGradient,
                    onClick: () => (0, et.z)(a),
                },
                [E.N.XBOX_PARTNER_PASS]: {
                    name: E.N.XBOX_PARTNER_PASS,
                    caption: (0, i.jsx)("img", { src: ev.A, alt: "Xbox Game Pass" }),
                    title: I.intl.string(ex.default.IthhpG),
                    description: I.intl.format(ex.default.NKTF0a, {
                        helpCenterLink: H.A.getArticleURL(em.MVz.NITRO_2_POINT_0),
                    }),
                    previewImage: eS[E.N.XBOX_PARTNER_PASS].thumbnail,
                    containerClassName: eR.xboxGradient,
                    actions: [
                        {
                            variant: "secondary",
                            text: I.intl.string(I.t["2pG5Ga"]),
                            onClick: () =>
                                (0, y.A)({
                                    subscriptionTier: eo.pe.TIER_2,
                                    analyticsLocations: a,
                                    onSubscriptionConfirmation: g,
                                }),
                            icon: o.NitroWheelIcon,
                            iconPosition: "start",
                        },
                    ],
                },
            };
        function eH(e) {
            let t = eV[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        }
        let eX = (function (e) {
                let t = (0, Q.YS)({ location: "bento_box" }).functionalityEnabled,
                    n = (0, ec.mh)({ location: "bento_box" }),
                    a = (0, U.b)("bento_box"),
                    { enabled: s } = J.A.useConfig({ location: "bento_box" }),
                    { enabled: i } = (0, q.vc)({ location: "bento_box" }),
                    { enabled: r } = ed.A.useConfig({ location: "bento_box" }),
                    l = i && r,
                    d = null != (0, K.qN)("bento_box"),
                    c = (0, _.A)("bento_box"),
                    o = (0, el.O9)(),
                    u = [
                        ...(l ? [E.N.MACARON] : []),
                        ...(n ? [E.N.YOUTUBE] : []),
                        ...(a && (n || l) ? [E.N.XBOX_PARTNER_PASS] : []),
                        ...(d ? [E.N.CODE_BLURPLE] : []),
                        ...(t || s ? [E.N.THREE_P_PROMOTIONS] : []),
                        ...(e ? [E.N.ORB_MULTIPLIER] : []),
                        ...(o ? [E.N.PREMIUM_GROUP] : []),
                        E.N.DISPLAY_NAME_STYLES,
                        E.N.CUSTOM_THEMES,
                        E.N.SERVER_PROFILES,
                        E.N.REFERRAL_PROGRAM,
                    ];
                return (c && u.splice(1, 0, E.N.HEXAGON_CAMPAIGN), u);
            })(eC),
            eW = [],
            eF = eX.filter((e) => eT.has(e)).length >= 3,
            ez = t ? null : eX[0];
        null != ez && eW.push([eH(ez)]);
        let eK = eX.slice(+!t, t ? 2 : 3);
        1 === eK.length ? eW.push([eH(eK[0])]) : 2 === eK.length && eW.push([eH(eK[0]), eH(eK[1])]);
        let eq = eF ? eX.slice(t ? 2 : 3, t ? 4 : 5) : [];
        return (
            1 === eq.length ? eW.push([eH(eq[0])]) : 2 === eq.length && eW.push([eH(eq[0]), eH(eq[1])]),
            {
                whatsNewBoxes: [...eW],
                bestOfBoxes: [[eH(E.N.SHOW_YOUR_STYLE)], [eH(E.N.YOUR_SPACE)], [eH(E.N.EMOJIS), eH(E.N.NO_LIMITS)]],
            }
        );
    };
