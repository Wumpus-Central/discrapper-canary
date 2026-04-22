"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(834730),
    r = n(311907),
    a = n(827734),
    o = n(862482),
    c = n(821609),
    u = n(777666),
    d = n(686956),
    h = n(624793),
    m = n(767143),
    p = n(652176),
    f = n(796774),
    g = n(807348),
    _ = n(69217),
    x = n(71393),
    A = n(725807),
    C = n(704591),
    E = n(586652),
    I = n(788868),
    v = n(652215);
n(980504);
var y = n(985018),
    S = n(532340);
function b(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: s } = e,
        r = l.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await d.A.joinGuild(t), d.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return s === E.E.GET_NITRO
        ? (0, i.jsx)(A.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: v.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: I.pe.TIER_2,
              size: o.$n.Sizes.SMALL,
              color: o.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: y.intl.string(y.t.pj0XBN) },
          })
        : s === E.E.JOIN_GUILD
          ? (0, i.jsx)(c.$, {
                variant: "primary",
                size: "sm",
                text: y.intl.string(y.t.riu2R5),
                fullWidth: !0,
                onClick: r,
            })
          : null;
}
function N(e) {
    let { sound: t, channel: n, closePopout: o, refreshPosition: c } = e,
        d = "0" === t.guildId,
        A = (0, r.bG)([x.A], () => x.A.getGuild(t.guildId)),
        I = !d && null != A,
        [v, N] = l.useState(),
        T = (0, C.tj)({ location: "SoundmojiGuildInfo" }),
        j = d || I || null != v || !T,
        [R, w] = l.useState(!j);
    l.useEffect(() => {
        j ||
            (w(!0),
            (0, f.nh)(t.soundId, t.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    w(!1), c();
                }));
    }, [c, j, t.guildId, t.soundId]);
    let { buttonType: L, description: M } = (0, E.A)(t, n, I, v),
        k = L === E.E.JOIN_GUILD,
        O = !d && R,
        P = l.useMemo(
            () => (I ? h.GO.createFromGuildRecord(A) : null != v ? h.GO.createFromDiscoverableGuild(v) : void 0),
            [A, I, v],
        );
    return O
        ? (0, i.jsx)(p.Y0, {})
        : (0, i.jsxs)("div", {
              className: S.op,
              children: [
                  (0, i.jsxs)(p.Uq, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: S.g4,
                              children: [
                                  (0, i.jsx)(_.Ay, {
                                      buttonOverlay: g.If.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, i.jsx)(s.E, { variant: "text-sm/normal", children: M }),
                              ],
                          }),
                          null != P &&
                              (0, i.jsxs)("div", {
                                  className: S.Qe,
                                  children: [
                                      (0, i.jsx)(s.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: S.x$,
                                          children: I ? y.intl.string(y.t.tGDabk) : y.intl.string(y.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: S.Ff,
                                          children: (0, i.jsx)(m.G7, {
                                              expressionSourceGuild: P,
                                              hasJoinedExpressionSourceGuild: I,
                                              isDisplayingJoinGuildButtonInPopout: k,
                                          }),
                                      }),
                                      (0, i.jsx)(b, { buttonType: L, discoverableGuildId: v?.id, closePopout: o }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)(u.Lp, { text: "BETA", color: a.A.colors.BACKGROUND_BRAND.css, className: S.aZ }),
              ],
          });
}
