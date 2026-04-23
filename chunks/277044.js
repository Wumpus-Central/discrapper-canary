"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(834730),
    a = n(311907),
    o = n(827734),
    l = n(862482),
    u = n(821609),
    c = n(777666),
    d = n(686956),
    _ = n(624793),
    f = n(767143),
    p = n(652176),
    h = n(796774),
    E = n(807348),
    m = n(69217),
    g = n(71393),
    A = n(725807),
    I = n(704591),
    T = n(586652),
    S = n(788868),
    y = n(652215);
n(980504);
var N = n(985018),
    v = n(532340);
function C(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: s } = e,
        a = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await d.A.joinGuild(t), d.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return s === T.E.GET_NITRO
        ? (0, r.jsx)(A.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: y.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: S.pe.TIER_2,
              size: l.$n.Sizes.SMALL,
              color: l.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: N.intl.string(N.t.pj0XBN) },
          })
        : s === T.E.JOIN_GUILD
          ? (0, r.jsx)(u.$, {
                variant: "primary",
                size: "sm",
                text: N.intl.string(N.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function O(e) {
    let { sound: t, channel: n, closePopout: l, refreshPosition: u } = e,
        d = "0" === t.guildId,
        A = (0, a.bG)([g.A], () => g.A.getGuild(t.guildId)),
        S = !d && null != A,
        [y, O] = i.useState(),
        R = (0, I.tj)({ location: "SoundmojiGuildInfo" }),
        b = d || S || null != y || !R,
        [D, L] = i.useState(!b);
    i.useEffect(() => {
        b ||
            (L(!0),
            (0, h.nh)(t.soundId, t.guildId)
                .then((e) => {
                    O(e);
                })
                .finally(() => {
                    L(!1), u();
                }));
    }, [u, b, t.guildId, t.soundId]);
    let { buttonType: w, description: M } = (0, T.A)(t, n, S, y),
        P = w === T.E.JOIN_GUILD,
        x = !d && D,
        k = i.useMemo(
            () => (S ? _.GO.createFromGuildRecord(A) : null != y ? _.GO.createFromDiscoverableGuild(y) : void 0),
            [A, S, y],
        );
    return x
        ? (0, r.jsx)(p.Y0, {})
        : (0, r.jsxs)("div", {
              className: v.op,
              children: [
                  (0, r.jsxs)(p.Uq, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: v.g4,
                              children: [
                                  (0, r.jsx)(m.Ay, {
                                      buttonOverlay: E.If.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(s.E, { variant: "text-sm/normal", children: M }),
                              ],
                          }),
                          null != k &&
                              (0, r.jsxs)("div", {
                                  className: v.Qe,
                                  children: [
                                      (0, r.jsx)(s.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: v.x$,
                                          children: S ? N.intl.string(N.t.tGDabk) : N.intl.string(N.t.rnOmOa),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: v.Ff,
                                          children: (0, r.jsx)(f.G7, {
                                              expressionSourceGuild: k,
                                              hasJoinedExpressionSourceGuild: S,
                                              isDisplayingJoinGuildButtonInPopout: P,
                                          }),
                                      }),
                                      (0, r.jsx)(C, { buttonType: w, discoverableGuildId: y?.id, closePopout: l }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(c.Lp, { text: "BETA", color: o.A.colors.BACKGROUND_BRAND.css, className: v.aZ }),
              ],
          });
}
