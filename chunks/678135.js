n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
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
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: a, pendingBanner: l, pendingAccentColor: m, pendingBio: g, pendingPronouns: T, pendingAvatar: N, pendingAvatarDecoration: R, pendingNickname: P, pendingGlobalName: w, pendingThemeColors: D, pendingProfileEffectId: L, pendingLegacyUsernameDisabled: x, avatarClassName: M, containerClassName: k, isTryItOutFlow: j = !1, disabledInputs: U = !1, hideCustomStatus: G = !1, hideBioSection: B = !1, hideMessageInput: V = !0, hideExampleButton: F = !1, pendingBadges: Z, shouldOpenBadgeTooltip: H, showNameplatePreview: Y = !1 } = e,
        W = (0, d.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: K, avatarDecorationSrc: z } = (0, _.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: R,
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
                className: o()(A.container, k),
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
                                onUpsellClick: () => (null == a ? void 0 : a({ object: I.qAy.EDIT_PROFILE_BANNER }))
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
                                className: M,
                                disabledInputs: U,
                                isTryItOutFlow: j,
                                onUpsellClick: () => (null == a ? void 0 : a({ object: I.qAy.AVATAR }))
                            }),
                            !G &&
                                (0, r.jsx)(h.Z, {
                                    location: 'UserProfilePreview',
                                    user: t,
                                    themeType: S.lY.POPOUT,
                                    disableEdit: U
                                })
                        ]
                    }),
                    (0, r.jsx)(O.Z, {
                        user: t,
                        displayProfile: W,
                        guild: n,
                        pendingAvatar: N,
                        pendingNickname: P,
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
                        hideMessageInput: V,
                        hideExampleButton: F
                    }),
                    null != q && (0, r.jsx)(u.Z, { profileEffectId: q })
                ]
            }),
            J && Y && (0, r.jsx)(C, {})
        ]
    });
}
function C() {
    let e = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        t = (0, a.e7)([m.Z], () => m.Z.getPendingNameplate());
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
