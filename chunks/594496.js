n.d(t, { Z: () => j });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(295474),
    u = n(612659),
    d = n(150039),
    f = n(126631),
    p = n(433411),
    _ = n(532432),
    m = n(235433),
    h = n(818420),
    g = n(134795),
    E = n(513901),
    b = n(451392),
    y = n(906364),
    O = n(643879),
    v = n(621853),
    S = n(271383),
    I = n(594174),
    T = n(74538),
    C = n(51144),
    A = n(18438),
    N = n(778825),
    P = n(52597),
    R = n(430131),
    w = n(291334),
    D = n(474936),
    x = n(388032),
    L = n(822462);
function j(e) {
    var t, n, i, j;
    let { guild: M } = e,
        k = (0, o.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        U = (0, u.m)(D.PremiumTypes.TIER_2),
        {
            pendingAvatar: G,
            pendingNickname: Z,
            pendingBanner: F,
            pendingBio: B,
            pendingPronouns: V,
            pendingThemeColors: H,
            errors: Y,
            guild: W,
        } = (0, o.cj)([N.Z], () => {
            let {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBio: n,
                pendingPronouns: r,
                pendingBanner: i,
                pendingThemeColors: a,
            } = N.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: i,
                pendingBio: n,
                pendingPronouns: r,
                pendingThemeColors: a,
                errors: N.Z.getErrors(),
                guild: N.Z.getGuild(),
            };
        }),
        K = (0, O.SD)({
            userId: k.id,
            image: G,
        }),
        z = null != M ? M : W;
    a()(null != z, "guild should not be null");
    let q = (0, c.gS)(z.id),
        Q = (0, o.e7)([S.ZP], () => (null == z.id ? null : S.ZP.getMember(z.id, k.id))),
        X = (0, o.e7)([v.Z], () => v.Z.getGuildMemberProfile(k.id, z.id)),
        J = T.ZP.canUsePremiumProfileCustomization(k),
        $ = (0, d.gd)(G, null == Q ? void 0 : Q.avatar),
        ee = (0, d.f$)(F, null == X ? void 0 : X.banner),
        et = (0, P.p)(H, null == X ? void 0 : X.themeColors),
        en = null != (t = null == X ? void 0 : X.bio) ? t : "",
        er = null != (n = null == X ? void 0 : X.pronouns) ? n : "",
        ei = (e, t, n) => {
            let r = null != t ? null : void 0;
            n(null != e ? e : r);
        },
        ea = (e) => ei(e, null == X ? void 0 : X.banner, A.g_),
        eo = (e) => ei(e, null == Q ? void 0 : Q.avatar, A.I5);
    return (0, r.jsxs)("div", {
        className: L.sectionsContainer,
        children: [
            (0, r.jsx)(
                R.Z,
                {
                    errors: null != (i = null == Y ? void 0 : Y.nick) ? i : null == q ? void 0 : q.nick,
                    username: C.ZP.getName(k),
                    pendingNick: Z,
                    currentNick: null == Q ? void 0 : Q.nick,
                    user: k,
                    guild: z,
                },
                "nick",
            ),
            (0, r.jsx)(
                y.Z,
                {
                    sectionTitle: x.intl.string(x.t["+T3RI/"]),
                    errors: null == Y ? void 0 : Y.pronouns,
                    onPronounsChange: (e) => {
                        (0, P.xs)(e, er);
                    },
                    pendingPronouns: V,
                    currentPronouns: er,
                },
                "pronouns",
            ),
            (0, r.jsxs)(w.Z, {
                user: k,
                showOverlay: !J,
                children: [
                    (0, r.jsx)(
                        _.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    x.intl.string(x.t.lqaIxI),
                                    (0, r.jsx)(s.u, {
                                        text: x.intl.string(x.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: L.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: $,
                            onAvatarChange: eo,
                            errors: null == Y ? void 0 : Y.avatar,
                            guildId: z.id,
                            disabled: !J,
                        },
                        "avatar",
                    ),
                    (0, r.jsx)(
                        p.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    x.intl.string(x.t["7v0T9P"]),
                                    (0, r.jsx)(s.u, {
                                        text: x.intl.string(x.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: L.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            user: k,
                            guild: z,
                        },
                        "decoration",
                    ),
                    !U &&
                        (0, r.jsx)(m.Z, {
                            user: k,
                            guildId: z.id,
                        }),
                    (0, r.jsx)(
                        h.Z,
                        {
                            user: k,
                            guild: z,
                            titleIcon: (0, r.jsx)(s.u, {
                                text: x.intl.string(x.t["5AFxuK"]),
                                children: (0, r.jsx)(l.SrA, {
                                    size: "md",
                                    color: "currentColor",
                                    className: L.nitroWheel,
                                }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, r.jsx)(
                        E.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    x.intl.string(x.t.wR5wOo),
                                    (0, r.jsx)(s.u, {
                                        text: x.intl.string(x.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: L.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            user: k,
                            guild: z,
                        },
                        "effect",
                    ),
                    (0, r.jsx)(
                        g.Z,
                        {
                            showRemoveBannerButton: ee,
                            errors: null == Y ? void 0 : Y.banner,
                            onBannerChange: ea,
                            guildId: null == z ? void 0 : z.id,
                            disabled: !J,
                        },
                        "banner",
                    ),
                    (0, r.jsx)(b.Z, {
                        user: k,
                        pendingAvatarSrc: K,
                        pendingColors: H,
                        onThemeColorsChange: (e) => {
                            (0, P.ce)(e, null == X ? void 0 : X.themeColors);
                        },
                        guildId: null == z ? void 0 : z.id,
                        showResetThemeButton: et,
                    }),
                    (0, r.jsx)(
                        f.Z,
                        {
                            placeholder: x.intl.string(x.t["/7NKgv"]),
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    x.intl.string(x.t.jGoPJT),
                                    (0, r.jsx)(s.u, {
                                        text: x.intl.string(x.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: L.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, P.qN)(e, en),
                            errors: null != (j = null == Y ? void 0 : Y.bio) ? j : null == q ? void 0 : q.bio,
                            pendingBio: B,
                            currentBio: en,
                            disabled: !J,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
