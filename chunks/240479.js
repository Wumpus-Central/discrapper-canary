n.d(t, { Z: () => C }), n(388685), n(457542), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(831209),
    o = n(793030),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(231053),
    f = n(183023),
    _ = n(524444),
    p = n(208049),
    h = n(697426),
    m = n(294206),
    g = n(430824),
    E = n(767714),
    b = n(125900),
    y = n(767434),
    O = n(474936),
    v = n(981631),
    I = n(710111),
    T = n(388032),
    S = n(937309);
function A(e) {
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
              textOptions: { textOverride: T.intl.string(T.t.pj0XBN) },
          })
        : a === y.y.JOIN_GUILD
          ? (0, r.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                text: T.intl.string(T.t.riu2R5),
                fullWidth: !0,
                onClick: o,
            })
          : null;
}
function C(e) {
    let { sound: t, channel: n, closePopout: l, refreshPosition: u } = e,
        E = t.guildId === I.X8,
        O = (0, s.e7)([g.Z], () => g.Z.getGuild(t.guildId)),
        v = !E && null != O,
        [C, N] = i.useState(),
        R = (0, b.V2)({ location: "SoundmojiGuildInfo" }),
        P = E || v || null != C || !R,
        [w, D] = i.useState(!P);
    i.useEffect(() => {
        P ||
            (D(!0),
            (0, p.xU)(t.soundId, t.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    D(!1), u();
                }));
    }, [u, P, t.guildId, t.soundId]);
    let { buttonType: x, description: L } = (0, y.Z)(t, n, v, C),
        M = x === y.y.JOIN_GUILD,
        j = !E && w,
        k = i.useMemo(
            () => (v ? d.JO.createFromGuildRecord(O) : null != C ? d.JO.createFromDiscoverableGuild(C) : void 0),
            [O, v, C],
        );
    return j
        ? (0, r.jsx)(_.SE, {})
        : (0, r.jsxs)("div", {
              className: S.infoContainer,
              children: [
                  (0, r.jsxs)(_.W_, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: S.infoExpandedSoundContainer,
                              children: [
                                  (0, r.jsx)(m.ZP, {
                                      buttonOverlay: h.Pb.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(o.xvT, {
                                      variant: "text-sm/normal",
                                      children: L,
                                  }),
                              ],
                          }),
                          null != k &&
                              (0, r.jsxs)("div", {
                                  className: S.infoExpandedGuildContainer,
                                  children: [
                                      (0, r.jsx)(o.xvT, {
                                          variant: "eyebrow",
                                          color: "header-muted",
                                          className: S.infoExpandedGuildTitle,
                                          children: v ? T.intl.string(T.t.tGDabk) : T.intl.string(T.t.rnOmOa),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: S.infoExpandedGuildInfo,
                                          children: (0, r.jsx)(f.Oe, {
                                              expressionSourceGuild: k,
                                              hasJoinedExpressionSourceGuild: v,
                                              isDisplayingJoinGuildButtonInPopout: M,
                                          }),
                                      }),
                                      (0, r.jsx)(A, {
                                          buttonType: x,
                                          discoverableGuildId: null == C ? void 0 : C.id,
                                          closePopout: l,
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(c.IGR, {
                      text: "BETA",
                      color: a.Z.BG_BRAND,
                      className: S.betaBadge,
                  }),
              ],
          });
}
