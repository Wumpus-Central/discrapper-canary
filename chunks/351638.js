e.d(n, { A: () => d });
var i = e(627968);
e(64700);
var l = e(503698),
    r = e.n(l),
    a = e(3026),
    s = e(834730),
    o = e(939496),
    c = e(996988),
    u = e(514566);
function d(t) {
    let { text: n, textId: e, tags: l, platformIcon: d, platformLabel: A, contextMenu: x } = t,
        { themeType: p } = (0, o.E)();
    return (null == n || "" === n) && null == x
        ? null
        : null == n || "" === n
          ? (0, i.jsx)("div", { className: r()(u.Si, u.ys), children: x })
          : (0, i.jsxs)("div", {
                className: u.wx,
                children: [
                    (0, i.jsxs)(s.E, {
                        className: u.TK,
                        variant: p === c.d.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
                        color: "text-strong",
                        id: e,
                        children: [
                            (0, i.jsx)(a.A, { children: n }),
                            null != d &&
                                (0, i.jsx)("div", {
                                    role: "image",
                                    "aria-label": A,
                                    "aria-hidden": null == A,
                                    className: u.tV,
                                    style: { maskImage: `url(${d.whiteSVG})`, WebkitMaskImage: `url(${d.whiteSVG})` },
                                }),
                            l,
                        ],
                    }),
                    null != x && (0, i.jsx)("div", { className: u.Si, children: x }),
                ],
            });
}
