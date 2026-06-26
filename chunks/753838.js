e.d(l, { A: () => x });
var n = e(627968);
e(64700);
var r = e(503698),
    a = e.n(r),
    i = e(990078),
    t = e(104510),
    c = e(661531),
    h = e(534514),
    o = e(939249),
    d = e(473145),
    u = e(375708),
    j = e(460351);
let x = function (s) {
    let l,
        e,
        r,
        { guildFeature: x, guild: m, className: N, hideTooltip: _ = !1, tooltipPosition: p = "left", onClick: k } = s,
        v = m.features.has(x),
        g = (0, d.Ys)(x);
    return (v
        ? (null != g && (r = u.intl.string(u.t.hUgjyP)),
          (l = (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(t._, { color: c.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: j.RQ }),
                  (0, n.jsx)(h.D, { variant: "eyebrow", className: j.h_, children: u.intl.string(u.t["0O+87i"]) }),
              ],
          })))
        : (null != g && (r = u.intl.string(u.t.L2wYYj)),
          (l = (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(t._, { color: "currentColor", className: j.Kk }),
                  (0, n.jsx)(h.D, { variant: "eyebrow", className: j.h_, children: null != g && (0, d.Qu)(g) }),
              ],
          }))),
    (e =
        _ || null == r
            ? (0, n.jsx)("div", { className: a()(j.Jz, N), children: l })
            : (0, n.jsx)(i.m, {
                  position: p,
                  text: r,
                  children: (0, n.jsx)("div", { className: a()(j.Jz, N), children: l }),
              })),
    null == k || v)
        ? e
        : (0, n.jsx)(o.D, { onClick: k, className: j.vk, children: e });
};
