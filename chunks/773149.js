n.d(t, { Z: () => I }), n(953529);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(19394),
    p = n(838968),
    f = n(279475),
    m = n(60482),
    g = n(735276),
    v = n(459196),
    x = n(269794),
    _ = n(388032),
    b = n(237522),
    h = n(922434),
    j = n(436370),
    C = n(611087);
function I(e) {
    let { guildId: t } = e,
        { state: n, lowestGameServerCost: o } = (0, s.cj)([m.Z], () => ({
            state: m.Z.getStateForGuild(t),
            lowestGameServerCost: m.Z.getLowestGameCostForGuild(t),
        })),
        I = i.useMemo(() => {
            var e;
            let t = Object.values(null != (e = null == n ? void 0 : n.entitlements) ? e : {});
            if (0 === t.length) return;
            let r = (0, d.h)(t);
            return r.length > 0
                ? {
                      type: "expiring",
                      expiringAt: r[0].ends_at,
                  }
                : {
                      type: "active",
                      statusText: _.intl.string(v.default.FFLkmx),
                  };
        }, [null == n ? void 0 : n.entitlements]),
        w = (0, f.d)((null == I ? void 0 : I.type) === "active");
    return null == n
        ? null
        : (0, r.jsxs)(p.aB, {
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
                  (0, r.jsx)(p.Q9, {
                      title: _.intl.string(x.default["B3OfL/"]),
                      textColor: w,
                      footer: (0, r.jsx)(p.uf, {
                          cost: null != o ? o : 0,
                          costDecorator: "+",
                          status: I,
                      }),
                      children: (0, r.jsx)(a.xvT, {
                          className: b.description,
                          color: w,
                          variant: "text-sm/medium",
                          children: _.intl.string(x.default.EGkJAG),
                      }),
                  }),
                  (0, r.jsx)(p.N4, {
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
