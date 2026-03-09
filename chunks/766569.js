n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(974544),
    u = n(793574),
    _ = n(688810),
    g = n(550111),
    m = n(919395),
    A = n(884546),
    h = n(287070),
    p = n(101058),
    x = n(836602),
    E = n(622543),
    T = n(696451),
    S = n(351906),
    C = n(287809),
    f = n(975571),
    I = n(927578),
    b = n(159001),
    N = n(65767),
    v = n(281052),
    j = n(687021),
    O = n(652215),
    R = n(985018),
    y = n(764121);
function P(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await n.e("65281").then(n.bind(n, 547352));
        return (n) => (0, i.jsx)(t, { source: { ...e, page: O.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function D(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: l } = (0, _.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE),
        D = (0, r.bG)([C.default], () => {
            let e = C.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        L = (0, r.bG)([T.Ay], () => (null != t ? T.Ay.getMember(t.id, D.id) : null)),
        G = (0, r.bG)([E.A], () => !E.A.isFetchingProfile(D.id, t?.id)),
        M = (0, r.bG)([S.A], () => S.A.hidePersonalInformation),
        { pendingAvatar: U, pendingNameplate: k, ...V } = (0, r.cf)([x.A], () => x.A.getPendingChanges(t?.id)),
        w = (0, p.V7)({ userId: D.id, image: U }),
        H = (0, m.lw)({
            pendingValue: k,
            userValue: D?.collectibles?.nameplate,
            guildValue: L?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: B } = (0, m.B0)(D, t?.id);
    return (s.useEffect(() => () => d.h.wait(b.IM), []), M)
        ? (0, i.jsx)(c.A, {})
        : G
          ? (0, i.jsxs)(_.f5, {
                value: l,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: R.intl.format(R.t["/PTB2E"], {
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
                                          className: y.Y,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, i.jsx)(h.A, {
                                          ...V,
                                          pendingAvatar: w,
                                          pendingDisplayNameStyles: B,
                                          user: D,
                                          guild: t,
                                          canUsePremiumCustomization: I.Ay.canUsePremiumProfileCustomization(D),
                                          onUpsellClick: P,
                                      }),
                                      nameplatePreview: (0, i.jsx)(g.A, {
                                          ...V,
                                          pendingDisplayNameStyles: B,
                                          user: D,
                                          guildId: t?.id,
                                          nameplate: H,
                                          className: null == H ? y.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, i.jsx)(v.A, {}),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(N.A, {}),
                ],
            })
          : (0, i.jsx)(o.y$y, {});
}
