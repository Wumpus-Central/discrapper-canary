n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(565138),
    a = n(592125),
    s = n(430824),
    o = n(388032),
    d = n(557376);
let c = (e) => {
    let { entry: t } = e,
        n = a.Z.getChannel(t.channelId);
    if (null == n) return null;
    let c = s.Z.getGuild(n.guild_id);
    return null == c
        ? null
        : (0, r.jsxs)("div", {
              className: d.container,
              children: [
                  (0, r.jsx)(l.Heading, {
                      className: d.header,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.nTe4HC),
                  }),
                  (0, r.jsxs)("div", {
                      className: d.guildContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.hubInfo,
                              children: [
                                  (0, r.jsx)(i.Z, {
                                      guild: c,
                                      size: i.Z.Sizes.MINI,
                                      className: d.hubIcon,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: c.name,
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
