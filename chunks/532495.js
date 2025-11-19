n.d(t, { Z: () => G });
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
    A = n(836197),
    C = n(621853),
    N = n(687158),
    R = n(477448),
    P = n(25990),
    D = n(594174),
    w = n(74538),
    L = n(388032),
    x = n(436360);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
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
function U(e, t) {
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
function G() {
    var e, t, n, i, M, j, G, B, Z;
    let F = (0, o.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        V = (0, o.e7)([C.Z], () => C.Z.getUserProfile(F.id)),
        {
            pendingAvatar: H,
            pendingGlobalName: Y,
            pendingBanner: W,
            pendingBio: K,
            pendingPronouns: z,
            pendingAccentColor: q,
            pendingThemeColors: X,
            pendingLegacyUsernameDisabled: Q,
            pendingPrimaryGuildId: J,
            errors: $,
        } = (0, o.cj)([P.Z], () => {
            let e = P.Z.getAllPending(),
                t = P.Z.getErrors();
            return U(k({}, e), { errors: t });
        }),
        ee = (0, T.SD)({
            userId: F.id,
            image: H,
        }),
        et = (0, l.gS)(),
        en = w.ZP.canUsePremiumProfileCustomization(F),
        er = (0, d.gd)(H, F.avatar),
        ei = (0, d.f$)(W, null == V ? void 0 : V.banner),
        ea = (0, N.ZP)(F.id),
        eo = null == ea ? void 0 : ea.getLegacyUsername(),
        es =
            (null != (i = null == (e = $.global_name) ? void 0 : e.length) ? i : 0) > 0
                ? $.global_name
                : null != (M = null == et ? void 0 : et.nick)
                  ? M
                  : [],
        el =
            (null != (j = null == (t = $.bio) ? void 0 : t.length) ? j : 0) > 0
                ? $.bio
                : null != (G = null == et ? void 0 : et.bio)
                  ? G
                  : [],
        ec = (0, u.w)(),
        eu = (0, R.Z)({ location: "DefaultCustomizationSections" }),
        ed = (null == V || null == (n = V.widgets) ? void 0 : n.some((e) => A.Ki.includes(e.type))) === !0,
        ef = eu || ed,
        e_ = () =>
            en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: ei,
                                  errors: $.banner,
                                  onBannerChange: S.g_,
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, r.jsx)(O.Z, {
                              user: F,
                              pendingAvatarSrc: ee,
                              pendingColors: X,
                              onThemeColorsChange: S.z5,
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, r.jsx)(
                      b.Z,
                      {
                          user: F,
                          savedUserColor: null == V ? void 0 : V.accentColor,
                          pendingColor: q,
                          setPendingAccentColor: S.CM,
                      },
                      "color",
                  );
    return (0, r.jsxs)("div", {
        className: x.sectionsContainer,
        children: [
            (0, r.jsx)(h.Z, {
                placeholder: F.username,
                errors: es,
                currentGlobalName: F.globalName,
                pendingGlobalName: Y,
                onGlobalNameChange: s.W0,
                user: F,
            }),
            (0, r.jsx)(
                I.Z,
                {
                    sectionTitle: L.intl.string(L.t["+T3RI/"]),
                    errors: $.pronouns,
                    onPronounsChange: S.ID,
                    pendingPronouns: z,
                    currentPronouns: null != (B = null == V ? void 0 : V.pronouns) ? B : "",
                },
                "pronouns",
            ),
            ef && (0, r.jsx)(v.Z, {}),
            (0, r.jsx)(
                p.Z,
                {
                    onAvatarChange: s.I5,
                    showRemoveAvatarButton: er,
                    errors: $.avatar,
                    sectionTitle: L.intl.string(L.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, r.jsx)(
                _.Z,
                {
                    user: F,
                    sectionTitle: L.intl.string(L.t["7v0T9P"]),
                },
                "decoration",
            ),
            (0, r.jsx)(g.Z, { user: F }),
            (0, r.jsx)(
                y.Z,
                {
                    user: F,
                    sectionTitle: L.intl.string(L.t.wR5wOo),
                },
                "effect",
            ),
            e_(),
            (0, r.jsx)(
                f.Z,
                {
                    sectionTitle: L.intl.string(L.t.NepzEw),
                    errors: el,
                    onBioChange: (e) => (0, d.xQ)(e, null == V ? void 0 : V.bio),
                    pendingBio: K,
                    currentBio: null != (Z = null == V ? void 0 : V.bio) ? Z : "",
                },
                "bio",
            ),
            ec.length > 0 &&
                (0, r.jsx)(c.Z, {
                    availablePrimaryGuilds: ec,
                    pendingPrimaryGuildId: J,
                    onChange: (e) => (0, s.s4)(e),
                }),
            null != eo &&
                (0, r.jsx)(
                    m.Z,
                    {
                        legacyUsername: eo,
                        pendingLegacyUsernameDisabled: Q,
                    },
                    "legacy_username",
                ),
        ],
    });
}
