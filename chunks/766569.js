n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(192308),
    d = n(289873),
    u = n(834730),
    c = n(534514),
    g = n(73153),
    m = n(974544),
    _ = n(793574),
    A = n(688810),
    h = n(512213),
    p = n(919395),
    x = n(884546),
    E = n(287070),
    T = n(101058),
    S = n(836602),
    f = n(622543),
    b = n(696451),
    C = n(351906),
    v = n(287809),
    N = n(975571),
    I = n(927578),
    y = n(159001),
    j = n(65767),
    O = n(281052),
    R = n(687021),
    L = n(652215),
    D = n(985018),
    P = n(9606);
function G(e) {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await n.e("65281").then(n.bind(n, 547352));
        return (n) => (0, i.jsx)(t, { source: { ...e, page: L.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function M(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: l } = (0, A.Ay)(_.A.USER_SETTINGS_GUILD_PROFILE),
        o = (0, r.bG)([v.default], () => {
            let e = v.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        M = (0, r.bG)([b.Ay], () => (null != t ? b.Ay.getMember(t.id, o.id) : null)),
        U = (0, r.bG)([f.A], () => !f.A.isFetchingProfile(o.id, t?.id)),
        k = (0, r.bG)([C.A], () => C.A.hidePersonalInformation),
        { pendingAvatar: w, pendingNameplate: V, ...B } = (0, r.cf)([S.A], () => S.A.getPendingChanges(t?.id)),
        F = (0, T.V7)({ userId: o.id, image: w }),
        z = (0, p.lw)({
            pendingValue: V,
            userValue: o?.collectibles?.nameplate,
            guildValue: M?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: H } = (0, p.B0)(o, t?.id);
    return (s.useEffect(() => () => g.h.wait(y.IM), []), k)
        ? (0, i.jsx)(m.A, {})
        : U
          ? (0, i.jsxs)(A.f5, {
                value: l,
                children: [
                    (0, i.jsx)(u.E, {
                        variant: "text-sm/normal",
                        children: D.intl.format(D.t["/PTB2E"], {
                            helpCenterLink: N.A.getArticleURL(L.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(R.A, { guildId: t.id, onChange: n }),
                                  (0, i.jsx)(x.A, {
                                      profilePreviewTitle: (0, i.jsx)(c.D, {
                                          variant: "heading-md/medium",
                                          className: P.Y,
                                          children: D.intl.formatToPlainString(D.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, i.jsx)(E.A, {
                                          ...B,
                                          pendingAvatar: F,
                                          pendingDisplayNameStyles: H,
                                          user: o,
                                          guild: t,
                                          canUsePremiumCustomization: I.Ay.canUsePremiumProfileCustomization(o),
                                          onUpsellClick: G,
                                      }),
                                      nameplatePreview: (0, i.jsx)(h.A, {
                                          ...B,
                                          pendingDisplayNameStyles: H,
                                          user: o,
                                          guildId: t?.id,
                                          nameplate: z,
                                          className: null == z ? P.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, i.jsx)(O.A, {}),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(j.A, {}),
                ],
            })
          : (0, i.jsx)(d.y, {});
}
