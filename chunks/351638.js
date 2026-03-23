"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(3026),
    o = n(397927),
    l = n(939496),
    u = n(996988),
    c = n(380297);
function d(e) {
    let { text: t, textId: n, tags: i, platformIcon: d, platformLabel: _, contextMenu: f } = e,
        { themeType: p } = (0, l.E)();
    return (null == t || "" === t) && null == f
        ? null
        : null == t || "" === t
          ? (0, r.jsx)("div", { className: s()(c.Si, c.ys), children: f })
          : (0, r.jsxs)("div", {
                className: c.wx,
                children: [
                    (0, r.jsxs)(o.Text, {
                        className: c.TK,
                        variant: p === u.d.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
                        color: "text-strong",
                        id: n,
                        children: [
                            (0, r.jsx)(a.A, { children: t }),
                            null != d &&
                                (0, r.jsx)("div", {
                                    role: "image",
                                    "aria-label": _,
                                    "aria-hidden": null == _,
                                    className: c.tV,
                                    style: { maskImage: `url(${d.whiteSVG})`, WebkitMaskImage: `url(${d.whiteSVG})` },
                                }),
                            i,
                        ],
                    }),
                    null != f && (0, r.jsx)("div", { className: c.Si, children: f }),
                ],
            });
}
