n.d(t, { I: () => b });
var r = n(255367);
n(73800);
var i = n(793030),
    l = n(442837),
    a = n(100527),
    s = n(906732),
    o = n(158638),
    c = n(496675),
    d = n(999382),
    u = n(92533),
    m = n(249363),
    g = n(464865),
    p = n(888125),
    h = n(981631),
    f = n(388032),
    x = n(162161);
function b() {
    let { analyticsLocations: e } = (0, s.ZP)(a.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE),
        t = (0, l.e7)([d.Z], () => d.Z.getProps().guild, []),
        { isGuildAdmin: n, canManageGuild: b } = (0, l.cj)([c.Z], () => ({
            isGuildAdmin: null != t && c.Z.can(h.Plq.ADMINISTRATOR, t),
            canManageGuild: null != t && c.Z.can(h.Plq.MANAGE_GUILD, t)
        })),
        j = (0, o.g1)(null == t ? void 0 : t.id, 'GuildSettingsBoostPerks');
    return null == t
        ? null
        : (0, r.jsx)(s.Gt, {
              value: e,
              children: (0, r.jsxs)('main', {
                  className: x.container,
                  children: [
                      (0, r.jsx)(i.X6, {
                          variant: 'heading-lg/semibold',
                          color: 'header-primary',
                          children: f.intl.string(f.t.UKgg5O)
                      }),
                      (0, r.jsx)(p.w, {
                          canManageGuild: b,
                          premiumProgressBarEnabled: t.premiumProgressBarEnabled
                      }),
                      (0, r.jsx)('div', { className: x.divider }),
                      (0, r.jsx)(u.A, {
                          guild: t,
                          canManageGuild: b
                      }),
                      (0, r.jsx)('div', { className: x.divider }),
                      j
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(g.V, { guild: t }), (0, r.jsx)('div', { className: x.divider })]
                                        }),
                                    (0, r.jsx)(m.A, {
                                        guild: t,
                                        canManageGuild: b
                                    })
                                ]
                            })
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(m.A, {
                                        guild: t,
                                        canManageGuild: b
                                    }),
                                    n &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)('div', { className: x.divider }), (0, r.jsx)(g.V, { guild: t })]
                                        })
                                ]
                            })
                  ]
              })
          });
}
