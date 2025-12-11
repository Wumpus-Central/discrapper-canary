n.d(t, { Z: () => Z }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(838968),
    f = n(707541),
    p = n(60482),
    m = n(765703),
    g = n(735276),
    v = n(44542),
    x = n(160589),
    b = n(388032),
    h = n(138545),
    j = n(896481),
    _ = n(289585),
    C = n(796571);
function Z(e) {
    let { guildId: t } = e,
        { state: n, lowestGameServerCost: l } = (0, s.cj)([p.Z], () => ({
            state: p.Z.getStateForGuild(t),
            lowestGameServerCost: p.Z.getLowestGameCostForGuild(t),
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
                          statusText: b.intl.string(v.default.FFLkmx),
                      };
        }, [Z, null == n ? void 0 : n.entitlements]),
        { textColor: I } = (0, f.Z)((null == w ? void 0 : w.type) === "active");
    return null == n
        ? null
        : (0, r.jsxs)(d.aB, {
              label: b.intl.string(x.default["B3OfL/"]),
              badge: "beta",
              isActive: (null == w ? void 0 : w.type) === "active",
              isWarning: (null == w ? void 0 : w.type) === "expiring",
              onClick: () =>
                  (0, g.Z)({
                      guildId: t,
                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsxs)("div", {
                      className: _.imageContainer,
                      children: [
                          (0, r.jsx)("img", {
                              className: a()(j.background, h.image, _.image),
                              src: C.Z,
                              alt: "",
                          }),
                          (0, r.jsx)("div", { className: a()(h.image, _.gradient) }),
                      ],
                  }),
                  (0, r.jsx)(d.Q9, {
                      title: b.intl.string(x.default["B3OfL/"]),
                      textColor: I,
                      footer: (0, r.jsx)(d.uf, {
                          cost: null != l ? l : 0,
                          costDecorator: "+",
                          status: w,
                      }),
                      children: (0, r.jsx)(o.xvT, {
                          className: h.description,
                          color: I,
                          variant: "text-sm/medium",
                          children: b.intl.string(x.default.EGkJAG),
                      }),
                  }),
                  (0, r.jsx)(d.N4, {
                      children: (0, r.jsx)(c.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(n.entitlements).length > 0
                                  ? b.intl.string(x.default.PuvU5b)
                                  : b.intl.string(x.default.b62EHM),
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
