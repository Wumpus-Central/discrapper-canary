n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    l = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(974544),
    u = n(793574),
    _ = n(58149),
    m = n(688810),
    A = n(550111),
    g = n(919395),
    E = n(884546),
    h = n(287070),
    p = n(101058),
    C = n(622543),
    x = n(696451),
    T = n(351906),
    I = n(287809),
    S = n(975571),
    f = n(927578),
    N = n(159001),
    b = n(833336),
    R = n(65767),
    v = n(281052),
    O = n(687021),
    j = n(652215),
    P = n(985018),
    y = n(764121);
function L(e) {
    (0, o.mMO)(async () => {
        let { default: t } = await n.e("65281").then(n.bind(n, 547352));
        return (n) => (0, i.jsx)(t, { source: { ...e, page: j.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function D(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, m.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE),
        r = (0, l.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        D = (0, l.bG)([x.Ay], () => (null != t ? x.Ay.getMember(t.id, r.id) : null)),
        M = (0, l.bG)([C.A], () => !C.A.isFetchingProfile(r.id, t?.id)),
        G = (0, l.bG)([T.A], () => T.A.hidePersonalInformation),
        {
            source: U,
            pendingAvatar: k,
            pendingNameplate: B,
            ...w
        } = (0, l.cf)([b.A], () => ({ ...b.A.getAllPending(), source: b.A.getSource() })),
        H = (0, p.V7)({ userId: r.id, image: k }),
        V = (0, g.lw)({
            pendingValue: B,
            userValue: r?.collectibles?.nameplate,
            guildValue: D?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: F } = (0, g.B0)(r, t?.id);
    return (s.useEffect(() => () => c.h.wait(N.IM), []),
    s.useEffect(() => {
        null != U &&
            _.Ay.trackWithMetadata(j.HAw.SETTINGS_PANE_VIEWED, {
                settings_type: "guild",
                destination_pane: j.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                source: U,
            });
    }, [U]),
    G)
        ? (0, i.jsx)(d.A, {})
        : M
          ? (0, i.jsxs)(m.f5, {
                value: n,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: P.intl.format(P.t["/PTB2E"], {
                            helpCenterLink: S.A.getArticleURL(j.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(O.A, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, N.JJ)(e);
                                      },
                                  }),
                                  (0, i.jsx)(E.A, {
                                      profilePreviewTitle: (0, i.jsx)(o.Heading, {
                                          variant: "heading-md/medium",
                                          className: y.Y,
                                          children: P.intl.formatToPlainString(P.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, i.jsx)(h.A, {
                                          ...w,
                                          pendingAvatar: H,
                                          pendingDisplayNameStyles: F,
                                          user: r,
                                          guild: t,
                                          canUsePremiumCustomization: f.Ay.canUsePremiumProfileCustomization(r),
                                          onUpsellClick: L,
                                      }),
                                      nameplatePreview: (0, i.jsx)(A.A, {
                                          ...w,
                                          pendingDisplayNameStyles: F,
                                          user: r,
                                          guildId: t?.id,
                                          nameplate: V,
                                          className: null == V ? y.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, i.jsx)(v.A, {}),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(R.A, {}),
                ],
            })
          : (0, i.jsx)(o.y$y, {});
}
