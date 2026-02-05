n.d(t, { A: () => M });
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
    I = n(622543),
    S = n(696451),
    f = n(287809),
    N = n(927578),
    b = n(427262),
    R = n(159001),
    v = n(833336),
    O = n(684732),
    j = n(168917),
    P = n(746706),
    y = n(788868),
    L = n(985018),
    D = n(453814);
function M(e) {
    let { guild: t } = e,
        n = (0, a.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return r()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, d.L)(y.PremiumTypes.TIER_2),
        {
            pendingAvatar: M,
            pendingNickname: G,
            pendingBanner: U,
            pendingBio: k,
            pendingPronouns: B,
            pendingThemeColors: w,
            errors: H,
            guild: V,
        } = (0, a.cf)([v.A], () => {
            let {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBio: n,
                pendingPronouns: i,
                pendingBanner: s,
                pendingThemeColors: r,
            } = v.A.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: s,
                pendingBio: n,
                pendingPronouns: i,
                pendingThemeColors: r,
                errors: v.A.getErrors(),
                guild: v.A.getGuild(),
            };
        }),
        F = (0, T.V7)({ userId: n.id, image: M }),
        Y = t ?? V;
    r()(null != Y, "guild should not be null");
    let W = (0, c.EC)(Y.id),
        z = (0, a.bG)([S.Ay], () => (null == Y.id ? null : S.Ay.getMember(Y.id, n.id))),
        K = (0, a.bG)([I.A], () => I.A.getGuildMemberProfile(n.id, Y.id)),
        Z = N.Ay.canUsePremiumProfileCustomization(n),
        X = (0, u.z5)(M, z?.avatar),
        q = (0, u.Ac)(U, K?.banner),
        J = (0, O.lS)(w, K?.themeColors),
        Q = K?.bio ?? "",
        $ = K?.pronouns ?? "",
        ee = (e, t, n) => {
            n(e ?? (null != t ? null : void 0));
        };
    return (0, i.jsxs)("div", {
        className: D.Q,
        children: [
            (0, i.jsx)(
                j.A,
                {
                    errors: H?.nick ?? W?.nick,
                    username: b.Ay.getName(n),
                    pendingNick: G,
                    currentNick: z?.nick,
                    user: n,
                    guild: Y,
                },
                "nick",
            ),
            (0, i.jsx)(
                x.A,
                {
                    sectionTitle: L.intl.string(L.t["+T3RI/"]),
                    errors: H?.pronouns,
                    onPronounsChange: (e) => {
                        (0, O.d7)(e, $);
                    },
                    pendingPronouns: B,
                    currentPronouns: $,
                },
                "pronouns",
            ),
            (0, i.jsxs)(P.A, {
                user: n,
                showOverlay: !Z,
                children: [
                    (0, i.jsx)(
                        A.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    L.intl.string(L.t.lqaIxI),
                                    (0, i.jsx)(l.m, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: D.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: X,
                            onAvatarChange: (e) => ee(e, z?.avatar, R.zq),
                            errors: H?.avatar,
                            guildId: Y.id,
                            disabled: !Z,
                        },
                        "avatar",
                    ),
                    (0, i.jsx)(
                        m.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    L.intl.string(L.t["7v0T9P"]),
                                    (0, i.jsx)(l.m, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: D.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: n,
                            guild: Y,
                        },
                        "decoration",
                    ),
                    !s && (0, i.jsx)(g.A, { user: n, guildId: Y.id }),
                    (0, i.jsx)(
                        E.A,
                        {
                            user: n,
                            guild: Y,
                            titleIcon: (0, i.jsx)(l.m, {
                                text: L.intl.string(L.t["5AFxuK"]),
                                children: (0, i.jsx)(o.tvc, { size: "md", color: "currentColor", className: D.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, i.jsx)(
                        p.A,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    L.intl.string(L.t.wR5wOo),
                                    (0, i.jsx)(l.m, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: D.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: n,
                            guild: Y,
                        },
                        "effect",
                    ),
                    (0, i.jsx)(
                        h.A,
                        {
                            showRemoveBannerButton: q,
                            errors: H?.banner,
                            onBannerChange: (e) => ee(e, K?.banner, R.Iz),
                            guildId: Y?.id,
                            disabled: !Z,
                        },
                        "banner",
                    ),
                    (0, i.jsx)(C.A, {
                        user: n,
                        pendingAvatarSrc: F,
                        pendingColors: w,
                        onThemeColorsChange: (e) => {
                            (0, O.wx)(e, K?.themeColors);
                        },
                        guildId: Y?.id,
                        showResetThemeButton: J,
                    }),
                    (0, i.jsx)(
                        _.A,
                        {
                            placeholder: L.intl.string(L.t["/7NKgv"]),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    L.intl.string(L.t.jGoPJT),
                                    (0, i.jsx)(l.m, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, i.jsx)(o.tvc, {
                                            size: "md",
                                            color: "currentColor",
                                            className: D.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, O.Rn)(e, Q),
                            errors: H?.bio ?? W?.bio,
                            pendingBio: k,
                            currentBio: Q,
                            disabled: !Z,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
