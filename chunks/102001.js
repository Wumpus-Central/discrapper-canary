"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(369163),
    u = n(834730),
    c = n(123292),
    d = n(797285),
    _ = n(212245),
    f = n(58149),
    p = n(688810),
    h = n(151271),
    E = n(631305),
    m = n(997509),
    g = n(931991),
    A = n(71393),
    I = n(473145),
    T = n(652215),
    S = n(874864),
    y = n(985018),
    N = n(832938);
let v = (e) => {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: v, setTrackedUpsellViewed: C } = e,
        { location: O } = (0, _.p)(),
        { analyticsLocations: R } = (0, p.Ay)(),
        b = (0, o.bG)([A.A], () => A.A.getGuild(n)),
        { canManageAllExpressions: D } = (0, g.nr)(b),
        L = null != b && 0 === (0, I.aG)(b.premiumTier) && !b.features.has(T.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        D &&
            L &&
            v &&
            ((0, f.zV)(T.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: O,
                guild_id: b?.id,
                channel_id: s?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: R,
            }),
            C(!0));
    }, [L, b, s, O, v, C, R, D]),
    null != b && D)
        ? L
            ? (0, r.jsxs)("div", {
                  className: a()(N.UX, t),
                  children: [
                      (0, r.jsx)(l.v, { size: "md", color: "currentColor", className: N.Kk }),
                      (0, r.jsx)(u.E, {
                          color: "interactive-text-default",
                          className: N.rf,
                          variant: "text-sm/normal",
                          children: y.intl.format(y.t.AXWla1, { count: (0, I.aG)(T.TVA.TIER_1) }),
                      }),
                      (0, r.jsx)(c.Q, {
                          variant: "primary",
                          text: y.intl.string(y.t["Gb+BJD"]),
                          onClick: () => {
                              (0, E.A)({
                                  analyticsLocations: R,
                                  analyticsSourceLocation: O,
                                  guild: b,
                                  perks: (0, S.q5)(),
                              });
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: a()(N.UX, t),
                  children: [
                      (0, r.jsx)(d.t, {
                          size: "custom",
                          color: "currentColor",
                          className: N.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, r.jsx)(u.E, {
                          color: "interactive-text-default",
                          className: N.rf,
                          variant: "text-sm/normal",
                          children: y.intl.string(y.t.S83wgh),
                      }),
                      (0, r.jsx)(c.Q, {
                          variant: "primary",
                          text: y.intl.string(y.t.bwNjug),
                          onClick: () => {
                              (0, h.v8)(), m.A.open(n, T.BEX.STICKERS, O);
                          },
                      }),
                  ],
              })
        : null;
};
