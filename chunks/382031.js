(n.d(t, { A0: () => eC, Tb: () => eO, Ay: () => eM }), n(321073));
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
function T() {
    (0, R.iM)({ content: C, questContentCTA: x.Cy.LEARN_MORE });
}
function M(e, t) {
    return (0, i.jsx)(N.Anchor, { href: v.j, onClick: T, children: e }, t);
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
    Z = n(852218),
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
    ec = n(682901);
n(92737);
var eo = n(88001);
n(675772);
var eu = n(652215),
    em = n(221596),
    eb = n(355097),
    ep = n(691450),
    ef = n(107198),
    eh = n(524698),
    eN = n(958904),
    eE = n(842671),
    eg = n(831768),
    ex = n(505051),
    eR = n(817577);
let eA = "/assets/035ad0fba4997f3f.svg";
var e_ = n(112992),
    ev = n(679502),
    eP = n(576765),
    eI = n(88433),
    eO = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    eC = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eT = new Set([E.N.MACARON, E.N.YOUTUBE, E.N.XBOX_PARTNER_PASS, E.N.CODE_BLURPLE, E.N.THREE_P_PROMOTIONS]),
    eM = function () {
        let e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { analyticsLocations: a } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
            s = (0, k.X)("useBentoBoxes"),
            N = (0, G.A)({ analyticsLocations: a }),
            g = (0, r.useCallback)(() => {
                (0, j.A)(eu.BVt.NITRO_HOME, { search: (0, l.As)({ perk: F.XBOX_PREMIUM_PERK_CARD_ID }) });
            }, []),
            T = (0, S.A)({ scrollPosition: eb._F.TRY_IT_OUT, analyticsLocations: a }),
            et = (0, r.useCallback)(() => {
                (0, w.openUserSettings)(Y.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                    (0, f.L)({ analyticsLocations: a }),
                );
            }, [a]),
            en = (0, r.useCallback)(() => {
                (0, y.A)({
                    subscriptionTier: ec.pe.TIER_2,
                    initialPlanId: ec.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: a,
                });
            }, [a]),
            ea = (0, V.TM)(),
            es = H.A.getArticleURL(eu.MVz.REFERRAL_PROGRAM),
            { shouldShowBonusOrbsUX: eO, multiplier: eC } = (0, L.lk)(em.rE.NITRO_HOME_MARKETING),
            eM = r.useRef(null),
            ej = (0, U.b)("bento_box"),
            eU = (function () {
                let { enabled: e } = J.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                    t = (0, Q.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled;
                return r.useMemo(() => {
                    let n = { [Z.XY]: t, [Z.KS]: e };
                    return Z.mY.filter((e) => n[e]);
                }, [e, t, void 0]);
            })(),
            ey = {
                premiumGroup: { thumbnail: eR, assetUrl: eR },
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
                    thumbnail: eP.A,
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                        : eI.A,
                },
                noLimits: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                        : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
                },
                orbMultiplier: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
                    assetUrl: ea
                        ? "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov"
                        : "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
                },
                threePPromotions: { thumbnail: ej ? (0, i.jsx)(ei, { ref: eM }) : eA, assetUrl: ej ? void 0 : eA },
                youtube: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
                },
                xboxPartnerPass: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
                },
            },
            eS = (0, W.Y)({ location: "bento_box" }),
            eL = (0, z.A)(!eS),
            eB = (0, c.bG)([D.A], () => D.A.getPremiumTypeSubscription()),
            ek = null != eB && (0, X.Nc)(eB),
            eG = (0, q.uq)({ location: "bento_box" }),
            eY = (0, K.qN)("bento_box"),
            ew =
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
                                              learnMoreHook: M,
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
            eD = {
                [E.N.MACARON]: null != eG ? eG : void 0,
                [E.N.CODE_BLURPLE]: null != eY ? eY : void 0,
                [E.N.HEXAGON_CAMPAIGN]: null != ew ? ew : void 0,
                [E.N.SERVER_PROFILES]: {
                    name: E.N.SERVER_PROFILES,
                    title: I.intl.string(I.t.I9TYMg),
                    description: I.intl.string(I.t.HMSHeH),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    onClick: s ? N : T,
                    previewImage: ey.serverProfiles.thumbnail,
                    videoUrl: ey.serverProfiles.assetUrl,
                },
                [E.N.REFERRAL_PROGRAM]: {
                    name: E.N.REFERRAL_PROGRAM,
                    title: I.intl.string(I.t.tPY4o9),
                    description: I.intl.format(I.t.jRPQUH, { learnMoreLink: es }),
                    previewImage: ey.referralProgram.thumbnail,
                    videoUrl: ey.referralProgram.assetUrl,
                },
                [E.N.CUSTOM_THEMES]: {
                    name: E.N.CUSTOM_THEMES,
                    title: I.intl.string(eN.default.XokIHM),
                    description: I.intl.string(eN.default["7esQMC"]),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: ey.customThemes.thumbnail,
                    onClick: () => {
                        (0, p.nf)(p.HP.CUSTOM_THEME);
                    },
                    videoUrl: ey.customThemes.assetUrl,
                },
                [E.N.DISPLAY_NAME_STYLES]: {
                    name: E.N.DISPLAY_NAME_STYLES,
                    title: I.intl.string(eE.default.ABtBDQ),
                    description: I.intl.string(eE.default.MFNXZh),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: ey.displayNameStyles.thumbnail,
                    onClick: s ? N : et,
                    videoUrl: ey.displayNameStyles.assetUrl,
                },
                [E.N.PREMIUM_GROUP]: {
                    name: E.N.PREMIUM_GROUP,
                    title: I.intl.formatToPlainString(ef.default.VFEDDB, { premiumGroupProductName: (0, eo.DP)() }),
                    description:
                        eS && null != eL
                            ? I.intl.formatToPlainString(ef.default.vmvhN5, { pricePerPerson: eL, totalMember: 5 })
                            : I.intl.formatToPlainString(ef.default.WudmR3, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, eo.DP)(),
                              }),
                    previewImage: ey.premiumGroup.thumbnail,
                    videoUrl: ey.premiumGroup.assetUrl,
                    actions: [
                        {
                            variant: "primary",
                            text: I.intl.formatToPlainString(ef.default.LwdrNi, {
                                premiumGroupProductName: (0, eo.DP)(),
                            }),
                            onClick: en,
                            icon: o.NitroWheelIcon,
                            iconPosition: "start",
                            disabled: ek,
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
                    previewImage: ey.showYourStyle.thumbnail,
                    onClick: s ? N : T,
                    videoUrl: ey.showYourStyle.assetUrl,
                },
                [E.N.YOUR_SPACE]: {
                    name: E.N.YOUR_SPACE,
                    title: I.intl.string(I.t.Wme3nX),
                    description: I.intl.string(I.t["/aAIqV"]),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    previewImage: ey.yourSpace.thumbnail,
                    onClick: function () {
                        {
                            let { openUserSettings: e } = n(766075);
                            e(Y.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                        }
                    },
                    videoUrl: ey.yourSpace.assetUrl,
                },
                [E.N.EMOJIS]: {
                    name: E.N.EMOJIS,
                    title: I.intl.string(I.t.zY5PPb),
                    description: I.intl.string(I.t.R5Xag2),
                    previewImage: ey.emojis.thumbnail,
                    videoUrl: ey.emojis.assetUrl,
                },
                [E.N.NO_LIMITS]: {
                    name: E.N.NO_LIMITS,
                    title: I.intl.string(I.t["6b3ydG"]),
                    description: I.intl.string(I.t["Y+IJyg"]),
                    previewImage: ey.noLimits.thumbnail,
                    videoUrl: ey.noLimits.assetUrl,
                },
                [E.N.THREE_P_PROMOTIONS]: {
                    name: E.N.THREE_P_PROMOTIONS,
                    title: ej ? I.intl.string(I.t.E4U4SS) : I.intl.string(ep.default.OlObRa),
                    description: ej ? I.intl.string(I.t["B4uSy/"]) : I.intl.string(ep.default["8Gl8gP"]),
                    descriptionCta: ej ? I.intl.string(I.t.RzWDqY) : I.intl.string(ep.default.HINTfJ),
                    previewImage: ey[E.N.THREE_P_PROMOTIONS].thumbnail,
                    videoUrl: ey[E.N.THREE_P_PROMOTIONS].assetUrl,
                    onClick: () =>
                        (0, $.P)({
                            analyticsLocations: a,
                            partnerIds: eU,
                            isLocked: !0,
                            showXboxCard: ej,
                            title: ej ? I.intl.string(I.t.NG1e6l) : I.intl.string(I.t["7ioAjs"]),
                            subtitle: ej
                                ? I.intl.format(eg.default.zS4GBR, {
                                      termsLink: H.A.getArticleURL(eu.MVz.NITRO_2_POINT_0),
                                  })
                                : I.intl.format(I.t.LOYRxB, {
                                      helpCenterLink: H.A.getArticleURL(eu.MVz.RECURRING_PROMOTION),
                                  }),
                        }),
                    badgeText: ej ? void 0 : I.intl.string(I.t.y2b7CA).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    mediaRef: ej ? eM : void 0,
                },
                [E.N.ORB_MULTIPLIER]: {
                    name: E.N.ORB_MULTIPLIER,
                    title: I.intl.string(I.t.Csf5Ol),
                    description: I.intl.format(I.t["G5k+lZ"], { bonusOrbMultiplier: eC }),
                    descriptionCta: I.intl.string(I.t.jVcuVY),
                    onClick: () => (0, B.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                    badgeVariant: "expressive",
                    previewImage: ey[E.N.ORB_MULTIPLIER].thumbnail,
                    videoUrl: ey[E.N.ORB_MULTIPLIER].assetUrl,
                },
                [E.N.YOUTUBE]: {
                    name: E.N.YOUTUBE,
                    caption: (0, i.jsx)("img", { src: ev.A, alt: "YouTube Premium" }),
                    title: I.intl.string(eh.default["BdIVB+"]),
                    description: I.intl.format(eh.default["cCl3+a"], {
                        discountPercentage: 20,
                        months: 6,
                        helpCenterUrl: H.A.getArticleURL(eu.MVz.YOUTUBE_PROMOTION),
                    }),
                    previewImage: ey[E.N.YOUTUBE].thumbnail,
                    descriptionCta: I.intl.string(eh.default.VwLXyT),
                    containerClassName: ex.youtubeGradient,
                    onClick: () => (0, ee.z)(a),
                },
                [E.N.XBOX_PARTNER_PASS]: {
                    name: E.N.XBOX_PARTNER_PASS,
                    caption: (0, i.jsx)("img", { src: e_.A, alt: "Xbox Game Pass" }),
                    title: I.intl.string(eg.default.IthhpG),
                    description: I.intl.format(eg.default.NKTF0a, {
                        helpCenterLink: H.A.getArticleURL(eu.MVz.NITRO_2_POINT_0),
                    }),
                    previewImage: ey[E.N.XBOX_PARTNER_PASS].thumbnail,
                    containerClassName: ex.xboxGradient,
                    actions: [
                        {
                            variant: "secondary",
                            text: I.intl.string(I.t["2pG5Ga"]),
                            onClick: () =>
                                (0, y.A)({
                                    subscriptionTier: ec.pe.TIER_2,
                                    analyticsLocations: a,
                                    onSubscriptionConfirmation: g,
                                }),
                            icon: o.NitroWheelIcon,
                            iconPosition: "start",
                        },
                    ],
                },
            };
        function eV(e) {
            let t = eD[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        }
        let eH = (function (e) {
                let t = (0, Q.YS)({ location: "bento_box" }).functionalityEnabled,
                    n = (0, ed.mh)({ location: "bento_box" }),
                    a = (0, U.b)("bento_box"),
                    { enabled: s } = J.A.useConfig({ location: "bento_box" }),
                    { enabled: i } = (0, q.vc)({ location: "bento_box" }),
                    { enabled: r } = el.A.useConfig({ location: "bento_box" }),
                    l = i && r,
                    d = null != (0, K.qN)("bento_box"),
                    c = (0, _.A)("bento_box"),
                    o = (0, er.O9)(),
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
            })(eO),
            eX = [],
            eW = eH.filter((e) => eT.has(e)).length >= 3,
            eF = t ? null : eH[0];
        null != eF && eX.push([eV(eF)]);
        let ez = eH.slice(+!t, t ? 2 : 3);
        1 === ez.length ? eX.push([eV(ez[0])]) : 2 === ez.length && eX.push([eV(ez[0]), eV(ez[1])]);
        let eK = eW ? eH.slice(t ? 2 : 3, t ? 4 : 5) : [];
        return (
            1 === eK.length ? eX.push([eV(eK[0])]) : 2 === eK.length && eX.push([eV(eK[0]), eV(eK[1])]),
            {
                whatsNewBoxes: [...eX],
                bestOfBoxes: [[eV(E.N.SHOW_YOUR_STYLE)], [eV(E.N.YOUR_SPACE)], [eV(E.N.EMOJIS), eV(E.N.NO_LIMITS)]],
            }
        );
    };
