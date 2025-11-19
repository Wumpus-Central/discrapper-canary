n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(565138),
    s = n(430824),
    o = n(388032),
    c = n(573265);
let d = (e) => {
    let { event: t } = e,
        n = (0, i.e7)([s.Z], () => s.Z.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: c.container,
              children: [
                  (0, r.jsx)(l.Heading, {
                      className: c.header,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.SDTOL7),
                  }),
                  (0, r.jsxs)("div", {
                      className: c.guildContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: c.guildInfo,
                              children: [
                                  (0, r.jsx)(a.Z, {
                                      guild: n,
                                      size: a.Z.Sizes.MINI,
                                      className: c.guildIcon,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      color: "header-secondary",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-md/semibold",
                              color: "header-primary",
                              children: t.name,
                          }),
                      ],
                  }),
              ],
          });
};
