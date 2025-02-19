n.d(t, { Z: () => N }), n(266796);
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(442837),
    a = n(902840),
    l = n(100527),
    o = n(906732),
    c = n(34586),
    d = n(496675),
    u = n(999382),
    m = n(723914),
    p = n(30818),
    g = n(997698),
    h = n(354031),
    f = n(335438),
    b = n(981631),
    x = n(388032),
    j = n(877230);
let N = function () {
    let { analyticsLocations: e } = (0, o.ZP)(l.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, s.e7)([u.Z], () => u.Z.getProps().guild, []),
        n = (0, s.e7)([d.Z], () => null != t && d.Z.can(b.Plq.MANAGE_GUILD, t)),
        N = (0, c.E)(t),
        v = (0, a.l9)(null != t ? t : void 0);
    return null == t
        ? null
        : (0, r.jsx)(o.Gt, {
              value: e,
              children: (0, r.jsxs)('main', {
                  className: j.container,
                  children: [
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(i.X6, {
                                  variant: 'heading-lg/semibold',
                                  color: 'header-primary',
                                  children: x.NW.string(x.t['6TAHb2'])
                              }),
                              (0, r.jsx)(i.xv, {
                                  variant: 'text-sm/medium',
                                  color: 'header-secondary',
                                  tag: 'p',
                                  className: j.description,
                                  children: x.NW.string(x.t.XCGZFh)
                              })
                          ]
                      }),
                      !0 === v &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(h.P, {
                                      canManageGuild: n,
                                      features: t.features
                                  }),
                                  (0, r.jsx)('div', { className: j.divider })
                              ]
                          }),
                      (0, r.jsx)(f.l, {
                          canManageGuild: n,
                          guild: t
                      }),
                      void 0 !== N &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('div', { className: j.divider }),
                                  (0, r.jsx)(m.q, {
                                      isInventoryFeedEnabled: N,
                                      canManageGuild: n,
                                      features: t.features
                                  })
                              ]
                          }),
                      (0, r.jsx)('div', { className: j.divider }),
                      (0, r.jsx)(p.z, {
                          guildId: t.id,
                          defaultSettings: t.defaultMessageNotifications,
                          canManageGuild: n
                      }),
                      (0, r.jsx)('div', { className: j.divider }),
                      (0, r.jsx)(g.L, {
                          canManageGuild: n,
                          guild: t
                      })
                  ]
              })
          });
};
