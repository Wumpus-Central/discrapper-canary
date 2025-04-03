n.d(t, { Z: () => _ }), n(266796);
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
    g = n(30818),
    p = n(997698),
    h = n(354031),
    f = n(335438),
    b = n(166805),
    x = n(981631),
    j = n(388032),
    N = n(515636);
let _ = function () {
    let { analyticsLocations: e } = (0, o.ZP)(l.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, s.e7)([u.Z], () => u.Z.getProps().guild, []),
        n = (0, s.e7)([d.Z], () => null != t && d.Z.can(x.Plq.MANAGE_GUILD, t)),
        _ = (0, c.E)(t),
        v = (0, a.l9)(null != t ? t : void 0);
    return null == t
        ? null
        : (0, r.jsx)(o.Gt, {
              value: e,
              children: (0, r.jsxs)('main', {
                  className: N.container,
                  children: [
                      (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(i.X6, {
                                  variant: 'heading-lg/semibold',
                                  color: 'header-primary',
                                  children: j.NW.string(j.t['6TAHb2'])
                              }),
                              (0, r.jsx)(i.xv, {
                                  variant: 'text-sm/medium',
                                  color: 'header-secondary',
                                  tag: 'p',
                                  className: N.description,
                                  children: j.NW.string(j.t.XCGZFh)
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
                                  (0, r.jsx)('div', { className: N.divider })
                              ]
                          }),
                      (0, r.jsx)(f.l, {
                          canManageGuild: n,
                          guild: t
                      }),
                      void 0 !== _ &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('div', { className: N.divider }),
                                  (0, r.jsx)(m.q, {
                                      isInventoryFeedEnabled: _,
                                      canManageGuild: n,
                                      features: t.features
                                  })
                              ]
                          }),
                      (0, r.jsx)('div', { className: N.divider }),
                      (0, r.jsx)(g.z, {
                          guildId: t.id,
                          defaultSettings: t.defaultMessageNotifications,
                          canManageGuild: n
                      }),
                      (0, r.jsx)('div', { className: N.divider }),
                      (0, r.jsx)(p.L, {
                          canManageGuild: n,
                          guild: t
                      }),
                      !0 === n &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)('div', { className: N.divider }), (0, r.jsx)(b.P, { guildId: t.id })]
                          })
                  ]
              })
          });
};
