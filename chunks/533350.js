n.d(t, { A: () => y }), n(228524);
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(311907),
    s = n(432371),
    a = n(793574),
    c = n(688810),
    o = n(376261),
    d = n(576705),
    u = n(555337),
    f = n(503929),
    g = n(580403),
    b = n(242849),
    m = n(158352),
    p = n(668133),
    x = n(675654),
    h = n(652215),
    j = n(985018),
    O = n(574436);
let y = function () {
    let { analyticsLocations: e } = (0, c.Ay)(a.A.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, l.bG)([u.A], () => u.A.getProps().guild, []),
        n = (0, l.bG)([d.A], () => null != t && d.A.can(h.xBc.MANAGE_GUILD, t)),
        y = (0, o.T)(t),
        v = (0, s.vC)(null != t ? t : void 0);
    return null == t
        ? null
        : (0, r.jsx)(c.f5, {
              value: e,
              children: (0, r.jsxs)("main", {
                  className: O.kL,
                  children: [
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(i.DZT, {
                                  variant: "heading-lg/semibold",
                                  color: "text-strong",
                                  children: j.intl.string(j.t["6TAHbx"]),
                              }),
                              (0, r.jsx)(i.EYj, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  tag: "p",
                                  className: O.h_,
                                  children: j.intl.string(j.t.XCGZFk),
                              }),
                          ],
                      }),
                      !0 === v &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(m.c, {
                                      canManageGuild: n,
                                      features: t.features,
                                  }),
                                  (0, r.jsx)("div", { className: O.yF }),
                              ],
                          }),
                      (0, r.jsx)(p.h, {
                          canManageGuild: n,
                          guild: t,
                      }),
                      void 0 !== y &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: O.yF }),
                                  (0, r.jsx)(f.l, {
                                      isInventoryFeedEnabled: y,
                                      canManageGuild: n,
                                      features: t.features,
                                  }),
                              ],
                          }),
                      (0, r.jsx)("div", { className: O.yF }),
                      (0, r.jsx)(g.P, {
                          guildId: t.id,
                          defaultSettings: t.defaultMessageNotifications,
                          canManageGuild: n,
                      }),
                      (0, r.jsx)("div", { className: O.yF }),
                      (0, r.jsx)(b.R, {
                          canManageGuild: n,
                          guild: t,
                      }),
                      !0 === n &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)("div", { className: O.yF }), (0, r.jsx)(x.E, { guildId: t.id })],
                          }),
                  ],
              }),
          });
};
