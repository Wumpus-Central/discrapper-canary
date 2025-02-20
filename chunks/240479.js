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
    p = n(208049),
    _ = n(697426),
    h = n(409673),
    m = n(430824),
    g = n(197115),
    E = n(125900),
    v = n(767434),
    b = n(474936),
    y = n(981631),
    O = n(710111),
    S = n(388032),
    I = n(595530);
function T(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: o } = e,
        a = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await c.Z.joinGuild(t), c.Z.transitionToGuildSync(t);
                } catch (e) {}
        }, [n, t]);
    return o === v.y.GET_NITRO
        ? (0, r.jsx)(g.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: y.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: b.Si.TIER_2,
              size: l.zxk.Sizes.SMALL,
              color: l.zxk.Colors.CUSTOM,
              onClick: n,
              buttonText: S.NW.string(S.t.pj0XBA)
          })
        : o === v.y.JOIN_GUILD
          ? (0, r.jsx)(l.zxk, {
                size: l.zxk.Sizes.SMALL,
                fullWidth: !0,
                onClick: a,
                children: S.NW.string(S.t.riu2R0)
            })
          : null;
}
function N(e) {
    let { sound: t, channel: n, closePopout: c, refreshPosition: g } = e,
        b = t.guildId === O.X8,
        y = (0, s.e7)([m.Z], () => m.Z.getGuild(t.guildId)),
        N = !b && null != y,
        [A, C] = i.useState(),
        R = (0, E.V2)({ location: 'SoundmojiGuildInfo' }),
        P = b || N || null != A || !R,
        [w, D] = i.useState(!P);
    i.useEffect(() => {
        !P &&
            (D(!0),
            (0, p.xU)(t.soundId, t.guildId)
                .then((e) => {
                    C(e);
                })
                .finally(() => {
                    D(!1), g();
                }));
    }, [g, P, t.guildId, t.soundId]);
    let { buttonType: x, description: L } = (0, v.Z)(t, n, N, A),
        M = x === v.y.JOIN_GUILD,
        k = !b && w,
        j = i.useMemo(() => (N ? u.JO.createFromGuildRecord(y) : null != A ? u.JO.createFromDiscoverableGuild(A) : void 0), [y, N, A]);
    return k
        ? (0, r.jsx)(f.SE, {})
        : (0, r.jsxs)('div', {
              className: I.infoContainer,
              children: [
                  (0, r.jsxs)(f.W_, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: I.infoExpandedSoundContainer,
                              children: [
                                  (0, r.jsx)(h.ZP, {
                                      refreshEnabled: !0,
                                      buttonOverlay: _.Pb.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {}
                                  }),
                                  (0, r.jsx)(a.xv, {
                                      variant: 'text-sm/normal',
                                      children: L
                                  })
                              ]
                          }),
                          null != j &&
                              (0, r.jsxs)('div', {
                                  className: I.infoExpandedGuildContainer,
                                  children: [
                                      (0, r.jsx)(a.xv, {
                                          variant: 'eyebrow',
                                          color: 'header-muted',
                                          className: I.infoExpandedGuildTitle,
                                          children: N ? S.NW.string(S.t.tGDabm) : S.NW.string(S.t.rnOmOT)
                                      }),
                                      (0, r.jsx)('div', {
                                          className: I.infoExpandedGuildInfo,
                                          children: (0, r.jsx)(d.Oe, {
                                              expressionSourceGuild: j,
                                              hasJoinedExpressionSourceGuild: N,
                                              isDisplayingJoinGuildButtonInPopout: M
                                          })
                                      }),
                                      (0, r.jsx)(T, {
                                          buttonType: x,
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
                      className: I.betaBadge
                  })
              ]
          });
}
