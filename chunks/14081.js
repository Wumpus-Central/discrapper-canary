n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(158954),
    a = n(311907),
    u = n(397927),
    d = n(793574),
    c = n(890942),
    p = n(744201),
    _ = n(522055),
    m = n(881756),
    A = n(793506),
    f = n(843095),
    g = n(568065),
    x = n(800007),
    v = n(294726),
    h = n(985018),
    E = n(849289),
    I = n(848820);
function j(e) {
    let { guildId: t } = e,
        n = i.useRef(null),
        { state: l, lowestGameServerCost: j } = (0, a.cf)([_.A], () => ({
            state: _.A.getStateForGuild(t),
            lowestGameServerCost: _.A.getLowestGameCostForGuild(t),
        })),
        b = (0, A.A)(t),
        { gameName: S, gameName2: C } = (0, m.A)(),
        { textColor: w } = (0, p.A)(b?.type === "active");
    return null == l
        ? null
        : (0, r.jsxs)(c.NI, {
              label: h.intl.string(v.default["B3OfL/"]),
              badge: g.ys[x.W5],
              isActive: b?.type === "active",
              isWarning: b?.type === "expiring",
              onClick: () => (0, f.A)({ guildId: t, analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, r.jsx)("div", {
                      className: s()(I.ZS, E.Sl),
                      children: (0, r.jsx)(o.E_w, {
                          withReducedMotion: "halt",
                          eventTargetRef: n,
                          className: I.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, r.jsx)(c.Ft, {
                      title: h.intl.string(v.default["B3OfL/"]),
                      textColor: w,
                      footer: (0, r.jsx)(c.$L, { cost: j ?? 0, costDecorator: "+", status: b }),
                      children: (0, r.jsx)(o.EYj, {
                          className: E.h_,
                          color: w,
                          variant: "text-sm/medium",
                          children: h.intl.format(v.default["+UqyGU"], { gameName: S, gameName2: C }),
                      }),
                  }),
                  (0, r.jsx)(c.kd, {
                      children: (0, r.jsx)(u.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(l.entitlements).length > 0
                                  ? h.intl.string(v.default.PuvU5b)
                                  : h.intl.string(v.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, f.A)({ guildId: t, analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
