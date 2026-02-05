n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    l = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(974544),
    u = n(793574),
    _ = n(688810),
    m = n(550111),
    A = n(919395),
    g = n(884546),
    E = n(287070),
    h = n(101058),
    p = n(836602),
    C = n(622543),
    x = n(696451),
    T = n(351906),
    I = n(287809),
    S = n(975571),
    f = n(927578),
    N = n(159001),
    b = n(65767),
    R = n(281052),
    v = n(687021),
    O = n(652215),
    j = n(985018),
    P = n(764121);
function y(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await n.e("65281").then(n.bind(n, 547352));
        return (n) => (0, i.jsx)(t, { source: { ...e, page: O.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function L(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: r } = (0, _.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE),
        L = (0, l.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        D = (0, l.bG)([x.Ay], () => (null != t ? x.Ay.getMember(t.id, L.id) : null)),
        M = (0, l.bG)([C.A], () => !C.A.isFetchingProfile(L.id, t?.id)),
        G = (0, l.bG)([T.A], () => T.A.hidePersonalInformation),
        { pendingAvatar: U, pendingNameplate: k, ...B } = (0, l.cf)([p.A], () => p.A.getPendingChanges(t?.id)),
        w = (0, h.V7)({ userId: L.id, image: U }),
        H = (0, A.lw)({
            pendingValue: k,
            userValue: L?.collectibles?.nameplate,
            guildValue: D?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: V } = (0, A.B0)(L, t?.id);
    return (s.useEffect(() => () => c.h.wait(N.IM), []), G)
        ? (0, i.jsx)(d.A, {})
        : M
          ? (0, i.jsxs)(_.f5, {
                value: r,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: S.A.getArticleURL(O.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(v.A, { guildId: t.id, onChange: n }),
                                  (0, i.jsx)(g.A, {
                                      profilePreviewTitle: (0, i.jsx)(o.Heading, {
                                          variant: "heading-md/medium",
                                          className: P.Y,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, i.jsx)(E.A, {
                                          ...B,
                                          pendingAvatar: w,
                                          pendingDisplayNameStyles: V,
                                          user: L,
                                          guild: t,
                                          canUsePremiumCustomization: f.Ay.canUsePremiumProfileCustomization(L),
                                          onUpsellClick: y,
                                      }),
                                      nameplatePreview: (0, i.jsx)(m.A, {
                                          ...B,
                                          pendingDisplayNameStyles: V,
                                          user: L,
                                          guildId: t?.id,
                                          nameplate: H,
                                          className: null == H ? P.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, i.jsx)(R.A, {}),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(b.A, {}),
                ],
            })
          : (0, i.jsx)(o.y$y, {});
}
