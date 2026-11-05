var e = n(477900),
    a = n(582128),
    i = n(503698),
    o = n.n(i),
    r = n(834730),
    s = n(683063);
n(851883);
var u = n(607013);
n.d(
    l,
    {},
    {
        A: function (t) {
            let {
                    text: l,
                    tooltipText: n,
                    textVariant: i = "body-xs/medium",
                    textClassName: c,
                    "aria-label": p,
                    icon: d,
                    canTruncate: A = !0,
                    hideTooltip: m = !1,
                    hideText: x = !1,
                } = t,
                I = a.useRef(null),
                [T, S] = a.useState(!1),
                N = { variant: i, color: "none", className: o()(A && u.ps, c) },
                f = null != l && null == n && A,
                y = !m && (null != n || f || x),
                h = n ?? l ?? "",
                E = i?.startsWith("body-sm") ? u.WV : u.Dk,
                v = a.useCallback(() => {
                    if (f) {
                        let { current: t } = I;
                        S((null != t && t.offsetWidth < t.scrollWidth) || x);
                    } else S(!0);
                }, [f, x]),
                C = a.useCallback(() => {
                    S(!1);
                }, []);
            return null == d && x
                ? null
                : y
                  ? (0, e.jsx)(s.u, {
                        body: h,
                        asset: d,
                        assetSize: 16,
                        delay: 150,
                        shouldShow: T,
                        asContainer: !0,
                        children: (0, e.jsxs)("div", {
                            className: o()(u.kL, u.O1, E),
                            "aria-label": p,
                            onMouseEnter: v,
                            onMouseLeave: C,
                            children: [d, !x && (0, e.jsx)(r.E, { ref: I, ...N, children: l })],
                        }),
                    })
                  : (0, e.jsxs)("div", {
                        className: o()(u.kL, u.O1, E),
                        children: [d, !x && (0, e.jsx)(r.E, { ...N, children: l })],
                    });
        },
    },
);
