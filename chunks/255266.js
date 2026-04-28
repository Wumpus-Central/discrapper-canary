s.d(e, { A: () => g, q: () => d });
var t,
    n = s(627968),
    i = s(503698),
    h = s.n(i),
    r = s(713654),
    c = s(573435),
    a = s(260509),
    u = s(23047),
    d = (((t = {}).SMALL_32 = "SMALL_32"), t);
let L = { SMALL_32: 24 },
    _ = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] },
    g = function (l) {
        let { className: e, iconClassName: s, size: t, channel: i, guild: d, locked: g, hasActiveThreads: o } = l;
        if (null == d) return null;
        let A = (0, a.Iv)(d, 48),
            m = _[t],
            p = L[t],
            N = (0, r.gU)(i, d, { locked: g, hasActiveThreads: o });
        if (null == N) return null;
        let k = null != d ? (0, a.Rb)(d) : "";
        return (0, n.jsxs)("div", {
            role: "img",
            className: e,
            children: [
                (0, n.jsx)(c.Ay, {
                    mask: c.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != A
                            ? (0, n.jsx)("img", { alt: "", src: A, className: u.Aq, style: { width: p, height: p } })
                            : (0, n.jsx)("div", {
                                  className: h()(u.Aq, u.q9),
                                  style: {
                                      fontSize: k.length - 1 > m.length ? m[m.length - 1] : m[k.length - 1],
                                      width: p,
                                      height: p,
                                  },
                                  children: k,
                              }),
                }),
                (0, n.jsx)(N, { className: h()(u.Kk, u.Is, s), color: "currentColor" }),
            ],
        });
    };
