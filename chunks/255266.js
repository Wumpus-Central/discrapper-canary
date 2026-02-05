n.d(t, { A: () => f, q: () => d });
var l,
    i = n(627968),
    a = n(503698),
    s = n.n(a),
    r = n(713654),
    o = n(573435),
    u = n(260509),
    c = n(129216),
    d = (((l = {}).SMALL_32 = "SMALL_32"), l);
let h = { SMALL_32: 24 },
    g = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] },
    f = function (e) {
        let { className: t, iconClassName: n, size: l, channel: a, guild: d, locked: f, hasActiveThreads: m } = e;
        if (null == d) return null;
        let p = (0, u.Iv)(d, 48),
            N = g[l],
            A = h[l],
            E = (0, r.gU)(a, d, { locked: f, hasActiveThreads: m });
        if (null == E) return null;
        let x = null != d ? (0, u.Rb)(d) : "";
        return (0, i.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, i.jsx)(o.Ay, {
                    mask: o.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != p
                            ? (0, i.jsx)("img", { alt: "", src: p, className: c.Aq, style: { width: A, height: A } })
                            : (0, i.jsx)("div", {
                                  className: s()(c.Aq, c.q9),
                                  style: {
                                      fontSize: x.length - 1 > N.length ? N[N.length - 1] : N[x.length - 1],
                                      width: A,
                                      height: A,
                                  },
                                  children: x,
                              }),
                }),
                (0, i.jsx)(E, { className: s()(c.Kk, c.Is, n), color: "currentColor" }),
            ],
        });
    };
