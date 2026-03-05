n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(397927),
    u = n(793574),
    c = n(890942),
    m = n(744201),
    p = n(522055),
    _ = n(793506),
    x = n(204017),
    A = n(843095),
    f = n(738072),
    g = n(985018),
    v = n(772574),
    h = n(41775);
function b(e) {
    let { guildId: t } = e,
        n = i.useRef(null),
        { state: l, lowestGameServerCost: b } = (0, o.cf)([p.A], () => ({
            state: p.A.getStateForGuild(t),
            lowestGameServerCost: p.A.getLowestGameCostForGuild(t),
        })),
        j = (0, _.A)(t),
        { gameName: E, gameName2: I } = (0, x.A)(),
        { textColor: C } = (0, m.A)(j?.type === "active");
    return null == l
        ? null
        : (0, r.jsxs)(c.NI, {
              label: g.intl.string(f.default["B3OfL/"]),
              badge: "beta",
              isActive: j?.type === "active",
              isWarning: j?.type === "expiring",
              onClick: () => (0, A.A)({ guildId: t, analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, r.jsx)("div", {
                      className: s()(h.ZS, v.Sl),
                      children: (0, r.jsx)(a.E_w, {
                          withReducedMotion: "halt",
                          eventTargetRef: n,
                          className: h.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, r.jsx)(c.Ft, {
                      title: g.intl.string(f.default["B3OfL/"]),
                      textColor: C,
                      footer: (0, r.jsx)(c.$L, { cost: b ?? 0, costDecorator: "+", status: j }),
                      children: (0, r.jsx)(a.EYj, {
                          className: v.h_,
                          color: C,
                          variant: "text-sm/medium",
                          children: g.intl.format(f.default["+UqyGU"], { gameName: E, gameName2: I }),
                      }),
                  }),
                  (0, r.jsx)(c.kd, {
                      children: (0, r.jsx)(d.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(l.entitlements).length > 0
                                  ? g.intl.string(f.default.PuvU5b)
                                  : g.intl.string(f.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, A.A)({ guildId: t, analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
