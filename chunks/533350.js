"use strict";
n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    r = n(432371),
    a = n(793574),
    o = n(688810),
    d = n(376261),
    c = n(576705),
    u = n(555337),
    m = n(503929),
    g = n(580403),
    x = n(242849),
    h = n(158352),
    _ = n(668133),
    A = n(675654),
    p = n(652215),
    f = n(985018),
    j = n(574436);
let N = function () {
    let { analyticsLocations: e } = (0, o.Ay)(a.A.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, l.bG)([u.A], () => u.A.getProps().guild, []),
        n = (0, l.bG)([c.A], () => null != t && c.A.can(p.xBc.MANAGE_GUILD, t)),
        N = (0, d.T)(t),
        E = (0, r.vC)(t ?? void 0);
    return null == t
        ? null
        : (0, i.jsx)(o.f5, {
              value: e,
              children: (0, i.jsxs)("main", {
                  className: j.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(s.DZT, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: f.intl.string(f.t["6TAHbx"]),
                              }),
                              (0, i.jsx)(s.EYj, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  tag: "p",
                                  className: j.h_,
                                  children: f.intl.string(f.t.XCGZFk),
                              }),
                          ],
                      }),
                      !0 === E &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(h.c, { canManageGuild: n, features: t.features }),
                                  (0, i.jsx)("div", { className: j.yF }),
                              ],
                          }),
                      (0, i.jsx)(_.h, { canManageGuild: n, guild: t }),
                      void 0 !== N &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", { className: j.yF }),
                                  (0, i.jsx)(m.l, {
                                      isInventoryFeedEnabled: N,
                                      canManageGuild: n,
                                      features: t.features,
                                  }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: j.yF }),
                      (0, i.jsx)(g.P, {
                          guildId: t.id,
                          defaultSettings: t.defaultMessageNotifications,
                          canManageGuild: n,
                      }),
                      (0, i.jsx)("div", { className: j.yF }),
                      (0, i.jsx)(x.R, { canManageGuild: n, guild: t }),
                      !0 === n &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)("div", { className: j.yF }), (0, i.jsx)(A.E, { guildId: t.id })],
                          }),
                  ],
              }),
          });
};
