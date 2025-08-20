n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(565138),
    a = n(592125),
    o = n(430824),
    s = n(388032),
    c = n(238972);
let d = (e) => {
    let { entry: t } = e,
        n = a.Z.getChannel(t.channelId);
    if (null == n) return null;
    let d = o.Z.getGuild(n.guild_id);
    return null == d
        ? null
        : (0, r.jsxs)("div", {
              className: c.container,
              children: [
                  (0, r.jsx)(i.X6q, {
                      className: c.header,
                      variant: "heading-sm/semibold",
                      children: s.intl.string(s.t.nTe4HB),
                  }),
                  (0, r.jsxs)("div", {
                      className: c.guildContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: c.hubInfo,
                              children: [
                                  (0, r.jsx)(l.Z, {
                                      guild: d,
                                      size: l.Z.Sizes.MINI,
                                      className: c.hubIcon,
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: "header-secondary",
                                      variant: "text-sm/normal",
                                      children: d.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: "text-md/semibold",
                              color: "header-primary",
                              children: t.name,
                          }),
                      ],
                  }),
              ],
          });
};
