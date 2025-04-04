n.d(t, { Z: () => N }), n(47120), n(773603), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(831209),
    a = n(793030),
    s = n(442837),
    l = n(481060),
    c = n(749210),
    u = n(231053),
    d = n(183023),
    f = n(524444),
    _ = n(208049),
    p = n(697426),
    h = n(294206),
    m = n(430824),
    g = n(197115),
    E = n(125900),
    b = n(767434),
    y = n(474936),
    v = n(981631),
    O = n(710111),
    I = n(388032),
    S = n(367753);
function T(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: o } = e,
        a = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await c.Z.joinGuild(t), c.Z.transitionToGuildSync(t);
                } catch (e) {}
        }, [n, t]);
    return o === b.y.GET_NITRO
        ? (0, r.jsx)(g.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: v.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: y.Si.TIER_2,
              size: l.zxk.Sizes.SMALL,
              color: l.zxk.Colors.CUSTOM,
              onClick: n,
              buttonText: I.NW.string(I.t.pj0XBA)
          })
        : o === b.y.JOIN_GUILD
          ? (0, r.jsx)(l.zxk, {
                size: l.zxk.Sizes.SMALL,
                fullWidth: !0,
                onClick: a,
                children: I.NW.string(I.t.riu2R0)
            })
          : null;
}
function N(e) {
    let { sound: t, channel: n, closePopout: c, refreshPosition: g } = e,
        y = t.guildId === O.X8,
        v = (0, s.e7)([m.Z], () => m.Z.getGuild(t.guildId)),
        N = !y && null != v,
        [A, C] = i.useState(),
        R = (0, E.V2)({ location: 'SoundmojiGuildInfo' }),
        P = y || N || null != A || !R,
        [w, D] = i.useState(!P);
    i.useEffect(() => {
        P ||
            (D(!0),
            (0, _.xU)(t.soundId, t.guildId)
                .then((e) => {
                    C(e);
                })
                .finally(() => {
                    D(!1), g();
                }));
    }, [g, P, t.guildId, t.soundId]);
    let { buttonType: L, description: x } = (0, b.Z)(t, n, N, A),
        M = L === b.y.JOIN_GUILD,
        k = !y && w,
        j = i.useMemo(() => (N ? u.JO.createFromGuildRecord(v) : null != A ? u.JO.createFromDiscoverableGuild(A) : void 0), [v, N, A]);
    return k
        ? (0, r.jsx)(f.SE, {})
        : (0, r.jsxs)('div', {
              className: S.infoContainer,
              children: [
                  (0, r.jsxs)(f.W_, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: S.infoExpandedSoundContainer,
                              children: [
                                  (0, r.jsx)(h.ZP, {
                                      refreshEnabled: !0,
                                      buttonOverlay: p.Pb.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {}
                                  }),
                                  (0, r.jsx)(a.xv, {
                                      variant: 'text-sm/normal',
                                      children: x
                                  })
                              ]
                          }),
                          null != j &&
                              (0, r.jsxs)('div', {
                                  className: S.infoExpandedGuildContainer,
                                  children: [
                                      (0, r.jsx)(a.xv, {
                                          variant: 'eyebrow',
                                          color: 'header-muted',
                                          className: S.infoExpandedGuildTitle,
                                          children: N ? I.NW.string(I.t.tGDabm) : I.NW.string(I.t.rnOmOT)
                                      }),
                                      (0, r.jsx)('div', {
                                          className: S.infoExpandedGuildInfo,
                                          children: (0, r.jsx)(d.Oe, {
                                              expressionSourceGuild: j,
                                              hasJoinedExpressionSourceGuild: N,
                                              isDisplayingJoinGuildButtonInPopout: M
                                          })
                                      }),
                                      (0, r.jsx)(T, {
                                          buttonType: L,
                                          discoverableGuildId: null == A ? void 0 : A.id,
                                          closePopout: c
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsx)(l.IGR, {
                      text: 'BETA',
                      color: o.Z.BG_BRAND,
                      className: S.betaBadge
                  })
              ]
          });
}
