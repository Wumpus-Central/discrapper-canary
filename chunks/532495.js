n.d(t, { Z: () => P });
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(442837),
    a = n(809206),
    o = n(634894),
    c = n(891728),
    d = n(328783),
    u = n(295474),
    m = n(150039),
    g = n(126631),
    h = n(433411),
    x = n(532432),
    _ = n(349177),
    p = n(872736),
    E = n(134795),
    C = n(610966),
    f = n(513901),
    T = n(451392),
    N = n(906364),
    S = n(350327),
    I = n(621853),
    b = n(687158),
    v = n(25990),
    j = n(594174),
    A = n(74538),
    O = n(388032),
    R = n(997628);
function P() {
    var e, t, n, s, P, D, y, Z;
    let k = (0, l.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return r()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        L = (0, l.e7)([I.Z], () => I.Z.getUserProfile(k.id)),
        {
            pendingAvatar: B,
            pendingGlobalName: M,
            pendingBanner: w,
            pendingBio: V,
            pendingPronouns: U,
            pendingAccentColor: G,
            pendingThemeColors: F,
            errors: H
        } = (0, l.cj)([v.Z], () => {
            let e = v.Z.getAllPending(),
                t = v.Z.getErrors();
            return {
                ...e,
                errors: t
            };
        }),
        z = (0, u.gS)(),
        Y = A.ZP.canUsePremiumProfileCustomization(k),
        W = (0, m.gd)(B, k.avatar),
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
    let X = (0, b.ZP)(k.id),
        J = null == X ? void 0 : X.getLegacyUsername(),
        Q = (null !== (n = null === (e = H.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0 ? H.global_name : null !== (s = null == z ? void 0 : z.nick) && void 0 !== s ? s : [],
        $ = (null !== (P = null === (t = H.bio) || void 0 === t ? void 0 : t.length) && void 0 !== P ? P : 0) > 0 ? H.bio : null !== (D = null == z ? void 0 : z.bio) && void 0 !== D ? D : [],
        ee = (0, c.V)();
    return (0, i.jsxs)('div', {
        className: R.sectionsContainer,
        children: [
            (0, i.jsx)(_.Z, {
                placeholder: k.username,
                errors: Q,
                currentGlobalName: k.globalName,
                pendingGlobalName: M,
                onGlobalNameChange: a.UZ
            }),
            (0, i.jsx)(
                N.Z,
                {
                    sectionTitle: O.intl.string(O.t['+T3RIy']),
                    errors: H.pronouns,
                    onPronounsChange: S.ID,
                    pendingPronouns: U,
                    currentPronouns: null !== (y = null == L ? void 0 : L.pronouns) && void 0 !== y ? y : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                x.Z,
                {
                    onAvatarChange: a.I5,
                    showRemoveAvatarButton: W,
                    errors: H.avatar,
                    sectionTitle: O.intl.string(O.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                h.Z,
                {
                    user: k,
                    sectionTitle: O.intl.string(O.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, i.jsx)(
                f.Z,
                {
                    user: k,
                    sectionTitle: O.intl.string(O.t.wR5wOj)
                },
                'effect'
            ),
            Y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: K,
                                  errors: H.banner,
                                  onBannerChange: S.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(T.Z, {
                              user: k,
                              pendingAvatar: B,
                              pendingColors: F,
                              onThemeColorsChange: S.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      C.Z,
                      {
                          user: k,
                          savedUserColor: null == L ? void 0 : L.accentColor,
                          pendingColor: G,
                          setPendingAccentColor: S.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                g.Z,
                {
                    sectionTitle: O.intl.string(O.t.NepzEx),
                    errors: $,
                    onBioChange: (e) => (0, m.xQ)(e, null == L ? void 0 : L.bio),
                    pendingBio: V,
                    currentBio: null !== (Z = null == L ? void 0 : L.bio) && void 0 !== Z ? Z : ''
                },
                'bio'
            ),
            ee.length > 0 && (0, i.jsx)(d.Z, { availableClans: ee }),
            null != J && (0, i.jsx)(p.Z, { legacyUsername: J }, 'legacy_username')
        ]
    });
}
