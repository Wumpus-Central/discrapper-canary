n.d(t, { Z: () => Z }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(793030),
    s = n(442837),
    u = n(481060),
    c = n(100527),
    d = n(838968),
    p = n(707541),
    f = n(60482),
    m = n(765703),
    g = n(735276),
    v = n(5238),
    x = n(400580),
    _ = n(388032),
    b = n(237522),
    h = n(922434),
    j = n(436370),
    C = n(611087);
function Z(e) {
    let { guildId: t } = e,
        { state: n, lowestGameServerCost: l } = (0, s.cj)([f.Z], () => ({
            state: f.Z.getStateForGuild(t),
            lowestGameServerCost: f.Z.getLowestGameCostForGuild(t),
        })),
        Z = (0, m.Z)(t),
        w = i.useMemo(() => {
            var e;
            if (0 !== Object.values(null != (e = null == n ? void 0 : n.entitlements) ? e : {}).length)
                return Z.length > 0
                    ? {
                          type: "expiring",
                          expiringAt: Z[0].ends_at,
                      }
                    : {
                          type: "active",
                          statusText: _.intl.string(v.default.FFLkmx),
                      };
        }, [Z, null == n ? void 0 : n.entitlements]),
        { textColor: I } = (0, p.Z)((null == w ? void 0 : w.type) === "active");
    return null == n
        ? null
        : (0, r.jsxs)(d.aB, {
              label: _.intl.string(x.default["B3OfL/"]),
              badge: "beta",
              isActive: (null == w ? void 0 : w.type) === "active",
              isWarning: (null == w ? void 0 : w.type) === "expiring",
              onClick: () =>
                  (0, g.Z)({
                      guildId: t,
                      analyticsLocation: c.Z.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsxs)("div", {
                      className: j.imageContainer,
                      children: [
                          (0, r.jsx)("img", {
                              className: o()(h.background, b.image, j.image),
                              src: C.Z,
                              alt: "",
                          }),
                          (0, r.jsx)("div", { className: o()(b.image, j.gradient) }),
                      ],
                  }),
                  (0, r.jsx)(d.Q9, {
                      title: _.intl.string(x.default["B3OfL/"]),
                      textColor: I,
                      footer: (0, r.jsx)(d.uf, {
                          cost: null != l ? l : 0,
                          costDecorator: "+",
                          status: w,
                      }),
                      children: (0, r.jsx)(a.xvT, {
                          className: b.description,
                          color: I,
                          variant: "text-sm/medium",
                          children: _.intl.string(x.default.EGkJAG),
                      }),
                  }),
                  (0, r.jsx)(d.N4, {
                      children: (0, r.jsx)(u.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(n.entitlements).length > 0
                                  ? _.intl.string(x.default.PuvU5b)
                                  : _.intl.string(x.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, g.Z)({
                                      guildId: t,
                                      analyticsLocation: c.Z.GUILD_POWERUPS_OVERVIEW,
                                  });
                          },
                      }),
                  }),
              ],
          });
}
