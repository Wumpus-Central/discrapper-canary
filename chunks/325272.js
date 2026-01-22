n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    i = n(263063),
    s = n(71393),
    o = n(985018),
    c = n(715134);
let d = (e) => {
    let { event: t } = e,
        n = (0, r.bG)([s.A], () => s.A.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: c.kL,
              children: [
                  (0, l.jsx)(a.Heading, {
                      className: c.wx,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.SDTOL7),
                  }),
                  (0, l.jsxs)("div", {
                      className: c.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: c.OA,
                              children: [
                                  (0, l.jsx)(i.A, {
                                      guild: n,
                                      size: i.A.Sizes.MINI,
                                      className: c.$f,
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(a.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: t.name,
                          }),
                      ],
                  }),
              ],
          });
};
