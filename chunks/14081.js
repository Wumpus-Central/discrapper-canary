n.d(t, {
    A: () => b,
}),
    n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    s = n(158954),
    a = n(311907),
    u = n(397927),
    d = n(793574),
    c = n(890942),
    p = n(744201),
    m = n(522055),
    f = n(793506),
    v = n(204017),
    g = n(843095),
    A = n(294726),
    _ = n(985018),
    x = n(876380),
    h = n(561797);

function b(e) {
    let { guildId: t } = e,
        n = l.useRef(null),
        { state: i, lowestGameServerCost: b } = (0, a.cf)([m.A], () => ({
            state: m.A.getStateForGuild(t),
            lowestGameServerCost: m.A.getLowestGameCostForGuild(t),
        })),
        j = (0, f.A)(t),
        { gameName: E, gameName2: w } = (0, v.A)(),
        { textColor: y } = (0, p.A)((null == j ? void 0 : j.type) === "active");
    return null == i
        ? null
        : (0, r.jsxs)(c.NI, {
              label: _.intl.string(A.default["B3OfL/"]),
              badge: "beta",
              isActive: (null == j ? void 0 : j.type) === "active",
              isWarning: (null == j ? void 0 : j.type) === "expiring",
              onClick: () =>
                  (0, g.A)({
                      guildId: t,
                      analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsx)("div", {
                      className: o()(h.ZS, x.Sl),
                      children: (0, r.jsx)(s.E_w, {
                          withReducedMotion: "halt",
                          eventTargetRef: n,
                          className: h.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, r.jsx)(c.Ft, {
                      title: _.intl.string(A.default["B3OfL/"]),
                      textColor: y,
                      footer: (0, r.jsx)(c.$L, {
                          cost: null != b ? b : 0,
                          costDecorator: "+",
                          status: j,
                      }),
                      children: (0, r.jsx)(s.EYj, {
                          className: x.h_,
                          color: y,
                          variant: "text-sm/medium",
                          children: _.intl.format(A.default["+UqyGU"], {
                              gameName: E,
                              gameName2: w,
                          }),
                      }),
                  }),
                  (0, r.jsx)(c.kd, {
                      children: (0, r.jsx)(u.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(i.entitlements).length > 0
                                  ? _.intl.string(A.default.PuvU5b)
                                  : _.intl.string(A.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, g.A)({
                                      guildId: t,
                                      analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW,
                                  });
                          },
                      }),
                  }),
              ],
          });
}
