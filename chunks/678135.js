n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
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
    v = n(724241),
    O = n(890876),
    I = n(981631),
    S = n(228168),
    T = n(388032),
    A = n(997926);
function N(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: o, pendingBanner: l, pendingAccentColor: m, pendingBio: g, pendingPronouns: T, pendingAvatar: N, pendingAvatarDecoration: R, pendingNickname: P, pendingGlobalName: w, pendingThemeColors: D, pendingProfileEffectId: L, avatarClassName: x, containerClassName: M, isTryItOutFlow: k = !1, disabledInputs: j = !1, hideCustomStatus: U = !1, hideBioSection: G = !1, hideMessageInput: B = !0, hideExampleButton: V = !1, pendingBadges: F, shouldOpenBadgeTooltip: Z, showNameplatePreview: H = !1 } = e,
        Y = (0, d.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: W, avatarDecorationSrc: K } = (0, _.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: R,
            avatarOverride: N,
            size: s.EFr.SIZE_80,
            showPending: !0
        }),
        z = (0, E.ZT)({
            pendingProfileEffectId: L,
            displayProfile: Y
        }),
        { theme: q, primaryColor: Q } = (0, f.Z)({
            user: t,
            displayProfile: Y,
            pendingThemeColors: D,
            isPreview: i
        }),
        X = (0, c.H)('UserProfilePreview');
    return (0, r.jsxs)('div', {
        className: A.column,
        children: [
            (0, r.jsxs)(p.Z, {
                user: t,
                displayProfile: Y,
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
                                displayProfile: Y,
                                guildId: null == n ? void 0 : n.id,
                                canUsePremiumCustomization: i,
                                pendingBanner: l,
                                pendingAccentColor: m,
                                isTryItOutFlow: k,
                                disabledInputs: j,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: I.qAy.EDIT_PROFILE_BANNER }))
                            }),
                            (0, r.jsx)(b.Z, {
                                user: t,
                                guild: n,
                                displayProfile: Y,
                                canUsePremiumCustomization: i,
                                previewAvatar: W,
                                previewAvatarDecoration: K,
                                previewTheme: q,
                                previewPrimaryColor: Q,
                                className: x,
                                disabledInputs: j,
                                isTryItOutFlow: k,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: I.qAy.AVATAR }))
                            }),
                            !U &&
                                (0, r.jsx)(h.Z, {
                                    location: 'UserProfilePreview',
                                    user: t,
                                    themeType: S.lY.POPOUT,
                                    disableEdit: j
                                })
                        ]
                    }),
                    (0, r.jsx)(v.Z, {
                        user: t,
                        displayProfile: Y,
                        guild: n,
                        pendingAvatar: N,
                        pendingNickname: P,
                        pendingGlobalName: w,
                        pendingBio: g,
                        pendingPronouns: T,
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
                    null != z && (0, r.jsx)(u.Z, { profileEffectId: z })
                ]
            }),
            X && H && (0, r.jsx)(C, {})
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
