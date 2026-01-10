n.d(t, { Z: () => Z }), n(953529);
var r = n(54381),
    i = n(120356),
    o = n.n(i),
    l = n(793030),
    a = n(442837),
    s = n(481060),
    u = n(100527),
    c = n(838968),
    d = n(707541),
    f = n(60482),
    p = n(8575),
    m = n(735276),
    v = n(914820),
    g = n(388032),
    x = n(138545),
    b = n(896481),
    h = n(289585),
    j = n(796571);
function Z(e) {
    let { guildId: t } = e,
        { state: n, lowestGameServerCost: i } = (0, a.cj)([f.Z], () => ({
            state: f.Z.getStateForGuild(t),
            lowestGameServerCost: f.Z.getLowestGameCostForGuild(t),
        })),
        Z = (0, p.Z)(t),
        { textColor: _ } = (0, d.Z)((null == Z ? void 0 : Z.type) === "active");
    return null == n
        ? null
        : (0, r.jsxs)(c.aB, {
              label: g.intl.string(v.default["B3OfL/"]),
              badge: "beta",
              isActive: (null == Z ? void 0 : Z.type) === "active",
              isWarning: (null == Z ? void 0 : Z.type) === "expiring",
              onClick: () =>
                  (0, m.Z)({
                      guildId: t,
                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsxs)("div", {
                      className: h.imageContainer,
                      children: [
                          (0, r.jsx)("img", {
                              className: o()(b.background, x.image, h.image),
                              src: j.Z,
                              alt: "",
                          }),
                          (0, r.jsx)("div", { className: o()(x.image, h.gradient) }),
                      ],
                  }),
                  (0, r.jsx)(c.Q9, {
                      title: g.intl.string(v.default["B3OfL/"]),
                      textColor: _,
                      footer: (0, r.jsx)(c.uf, {
                          cost: null != i ? i : 0,
                          costDecorator: "+",
                          status: Z,
                      }),
                      children: (0, r.jsx)(l.xvT, {
                          className: x.description,
                          color: _,
                          variant: "text-sm/medium",
                          children: g.intl.string(v.default.EGkJAG),
                      }),
                  }),
                  (0, r.jsx)(c.N4, {
                      children: (0, r.jsx)(s.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(n.entitlements).length > 0
                                  ? g.intl.string(v.default.PuvU5b)
                                  : g.intl.string(v.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, m.Z)({
                                      guildId: t,
                                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                                  });
                          },
                      }),
                  }),
              ],
          });
}
