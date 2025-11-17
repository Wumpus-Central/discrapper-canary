n.d(t, { Z: () => k });
var r = n(54381);
n(473749);
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
    D = n(430131),
    w = n(291334),
    x = n(474936),
    L = n(388032),
    M = n(737788);
function k(e) {
    var t, n, i, k;
    let { guild: j } = e,
        U = (0, o.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        G = (0, d.m)(x.PremiumTypes.TIER_2),
        {
            pendingAvatar: B,
            pendingNickname: Z,
            pendingBanner: F,
            pendingBio: V,
            pendingPronouns: H,
            pendingThemeColors: Y,
            errors: W,
            guild: K,
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
        z = (0, v.SD)({
            userId: U.id,
            image: B,
        }),
        q = null != j ? j : K;
    a()(null != q, "guild should not be null");
    let X = (0, u.gS)(q.id),
        Q = (0, o.e7)([T.ZP], () => (null == q.id ? null : T.ZP.getMember(q.id, U.id))),
        J = (0, o.e7)([I.Z], () => I.Z.getGuildMemberProfile(U.id, q.id)),
        $ = c.JH.useExperiment({ location: "GuildIdentityCustomizationSections" }).enabled,
        ee = A.ZP.canUsePremiumProfileCustomization(U),
        et = (0, f.gd)(B, null == Q ? void 0 : Q.avatar),
        en = (0, f.f$)(F, null == J ? void 0 : J.banner),
        er = (0, P.p)(Y, null == J ? void 0 : J.themeColors),
        ei = null != (t = null == J ? void 0 : J.bio) ? t : "",
        ea = null != (n = null == J ? void 0 : J.pronouns) ? n : "",
        eo = (e, t, n) => {
            let r = null != t ? null : void 0;
            n(null != e ? e : r);
        },
        es = (e) => eo(e, null == J ? void 0 : J.banner, N.g_),
        el = (e) => eo(e, null == Q ? void 0 : Q.avatar, N.I5);
    return (0, r.jsxs)("div", {
        className: M.sectionsContainer,
        children: [
            (0, r.jsx)(
                D.Z,
                {
                    errors: null != (i = null == W ? void 0 : W.nick) ? i : null == X ? void 0 : X.nick,
                    username: C.ZP.getName(U),
                    pendingNick: Z,
                    currentNick: null == Q ? void 0 : Q.nick,
                    user: U,
                    guild: q,
                },
                "nick",
            ),
            (0, r.jsx)(
                O.Z,
                {
                    sectionTitle: L.intl.string(L.t["+T3RI/"]),
                    errors: null == W ? void 0 : W.pronouns,
                    onPronounsChange: (e) => {
                        (0, P.xs)(e, ea);
                    },
                    pendingPronouns: H,
                    currentPronouns: ea,
                },
                "pronouns",
            ),
            (0, r.jsxs)(w.Z, {
                user: U,
                showOverlay: !ee,
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
                            showRemoveAvatarButton: et,
                            onAvatarChange: el,
                            errors: null == W ? void 0 : W.avatar,
                            guildId: q.id,
                            disabled: !ee,
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
                            user: U,
                            guild: q,
                        },
                        "decoration",
                    ),
                    $ &&
                        !G &&
                        (0, r.jsx)(m.Z, {
                            user: U,
                            guildId: q.id,
                        }),
                    (0, r.jsx)(
                        g.Z,
                        {
                            user: U,
                            guild: q,
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
                            user: U,
                            guild: q,
                        },
                        "effect",
                    ),
                    (0, r.jsx)(
                        E.Z,
                        {
                            showRemoveBannerButton: en,
                            errors: null == W ? void 0 : W.banner,
                            onBannerChange: es,
                            guildId: null == q ? void 0 : q.id,
                            disabled: !ee,
                        },
                        "banner",
                    ),
                    (0, r.jsx)(y.Z, {
                        user: U,
                        pendingAvatarSrc: z,
                        pendingColors: Y,
                        onThemeColorsChange: (e) => {
                            (0, P.ce)(e, null == J ? void 0 : J.themeColors);
                        },
                        guildId: null == q ? void 0 : q.id,
                        showResetThemeButton: er,
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
                            onBioChange: (e) => (0, P.qN)(e, ei),
                            errors: null != (k = null == W ? void 0 : W.bio) ? k : null == X ? void 0 : X.bio,
                            pendingBio: V,
                            currentBio: ei,
                            disabled: !ee,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
