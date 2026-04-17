n.d(t, { A: () => U });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(311907),
    a = n(990078),
    o = n(397927),
    d = n(81400),
    c = n(757036),
    u = n(919395),
    m = n(124064),
    g = n(200790),
    _ = n(230084),
    x = n(180020),
    h = n(431982),
    A = n(730588),
    p = n(164599),
    T = n(669195),
    f = n(63675),
    S = n(546849),
    E = n(101058),
    b = n(84540),
    C = n(836602),
    v = n(622543),
    N = n(696451),
    I = n(71393),
    j = n(287809),
    y = n(927578),
    O = n(427262),
    R = n(684732),
    L = n(168917),
    P = n(746706),
    D = n(788868),
    G = n(985018),
    M = n(887267);
function U() {
    let e = (0, r.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, c.L)(D.PremiumTypes.TIER_2),
        n = (0, r.bG)([C.A, I.A], () => I.A.getGuild(C.A.selectedGuildId));
    l()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: U,
            pendingBanner: k,
            pendingBio: w,
            pendingPronouns: V,
            pendingThemeColors: B,
            errors: F,
        } = (0, r.cf)([C.A], () => ({ ...C.A.getPendingChanges(n.id), errors: C.A.getErrors(n.id) })),
        H = (0, E.V7)({ userId: e.id, image: s }),
        z = (0, d.EC)(n.id),
        Y = (0, r.bG)([N.Ay], () => (null == n.id ? null : N.Ay.getMember(n.id, e.id))),
        X = (0, r.bG)([v.A], () => v.A.getGuildMemberProfile(e.id, n.id)),
        K = y.Ay.canUsePremiumProfileCustomization(e),
        W = (0, u.z5)(s, Y?.avatar),
        Z = (0, u.Ac)(k, X?.banner),
        q = (0, R.l)(B, X?.themeColors),
        Q = X?.bio ?? "",
        J = X?.pronouns ?? "",
        $ = (e, t, n) => {
            n(e ?? (null != t ? null : void 0));
        };
    return (0, i.jsxs)("div", {
        className: M.Q,
        children: [
            (0, i.jsx)(
                L.A,
                {
                    errors: F?.nick ?? z?.nick,
                    username: O.Ay.getName(e),
                    pendingNick: U,
                    currentNick: Y?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, i.jsx)(
                S.A,
                {
                    sectionTitle: G.intl.string(G.t["+T3RI/"]),
                    errors: F?.pronouns,
                    onPronounsChange: (e) => (0, b.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: V,
                    currentPronouns: J,
                },
                "pronouns",
            ),
            (0, i.jsxs)(P.A, {
                user: e,
                showOverlay: !K,
                children: [
                    (0, i.jsx)(
                        _.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    G.intl.string(G.t.lqaIxI),
                                    (0, i.jsx)(a.m, {
                                        text: G.intl.string(G.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: W,
                            onAvatarChange: (e) => $(e, Y?.avatar, (e) => (0, b.p)({ guildId: n.id, avatar: e })),
                            errors: F?.avatar,
                            guildId: n.id,
                            disabled: !K,
                        },
                        "avatar",
                    ),
                    (0, i.jsx)(
                        g.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    G.intl.string(G.t["7v0T9P"]),
                                    (0, i.jsx)(a.m, {
                                        text: G.intl.string(G.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, i.jsx)(x.A, { user: e, guildId: n.id }),
                    (0, i.jsx)(
                        h.A,
                        {
                            user: e,
                            guild: n,
                            titleIcon: (0, i.jsx)(a.m, {
                                text: G.intl.string(G.t["5AFxuK"]),
                                children: (0, i.jsx)(o.tvc, { size: "md", color: "currentColor", className: M.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, i.jsx)(
                        p.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    G.intl.string(G.t.wR5wOo),
                                    (0, i.jsx)(a.m, {
                                        text: G.intl.string(G.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, i.jsx)(T.A, { user: e, guild: n, sectionTitle: G.intl.string(G.t.GWrZOd) }, "frame"),
                    (0, i.jsx)(
                        A.A,
                        {
                            showRemoveBannerButton: Z,
                            errors: F?.banner,
                            onBannerChange: (e) => $(e, X?.banner, (e) => (0, b.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !K,
                        },
                        "banner",
                    ),
                    (0, i.jsx)(f.A, {
                        user: e,
                        pendingAvatarSrc: H,
                        pendingColors: B,
                        onThemeColorsChange: (e) => (0, b.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: q,
                    }),
                    (0, i.jsx)(
                        m.A,
                        {
                            placeholder: G.intl.string(G.t["/7NKgv"]),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    G.intl.string(G.t.ZzAR2Y),
                                    (0, i.jsx)(a.m, {
                                        text: G.intl.string(G.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, b.p)({ guildId: n.id, bio: e }),
                            errors: F?.bio ?? z?.bio,
                            pendingBio: w,
                            currentBio: Q,
                            disabled: !K,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
