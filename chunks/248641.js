n.d(t, { Z: () => j }), n(388685), n(953529);
var r = n(951288),
    o = n(647438),
    i = n(120356),
    l = n.n(i),
    a = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(838968),
    p = n(279475),
    m = n(693587),
    f = n(809741),
    g = n(989308),
    v = n(401561),
    x = n(388032),
    _ = n(237522),
    b = n(922434),
    h = n(530045),
    C = n(44825);
function j(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        i = o.useMemo(() => {
            if ((null == n ? void 0 : n.instances) != null && 0 !== Object.keys(n.instances).length)
                return {
                    type: "active",
                    statusText: x.intl.string(g.default.FFLkm5),
                };
        }, [null == n ? void 0 : n.instances]),
        j = (0, p.d)((null == i ? void 0 : i.type) === "active"),
        P = o.useMemo(() => {
            if ((null == n ? void 0 : n.catalog) == null) return 0;
            let e = Object.values(n.catalog);
            return 0 === e.length ? 0 : Math.min(...e.map((e) => e.baseCost));
        }, [null == n ? void 0 : n.catalog]);
    return null == n
        ? null
        : (0, r.jsxs)(d.aB, {
              label: x.intl.string(v.default["fjt/vr"]),
              badge: "new",
              isActive: (null == i ? void 0 : i.type) === "active",
              onClick: () =>
                  (0, f.Z)({
                      guildId: t,
                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                  }),
              children: [
                  (0, r.jsxs)("div", {
                      className: h.imageContainer,
                      children: [
                          (0, r.jsx)("img", {
                              className: l()(b.background, _.image, h.image),
                              src: C.Z,
                              alt: "",
                          }),
                          (0, r.jsx)("div", { className: l()(_.image, h.gradient) }),
                      ],
                  }),
                  (0, r.jsx)(d.Q9, {
                      title: x.intl.string(v.default["fjt/vr"]),
                      textColor: j,
                      footer: (0, r.jsx)(d.uf, {
                          cost: P,
                          costDecorator: "+",
                          status: i,
                      }),
                      children: (0, r.jsx)(a.xv, {
                          className: _.description,
                          color: j,
                          variant: "text-sm/medium",
                          children: x.intl.string(v.default.P7VSCg),
                      }),
                  }),
                  (0, r.jsx)(d.N4, {
                      children: (0, r.jsx)(c.zxk, {
                          variant: "primary",
                          fullWidth: !0,
                          text: x.intl.string(v.default.MbdLuL),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, f.Z)({
                                      guildId: t,
                                      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW,
                                  });
                          },
                      }),
                  }),
              ],
          });
}
