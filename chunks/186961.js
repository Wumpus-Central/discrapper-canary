(n.d(t, { A0: () => eC, Tb: () => eI, Ay: () => eT }), n(321073));
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
    f = n(169099),
    h = n(28863),
    N = n(713271),
    g = n(506988),
    E = n(590202),
    x = n(332560),
    A = n(62234),
    R = n(324061),
    _ = n(211824),
    v = n(701256),
    O = n(792996),
    P = n(724052);
let I = g.uF.NITRO_HOME_PERK_CARD;
function C() {
    (0, x.iM)({ content: I, questContentCTA: E.Cy.LEARN_MORE });
}
function M(e, t) {
    return (0, i.jsx)(h.Anchor, { href: _.j, onClick: C, children: e }, t);
}
var T = n(362280),
    j = n(325499),
    U = n(778705),
    y = n(914313),
    S = n(216934),
    L = n(462463),
    k = n(780964),
    B = n(166403),
    G = n(676279),
    V = n(975571),
    w = n(448645),
    D = n(769623),
    Y = n(920050),
    H = n(418135),
    X = n(852218),
    W = n(52530),
    F = n(261995),
    z = n(88210),
    K = n(398523),
    q = n(881373),
    $ = n(116420),
    J = n(50949),
    Z = n(503698),
    Q = n.n(Z),
    ee = n(915945),
    et = n(830370);
function en(e) {
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
            className: Q()(t, et.k),
            children: (0, i.jsx)(ee.C, { ref: a, autoplay: !1, stateMachine: "State Machine 1", fit: "contain" }),
        })
    );
}
en.displayName = "PremiumRewardsBentoBoxAsset";
var ea = n(728666),
    es = n(886205),
    ei = n(817695),
    er = n(612413),
    el = n(682901);
n(92737);
var ed = n(88001);
n(675772);
var ec = n(652215),
    eo = n(221596),
    eu = n(691450),
    em = n(107198),
    eb = n(116716),
    ep = n(12947),
    ef = n(524698),
    eh = n(958904),
    eN = n(842671),
    eg = n(831768),
    eE = n(505051),
    ex = n(817577);
let eA = "/assets/035ad0fba4997f3f.svg";
var eR = n(112992),
    e_ = n(45116),
    ev = n(679502),
    eO = n(576765),
    eP = n(88433),
    eI = (((a = {}).CONTAINED = "contained"), (a.OVERLAY = "overlay"), a),
    eC = (((s = {}).SMALL = "small"), (s.MEDIUM = "medium"), (s.LARGE = "large"), s);
let eM = new Set([
        N.N.MACARON,
        N.N.YOUTUBE,
        N.N.XBOX_PARTNER_PASS,
        N.N.CODE_BLURPLE,
        N.N.THREE_P_PROMOTIONS,
        N.N.VOICEMOD,
    ]),
    eT = function () {
        let e,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { analyticsLocations: a } = (0, b.Ay)(m.A.PREMIUM_MARKETING_BENTO_BOX),
            s = (0, L.A)({ analyticsLocations: a }),
            h = (0, L.A)({ analyticsLocations: a, shouldOpenDisplayNameStyles: !0 }),
            g = (0, r.useCallback)(() => {
                (0, T.A)(ec.BVt.NITRO_HOME, { search: (0, l.As)({ perk: Y.XBOX_PREMIUM_PERK_CARD_ID }) });
            }, []),
            C = (0, r.useCallback)(() => {
                (0, U.A)({
                    subscriptionTier: el.pe.TIER_2,
                    initialPlanId: el.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: a,
                });
            }, [a]),
            Z = (0, G.TM)(),
            Q = V.A.getArticleURL(ec.MVz.REFERRAL_PROGRAM),
            { shouldShowBonusOrbsUX: ee, multiplier: et } = (0, y.lk)(eo.rE.NITRO_HOME_MARKETING),
            eI = r.useRef(null),
            eC = (0, j.b)("bento_box"),
            eT = (function () {
                let { enabled: e } = K.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" }),
                    t = (0, q.YS)({ location: "useRecurring3PModalEligiblePartnerIds" }).functionalityEnabled,
                    { enabled: n } = $.A.useConfig({ location: "useRecurring3PModalEligiblePartnerIds" });
                return r.useMemo(() => {
                    let a = { [X.XY]: t, [X.KS]: e, [X.uV]: n };
                    return X.mY.filter((e) => a[e]);
                }, [e, t, n, void 0]);
            })().filter((e) => e !== X.uV),
            ej = {
                premiumGroup: { thumbnail: ex, assetUrl: ex },
                serverProfiles: {
                    thumbnail: "/assets/27e5bfe55cd9ceac.png",
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/f1e3305670fdd4713b5a31d3f844cf0ab2bd08c0add76b161c5cf0f5c2b27d9a.mov"
                        : "https://cdn.discordapp.com/assets/content/bd43688bb3e038704c4a124b520957c0af30bcea24ac2df7d4c06691fbe76b5e.webm",
                },
                customThemes: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/707aa6cdb55e6cb15a47fb11adf8f2831a7ca23f014da397c787c6c1ed7ea0e0.png",
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/90d41f94afc7207e0d3e296fbd8eff69f112a94b9efd6135d2e301b366361925.mov"
                        : "https://cdn.discordapp.com/assets/content/8a21690e2b300651e204b29a14f95c8b3252f2f11cf76ac79d1531518ec651c9.webm",
                },
                displayNameStyles: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/2d403069b04f11e075362fc304c28dc72d50497780c0de07c63f894a7bc68332.png",
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/dac5f465955829a1fd9f74536e3849492486391cbe0a27668155148cb7d06203.mov"
                        : "https://cdn.discordapp.com/assets/content/49f36bae4adf729fd7fef602c1abc8b1ce163f72edee89a64ad44970f5fff986.webm",
                },
                referralProgram: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/e3b0f0782ffec7a02f1b140b3009e64b2dd22cdf5ca953f68df710eb3197d463.png",
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/a398a9875f05c78acf38dd98c409743b486ef5ea2e661010b44ad520045ed024.mov"
                        : "https://cdn.discordapp.com/assets/content/348fa0213a61e70aa3573892b13f8825028a59ecd50dad952df05aef1f0f20f9.webm",
                },
                showYourStyle: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/b1476d645dd5e91c5ce647dcaa93964348a69e91306f74d19384330afd07ad94.png",
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/333ea4938ac5110b4e44a57fc47c07c7c27a9bae142dd35c13758e80c340e0db.mov"
                        : "https://cdn.discordapp.com/assets/content/e7d9b53851e0284950b6f412687855eab36053ea225fb42c852dfc52d58e7da3.webm",
                },
                yourSpace: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/14a4e932f2091109eafab5febe77a0adb77ed2e811abdd59bd28c8b8ba0d50e8.png",
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/ed51f5617416904b6f770042a2a4ed397324c8690946c73a919dd383f6b1dcab.mov"
                        : "https://cdn.discordapp.com/assets/content/f1a6a6b7512e50f319f8749704e31d40eb06d028c854d9fb86ba89ae05cc907d.webm",
                },
                emojis: {
                    thumbnail: eO.A,
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/3f5085611f7c0ed8a1dde79c4c7f4842cd12734a4f6f7cefe043ae166257c039.mov"
                        : eP.A,
                },
                noLimits: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/4d379ffac2c0b98c7b2e790c9800a35916cea7915569758b57b3d1f7f9b91682.png",
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/a39efd6ebd57352a7cf6887285f4e13988cef7068f17d31bd4839fcbd54189e4.mov"
                        : "https://cdn.discordapp.com/assets/content/2951de28d84d4fcba8b5c4db54b094b98dca5bfb168d77d356e9896708768a5f.webm",
                },
                orbMultiplier: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/de126b095fb3d2353650e750d46c54b7156297482f9205ca1645a45fb0082169.png",
                    assetUrl: Z
                        ? "https://cdn.discordapp.com/assets/content/a3d8a5ad88850f5dbfb86dcff1844ef525771e03d2e6bf64328980a361538f05.mov"
                        : "https://cdn.discordapp.com/assets/content/1950d090a67ef578499d21526718bbbbc01d5799318f64435930ecef3e524241.webm",
                },
                threePPromotions: { thumbnail: eC ? (0, i.jsx)(en, { ref: eI }) : eA, assetUrl: eC ? void 0 : eA },
                youtube: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/67348bc7420d5ab8029fb93d7d514fcdbd39b9273c238123bb1ea90b656bfe13.webp",
                },
                xboxPartnerPass: {
                    thumbnail:
                        "https://cdn.discordapp.com/assets/content/6e51a46eb536e6422319f2ec4f49dc97b707b6df317f9cc144c0d2b1f4244ad0.png",
                },
            },
            eU = (0, D.Y)({ location: "bento_box" }),
            ey = (0, H.A)(!eU),
            eS = (0, c.bG)([B.A], () => B.A.getPremiumTypeSubscription()),
            eL = null != eS && (0, w.Nc)(eS),
            ek = (0, F.uq)({ location: "bento_box" }),
            eB = (0, W.qN)("bento_box"),
            eG =
                ((e = (0, R.A)("bento_box")),
                r.useMemo(
                    () =>
                        e
                            ? {
                                  name: N.N.HEXAGON_CAMPAIGN,
                                  title: O.intl.string(v.default["fShp/D"]),
                                  description: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          O.intl.string(v.default["8yWAvp"]),
                                          " ",
                                          O.intl.format(v.default.y2YmJv, {
                                              nonPremiumEndDate: _.Fg,
                                              premiumEndDate: _.zv,
                                              learnMoreHook: M,
                                          }),
                                      ],
                                  }),
                                  previewImage: (0, i.jsx)("div", {
                                      className: P.U,
                                      children: (0, i.jsx)(f.r, { alt: "", ariaHidden: !0, width: 320 }),
                                  }),
                                  actions: [
                                      {
                                          variant: "secondary",
                                          text: O.intl.string(O.t.uw9zI7),
                                          onClick: function () {
                                              ((0, x.iM)({ content: I, questContentCTA: E.Cy.OPEN_AD_PERK_MODAL }),
                                                  (0, A.v6)());
                                          },
                                      },
                                  ],
                              }
                            : null,
                    [e],
                )),
            eV = {
                [N.N.MACARON]: null != ek ? ek : void 0,
                [N.N.CODE_BLURPLE]: null != eB ? eB : void 0,
                [N.N.HEXAGON_CAMPAIGN]: null != eG ? eG : void 0,
                [N.N.SERVER_PROFILES]: {
                    name: N.N.SERVER_PROFILES,
                    title: O.intl.string(O.t.I9TYMg),
                    description: O.intl.string(O.t.HMSHeH),
                    descriptionCta: O.intl.string(O.t.jVcuVY),
                    onClick: s,
                    previewImage: ej.serverProfiles.thumbnail,
                    videoUrl: ej.serverProfiles.assetUrl,
                },
                [N.N.REFERRAL_PROGRAM]: {
                    name: N.N.REFERRAL_PROGRAM,
                    title: O.intl.string(O.t.tPY4o9),
                    description: O.intl.format(O.t.jRPQUH, { learnMoreLink: Q }),
                    previewImage: ej.referralProgram.thumbnail,
                    videoUrl: ej.referralProgram.assetUrl,
                },
                [N.N.CUSTOM_THEMES]: {
                    name: N.N.CUSTOM_THEMES,
                    title: O.intl.string(eh.default.XokIHM),
                    description: O.intl.string(eh.default["7esQMC"]),
                    descriptionCta: O.intl.string(O.t.jVcuVY),
                    previewImage: ej.customThemes.thumbnail,
                    onClick: () => {
                        (0, p.nf)(p.HP.CUSTOM_THEME);
                    },
                    videoUrl: ej.customThemes.assetUrl,
                },
                [N.N.DISPLAY_NAME_STYLES]: {
                    name: N.N.DISPLAY_NAME_STYLES,
                    title: O.intl.string(eN.default.ABtBDQ),
                    description: O.intl.string(eN.default.MFNXZh),
                    descriptionCta: O.intl.string(O.t.jVcuVY),
                    previewImage: ej.displayNameStyles.thumbnail,
                    onClick: h,
                    videoUrl: ej.displayNameStyles.assetUrl,
                },
                [N.N.PREMIUM_GROUP]: {
                    name: N.N.PREMIUM_GROUP,
                    title: O.intl.formatToPlainString(em.default.VFEDDB, { premiumGroupProductName: (0, ed.DP)() }),
                    description:
                        eU && null != ey
                            ? O.intl.formatToPlainString(em.default.vmvhN5, { pricePerPerson: ey, totalMember: 5 })
                            : O.intl.formatToPlainString(em.default.WudmR3, {
                                  totalSeats: 6,
                                  premiumGroupProductName: (0, ed.DP)(),
                              }),
                    previewImage: ej.premiumGroup.thumbnail,
                    videoUrl: ej.premiumGroup.assetUrl,
                    actions: [
                        {
                            variant: "primary",
                            text: O.intl.formatToPlainString(em.default.LwdrNi, {
                                premiumGroupProductName: (0, ed.DP)(),
                            }),
                            onClick: C,
                            icon: o.NitroWheelIcon,
                            iconPosition: "start",
                            disabled: eL,
                        },
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t.hvVgAZ),
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
                    badgeText: O.intl.string(O.t.oW0eUd).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                },
                [N.N.SHOW_YOUR_STYLE]: {
                    name: N.N.SHOW_YOUR_STYLE,
                    title: O.intl.string(O.t.Ij3Zmv),
                    description: O.intl.string(O.t.UsOUxY),
                    descriptionCta: O.intl.string(O.t.jVcuVY),
                    previewImage: ej.showYourStyle.thumbnail,
                    onClick: s,
                    videoUrl: ej.showYourStyle.assetUrl,
                },
                [N.N.YOUR_SPACE]: {
                    name: N.N.YOUR_SPACE,
                    title: O.intl.string(O.t.Wme3nX),
                    description: O.intl.string(O.t["/aAIqV"]),
                    descriptionCta: O.intl.string(O.t.jVcuVY),
                    previewImage: ej.yourSpace.thumbnail,
                    onClick: function () {
                        {
                            let { openUserSettings: e } = n(766075);
                            e(k.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                        }
                    },
                    videoUrl: ej.yourSpace.assetUrl,
                },
                [N.N.EMOJIS]: {
                    name: N.N.EMOJIS,
                    title: O.intl.string(O.t.zY5PPb),
                    description: O.intl.string(O.t.R5Xag2),
                    previewImage: ej.emojis.thumbnail,
                    videoUrl: ej.emojis.assetUrl,
                },
                [N.N.NO_LIMITS]: {
                    name: N.N.NO_LIMITS,
                    title: O.intl.string(O.t["6b3ydG"]),
                    description: O.intl.string(O.t["Y+IJyg"]),
                    previewImage: ej.noLimits.thumbnail,
                    videoUrl: ej.noLimits.assetUrl,
                },
                [N.N.THREE_P_PROMOTIONS]: {
                    name: N.N.THREE_P_PROMOTIONS,
                    title: eC ? O.intl.string(O.t.E4U4SS) : O.intl.string(eu.default.OlObRa),
                    description: eC ? O.intl.string(O.t["B4uSy/"]) : O.intl.string(eu.default["8Gl8gP"]),
                    descriptionCta: eC ? O.intl.string(O.t.RzWDqY) : O.intl.string(eu.default.HINTfJ),
                    previewImage: ej[N.N.THREE_P_PROMOTIONS].thumbnail,
                    videoUrl: ej[N.N.THREE_P_PROMOTIONS].assetUrl,
                    onClick: () =>
                        (0, z.P)({
                            analyticsLocations: a,
                            partnerIds: eT,
                            isLocked: !0,
                            showXboxCard: eC,
                            title: eC ? O.intl.string(O.t.NG1e6l) : O.intl.string(O.t["7ioAjs"]),
                            subtitle: eC
                                ? O.intl.format(eg.default.zS4GBR, {
                                      termsLink: V.A.getArticleURL(ec.MVz.NITRO_2_POINT_0),
                                  })
                                : O.intl.format(O.t.LOYRxB, {
                                      helpCenterLink: V.A.getArticleURL(ec.MVz.RECURRING_PROMOTION),
                                  }),
                        }),
                    badgeText: eC ? void 0 : O.intl.string(O.t.y2b7CA).toLocaleUpperCase(),
                    badgeVariant: "expressive",
                    mediaRef: eC ? eI : void 0,
                },
                [N.N.ORB_MULTIPLIER]: {
                    name: N.N.ORB_MULTIPLIER,
                    title: O.intl.string(O.t.Csf5Ol),
                    description: O.intl.format(O.t["G5k+lZ"], { bonusOrbMultiplier: et }),
                    descriptionCta: O.intl.string(O.t.jVcuVY),
                    onClick: () => (0, S.m)({ fromContent: d.u.NITRO_HOME_PERK_CARD }),
                    badgeVariant: "expressive",
                    previewImage: ej[N.N.ORB_MULTIPLIER].thumbnail,
                    videoUrl: ej[N.N.ORB_MULTIPLIER].assetUrl,
                },
                [N.N.YOUTUBE]: {
                    name: N.N.YOUTUBE,
                    caption: (0, i.jsx)("img", { src: ev.A, alt: "YouTube Premium" }),
                    title: O.intl.string(ef.default["BdIVB+"]),
                    description: O.intl.format(ef.default["cCl3+a"], {
                        discountPercentage: 20,
                        months: 6,
                        helpCenterUrl: V.A.getArticleURL(ec.MVz.YOUTUBE_PROMOTION),
                    }),
                    previewImage: ej[N.N.YOUTUBE].thumbnail,
                    descriptionCta: O.intl.string(ef.default.VwLXyT),
                    containerClassName: eE.youtubeGradient,
                    onClick: () => (0, J.z)(a),
                },
                [N.N.VOICEMOD]: {
                    name: N.N.VOICEMOD,
                    caption: (0, i.jsx)("img", { src: e_.A, alt: "Voicemod" }),
                    title: O.intl.string(ep.default.pkGxhZ),
                    previewImage:
                        "https://cdn.discordapp.com/assets/content/172748c81c3d0208e7c0ee05aa10cb89d63655350cc95feeab0f54ea4bfdf699.png",
                    description: O.intl.format(ep.default["4ABTfP"], {
                        termsUrl: V.A.getArticleURL(ec.MVz.VOICEMOD_PROMOTION),
                    }),
                    descriptionCta: O.intl.string(eb.default.WMK6Pg),
                    containerClassName: eE.voicemodGradient,
                    onClick: () =>
                        (0, z.P)({
                            analyticsLocations: a,
                            partnerIds: [X.uV],
                            isLocked: !0,
                            title: O.intl.string(ep.default.AX5oOl),
                            subtitle: O.intl.format(eb.default.B1kOFr, {
                                termsUrl: V.A.getArticleURL(ec.MVz.VOICEMOD_PROMOTION),
                            }),
                        }),
                },
                [N.N.XBOX_PARTNER_PASS]: {
                    name: N.N.XBOX_PARTNER_PASS,
                    caption: (0, i.jsx)("img", { src: eR.A, alt: "Xbox Game Pass" }),
                    title: O.intl.string(eg.default.IthhpG),
                    description: O.intl.format(eg.default.NKTF0a, {
                        helpCenterLink: V.A.getArticleURL(ec.MVz.NITRO_2_POINT_0),
                    }),
                    previewImage: ej[N.N.XBOX_PARTNER_PASS].thumbnail,
                    containerClassName: eE.xboxGradient,
                    actions: [
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t["2pG5Ga"]),
                            onClick: () =>
                                (0, U.A)({
                                    subscriptionTier: el.pe.TIER_2,
                                    analyticsLocations: a,
                                    onSubscriptionConfirmation: g,
                                }),
                            icon: o.NitroWheelIcon,
                            iconPosition: "start",
                        },
                    ],
                },
            };
        function ew(e) {
            let t = eV[e];
            if (null == t) throw Error(`useBentoBoxes: missing bento config for ${e}`);
            return t;
        }
        let eD = (function (e) {
                let t = (0, q.YS)({ location: "bento_box" }).functionalityEnabled,
                    n = (0, er.mh)({ location: "bento_box" }),
                    a = (0, j.b)("bento_box"),
                    { enabled: s } = K.A.useConfig({ location: "bento_box" }),
                    { enabled: i } = (0, F.vc)({ location: "bento_box" }),
                    { enabled: r } = es.A.useConfig({ location: "bento_box" }),
                    l = i && r,
                    d = null != (0, W.qN)("bento_box"),
                    c = (0, R.A)("bento_box"),
                    { enabled: o } = $.A.useConfig({ location: "bento_box" }),
                    { enabled: u } = ei.A.useConfig({ location: "bento_box" }),
                    m = (0, ea.O9)(),
                    b = [
                        ...(l ? [N.N.MACARON] : []),
                        ...(n ? [N.N.YOUTUBE] : []),
                        ...(a && (n || l) ? [N.N.XBOX_PARTNER_PASS] : []),
                        ...(d ? [N.N.CODE_BLURPLE] : []),
                        ...(t || s ? [N.N.THREE_P_PROMOTIONS] : []),
                        ...(o && u ? [N.N.VOICEMOD] : []),
                        ...(e ? [N.N.ORB_MULTIPLIER] : []),
                        ...(m ? [N.N.PREMIUM_GROUP] : []),
                        N.N.DISPLAY_NAME_STYLES,
                        N.N.CUSTOM_THEMES,
                        N.N.SERVER_PROFILES,
                        N.N.REFERRAL_PROGRAM,
                    ];
                return (c && b.splice(1, 0, N.N.HEXAGON_CAMPAIGN), b);
            })(ee),
            eY = [],
            eH = eD.filter((e) => eM.has(e)).length >= 3,
            eX = t ? null : eD[0];
        null != eX && eY.push([ew(eX)]);
        let eW = eD.slice(+!t, t ? 2 : 3);
        1 === eW.length ? eY.push([ew(eW[0])]) : 2 === eW.length && eY.push([ew(eW[0]), ew(eW[1])]);
        let eF = eH ? eD.slice(t ? 2 : 3, t ? 4 : 5) : [];
        return (
            1 === eF.length ? eY.push([ew(eF[0])]) : 2 === eF.length && eY.push([ew(eF[0]), ew(eF[1])]),
            {
                whatsNewBoxes: [...eY],
                bestOfBoxes: [[ew(N.N.SHOW_YOUR_STYLE)], [ew(N.N.YOUR_SPACE)], [ew(N.N.EMOJIS), ew(N.N.NO_LIMITS)]],
            }
        );
    };
