n.d(e, { A: () => d });
var l = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    r = n(3026),
    s = n(834730),
    o = n(939496),
    c = n(996988),
    u = n(260155);
function d(t) {
    let { text: e, textId: n, tags: i, platformIcon: d, platformLabel: A, contextMenu: f } = t,
        { themeType: p } = (0, o.E)();
    return (null == e || "" === e) && null == f
        ? null
        : null == e || "" === e
          ? (0, l.jsx)("div", { className: a()(u.Si, u.ys), children: f })
          : (0, l.jsxs)("div", {
                className: u.wx,
                children: [
                    (0, l.jsxs)(s.E, {
                        className: u.TK,
                        variant: p === c.d.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
                        color: "text-strong",
                        id: n,
                        children: [
                            (0, l.jsx)(r.A, { children: e }),
                            null != d &&
                                (0, l.jsx)("div", {
                                    role: "image",
                                    "aria-label": A,
                                    "aria-hidden": null == A,
                                    className: u.tV,
                                    style: { maskImage: `url(${d.whiteSVG})`, WebkitMaskImage: `url(${d.whiteSVG})` },
                                }),
                            i,
                        ],
                    }),
                    null != f && (0, l.jsx)("div", { className: u.Si, children: f }),
                ],
            });
}
