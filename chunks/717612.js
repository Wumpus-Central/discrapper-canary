n.d(t, {
    A: () => d,
});
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(263063),
    i = n(734057),
    s = n(71393),
    o = n(985018),
    c = n(611090);
let d = (e) => {
    let { entry: t } = e,
        n = i.A.getChannel(t.channelId);
    if (null == n) return null;
    let d = s.A.getGuild(n.guild_id);
    return null == d
        ? null
        : (0, l.jsxs)("div", {
              className: c.kL,
              children: [
                  (0, l.jsx)(r.Heading, {
                      className: c.wx,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.nTe4HC),
                  }),
                  (0, l.jsxs)("div", {
                      className: c.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: c.mo,
                              children: [
                                  (0, l.jsx)(a.A, {
                                      guild: d,
                                      size: a.A.Sizes.MINI,
                                      className: c.xG,
                                  }),
                                  (0, l.jsx)(r.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: d.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(r.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: t.name,
                          }),
                      ],
                  }),
              ],
          });
};
