n.d(t, { Z: () => M });
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
    p = n(126631),
    _ = n(433411),
    m = n(532432),
    h = n(235433),
    g = n(818420),
    E = n(134795),
    b = n(513901),
    y = n(451392),
    O = n(906364),
    v = n(643879),
    S = n(621853),
    I = n(271383),
    T = n(594174),
    C = n(74538),
    A = n(51144),
    N = n(18438),
    P = n(778825),
    R = n(52597),
    w = n(430131),
    D = n(291334),
    x = n(474936),
    L = n(388032),
    j = n(822462);
function M(e) {
    var t, n, i, M;
    let { guild: k } = e,
        U = (0, o.e7)([T.default], () => {
            let e = T.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        G = (0, d.m)(x.PremiumTypes.TIER_2),
        {
            pendingAvatar: Z,
            pendingNickname: F,
            pendingBanner: B,
            pendingBio: V,
            pendingPronouns: H,
            pendingThemeColors: Y,
            errors: W,
            guild: K,
        } = (0, o.cj)([P.Z], () => {
            let {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBio: n,
                pendingPronouns: r,
                pendingBanner: i,
                pendingThemeColors: a,
            } = P.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: i,
                pendingBio: n,
                pendingPronouns: r,
                pendingThemeColors: a,
                errors: P.Z.getErrors(),
                guild: P.Z.getGuild(),
            };
        }),
        z = (0, v.SD)({
            userId: U.id,
            image: Z,
        }),
        q = null != k ? k : K;
    a()(null != q, "guild should not be null");
    let Q = (0, u.gS)(q.id),
        X = (0, o.e7)([I.ZP], () => (null == q.id ? null : I.ZP.getMember(q.id, U.id))),
        J = (0, o.e7)([S.Z], () => S.Z.getGuildMemberProfile(U.id, q.id)),
        $ = c.JH.useExperiment({ location: "GuildIdentityCustomizationSections" }).enabled,
        ee = C.ZP.canUsePremiumProfileCustomization(U),
        et = (0, f.gd)(Z, null == X ? void 0 : X.avatar),
        en = (0, f.f$)(B, null == J ? void 0 : J.banner),
        er = (0, R.p)(Y, null == J ? void 0 : J.themeColors),
        ei = null != (t = null == J ? void 0 : J.bio) ? t : "",
        ea = null != (n = null == J ? void 0 : J.pronouns) ? n : "",
        eo = (e, t, n) => {
            let r = null != t ? null : void 0;
            n(null != e ? e : r);
        },
        es = (e) => eo(e, null == J ? void 0 : J.banner, N.g_),
        el = (e) => eo(e, null == X ? void 0 : X.avatar, N.I5);
    return (0, r.jsxs)("div", {
        className: j.sectionsContainer,
        children: [
            (0, r.jsx)(
                w.Z,
                {
                    errors: null != (i = null == W ? void 0 : W.nick) ? i : null == Q ? void 0 : Q.nick,
                    username: A.ZP.getName(U),
                    pendingNick: F,
                    currentNick: null == X ? void 0 : X.nick,
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
                        (0, R.xs)(e, ea);
                    },
                    pendingPronouns: H,
                    currentPronouns: ea,
                },
                "pronouns",
            ),
            (0, r.jsxs)(D.Z, {
                user: U,
                showOverlay: !ee,
                children: [
                    (0, r.jsx)(
                        m.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    L.intl.string(L.t.lqaIxI),
                                    (0, r.jsx)(s.u, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: j.nitroWheel,
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
                        _.Z,
                        {
                            sectionTitle: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    L.intl.string(L.t["7v0T9P"]),
                                    (0, r.jsx)(s.u, {
                                        text: L.intl.string(L.t["5AFxuK"]),
                                        children: (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: "currentColor",
                                            className: j.nitroWheel,
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
                        (0, r.jsx)(h.Z, {
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
                                    className: j.nitroWheel,
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
                                            className: j.nitroWheel,
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
                            (0, R.ce)(e, null == J ? void 0 : J.themeColors);
                        },
                        guildId: null == q ? void 0 : q.id,
                        showResetThemeButton: er,
                    }),
                    (0, r.jsx)(
                        p.Z,
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
                                            className: j.nitroWheel,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, R.qN)(e, ei),
                            errors: null != (M = null == W ? void 0 : W.bio) ? M : null == Q ? void 0 : Q.bio,
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
