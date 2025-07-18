n.d(t, { Z: () => A });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(22267),
    c = n(680295),
    u = n(687158),
    d = n(576635),
    f = n(518950),
    _ = n(502762),
    p = n(4517),
    h = n(25990),
    m = n(594174),
    g = n(150039),
    E = n(397689),
    b = n(656229),
    y = n(724241),
    O = n(890876),
    v = n(981631),
    I = n(228168),
    T = n(388032),
    S = n(997926);
function A(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: o, pendingBanner: l, pendingAccentColor: h, pendingBio: m, pendingPronouns: A, pendingAvatar: C, pendingAvatarDecoration: R, pendingNickname: P, pendingGlobalName: w, pendingThemeColors: D, pendingProfileEffectId: L, pendingLegacyUsernameDisabled: x, avatarClassName: M, containerClassName: k, isTryItOutFlow: j = !1, disabledInputs: U = !1, hideCustomStatus: G = !1, hideBioSection: B = !1, hideMessageInput: V = !0, hideExampleButton: F = !1, showViewFullProfileButton: Z = !1, pendingBadges: H, shouldOpenBadgeTooltip: Y, showNameplatePreview: W = !1, interactive: K = !0 } = e,
        z = (0, u.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: q, avatarDecorationSrc: X } = (0, f.Z)({
            userId: null == t ? void 0 : t.id,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: R,
            avatarOverride: C,
            size: s.EFr.SIZE_80,
            showPending: !0
        }),
        Q = (0, g.ZT)({
            pendingProfileEffectId: L,
            displayProfile: z
        }),
        { theme: J, primaryColor: $ } = (0, d.Z)({
            user: t,
            displayProfile: z,
            pendingThemeColors: D,
            isPreview: i
        }),
        ee = (0, r.jsxs)('div', {
            className: S.column,
            children: [
                (0, r.jsxs)(_.Z, {
                    user: t,
                    displayProfile: z,
                    themeType: I.lY.POPOUT,
                    pendingThemeColors: D,
                    className: a()(S.container, k),
                    forceShowPremium: i,
                    children: [
                        (0, r.jsxs)('header', {
                            className: S.header,
                            children: [
                                (0, r.jsx)(b.Z, {
                                    user: t,
                                    displayProfile: z,
                                    guildId: null == n ? void 0 : n.id,
                                    canUsePremiumCustomization: i,
                                    pendingBanner: l,
                                    pendingAccentColor: h,
                                    isTryItOutFlow: j,
                                    disabledInputs: U,
                                    onUpsellClick: () => (null == o ? void 0 : o({ object: v.qAy.EDIT_PROFILE_BANNER }))
                                }),
                                (0, r.jsx)(E.Z, {
                                    user: t,
                                    guild: n,
                                    displayProfile: z,
                                    canUsePremiumCustomization: i,
                                    previewAvatar: q,
                                    previewAvatarDecoration: X,
                                    previewTheme: J,
                                    previewPrimaryColor: $,
                                    className: M,
                                    disabledInputs: U,
                                    isTryItOutFlow: j,
                                    onUpsellClick: () => (null == o ? void 0 : o({ object: v.qAy.AVATAR }))
                                }),
                                !G &&
                                    (0, r.jsx)(p.Z, {
                                        location: 'UserProfilePreview',
                                        user: t,
                                        themeType: I.lY.POPOUT,
                                        disableToolbar: U
                                    })
                            ]
                        }),
                        (0, r.jsx)(y.Z, {
                            user: t,
                            displayProfile: z,
                            guild: n,
                            pendingAvatar: C,
                            pendingNickname: P,
                            pendingGlobalName: w,
                            pendingBio: m,
                            pendingPronouns: A,
                            pendingLegacyUsernameDisabled: x,
                            isTryItOutFlow: j,
                            hideBioSection: B,
                            pendingBadges: H,
                            shouldOpenBadgeTooltip: Y
                        }),
                        (0, r.jsx)(O.Z, {
                            user: t,
                            hideMessageInput: V,
                            hideExampleButton: F,
                            showViewFullProfileButton: Z
                        }),
                        null != Q && (0, r.jsx)(c.Z, { profileEffectId: Q })
                    ]
                }),
                W && (0, r.jsx)(N, { pendingGlobalName: w })
            ]
        });
    return K
        ? ee
        : (0, r.jsx)('div', {
              role: 'img',
              'aria-label': T.intl.string(T.t.ayozFh),
              children: (0, r.jsx)(s.Rny, { children: ee })
          });
}
function N(e) {
    let { pendingGlobalName: t } = e,
        n = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        i = (0, o.e7)([h.Z], () => h.Z.getPendingNameplate());
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: S.nameplatePreviewSection,
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: 'eyebrow',
                      children: T.intl.string(T.t['7KRt6e']).toLocaleUpperCase()
                  }),
                  (0, r.jsx)(l.Z, {
                      user: n,
                      nameplate: i,
                      nameplateData: void 0 === i ? n.nameplate : void 0,
                      pendingGlobalName: t,
                      isHighlighted: !0,
                      className: S.nameplate
                  })
              ]
          });
}
