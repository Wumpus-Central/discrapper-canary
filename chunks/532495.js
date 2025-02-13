n.d(t, { Z: () => D });
var i = n(200651);
n(192379);
var s = n(512722),
    l = n.n(s),
    r = n(442837),
    a = n(809206),
    o = n(634894),
    c = n(891728),
    d = n(328783),
    u = n(295474),
    h = n(150039),
    m = n(126631),
    g = n(433411),
    x = n(532432),
    _ = n(349177),
    p = n(872736),
    E = n(134795),
    C = n(610966),
    N = n(513901),
    I = n(451392),
    f = n(906364),
    T = n(350327),
    S = n(621853),
    j = n(687158),
    v = n(25990),
    b = n(594174),
    A = n(74538),
    O = n(388032),
    R = n(554991);
function D() {
    var e, t, n, s, D, P, y, Z;
    let L = (0, r.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return l()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        k = (0, r.e7)([S.Z], () => S.Z.getUserProfile(L.id)),
        {
            pendingAvatar: B,
            pendingGlobalName: M,
            pendingBanner: V,
            pendingBio: w,
            pendingPronouns: U,
            pendingAccentColor: G,
            pendingThemeColors: F,
            errors: z
        } = (0, r.cj)([v.Z], () => {
            let e = v.Z.getAllPending(),
                t = v.Z.getErrors();
            return {
                ...e,
                errors: t
            };
        }),
        Y = (0, u.gS)(),
        H = A.ZP.canUsePremiumProfileCustomization(L),
        W = (0, h.gd)(B, L.avatar),
        K = (0, h.f$)(V, null == k ? void 0 : k.banner),
        X = 'DefaultCustomizationSections';
    (0, o.j)({
        location: X + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: X + ' auto off',
            autoTrackExposure: !1
        });
    let q = (0, j.ZP)(L.id),
        J = null == q ? void 0 : q.getLegacyUsername(),
        Q = (null !== (n = null === (e = z.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0 ? z.global_name : null !== (s = null == Y ? void 0 : Y.nick) && void 0 !== s ? s : [],
        $ = (null !== (D = null === (t = z.bio) || void 0 === t ? void 0 : t.length) && void 0 !== D ? D : 0) > 0 ? z.bio : null !== (P = null == Y ? void 0 : Y.bio) && void 0 !== P ? P : [],
        ee = (0, c.V)();
    return (0, i.jsxs)('div', {
        className: R.sectionsContainer,
        children: [
            (0, i.jsx)(_.Z, {
                placeholder: L.username,
                errors: Q,
                currentGlobalName: L.globalName,
                pendingGlobalName: M,
                onGlobalNameChange: a.UZ
            }),
            (0, i.jsx)(
                f.Z,
                {
                    sectionTitle: O.intl.string(O.t['+T3RIy']),
                    errors: z.pronouns,
                    onPronounsChange: T.ID,
                    pendingPronouns: U,
                    currentPronouns: null !== (y = null == k ? void 0 : k.pronouns) && void 0 !== y ? y : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                x.Z,
                {
                    onAvatarChange: a.I5,
                    showRemoveAvatarButton: W,
                    errors: z.avatar,
                    sectionTitle: O.intl.string(O.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                g.Z,
                {
                    user: L,
                    sectionTitle: O.intl.string(O.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, i.jsx)(
                N.Z,
                {
                    user: L,
                    sectionTitle: O.intl.string(O.t.wR5wOj)
                },
                'effect'
            ),
            H
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: K,
                                  errors: z.banner,
                                  onBannerChange: T.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(I.Z, {
                              user: L,
                              pendingAvatar: B,
                              pendingColors: F,
                              onThemeColorsChange: T.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      C.Z,
                      {
                          user: L,
                          savedUserColor: null == k ? void 0 : k.accentColor,
                          pendingColor: G,
                          setPendingAccentColor: T.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                m.Z,
                {
                    sectionTitle: O.intl.string(O.t.NepzEx),
                    errors: $,
                    onBioChange: (e) => (0, h.xQ)(e, null == k ? void 0 : k.bio),
                    pendingBio: w,
                    currentBio: null !== (Z = null == k ? void 0 : k.bio) && void 0 !== Z ? Z : ''
                },
                'bio'
            ),
            ee.length > 0 && (0, i.jsx)(d.Z, { availableClans: ee }),
            null != J && (0, i.jsx)(p.Z, { legacyUsername: J }, 'legacy_username')
        ]
    });
}
