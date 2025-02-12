n.d(t, { Z: () => N }), n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    a = n(831209),
    s = n(793030),
    o = n(442837),
    l = n(481060),
    u = n(749210),
    c = n(231053),
    d = n(183023),
    f = n(524444),
    _ = n(208049),
    p = n(697426),
    h = n(409673),
    m = n(430824),
    g = n(197115),
    E = n(125900),
    v = n(767434),
    y = n(474936),
    I = n(981631),
    T = n(710111),
    b = n(388032),
    S = n(42407);
function A(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: a } = e,
        s = r.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await u.Z.joinGuild(t), u.Z.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return a === v.y.GET_NITRO
        ? (0, i.jsx)(g.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: I.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: y.Si.TIER_2,
              size: l.zxk.Sizes.SMALL,
              color: l.zxk.Colors.CUSTOM,
              onClick: n,
              buttonText: b.intl.string(b.t.pj0XBA)
          })
        : a === v.y.JOIN_GUILD
          ? (0, i.jsx)(l.zxk, {
                size: l.zxk.Sizes.SMALL,
                fullWidth: !0,
                onClick: s,
                children: b.intl.string(b.t.riu2R0)
            })
          : null;
}
function N(e) {
    let { sound: t, channel: n, closePopout: u, refreshPosition: g } = e,
        y = t.guildId === T.X8,
        I = (0, o.e7)([m.Z], () => m.Z.getGuild(t.guildId)),
        N = !y && null != I,
        [C, R] = r.useState(),
        O = (0, E.V2)({ location: 'SoundmojiGuildInfo' }),
        D = y || N || null != C || !O,
        [L, x] = r.useState(!D);
    r.useEffect(() => {
        !D &&
            (x(!0),
            (0, _.xU)(t.soundId, t.guildId)
                .then((e) => {
                    R(e);
                })
                .finally(() => {
                    x(!1), g();
                }));
    }, [g, D, t.guildId, t.soundId]);
    let { buttonType: P, description: w } = (0, v.Z)(t, n, N, C),
        M = P === v.y.JOIN_GUILD,
        k = !y && L,
        U = r.useMemo(() => (N ? c.JO.createFromGuildRecord(I) : null != C ? c.JO.createFromDiscoverableGuild(C) : void 0), [I, N, C]);
    return k
        ? (0, i.jsx)(f.SE, {})
        : (0, i.jsxs)('div', {
              className: S.infoContainer,
              children: [
                  (0, i.jsxs)(f.W_, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: S.infoExpandedSoundContainer,
                              children: [
                                  (0, i.jsx)(h.ZP, {
                                      refreshEnabled: !0,
                                      buttonOverlay: p.Pb.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {}
                                  }),
                                  (0, i.jsx)(s.xv, {
                                      variant: 'text-sm/normal',
                                      children: w
                                  })
                              ]
                          }),
                          null != U &&
                              (0, i.jsxs)('div', {
                                  className: S.infoExpandedGuildContainer,
                                  children: [
                                      (0, i.jsx)(s.xv, {
                                          variant: 'eyebrow',
                                          color: 'header-muted',
                                          className: S.infoExpandedGuildTitle,
                                          children: N ? b.intl.string(b.t.tGDabm) : b.intl.string(b.t.rnOmOT)
                                      }),
                                      (0, i.jsx)('div', {
                                          className: S.infoExpandedGuildInfo,
                                          children: (0, i.jsx)(d.Oe, {
                                              expressionSourceGuild: U,
                                              hasJoinedExpressionSourceGuild: N,
                                              isDisplayingJoinGuildButtonInPopout: M
                                          })
                                      }),
                                      (0, i.jsx)(A, {
                                          buttonType: P,
                                          discoverableGuildId: null == C ? void 0 : C.id,
                                          closePopout: u
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsx)(l.IGR, {
                      text: 'BETA',
                      color: a.Z.BG_BRAND,
                      className: S.betaBadge
                  })
              ]
          });
}
