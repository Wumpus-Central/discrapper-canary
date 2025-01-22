n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    a = n(442837),
    l = n(809206),
    o = n(634894),
    c = n(891728),
    d = n(328783),
    u = n(295474),
    m = n(150039),
    g = n(126631),
    h = n(433411),
    p = n(532432),
    x = n(349177),
    f = n(872736),
    _ = n(134795),
    E = n(610966),
    C = n(513901),
    T = n(451392),
    S = n(906364),
    b = n(350327),
    I = n(621853),
    N = n(687158),
    v = n(25990),
    A = n(594174),
    j = n(74538),
    O = n(388032),
    R = n(91768);
function P() {
    var e, t, n, r, P, D, y, B;
    let Z = (0, a.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return s()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        L = (0, a.e7)([I.Z], () => I.Z.getUserProfile(Z.id)),
        {
            pendingAvatar: M,
            pendingGlobalName: k,
            pendingBanner: w,
            pendingBio: F,
            pendingPronouns: U,
            pendingAccentColor: V,
            pendingThemeColors: G,
            errors: H
        } = (0, a.cj)([v.Z], () => {
            let e = v.Z.getAllPending(),
                t = v.Z.getErrors();
            return {
                ...e,
                errors: t
            };
        }),
        Y = (0, u.gS)(),
        W = j.ZP.canUsePremiumProfileCustomization(Z),
        z = (0, m.gd)(M, Z.avatar),
        K = (0, m.f$)(w, null == L ? void 0 : L.banner),
        q = 'DefaultCustomizationSections';
    (0, o.j)({
        location: q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: q + ' auto off',
            autoTrackExposure: !1
        });
    let Q = (0, N.ZP)(Z.id),
        X = null == Q ? void 0 : Q.getLegacyUsername(),
        J = (null !== (n = null === (e = H.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0 ? H.global_name : null !== (r = null == Y ? void 0 : Y.nick) && void 0 !== r ? r : [],
        $ = (null !== (P = null === (t = H.bio) || void 0 === t ? void 0 : t.length) && void 0 !== P ? P : 0) > 0 ? H.bio : null !== (D = null == Y ? void 0 : Y.bio) && void 0 !== D ? D : [],
        ee = (0, c.V)();
    return (0, i.jsxs)('div', {
        className: R.sectionsContainer,
        children: [
            (0, i.jsx)(x.Z, {
                placeholder: Z.username,
                errors: J,
                currentGlobalName: Z.globalName,
                pendingGlobalName: k,
                onGlobalNameChange: l.UZ
            }),
            (0, i.jsx)(
                S.Z,
                {
                    sectionTitle: O.intl.string(O.t['+T3RIy']),
                    errors: H.pronouns,
                    onPronounsChange: b.ID,
                    pendingPronouns: U,
                    currentPronouns: null !== (y = null == L ? void 0 : L.pronouns) && void 0 !== y ? y : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                p.Z,
                {
                    onAvatarChange: l.I5,
                    showRemoveAvatarButton: z,
                    errors: H.avatar,
                    sectionTitle: O.intl.string(O.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                h.Z,
                {
                    user: Z,
                    sectionTitle: O.intl.string(O.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, i.jsx)(
                C.Z,
                {
                    user: Z,
                    sectionTitle: O.intl.string(O.t.wR5wOj)
                },
                'effect'
            ),
            W
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              _.Z,
                              {
                                  showRemoveBannerButton: K,
                                  errors: H.banner,
                                  onBannerChange: b.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(T.Z, {
                              user: Z,
                              pendingAvatar: M,
                              pendingColors: G,
                              onThemeColorsChange: b.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      E.Z,
                      {
                          user: Z,
                          savedUserColor: null == L ? void 0 : L.accentColor,
                          pendingColor: V,
                          setPendingAccentColor: b.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                g.Z,
                {
                    sectionTitle: O.intl.string(O.t.NepzEx),
                    errors: $,
                    onBioChange: (e) => (0, m.xQ)(e, null == L ? void 0 : L.bio),
                    pendingBio: F,
                    currentBio: null !== (B = null == L ? void 0 : L.bio) && void 0 !== B ? B : ''
                },
                'bio'
            ),
            ee.length > 0 && (0, i.jsx)(d.Z, { availableClans: ee }),
            null != X && (0, i.jsx)(f.Z, { legacyUsername: X }, 'legacy_username')
        ]
    });
}
