n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var l = n(534514),
    s = n(834730),
    r = n(311907),
    a = n(432371),
    o = n(793574),
    d = n(688810),
    c = n(376261),
    u = n(576705),
    m = n(555337),
    g = n(503929),
    h = n(580403),
    x = n(242849),
    _ = n(158352),
    p = n(668133),
    A = n(675654),
    E = n(652215),
    f = n(985018),
    j = n(887425);
let N = function () {
    let { analyticsLocations: e } = (0, d.Ay)(o.A.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, r.bG)([m.A], () => m.A.getProps().guild, []),
        n = (0, r.bG)([u.A], () => null != t && u.A.can(E.xBc.MANAGE_GUILD, t)),
        N = (0, c.T)(t),
        I = (0, a.vC)(t ?? void 0);
    return null == t
        ? null
        : (0, i.jsx)(d.f5, {
              value: e,
              children: (0, i.jsxs)("main", {
                  className: j.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(l.D, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: f.intl.string(f.t["6TAHbx"]),
                              }),
                              (0, i.jsx)(s.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  tag: "p",
                                  className: j.h_,
                                  children: f.intl.string(f.t.XCGZFk),
                              }),
                          ],
                      }),
                      !0 === I &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(_.c, { canManageGuild: n, features: t.features }),
                                  (0, i.jsx)("div", { className: j.yF }),
                              ],
                          }),
                      (0, i.jsx)(p.h, { canManageGuild: n, guild: t }),
                      void 0 !== N &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", { className: j.yF }),
                                  (0, i.jsx)(g.l, {
                                      isInventoryFeedEnabled: N,
                                      canManageGuild: n,
                                      features: t.features,
                                  }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: j.yF }),
                      (0, i.jsx)(h.P, {
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
