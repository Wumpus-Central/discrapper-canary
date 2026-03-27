n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(158954),
    a = n(311907),
    d = n(397927),
    u = n(793574),
    c = n(890942),
    p = n(744201),
    _ = n(522055),
    m = n(793506),
    f = n(204017),
    A = n(843095),
    g = n(568065),
    x = n(800007),
    v = n(294726),
    h = n(985018),
    E = n(849289),
    b = n(848820);
function I(e) {
    let { guildId: t } = e,
        n = i.useRef(null),
        { state: l, lowestGameServerCost: I } = (0, a.cf)([_.A], () => ({
            state: _.A.getStateForGuild(t),
            lowestGameServerCost: _.A.getLowestGameCostForGuild(t),
        })),
        j = (0, m.A)(t),
        { gameName: S, gameName2: C } = (0, f.A)(),
        { textColor: w } = (0, p.A)(j?.type === "active");
    return null == l
        ? null
        : (0, r.jsxs)(c.NI, {
              label: h.intl.string(v.default["B3OfL/"]),
              badge: g.ys[x.W5],
              isActive: j?.type === "active",
              isWarning: j?.type === "expiring",
              onClick: () => (0, A.A)({ guildId: t, analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, r.jsx)("div", {
                      className: s()(b.ZS, E.Sl),
                      children: (0, r.jsx)(o.E_w, {
                          withReducedMotion: "halt",
                          eventTargetRef: n,
                          className: b.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, r.jsx)(c.Ft, {
                      title: h.intl.string(v.default["B3OfL/"]),
                      textColor: w,
                      footer: (0, r.jsx)(c.$L, { cost: I ?? 0, costDecorator: "+", status: j }),
                      children: (0, r.jsx)(o.EYj, {
                          className: E.h_,
                          color: w,
                          variant: "text-sm/medium",
                          children: h.intl.format(v.default["+UqyGU"], { gameName: S, gameName2: C }),
                      }),
                  }),
                  (0, r.jsx)(c.kd, {
                      children: (0, r.jsx)(d.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(l.entitlements).length > 0
                                  ? h.intl.string(v.default.PuvU5b)
                                  : h.intl.string(v.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, A.A)({ guildId: t, analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
