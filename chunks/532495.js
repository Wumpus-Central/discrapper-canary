n.d(t, { Z: () => R });
var i = n(255367);
n(73800);
var r = n(512722),
    s = n.n(r),
    a = n(442837),
    l = n(809206),
    o = n(295474),
    c = n(74469),
    d = n(396402),
    u = n(150039),
    m = n(126631),
    p = n(433411),
    g = n(532432),
    h = n(349177),
    f = n(872736),
    b = n(818420),
    x = n(134795),
    _ = n(610966),
    j = n(513901),
    O = n(451392),
    E = n(906364),
    C = n(643879),
    v = n(350327),
    S = n(621853),
    T = n(687158),
    N = n(25990),
    I = n(594174),
    y = n(74538),
    A = n(388032),
    P = n(596677);
function R() {
    var e, t, n, r, R, D, Z, w;
    let k = (0, a.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return (s()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e);
        }),
        L = (0, a.e7)([S.Z], () => S.Z.getUserProfile(k.id)),
        {
            pendingAvatar: B,
            pendingGlobalName: M,
            pendingBanner: U,
            pendingBio: V,
            pendingPronouns: G,
            pendingAccentColor: F,
            pendingThemeColors: H,
            pendingLegacyUsernameDisabled: z,
            pendingPrimaryGuildId: W,
            errors: Y
        } = (0, a.cj)([N.Z], () => {
            var e, t;
            let n = N.Z.getAllPending(),
                i = N.Z.getErrors();
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                ((i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i));
                            }));
                    }
                    return e;
                })({}, n)),
                (t = t = { errors: i }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e
            );
        }),
        K = (0, C.SD)({
            userId: k.id,
            image: B
        }),
        q = (0, o.gS)(),
        X = y.ZP.canUsePremiumProfileCustomization(k),
        J = (0, u.gd)(B, k.avatar),
        Q = (0, u.f$)(U, null == L ? void 0 : L.banner),
        $ = (0, T.ZP)(k.id),
        ee = null == $ ? void 0 : $.getLegacyUsername(),
        et = (null != (n = null == (e = Y.global_name) ? void 0 : e.length) ? n : 0) > 0 ? Y.global_name : null != (r = null == q ? void 0 : q.nick) ? r : [],
        en = (null != (R = null == (t = Y.bio) ? void 0 : t.length) ? R : 0) > 0 ? Y.bio : null != (D = null == q ? void 0 : q.bio) ? D : [],
        ei = (0, d.w)();
    return (0, i.jsxs)('div', {
        className: P.sectionsContainer,
        children: [
            (0, i.jsx)(h.Z, {
                placeholder: k.username,
                errors: et,
                currentGlobalName: k.globalName,
                pendingGlobalName: M,
                onGlobalNameChange: l.W0,
                user: k
            }),
            (0, i.jsx)(
                E.Z,
                {
                    sectionTitle: A.intl.string(A.t['+T3RIy']),
                    errors: Y.pronouns,
                    onPronounsChange: v.ID,
                    pendingPronouns: G,
                    currentPronouns: null != (Z = null == L ? void 0 : L.pronouns) ? Z : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                g.Z,
                {
                    onAvatarChange: l.I5,
                    showRemoveAvatarButton: J,
                    errors: Y.avatar,
                    sectionTitle: A.intl.string(A.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                p.Z,
                {
                    user: k,
                    sectionTitle: A.intl.string(A.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, i.jsx)(b.Z, { user: k }),
            (0, i.jsx)(
                j.Z,
                {
                    user: k,
                    sectionTitle: A.intl.string(A.t.wR5wOj)
                },
                'effect'
            ),
            X
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              x.Z,
                              {
                                  showRemoveBannerButton: Q,
                                  errors: Y.banner,
                                  onBannerChange: v.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(O.Z, {
                              user: k,
                              pendingAvatarSrc: K,
                              pendingColors: H,
                              onThemeColorsChange: v.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      _.Z,
                      {
                          user: k,
                          savedUserColor: null == L ? void 0 : L.accentColor,
                          pendingColor: F,
                          setPendingAccentColor: v.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                m.Z,
                {
                    sectionTitle: A.intl.string(A.t.NepzEx),
                    errors: en,
                    onBioChange: (e) => (0, u.xQ)(e, null == L ? void 0 : L.bio),
                    pendingBio: V,
                    currentBio: null != (w = null == L ? void 0 : L.bio) ? w : ''
                },
                'bio'
            ),
            ei.length > 0 &&
                (0, i.jsx)(c.Z, {
                    availablePrimaryGuilds: ei,
                    pendingPrimaryGuildId: W,
                    onChange: (e) => (0, l.s4)(e)
                }),
            null != ee &&
                (0, i.jsx)(
                    f.Z,
                    {
                        legacyUsername: ee,
                        pendingLegacyUsernameDisabled: z
                    },
                    'legacy_username'
                )
        ]
    });
}
