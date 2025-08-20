n.d(t, { Z: () => M });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(809206),
    l = n(295474),
    c = n(74469),
    u = n(396402),
    d = n(150039),
    f = n(126631),
    _ = n(433411),
    p = n(532432),
    h = n(349177),
    m = n(872736),
    g = n(818420),
    E = n(134795),
    b = n(610966),
    y = n(513901),
    O = n(451392),
    v = n(906364),
    I = n(643879),
    T = n(350327),
    S = n(621853),
    A = n(687158),
    C = n(25990),
    N = n(594174),
    R = n(74538),
    P = n(388032),
    w = n(436360);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M() {
    var e, t, n, i, D, L, M, k;
    let U = (0, o.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        G = (0, o.e7)([S.Z], () => S.Z.getUserProfile(U.id)),
        {
            pendingAvatar: B,
            pendingGlobalName: Z,
            pendingBanner: V,
            pendingBio: F,
            pendingPronouns: H,
            pendingAccentColor: Y,
            pendingThemeColors: W,
            pendingLegacyUsernameDisabled: K,
            pendingPrimaryGuildId: z,
            errors: q,
        } = (0, o.cj)([C.Z], () => {
            let e = C.Z.getAllPending(),
                t = C.Z.getErrors();
            return j(x({}, e), { errors: t });
        }),
        X = (0, I.SD)({
            userId: U.id,
            image: B,
        }),
        Q = (0, l.gS)(),
        J = R.ZP.canUsePremiumProfileCustomization(U),
        $ = (0, d.gd)(B, U.avatar),
        ee = (0, d.f$)(V, null == G ? void 0 : G.banner),
        et = (0, A.ZP)(U.id),
        en = null == et ? void 0 : et.getLegacyUsername(),
        er =
            (null != (n = null == (e = q.global_name) ? void 0 : e.length) ? n : 0) > 0
                ? q.global_name
                : null != (i = null == Q ? void 0 : Q.nick)
                  ? i
                  : [],
        ei =
            (null != (D = null == (t = q.bio) ? void 0 : t.length) ? D : 0) > 0
                ? q.bio
                : null != (L = null == Q ? void 0 : Q.bio)
                  ? L
                  : [],
        ea = (0, u.w)(),
        eo = () =>
            J
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: ee,
                                  errors: q.banner,
                                  onBannerChange: T.g_,
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, r.jsx)(O.Z, {
                              user: U,
                              pendingAvatarSrc: X,
                              pendingColors: W,
                              onThemeColorsChange: T.z5,
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, r.jsx)(
                      b.Z,
                      {
                          user: U,
                          savedUserColor: null == G ? void 0 : G.accentColor,
                          pendingColor: Y,
                          setPendingAccentColor: T.CM,
                      },
                      "color",
                  );
    return (0, r.jsxs)("div", {
        className: w.sectionsContainer,
        children: [
            (0, r.jsx)(h.Z, {
                placeholder: U.username,
                errors: er,
                currentGlobalName: U.globalName,
                pendingGlobalName: Z,
                onGlobalNameChange: s.W0,
                user: U,
            }),
            (0, r.jsx)(
                v.Z,
                {
                    sectionTitle: P.intl.string(P.t["+T3RIy"]),
                    errors: q.pronouns,
                    onPronounsChange: T.ID,
                    pendingPronouns: H,
                    currentPronouns: null != (M = null == G ? void 0 : G.pronouns) ? M : "",
                },
                "pronouns",
            ),
            (0, r.jsx)(
                p.Z,
                {
                    onAvatarChange: s.I5,
                    showRemoveAvatarButton: $,
                    errors: q.avatar,
                    sectionTitle: P.intl.string(P.t.lqaIxM),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, r.jsx)(
                _.Z,
                {
                    user: U,
                    sectionTitle: P.intl.string(P.t["7v0T9P"]),
                },
                "decoration",
            ),
            (0, r.jsx)(g.Z, { user: U }),
            (0, r.jsx)(
                y.Z,
                {
                    user: U,
                    sectionTitle: P.intl.string(P.t.wR5wOj),
                },
                "effect",
            ),
            eo(),
            (0, r.jsx)(
                f.Z,
                {
                    sectionTitle: P.intl.string(P.t.NepzEx),
                    errors: ei,
                    onBioChange: (e) => (0, d.xQ)(e, null == G ? void 0 : G.bio),
                    pendingBio: F,
                    currentBio: null != (k = null == G ? void 0 : G.bio) ? k : "",
                },
                "bio",
            ),
            ea.length > 0 &&
                (0, r.jsx)(c.Z, {
                    availablePrimaryGuilds: ea,
                    pendingPrimaryGuildId: z,
                    onChange: (e) => (0, s.s4)(e),
                }),
            null != en &&
                (0, r.jsx)(
                    m.Z,
                    {
                        legacyUsername: en,
                        pendingLegacyUsernameDisabled: K,
                    },
                    "legacy_username",
                ),
        ],
    });
}
