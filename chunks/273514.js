var i = r(200651);
r(192379);
var a = r(481060),
    s = r(565138),
    o = r(592125),
    l = r(430824),
    u = r(388032),
    c = r(411773);
let d = (e) => {
    let { entry: n } = e,
        r = o.Z.getChannel(n.channelId);
    if (null == r) return null;
    let d = l.Z.getGuild(r.guild_id);
    return null == d
        ? null
        : (0, i.jsxs)('div', {
              className: c.container,
              children: [
                  (0, i.jsx)(a.Heading, {
                      className: c.header,
                      variant: 'heading-sm/semibold',
                      children: u.intl.string(u.t.nTe4HB)
                  }),
                  (0, i.jsxs)('div', {
                      className: c.guildContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: c.hubInfo,
                              children: [
                                  (0, i.jsx)(s.Z, {
                                      guild: d,
                                      size: s.Z.Sizes.MINI,
                                      className: c.hubIcon
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: d.name
                                  })
                              ]
                          }),
                          (0, i.jsx)(a.Text, {
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
