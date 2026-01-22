n.d(t, {
    A: () => h,
    q: () => d,
});
var l,
    r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(713654),
    o = n(573435),
    u = n(260509),
    c = n(129216),
    d = (((l = {}).SMALL_32 = "SMALL_32"), l);
let f = { SMALL_32: 24 },
    g = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10],
    },
    h = function (e) {
        let { className: t, iconClassName: n, size: l, channel: i, guild: d, locked: h, hasActiveThreads: m } = e;
        if (null == d) return null;
        let b = (0, u.Iv)(d, 48),
            y = g[l],
            N = f[l],
            A = (0, s.gU)(i, d, {
                locked: h,
                hasActiveThreads: m,
            });
        if (null == A) return null;
        let E = null != d ? (0, u.Rb)(d) : "";
        return (0, r.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, r.jsx)(o.Ay, {
                    mask: o.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != b
                            ? (0, r.jsx)("img", {
                                  alt: "",
                                  src: b,
                                  className: c.Aq,
                                  style: {
                                      width: N,
                                      height: N,
                                  },
                              })
                            : (0, r.jsx)("div", {
                                  className: a()(c.Aq, c.q9),
                                  style: {
                                      fontSize: E.length - 1 > y.length ? y[y.length - 1] : y[E.length - 1],
                                      width: N,
                                      height: N,
                                  },
                                  children: E,
                              }),
                }),
                (0, r.jsx)(A, {
                    className: a()(c.Kk, c.Is, n),
                    color: "currentColor",
                }),
            ],
        });
    };
