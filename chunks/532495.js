n.d(t, { Z: () => R });
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
    C = n(643879),
    O = n(350327),
    v = n(621853),
    S = n(687158),
    T = n(25990),
    I = n(594174),
    y = n(74538),
    A = n(388032),
    P = n(148385);
function R() {
    var e, t, n, i, R, D, Z, w;
    let k = (0, a.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return s()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        W = (0, a.e7)([v.Z], () => v.Z.getUserProfile(k.id)),
        {
            pendingAvatarV2: L,
            pendingGlobalName: B,
            pendingBanner: M,
            pendingBio: U,
            pendingPronouns: V,
            pendingAccentColor: G,
            pendingThemeColors: F,
            errors: H
        } = (0, a.cj)([T.Z], () => {
            var e, t;
            let n = T.Z.getAllPending(),
                r = T.Z.getErrors();
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
        z = (0, C.SD)({
            userId: k.id,
            image: L
        }),
        Y = (0, u.gS)(),
        K = y.ZP.canUsePremiumProfileCustomization(k),
        q = (0, m.GH)(L, k.avatar),
        X = (0, m.f$)(M, null == W ? void 0 : W.banner),
        J = 'DefaultCustomizationSections';
    (0, o.j)({
        location: J + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: J + ' auto off',
            autoTrackExposure: !1
        });
    let Q = (0, S.ZP)(k.id),
        $ = null == Q ? void 0 : Q.getLegacyUsername(),
        ee = (null !== (n = null === (e = H.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0 ? H.global_name : null !== (i = null == Y ? void 0 : Y.nick) && void 0 !== i ? i : [],
        et = (null !== (R = null === (t = H.bio) || void 0 === t ? void 0 : t.length) && void 0 !== R ? R : 0) > 0 ? H.bio : null !== (D = null == Y ? void 0 : Y.bio) && void 0 !== D ? D : [],
        en = (0, c.V)();
    return (0, r.jsxs)('div', {
        className: P.sectionsContainer,
        children: [
            (0, r.jsx)(f.Z, {
                placeholder: k.username,
                errors: ee,
                currentGlobalName: k.globalName,
                pendingGlobalName: B,
                onGlobalNameChange: l.UZ
            }),
            (0, r.jsx)(
                j.Z,
                {
                    sectionTitle: A.NW.string(A.t['+T3RIy']),
                    errors: H.pronouns,
                    onPronounsChange: O.ID,
                    pendingPronouns: V,
                    currentPronouns: null !== (Z = null == W ? void 0 : W.pronouns) && void 0 !== Z ? Z : ''
                },
                'pronouns'
            ),
            (0, r.jsx)(
                h.Z,
                {
                    onAvatarChange: l.Re,
                    showRemoveAvatarButton: q,
                    errors: H.avatar,
                    sectionTitle: A.NW.string(A.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, r.jsx)(
                p.Z,
                {
                    user: k,
                    sectionTitle: A.NW.string(A.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, r.jsx)(
                _.Z,
                {
                    user: k,
                    sectionTitle: A.NW.string(A.t.wR5wOj)
                },
                'effect'
            ),
            K
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              N.Z,
                              {
                                  showRemoveBannerButton: X,
                                  errors: H.banner,
                                  onBannerChange: O.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, r.jsx)(E.Z, {
                              user: k,
                              pendingAvatarSrc: z,
                              pendingColors: F,
                              onThemeColorsChange: O.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, r.jsx)(
                      x.Z,
                      {
                          user: k,
                          savedUserColor: null == W ? void 0 : W.accentColor,
                          pendingColor: G,
                          setPendingAccentColor: O.CM
                      },
                      'color'
                  ),
            (0, r.jsx)(
                g.Z,
                {
                    sectionTitle: A.NW.string(A.t.NepzEx),
                    errors: et,
                    onBioChange: (e) => (0, m.xQ)(e, null == W ? void 0 : W.bio),
                    pendingBio: U,
                    currentBio: null !== (w = null == W ? void 0 : W.bio) && void 0 !== w ? w : ''
                },
                'bio'
            ),
            en.length > 0 && (0, r.jsx)(d.Z, { availableClans: en }),
            null != $ && (0, r.jsx)(b.Z, { legacyUsername: $ }, 'legacy_username')
        ]
    });
}
