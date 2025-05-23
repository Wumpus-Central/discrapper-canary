n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var a = n(442837),
    i = n(481060),
    l = n(565138),
    o = n(430824),
    s = n(388032),
    c = n(12729);
let d = (e) => {
    let { event: t } = e,
        n = (0, a.e7)([o.Z], () => o.Z.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: c.container,
              children: [
                  (0, r.jsx)(i.X6q, {
                      className: c.header,
                      variant: 'heading-sm/semibold',
                      children: s.intl.string(s.t.SDTOLy)
                  }),
                  (0, r.jsxs)('div', {
                      className: c.guildContainer,
                      children: [
                          (0, r.jsxs)('div', {
                              className: c.guildInfo,
                              children: [
                                  (0, r.jsx)(l.Z, {
                                      guild: n,
                                      size: l.Z.Sizes.MINI,
                                      className: c.guildIcon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.name
                          })
                      ]
                  })
              ]
          });
};
