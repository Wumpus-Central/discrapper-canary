n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(565138),
    a = n(592125),
    o = n(430824),
    s = n(388032),
    c = n(548304);
let d = (e) => {
    let { entry: t } = e,
        n = a.Z.getChannel(t.channelId);
    if (null == n) return null;
    let d = o.Z.getGuild(n.guild_id);
    return null == d
        ? null
        : (0, r.jsxs)('div', {
              className: c.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: c.header,
                      variant: 'heading-sm/semibold',
                      children: s.NW.string(s.t.nTe4HB)
                  }),
                  (0, r.jsxs)('div', {
                      className: c.guildContainer,
                      children: [
                          (0, r.jsxs)('div', {
                              className: c.hubInfo,
                              children: [
                                  (0, r.jsx)(i.Z, {
                                      guild: d,
                                      size: i.Z.Sizes.MINI,
                                      className: c.hubIcon
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: d.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.name
                          })
                      ]
                  })
              ]
          });
};
