n.d(t, { Z: () => v }), n(953529);
var r = n(54381);
n(473749);
var i = n(793030),
    l = n(442837),
    a = n(902840),
    s = n(100527),
    o = n(906732),
    c = n(34586),
    d = n(496675),
    u = n(999382),
    g = n(723914),
    m = n(30818),
    p = n(997698),
    f = n(354031),
    h = n(335438),
    b = n(166805),
    x = n(981631),
    j = n(388032),
    _ = n(566945);
let v = function () {
    let { analyticsLocations: e } = (0, o.ZP)(s.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, l.e7)([u.Z], () => u.Z.getProps().guild, []),
        n = (0, l.e7)([d.Z], () => null != t && d.Z.can(x.Plq.MANAGE_GUILD, t)),
        v = (0, c.E)(t),
        O = (0, a.l9)(null != t ? t : void 0);
    return null == t
        ? null
        : (0, r.jsx)(o.Gt, {
              value: e,
              children: (0, r.jsxs)("main", {
                  className: _.container,
                  children: [
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(i.X6q, {
                                  variant: "heading-lg/semibold",
                                  color: "header-primary",
                                  children: j.intl.string(j.t["6TAHbx"]),
                              }),
                              (0, r.jsx)(i.xvT, {
                                  variant: "text-sm/medium",
                                  color: "header-secondary",
                                  tag: "p",
                                  className: _.description,
                                  children: j.intl.string(j.t.XCGZFk),
                              }),
                          ],
                      }),
                      !0 === O &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(f.P, {
                                      canManageGuild: n,
                                      features: t.features,
                                  }),
                                  (0, r.jsx)("div", { className: _.divider }),
                              ],
                          }),
                      (0, r.jsx)(h.l, {
                          canManageGuild: n,
                          guild: t,
                      }),
                      void 0 !== v &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: _.divider }),
                                  (0, r.jsx)(g.q, {
                                      isInventoryFeedEnabled: v,
                                      canManageGuild: n,
                                      features: t.features,
                                  }),
                              ],
                          }),
                      (0, r.jsx)("div", { className: _.divider }),
                      (0, r.jsx)(m.z, {
                          guildId: t.id,
                          defaultSettings: t.defaultMessageNotifications,
                          canManageGuild: n,
                      }),
                      (0, r.jsx)("div", { className: _.divider }),
                      (0, r.jsx)(p.L, {
                          canManageGuild: n,
                          guild: t,
                      }),
                      !0 === n &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: _.divider }),
                                  (0, r.jsx)(b.P, { guildId: t.id }),
                              ],
                          }),
                  ],
              }),
          });
};
