n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var r = n(793030),
    l = n(442837),
    s = n(100527),
    a = n(906732),
    o = n(496675),
    c = n(999382),
    d = n(997698),
    u = n(335438),
    m = n(981631),
    h = n(388032),
    g = n(3638);
let x = function () {
    let { analyticsLocations: e } = (0, a.ZP)(s.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, l.e7)([c.Z], () => c.Z.getProps().guild, []),
        n = (0, l.e7)([o.Z], () => null != t && o.Z.can(m.Plq.MANAGE_GUILD, t));
    return null == t
        ? null
        : (0, i.jsx)(a.Gt, {
              value: e,
              children: (0, i.jsxs)('main', {
                  className: g.container,
                  children: [
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(r.X6, {
                                  variant: 'heading-lg/semibold',
                                  color: 'header-primary',
                                  children: h.intl.string(h.t['6TAHb2'])
                              }),
                              (0, i.jsx)(r.xv, {
                                  variant: 'text-sm/medium',
                                  color: 'header-secondary',
                                  tag: 'p',
                                  children: h.intl.string(h.t.XCGZFh)
                              })
                          ]
                      }),
                      (0, i.jsx)(u.l, {
                          canManageGuild: n,
                          guild: t
                      }),
                      (0, i.jsx)('div', { className: g.divider }),
                      (0, i.jsx)(d.L, {
                          canManageGuild: n,
                          guild: t
                      })
                  ]
              })
          });
};
