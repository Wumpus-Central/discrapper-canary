"use strict";
n.d(t, { A: () => u });
var a = n(627968);
n(64700);
var i = n(534514),
    r = n(834730),
    l = n(263063),
    s = n(734057),
    d = n(71393),
    o = n(985018),
    c = n(729985);
let u = (e) => {
    let { entry: t } = e,
        n = s.A.getChannel(t.channelId);
    if (null == n) return null;
    let u = d.A.getGuild(n.guild_id);
    return null == u
        ? null
        : (0, a.jsxs)("div", {
              className: c.kL,
              children: [
                  (0, a.jsx)(i.D, {
                      className: c.wx,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.nTe4HC),
                  }),
                  (0, a.jsxs)("div", {
                      className: c.bo,
                      children: [
                          (0, a.jsxs)("div", {
                              className: c.mo,
                              children: [
                                  (0, a.jsx)(l.Ay, { guild: u, size: l.Ay.Sizes.MINI, className: c.xG }),
                                  (0, a.jsx)(r.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: u.name,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(r.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                      ],
                  }),
              ],
          });
};
