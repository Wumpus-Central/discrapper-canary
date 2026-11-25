var e = n(477900),
    a = n(582128),
    i = n(503698),
    o = n.n(i),
    r = n(140735),
    s = n(834730),
    u = n(683063);
n(851883);
var c = n(607013);
n.d(
    l,
    {},
    {
        A: function (t) {
            let {
                    text: l,
                    tooltipText: n,
                    textVariant: i = "body-xs/medium",
                    textClassName: p,
                    "aria-label": d,
                    icon: A,
                    canTruncate: m = !0,
                    hideTooltip: x = !1,
                    hideText: I = !1,
                } = t,
                T = a.useRef(null),
                [S, N] = a.useState(!1),
                f = { variant: i, color: "none", className: o()(m && c.ps, p) },
                h = null != l && null == n && m,
                y = !x && (null != n || h || I),
                E = n ?? l ?? "",
                v = i?.startsWith("body-sm") ? c.WV : c.Dk,
                j = a.useCallback(() => {
                    if (h) {
                        let { current: t } = T;
                        N((null != t && t.offsetWidth < t.scrollWidth) || I);
                    } else N(!0);
                }, [h, I]),
                C = a.useCallback(() => {
                    N(!1);
                }, []);
            return null == A && I
                ? null
                : y
                  ? (0, e.jsx)(u.u, {
                        body: E,
                        asset: A,
                        assetSize: 16,
                        delay: 150,
                        shouldShow: S,
                        children: (0, e.jsxs)("div", {
                            className: o()(c.kL, c.O1, v),
                            "aria-label": d,
                            onMouseEnter: j,
                            onMouseLeave: C,
                            children: [A, !I && (0, e.jsx)(s.E, { ref: T, ...f, children: l })],
                        }),
                    })
                  : (0, e.jsxs)("div", {
                        className: o()(c.kL, c.O1, v),
                        children: [A, I ? (0, e.jsx)(r.A, { children: d }) : (0, e.jsx)(s.E, { ...f, children: l })],
                    });
        },
    },
);
