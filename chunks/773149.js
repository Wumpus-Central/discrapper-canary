n.d(t, { Z: () => I }), n(388685), n(953529);
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
    v = n(258640),
    x = n(45765),
    _ = n(388032),
    b = n(470039),
    h = n(581040),
    j = n(918342),
    C = n(611087);
function I(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        o = i.useMemo(() => {
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
                      statusText: _.intl.string(v.default.FFLkm5),
                  };
        }, [null == n ? void 0 : n.entitlements]),
        I = (0, f.d)((null == o ? void 0 : o.type) === "active"),
        E = i.useMemo(() => {
            if ((null == n ? void 0 : n.catalog) == null) return 0;
            let e = Object.values(n.catalog);
            return 0 === e.length ? 0 : Math.min(...e.map((e) => e.baseCost));
        }, [null == n ? void 0 : n.catalog]);
    return null == n
        ? null
        : (0, r.jsxs)(p.aB, {
              label: _.intl.string(x.default.B3OfLy),
              badge: "beta",
              isActive: (null == o ? void 0 : o.type) === "active",
              isWarning: (null == o ? void 0 : o.type) === "expiring",
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
                      title: _.intl.string(x.default.B3OfLy),
                      textColor: I,
                      footer: (0, r.jsx)(p.uf, {
                          cost: E,
                          costDecorator: "+",
                          status: o,
                      }),
                      children: (0, r.jsx)(a.xvT, {
                          className: b.description,
                          color: I,
                          variant: "text-sm/medium",
                          children: _.intl.string(x.default.EGkJAA),
                      }),
                  }),
                  (0, r.jsx)(p.N4, {
                      children: (0, r.jsx)(c.Button, {
                          variant: "primary",
                          fullWidth: !0,
                          text: _.intl.string(x.default.PuvU5e),
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
