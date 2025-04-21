n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(22267),
    u = n(442933),
    d = n(680295),
    f = n(687158),
    _ = n(576635),
    p = n(518950),
    h = n(502762),
    m = n(4517),
    g = n(25990),
    E = n(594174),
    b = n(150039),
    y = n(397689),
    v = n(656229),
    O = n(724241),
    I = n(890876),
    S = n(981631),
    T = n(228168),
    A = n(388032),
    N = n(997926);
function C(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: a, pendingBanner: s, pendingAccentColor: c, pendingBio: g, pendingPronouns: E, pendingAvatar: A, pendingAvatarDecoration: C, pendingNickname: P, pendingGlobalName: w, pendingThemeColors: D, pendingProfileEffectId: L, avatarClassName: x, containerClassName: M, isTryItOutFlow: k = !1, disabledInputs: j = !1, hideCustomStatus: U = !1, hideBioSection: G = !1, hideMessageInput: B = !0, hideExampleButton: F = !1, pendingBadges: V, shouldOpenBadgeTooltip: Z, showNameplatePreview: H = !1 } = e,
        Y = (0, f.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: W, avatarDecorationSrc: K } = (0, p.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: C,
            avatarOverride: A,
            size: l.EFr.SIZE_80,
            showPending: !0
        }),
        z = (0, b.ZT)({
            pendingProfileEffectId: L,
            displayProfile: Y
        }),
        { theme: q, primaryColor: Q } = (0, _.Z)({
            user: t,
            displayProfile: Y,
            pendingThemeColors: D,
            isPreview: i
        }),
        X = (0, u.H)('UserProfilePreview');
    return (0, r.jsxs)('div', {
        className: N.column,
        children: [
            (0, r.jsxs)(h.Z, {
                user: t,
                displayProfile: Y,
                profileType: T.y0.BITE_SIZE,
                pendingThemeColors: D,
                className: o()(N.container, M),
                forceShowPremium: i,
                children: [
                    (0, r.jsxs)('header', {
                        className: N.header,
                        children: [
                            (0, r.jsx)(v.Z, {
                                user: t,
                                displayProfile: Y,
                                guildId: null == n ? void 0 : n.id,
                                canUsePremiumCustomization: i,
                                pendingBanner: s,
                                pendingAccentColor: c,
                                isTryItOutFlow: k,
                                disabledInputs: j,
                                onUpsellClick: () => (null == a ? void 0 : a({ object: S.qAy.EDIT_PROFILE_BANNER }))
                            }),
                            (0, r.jsx)(y.Z, {
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
                                onUpsellClick: () => (null == a ? void 0 : a({ object: S.qAy.AVATAR }))
                            }),
                            !U &&
                                (0, r.jsx)(m.Z, {
                                    location: 'UserProfilePreview',
                                    user: t,
                                    profileType: T.y0.BITE_SIZE,
                                    disableEdit: j
                                })
                        ]
                    }),
                    (0, r.jsx)(O.Z, {
                        user: t,
                        displayProfile: Y,
                        guild: n,
                        pendingAvatar: A,
                        pendingNickname: P,
                        pendingGlobalName: w,
                        pendingBio: g,
                        pendingPronouns: E,
                        isTryItOutFlow: k,
                        hideBioSection: G,
                        pendingBadges: V,
                        shouldOpenBadgeTooltip: Z
                    }),
                    (0, r.jsx)(I.Z, {
                        user: t,
                        hideMessageInput: B,
                        hideExampleButton: F
                    }),
                    null != z && (0, r.jsx)(d.Z, { profileEffectId: z })
                ]
            }),
            X && H && (0, r.jsx)(R, {})
        ]
    });
}
function R() {
    var e;
    let t = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        n = (0, s.e7)([g.Z], () => g.Z.getPendingNameplate()),
        a = i.useMemo(() => {
            var e;
            return null == t || null == (e = t.collectibles) || e.nameplate, A.intl.string(A.t.ziaxGh);
        }, [null == t || null == (e = t.collectibles) ? void 0 : e.nameplate, n]);
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: N.nameplatePreviewSection,
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: 'eyebrow',
                      children: a.toLocaleUpperCase()
                  }),
                  (0, r.jsx)(c.Z, {
                      user: t,
                      nameplate: n,
                      nameplateData: void 0 === n ? t.nameplate : void 0,
                      isHighlighted: !0,
                      className: N.nameplate
                  })
              ]
          });
}
