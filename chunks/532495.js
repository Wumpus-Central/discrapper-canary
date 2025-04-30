n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    a = n(809206),
    o = n(634894),
    c = n(295474),
    d = n(74469),
    u = n(396402),
    m = n(442933),
    p = n(150039),
    g = n(126631),
    h = n(433411),
    f = n(532432),
    b = n(349177),
    _ = n(872736),
    x = n(818420),
    E = n(134795),
    j = n(610966),
    C = n(513901),
    O = n(451392),
    S = n(906364),
    v = n(643879),
    T = n(350327),
    N = n(621853),
    I = n(687158),
    y = n(25990),
    A = n(594174),
    P = n(74538),
    R = n(388032),
    D = n(596677);
function Z() {
    var e, t, n, r, Z, w, k, L;
    let M = (0, l.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return s()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        B = (0, l.e7)([N.Z], () => N.Z.getUserProfile(M.id)),
        {
            pendingAvatar: U,
            pendingGlobalName: V,
            pendingBanner: G,
            pendingBio: F,
            pendingPronouns: H,
            pendingAccentColor: z,
            pendingThemeColors: W,
            pendingPrimaryGuildId: Y,
            errors: K
        } = (0, l.cj)([y.Z], () => {
            var e, t;
            let n = y.Z.getAllPending(),
                i = y.Z.getErrors();
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
        q = (0, v.SD)({
            userId: M.id,
            image: U
        }),
        X = (0, c.gS)(),
        Q = P.ZP.canUsePremiumProfileCustomization(M),
        J = (0, p.gd)(U, M.avatar),
        $ = (0, p.f$)(G, null == B ? void 0 : B.banner),
        ee = 'DefaultCustomizationSections';
    (0, o.j)({
        location: ee + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: ee + ' auto off',
            autoTrackExposure: !1
        });
    let et = (0, I.ZP)(M.id),
        en = null == et ? void 0 : et.getLegacyUsername(),
        ei = (null != (n = null == (e = K.global_name) ? void 0 : e.length) ? n : 0) > 0 ? K.global_name : null != (r = null == X ? void 0 : X.nick) ? r : [],
        er = (null != (Z = null == (t = K.bio) ? void 0 : t.length) ? Z : 0) > 0 ? K.bio : null != (w = null == X ? void 0 : X.bio) ? w : [],
        es = (0, u.w)(),
        el = (0, m.H)('DefaultCustomizationSections');
    return (0, i.jsxs)('div', {
        className: D.sectionsContainer,
        children: [
            (0, i.jsx)(b.Z, {
                placeholder: M.username,
                errors: ei,
                currentGlobalName: M.globalName,
                pendingGlobalName: V,
                onGlobalNameChange: a.W0
            }),
            (0, i.jsx)(
                S.Z,
                {
                    sectionTitle: R.intl.string(R.t['+T3RIy']),
                    errors: K.pronouns,
                    onPronounsChange: T.ID,
                    pendingPronouns: H,
                    currentPronouns: null != (k = null == B ? void 0 : B.pronouns) ? k : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                f.Z,
                {
                    onAvatarChange: a.I5,
                    showRemoveAvatarButton: J,
                    errors: K.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                h.Z,
                {
                    user: M,
                    sectionTitle: R.intl.string(R.t['7v0T9P'])
                },
                'decoration'
            ),
            el && (0, i.jsx)(x.Z, { user: M }),
            (0, i.jsx)(
                C.Z,
                {
                    user: M,
                    sectionTitle: R.intl.string(R.t.wR5wOj)
                },
                'effect'
            ),
            Q
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: $,
                                  errors: K.banner,
                                  onBannerChange: T.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(O.Z, {
                              user: M,
                              pendingAvatarSrc: q,
                              pendingColors: W,
                              onThemeColorsChange: T.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      j.Z,
                      {
                          user: M,
                          savedUserColor: null == B ? void 0 : B.accentColor,
                          pendingColor: z,
                          setPendingAccentColor: T.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                g.Z,
                {
                    sectionTitle: R.intl.string(R.t.NepzEx),
                    errors: er,
                    onBioChange: (e) => (0, p.xQ)(e, null == B ? void 0 : B.bio),
                    pendingBio: F,
                    currentBio: null != (L = null == B ? void 0 : B.bio) ? L : ''
                },
                'bio'
            ),
            es.length > 0 &&
                (0, i.jsx)(d.Z, {
                    availablePrimaryGuilds: es,
                    pendingPrimaryGuildId: Y,
                    onChange: (e) => (0, a.s4)(e)
                }),
            null != en && (0, i.jsx)(_.Z, { legacyUsername: en }, 'legacy_username')
        ]
    });
}
