n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(990078),
    a = n(104510),
    o = n(827734),
    d = n(534514),
    c = n(939249),
    u = n(473145),
    m = n(985018),
    g = n(460351);
let h = (e) => {
    let t,
        n,
        l,
        { guildFeature: h, guild: x, className: _, hideTooltip: p = !1, tooltipPosition: A = "left", onClick: E } = e,
        f = x.features.has(h),
        j = (0, u.Ys)(h);
    return (f
        ? (null != j && (l = m.intl.string(m.t.hUgjyP)),
          (t = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(a._, { color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: g.RQ }),
                  (0, i.jsx)(d.D, { variant: "eyebrow", className: g.h_, children: m.intl.string(m.t["0O+87i"]) }),
              ],
          })))
        : (null != j && (l = m.intl.string(m.t.L2wYYj)),
          (t = (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(a._, { color: "currentColor", className: g.Kk }),
                  (0, i.jsx)(d.D, { variant: "eyebrow", className: g.h_, children: null != j && (0, u.Qu)(j) }),
              ],
          }))),
    (n =
        p || null == l
            ? (0, i.jsx)("div", { className: s()(g.Jz, _), children: t })
            : (0, i.jsx)(r.m, {
                  position: A,
                  text: l,
                  children: (0, i.jsx)("div", { className: s()(g.Jz, _), children: t }),
              })),
    null == E || f)
        ? n
        : (0, i.jsx)(c.D, { onClick: E, className: g.vk, children: n });
};
