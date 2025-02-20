n.d(t, { Z: () => P });
var r = n(200651);
n(192379);
var i = n(512722),
    s = n.n(i),
    a = n(442837),
    l = n(809206),
    o = n(634894),
    c = n(891728),
    d = n(328783),
    u = n(295474),
    m = n(150039),
    g = n(126631),
    p = n(433411),
    h = n(532432),
    f = n(349177),
    b = n(872736),
    N = n(134795),
    x = n(610966),
    _ = n(513901),
    E = n(451392),
    j = n(906364),
    C = n(350327),
    O = n(621853),
    v = n(687158),
    S = n(25990),
    T = n(594174),
    I = n(74538),
    y = n(388032),
    A = n(148385);
function P() {
    var e, t, n, i, P, R, D, Z;
    let w = (0, a.e7)([T.default], () => {
            let e = T.default.getCurrentUser();
            return s()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        k = (0, a.e7)([O.Z], () => O.Z.getUserProfile(w.id)),
        {
            pendingAvatar: W,
            pendingGlobalName: L,
            pendingBanner: B,
            pendingBio: M,
            pendingPronouns: U,
            pendingAccentColor: V,
            pendingThemeColors: G,
            errors: F
        } = (0, a.cj)([S.Z], () => {
            var e, t;
            let n = S.Z.getAllPending(),
                r = S.Z.getErrors();
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n)),
                (t = t = { errors: r }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e
            );
        }),
        H = (0, u.gS)(),
        z = I.ZP.canUsePremiumProfileCustomization(w),
        Y = (0, m.gd)(W, w.avatar),
        K = (0, m.f$)(B, null == k ? void 0 : k.banner),
        q = 'DefaultCustomizationSections';
    (0, o.j)({
        location: q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: q + ' auto off',
            autoTrackExposure: !1
        });
    let X = (0, v.ZP)(w.id),
        J = null == X ? void 0 : X.getLegacyUsername(),
        Q = (null !== (n = null === (e = F.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0 ? F.global_name : null !== (i = null == H ? void 0 : H.nick) && void 0 !== i ? i : [],
        $ = (null !== (P = null === (t = F.bio) || void 0 === t ? void 0 : t.length) && void 0 !== P ? P : 0) > 0 ? F.bio : null !== (R = null == H ? void 0 : H.bio) && void 0 !== R ? R : [],
        ee = (0, c.V)();
    return (0, r.jsxs)('div', {
        className: A.sectionsContainer,
        children: [
            (0, r.jsx)(f.Z, {
                placeholder: w.username,
                errors: Q,
                currentGlobalName: w.globalName,
                pendingGlobalName: L,
                onGlobalNameChange: l.UZ
            }),
            (0, r.jsx)(
                j.Z,
                {
                    sectionTitle: y.NW.string(y.t['+T3RIy']),
                    errors: F.pronouns,
                    onPronounsChange: C.ID,
                    pendingPronouns: U,
                    currentPronouns: null !== (D = null == k ? void 0 : k.pronouns) && void 0 !== D ? D : ''
                },
                'pronouns'
            ),
            (0, r.jsx)(
                h.Z,
                {
                    onAvatarChange: l.I5,
                    showRemoveAvatarButton: Y,
                    errors: F.avatar,
                    sectionTitle: y.NW.string(y.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, r.jsx)(
                p.Z,
                {
                    user: w,
                    sectionTitle: y.NW.string(y.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, r.jsx)(
                _.Z,
                {
                    user: w,
                    sectionTitle: y.NW.string(y.t.wR5wOj)
                },
                'effect'
            ),
            z
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              N.Z,
                              {
                                  showRemoveBannerButton: K,
                                  errors: F.banner,
                                  onBannerChange: C.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, r.jsx)(E.Z, {
                              user: w,
                              pendingAvatar: W,
                              pendingColors: G,
                              onThemeColorsChange: C.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, r.jsx)(
                      x.Z,
                      {
                          user: w,
                          savedUserColor: null == k ? void 0 : k.accentColor,
                          pendingColor: V,
                          setPendingAccentColor: C.CM
                      },
                      'color'
                  ),
            (0, r.jsx)(
                g.Z,
                {
                    sectionTitle: y.NW.string(y.t.NepzEx),
                    errors: $,
                    onBioChange: (e) => (0, m.xQ)(e, null == k ? void 0 : k.bio),
                    pendingBio: M,
                    currentBio: null !== (Z = null == k ? void 0 : k.bio) && void 0 !== Z ? Z : ''
                },
                'bio'
            ),
            ee.length > 0 && (0, r.jsx)(d.Z, { availableClans: ee }),
            null != J && (0, r.jsx)(b.Z, { legacyUsername: J }, 'legacy_username')
        ]
    });
}
