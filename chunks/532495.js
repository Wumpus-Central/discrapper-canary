n.d(t, { Z: () => Z });
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    a = n(809206),
    o = n(634894),
    c = n(295474),
    d = n(993347),
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
    C = n(610966),
    j = n(513901),
    O = n(451392),
    S = n(906364),
    v = n(643879),
    T = n(350327),
    I = n(621853),
    N = n(687158),
    y = n(25990),
    A = n(594174),
    P = n(74538),
    R = n(388032),
    D = n(596677);
function Z() {
    var e, t, n, r, Z, w, k, L;
    let B = (0, l.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return s()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        M = (0, l.e7)([I.Z], () => I.Z.getUserProfile(B.id)),
        {
            pendingAvatar: U,
            pendingGlobalName: V,
            pendingBanner: G,
            pendingBio: F,
            pendingPronouns: H,
            pendingAccentColor: z,
            pendingThemeColors: W,
            errors: Y
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
        K = (0, v.SD)({
            userId: B.id,
            image: U
        }),
        q = (0, c.gS)(),
        X = P.ZP.canUsePremiumProfileCustomization(B),
        Q = (0, p.gd)(U, B.avatar),
        J = (0, p.f$)(G, null == M ? void 0 : M.banner),
        $ = 'DefaultCustomizationSections';
    (0, o.j)({
        location: $ + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: $ + ' auto off',
            autoTrackExposure: !1
        });
    let ee = (0, N.ZP)(B.id),
        et = null == ee ? void 0 : ee.getLegacyUsername(),
        en = (null != (n = null == (e = Y.global_name) ? void 0 : e.length) ? n : 0) > 0 ? Y.global_name : null != (r = null == q ? void 0 : q.nick) ? r : [],
        ei = (null != (Z = null == (t = Y.bio) ? void 0 : t.length) ? Z : 0) > 0 ? Y.bio : null != (w = null == q ? void 0 : q.bio) ? w : [],
        er = (0, u.w)(),
        es = (0, m.H)('DefaultCustomizationSections');
    return (0, i.jsxs)('div', {
        className: D.sectionsContainer,
        children: [
            (0, i.jsx)(b.Z, {
                placeholder: B.username,
                errors: en,
                currentGlobalName: B.globalName,
                pendingGlobalName: V,
                onGlobalNameChange: a.W0
            }),
            (0, i.jsx)(
                S.Z,
                {
                    sectionTitle: R.intl.string(R.t['+T3RIy']),
                    errors: Y.pronouns,
                    onPronounsChange: T.ID,
                    pendingPronouns: H,
                    currentPronouns: null != (k = null == M ? void 0 : M.pronouns) ? k : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                f.Z,
                {
                    onAvatarChange: a.I5,
                    showRemoveAvatarButton: Q,
                    errors: Y.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                h.Z,
                {
                    user: B,
                    sectionTitle: R.intl.string(R.t['7v0T9P'])
                },
                'decoration'
            ),
            es && (0, i.jsx)(x.Z, { user: B }),
            (0, i.jsx)(
                j.Z,
                {
                    user: B,
                    sectionTitle: R.intl.string(R.t.wR5wOj)
                },
                'effect'
            ),
            X
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: J,
                                  errors: Y.banner,
                                  onBannerChange: T.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(O.Z, {
                              user: B,
                              pendingAvatarSrc: K,
                              pendingColors: W,
                              onThemeColorsChange: T.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      C.Z,
                      {
                          user: B,
                          savedUserColor: null == M ? void 0 : M.accentColor,
                          pendingColor: z,
                          setPendingAccentColor: T.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                g.Z,
                {
                    sectionTitle: R.intl.string(R.t.NepzEx),
                    errors: ei,
                    onBioChange: (e) => (0, p.xQ)(e, null == M ? void 0 : M.bio),
                    pendingBio: F,
                    currentBio: null != (L = null == M ? void 0 : M.bio) ? L : ''
                },
                'bio'
            ),
            er.length > 0 && (0, i.jsx)(d.Z, { availableClans: er }),
            null != et && (0, i.jsx)(_.Z, { legacyUsername: et }, 'legacy_username')
        ]
    });
}
