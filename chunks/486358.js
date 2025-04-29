n.d(t, { Z: () => v }), n(953529);
var r = n(255367);
n(73800);
var i = n(793030),
    l = n(442837),
    s = n(902840),
    a = n(100527),
    o = n(906732),
    c = n(34586),
    u = n(496675),
    d = n(999382),
    m = n(723914),
    g = n(30818),
    p = n(997698),
    h = n(354031),
    f = n(335438),
    x = n(166805),
    b = n(981631),
    j = n(388032),
    _ = n(515636);
let v = function () {
    let { analyticsLocations: e } = (0, o.ZP)(a.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, l.e7)([d.Z], () => d.Z.getProps().guild, []),
        n = (0, l.e7)([u.Z], () => null != t && u.Z.can(b.Plq.MANAGE_GUILD, t)),
        v = (0, c.E)(t),
        O = (0, s.l9)(null != t ? t : void 0);
    return null == t
        ? null
        : (0, r.jsx)(o.Gt, {
              value: e,
              children: (0, r.jsxs)('main', {
                  className: _.container,
                  children: [
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(i.X6, {
                                  variant: 'heading-lg/semibold',
                                  color: 'header-primary',
                                  children: j.intl.string(j.t['6TAHb2'])
                              }),
                              (0, r.jsx)(i.xv, {
                                  variant: 'text-sm/medium',
                                  color: 'header-secondary',
                                  tag: 'p',
                                  className: _.description,
                                  children: j.intl.string(j.t.XCGZFh)
                              })
                          ]
                      }),
                      !0 === O &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(h.P, {
                                      canManageGuild: n,
                                      features: t.features
                                  }),
                                  (0, r.jsx)('div', { className: _.divider })
                              ]
                          }),
                      (0, r.jsx)(f.l, {
                          canManageGuild: n,
                          guild: t
                      }),
                      void 0 !== v &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('div', { className: _.divider }),
                                  (0, r.jsx)(m.q, {
                                      isInventoryFeedEnabled: v,
                                      canManageGuild: n,
                                      features: t.features
                                  })
                              ]
                          }),
                      (0, r.jsx)('div', { className: _.divider }),
                      (0, r.jsx)(g.z, {
                          guildId: t.id,
                          defaultSettings: t.defaultMessageNotifications,
                          canManageGuild: n
                      }),
                      (0, r.jsx)('div', { className: _.divider }),
                      (0, r.jsx)(p.L, {
                          canManageGuild: n,
                          guild: t
                      }),
                      !0 === n &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)('div', { className: _.divider }), (0, r.jsx)(x.P, { guildId: t.id })]
                          })
                  ]
              })
          });
};
