var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(565138),
    l = r(430824),
    u = r(388032),
    c = r(368144);
let d = (e) => {
    let { event: n } = e,
        r = (0, a.e7)([l.Z], () => l.Z.getGuild(n.guild_id));
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: c.container,
              children: [
                  (0, i.jsx)(s.Heading, {
                      className: c.header,
                      variant: 'heading-sm/semibold',
                      children: u.intl.string(u.t.SDTOLy)
                  }),
                  (0, i.jsxs)('div', {
                      className: c.guildContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: c.guildInfo,
                              children: [
                                  (0, i.jsx)(o.Z, {
                                      guild: r,
                                      size: o.Z.Sizes.MINI,
                                      className: c.guildIcon
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: r.name
                                  })
                              ]
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: n.name
                          })
                      ]
                  })
              ]
          });
};
n.Z = d;
