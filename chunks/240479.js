n.d(t, { Z: () => A }), n(388685), n(457542), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(692547),
    l = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(231053),
    f = n(183023),
    p = n(524444),
    _ = n(208049),
    m = n(697426),
    h = n(294206),
    g = n(430824),
    E = n(767714),
    b = n(125900),
    y = n(767434),
    O = n(474936),
    v = n(981631),
    S = n(710111),
    I = n(388032),
    T = n(937309);
function C(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: a } = e,
        o = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await u.Z.joinGuild(t), u.Z.transitionToGuildSync(t);
                } catch (e) {}
        }, [n, t]);
    return a === y.y.GET_NITRO
        ? (0, r.jsx)(E.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: v.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: O.Si.TIER_2,
              size: l.zx.Sizes.SMALL,
              color: l.zx.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: I.intl.string(I.t.pj0XBN) },
          })
        : a === y.y.JOIN_GUILD
          ? (0, r.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                text: I.intl.string(I.t.riu2R5),
                fullWidth: !0,
                onClick: o,
            })
          : null;
}
function A(e) {
    let { sound: t, channel: n, closePopout: l, refreshPosition: u } = e,
        E = t.guildId === S.X8,
        O = (0, o.e7)([g.Z], () => g.Z.getGuild(t.guildId)),
        v = !E && null != O,
        [A, N] = i.useState(),
        P = (0, b.V2)({ location: "SoundmojiGuildInfo" }),
        R = E || v || null != A || !P,
        [D, w] = i.useState(!R);
    i.useEffect(() => {
        R ||
            (w(!0),
            (0, _.xU)(t.soundId, t.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    w(!1), u();
                }));
    }, [u, R, t.guildId, t.soundId]);
    let { buttonType: x, description: L } = (0, y.Z)(t, n, v, A),
        j = x === y.y.JOIN_GUILD,
        M = !E && D,
        k = i.useMemo(
            () => (v ? d.JO.createFromGuildRecord(O) : null != A ? d.JO.createFromDiscoverableGuild(A) : void 0),
            [O, v, A],
        );
    return M
        ? (0, r.jsx)(p.SE, {})
        : (0, r.jsxs)("div", {
              className: T.infoContainer,
              children: [
                  (0, r.jsxs)(p.W_, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: T.infoExpandedSoundContainer,
                              children: [
                                  (0, r.jsx)(h.ZP, {
                                      buttonOverlay: m.Pb.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(a.xvT, {
                                      variant: "text-sm/normal",
                                      children: L,
                                  }),
                              ],
                          }),
                          null != k &&
                              (0, r.jsxs)("div", {
                                  className: T.infoExpandedGuildContainer,
                                  children: [
                                      (0, r.jsx)(a.xvT, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: T.infoExpandedGuildTitle,
                                          children: v ? I.intl.string(I.t.tGDabk) : I.intl.string(I.t.rnOmOa),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: T.infoExpandedGuildInfo,
                                          children: (0, r.jsx)(f.Oe, {
                                              expressionSourceGuild: k,
                                              hasJoinedExpressionSourceGuild: v,
                                              isDisplayingJoinGuildButtonInPopout: j,
                                          }),
                                      }),
                                      (0, r.jsx)(C, {
                                          buttonType: x,
                                          discoverableGuildId: null == A ? void 0 : A.id,
                                          closePopout: l,
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(c.IGR, {
                      text: "BETA",
                      color: s.Z.colors.BACKGROUND_BRAND.css,
                      className: T.betaBadge,
                  }),
              ],
          });
}
