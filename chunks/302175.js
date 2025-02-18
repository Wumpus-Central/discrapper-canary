n.d(t, { Z: () => d });
var i = n(200651),
    r = n(793030),
    a = n(245004),
    s = n(50101),
    o = n(953476),
    l = n(947494),
    u = n(388032),
    c = n(912617);
function d(e) {
    let { guild: t } = e;
    return (0, s.Ek)(t, 'GuildPowerupsMarketingPowerupCards')
        ? (0, i.jsxs)('div', {
              className: c.container,
              children: [
                  (0, i.jsx)(r.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: u.intl.string(l.Z.p6HUDQ)
                  }),
                  (0, i.jsx)(r.xv, {
                      variant: 'text-lg/medium',
                      children: u.intl.string(l.Z.MYYPa2)
                  }),
                  (0, i.jsx)('div', {
                      className: c.powerupsContainer,
                      children: o.O.map((e, t) =>
                          (0, i.jsx)(
                              a.Q,
                              {
                                  heading: e.title,
                                  description: e.description,
                                  imgSrc: '',
                                  label: u.intl.formatToPlainString(l.Z.QOacIS, { quantity: e.cost }),
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
