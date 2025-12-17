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
    p = n(433411),
    _ = n(532432),
    m = n(349177),
    h = n(872736),
    g = n(818420),
    E = n(134795),
    b = n(610966),
    y = n(513901),
    O = n(451392),
    v = n(9617),
    S = n(906364),
    I = n(643879),
    T = n(350327),
    C = n(836197),
    A = n(621853),
    N = n(687158),
    P = n(477448),
    R = n(25990),
    w = n(594174),
    D = n(74538),
    x = n(388032),
    L = n(485344);
function j(e, t, n) {
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
function M(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G() {
    var e, t, n, i, j, k, G, Z, F;
    let B = (0, o.e7)([w.default], () => {
            let e = w.default.getCurrentUser();
            return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        V = (0, o.e7)([A.Z], () => A.Z.getUserProfile(B.id)),
        {
            pendingAvatar: H,
            pendingGlobalName: Y,
            pendingBanner: W,
            pendingBio: K,
            pendingPronouns: z,
            pendingAccentColor: q,
            pendingThemeColors: Q,
            pendingLegacyUsernameDisabled: X,
            pendingPrimaryGuildId: J,
            errors: $,
        } = (0, o.cj)([R.Z], () => {
            let e = R.Z.getAllPending(),
                t = R.Z.getErrors();
            return U(M({}, e), { errors: t });
        }),
        ee = (0, I.SD)({
            userId: B.id,
            image: H,
        }),
        et = (0, l.gS)(),
        en = D.ZP.canUsePremiumProfileCustomization(B),
        er = (0, d.gd)(H, B.avatar),
        ei = (0, d.f$)(W, null == V ? void 0 : V.banner),
        ea = (0, N.ZP)(B.id),
        eo = null == ea ? void 0 : ea.getLegacyUsername(),
        es =
            (null != (i = null == (e = $.global_name) ? void 0 : e.length) ? i : 0) > 0
                ? $.global_name
                : null != (j = null == et ? void 0 : et.nick)
                  ? j
                  : [],
        el =
            (null != (k = null == (t = $.bio) ? void 0 : t.length) ? k : 0) > 0
                ? $.bio
                : null != (G = null == et ? void 0 : et.bio)
                  ? G
                  : [],
        ec = (0, u.w)(),
        eu = (0, P.Z)({ location: "DefaultCustomizationSections" }),
        ed = (null == V || null == (n = V.widgets) ? void 0 : n.some((e) => C.Ki.includes(e.type))) === !0,
        ef = eu || ed,
        ep = () =>
            en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              E.Z,
                              {
                                  showRemoveBannerButton: ei,
                                  errors: $.banner,
                                  onBannerChange: T.g_,
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, r.jsx)(O.Z, {
                              user: B,
                              pendingAvatarSrc: ee,
                              pendingColors: Q,
                              onThemeColorsChange: T.z5,
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, r.jsx)(
                      b.Z,
                      {
                          user: B,
                          savedUserColor: null == V ? void 0 : V.accentColor,
                          pendingColor: q,
                          setPendingAccentColor: T.CM,
                      },
                      "color",
                  );
    return (0, r.jsxs)("div", {
        className: L.sectionsContainer,
        children: [
            (0, r.jsx)(m.Z, {
                placeholder: B.username,
                errors: es,
                currentGlobalName: B.globalName,
                pendingGlobalName: Y,
                onGlobalNameChange: s.W0,
                user: B,
            }),
            (0, r.jsx)(
                S.Z,
                {
                    sectionTitle: x.intl.string(x.t["+T3RI/"]),
                    errors: $.pronouns,
                    onPronounsChange: T.ID,
                    pendingPronouns: z,
                    currentPronouns: null != (Z = null == V ? void 0 : V.pronouns) ? Z : "",
                },
                "pronouns",
            ),
            ef && (0, r.jsx)(v.Z, {}),
            (0, r.jsx)(
                _.Z,
                {
                    onAvatarChange: s.I5,
                    showRemoveAvatarButton: er,
                    errors: $.avatar,
                    sectionTitle: x.intl.string(x.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, r.jsx)(
                p.Z,
                {
                    user: B,
                    sectionTitle: x.intl.string(x.t["7v0T9P"]),
                },
                "decoration",
            ),
            (0, r.jsx)(g.Z, { user: B }),
            (0, r.jsx)(
                y.Z,
                {
                    user: B,
                    sectionTitle: x.intl.string(x.t.wR5wOo),
                },
                "effect",
            ),
            ep(),
            (0, r.jsx)(
                f.Z,
                {
                    sectionTitle: x.intl.string(x.t.NepzEw),
                    errors: el,
                    onBioChange: (e) => (0, d.xQ)(e, null == V ? void 0 : V.bio),
                    pendingBio: K,
                    currentBio: null != (F = null == V ? void 0 : V.bio) ? F : "",
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
                    h.Z,
                    {
                        legacyUsername: eo,
                        pendingLegacyUsernameDisabled: X,
                    },
                    "legacy_username",
                ),
        ],
    });
}
