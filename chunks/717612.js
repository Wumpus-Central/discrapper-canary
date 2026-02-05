n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var a = n(397927),
    i = n(263063),
    r = n(734057),
    s = n(71393),
    d = n(985018),
    o = n(611090);
let u = (e) => {
    let { entry: t } = e,
        n = r.A.getChannel(t.channelId);
    if (null == n) return null;
    let u = s.A.getGuild(n.guild_id);
    return null == u
        ? null
        : (0, l.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, l.jsx)(a.Heading, {
                      className: o.wx,
                      variant: "heading-sm/semibold",
                      children: d.intl.string(d.t.nTe4HC),
                  }),
                  (0, l.jsxs)("div", {
                      className: o.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: o.mo,
                              children: [
                                  (0, l.jsx)(i.A, { guild: u, size: i.A.Sizes.MINI, className: o.xG }),
                                  (0, l.jsx)(a.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: u.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(a.Text, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
