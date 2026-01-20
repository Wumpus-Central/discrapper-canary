n.d(t, { Z: () => k });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(809206),
    l = n(295474),
    c = n(74469),
    u = n(396402),
    d = n(150039),
    f = n(126631),
    p = n(433411),
    _ = n(532432),
    h = n(349177),
    m = n(872736),
    g = n(818420),
    E = n(134795),
    b = n(610966),
    y = n(513901),
    O = n(451392),
    v = n(9617),
    S = n(906364),
    I = n(643879),
    T = n(350327),
    C = n(621853),
    A = n(687158),
    N = n(25990),
    P = n(594174),
    w = n(74538),
    R = n(388032),
    D = n(485344);
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
    let G = (0, o.e7)([P.default], () => {
            let e = P.default.getCurrentUser();
            return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        Z = (0, o.e7)([C.Z], () => C.Z.getUserProfile(G.id)),
        {
            pendingAvatar: F,
            pendingGlobalName: B,
            pendingBanner: V,
            pendingBio: H,
            pendingPronouns: Y,
            pendingAccentColor: W,
            pendingThemeColors: K,
            pendingLegacyUsernameDisabled: z,
            pendingPrimaryGuildId: q,
            errors: Q,
        } = (0, o.cj)([N.Z], () => {
            let e = N.Z.getAllPending(),
                t = N.Z.getErrors();
            return M(L({}, e), { errors: t });
        }),
        X = (0, I.SD)({
            userId: G.id,
            image: F,
        }),
        J = (0, l.gS)(),
        $ = w.ZP.canUsePremiumProfileCustomization(G),
        ee = (0, d.gd)(F, G.avatar),
        et = (0, d.f$)(V, null == Z ? void 0 : Z.banner),
        en = (0, A.ZP)(G.id),
        er = null == en ? void 0 : en.getLegacyUsername(),
        ei =
            (null != (n = null == (e = Q.global_name) ? void 0 : e.length) ? n : 0) > 0
                ? Q.global_name
                : null != (i = null == J ? void 0 : J.nick)
                  ? i
                  : [],
        ea =
            (null != (x = null == (t = Q.bio) ? void 0 : t.length) ? x : 0) > 0
                ? Q.bio
                : null != (j = null == J ? void 0 : J.bio)
                  ? j
                  : [],
        eo = (0, u.w)(),
        es = () =>
            $
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: et,
                                  errors: Q.banner,
                                  onBannerChange: T.g_,
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, r.jsx)(O.Z, {
                              user: G,
                              pendingAvatarSrc: X,
                              pendingColors: K,
                              onThemeColorsChange: T.z5,
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, r.jsx)(
                      b.Z,
                      {
                          user: G,
                          savedUserColor: null == Z ? void 0 : Z.accentColor,
                          pendingColor: W,
                          setPendingAccentColor: T.CM,
                      },
                      "color",
                  );
    return (0, r.jsxs)("div", {
        className: D.sectionsContainer,
        children: [
            (0, r.jsx)(h.Z, {
                placeholder: G.username,
                errors: ei,
                currentGlobalName: G.globalName,
                pendingGlobalName: B,
                onGlobalNameChange: s.W0,
                user: G,
            }),
            (0, r.jsx)(
                S.Z,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: Q.pronouns,
                    onPronounsChange: T.ID,
                    pendingPronouns: Y,
                    currentPronouns: null != (k = null == Z ? void 0 : Z.pronouns) ? k : "",
                },
                "pronouns",
            ),
            (0, r.jsx)(v.Z, {}),
            (0, r.jsx)(
                _.Z,
                {
                    onAvatarChange: s.I5,
                    showRemoveAvatarButton: ee,
                    errors: Q.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, r.jsx)(
                p.Z,
                {
                    user: G,
                    sectionTitle: R.intl.string(R.t["7v0T9P"]),
                },
                "decoration",
            ),
            (0, r.jsx)(g.Z, { user: G }),
            (0, r.jsx)(
                y.Z,
                {
                    user: G,
                    sectionTitle: R.intl.string(R.t.wR5wOo),
                },
                "effect",
            ),
            es(),
            (0, r.jsx)(
                f.Z,
                {
                    sectionTitle: R.intl.string(R.t.NepzEw),
                    errors: ea,
                    onBioChange: (e) => (0, d.xQ)(e, null == Z ? void 0 : Z.bio),
                    pendingBio: H,
                    currentBio: null != (U = null == Z ? void 0 : Z.bio) ? U : "",
                },
                "bio",
            ),
            eo.length > 0 &&
                (0, r.jsx)(c.Z, {
                    availablePrimaryGuilds: eo,
                    pendingPrimaryGuildId: q,
                    onChange: (e) => (0, s.s4)(e),
                }),
            null != er &&
                (0, r.jsx)(
                    m.Z,
                    {
                        legacyUsername: er,
                        pendingLegacyUsernameDisabled: z,
                    },
                    "legacy_username",
                ),
        ],
    });
}
