n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(158954),
    a = n(311907),
    d = n(397927),
    u = n(793574),
    c = n(890942),
    m = n(744201),
    p = n(522055),
    _ = n(793506),
    f = n(204017),
    g = n(843095),
    x = n(738072),
    A = n(985018),
    v = n(242030),
    h = n(4799);
function E(e) {
    let { guildId: t } = e,
        n = i.useRef(null),
        { state: s, lowestGameServerCost: E } = (0, a.cf)([p.A], () => ({
            state: p.A.getStateForGuild(t),
            lowestGameServerCost: p.A.getLowestGameCostForGuild(t),
        })),
        j = (0, _.A)(t),
        { gameName: b, gameName2: I } = (0, f.A)(),
        { textColor: S } = (0, m.A)(j?.type === "active");
    return null == s
        ? null
        : (0, r.jsxs)(c.NI, {
              label: A.intl.string(x.default["B3OfL/"]),
              badge: "beta",
              isActive: j?.type === "active",
              isWarning: j?.type === "expiring",
              onClick: () => (0, g.A)({ guildId: t, analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, r.jsx)("div", {
                      className: l()(h.ZS, v.Sl),
                      children: (0, r.jsx)(o.E_w, {
                          withReducedMotion: "halt",
                          eventTargetRef: n,
                          className: h.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, r.jsx)(c.Ft, {
                      title: A.intl.string(x.default["B3OfL/"]),
                      textColor: S,
                      footer: (0, r.jsx)(c.$L, { cost: E ?? 0, costDecorator: "+", status: j }),
                      children: (0, r.jsx)(o.EYj, {
                          className: v.h_,
                          color: S,
                          variant: "text-sm/medium",
                          children: A.intl.format(x.default["+UqyGU"], { gameName: b, gameName2: I }),
                      }),
                  }),
                  (0, r.jsx)(c.kd, {
                      children: (0, r.jsx)(d.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(s.entitlements).length > 0
                                  ? A.intl.string(x.default.PuvU5b)
                                  : A.intl.string(x.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, g.A)({ guildId: t, analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
