n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var l = n(442837),
    i = n(481060),
    a = n(565138),
    s = n(430824),
    o = n(388032),
    d = n(914426);
let c = (e) => {
    let { event: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: d.container,
              children: [
                  (0, r.jsx)(i.Heading, {
                      className: d.header,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.SDTOL7),
                  }),
                  (0, r.jsxs)("div", {
                      className: d.guildContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.guildInfo,
                              children: [
                                  (0, r.jsx)(a.Z, {
                                      guild: n,
                                      size: a.Z.Sizes.MINI,
                                      className: d.guildIcon,
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: t.name,
                          }),
                      ],
                  }),
              ],
          });
};
