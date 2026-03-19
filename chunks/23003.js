a.d(t, { A0: () => ed, Ay: () => ec, NI: () => eo, Tb: () => ei });
var n,
    r,
    s,
    l = a(627968),
    i = a(64700),
    d = a(192308),
    o = a(397927),
    c = a(793574),
    u = a(688810),
    m = a(793943),
    p = a(259065),
    f = a(532794),
    b = a(206835),
    A = a(649032),
    h = a(26508),
    _ = a(780964),
    g = a(358776),
    R = a(840065),
    x = a(676279),
    E = a(975571),
    C = a(457569),
    v = a(612669),
    N = a(788868),
    I = a(88001),
    S = a(652215),
    T = a(355097),
    P = a(518582),
    y = a(723468),
    D = a(985018),
    O = a(674547),
    j = a(241015),
    U = a(817577),
    M = a(748222),
    w = a(743501),
    L = a(652700),
    B = a(282818),
    k = a(965132),
    G = a(576765),
    V = a(88433),
    Y = a(206771),
    W = a(533234),
    H = a(39508),
    F = a(198962),
    K = a(636395),
    X = a(871891),
    $ = a(116427),
    z = a(281146),
    J = a(324108),
    q = a(158178),
    Z = a(199579),
    Q = a(170467),
    ee = a(909340),
    et = a(455482),
    ea = a(573573),
    en = a(233572),
    er = a(437466),
    es = a(23145),
    el = a(56582),
    ei = (((n = {}).CONTAINED = "contained"), (n.OVERLAY = "overlay"), n),
    ed = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), r),
    eo =
        (((s = {}).REFERRAL_PROGRAM = "referralProgram"),
        (s.SERVER_PROFILES = "serverProfiles"),
        (s.SHOW_YOUR_STYLE = "showYourStyle"),
        (s.YOUR_SPACE = "yourSpace"),
        (s.EMOJIS = "emojis"),
        (s.NO_LIMITS = "noLimits"),
        (s.CUSTOM_THEMES = "customThemes"),
        (s.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (s.PREMIUM_GROUP = "premiumGroup"),
        (s.ORB_REWARDS = "orbRewards"),
        s);
let ec = () => {
    let { analyticsLocations: e } = (0, u.Ay)(c.A.PREMIUM_MARKETING_BENTO_BOX),
        t = (0, b.A)({ scrollPosition: T._F.TRY_IT_OUT, analyticsLocations: e }),
        n = (0, v.O9)(),
        r = (0, C.A)({ location: "bento_box" }),
        s = (0, i.useCallback)(() => {
            (0, R.openUserSettings)(_.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, p.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ei = (0, i.useCallback)(() => {
            (0, f.A)({ subscriptionTier: N.pe.TIER_2, initialPlanId: N.gD.PREMIUM_GROUP_MONTH, analyticsLocations: e });
        }, [e]),
        ed = (0, x.TM)(),
        eo = E.A.getArticleURL(S.MVz.REFERRAL_PROGRAM),
        ec = {
            premiumGroup: { thumbnail: U, assetUrl: U },
            serverProfiles: { thumbnail: M, assetUrl: ed ? es.Ay : el.Ay },
            customThemes: { thumbnail: en.A, assetUrl: ed ? ea.A : er.A },
            displayNameStyles: { thumbnail: L.A, assetUrl: ed ? w.A : B.A },
            referralProgram: { thumbnail: K.A, assetUrl: ed ? F.A : X.A },
            showYourStyle: { thumbnail: z.A, assetUrl: ed ? $.A : J.A },
            yourSpace: { thumbnail: Z.A, assetUrl: ed ? q.A : Q.A },
            emojis: { thumbnail: G.A, assetUrl: ed ? k.A : V.A },
            noLimits: { thumbnail: W.A, assetUrl: ed ? Y.A : H.A },
            orbRewards: { thumbnail: et.A, assetUrl: ee.A },
        },
        eu = {
            name: "serverProfiles",
            title: D.intl.string(D.t.I9TYMg),
            description: D.intl.string(D.t.HMSHeH),
            descriptionCta: D.intl.string(D.t.jVcuVY),
            onClick: t,
            previewImage: ec.serverProfiles.thumbnail,
            videoUrl: ec.serverProfiles.assetUrl,
        },
        em = {
            name: "referralProgram",
            title: D.intl.string(D.t.tPY4o9),
            description: D.intl.format(D.t.jRPQUH, { learnMoreLink: eo }),
            previewImage: ec.referralProgram.thumbnail,
            videoUrl: ec.referralProgram.assetUrl,
        },
        ep = {
            name: "customThemes",
            title: D.intl.string(O.default.XokIHM),
            description: D.intl.string(O.default["7esQMC"]),
            descriptionCta: D.intl.string(D.t.jVcuVY),
            previewImage: ec.customThemes.thumbnail,
            onClick: () => {
                (0, m.nf)(m.HP.CUSTOM_THEME);
            },
            videoUrl: ec.customThemes.assetUrl,
        },
        ef = {
            name: "displayNameStyles",
            title: D.intl.string(j.default.ABtBDQ),
            description: D.intl.string(j.default.MFNXZh),
            descriptionCta: D.intl.string(D.t.jVcuVY),
            previewImage: ec.displayNameStyles.thumbnail,
            onClick: s,
            badgeText: D.intl.string(D.t.y2b7CA).toLocaleUpperCase(),
            videoUrl: ec.displayNameStyles.assetUrl,
        },
        eb = {
            name: "premiumGroup",
            title: D.intl.formatToPlainString(P.default.VFEDDB, { premiumGroupProductName: (0, I.DP)() }),
            description: D.intl.formatToPlainString(P.default.WudmR3, {
                totalSeats: I.aw,
                premiumGroupProductName: (0, I.DP)(),
            }),
            previewImage: ec.premiumGroup.thumbnail,
            videoUrl: ec.premiumGroup.assetUrl,
            actions: [
                ...(r
                    ? [
                          {
                              variant: "primary",
                              text: D.intl.formatToPlainString(P.default.LwdrNi, {
                                  premiumGroupProductName: (0, I.DP)(),
                              }),
                              onClick: ei,
                              icon: o.tvc,
                              iconPosition: "start",
                          },
                      ]
                    : []),
                {
                    variant: "secondary",
                    text: D.intl.string(D.t.hvVgAZ),
                    onClick: () => {
                        (0, d.openModalLazy)(async () => {
                            let { default: e } = await a.e("69595").then(a.bind(a, 526710));
                            return (t) => (0, l.jsx)(e, { ...t });
                        });
                    },
                },
            ],
            badgeText: D.intl.string(D.t.oW0eUd).toLocaleUpperCase(),
            badgeVariant: "expressive",
        },
        eA = {
            name: "showYourStyle",
            title: D.intl.string(D.t.Ij3Zmv),
            description: D.intl.string(D.t.UsOUxY),
            descriptionCta: D.intl.string(D.t.jVcuVY),
            previewImage: ec.showYourStyle.thumbnail,
            onClick: t,
            videoUrl: ec.showYourStyle.assetUrl,
        },
        eh = {
            name: "yourSpace",
            title: D.intl.string(D.t.Wme3nX),
            description: D.intl.string(D.t["/aAIqV"]),
            descriptionCta: D.intl.string(D.t.jVcuVY),
            previewImage: ec.yourSpace.thumbnail,
            onClick: () => {
                {
                    let t = (0, g.Ci)("openClientThemes"),
                        { openUserSettings: n } = a(840065);
                    n(t ? _.X.DISPLAY_THEME_CATEGORY : _.X.APPEARANCE_PANEL, { analyticsLocations: e });
                }
            },
            videoUrl: ec.yourSpace.assetUrl,
        },
        e_ = {
            name: "emojis",
            title: D.intl.string(D.t.zY5PPb),
            description: D.intl.string(D.t.R5Xag2),
            previewImage: ec.emojis.thumbnail,
            videoUrl: ec.emojis.assetUrl,
        },
        eg = {
            name: "noLimits",
            title: D.intl.string(D.t["6b3ydG"]),
            description: D.intl.string(D.t["Y+IJyg"]),
            previewImage: ec.noLimits.thumbnail,
            videoUrl: ec.noLimits.assetUrl,
        },
        eR = (0, h.DK)(A.W.NITRO, "useBentoBoxes"),
        ex = {
            name: "orbRewards",
            title: D.intl.string(y.default["ZFJ/NU"]),
            description: D.intl.string(y.default.wMi514),
            descriptionCta: D.intl.string(D.t.hvVgAZ),
            onClick: () => {
                window.open(E.A.getArticleURL(S.MVz.ORBS_REWARDS_FAQ), "_blank");
            },
            previewImage: ec.orbRewards.thumbnail,
            previewImageStyle: "overlay",
            backgroundVideoUrl: ec.orbRewards.assetUrl,
            badgeText: D.intl.string(D.t.oW0eUd).toLocaleUpperCase(),
            badgeVariant: "expressive",
        };
    return {
        whatsNewBoxes: n ? (eR ? [[eb], [ex, em]] : [[eb], [eu, em]]) : eR ? [[ex], [eu, em]] : [[ef], [ep, em]],
        bestOfBoxes: [[eA], [eh], [e_, eg]],
    };
};
