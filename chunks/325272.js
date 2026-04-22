"use strict";
n.d(t, { A: () => u });
var a = n(627968);
n(64700);
var i = n(311907),
    r = n(534514),
    l = n(834730),
    s = n(263063),
    d = n(71393),
    o = n(985018),
    c = n(336007);
let u = (e) => {
    let { event: t } = e,
        n = (0, i.bG)([d.A], () => d.A.getGuild(t.guild_id));
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: c.kL,
              children: [
                  (0, a.jsx)(r.D, {
                      className: c.wx,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.SDTOL7),
                  }),
                  (0, a.jsxs)("div", {
                      className: c.bo,
                      children: [
                          (0, a.jsxs)("div", {
                              className: c.OA,
                              children: [
                                  (0, a.jsx)(s.Ay, { guild: n, size: s.Ay.Sizes.MINI, className: c.$f }),
                                  (0, a.jsx)(l.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(l.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
