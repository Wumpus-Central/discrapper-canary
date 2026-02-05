"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(827734),
    l = n(421380),
    u = n(397927),
    c = n(686956),
    d = n(624793),
    _ = n(767143),
    f = n(652176),
    p = n(796774),
    h = n(807348),
    m = n(69217),
    g = n(71393),
    E = n(465794),
    A = n(704591),
    I = n(586652),
    T = n(788868),
    y = n(652215);
n(980504);
var S = n(985018),
    v = n(331129);
function C(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: a } = e,
        s = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await c.A.joinGuild(t), c.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return a === I.E.GET_NITRO
        ? (0, r.jsx)(E.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: y.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: T.pe.TIER_2,
              size: l.$n.Sizes.SMALL,
              color: l.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: S.intl.string(S.t.pj0XBN) },
          })
        : a === I.E.JOIN_GUILD
          ? (0, r.jsx)(u.Button, {
                variant: "primary",
                size: "sm",
                text: S.intl.string(S.t.riu2R5),
                fullWidth: !0,
                onClick: s,
            })
          : null;
}
function b(e) {
    let { sound: t, channel: n, closePopout: l, refreshPosition: c } = e,
        E = "0" === t.guildId,
        T = (0, s.bG)([g.A], () => g.A.getGuild(t.guildId)),
        y = !E && null != T,
        [b, N] = i.useState(),
        R = (0, A.tj)({ location: "SoundmojiGuildInfo" }),
        O = E || y || null != b || !R,
        [D, L] = i.useState(!O);
    i.useEffect(() => {
        O ||
            (L(!0),
            (0, p.nh)(t.soundId, t.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    L(!1), c();
                }));
    }, [c, O, t.guildId, t.soundId]);
    let { buttonType: w, description: x } = (0, I.A)(t, n, y, b),
        P = w === I.E.JOIN_GUILD,
        M = !E && D,
        k = i.useMemo(
            () => (y ? d.GO.createFromGuildRecord(T) : null != b ? d.GO.createFromDiscoverableGuild(b) : void 0),
            [T, y, b],
        );
    return M
        ? (0, r.jsx)(f.Y0, {})
        : (0, r.jsxs)("div", {
              className: v.op,
              children: [
                  (0, r.jsxs)(f.Uq, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: v.g4,
                              children: [
                                  (0, r.jsx)(m.Ay, {
                                      buttonOverlay: h.If.NONE,
                                      sound: t,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(a.EYj, { variant: "text-sm/normal", children: x }),
                              ],
                          }),
                          null != k &&
                              (0, r.jsxs)("div", {
                                  className: v.Qe,
                                  children: [
                                      (0, r.jsx)(a.EYj, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: v.x$,
                                          children: y ? S.intl.string(S.t.tGDabk) : S.intl.string(S.t.rnOmOa),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: v.Ff,
                                          children: (0, r.jsx)(_.G7, {
                                              expressionSourceGuild: k,
                                              hasJoinedExpressionSourceGuild: y,
                                              isDisplayingJoinGuildButtonInPopout: P,
                                          }),
                                      }),
                                      (0, r.jsx)(C, { buttonType: w, discoverableGuildId: b?.id, closePopout: l }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(u.LpS, { text: "BETA", color: o.A.colors.BACKGROUND_BRAND.css, className: v.aZ }),
              ],
          });
}
