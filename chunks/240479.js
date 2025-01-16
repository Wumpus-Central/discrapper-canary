r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(47120);
var a = r(773603);
var s = r(200651),
    o = r(192379),
    l = r(831209),
    u = r(793030),
    c = r(442837),
    d = r(481060),
    f = r(749210),
    _ = r(231053),
    h = r(183023),
    p = r(524444),
    m = r(208049),
    g = r(697426),
    E = r(409673),
    v = r(430824),
    I = r(197115),
    T = r(125900),
    b = r(767434),
    y = r(474936),
    S = r(981631),
    A = r(710111),
    N = r(388032),
    C = r(89107);
function R(e) {
    let { discoverableGuildId: n, closePopout: r, buttonType: i } = e,
        a = o.useCallback(async () => {
            if ((r(), null != n))
                try {
                    await f.Z.joinGuild(n), f.Z.transitionToGuildSync(n);
                } catch {}
        }, [r, n]);
    return i === b.y.GET_NITRO
        ? (0, s.jsx)(I.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: S.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: y.Si.TIER_2,
              size: d.Button.Sizes.SMALL,
              color: d.Button.Colors.CUSTOM,
              onClick: r,
              buttonText: N.intl.string(N.t.pj0XBA)
          })
        : i === b.y.JOIN_GUILD
          ? (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.SMALL,
                fullWidth: !0,
                onClick: a,
                children: N.intl.string(N.t.riu2R0)
            })
          : null;
}
function O(e) {
    let { sound: n, channel: r, closePopout: i, refreshPosition: a } = e,
        f = n.guildId === A.X8,
        I = (0, c.e7)([v.Z], () => v.Z.getGuild(n.guildId)),
        y = !f && null != I,
        [S, O] = o.useState(),
        D = (0, T.V2)({ location: 'SoundmojiGuildInfo' }),
        L = f || y || null != S || !D,
        [x, w] = o.useState(!L);
    o.useEffect(() => {
        if (!L)
            w(!0),
                (0, m.xU)(n.soundId, n.guildId)
                    .then((e) => {
                        O(e);
                    })
                    .finally(() => {
                        w(!1), a();
                    });
    }, [a, L, n.guildId, n.soundId]);
    let { buttonType: P, description: M } = (0, b.Z)(n, r, y, S),
        k = P === b.y.JOIN_GUILD,
        U = !f && x,
        B = o.useMemo(() => (y ? _.JO.createFromGuildRecord(I) : null != S ? _.JO.createFromDiscoverableGuild(S) : void 0), [I, y, S]);
    return U
        ? (0, s.jsx)(p.SE, {})
        : (0, s.jsxs)('div', {
              className: C.infoContainer,
              children: [
                  (0, s.jsxs)(p.W_, {
                      children: [
                          (0, s.jsxs)('div', {
                              className: C.infoExpandedSoundContainer,
                              children: [
                                  (0, s.jsx)(E.ZP, {
                                      refreshEnabled: !0,
                                      buttonOverlay: g.Pb.NONE,
                                      sound: n,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {}
                                  }),
                                  (0, s.jsx)(u.xv, {
                                      variant: 'text-sm/normal',
                                      children: M
                                  })
                              ]
                          }),
                          null != B &&
                              (0, s.jsxs)('div', {
                                  className: C.infoExpandedGuildContainer,
                                  children: [
                                      (0, s.jsx)(u.xv, {
                                          variant: 'eyebrow',
                                          color: 'header-muted',
                                          className: C.infoExpandedGuildTitle,
                                          children: y ? N.intl.string(N.t.tGDabm) : N.intl.string(N.t.rnOmOT)
                                      }),
                                      (0, s.jsx)('div', {
                                          className: C.infoExpandedGuildInfo,
                                          children: (0, s.jsx)(h.Oe, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: y,
                                              isDisplayingJoinGuildButtonInPopout: k
                                          })
                                      }),
                                      (0, s.jsx)(R, {
                                          buttonType: P,
                                          discoverableGuildId: null == S ? void 0 : S.id,
                                          closePopout: i
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, s.jsx)(d.TextBadge, {
                      text: 'BETA',
                      color: l.Z.BG_BRAND,
                      className: C.betaBadge
                  })
              ]
          });
}
