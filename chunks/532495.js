n.d(t, { Z: () => U });
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
    v = n(9617),
    I = n(906364),
    T = n(643879),
    S = n(350327),
    A = n(621853),
    C = n(687158),
    N = n(477448),
    R = n(25990),
    P = n(594174),
    w = n(74538),
    D = n(388032),
    x = n(436360);
function L(e, t, n) {
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
function j(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U() {
    var e, t, n, i, L, M, U, G;
    let B = (0, o.e7)([P.default], () => {
            let e = P.default.getCurrentUser();
            return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        Z = (0, o.e7)([A.Z], () => A.Z.getUserProfile(B.id)),
        {
            pendingAvatar: F,
            pendingGlobalName: V,
            pendingBanner: H,
            pendingBio: Y,
            pendingPronouns: W,
            pendingAccentColor: K,
            pendingThemeColors: z,
            pendingLegacyUsernameDisabled: q,
            pendingPrimaryGuildId: X,
            errors: Q,
        } = (0, o.cj)([R.Z], () => {
            let e = R.Z.getAllPending(),
                t = R.Z.getErrors();
            return k(j({}, e), { errors: t });
        }),
        J = (0, T.SD)({
            userId: B.id,
            image: F,
        }),
        $ = (0, l.gS)(),
        ee = w.ZP.canUsePremiumProfileCustomization(B),
        et = (0, d.gd)(F, B.avatar),
        en = (0, d.f$)(H, null == Z ? void 0 : Z.banner),
        er = (0, C.ZP)(B.id),
        ei = null == er ? void 0 : er.getLegacyUsername(),
        ea =
            (null != (n = null == (e = Q.global_name) ? void 0 : e.length) ? n : 0) > 0
                ? Q.global_name
                : null != (i = null == $ ? void 0 : $.nick)
                  ? i
                  : [],
        eo =
            (null != (L = null == (t = Q.bio) ? void 0 : t.length) ? L : 0) > 0
                ? Q.bio
                : null != (M = null == $ ? void 0 : $.bio)
                  ? M
                  : [],
        es = (0, u.w)(),
        el = (0, N.Z)({ location: "DefaultCustomizationSections" }),
        ec = () =>
            ee
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: en,
                                  errors: Q.banner,
                                  onBannerChange: S.g_,
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, r.jsx)(O.Z, {
                              user: B,
                              pendingAvatarSrc: J,
                              pendingColors: z,
                              onThemeColorsChange: S.z5,
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, r.jsx)(
                      b.Z,
                      {
                          user: B,
                          savedUserColor: null == Z ? void 0 : Z.accentColor,
                          pendingColor: K,
                          setPendingAccentColor: S.CM,
                      },
                      "color",
                  );
    return (0, r.jsxs)("div", {
        className: x.sectionsContainer,
        children: [
            (0, r.jsx)(h.Z, {
                placeholder: B.username,
                errors: ea,
                currentGlobalName: B.globalName,
                pendingGlobalName: V,
                onGlobalNameChange: s.W0,
                user: B,
            }),
            (0, r.jsx)(
                I.Z,
                {
                    sectionTitle: D.intl.string(D.t["+T3RIy"]),
                    errors: Q.pronouns,
                    onPronounsChange: S.ID,
                    pendingPronouns: W,
                    currentPronouns: null != (U = null == Z ? void 0 : Z.pronouns) ? U : "",
                },
                "pronouns",
            ),
            el && (0, r.jsx)(v.Z, {}),
            (0, r.jsx)(
                p.Z,
                {
                    onAvatarChange: s.I5,
                    showRemoveAvatarButton: et,
                    errors: Q.avatar,
                    sectionTitle: D.intl.string(D.t.lqaIxM),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, r.jsx)(
                _.Z,
                {
                    user: B,
                    sectionTitle: D.intl.string(D.t["7v0T9P"]),
                },
                "decoration",
            ),
            (0, r.jsx)(g.Z, { user: B }),
            (0, r.jsx)(
                y.Z,
                {
                    user: B,
                    sectionTitle: D.intl.string(D.t.wR5wOj),
                },
                "effect",
            ),
            ec(),
            (0, r.jsx)(
                f.Z,
                {
                    sectionTitle: D.intl.string(D.t.NepzEx),
                    errors: eo,
                    onBioChange: (e) => (0, d.xQ)(e, null == Z ? void 0 : Z.bio),
                    pendingBio: Y,
                    currentBio: null != (G = null == Z ? void 0 : Z.bio) ? G : "",
                },
                "bio",
            ),
            es.length > 0 &&
                (0, r.jsx)(c.Z, {
                    availablePrimaryGuilds: es,
                    pendingPrimaryGuildId: X,
                    onChange: (e) => (0, s.s4)(e),
                }),
            null != ei &&
                (0, r.jsx)(
                    m.Z,
                    {
                        legacyUsername: ei,
                        pendingLegacyUsernameDisabled: q,
                    },
                    "legacy_username",
                ),
        ],
    });
}
