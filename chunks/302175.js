n.d(t, { Z: () => d }), n(266796);
var r = n(200651),
    i = n(793030),
    o = n(245004),
    a = n(50101),
    s = n(953476),
    l = n(783684),
    c = n(388032),
    u = n(597282);
function d(e) {
    let { guild: t } = e;
    return (0, a.Ek)(t, 'GuildPowerupsMarketingPowerupCards')
        ? (0, r.jsxs)('div', {
              className: u.container,
              children: [
                  (0, r.jsx)(i.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: c.NW.string(l.Z.p6HUDQ)
                  }),
                  (0, r.jsx)(i.xv, {
                      variant: 'text-lg/medium',
                      children: c.NW.string(l.Z.MYYPa2)
                  }),
                  (0, r.jsx)('div', {
                      className: u.powerupsContainer,
                      children: s.O.map((e, t) =>
                          (0, r.jsx)(
                              o.Q,
                              {
                                  heading: e.title,
                                  description: e.description,
                                  imgSrc: '',
                                  label: c.NW.formatToPlainString(l.Z.QOacIS, { quantity: e.cost }),
                                  isNewPerk: !0
                              },
                              t
                          )
                      )
                  })
              ]
          })
        : null;
}
