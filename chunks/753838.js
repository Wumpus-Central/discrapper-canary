var a = n(477900);
n(582128);
var e = n(503698),
    i = n.n(e),
    r = n(104510),
    t = n(646514),
    c = n(534514),
    d = n(866665),
    h = n(939249),
    u = n(473145),
    m = n(792996),
    o = n(795874);
n.d(
    l,
    {},
    {
        A: function (s) {
            let l,
                n,
                e,
                {
                    guildFeature: j,
                    guild: x,
                    className: N,
                    hideTooltip: _ = !1,
                    tooltipPosition: p = "left",
                    onClick: k,
                } = s,
                v = x.features.has(j),
                g = (0, u.Ys)(j);
            return (v
                ? (null != g && (e = m.intl.string(m.t.hUgjyP)),
                  (l = (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(r._, { color: t.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: o.RQ }),
                          (0, a.jsx)(c.D, {
                              variant: "body-sm/medium",
                              className: o.h_,
                              children: m.intl.string(m.t["0O+87i"]),
                          }),
                      ],
                  })))
                : (null != g && (e = m.intl.string(m.t.L2wYYj)),
                  (l = (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(r._, { color: "currentColor", className: o.Kk }),
                          (0, a.jsx)(c.D, {
                              variant: "body-sm/medium",
                              className: o.h_,
                              children: null != g && (0, u.Qu)(g),
                          }),
                      ],
                  }))),
            (n =
                _ || null == e
                    ? (0, a.jsx)("div", { className: i()(o.Jz, N), children: l })
                    : (0, a.jsx)(d.m, {
                          position: p,
                          text: e,
                          children: (0, a.jsx)("div", { className: i()(o.Jz, N), children: l }),
                      })),
            null == k || v)
                ? n
                : (0, a.jsx)(h.D, { onClick: k, className: o.vk, children: n });
        },
    },
);
