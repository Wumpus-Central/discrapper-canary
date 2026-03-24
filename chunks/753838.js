"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(990078),
    a = n(397927),
    o = n(473145),
    d = n(985018),
    c = n(483116);
let u = (e) => {
    let t,
        n,
        s,
        { guildFeature: u, guild: m, className: g, hideTooltip: x = !1, tooltipPosition: h = "left", onClick: _ } = e,
        p = m.features.has(u),
        A = (0, o.Ys)(u);
    return (p
        ? (null != A && (s = d.intl.string(d.t.hUgjyP)),
          (t = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(a._Jp, { color: a.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK, className: c.RQ }),
                  (0, i.jsx)(a.Heading, {
                      variant: "eyebrow",
                      className: c.h_,
                      children: d.intl.string(d.t["0O+87i"]),
                  }),
              ],
          })))
        : (null != A && (s = d.intl.string(d.t.L2wYYj)),
          (t = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(a._Jp, { color: "currentColor", className: c.Kk }),
                  (0, i.jsx)(a.Heading, { variant: "eyebrow", className: c.h_, children: null != A && (0, o.Qu)(A) }),
              ],
          }))),
    (n =
        x || null == s
            ? (0, i.jsx)("div", { className: l()(c.Jz, g), children: t })
            : (0, i.jsx)(r.m, {
                  position: h,
                  text: s,
                  children: (0, i.jsx)("div", { className: l()(c.Jz, g), children: t }),
              })),
    null == _ || p)
        ? n
        : (0, i.jsx)(a.DUT, { onClick: _, className: c.vk, children: n });
};
