"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(780645),
    o = n(834730),
    l = n(939496),
    u = n(996988),
    c = n(514566);
function d(e) {
    let { text: t, textId: n, tags: r, platformIcon: d, platformLabel: _, contextMenu: f } = e,
        { themeType: h } = (0, l.E)();
    return (null == t || "" === t) && null == f
        ? null
        : null == t || "" === t
          ? (0, i.jsx)("div", { className: s()(c.Si, c.ys), children: f })
          : (0, i.jsxs)("div", {
                className: c.wx,
                children: [
                    (0, i.jsxs)(o.E, {
                        className: c.TK,
                        variant: h === u.d.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
                        color: "text-strong",
                        id: n,
                        children: [
                            (0, i.jsx)(a.A, { children: t }),
                            null != d &&
                                (0, i.jsx)("div", {
                                    role: "image",
                                    "aria-label": _,
                                    "aria-hidden": null == _,
                                    className: c.tV,
                                    style: { maskImage: `url(${d.whiteSVG})`, WebkitMaskImage: `url(${d.whiteSVG})` },
                                }),
                            r,
                        ],
                    }),
                    null != f && (0, i.jsx)("div", { className: c.Si, children: f }),
                ],
            });
}
