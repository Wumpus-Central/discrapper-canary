n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(565138),
    a = n(592125),
    s = n(430824),
    o = n(388032),
    c = n(557376);
let d = (e) => {
    let { entry: t } = e,
        n = a.Z.getChannel(t.channelId);
    if (null == n) return null;
    let d = s.Z.getGuild(n.guild_id);
    return null == d
        ? null
        : (0, r.jsxs)("div", {
              className: c.container,
              children: [
                  (0, r.jsx)(l.Heading, {
                      className: c.header,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.nTe4HC),
                  }),
                  (0, r.jsxs)("div", {
                      className: c.guildContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: c.hubInfo,
                              children: [
                                  (0, r.jsx)(i.Z, {
                                      guild: d,
                                      size: i.Z.Sizes.MINI,
                                      className: c.hubIcon,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: d.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: t.name,
                          }),
                      ],
                  }),
              ],
          });
};
