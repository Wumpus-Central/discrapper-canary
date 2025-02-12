n.d(t, { Z: () => O });
var i = n(200651);
n(192379);
var s = n(512722),
    l = n.n(s),
    r = n(442837),
    a = n(481060),
    o = n(295474),
    c = n(150039),
    d = n(126631),
    u = n(433411),
    h = n(532432),
    m = n(134795),
    g = n(513901),
    x = n(451392),
    _ = n(906364),
    p = n(621853),
    E = n(271383),
    C = n(594174),
    N = n(74538),
    f = n(51144),
    I = n(18438),
    T = n(778825),
    S = n(52597),
    j = n(430131),
    v = n(133484),
    b = n(388032),
    A = n(23056);
function O(e) {
    var t, n, s, O;
    let { guild: R } = e,
        D = (0, r.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return l()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        {
            pendingAvatar: P,
            pendingNickname: y,
            pendingBanner: Z,
            pendingBio: L,
            pendingPronouns: k,
            pendingThemeColors: B,
            errors: M,
            guild: V
        } = (0, r.cj)([T.Z], () => {
            let { pendingAvatar: e, pendingNickname: t, pendingBio: n, pendingPronouns: i, pendingBanner: s, pendingThemeColors: l } = T.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: s,
                pendingBio: n,
                pendingPronouns: i,
                pendingThemeColors: l,
                errors: T.Z.getErrors(),
                guild: T.Z.getGuild()
            };
        }),
        w = null != R ? R : V;
    l()(null != w, 'guild should not be null');
    let U = (0, o.gS)(w.id),
        G = (0, r.e7)([E.ZP], () => (null == w.id ? null : E.ZP.getMember(w.id, D.id))),
        F = (0, r.e7)([p.Z], () => p.Z.getGuildMemberProfile(D.id, w.id)),
        z = N.ZP.canUsePremiumProfileCustomization(D),
        Y = (0, c.gd)(P, null == G ? void 0 : G.avatar),
        H = (0, c.f$)(Z, null == F ? void 0 : F.banner),
        W = (0, S.p)(B, null == F ? void 0 : F.themeColors),
        K = null !== (t = null == F ? void 0 : F.bio) && void 0 !== t ? t : '',
        X = null !== (n = null == F ? void 0 : F.pronouns) && void 0 !== n ? n : '',
        q = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, i.jsxs)('div', {
        className: A.sectionsContainer,
        children: [
            (0, i.jsx)(
                j.Z,
                {
                    errors: null !== (s = null == M ? void 0 : M.nick) && void 0 !== s ? s : null == U ? void 0 : U.nick,
                    username: f.ZP.getName(D),
                    pendingNick: y,
                    currentNick: null == G ? void 0 : G.nick,
                    guild: w
                },
                'nick'
            ),
            (0, i.jsx)(
                _.Z,
                {
                    sectionTitle: b.intl.string(b.t['+T3RIy']),
                    errors: null == M ? void 0 : M.pronouns,
                    onPronounsChange: (e) => {
                        (0, S.xs)(e, X);
                    },
                    pendingPronouns: k,
                    currentPronouns: X
                },
                'pronouns'
            ),
            (0, i.jsxs)(v.Z, {
                user: D,
                showOverlay: !z,
                children: [
                    (0, i.jsx)(
                        h.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    b.intl.string(b.t.lqaIxM),
                                    (0, i.jsx)(a.ua7, {
                                        text: b.intl.string(b.t['5AFxuL']),
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
                            showRemoveAvatarButton: Y,
                            onAvatarChange: (e) => q(e, null == G ? void 0 : G.avatar, I.I5),
                            errors: null == M ? void 0 : M.avatar,
                            guildId: w.id,
                            disabled: !z
                        },
                        'avatar'
                    ),
                    (0, i.jsx)(
                        u.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    b.intl.string(b.t['7v0T9P']),
                                    (0, i.jsx)(a.ua7, {
                                        text: b.intl.string(b.t['5AFxuL']),
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
                            user: D,
                            guild: w
                        },
                        'decoration'
                    ),
                    (0, i.jsx)(
                        g.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    b.intl.string(b.t.wR5wOj),
                                    (0, i.jsx)(a.ua7, {
                                        text: b.intl.string(b.t['5AFxuL']),
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
                            user: D,
                            guild: w
                        },
                        'effect'
                    ),
                    (0, i.jsx)(
                        m.Z,
                        {
                            showRemoveBannerButton: H,
                            errors: null == M ? void 0 : M.banner,
                            onBannerChange: (e) => q(e, null == F ? void 0 : F.banner, I.g_),
                            guildId: null == w ? void 0 : w.id,
                            disabled: !z
                        },
                        'banner'
                    ),
                    (0, i.jsx)(x.Z, {
                        user: D,
                        pendingAvatar: P,
                        pendingColors: B,
                        onThemeColorsChange: (e) => {
                            (0, S.ce)(e, null == F ? void 0 : F.themeColors);
                        },
                        guildId: null == w ? void 0 : w.id,
                        showResetThemeButton: W
                    }),
                    (0, i.jsx)(
                        d.Z,
                        {
                            placeholder: b.intl.string(b.t['/7NKgo']),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    b.intl.string(b.t.jGoPJS),
                                    (0, i.jsx)(a.ua7, {
                                        text: b.intl.string(b.t['5AFxuL']),
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
                            onBioChange: (e) => (0, S.qN)(e, K),
                            errors: null !== (O = null == M ? void 0 : M.bio) && void 0 !== O ? O : null == U ? void 0 : U.bio,
                            pendingBio: L,
                            currentBio: K,
                            disabled: !z
                        },
                        'about'
                    )
                ]
            })
        ]
    });
}
