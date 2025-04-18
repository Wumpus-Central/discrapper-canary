n.d(t, { I: () => x });
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(442837),
    l = n(100527),
    a = n(906732),
    o = n(496675),
    c = n(999382),
    d = n(92533),
    u = n(249363),
    m = n(464865),
    g = n(888125),
    p = n(981631),
    h = n(388032),
    f = n(413905);
function x() {
    let { analyticsLocations: e } = (0, a.ZP)(l.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, s.e7)([c.Z], () => c.Z.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: x } = (0, s.cj)([o.Z], () => ({
            isGuildAdmin: null != t && o.Z.can(p.Plq.ADMINISTRATOR, t),
            canManageGuild: null != t && o.Z.can(p.Plq.MANAGE_GUILD, t)
        }));
    return null == t
        ? null
        : (0, r.jsx)(a.Gt, {
              value: e,
              children: (0, r.jsxs)('main', {
                  className: f.container,
                  children: [
                      (0, r.jsx)(i.X6, {
                          variant: 'heading-lg/semibold',
                          color: 'header-primary',
                          children: h.NW.string(h.t.UKgg5O)
                      }),
                      (0, r.jsx)(g.w, {
                          canManageGuild: x,
                          premiumProgressBarEnabled: t.premiumProgressBarEnabled
                      }),
                      (0, r.jsx)('div', { className: f.divider }),
                      (0, r.jsx)(d.A, {
                          guild: t,
                          canManageGuild: x
                      }),
                      (0, r.jsx)('div', { className: f.divider }),
                      (0, r.jsx)(u.A, {
                          guild: t,
                          canManageGuild: x
                      }),
                      n
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)('div', { className: f.divider }), (0, r.jsx)(m.V, { guild: t })]
                            })
                          : null
                  ]
              })
          });
}
