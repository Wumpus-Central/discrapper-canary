"use strict";
n.d(t, { A: () => p, q: () => u });
var i,
    a = n(627968),
    r = n(503698),
    s = n.n(r),
    l = n(713654),
    c = n(573435),
    o = n(260509),
    d = n(23047),
    u = (((i = {}).SMALL_32 = "SMALL_32"), i);
let _ = { SMALL_32: 24 },
    m = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] },
    p = function (e) {
        let { className: t, iconClassName: n, size: i, channel: r, guild: u, locked: p, hasActiveThreads: f } = e;
        if (null == u) return null;
        let g = (0, o.Iv)(u, 48),
            h = m[i],
            b = _[i],
            C = (0, l.gU)(r, u, { locked: p, hasActiveThreads: f });
        if (null == C) return null;
        let I = null != u ? (0, o.Rb)(u) : "";
        return (0, a.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, a.jsx)(c.Ay, {
                    mask: c.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != g
                            ? (0, a.jsx)("img", { alt: "", src: g, className: d.Aq, style: { width: b, height: b } })
                            : (0, a.jsx)("div", {
                                  className: s()(d.Aq, d.q9),
                                  style: {
                                      fontSize: I.length - 1 > h.length ? h[h.length - 1] : h[I.length - 1],
                                      width: b,
                                      height: b,
                                  },
                                  children: I,
                              }),
                }),
                (0, a.jsx)(C, { className: s()(d.Kk, d.Is, n), color: "currentColor" }),
            ],
        });
    };
