n.d(t, {
    A: () => L,
});
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(311907),
    a = n(990078),
    o = n(397927),
    c = n(81400),
    d = n(757036),
    u = n(919395),
    _ = n(124064),
    p = n(200790),
    m = n(230084),
    g = n(180020),
    A = n(431982),
    f = n(730588),
    h = n(164599),
    b = n(63675),
    E = n(546849),
    x = n(101058),
    O = n(622543),
    C = n(696451),
    I = n(287809),
    T = n(927578),
    S = n(427262),
    j = n(159001),
    v = n(833336),
    N = n(684732),
    y = n(168917),
    P = n(746706),
    R = n(788868),
    D = n(985018),
    w = n(453814);

function L(e) {
    var t, n, i, L;
    let { guild: M } = e,
        U = (0, s.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        G = (0, d.L)(R.PremiumTypes.TIER_2),
        {
            pendingAvatar: k,
            pendingNickname: V,
            pendingBanner: H,
            pendingBio: B,
            pendingPronouns: F,
            pendingThemeColors: Y,
            errors: W,
            guild: z,
        } = (0, s.cf)([v.A], () => {
            let {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBio: n,
                pendingPronouns: r,
                pendingBanner: i,
                pendingThemeColors: l,
            } = v.A.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: i,
                pendingBio: n,
                pendingPronouns: r,
                pendingThemeColors: l,
                errors: v.A.getErrors(),
                guild: v.A.getGuild(),
            };
        }),
        K = (0, x.V7)({
            userId: U.id,
            image: k,
        }),
        Z = null != M ? M : z;
    l()(null != Z, "guild should not be null");
    let X = (0, c.EC)(Z.id),
        q = (0, s.bG)([C.Ay], () => (null == Z.id ? null : C.Ay.getMember(Z.id, U.id))),
        J = (0, s.bG)([O.A], () => O.A.getGuildMemberProfile(U.id, Z.id)),
        Q = T.Ay.canUsePremiumProfileCustomization(U),
        $ = (0, u.z5)(k, null == q ? void 0 : q.avatar),
        ee = (0, u.Ac)(H, null == J ? void 0 : J.banner),
        et = (0, N.lS)(Y, null == J ? void 0 : J.themeColors),
        en = null != (t = null == J ? void 0 : J.bio) ? t : "",
        er = null != (n = null == J ? void 0 : J.pronouns) ? n : "",
        ei = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, r.jsxs)("div", {
        className: w.Q,
        children: [
            (0, r.jsx)(
                y.A,
                {
                    errors: null != (i = null == W ? void 0 : W.nick) ? i : null == X ? void 0 : X.nick,
                    username: S.Ay.getName(U),
                    pendingNick: V,
                    currentNick: null == q ? void 0 : q.nick,
                    user: U,
                    guild: Z,
                },
                "nick",
            ),
            (0, r.jsx)(
                E.A,
                {
                    sectionTitle: D.intl.string(D.t["+T3RI/"]),
                    errors: null == W ? void 0 : W.pronouns,
                    onPronounsChange: (e) => {
                        (0, N.d7)(e, er);
                    },
                    pendingPronouns: F,
                    currentPronouns: er,
                },
                "pronouns",
            ),
            (0, r.jsxs)(P.A, {
                user: U,
                showOverlay: !Q,
                children: [
                    (0, r.jsx)(
                        m.A,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    D.intl.string(D.t.lqaIxI),
                                    (0, r.jsx)(a.m, {
                                        text: D.intl.string(D.t["5AFxuK"]),
                                        children: (0, r.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: $,
                            onAvatarChange: (e) => ei(e, null == q ? void 0 : q.avatar, j.zq),
                            errors: null == W ? void 0 : W.avatar,
                            guildId: Z.id,
                            disabled: !Q,
                        },
                        "avatar",
                    ),
                    (0, r.jsx)(
                        p.A,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    D.intl.string(D.t["7v0T9P"]),
                                    (0, r.jsx)(a.m, {
                                        text: D.intl.string(D.t["5AFxuK"]),
                                        children: (0, r.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: U,
                            guild: Z,
                        },
                        "decoration",
                    ),
                    !G &&
                        (0, r.jsx)(g.A, {
                            user: U,
                            guildId: Z.id,
                        }),
                    (0, r.jsx)(
                        A.A,
                        {
                            user: U,
                            guild: Z,
                            titleIcon: (0, r.jsx)(a.m, {
                                text: D.intl.string(D.t["5AFxuK"]),
                                children: (0, r.jsx)(o.tvc, {
                                    size: "md",
                                    color: "currentColor",
                                    className: w.a,
                                }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, r.jsx)(
                        h.A,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    D.intl.string(D.t.wR5wOo),
                                    (0, r.jsx)(a.m, {
                                        text: D.intl.string(D.t["5AFxuK"]),
                                        children: (0, r.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: U,
                            guild: Z,
                        },
                        "effect",
                    ),
                    (0, r.jsx)(
                        f.A,
                        {
                            showRemoveBannerButton: ee,
                            errors: null == W ? void 0 : W.banner,
                            onBannerChange: (e) => ei(e, null == J ? void 0 : J.banner, j.Iz),
                            guildId: null == Z ? void 0 : Z.id,
                            disabled: !Q,
                        },
                        "banner",
                    ),
                    (0, r.jsx)(b.A, {
                        user: U,
                        pendingAvatarSrc: K,
                        pendingColors: Y,
                        onThemeColorsChange: (e) => {
                            (0, N.wx)(e, null == J ? void 0 : J.themeColors);
                        },
                        guildId: null == Z ? void 0 : Z.id,
                        showResetThemeButton: et,
                    }),
                    (0, r.jsx)(
                        _.A,
                        {
                            placeholder: D.intl.string(D.t["/7NKgv"]),
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    D.intl.string(D.t.jGoPJT),
                                    (0, r.jsx)(a.m, {
                                        text: D.intl.string(D.t["5AFxuK"]),
                                        children: (0, r.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, N.Rn)(e, en),
                            errors: null != (L = null == W ? void 0 : W.bio) ? L : null == X ? void 0 : X.bio,
                            pendingBio: B,
                            currentBio: en,
                            disabled: !Q,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
