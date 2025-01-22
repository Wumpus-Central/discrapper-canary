r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(47120);
var a = r(773603);
var o = r(200651),
    s = r(192379),
    l = r(831209),
    u = r(793030),
    c = r(442837),
    d = r(481060),
    f = r(749210),
    p = r(231053),
    h = r(183023),
    _ = r(524444),
    m = r(208049),
    g = r(697426),
    E = r(409673),
    v = r(430824),
    y = r(197115),
    b = r(125900),
    I = r(767434),
    T = r(474936),
    S = r(981631),
    A = r(710111),
    C = r(388032),
    N = r(89107);
function R(e) {
    let { discoverableGuildId: n, closePopout: r, buttonType: i } = e,
        a = s.useCallback(async () => {
            if ((r(), null != n))
                try {
                    await f.Z.joinGuild(n), f.Z.transitionToGuildSync(n);
                } catch {}
        }, [r, n]);
    return i === I.y.GET_NITRO
        ? (0, o.jsx)(y.Z, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: S.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: T.Si.TIER_2,
              size: d.Button.Sizes.SMALL,
              color: d.Button.Colors.CUSTOM,
              onClick: r,
              buttonText: C.intl.string(C.t.pj0XBA)
          })
        : i === I.y.JOIN_GUILD
          ? (0, o.jsx)(d.Button, {
                size: d.Button.Sizes.SMALL,
                fullWidth: !0,
                onClick: a,
                children: C.intl.string(C.t.riu2R0)
            })
          : null;
}
function O(e) {
    let { sound: n, channel: r, closePopout: i, refreshPosition: a } = e,
        f = n.guildId === A.X8,
        y = (0, c.e7)([v.Z], () => v.Z.getGuild(n.guildId)),
        T = !f && null != y,
        [S, O] = s.useState(),
        D = (0, b.V2)({ location: 'SoundmojiGuildInfo' }),
        L = f || T || null != S || !D,
        [x, w] = s.useState(!L);
    s.useEffect(() => {
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
    let { buttonType: P, description: M } = (0, I.Z)(n, r, T, S),
        k = P === I.y.JOIN_GUILD,
        U = !f && x,
        B = s.useMemo(() => (T ? p.JO.createFromGuildRecord(y) : null != S ? p.JO.createFromDiscoverableGuild(S) : void 0), [y, T, S]);
    return U
        ? (0, o.jsx)(_.SE, {})
        : (0, o.jsxs)('div', {
              className: N.infoContainer,
              children: [
                  (0, o.jsxs)(_.W_, {
                      children: [
                          (0, o.jsxs)('div', {
                              className: N.infoExpandedSoundContainer,
                              children: [
                                  (0, o.jsx)(E.ZP, {
                                      refreshEnabled: !0,
                                      buttonOverlay: g.Pb.NONE,
                                      sound: n,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {}
                                  }),
                                  (0, o.jsx)(u.xv, {
                                      variant: 'text-sm/normal',
                                      children: M
                                  })
                              ]
                          }),
                          null != B &&
                              (0, o.jsxs)('div', {
                                  className: N.infoExpandedGuildContainer,
                                  children: [
                                      (0, o.jsx)(u.xv, {
                                          variant: 'eyebrow',
                                          color: 'header-muted',
                                          className: N.infoExpandedGuildTitle,
                                          children: T ? C.intl.string(C.t.tGDabm) : C.intl.string(C.t.rnOmOT)
                                      }),
                                      (0, o.jsx)('div', {
                                          className: N.infoExpandedGuildInfo,
                                          children: (0, o.jsx)(h.Oe, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: T,
                                              isDisplayingJoinGuildButtonInPopout: k
                                          })
                                      }),
                                      (0, o.jsx)(R, {
                                          buttonType: P,
                                          discoverableGuildId: null == S ? void 0 : S.id,
                                          closePopout: i
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, o.jsx)(d.TextBadge, {
                      text: 'BETA',
                      color: l.Z.BG_BRAND,
                      className: N.betaBadge
                  })
              ]
          });
}
