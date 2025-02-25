n.d(t, { I: () => g });
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(442837),
    a = n(100527),
    l = n(906732),
    o = n(496675),
    c = n(999382),
    d = n(888125),
    u = n(981631),
    m = n(388032),
    p = n(13798);
function g() {
    let { analyticsLocations: e } = (0, l.ZP)(a.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, s.e7)([c.Z], () => c.Z.getProps().guild, []),
        n = (0, s.e7)([o.Z], () => null != t && o.Z.can(u.Plq.MANAGE_GUILD, t));
    return null == t
        ? null
        : (0, r.jsx)(l.Gt, {
              value: e,
              children: (0, r.jsxs)('main', {
                  className: p.container,
                  children: [
                      (0, r.jsx)(i.X6, {
                          variant: 'heading-lg/semibold',
                          color: 'header-primary',
                          children: m.NW.string(m.t.UKgg5O)
                      }),
                      (0, r.jsx)(d.w, {
                          canManageGuild: n,
                          premiumProgressBarEnabled: t.premiumProgressBarEnabled
                      }),
                      (0, r.jsx)('div', { className: p.divider })
                  ]
              })
          });
}
