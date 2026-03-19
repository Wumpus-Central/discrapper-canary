n.d(t, { A: () => G });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(81400),
    c = n(757036),
    u = n(919395),
    _ = n(124064),
    m = n(200790),
    g = n(230084),
    A = n(180020),
    x = n(431982),
    h = n(730588),
    p = n(164599),
    T = n(63675),
    E = n(546849),
    S = n(101058),
    f = n(84540),
    C = n(836602),
    b = n(622543),
    N = n(696451),
    I = n(71393),
    v = n(287809),
    j = n(927578),
    y = n(427262),
    R = n(684732),
    O = n(168917),
    L = n(746706),
    D = n(788868),
    P = n(985018),
    M = n(745496);
function G() {
    let e = (0, a.bG)([v.default], () => {
            let e = v.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, c.L)(D.PremiumTypes.TIER_2),
        n = (0, a.bG)([C.A, I.A], () => I.A.getGuild(C.A.selectedGuildId));
    l()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: G,
            pendingBanner: U,
            pendingBio: k,
            pendingPronouns: V,
            pendingThemeColors: w,
            errors: B,
        } = (0, a.cf)([C.A], () => ({ ...C.A.getPendingChanges(n.id), errors: C.A.getErrors(n.id) })),
        H = (0, S.V7)({ userId: e.id, image: s }),
        F = (0, d.EC)(n.id),
        Y = (0, a.bG)([N.Ay], () => (null == n.id ? null : N.Ay.getMember(n.id, e.id))),
        z = (0, a.bG)([b.A], () => b.A.getGuildMemberProfile(e.id, n.id)),
        X = j.Ay.canUsePremiumProfileCustomization(e),
        W = (0, u.z5)(s, Y?.avatar),
        K = (0, u.Ac)(U, z?.banner),
        Z = (0, R.l)(w, z?.themeColors),
        q = z?.bio ?? "",
        J = z?.pronouns ?? "",
        Q = (e, t, n) => {
            n(e ?? (null != t ? null : void 0));
        };
    return (0, i.jsxs)("div", {
        className: M.Q,
        children: [
            (0, i.jsx)(
                O.A,
                {
                    errors: B?.nick ?? F?.nick,
                    username: y.Ay.getName(e),
                    pendingNick: G,
                    currentNick: Y?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, i.jsx)(
                E.A,
                {
                    sectionTitle: P.intl.string(P.t["+T3RI/"]),
                    errors: B?.pronouns,
                    onPronounsChange: (e) => (0, f.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: V,
                    currentPronouns: J,
                },
                "pronouns",
            ),
            (0, i.jsxs)(L.A, {
                user: e,
                showOverlay: !X,
                children: [
                    (0, i.jsx)(
                        g.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    P.intl.string(P.t.lqaIxI),
                                    (0, i.jsx)(r.m, {
                                        text: P.intl.string(P.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: W,
                            onAvatarChange: (e) => Q(e, Y?.avatar, (e) => (0, f.p)({ guildId: n.id, avatar: e })),
                            errors: B?.avatar,
                            guildId: n.id,
                            disabled: !X,
                        },
                        "avatar",
                    ),
                    (0, i.jsx)(
                        m.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    P.intl.string(P.t["7v0T9P"]),
                                    (0, i.jsx)(r.m, {
                                        text: P.intl.string(P.t["5AFxuK"]),
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
                    !t && (0, i.jsx)(A.A, { user: e, guildId: n.id }),
                    (0, i.jsx)(
                        x.A,
                        {
                            user: e,
                            guild: n,
                            titleIcon: (0, i.jsx)(r.m, {
                                text: P.intl.string(P.t["5AFxuK"]),
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
                                    P.intl.string(P.t.wR5wOo),
                                    (0, i.jsx)(r.m, {
                                        text: P.intl.string(P.t["5AFxuK"]),
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
                    (0, i.jsx)(
                        h.A,
                        {
                            showRemoveBannerButton: K,
                            errors: B?.banner,
                            onBannerChange: (e) => Q(e, z?.banner, (e) => (0, f.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !X,
                        },
                        "banner",
                    ),
                    (0, i.jsx)(T.A, {
                        user: e,
                        pendingAvatarSrc: H,
                        pendingColors: w,
                        onThemeColorsChange: (e) => (0, f.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: Z,
                    }),
                    (0, i.jsx)(
                        _.A,
                        {
                            placeholder: P.intl.string(P.t["/7NKgv"]),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    P.intl.string(P.t.ZzAR2Y),
                                    (0, i.jsx)(r.m, {
                                        text: P.intl.string(P.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, f.p)({ guildId: n.id, bio: e }),
                            errors: B?.bio ?? F?.bio,
                            pendingBio: k,
                            currentBio: q,
                            disabled: !X,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
