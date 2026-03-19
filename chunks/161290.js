n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(81400),
    o = n(185955),
    d = n(318785),
    c = n(919395),
    u = n(124064),
    _ = n(200790),
    m = n(230084),
    g = n(339442),
    A = n(900254),
    x = n(431982),
    h = n(730588),
    p = n(593629),
    T = n(164599),
    E = n(63675),
    S = n(617514),
    f = n(546849),
    C = n(101058),
    b = n(84540),
    N = n(836602),
    I = n(622543),
    v = n(950191),
    j = n(287809),
    y = n(927578),
    R = n(985018),
    O = n(961618);
function L() {
    let e = (0, a.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, a.bG)([I.A], () => I.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: s,
            pendingBanner: L,
            pendingBio: D,
            pendingPronouns: P,
            pendingAccentColor: M,
            pendingThemeColors: G,
            pendingLegacyUsernameDisabled: U,
            pendingPrimaryGuildId: k,
            errors: V,
        } = (0, a.cf)([N.A], () => {
            let e = N.A.getPendingChanges(),
                t = N.A.getErrors();
            return { ...e, errors: t };
        }),
        w = (0, C.V7)({ userId: e.id, image: n }),
        B = (0, r.EC)(),
        H = y.Ay.canUsePremiumProfileCustomization(e),
        F = (0, c.z5)(n, e.avatar),
        Y = (0, c.Ac)(L, t?.banner),
        z = (0, v.Ay)(e.id),
        X = z?.getLegacyUsername(),
        W = (V.global_name?.length ?? 0) > 0 ? V.global_name : (B?.nick ?? []),
        K = (V.bio?.length ?? 0) > 0 ? V.bio : (B?.bio ?? []),
        Z = (0, d.b)();
    return (0, i.jsxs)("div", {
        className: O.Q,
        children: [
            (0, i.jsx)(g.A, {
                placeholder: e.username,
                errors: W,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, b.p)({ globalName: e }),
                user: e,
            }),
            (0, i.jsx)(
                f.A,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: V.pronouns,
                    onPronounsChange: (e) => (0, b.p)({ pronouns: e }),
                    pendingPronouns: P,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, i.jsx)(S.A, {}),
            (0, i.jsx)(
                m.A,
                {
                    onAvatarChange: (e) => {
                        (0, b.p)({ avatar: e }), (0, c.WU)(e);
                    },
                    showRemoveAvatarButton: F,
                    errors: V.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, i.jsx)(_.A, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, i.jsx)(x.A, { user: e }),
            (0, i.jsx)(T.A, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            H
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              h.A,
                              {
                                  showRemoveBannerButton: Y,
                                  errors: V.banner,
                                  onBannerChange: (e) => (0, b.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, i.jsx)(E.A, {
                              user: e,
                              pendingAvatarSrc: w,
                              pendingColors: G,
                              onThemeColorsChange: (e) => (0, b.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, i.jsx)(
                      p.A,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: M,
                          setPendingAccentColor: (e) => (0, b.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, i.jsx)(
                u.A,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: K,
                    onBioChange: (e) => (0, b.p)({ bio: e }),
                    pendingBio: D,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            Z.length > 0 &&
                (0, i.jsx)(o.A, {
                    availablePrimaryGuilds: Z,
                    pendingPrimaryGuildId: k,
                    onChange: (e) => (0, b.p)({ primaryGuildId: e }),
                }),
            null != X && (0, i.jsx)(A.A, { legacyUsername: X, pendingLegacyUsernameDisabled: U }, "legacy_username"),
        ],
    });
}
