n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    a = n(284009),
    l = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(974544),
    u = n(793574),
    _ = n(688810),
    m = n(550111),
    A = n(919395),
    g = n(884546),
    h = n(287070),
    x = n(101058),
    p = n(836602),
    E = n(622543),
    C = n(696451),
    T = n(351906),
    S = n(287809),
    I = n(975571),
    f = n(927578),
    N = n(159001),
    b = n(65767),
    j = n(281052),
    v = n(687021),
    O = n(652215),
    R = n(985018),
    y = n(61687);
function P(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await n.e("65281").then(n.bind(n, 547352));
        return (n) => (0, i.jsx)(t, { source: { ...e, page: O.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function L(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: a } = (0, _.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE),
        L = (0, r.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        D = (0, r.bG)([C.Ay], () => (null != t ? C.Ay.getMember(t.id, L.id) : null)),
        G = (0, r.bG)([E.A], () => !E.A.isFetchingProfile(L.id, t?.id)),
        M = (0, r.bG)([T.A], () => T.A.hidePersonalInformation),
        { pendingAvatar: U, pendingNameplate: k, ...V } = (0, r.cf)([p.A], () => p.A.getPendingChanges(t?.id)),
        w = (0, x.V7)({ userId: L.id, image: U }),
        H = (0, A.lw)({
            pendingValue: k,
            userValue: L?.collectibles?.nameplate,
            guildValue: D?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: B } = (0, A.B0)(L, t?.id);
    return (s.useEffect(() => () => c.h.wait(N.IM), []), M)
        ? (0, i.jsx)(d.A, {})
        : G
          ? (0, i.jsxs)(_.f5, {
                value: a,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: R.intl.format(R.t["/PTB2E"], {
                            helpCenterLink: I.A.getArticleURL(O.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(v.A, { guildId: t.id, onChange: n }),
                                  (0, i.jsx)(g.A, {
                                      profilePreviewTitle: (0, i.jsx)(o.Heading, {
                                          variant: "heading-md/medium",
                                          className: y.Y,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, i.jsx)(h.A, {
                                          ...V,
                                          pendingAvatar: w,
                                          pendingDisplayNameStyles: B,
                                          user: L,
                                          guild: t,
                                          canUsePremiumCustomization: f.Ay.canUsePremiumProfileCustomization(L),
                                          onUpsellClick: P,
                                      }),
                                      nameplatePreview: (0, i.jsx)(m.A, {
                                          ...V,
                                          pendingDisplayNameStyles: B,
                                          user: L,
                                          guildId: t?.id,
                                          nameplate: H,
                                          className: null == H ? y.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, i.jsx)(j.A, {}),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(b.A, {}),
                ],
            })
          : (0, i.jsx)(o.y$y, {});
}
