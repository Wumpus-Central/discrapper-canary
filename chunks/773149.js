n.d(t, { Z: () => w }), n(953529);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(838968),
    p = n(279475),
    f = n(60482),
    m = n(765703),
    g = n(735276),
    v = n(459196),
    x = n(269794),
    _ = n(388032),
    b = n(237522),
    h = n(922434),
    j = n(436370),
    C = n(611087);
function w(e) {
    let { guildId: t } = e,
        { state: n, lowestGameServerCost: o } = (0, s.cj)([f.Z], () => ({
            state: f.Z.getStateForGuild(t),
            lowestGameServerCost: f.Z.getLowestGameCostForGuild(t),
        })),
        w = (0, m.Z)(t),
        I = i.useMemo(() => {
            var e;
            if (0 !== Object.values(null != (e = null == n ? void 0 : n.entitlements) ? e : {}).length)
                return w.length > 0
                    ? {
                          type: "expiring",
                          expiringAt: w[0].ends_at,
                      }
                    : {
                          type: "active",
                          statusText: _.intl.string(v.default.FFLkmx),
                      };
        }, [w, null == n ? void 0 : n.entitlements]),
        E = (0, p.d)((null == I ? void 0 : I.type) === "active");
    return null == n
        ? null
        : (0, r.jsxs)(d.aB, {
              label: _.intl.string(x.default["B3OfL/"]),
              badge: "beta",
              isActive: (null == I ? void 0 : I.type) === "active",
              isWarning: (null == I ? void 0 : I.type) === "expiring",
              onClick: () =>
                  (0, g.Z)({
                      guildId: t,
                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsxs)("div", {
                      className: j.imageContainer,
                      children: [
                          (0, r.jsx)("img", {
                              className: l()(h.background, b.image, j.image),
                              src: C.Z,
                              alt: "",
                          }),
                          (0, r.jsx)("div", { className: l()(b.image, j.gradient) }),
                      ],
                  }),
                  (0, r.jsx)(d.Q9, {
                      title: _.intl.string(x.default["B3OfL/"]),
                      textColor: E,
                      footer: (0, r.jsx)(d.uf, {
                          cost: null != o ? o : 0,
                          costDecorator: "+",
                          status: I,
                      }),
                      children: (0, r.jsx)(a.xvT, {
                          className: b.description,
                          color: E,
                          variant: "text-sm/medium",
                          children: _.intl.string(x.default.EGkJAG),
                      }),
                  }),
                  (0, r.jsx)(d.N4, {
                      children: (0, r.jsx)(c.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text: _.intl.string(x.default.PuvU5b),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, g.Z)({
                                      guildId: t,
                                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                                  });
                          },
                      }),
                  }),
              ],
          });
}
