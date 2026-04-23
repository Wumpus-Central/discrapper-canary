"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(369163),
    c = n(834730),
    u = n(123292),
    d = n(797285),
    h = n(212245),
    m = n(58149),
    p = n(688810),
    f = n(151271),
    g = n(631305),
    _ = n(997509),
    x = n(931991),
    A = n(71393),
    C = n(473145),
    E = n(652215),
    I = n(874864),
    v = n(985018),
    y = n(832938);
let S = (e) => {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: S, setTrackedUpsellViewed: b } = e,
        { location: N } = (0, h.p)(),
        { analyticsLocations: j } = (0, p.Ay)(),
        T = (0, a.bG)([A.A], () => A.A.getGuild(n)),
        { canManageAllExpressions: R } = (0, x.nr)(T),
        w = null != T && 0 === (0, C.aG)(T.premiumTier) && !T.features.has(E.GuildFeatures.MORE_STICKERS);
    return (l.useEffect(() => {
        R &&
            w &&
            S &&
            ((0, m.zV)(E.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: N,
                guild_id: T?.id,
                channel_id: s?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: j,
            }),
            b(!0));
    }, [w, T, s, N, S, b, j, R]),
    null != T && R)
        ? w
            ? (0, i.jsxs)("div", {
                  className: r()(y.UX, t),
                  children: [
                      (0, i.jsx)(o.v, { size: "md", color: "currentColor", className: y.Kk }),
                      (0, i.jsx)(c.E, {
                          color: "interactive-text-default",
                          className: y.rf,
                          variant: "text-sm/normal",
                          children: v.intl.format(v.t.AXWla1, { count: (0, C.aG)(E.TVA.TIER_1) }),
                      }),
                      (0, i.jsx)(u.Q, {
                          variant: "primary",
                          text: v.intl.string(v.t["Gb+BJD"]),
                          onClick: () => {
                              (0, g.A)({
                                  analyticsLocations: j,
                                  analyticsSourceLocation: N,
                                  guild: T,
                                  perks: (0, I.q5)(),
                              });
                          },
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: r()(y.UX, t),
                  children: [
                      (0, i.jsx)(d.t, {
                          size: "custom",
                          color: "currentColor",
                          className: y.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, i.jsx)(c.E, {
                          color: "interactive-text-default",
                          className: y.rf,
                          variant: "text-sm/normal",
                          children: v.intl.string(v.t.S83wgh),
                      }),
                      (0, i.jsx)(u.Q, {
                          variant: "primary",
                          text: v.intl.string(v.t.bwNjug),
                          onClick: () => {
                              (0, f.v8)(), _.A.open(n, E.BEX.STICKERS, N);
                          },
                      }),
                  ],
              })
        : null;
};
