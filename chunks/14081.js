n.d(t, { A: () => b });
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
    f = n(843095),
    g = n(294726),
    x = n(985018),
    v = n(876380),
    h = n(561797);
function b(e) {
    let { guildId: t } = e,
        n = l.useRef(null),
        { state: i, lowestGameServerCost: b } = (0, a.cf)([m.A], () => ({
            state: m.A.getStateForGuild(t),
            lowestGameServerCost: m.A.getLowestGameCostForGuild(t),
        })),
        j = (0, A.A)(t),
        { gameName: E, gameName2: I } = (0, _.A)(),
        { textColor: w } = (0, p.A)(j?.type === "active");
    return null == i
        ? null
        : (0, r.jsxs)(c.NI, {
              label: x.intl.string(g.default["B3OfL/"]),
              badge: "beta",
              isActive: j?.type === "active",
              isWarning: j?.type === "expiring",
              onClick: () => (0, f.A)({ guildId: t, analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW }),
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
                      title: x.intl.string(g.default["B3OfL/"]),
                      textColor: w,
                      footer: (0, r.jsx)(c.$L, { cost: b ?? 0, costDecorator: "+", status: j }),
                      children: (0, r.jsx)(o.EYj, {
                          className: v.h_,
                          color: w,
                          variant: "text-sm/medium",
                          children: x.intl.format(g.default["+UqyGU"], { gameName: E, gameName2: I }),
                      }),
                  }),
                  (0, r.jsx)(c.kd, {
                      children: (0, r.jsx)(u.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(i.entitlements).length > 0
                                  ? x.intl.string(g.default.PuvU5b)
                                  : x.intl.string(g.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, f.A)({ guildId: t, analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
