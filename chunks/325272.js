n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var a = n(311907),
    i = n(534514),
    r = n(834730),
    s = n(263063),
    d = n(71393),
    o = n(985018),
    c = n(336007);
let u = (e) => {
    let { event: t } = e,
        n = (0, a.bG)([d.A], () => d.A.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: c.kL,
              children: [
                  (0, l.jsx)(i.D, {
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
                                  (0, l.jsx)(s.Ay, { guild: n, size: s.Ay.Sizes.MINI, className: c.$f }),
                                  (0, l.jsx)(r.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(r.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
