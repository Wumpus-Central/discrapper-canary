n.d(l, { A: () => j });
var e = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    r = n(104510),
    t = n(661531),
    c = n(534514),
    d = n(866665),
    h = n(939249),
    u = n(473145),
    m = n(105292),
    o = n(795874);
let j = function (s) {
    let l,
        n,
        a,
        { guildFeature: j, guild: x, className: N, hideTooltip: _ = !1, tooltipPosition: p = "left", onClick: k } = s,
        v = x.features.has(j),
        g = (0, u.Ys)(j);
    return (v
        ? (null != g && (a = m.intl.string(m.t.hUgjyP)),
          (l = (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsx)(r._, { color: t.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: o.RQ }),
                  (0, e.jsx)(c.D, {
                      variant: "body-sm/medium",
                      className: o.h_,
                      children: m.intl.string(m.t["0O+87i"]),
                  }),
              ],
          })))
        : (null != g && (a = m.intl.string(m.t.L2wYYj)),
          (l = (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsx)(r._, { color: "currentColor", className: o.Kk }),
                  (0, e.jsx)(c.D, { variant: "body-sm/medium", className: o.h_, children: null != g && (0, u.Qu)(g) }),
              ],
          }))),
    (n =
        _ || null == a
            ? (0, e.jsx)("div", { className: i()(o.Jz, N), children: l })
            : (0, e.jsx)(d.m, {
                  position: p,
                  text: a,
                  children: (0, e.jsx)("div", { className: i()(o.Jz, N), children: l }),
              })),
    null == k || v)
        ? n
        : (0, e.jsx)(h.D, { onClick: k, className: o.vk, children: n });
};
