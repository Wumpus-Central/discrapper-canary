"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(3026),
    l = n(834730),
    o = n(939496),
    d = n(996988),
    c = n(726342);
function u(e) {
    let { text: t, textId: n, tags: r, platformIcon: u, platformLabel: _, contextMenu: E } = e,
        { themeType: A } = (0, o.E)();
    return (null == t || "" === t) && null == E
        ? null
        : null == t || "" === t
          ? (0, i.jsx)("div", { className: a()(c.Si, c.ys), children: E })
          : (0, i.jsxs)("div", {
                className: c.wx,
                children: [
                    (0, i.jsxs)(l.E, {
                        className: c.TK,
                        variant: A === d.d.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
                        color: "text-strong",
                        id: n,
                        children: [
                            (0, i.jsx)(s.A, { children: t }),
                            null != u &&
                                (0, i.jsx)("div", {
                                    role: "image",
                                    "aria-label": _,
                                    "aria-hidden": null == _,
                                    className: c.tV,
                                    style: { maskImage: `url(${u.whiteSVG})`, WebkitMaskImage: `url(${u.whiteSVG})` },
                                }),
                            r,
                        ],
                    }),
                    null != E && (0, i.jsx)("div", { className: c.Si, children: E }),
                ],
            });
}
