l.d(t, { A: () => f, q: () => d });
var n,
    s = l(627968),
    r = l(503698),
    a = l.n(r),
    i = l(713654),
    u = l(573435),
    c = l(260509),
    o = l(23047),
    d = (((n = {}).SMALL_32 = "SMALL_32"), n);
let h = { SMALL_32: 24 },
    m = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] },
    f = function (e) {
        let { className: t, iconClassName: l, size: n, channel: r, guild: d, locked: f, hasActiveThreads: x } = e;
        if (null == d) return null;
        let g = (0, c.Iv)(d, 48),
            b = m[n],
            A = h[n],
            _ = (0, i.gU)(r, d, { locked: f, hasActiveThreads: x });
        if (null == _) return null;
        let p = null != d ? (0, c.Rb)(d) : "";
        return (0, s.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, s.jsx)(u.Ay, {
                    mask: u.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != g
                            ? (0, s.jsx)("img", { alt: "", src: g, className: o.Aq, style: { width: A, height: A } })
                            : (0, s.jsx)("div", {
                                  className: a()(o.Aq, o.q9),
                                  style: {
                                      fontSize: p.length - 1 > b.length ? b[b.length - 1] : b[p.length - 1],
                                      width: A,
                                      height: A,
                                  },
                                  children: p,
                              }),
                }),
                (0, s.jsx)(_, { className: a()(o.Kk, o.Is, l), color: "currentColor" }),
            ],
        });
    };
