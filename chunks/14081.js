l.d(t, {
    A: () => j,
}),
    l(228524);
var r = l(627968),
    n = l(503698),
    i = l.n(n),
    s = l(158954),
    o = l(311907),
    a = l(397927),
    u = l(793574),
    d = l(890942),
    c = l(744201),
    f = l(522055),
    p = l(793506),
    m = l(843095),
    v = l(294726),
    A = l(985018),
    g = l(876380),
    x = l(291305),
    b = l(561797),
    h = l(390175);

function j(e) {
    let { guildId: t } = e,
        { state: l, lowestGameServerCost: n } = (0, o.cf)([f.A], () => ({
            state: f.A.getStateForGuild(t),
            lowestGameServerCost: f.A.getLowestGameCostForGuild(t),
        })),
        j = (0, p.A)(t),
        { textColor: _ } = (0, c.A)((null == j ? void 0 : j.type) === "active");
    return null == l
        ? null
        : (0, r.jsxs)(d.NI, {
              label: A.intl.string(v.default["B3OfL/"]),
              badge: "beta",
              isActive: (null == j ? void 0 : j.type) === "active",
              isWarning: (null == j ? void 0 : j.type) === "expiring",
              onClick: () =>
                  (0, m.A)({
                      guildId: t,
                      analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsxs)("div", {
                      className: b.ZS,
                      children: [
                          (0, r.jsx)("img", {
                              className: i()(x.T, g.Sl, b.Sl),
                              src: h.A,
                              alt: "",
                          }),
                          (0, r.jsx)("div", {
                              className: i()(g.Sl, b.D7),
                          }),
                      ],
                  }),
                  (0, r.jsx)(d.Ft, {
                      title: A.intl.string(v.default["B3OfL/"]),
                      textColor: _,
                      footer: (0, r.jsx)(d.$L, {
                          cost: null != n ? n : 0,
                          costDecorator: "+",
                          status: j,
                      }),
                      children: (0, r.jsx)(s.EYj, {
                          className: g.h_,
                          color: _,
                          variant: "text-sm/medium",
                          children: A.intl.string(v.default.EGkJAG),
                      }),
                  }),
                  (0, r.jsx)(d.kd, {
                      children: (0, r.jsx)(a.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(l.entitlements).length > 0
                                  ? A.intl.string(v.default.PuvU5b)
                                  : A.intl.string(v.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, m.A)({
                                      guildId: t,
                                      analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW,
                                  });
                          },
                      }),
                  }),
              ],
          });
}
