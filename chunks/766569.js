n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(974544),
    u = n(793574),
    _ = n(688810),
    m = n(550111),
    g = n(919395),
    A = n(884546),
    h = n(287070),
    x = n(101058),
    p = n(836602),
    T = n(622543),
    E = n(696451),
    C = n(351906),
    S = n(287809),
    f = n(975571),
    N = n(927578),
    b = n(159001),
    I = n(65767),
    v = n(281052),
    j = n(687021),
    O = n(652215),
    y = n(985018),
    R = n(764121);
function P(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await n.e("65281").then(n.bind(n, 547352));
        return (n) => (0, i.jsx)(t, { source: { ...e, page: O.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function D(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: l } = (0, _.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE),
        D = (0, a.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return r()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        L = (0, a.bG)([E.Ay], () => (null != t ? E.Ay.getMember(t.id, D.id) : null)),
        M = (0, a.bG)([T.A], () => !T.A.isFetchingProfile(D.id, t?.id)),
        G = (0, a.bG)([C.A], () => C.A.hidePersonalInformation),
        { pendingAvatar: U, pendingNameplate: k, ...V } = (0, a.cf)([p.A], () => p.A.getPendingChanges(t?.id)),
        w = (0, x.V7)({ userId: D.id, image: U }),
        B = (0, g.lw)({
            pendingValue: k,
            userValue: D?.collectibles?.nameplate,
            guildValue: L?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: H } = (0, g.B0)(D, t?.id);
    return (s.useEffect(() => () => d.h.wait(b.IM), []), G)
        ? (0, i.jsx)(c.A, {})
        : M
          ? (0, i.jsxs)(_.f5, {
                value: l,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: y.intl.format(y.t["/PTB2E"], {
                            helpCenterLink: f.A.getArticleURL(O.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(j.A, { guildId: t.id, onChange: n }),
                                  (0, i.jsx)(A.A, {
                                      profilePreviewTitle: (0, i.jsx)(o.Heading, {
                                          variant: "heading-md/medium",
                                          className: R.Y,
                                          children: y.intl.formatToPlainString(y.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, i.jsx)(h.A, {
                                          ...V,
                                          pendingAvatar: w,
                                          pendingDisplayNameStyles: H,
                                          user: D,
                                          guild: t,
                                          canUsePremiumCustomization: N.Ay.canUsePremiumProfileCustomization(D),
                                          onUpsellClick: P,
                                      }),
                                      nameplatePreview: (0, i.jsx)(m.A, {
                                          ...V,
                                          pendingDisplayNameStyles: H,
                                          user: D,
                                          guildId: t?.id,
                                          nameplate: B,
                                          className: null == B ? R.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, i.jsx)(v.A, {}),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(I.A, {}),
                ],
            })
          : (0, i.jsx)(o.y$y, {});
}
