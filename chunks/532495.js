n.d(t, { Z: () => D });
var i = n(255367);
n(73800);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    a = n(809206),
    o = n(634894),
    c = n(295474),
    d = n(74469),
    u = n(396402),
    m = n(150039),
    g = n(126631),
    p = n(433411),
    h = n(532432),
    f = n(349177),
    b = n(872736),
    _ = n(818420),
    x = n(134795),
    E = n(610966),
    j = n(513901),
    C = n(451392),
    O = n(906364),
    S = n(643879),
    v = n(350327),
    T = n(621853),
    N = n(687158),
    I = n(25990),
    y = n(594174),
    A = n(74538),
    P = n(388032),
    R = n(596677);
function D() {
    var e, t, n, r, D, Z, w, k;
    let L = (0, l.e7)([y.default], () => {
            let e = y.default.getCurrentUser();
            return s()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        B = (0, l.e7)([T.Z], () => T.Z.getUserProfile(L.id)),
        {
            pendingAvatar: M,
            pendingGlobalName: U,
            pendingBanner: V,
            pendingBio: G,
            pendingPronouns: F,
            pendingAccentColor: H,
            pendingThemeColors: z,
            pendingLegacyUsernameDisabled: Y,
            pendingPrimaryGuildId: W,
            errors: K
        } = (0, l.cj)([I.Z], () => {
            var e, t;
            let n = I.Z.getAllPending(),
                i = I.Z.getErrors();
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
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
        q = (0, S.SD)({
            userId: L.id,
            image: M
        }),
        X = (0, c.gS)(),
        J = A.ZP.canUsePremiumProfileCustomization(L),
        Q = (0, m.gd)(M, L.avatar),
        $ = (0, m.f$)(V, null == B ? void 0 : B.banner),
        ee = 'DefaultCustomizationSections';
    (0, o.j)({
        location: ee + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: ee + ' auto off',
            autoTrackExposure: !1
        });
    let et = (0, N.ZP)(L.id),
        en = null == et ? void 0 : et.getLegacyUsername(),
        ei = (null != (n = null == (e = K.global_name) ? void 0 : e.length) ? n : 0) > 0 ? K.global_name : null != (r = null == X ? void 0 : X.nick) ? r : [],
        er = (null != (D = null == (t = K.bio) ? void 0 : t.length) ? D : 0) > 0 ? K.bio : null != (Z = null == X ? void 0 : X.bio) ? Z : [],
        es = (0, u.w)();
    return (0, i.jsxs)('div', {
        className: R.sectionsContainer,
        children: [
            (0, i.jsx)(f.Z, {
                placeholder: L.username,
                errors: ei,
                currentGlobalName: L.globalName,
                pendingGlobalName: U,
                onGlobalNameChange: a.W0
            }),
            (0, i.jsx)(
                O.Z,
                {
                    sectionTitle: P.intl.string(P.t['+T3RIy']),
                    errors: K.pronouns,
                    onPronounsChange: v.ID,
                    pendingPronouns: F,
                    currentPronouns: null != (w = null == B ? void 0 : B.pronouns) ? w : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                h.Z,
                {
                    onAvatarChange: a.I5,
                    showRemoveAvatarButton: Q,
                    errors: K.avatar,
                    sectionTitle: P.intl.string(P.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                p.Z,
                {
                    user: L,
                    sectionTitle: P.intl.string(P.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, i.jsx)(_.Z, { user: L }),
            (0, i.jsx)(
                j.Z,
                {
                    user: L,
                    sectionTitle: P.intl.string(P.t.wR5wOj)
                },
                'effect'
            ),
            J
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              x.Z,
                              {
                                  showRemoveBannerButton: $,
                                  errors: K.banner,
                                  onBannerChange: v.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(C.Z, {
                              user: L,
                              pendingAvatarSrc: q,
                              pendingColors: z,
                              onThemeColorsChange: v.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      E.Z,
                      {
                          user: L,
                          savedUserColor: null == B ? void 0 : B.accentColor,
                          pendingColor: H,
                          setPendingAccentColor: v.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                g.Z,
                {
                    sectionTitle: P.intl.string(P.t.NepzEx),
                    errors: er,
                    onBioChange: (e) => (0, m.xQ)(e, null == B ? void 0 : B.bio),
                    pendingBio: G,
                    currentBio: null != (k = null == B ? void 0 : B.bio) ? k : ''
                },
                'bio'
            ),
            es.length > 0 &&
                (0, i.jsx)(d.Z, {
                    availablePrimaryGuilds: es,
                    pendingPrimaryGuildId: W,
                    onChange: (e) => (0, a.s4)(e)
                }),
            null != en &&
                (0, i.jsx)(
                    b.Z,
                    {
                        legacyUsername: en,
                        pendingLegacyUsernameDisabled: Y
                    },
                    'legacy_username'
                )
        ]
    });
}
