n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(3026),
    o = n(397927),
    l = n(939496),
    c = n(996988),
    u = n(380297);
function d(e) {
    let { text: t, textId: n, tags: i, platformIcon: d, contextMenu: f } = e,
        { themeType: p } = (0, l.E)();
    return (null == t || "" === t) && null == f
        ? null
        : null == t || "" === t
          ? (0, r.jsx)("div", {
                className: a()(u.Si, u.ys),
                children: f,
            })
          : (0, r.jsxs)("div", {
                className: u.wx,
                children: [
                    (0, r.jsxs)(o.Text, {
                        className: u.TK,
                        variant: p === c.d.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
                        color: "text-strong",
                        id: n,
                        children: [
                            (0, r.jsx)(s.A, { children: t }),
                            null != d &&
                                (0, r.jsx)("div", {
                                    className: u.tV,
                                    style: {
                                        maskImage: "url(".concat(d.whiteSVG, ")"),
                                        WebkitMaskImage: "url(".concat(d.whiteSVG, ")"),
                                    },
                                }),
                            i,
                        ],
                    }),
                    null != f &&
                        (0, r.jsx)("div", {
                            className: u.Si,
                            children: f,
                        }),
                ],
            });
}
