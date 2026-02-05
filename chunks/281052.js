n.d(t, { A: () => G });
var i = n(627968);
n(64700);
var s = n(284009),
    r = n.n(s),
    a = n(311907),
    l = n(990078),
    o = n(397927),
    c = n(81400),
    d = n(757036),
    u = n(919395),
    _ = n(124064),
    m = n(200790),
    A = n(230084),
    g = n(180020),
    E = n(431982),
    h = n(730588),
    p = n(164599),
    C = n(63675),
    x = n(546849),
    T = n(101058),
    I = n(836602),
    S = n(622543),
    f = n(696451),
    N = n(71393),
    b = n(287809),
    R = n(927578),
    v = n(427262),
    O = n(159001),
    j = n(684732),
    P = n(168917),
    y = n(746706),
    L = n(788868),
    D = n(985018),
    M = n(453814);
function G() {
    let e = (0, a.bG)([b.default], () => {
            let e = b.default.getCurrentUser();
            return r()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, d.L)(L.PremiumTypes.TIER_2),
        n = (0, a.bG)([I.A, N.A], () => N.A.getGuild(I.A.selectedGuildId));
    r()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: G,
            pendingBanner: U,
            pendingBio: k,
            pendingPronouns: B,
            pendingThemeColors: w,
            errors: H,
        } = (0, a.cf)([I.A], () => ({ ...I.A.getPendingChanges(n.id), errors: I.A.getErrors(n.id) })),
        V = (0, T.V7)({ userId: e.id, image: s }),
        F = (0, c.EC)(n.id),
        Y = (0, a.bG)([f.Ay], () => (null == n.id ? null : f.Ay.getMember(n.id, e.id))),
        W = (0, a.bG)([S.A], () => S.A.getGuildMemberProfile(e.id, n.id)),
        z = R.Ay.canUsePremiumProfileCustomization(e),
        K = (0, u.z5)(s, Y?.avatar),
        Z = (0, u.Ac)(U, W?.banner),
        X = (0, j.lS)(w, W?.themeColors),
        q = W?.bio ?? "",
        J = W?.pronouns ?? "",
        Q = (e, t, n) => {
            n(e ?? (null != t ? null : void 0));
        };
    return (0, i.jsxs)("div", {
        className: M.Q,
        children: [
            (0, i.jsx)(
                P.A,
                {
                    errors: H?.nick ?? F?.nick,
                    username: v.Ay.getName(e),
                    pendingNick: G,
                    currentNick: Y?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, i.jsx)(
                x.A,
                {
                    sectionTitle: D.intl.string(D.t["+T3RI/"]),
                    errors: H?.pronouns,
                    onPronounsChange: (e) => {
                        (0, j.d7)(e, J);
                    },
                    pendingPronouns: B,
                    currentPronouns: J,
                },
                "pronouns",
            ),
            (0, i.jsxs)(y.A, {
                user: e,
                showOverlay: !z,
                children: [
                    (0, i.jsx)(
                        A.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    D.intl.string(D.t.lqaIxI),
                                    (0, i.jsx)(l.m, {
                                        text: D.intl.string(D.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: K,
                            onAvatarChange: (e) => Q(e, Y?.avatar, O.zq),
                            errors: H?.avatar,
                            guildId: n.id,
                            disabled: !z,
                        },
                        "avatar",
                    ),
                    (0, i.jsx)(
                        m.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    D.intl.string(D.t["7v0T9P"]),
                                    (0, i.jsx)(l.m, {
                                        text: D.intl.string(D.t["5AFxuK"]),
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
                    !t && (0, i.jsx)(g.A, { user: e, guildId: n.id }),
                    (0, i.jsx)(
                        E.A,
                        {
                            user: e,
                            guild: n,
                            titleIcon: (0, i.jsx)(l.m, {
                                text: D.intl.string(D.t["5AFxuK"]),
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
                                    D.intl.string(D.t.wR5wOo),
                                    (0, i.jsx)(l.m, {
                                        text: D.intl.string(D.t["5AFxuK"]),
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
                            showRemoveBannerButton: Z,
                            errors: H?.banner,
                            onBannerChange: (e) => Q(e, W?.banner, O.Iz),
                            guildId: n?.id,
                            disabled: !z,
                        },
                        "banner",
                    ),
                    (0, i.jsx)(C.A, {
                        user: e,
                        pendingAvatarSrc: V,
                        pendingColors: w,
                        onThemeColorsChange: (e) => {
                            (0, j.wx)(e, W?.themeColors);
                        },
                        guildId: n?.id,
                        showResetThemeButton: X,
                    }),
                    (0, i.jsx)(
                        _.A,
                        {
                            placeholder: D.intl.string(D.t["/7NKgv"]),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    D.intl.string(D.t.jGoPJT),
                                    (0, i.jsx)(l.m, {
                                        text: D.intl.string(D.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: M.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, j.Rn)(e, q),
                            errors: H?.bio ?? F?.bio,
                            pendingBio: k,
                            currentBio: q,
                            disabled: !z,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
