n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(565138),
    s = n(592125),
    o = n(430824),
    l = n(388032),
    u = n(411773);
let c = (e) => {
    let { entry: t } = e,
        n = s.Z.getChannel(t.channelId);
    if (null == n) return null;
    let c = o.Z.getGuild(n.guild_id);
    return null == c
        ? null
        : (0, i.jsxs)('div', {
              className: u.container,
              children: [
                  (0, i.jsx)(r.X6q, {
                      className: u.header,
                      variant: 'heading-sm/semibold',
                      children: l.intl.string(l.t.nTe4HB)
                  }),
                  (0, i.jsxs)('div', {
                      className: u.guildContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: u.hubInfo,
                              children: [
                                  (0, i.jsx)(a.Z, {
                                      guild: c,
                                      size: a.Z.Sizes.MINI,
                                      className: u.hubIcon
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: c.name
                                  })
                              ]
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.name
                          })
                      ]
                  })
              ]
          });
};
