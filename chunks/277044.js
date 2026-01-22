n.d(t, {
    A: () => C,
}),
    n(896048),
    n(492834),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(827734),
    l = n(421380),
    c = n(397927),
    u = n(686956),
    d = n(624793),
    f = n(767143),
    p = n(652176),
    _ = n(796774),
    h = n(807348),
    m = n(69217),
    g = n(71393),
    E = n(465794),
    b = n(704591),
    y = n(586652),
    O = n(788868),
    A = n(652215),
    v = n(980504),
    S = n(985018),
    I = n(331129);

function T(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: a } = e,
        s = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await u.A.joinGuild(t), u.A.transitionToGuildSync(t);
                } catch (e) {}
        }, [n, t]);
    return a === y.E.GET_NITRO
        ? (0, r.jsx)(E.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: {
                  section: A.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT,
              },
              subscriptionTier: O.pe.TIER_2,
              size: l.$n.Sizes.SMALL,
              color: l.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: {
                  textOverride: S.intl.string(S.t.pj0XBN),
              },
          })
        : a === y.E.JOIN_GUILD
          ? (0, r.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                text: S.intl.string(S.t.riu2R5),
                fullWidth: !0,
                onClick: s,
            })
          : null;
}

function C(e) {
    let { sound: t, channel: n, closePopout: l, refreshPosition: u } = e,
        E = t.guildId === v.mV,
        O = (0, s.bG)([g.A], () => g.A.getGuild(t.guildId)),
        A = !E && null != O,
        [C, N] = i.useState(),
        R = (0, b.tj)({
            location: "SoundmojiGuildInfo",
        }),
        w = E || A || null != C || !R,
        [P, D] = i.useState(!w);
    i.useEffect(() => {
        w ||
            (D(!0),
            (0, _.nh)(t.soundId, t.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    D(!1), u();
                }));
    }, [u, w, t.guildId, t.soundId]);
    let { buttonType: x, description: L } = (0, y.A)(t, n, A, C),
        j = x === y.E.JOIN_GUILD,
        M = !E && P,
        k = i.useMemo(
            () => (A ? d.GO.createFromGuildRecord(O) : null != C ? d.GO.createFromDiscoverableGuild(C) : void 0),
            [O, A, C],
        );
    return M
        ? (0, r.jsx)(p.Y0, {})
        : (0, r.jsxs)("div", {
              className: I.op,
              children: [
                  (0, r.jsxs)(p.Uq, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: I.g4,
                              children: [
                                  (0, r.jsx)(m.Ay, {
                                      buttonOverlay: h.If.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(a.EYj, {
                                      variant: "text-sm/normal",
                                      children: L,
                                  }),
                              ],
                          }),
                          null != k &&
                              (0, r.jsxs)("div", {
                                  className: I.Qe,
                                  children: [
                                      (0, r.jsx)(a.EYj, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: I.x$,
                                          children: A ? S.intl.string(S.t.tGDabk) : S.intl.string(S.t.rnOmOa),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: I.Ff,
                                          children: (0, r.jsx)(f.G7, {
                                              expressionSourceGuild: k,
                                              hasJoinedExpressionSourceGuild: A,
                                              isDisplayingJoinGuildButtonInPopout: j,
                                          }),
                                      }),
                                      (0, r.jsx)(T, {
                                          buttonType: x,
                                          discoverableGuildId: null == C ? void 0 : C.id,
                                          closePopout: l,
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(c.LpS, {
                      text: "BETA",
                      color: o.A.colors.BACKGROUND_BRAND.css,
                      className: I.aZ,
                  }),
              ],
          });
}
