n.d(t, { Z: () => j }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(793030),
    a = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(838968),
    p = n(279475),
    m = n(693587),
    g = n(809741),
    f = n(989308),
    v = n(401561),
    _ = n(388032),
    x = n(237522),
    h = n(922434),
    b = n(530045),
    C = n(517862);
function j(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        o = i.useMemo(() => {
            if ((null == n ? void 0 : n.instances) != null && 0 !== Object.keys(n.instances).length)
                return {
                    type: "active",
                    statusText: _.intl.string(f.default.FFLkm5),
                };
        }, [null == n ? void 0 : n.instances]),
        j = (0, p.d)((null == o ? void 0 : o.type) === "active"),
        T = i.useMemo(() => {
            if ((null == n ? void 0 : n.catalog) == null) return 0;
            let e = Object.values(n.catalog);
            return 0 === e.length ? 0 : Math.min(...e.map((e) => e.baseCost));
        }, [null == n ? void 0 : n.catalog]);
    return null == n
        ? null
        : (0, r.jsxs)(d.aB, {
              label: _.intl.string(v.default["fjt/vr"]),
              badge: "new",
              isActive: (null == o ? void 0 : o.type) === "active",
              onClick: () =>
                  (0, g.Z)({
                      guildId: t,
                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsxs)("div", {
                      className: b.imageContainer,
                      children: [
                          (0, r.jsx)("img", {
                              className: s()(h.background, x.image, b.image),
                              src: C.Z,
                              alt: "",
                          }),
                          (0, r.jsx)("div", { className: s()(x.image, b.gradient) }),
                      ],
                  }),
                  (0, r.jsx)(d.Q9, {
                      title: _.intl.string(v.default["fjt/vr"]),
                      textColor: j,
                      footer: (0, r.jsx)(d.uf, {
                          cost: T,
                          costDecorator: "+",
                          status: o,
                      }),
                      children: (0, r.jsx)(l.xvT, {
                          className: x.description,
                          color: j,
                          variant: "text-sm/medium",
                          children: _.intl.string(v.default.P7VSCg),
                      }),
                  }),
                  (0, r.jsx)(d.N4, {
                      children: (0, r.jsx)(c.zxk, {
                          variant: "primary",
                          fullWidth: !0,
                          text: _.intl.string(v.default.MbdLuL),
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
