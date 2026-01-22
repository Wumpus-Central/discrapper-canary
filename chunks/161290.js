n.d(t, { A: () => k });
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(631670),
    l = n(81400),
    c = n(185955),
    u = n(318785),
    d = n(919395),
    f = n(124064),
    p = n(200790),
    _ = n(230084),
    h = n(339442),
    m = n(900254),
    g = n(431982),
    E = n(730588),
    b = n(593629),
    y = n(164599),
    O = n(63675),
    A = n(617514),
    v = n(546849),
    S = n(101058),
    I = n(207803),
    T = n(622543),
    C = n(950191),
    N = n(752319),
    R = n(287809),
    w = n(927578),
    P = n(985018),
    D = n(264671);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k() {
    var e, t, n, i, x, j, k, U;
    let G = (0, s.bG)([R.default], () => {
            let e = R.default.getCurrentUser();
            return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        V = (0, s.bG)([T.A], () => T.A.getUserProfile(G.id)),
        {
            pendingAvatar: F,
            pendingGlobalName: B,
            pendingBanner: H,
            pendingBio: Y,
            pendingPronouns: W,
            pendingAccentColor: K,
            pendingThemeColors: z,
            pendingLegacyUsernameDisabled: q,
            pendingPrimaryGuildId: X,
            errors: Z,
        } = (0, s.cf)([N.A], () => {
            let e = N.A.getAllPending(),
                t = N.A.getErrors();
            return M(L({}, e), { errors: t });
        }),
        Q = (0, S.V7)({
            userId: G.id,
            image: F,
        }),
        $ = (0, l.EC)(),
        J = w.Ay.canUsePremiumProfileCustomization(G),
        ee = (0, d.z5)(F, G.avatar),
        et = (0, d.Ac)(H, null == V ? void 0 : V.banner),
        en = (0, C.Ay)(G.id),
        er = null == en ? void 0 : en.getLegacyUsername(),
        ei =
            (null != (e = null == (k = Z.global_name) ? void 0 : k.length) ? e : 0) > 0
                ? Z.global_name
                : null != (t = null == $ ? void 0 : $.nick)
                  ? t
                  : [],
        ea =
            (null != (n = null == (U = Z.bio) ? void 0 : U.length) ? n : 0) > 0
                ? Z.bio
                : null != (i = null == $ ? void 0 : $.bio)
                  ? i
                  : [],
        es = (0, u.b)(),
        eo = () =>
            J
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              E.A,
                              {
                                  showRemoveBannerButton: et,
                                  errors: Z.banner,
                                  onBannerChange: I.Iz,
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, r.jsx)(O.A, {
                              user: G,
                              pendingAvatarSrc: Q,
                              pendingColors: z,
                              onThemeColorsChange: I.Zz,
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, r.jsx)(
                      b.A,
                      {
                          user: G,
                          savedUserColor: null == V ? void 0 : V.accentColor,
                          pendingColor: K,
                          setPendingAccentColor: I.XW,
                      },
                      "color",
                  );
    return (0, r.jsxs)("div", {
        className: D.Q,
        children: [
            (0, r.jsx)(h.A, {
                placeholder: G.username,
                errors: ei,
                currentGlobalName: G.globalName,
                pendingGlobalName: B,
                onGlobalNameChange: o.U6,
                user: G,
            }),
            (0, r.jsx)(
                v.A,
                {
                    sectionTitle: P.intl.string(P.t["+T3RI/"]),
                    errors: Z.pronouns,
                    onPronounsChange: I.Oz,
                    pendingPronouns: W,
                    currentPronouns: null != (x = null == V ? void 0 : V.pronouns) ? x : "",
                },
                "pronouns",
            ),
            (0, r.jsx)(A.A, {}),
            (0, r.jsx)(
                _.A,
                {
                    onAvatarChange: o.zq,
                    showRemoveAvatarButton: ee,
                    errors: Z.avatar,
                    sectionTitle: P.intl.string(P.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, r.jsx)(
                p.A,
                {
                    user: G,
                    sectionTitle: P.intl.string(P.t["7v0T9P"]),
                },
                "decoration",
            ),
            (0, r.jsx)(g.A, { user: G }),
            (0, r.jsx)(
                y.A,
                {
                    user: G,
                    sectionTitle: P.intl.string(P.t.wR5wOo),
                },
                "effect",
            ),
            eo(),
            (0, r.jsx)(
                f.A,
                {
                    sectionTitle: P.intl.string(P.t.NepzEw),
                    errors: ea,
                    onBioChange: (e) => (0, d.Ru)(e, null == V ? void 0 : V.bio),
                    pendingBio: Y,
                    currentBio: null != (j = null == V ? void 0 : V.bio) ? j : "",
                },
                "bio",
            ),
            es.length > 0 &&
                (0, r.jsx)(c.A, {
                    availablePrimaryGuilds: es,
                    pendingPrimaryGuildId: X,
                    onChange: (e) => (0, o.Ch)(e),
                }),
            null != er &&
                (0, r.jsx)(
                    m.A,
                    {
                        legacyUsername: er,
                        pendingLegacyUsernameDisabled: q,
                    },
                    "legacy_username",
                ),
        ],
    });
}
