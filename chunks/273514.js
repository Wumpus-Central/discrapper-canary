n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(565138),
    a = n(592125),
    s = n(430824),
    o = n(388032),
    d = n(266469);
let c = (e) => {
    let { entry: t } = e,
        n = a.Z.getChannel(t.channelId);
    if (null == n) return null;
    let c = s.Z.getGuild(n.guild_id);
    return null == c
        ? null
        : (0, l.jsxs)('div', {
              className: d.container,
              children: [
                  (0, l.jsx)(i.X6q, {
                      className: d.header,
                      variant: 'heading-sm/semibold',
                      children: o.intl.string(o.t.nTe4HB)
                  }),
                  (0, l.jsxs)('div', {
                      className: d.guildContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: d.hubInfo,
                              children: [
                                  (0, l.jsx)(r.Z, {
                                      guild: c,
                                      size: r.Z.Sizes.MINI,
                                      className: d.hubIcon
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: c.name
                                  })
                              ]
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.name
                          })
                      ]
                  })
              ]
          });
};
