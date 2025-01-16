n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(295474),
    c = n(150039),
    d = n(126631),
    u = n(433411),
    m = n(532432),
    g = n(134795),
    h = n(513901),
    p = n(451392),
    x = n(906364),
    f = n(621853),
    _ = n(271383),
    E = n(594174),
    C = n(74538),
    T = n(51144),
    S = n(18438),
    b = n(778825),
    I = n(52597),
    N = n(430131),
    v = n(133484),
    A = n(388032),
    j = n(552363);
function O(e) {
    var t, n, r, O;
    let { guild: R } = e,
        P = (0, a.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return s()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        {
            pendingAvatar: y,
            pendingNickname: B,
            pendingBanner: D,
            pendingBio: Z,
            pendingPronouns: L,
            pendingThemeColors: M,
            errors: k,
            guild: w
        } = (0, a.cj)([b.Z], () => {
            let { pendingAvatar: e, pendingNickname: t, pendingBio: n, pendingPronouns: i, pendingBanner: r, pendingThemeColors: s } = b.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: r,
                pendingBio: n,
                pendingPronouns: i,
                pendingThemeColors: s,
                errors: b.Z.getErrors(),
                guild: b.Z.getGuild()
            };
        }),
        F = null != R ? R : w;
    s()(null != F, 'guild should not be null');
    let U = (0, o.gS)(F.id),
        V = (0, a.e7)([_.ZP], () => (null == F.id ? null : _.ZP.getMember(F.id, P.id))),
        G = (0, a.e7)([f.Z], () => f.Z.getGuildMemberProfile(P.id, F.id)),
        H = C.ZP.canUsePremiumProfileCustomization(P),
        Y = (0, c.gd)(y, null == V ? void 0 : V.avatar),
        W = (0, c.f$)(D, null == G ? void 0 : G.banner),
        z = (0, I.p)(M, null == G ? void 0 : G.themeColors),
        K = null !== (t = null == G ? void 0 : G.bio) && void 0 !== t ? t : '',
        q = null !== (n = null == G ? void 0 : G.pronouns) && void 0 !== n ? n : '',
        Q = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, i.jsxs)('div', {
        className: j.sectionsContainer,
        children: [
            (0, i.jsx)(
                N.Z,
                {
                    errors: null !== (r = null == k ? void 0 : k.nick) && void 0 !== r ? r : null == U ? void 0 : U.nick,
                    username: T.ZP.getName(P),
                    pendingNick: B,
                    currentNick: null == V ? void 0 : V.nick,
                    guild: F
                },
                'nick'
            ),
            (0, i.jsx)(
                x.Z,
                {
                    sectionTitle: A.intl.string(A.t['+T3RIy']),
                    errors: null == k ? void 0 : k.pronouns,
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
                                    A.intl.string(A.t.lqaIxM),
                                    (0, i.jsx)(l.Tooltip, {
                                        text: A.intl.string(A.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(l.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: j.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            showRemoveAvatarButton: Y,
                            onAvatarChange: (e) => Q(e, null == V ? void 0 : V.avatar, S.I5),
                            errors: null == k ? void 0 : k.avatar,
                            guildId: F.id,
                            disabled: !H
                        },
                        'avatar'
                    ),
                    (0, i.jsx)(
                        u.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    A.intl.string(A.t['7v0T9P']),
                                    (0, i.jsx)(l.Tooltip, {
                                        text: A.intl.string(A.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(l.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: j.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            user: P,
                            guild: F
                        },
                        'decoration'
                    ),
                    (0, i.jsx)(
                        h.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    A.intl.string(A.t.wR5wOj),
                                    (0, i.jsx)(l.Tooltip, {
                                        text: A.intl.string(A.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(l.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: j.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            user: P,
                            guild: F
                        },
                        'effect'
                    ),
                    (0, i.jsx)(
                        g.Z,
                        {
                            showRemoveBannerButton: W,
                            errors: null == k ? void 0 : k.banner,
                            onBannerChange: (e) => Q(e, null == G ? void 0 : G.banner, S.g_),
                            guildId: null == F ? void 0 : F.id,
                            disabled: !H
                        },
                        'banner'
                    ),
                    (0, i.jsx)(p.Z, {
                        user: P,
                        pendingAvatar: y,
                        pendingColors: M,
                        onThemeColorsChange: (e) => {
                            (0, I.ce)(e, null == G ? void 0 : G.themeColors);
                        },
                        guildId: null == F ? void 0 : F.id,
                        showResetThemeButton: z
                    }),
                    (0, i.jsx)(
                        d.Z,
                        {
                            placeholder: A.intl.string(A.t['/7NKgo']),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    A.intl.string(A.t.jGoPJS),
                                    (0, i.jsx)(l.Tooltip, {
                                        text: A.intl.string(A.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(l.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: j.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            onBioChange: (e) => (0, I.qN)(e, K),
                            errors: null !== (O = null == k ? void 0 : k.bio) && void 0 !== O ? O : null == U ? void 0 : U.bio,
                            pendingBio: Z,
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
