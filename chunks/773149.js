n.d(t, { Z: () => I }), n(953529);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(639777),
    p = n(838968),
    f = n(279475),
    m = n(60482),
    g = n(765703),
    v = n(735276),
    x = n(459196),
    _ = n(269794),
    b = n(388032),
    h = n(237522),
    j = n(922434),
    C = n(436370),
    w = n(611087);
function I(e) {
    let { guildId: t } = e,
        { state: n, lowestGameServerCost: o } = (0, s.cj)([m.Z], () => ({
            state: m.Z.getStateForGuild(t),
            lowestGameServerCost: m.Z.getLowestGameCostForGuild(t),
        })),
        I = (0, g.Z)(t),
        E = (0, d.Z)(t),
        Z = i.useMemo(() => {
            var e;
            if (0 !== Object.values(null != (e = null == n ? void 0 : n.entitlements) ? e : {}).length)
                return I.length > 0
                    ? {
                          type: "expiring",
                          expiringAt: I[0].ends_at,
                      }
                    : {
                          type: "active",
                          statusText: b.intl.string(x.default.FFLkmx),
                      };
        }, [I, null == n ? void 0 : n.entitlements]),
        P = (0, f.d)((null == Z ? void 0 : Z.type) === "active");
    return null == n
        ? null
        : (0, r.jsxs)(p.aB, {
              label: b.intl.string(_.default["B3OfL/"]),
              badge: "beta",
              isActive: (null == Z ? void 0 : Z.type) === "active",
              isWarning: (null == Z ? void 0 : Z.type) === "expiring",
              onClick: () =>
                  (0, v.Z)({
                      guildId: t,
                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsxs)("div", {
                      className: C.imageContainer,
                      children: [
                          (0, r.jsx)("img", {
                              className: l()(j.background, h.image, C.image),
                              src: w.Z,
                              alt: "",
                          }),
                          (0, r.jsx)("div", { className: l()(h.image, C.gradient) }),
                      ],
                  }),
                  (0, r.jsx)(p.Q9, {
                      title: b.intl.string(_.default["B3OfL/"]),
                      textColor: P,
                      footer: (0, r.jsx)(p.uf, {
                          cost: null != o ? o : 0,
                          costDecorator: "+",
                          status: Z,
                      }),
                      children: (0, r.jsx)(a.xvT, {
                          className: h.description,
                          color: P,
                          variant: "text-sm/medium",
                          children: b.intl.string(_.default.EGkJAG),
                      }),
                  }),
                  (0, r.jsx)(p.N4, {
                      children: (0, r.jsx)(c.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text: E ? b.intl.string(_.default.PuvU5b) : b.intl.string(_.default.BYsbpX),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, v.Z)({
                                      guildId: t,
                                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                                  });
                          },
                      }),
                  }),
              ],
          });
}
