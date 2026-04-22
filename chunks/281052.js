n.d(t, { A: () => k });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(990078),
    o = n(403581),
    d = n(81400),
    u = n(757036),
    c = n(919395),
    g = n(385612),
    m = n(124064),
    _ = n(200790),
    A = n(230084),
    h = n(180020),
    p = n(431982),
    x = n(730588),
    E = n(164599),
    T = n(669195),
    S = n(63675),
    f = n(546849),
    b = n(101058),
    C = n(84540),
    v = n(836602),
    N = n(622543),
    I = n(696451),
    y = n(71393),
    j = n(287809),
    O = n(927578),
    R = n(427262),
    L = n(684732),
    D = n(168917),
    P = n(746706),
    G = n(788868),
    M = n(985018),
    U = n(887267);
function k() {
    let e = (0, a.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, u.L)(G.PremiumTypes.TIER_2),
        n = (0, a.bG)([v.A, y.A], () => y.A.getGuild(v.A.selectedGuildId));
    l()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: k,
            pendingBanner: w,
            pendingBio: V,
            pendingPronouns: B,
            pendingThemeColors: F,
            errors: z,
        } = (0, a.cf)([v.A], () => ({ ...v.A.getPendingChanges(n.id), errors: v.A.getErrors(n.id) })),
        H = (0, b.V7)({ userId: e.id, image: s }),
        Y = (0, d.EC)(n.id),
        X = (0, a.bG)([I.Ay], () => (null == n.id ? null : I.Ay.getMember(n.id, e.id))),
        K = (0, a.bG)([N.A], () => N.A.getGuildMemberProfile(e.id, n.id)),
        W = O.Ay.canUsePremiumProfileCustomization(e),
        Z = (0, c.z5)(s, X?.avatar),
        q = (0, c.Ac)(w, K?.banner),
        Q = (0, L.l)(F, K?.themeColors),
        J = K?.bio ?? "",
        $ = K?.pronouns ?? "";
    return (0, i.jsxs)("div", {
        className: U.Q,
        children: [
            (0, i.jsx)(
                D.A,
                {
                    errors: z?.nick ?? Y?.nick,
                    username: R.Ay.getName(e),
                    pendingNick: k,
                    currentNick: X?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, i.jsx)(
                f.A,
                {
                    sectionTitle: M.intl.string(M.t["+T3RI/"]),
                    errors: z?.pronouns,
                    onPronounsChange: (e) => (0, C.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: B,
                    currentPronouns: $,
                },
                "pronouns",
            ),
            (0, i.jsxs)(P.A, {
                user: e,
                showOverlay: !W,
                children: [
                    (0, i.jsx)(
                        A.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    M.intl.string(M.t.lqaIxI),
                                    (0, i.jsx)(r.m, {
                                        text: M.intl.string(M.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: U.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: Z,
                            onAvatarChange: (e) =>
                                (0, g.rM)(e, X?.avatar, (e) => (0, C.p)({ guildId: n.id, avatar: e })),
                            errors: z?.avatar,
                            guildId: n.id,
                            disabled: !W,
                        },
                        "avatar",
                    ),
                    (0, i.jsx)(
                        _.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    M.intl.string(M.t["7v0T9P"]),
                                    (0, i.jsx)(r.m, {
                                        text: M.intl.string(M.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: U.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, i.jsx)(h.A, { user: e, guildId: n.id }),
                    (0, i.jsx)(
                        p.A,
                        {
                            user: e,
                            guild: n,
                            titleIcon: (0, i.jsx)(r.m, {
                                text: M.intl.string(M.t["5AFxuK"]),
                                children: (0, i.jsx)(o.t, { size: "md", color: "currentColor", className: U.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, i.jsx)(
                        E.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    M.intl.string(M.t.wR5wOo),
                                    (0, i.jsx)(r.m, {
                                        text: M.intl.string(M.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: U.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, i.jsx)(T.A, { user: e, guild: n, sectionTitle: M.intl.string(M.t.GWrZOd) }, "frame"),
                    (0, i.jsx)(
                        x.A,
                        {
                            showRemoveBannerButton: q,
                            errors: z?.banner,
                            onBannerChange: (e) =>
                                (0, g.rM)(e, K?.banner, (e) => (0, C.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !W,
                        },
                        "banner",
                    ),
                    (0, i.jsx)(S.A, {
                        user: e,
                        pendingAvatarSrc: H,
                        pendingColors: F,
                        onThemeColorsChange: (e) => (0, C.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: Q,
                    }),
                    (0, i.jsx)(
                        m.A,
                        {
                            placeholder: M.intl.string(M.t["/7NKgv"]),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    M.intl.string(M.t.ZzAR2Y),
                                    (0, i.jsx)(r.m, {
                                        text: M.intl.string(M.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: U.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, C.p)({ guildId: n.id, bio: e }),
                            errors: z?.bio ?? Y?.bio,
                            pendingBio: V,
                            currentBio: J,
                            disabled: !W,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
