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
    _ = n(518950),
    f = n(502762),
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
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: o, pendingBanner: l, pendingAccentColor: h, pendingBio: m, pendingPronouns: T, pendingAvatar: A, pendingAvatarDecoration: C, pendingNickname: R, pendingGlobalName: P, pendingThemeColors: w, pendingProfileEffectId: D, pendingLegacyUsernameDisabled: L, avatarClassName: x, containerClassName: M, isTryItOutFlow: k = !1, disabledInputs: j = !1, hideCustomStatus: U = !1, hideBioSection: G = !1, hideMessageInput: B = !0, hideExampleButton: V = !1, pendingBadges: F, shouldOpenBadgeTooltip: Z, showNameplatePreview: H = !1 } = e,
        Y = (0, u.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: W, avatarDecorationSrc: K } = (0, _.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: C,
            avatarOverride: A,
            size: s.EFr.SIZE_80,
            showPending: !0
        }),
        z = (0, g.ZT)({
            pendingProfileEffectId: D,
            displayProfile: Y
        }),
        { theme: q, primaryColor: X } = (0, d.Z)({
            user: t,
            displayProfile: Y,
            pendingThemeColors: w,
            isPreview: i
        });
    return (0, r.jsxs)('div', {
        className: S.column,
        children: [
            (0, r.jsxs)(f.Z, {
                user: t,
                displayProfile: Y,
                themeType: I.lY.POPOUT,
                pendingThemeColors: w,
                className: a()(S.container, M),
                forceShowPremium: i,
                children: [
                    (0, r.jsxs)('header', {
                        className: S.header,
                        children: [
                            (0, r.jsx)(b.Z, {
                                user: t,
                                displayProfile: Y,
                                guildId: null == n ? void 0 : n.id,
                                canUsePremiumCustomization: i,
                                pendingBanner: l,
                                pendingAccentColor: h,
                                isTryItOutFlow: k,
                                disabledInputs: j,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: v.qAy.EDIT_PROFILE_BANNER }))
                            }),
                            (0, r.jsx)(E.Z, {
                                user: t,
                                guild: n,
                                displayProfile: Y,
                                canUsePremiumCustomization: i,
                                previewAvatar: W,
                                previewAvatarDecoration: K,
                                previewTheme: q,
                                previewPrimaryColor: X,
                                className: x,
                                disabledInputs: j,
                                isTryItOutFlow: k,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: v.qAy.AVATAR }))
                            }),
                            !U &&
                                (0, r.jsx)(p.Z, {
                                    location: 'UserProfilePreview',
                                    user: t,
                                    themeType: I.lY.POPOUT,
                                    disableToolbar: j
                                })
                        ]
                    }),
                    (0, r.jsx)(y.Z, {
                        user: t,
                        displayProfile: Y,
                        guild: n,
                        pendingAvatar: A,
                        pendingNickname: R,
                        pendingGlobalName: P,
                        pendingBio: m,
                        pendingPronouns: T,
                        pendingLegacyUsernameDisabled: L,
                        isTryItOutFlow: k,
                        hideBioSection: G,
                        pendingBadges: F,
                        shouldOpenBadgeTooltip: Z
                    }),
                    (0, r.jsx)(O.Z, {
                        user: t,
                        hideMessageInput: B,
                        hideExampleButton: V
                    }),
                    null != z && (0, r.jsx)(c.Z, { profileEffectId: z })
                ]
            }),
            H && (0, r.jsx)(N, { pendingGlobalName: P })
        ]
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
