n.d(t, { Z: () => O });
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(295474),
    c = n(150039),
    d = n(126631),
    u = n(433411),
    m = n(532432),
    h = n(134795),
    g = n(513901),
    _ = n(451392),
    x = n(906364),
    p = n(621853),
    E = n(271383),
    C = n(594174),
    f = n(74538),
    T = n(51144),
    N = n(18438),
    S = n(778825),
    I = n(52597),
    b = n(430131),
    v = n(133484),
    j = n(388032),
    A = n(894368);
function O(e) {
    var t, n, s, O;
    let { guild: R } = e,
        P = (0, l.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return r()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        {
            pendingAvatar: D,
            pendingNickname: y,
            pendingBanner: Z,
            pendingBio: k,
            pendingPronouns: L,
            pendingThemeColors: B,
            errors: M,
            guild: w
        } = (0, l.cj)([S.Z], () => {
            let { pendingAvatar: e, pendingNickname: t, pendingBio: n, pendingPronouns: i, pendingBanner: s, pendingThemeColors: r } = S.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: s,
                pendingBio: n,
                pendingPronouns: i,
                pendingThemeColors: r,
                errors: S.Z.getErrors(),
                guild: S.Z.getGuild()
            };
        }),
        V = null != R ? R : w;
    r()(null != V, 'guild should not be null');
    let U = (0, o.gS)(V.id),
        G = (0, l.e7)([E.ZP], () => (null == V.id ? null : E.ZP.getMember(V.id, P.id))),
        F = (0, l.e7)([p.Z], () => p.Z.getGuildMemberProfile(P.id, V.id)),
        H = f.ZP.canUsePremiumProfileCustomization(P),
        z = (0, c.gd)(D, null == G ? void 0 : G.avatar),
        Y = (0, c.f$)(Z, null == F ? void 0 : F.banner),
        W = (0, I.p)(B, null == F ? void 0 : F.themeColors),
        K = null !== (t = null == F ? void 0 : F.bio) && void 0 !== t ? t : '',
        q = null !== (n = null == F ? void 0 : F.pronouns) && void 0 !== n ? n : '',
        X = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, i.jsxs)('div', {
        className: A.sectionsContainer,
        children: [
            (0, i.jsx)(
                b.Z,
                {
                    errors: null !== (s = null == M ? void 0 : M.nick) && void 0 !== s ? s : null == U ? void 0 : U.nick,
                    username: T.ZP.getName(P),
                    pendingNick: y,
                    currentNick: null == G ? void 0 : G.nick,
                    guild: V
                },
                'nick'
            ),
            (0, i.jsx)(
                x.Z,
                {
                    sectionTitle: j.intl.string(j.t['+T3RIy']),
                    errors: null == M ? void 0 : M.pronouns,
                    onPronounsChange: (e) => {
                        (0, I.xs)(e, q);
                    },
                    pendingPronouns: L,
                    currentPronouns: q
                },
                'pronouns'
            ),
            (0, i.jsxs)(v.Z, {
                user: P,
                showOverlay: !H,
                children: [
                    (0, i.jsx)(
                        m.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxM),
                                    (0, i.jsx)(a.ua7, {
                                        text: j.intl.string(j.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(a.SrA, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: A.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            showRemoveAvatarButton: z,
                            onAvatarChange: (e) => X(e, null == G ? void 0 : G.avatar, N.I5),
                            errors: null == M ? void 0 : M.avatar,
                            guildId: V.id,
                            disabled: !H
                        },
                        'avatar'
                    ),
                    (0, i.jsx)(
                        u.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    j.intl.string(j.t['7v0T9P']),
                                    (0, i.jsx)(a.ua7, {
                                        text: j.intl.string(j.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(a.SrA, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: A.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            user: P,
                            guild: V
                        },
                        'decoration'
                    ),
                    (0, i.jsx)(
                        g.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOj),
                                    (0, i.jsx)(a.ua7, {
                                        text: j.intl.string(j.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(a.SrA, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: A.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            user: P,
                            guild: V
                        },
                        'effect'
                    ),
                    (0, i.jsx)(
                        h.Z,
                        {
                            showRemoveBannerButton: Y,
                            errors: null == M ? void 0 : M.banner,
                            onBannerChange: (e) => X(e, null == F ? void 0 : F.banner, N.g_),
                            guildId: null == V ? void 0 : V.id,
                            disabled: !H
                        },
                        'banner'
                    ),
                    (0, i.jsx)(_.Z, {
                        user: P,
                        pendingAvatar: D,
                        pendingColors: B,
                        onThemeColorsChange: (e) => {
                            (0, I.ce)(e, null == F ? void 0 : F.themeColors);
                        },
                        guildId: null == V ? void 0 : V.id,
                        showResetThemeButton: W
                    }),
                    (0, i.jsx)(
                        d.Z,
                        {
                            placeholder: j.intl.string(j.t['/7NKgo']),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    j.intl.string(j.t.jGoPJS),
                                    (0, i.jsx)(a.ua7, {
                                        text: j.intl.string(j.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(a.SrA, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: A.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            onBioChange: (e) => (0, I.qN)(e, K),
                            errors: null !== (O = null == M ? void 0 : M.bio) && void 0 !== O ? O : null == U ? void 0 : U.bio,
                            pendingBio: k,
                            currentBio: K,
                            disabled: !H
                        },
                        'about'
                    )
                ]
            })
        ]
    });
}
