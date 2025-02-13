n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(565138),
    s = n(430824),
    o = n(388032),
    d = n(494762);
let c = (e) => {
    let { event: t } = e,
        n = (0, i.e7)([s.Z], () => s.Z.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, l.jsxs)('div', {
              className: d.container,
              children: [
                  (0, l.jsx)(r.X6q, {
                      className: d.header,
                      variant: 'heading-sm/semibold',
                      children: o.intl.string(o.t.SDTOLy)
                  }),
                  (0, l.jsxs)('div', {
                      className: d.guildContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: d.guildInfo,
                              children: [
                                  (0, l.jsx)(a.Z, {
                                      guild: n,
                                      size: a.Z.Sizes.MINI,
                                      className: d.guildIcon
                                  }),
                                  (0, l.jsx)(r.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: n.name
                                  })
                              ]
                          }),
                          (0, l.jsx)(r.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.name
                          })
                      ]
                  })
              ]
          });
};
