n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var s = n(284009),
    r = n.n(s),
    a = n(311907),
    l = n(631670),
    o = n(81400),
    c = n(185955),
    d = n(318785),
    u = n(919395),
    _ = n(124064),
    m = n(200790),
    A = n(230084),
    g = n(339442),
    E = n(900254),
    h = n(431982),
    p = n(730588),
    C = n(593629),
    x = n(164599),
    T = n(63675),
    I = n(617514),
    S = n(546849),
    f = n(101058),
    N = n(207803),
    b = n(836602),
    R = n(622543),
    v = n(950191),
    O = n(287809),
    j = n(927578),
    P = n(985018),
    y = n(264671);
function L() {
    let e = (0, a.bG)([O.default], () => {
            let e = O.default.getCurrentUser();
            return r()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, a.bG)([R.A], () => R.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: s,
            pendingBanner: L,
            pendingBio: D,
            pendingPronouns: M,
            pendingAccentColor: G,
            pendingThemeColors: U,
            pendingLegacyUsernameDisabled: k,
            pendingPrimaryGuildId: B,
            errors: w,
        } = (0, a.cf)([b.A], () => {
            let e = b.A.getPendingChanges(),
                t = b.A.getErrors();
            return { ...e, errors: t };
        }),
        H = (0, f.V7)({ userId: e.id, image: n }),
        V = (0, o.EC)(),
        F = j.Ay.canUsePremiumProfileCustomization(e),
        Y = (0, u.z5)(n, e.avatar),
        W = (0, u.Ac)(L, t?.banner),
        z = (0, v.Ay)(e.id),
        K = z?.getLegacyUsername(),
        Z = (w.global_name?.length ?? 0) > 0 ? w.global_name : (V?.nick ?? []),
        X = (w.bio?.length ?? 0) > 0 ? w.bio : (V?.bio ?? []),
        q = (0, d.b)();
    return (0, i.jsxs)("div", {
        className: y.Q,
        children: [
            (0, i.jsx)(g.A, {
                placeholder: e.username,
                errors: Z,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: l.U6,
                user: e,
            }),
            (0, i.jsx)(
                S.A,
                {
                    sectionTitle: P.intl.string(P.t["+T3RI/"]),
                    errors: w.pronouns,
                    onPronounsChange: N.Oz,
                    pendingPronouns: M,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, i.jsx)(I.A, {}),
            (0, i.jsx)(
                A.A,
                {
                    onAvatarChange: l.zq,
                    showRemoveAvatarButton: Y,
                    errors: w.avatar,
                    sectionTitle: P.intl.string(P.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, i.jsx)(m.A, { user: e, sectionTitle: P.intl.string(P.t["7v0T9P"]) }, "decoration"),
            (0, i.jsx)(h.A, { user: e }),
            (0, i.jsx)(x.A, { user: e, sectionTitle: P.intl.string(P.t.wR5wOo) }, "effect"),
            F
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              p.A,
                              { showRemoveBannerButton: W, errors: w.banner, onBannerChange: N.Iz, forcedDivider: !0 },
                              "banner",
                          ),
                          (0, i.jsx)(T.A, {
                              user: e,
                              pendingAvatarSrc: H,
                              pendingColors: U,
                              onThemeColorsChange: N.Zz,
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, i.jsx)(
                      C.A,
                      { user: e, savedUserColor: t?.accentColor, pendingColor: G, setPendingAccentColor: N.XW },
                      "color",
                  ),
            (0, i.jsx)(
                _.A,
                {
                    sectionTitle: P.intl.string(P.t.NepzEw),
                    errors: X,
                    onBioChange: (e) => (0, u.Ru)(e, t?.bio),
                    pendingBio: D,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            q.length > 0 &&
                (0, i.jsx)(c.A, { availablePrimaryGuilds: q, pendingPrimaryGuildId: B, onChange: (e) => (0, l.Ch)(e) }),
            null != K && (0, i.jsx)(E.A, { legacyUsername: K, pendingLegacyUsernameDisabled: k }, "legacy_username"),
        ],
    });
}
