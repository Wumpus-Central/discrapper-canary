n.d(t, { A: () => f, q: () => d });
var l,
    i = n(627968),
    s = n(503698),
    a = n.n(s),
    r = n(713654),
    u = n(573435),
    o = n(260509),
    c = n(23047),
    d = (((l = {}).SMALL_32 = "SMALL_32"), l);
let m = { SMALL_32: 24 },
    h = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] },
    f = function (e) {
        let { className: t, iconClassName: n, size: l, channel: s, guild: d, locked: f, hasActiveThreads: g } = e;
        if (null == d) return null;
        let b = (0, o.Iv)(d, 48),
            x = h[l],
            p = m[l],
            A = (0, r.gU)(s, d, { locked: f, hasActiveThreads: g });
        if (null == A) return null;
        let _ = null != d ? (0, o.Rb)(d) : "";
        return (0, i.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, i.jsx)(u.Ay, {
                    mask: u.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != b
                            ? (0, i.jsx)("img", { alt: "", src: b, className: c.Aq, style: { width: p, height: p } })
                            : (0, i.jsx)("div", {
                                  className: a()(c.Aq, c.q9),
                                  style: {
                                      fontSize: _.length - 1 > x.length ? x[x.length - 1] : x[_.length - 1],
                                      width: p,
                                      height: p,
                                  },
                                  children: _,
                              }),
                }),
                (0, i.jsx)(A, { className: a()(c.Kk, c.Is, n), color: "currentColor" }),
            ],
        });
    };
