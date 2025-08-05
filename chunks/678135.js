n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(680295),
    l = n(687158),
    c = n(576635),
    u = n(518950),
    d = n(502762),
    f = n(4517),
    _ = n(150039),
    p = n(397689),
    h = n(656229),
    m = n(724241),
    g = n(890876),
    E = n(981631),
    b = n(228168),
    y = n(388032),
    O = n(997926);
function v(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: v, pendingBanner: I, pendingAccentColor: T, pendingBio: S, pendingPronouns: A, pendingAvatar: N, pendingAvatarDecoration: C, pendingNickname: w, pendingGlobalName: R, pendingThemeColors: P, pendingProfileEffectId: D, pendingLegacyUsernameDisabled: L, avatarClassName: x, containerClassName: k, isTryItOutFlow: j = !1, disabledInputs: M = !1, hideCustomStatus: U = !1, hideBioSection: G = !1, hideMessageInput: B = !0, hideExampleButton: Z = !1, showViewFullProfileButton: F = !1, pendingBadges: V, shouldOpenBadgeTooltip: H, interactive: Y = !0 } = e,
        W = (0, l.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: K, avatarDecorationSrc: z } = (0, u.Z)({
            userId: null == t ? void 0 : t.id,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: C,
            avatarOverride: N,
            size: o.EFr.SIZE_80,
            showPending: !0
        }),
        q = (0, _.ZT)({
            pendingProfileEffectId: D,
            displayProfile: W
        }),
        { theme: $, primaryColor: X } = (0, c.Z)({
            user: t,
            displayProfile: W,
            pendingThemeColors: P,
            isPreview: i
        }),
        Q = (0, r.jsxs)(d.Z, {
            user: t,
            displayProfile: W,
            themeType: b.lY.POPOUT,
            pendingThemeColors: P,
            className: a()(O.container, k),
            forceShowPremium: i,
            children: [
                (0, r.jsxs)('div', {
                    className: O.header,
                    children: [
                        (0, r.jsx)(h.Z, {
                            user: t,
                            displayProfile: W,
                            guildId: null == n ? void 0 : n.id,
                            canUsePremiumCustomization: i,
                            pendingBanner: I,
                            pendingAccentColor: T,
                            isTryItOutFlow: j,
                            disabledInputs: M,
                            onUpsellClick: () => (null == v ? void 0 : v({ object: E.qAy.EDIT_PROFILE_BANNER }))
                        }),
                        (0, r.jsx)(p.Z, {
                            user: t,
                            guild: n,
                            displayProfile: W,
                            canUsePremiumCustomization: i,
                            previewAvatar: K,
                            previewAvatarDecoration: z,
                            previewTheme: $,
                            previewPrimaryColor: X,
                            className: x,
                            disabledInputs: M,
                            isTryItOutFlow: j,
                            onUpsellClick: () => (null == v ? void 0 : v({ object: E.qAy.AVATAR }))
                        }),
                        !U &&
                            (0, r.jsx)(f.Z, {
                                location: 'UserProfilePreview',
                                user: t,
                                themeType: b.lY.POPOUT,
                                disableToolbar: M
                            })
                    ]
                }),
                (0, r.jsx)(m.Z, {
                    user: t,
                    displayProfile: W,
                    guild: n,
                    pendingAvatar: N,
                    pendingNickname: w,
                    pendingGlobalName: R,
                    pendingBio: S,
                    pendingPronouns: A,
                    pendingLegacyUsernameDisabled: L,
                    isTryItOutFlow: j,
                    hideBioSection: G,
                    pendingBadges: V,
                    shouldOpenBadgeTooltip: H
                }),
                (0, r.jsx)(g.Z, {
                    user: t,
                    hideMessageInput: B,
                    hideExampleButton: Z,
                    showViewFullProfileButton: F
                }),
                null != q && (0, r.jsx)(s.Z, { profileEffectId: q })
            ]
        });
    return Y
        ? Q
        : (0, r.jsx)('div', {
              role: 'img',
              'aria-label': y.intl.string(y.t.ayozFh),
              children: (0, r.jsx)(o.Rny, { children: Q })
          });
}
