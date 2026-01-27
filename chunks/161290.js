n.d(t, {
    A: () => D,
});
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(311907),
    a = n(631670),
    o = n(81400),
    c = n(185955),
    d = n(318785),
    u = n(919395),
    _ = n(124064),
    p = n(200790),
    m = n(230084),
    g = n(339442),
    A = n(900254),
    f = n(431982),
    h = n(730588),
    b = n(593629),
    E = n(164599),
    x = n(63675),
    O = n(617514),
    C = n(546849),
    I = n(101058),
    T = n(207803),
    S = n(622543),
    j = n(950191),
    v = n(752319),
    N = n(287809),
    y = n(927578),
    P = n(985018),
    R = n(264671);

function D() {
    var e, t, n, i, D, w, L, M;
    let U = (0, s.bG)([N.default], () => {
            let e = N.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        G = (0, s.bG)([S.A], () => S.A.getUserProfile(U.id)),
        {
            pendingAvatar: k,
            pendingGlobalName: V,
            pendingBanner: H,
            pendingBio: B,
            pendingPronouns: F,
            pendingAccentColor: Y,
            pendingThemeColors: W,
            pendingLegacyUsernameDisabled: z,
            pendingPrimaryGuildId: K,
            errors: Z,
        } = (0, s.cf)([v.A], () => {
            var e, t;
            let n = v.A.getAllPending(),
                r = v.A.getErrors();
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n)),
                (t = t =
                    {
                        errors: r,
                    }),
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
        X = (0, I.V7)({
            userId: U.id,
            image: k,
        }),
        q = (0, o.EC)(),
        J = y.Ay.canUsePremiumProfileCustomization(U),
        Q = (0, u.z5)(k, U.avatar),
        $ = (0, u.Ac)(H, null == G ? void 0 : G.banner),
        ee = (0, j.Ay)(U.id),
        et = null == ee ? void 0 : ee.getLegacyUsername(),
        en =
            (null != (e = null == (L = Z.global_name) ? void 0 : L.length) ? e : 0) > 0
                ? Z.global_name
                : null != (t = null == q ? void 0 : q.nick)
                  ? t
                  : [],
        er =
            (null != (n = null == (M = Z.bio) ? void 0 : M.length) ? n : 0) > 0
                ? Z.bio
                : null != (i = null == q ? void 0 : q.bio)
                  ? i
                  : [],
        ei = (0, d.b)();
    return (0, r.jsxs)("div", {
        className: R.Q,
        children: [
            (0, r.jsx)(g.A, {
                placeholder: U.username,
                errors: en,
                currentGlobalName: U.globalName,
                pendingGlobalName: V,
                onGlobalNameChange: a.U6,
                user: U,
            }),
            (0, r.jsx)(
                C.A,
                {
                    sectionTitle: P.intl.string(P.t["+T3RI/"]),
                    errors: Z.pronouns,
                    onPronounsChange: T.Oz,
                    pendingPronouns: F,
                    currentPronouns: null != (D = null == G ? void 0 : G.pronouns) ? D : "",
                },
                "pronouns",
            ),
            (0, r.jsx)(O.A, {}),
            (0, r.jsx)(
                m.A,
                {
                    onAvatarChange: a.zq,
                    showRemoveAvatarButton: Q,
                    errors: Z.avatar,
                    sectionTitle: P.intl.string(P.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, r.jsx)(
                p.A,
                {
                    user: U,
                    sectionTitle: P.intl.string(P.t["7v0T9P"]),
                },
                "decoration",
            ),
            (0, r.jsx)(f.A, {
                user: U,
            }),
            (0, r.jsx)(
                E.A,
                {
                    user: U,
                    sectionTitle: P.intl.string(P.t.wR5wOo),
                },
                "effect",
            ),
            J
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              h.A,
                              {
                                  showRemoveBannerButton: $,
                                  errors: Z.banner,
                                  onBannerChange: T.Iz,
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, r.jsx)(x.A, {
                              user: U,
                              pendingAvatarSrc: X,
                              pendingColors: W,
                              onThemeColorsChange: T.Zz,
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, r.jsx)(
                      b.A,
                      {
                          user: U,
                          savedUserColor: null == G ? void 0 : G.accentColor,
                          pendingColor: Y,
                          setPendingAccentColor: T.XW,
                      },
                      "color",
                  ),
            (0, r.jsx)(
                _.A,
                {
                    sectionTitle: P.intl.string(P.t.NepzEw),
                    errors: er,
                    onBioChange: (e) => (0, u.Ru)(e, null == G ? void 0 : G.bio),
                    pendingBio: B,
                    currentBio: null != (w = null == G ? void 0 : G.bio) ? w : "",
                },
                "bio",
            ),
            ei.length > 0 &&
                (0, r.jsx)(c.A, {
                    availablePrimaryGuilds: ei,
                    pendingPrimaryGuildId: K,
                    onChange: (e) => (0, a.Ch)(e),
                }),
            null != et &&
                (0, r.jsx)(
                    A.A,
                    {
                        legacyUsername: et,
                        pendingLegacyUsernameDisabled: z,
                    },
                    "legacy_username",
                ),
        ],
    });
}
