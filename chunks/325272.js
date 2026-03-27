n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(311907),
    r = n(397927),
    i = n(263063),
    s = n(71393),
    d = n(985018),
    o = n(935964);
let c = (e) => {
    let { event: t } = e,
        n = (0, a.bG)([s.A], () => s.A.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, l.jsx)(r.Heading, {
                      className: o.wx,
                      variant: "heading-sm/semibold",
                      children: d.intl.string(d.t.SDTOL7),
                  }),
                  (0, l.jsxs)("div", {
                      className: o.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: o.OA,
                              children: [
                                  (0, l.jsx)(i.Ay, { guild: n, size: i.Ay.Sizes.MINI, className: o.$f }),
                                  (0, l.jsx)(r.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(r.Text, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
