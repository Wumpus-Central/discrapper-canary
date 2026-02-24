n.d(t, { A: () => j });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(158954),
    a = n(311907),
    u = n(397927),
    d = n(793574),
    c = n(890942),
    p = n(744201),
    m = n(522055),
    A = n(793506),
    _ = n(204017),
    g = n(843095),
    f = n(738072),
    x = n(985018),
    v = n(772574),
    h = n(41775);
function j(e) {
    let { guildId: t } = e,
        n = l.useRef(null),
        { state: i, lowestGameServerCost: j } = (0, a.cf)([m.A], () => ({
            state: m.A.getStateForGuild(t),
            lowestGameServerCost: m.A.getLowestGameCostForGuild(t),
        })),
        b = (0, A.A)(t),
        { gameName: E, gameName2: I } = (0, _.A)(),
        { textColor: S } = (0, p.A)(b?.type === "active");
    return null == i
        ? null
        : (0, r.jsxs)(c.NI, {
              label: x.intl.string(f.default["B3OfL/"]),
              badge: "beta",
              isActive: b?.type === "active",
              isWarning: b?.type === "expiring",
              onClick: () => (0, g.A)({ guildId: t, analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, r.jsx)("div", {
                      className: s()(h.ZS, v.Sl),
                      children: (0, r.jsx)(o.E_w, {
                          withReducedMotion: "halt",
                          eventTargetRef: n,
                          className: h.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, r.jsx)(c.Ft, {
                      title: x.intl.string(f.default["B3OfL/"]),
                      textColor: S,
                      footer: (0, r.jsx)(c.$L, { cost: j ?? 0, costDecorator: "+", status: b }),
                      children: (0, r.jsx)(o.EYj, {
                          className: v.h_,
                          color: S,
                          variant: "text-sm/medium",
                          children: x.intl.format(f.default["+UqyGU"], { gameName: E, gameName2: I }),
                      }),
                  }),
                  (0, r.jsx)(c.kd, {
                      children: (0, r.jsx)(u.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(i.entitlements).length > 0
                                  ? x.intl.string(f.default.PuvU5b)
                                  : x.intl.string(f.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, g.A)({ guildId: t, analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
