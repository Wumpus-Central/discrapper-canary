n.d(t, { Z: () => N });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(22267),
    c = n(442933),
    u = n(680295),
    d = n(687158),
    f = n(576635),
    _ = n(518950),
    p = n(502762),
    h = n(4517),
    m = n(25990),
    g = n(594174),
    E = n(150039),
    b = n(397689),
    y = n(656229),
    O = n(724241),
    v = n(890876),
    I = n(981631),
    S = n(228168),
    T = n(388032),
    A = n(997926);
function N(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: o, pendingBanner: l, pendingAccentColor: m, pendingBio: g, pendingPronouns: T, pendingAvatar: N, pendingAvatarDecoration: P, pendingNickname: R, pendingGlobalName: w, pendingThemeColors: D, pendingProfileEffectId: L, pendingLegacyUsernameDisabled: x, avatarClassName: k, containerClassName: M, isTryItOutFlow: j = !1, disabledInputs: U = !1, hideCustomStatus: G = !1, hideBioSection: B = !1, hideMessageInput: F = !0, hideExampleButton: V = !1, pendingBadges: Z, shouldOpenBadgeTooltip: H, showNameplatePreview: Y = !1 } = e,
        W = (0, d.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: K, avatarDecorationSrc: z } = (0, _.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: P,
            avatarOverride: N,
            size: s.EFr.SIZE_80,
            showPending: !0
        }),
        q = (0, E.ZT)({
            pendingProfileEffectId: L,
            displayProfile: W
        }),
        { theme: Q, primaryColor: X } = (0, f.Z)({
            user: t,
            displayProfile: W,
            pendingThemeColors: D,
            isPreview: i
        }),
        J = (0, c.H)('UserProfilePreview');
    return (0, r.jsxs)('div', {
        className: A.column,
        children: [
            (0, r.jsxs)(p.Z, {
                user: t,
                displayProfile: W,
                themeType: S.lY.POPOUT,
                pendingThemeColors: D,
                className: a()(A.container, M),
                forceShowPremium: i,
                children: [
                    (0, r.jsxs)('header', {
                        className: A.header,
                        children: [
                            (0, r.jsx)(y.Z, {
                                user: t,
                                displayProfile: W,
                                guildId: null == n ? void 0 : n.id,
                                canUsePremiumCustomization: i,
                                pendingBanner: l,
                                pendingAccentColor: m,
                                isTryItOutFlow: j,
                                disabledInputs: U,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: I.qAy.EDIT_PROFILE_BANNER }))
                            }),
                            (0, r.jsx)(b.Z, {
                                user: t,
                                guild: n,
                                displayProfile: W,
                                canUsePremiumCustomization: i,
                                previewAvatar: K,
                                previewAvatarDecoration: z,
                                previewTheme: Q,
                                previewPrimaryColor: X,
                                className: k,
                                disabledInputs: U,
                                isTryItOutFlow: j,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: I.qAy.AVATAR }))
                            }),
                            !G &&
                                (0, r.jsx)(h.Z, {
                                    location: 'UserProfilePreview',
                                    user: t,
                                    themeType: S.lY.POPOUT,
                                    disableToolbar: U
                                })
                        ]
                    }),
                    (0, r.jsx)(O.Z, {
                        user: t,
                        displayProfile: W,
                        guild: n,
                        pendingAvatar: N,
                        pendingNickname: R,
                        pendingGlobalName: w,
                        pendingBio: g,
                        pendingPronouns: T,
                        pendingLegacyUsernameDisabled: x,
                        isTryItOutFlow: j,
                        hideBioSection: B,
                        pendingBadges: Z,
                        shouldOpenBadgeTooltip: H
                    }),
                    (0, r.jsx)(v.Z, {
                        user: t,
                        hideMessageInput: F,
                        hideExampleButton: V
                    }),
                    null != q && (0, r.jsx)(u.Z, { profileEffectId: q })
                ]
            }),
            J && Y && (0, r.jsx)(C, {})
        ]
    });
}
function C() {
    let e = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        t = (0, o.e7)([m.Z], () => m.Z.getPendingNameplate());
    return null == e
        ? null
        : (0, r.jsxs)('div', {
              className: A.nameplatePreviewSection,
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: 'eyebrow',
                      children: T.intl.string(T.t['7KRt6e']).toLocaleUpperCase()
                  }),
                  (0, r.jsx)(l.Z, {
                      user: e,
                      nameplate: t,
                      nameplateData: void 0 === t ? e.nameplate : void 0,
                      isHighlighted: !0,
                      className: A.nameplate
                  })
              ]
          });
}
