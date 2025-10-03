n.d(t, { Z: () => D });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(295474),
    u = n(150039),
    d = n(126631),
    f = n(433411),
    _ = n(532432),
    p = n(818420),
    h = n(134795),
    m = n(513901),
    g = n(451392),
    E = n(906364),
    b = n(643879),
    y = n(621853),
    O = n(271383),
    v = n(594174),
    I = n(74538),
    T = n(51144),
    S = n(18438),
    A = n(778825),
    C = n(52597),
    N = n(430131),
    R = n(291334),
    P = n(388032),
    w = n(737788);
function D(e) {
    var t, n, i, D;
    let { guild: L, nameplateEnabled: x } = e,
        M = (0, o.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        {
            pendingAvatar: j,
            pendingNickname: k,
            pendingBanner: U,
            pendingBio: G,
            pendingPronouns: B,
            pendingThemeColors: Z,
            errors: F,
            guild: V,
        } = (0, o.cj)([A.Z], () => {
            let {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBio: n,
                pendingPronouns: r,
                pendingBanner: i,
                pendingThemeColors: a,
            } = A.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: i,
                pendingBio: n,
                pendingPronouns: r,
                pendingThemeColors: a,
                errors: A.Z.getErrors(),
                guild: A.Z.getGuild(),
            };
        }),
        H = (0, b.SD)({
            userId: M.id,
            image: j,
        }),
        Y = null != L ? L : V;
    a()(null != Y, "guild should not be null");
    let W = (0, c.gS)(Y.id),
        K = (0, o.e7)([O.ZP], () => (null == Y.id ? null : O.ZP.getMember(Y.id, M.id))),
        z = (0, o.e7)([y.Z], () => y.Z.getGuildMemberProfile(M.id, Y.id)),
        q = I.ZP.canUsePremiumProfileCustomization(M),
        X = (0, u.gd)(j, null == K ? void 0 : K.avatar),
        Q = (0, u.f$)(U, null == z ? void 0 : z.banner),
        J = (0, C.p)(Z, null == z ? void 0 : z.themeColors),
        $ = null != (t = null == z ? void 0 : z.bio) ? t : "",
        ee = null != (n = null == z ? void 0 : z.pronouns) ? n : "",
        et = (e, t, n) => {
            let r = null != t ? null : void 0;
            n(null != e ? e : r);
        },
        en = (e) => et(e, null == z ? void 0 : z.banner, S.g_),
        er = (e) => et(e, null == K ? void 0 : K.avatar, S.I5);
    return (0, r.jsxs)("div", {
        className: w.sectionsContainer,
        children: [
            (0, r.jsx)(
                N.Z,
                {
                    errors: null != (i = null == F ? void 0 : F.nick) ? i : null == W ? void 0 : W.nick,
                    username: T.ZP.getName(M),
                    pendingNick: k,
                    currentNick: null == K ? void 0 : K.nick,
                    user: M,
                    guild: Y,
                },
                "nick",
            ),
            (0, r.jsx)(
                E.Z,
                {
                    sectionTitle: P.intl.string(P.t["+T3RIy"]),
                    errors: null == F ? void 0 : F.pronouns,
                    onPronounsChange: (e) => {
                        (0, C.xs)(e, ee);
                    },
                    pendingPronouns: B,
                    currentPronouns: ee,
                },
                "pronouns",
            ),
            (0, r.jsxs)(R.Z, {
                user: M,
                showOverlay: !q,
                children: [
                    (0, r.jsx)(
                        _.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    P.intl.string(P.t.lqaIxM),
                                    (0, r.jsx)(s.u, {
                                        text: P.intl.string(P.t["5AFxuL"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: X,
                            onAvatarChange: er,
                            errors: null == F ? void 0 : F.avatar,
                            guildId: Y.id,
                            disabled: !q,
                        },
                        "avatar",
                    ),
                    (0, r.jsx)(
                        f.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    P.intl.string(P.t["7v0T9P"]),
                                    (0, r.jsx)(s.u, {
                                        text: P.intl.string(P.t["5AFxuL"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            user: M,
                            guild: Y,
                        },
                        "decoration",
                    ),
                    x &&
                        (0, r.jsx)(
                            p.Z,
                            {
                                user: M,
                                guild: Y,
                                titleIcon: (0, r.jsx)(s.u, {
                                    text: P.intl.string(P.t["5AFxuL"]),
                                    children: (0, r.jsx)(l.SrA, {
                                        size: "md",
                                        color: "currentColor",
                                        className: w.nitroWheel,
                                    }),
                                }),
                            },
                            "nameplate",
                        ),
                    (0, r.jsx)(
                        m.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    P.intl.string(P.t.wR5wOj),
                                    (0, r.jsx)(s.u, {
                                        text: P.intl.string(P.t["5AFxuL"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            user: M,
                            guild: Y,
                        },
                        "effect",
                    ),
                    (0, r.jsx)(
                        h.Z,
                        {
                            showRemoveBannerButton: Q,
                            errors: null == F ? void 0 : F.banner,
                            onBannerChange: en,
                            guildId: null == Y ? void 0 : Y.id,
                            disabled: !q,
                        },
                        "banner",
                    ),
                    (0, r.jsx)(g.Z, {
                        user: M,
                        pendingAvatarSrc: H,
                        pendingColors: Z,
                        onThemeColorsChange: (e) => {
                            (0, C.ce)(e, null == z ? void 0 : z.themeColors);
                        },
                        guildId: null == Y ? void 0 : Y.id,
                        showResetThemeButton: J,
                    }),
                    (0, r.jsx)(
                        d.Z,
                        {
                            placeholder: P.intl.string(P.t["/7NKgo"]),
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    P.intl.string(P.t.jGoPJS),
                                    (0, r.jsx)(s.u, {
                                        text: P.intl.string(P.t["5AFxuL"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, C.qN)(e, $),
                            errors: null != (D = null == F ? void 0 : F.bio) ? D : null == W ? void 0 : W.bio,
                            pendingBio: G,
                            currentBio: $,
                            disabled: !q,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
