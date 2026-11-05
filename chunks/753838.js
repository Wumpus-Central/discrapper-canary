var e = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    r = n(104510),
    t = n(646514),
    c = n(534514),
    o = n(866665),
    d = n(939249),
    m = n(473145),
    h = n(792996),
    u = n(795874);
n.d(
    l,
    {},
    {
        A: function (s) {
            let l,
                n,
                a,
                {
                    guildFeature: j,
                    guild: x,
                    className: N,
                    hideTooltip: p = !1,
                    tooltipPosition: k = "left",
                    onClick: v,
                } = s,
                _ = x.features.has(j),
                g = (0, m.Ys)(j);
            return (_
                ? (null != g && (a = h.intl.string(h.t.hUgjyP)),
                  (l = (0, e.jsxs)(e.Fragment, {
                      children: [
                          (0, e.jsx)(r.BoostGemIcon, {
                              color: t.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: u.RQ,
                          }),
                          (0, e.jsx)(c.D, {
                              variant: "body-sm/medium",
                              className: u.h_,
                              children: h.intl.string(h.t["0O+87i"]),
                          }),
                      ],
                  })))
                : (null != g && (a = h.intl.string(h.t.L2wYYj)),
                  (l = (0, e.jsxs)(e.Fragment, {
                      children: [
                          (0, e.jsx)(r.BoostGemIcon, { color: "currentColor", className: u.Kk }),
                          (0, e.jsx)(c.D, {
                              variant: "body-sm/medium",
                              className: u.h_,
                              children: null != g && (0, m.Qu)(g),
                          }),
                      ],
                  }))),
            (n =
                p || null == a
                    ? (0, e.jsx)("div", { className: i()(u.Jz, N), children: l })
                    : (0, e.jsx)(o.m, {
                          position: k,
                          text: a,
                          children: (0, e.jsx)("div", { className: i()(u.Jz, N), children: l }),
                      })),
            null == v || _)
                ? n
                : (0, e.jsx)(d.D, { onClick: v, className: u.vk, children: n });
        },
    },
);
