n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(594928),
    u = n(295474),
    d = n(612659),
    f = n(150039),
    _ = n(126631),
    p = n(433411),
    h = n(532432),
    m = n(235433),
    g = n(818420),
    E = n(134795),
    b = n(513901),
    y = n(451392),
    O = n(906364),
    v = n(643879),
    I = n(621853),
    T = n(271383),
    S = n(594174),
    A = n(74538),
    C = n(51144),
    N = n(18438),
    R = n(778825),
    P = n(52597),
    w = n(430131),
    D = n(291334),
    x = n(474936),
    L = n(388032),
    M = n(737788);
function j(e) {
    var t, n, i, j;
    let { guild: k, nameplateEnabled: U } = e,
        G = (0, o.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        B = (0, d.m)(x.PremiumTypes.TIER_2),
        {
            pendingAvatar: Z,
            pendingNickname: F,
            pendingBanner: V,
            pendingBio: H,
            pendingPronouns: Y,
            pendingThemeColors: W,
            errors: K,
            guild: z,
        } = (0, o.cj)([R.Z], () => {
            let {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBio: n,
                pendingPronouns: r,
                pendingBanner: i,
                pendingThemeColors: a,
            } = R.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: i,
                pendingBio: n,
                pendingPronouns: r,
                pendingThemeColors: a,
                errors: R.Z.getErrors(),
                guild: R.Z.getGuild(),
            };
        }),
        q = (0, v.SD)({
            userId: G.id,
            image: Z,
        }),
        X = null != k ? k : z;
    a()(null != X, "guild should not be null");
    let Q = (0, u.gS)(X.id),
        J = (0, o.e7)([T.ZP], () => (null == X.id ? null : T.ZP.getMember(X.id, G.id))),
        $ = (0, o.e7)([I.Z], () => I.Z.getGuildMemberProfile(G.id, X.id)),
        ee = (0, c.cL)({ location: "GuildIdentityCustomizationSections" }),
        et = A.ZP.canUsePremiumProfileCustomization(G),
        en = (0, f.gd)(Z, null == J ? void 0 : J.avatar),
        er = (0, f.f$)(V, null == $ ? void 0 : $.banner),
        ei = (0, P.p)(W, null == $ ? void 0 : $.themeColors),
        ea = null != (t = null == $ ? void 0 : $.bio) ? t : "",
        eo = null != (n = null == $ ? void 0 : $.pronouns) ? n : "",
        es = (e, t, n) => {
            let r = null != t ? null : void 0;
            n(null != e ? e : r);
        },
        el = (e) => es(e, null == $ ? void 0 : $.banner, N.g_),
        ec = (e) => es(e, null == J ? void 0 : J.avatar, N.I5);
    return (0, r.jsxs)("div", {
        className: M.sectionsContainer,
        children: [
            (0, r.jsx)(
                w.Z,
                {
                    errors: null != (i = null == K ? void 0 : K.nick) ? i : null == Q ? void 0 : Q.nick,
                    username: C.ZP.getName(G),
                    pendingNick: F,
                    currentNick: null == J ? void 0 : J.nick,
                    user: G,
                    guild: X,
                },
                "nick",
            ),
            (0, r.jsx)(
                O.Z,
                {
                    sectionTitle: L.intl.string(L.t["+T3RI/"]),
                    errors: null == K ? void 0 : K.pronouns,
                    onPronounsChange: (e) => {
                        (0, P.xs)(e, eo);
                    },
                    pendingPronouns: Y,
                    currentPronouns: eo,
                },
                "pronouns",
            ),
            (0, r.jsxs)(D.Z, {
                user: G,
                showOverlay: !et,
                children: [
                    (0, r.jsx)(
                        h.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    L.intl.string(L.t.lqaIxI),
                                    (0, r.jsx)(s.u, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: en,
                            onAvatarChange: ec,
                            errors: null == K ? void 0 : K.avatar,
                            guildId: X.id,
                            disabled: !et,
                        },
                        "avatar",
                    ),
                    (0, r.jsx)(
                        p.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    L.intl.string(L.t["7v0T9P"]),
                                    (0, r.jsx)(s.u, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            user: G,
                            guild: X,
                        },
                        "decoration",
                    ),
                    ee &&
                        !B &&
                        (0, r.jsx)(m.Z, {
                            user: G,
                            guildId: X.id,
                        }),
                    U &&
                        (0, r.jsx)(
                            g.Z,
                            {
                                user: G,
                                guild: X,
                                titleIcon: (0, r.jsx)(s.u, {
                                    text: L.intl.string(L.t["5AFxuK"]),
                                    children: (0, r.jsx)(l.SrA, {
                                        size: "md",
                                        color: "currentColor",
                                        className: M.nitroWheel,
                                    }),
                                }),
                            },
                            "nameplate",
                        ),
                    (0, r.jsx)(
                        b.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    L.intl.string(L.t.wR5wOo),
                                    (0, r.jsx)(s.u, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            user: G,
                            guild: X,
                        },
                        "effect",
                    ),
                    (0, r.jsx)(
                        E.Z,
                        {
                            showRemoveBannerButton: er,
                            errors: null == K ? void 0 : K.banner,
                            onBannerChange: el,
                            guildId: null == X ? void 0 : X.id,
                            disabled: !et,
                        },
                        "banner",
                    ),
                    (0, r.jsx)(y.Z, {
                        user: G,
                        pendingAvatarSrc: q,
                        pendingColors: W,
                        onThemeColorsChange: (e) => {
                            (0, P.ce)(e, null == $ ? void 0 : $.themeColors);
                        },
                        guildId: null == X ? void 0 : X.id,
                        showResetThemeButton: ei,
                    }),
                    (0, r.jsx)(
                        _.Z,
                        {
                            placeholder: L.intl.string(L.t["/7NKgv"]),
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    L.intl.string(L.t.jGoPJT),
                                    (0, r.jsx)(s.u, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, P.qN)(e, ea),
                            errors: null != (j = null == K ? void 0 : K.bio) ? j : null == Q ? void 0 : Q.bio,
                            pendingBio: H,
                            currentBio: ea,
                            disabled: !et,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
