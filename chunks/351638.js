var l = e(477900);
e(582128);
var i = e(503698),
    a = e.n(i),
    r = e(3026),
    s = e(834730),
    o = e(939496),
    c = e(996988),
    u = e(260155);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { text: n, textId: e, tags: i, platformIcon: d, platformLabel: A, contextMenu: f } = t,
                { themeType: g } = (0, o.E)();
            return (null == n || "" === n) && null == f
                ? null
                : null == n || "" === n
                  ? (0, l.jsx)("div", { className: a()(u.Si, u.ys), children: f })
                  : (0, l.jsxs)("div", {
                        className: u.wx,
                        children: [
                            (0, l.jsxs)(s.E, {
                                className: u.TK,
                                variant: g === c.d.SIDEBAR ? "body-sm/medium" : "body-xs/medium",
                                color: "text-strong",
                                id: e,
                                children: [
                                    (0, l.jsx)(r.A, { children: n }),
                                    null != d &&
                                        (0, l.jsx)("div", {
                                            role: "image",
                                            "aria-label": A,
                                            "aria-hidden": null == A,
                                            className: u.tV,
                                            style: {
                                                maskImage: `url(${d.whiteSVG})`,
                                                WebkitMaskImage: `url(${d.whiteSVG})`,
                                            },
                                        }),
                                    i,
                                ],
                            }),
                            null != f && (0, l.jsx)("div", { className: u.Si, children: f }),
                        ],
                    });
        },
    },
);
