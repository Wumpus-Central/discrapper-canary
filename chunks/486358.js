n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(793030),
    l = n(442837),
    s = n(100527),
    a = n(906732),
    o = n(496675),
    c = n(999382),
    d = n(715224),
    u = n(981631),
    m = n(388032),
    h = n(3638);
let g = function () {
    let { analyticsLocations: e } = (0, a.ZP)(s.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE),
        t = (0, l.e7)([c.Z], () => c.Z.getProps().guild, []),
        n = (0, l.e7)([o.Z], () => null != t && o.Z.can(u.Plq.MANAGE_GUILD, t));
    return null == t
        ? null
        : (0, i.jsx)(a.Gt, {
              value: e,
              children: (0, i.jsxs)('main', {
                  className: h.container,
                  children: [
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(r.X6, {
                                  variant: 'heading-lg/semibold',
                                  color: 'header-primary',
                                  children: m.intl.string(m.t['6TAHb2'])
                              }),
                              (0, i.jsx)(r.xv, {
                                  variant: 'text-sm/medium',
                                  color: 'header-secondary',
                                  tag: 'p',
                                  children: m.intl.string(m.t.XCGZFh)
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(r.X6, {
                                  variant: 'text-xs/bold',
                                  color: 'text-muted',
                                  className: h.subtitle,
                                  children: m.intl.string(m.t.Cv6ANz)
                              }),
                              (0, i.jsx)(d.W, {
                                  canManageGuild: n,
                                  guild: t,
                                  switchClassName: h.switch
                              })
                          ]
                      })
                  ]
              })
          });
};
