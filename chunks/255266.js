l.d(t, { A: () => f, q: () => d });
var n,
    s = l(627968),
    r = l(503698),
    a = l.n(r),
    i = l(713654),
    u = l(573435),
    c = l(260509),
    o = l(303111),
    d = (((n = {}).SMALL_32 = "SMALL_32"), n);
let h = { SMALL_32: 24 },
    m = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] },
    f = function (e) {
        let { className: t, iconClassName: l, size: n, channel: r, guild: d, locked: f, hasActiveThreads: g } = e;
        if (null == d) return null;
        let b = (0, c.Iv)(d, 48),
            x = m[n],
            A = h[n],
            _ = (0, i.gU)(r, d, { locked: f, hasActiveThreads: g });
        if (null == _) return null;
        let p = null != d ? (0, c.Rb)(d) : "";
        return (0, s.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, s.jsx)(u.Ay, {
                    mask: u.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != b
                            ? (0, s.jsx)("img", { alt: "", src: b, className: o.Aq, style: { width: A, height: A } })
                            : (0, s.jsx)("div", {
                                  className: a()(o.Aq, o.q9),
                                  style: {
                                      fontSize: p.length - 1 > x.length ? x[x.length - 1] : x[p.length - 1],
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
