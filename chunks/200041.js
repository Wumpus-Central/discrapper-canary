n.d(t, { A: () => d });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    u = n(459192),
    o = n(834730);
n(851883);
var s = n(124704);
function d(e) {
    let {
            text: t,
            tooltipText: n,
            textVariant: i = "text-xs/medium",
            textClassName: d,
            "aria-label": c,
            icon: A,
            canTruncate: f = !0,
            hideTooltip: p = !1,
            hideText: m = !1,
        } = e,
        y = l.useRef(null),
        [I, g] = l.useState(!1),
        E = { variant: i, color: "none", className: a()(f && s.ps, d) },
        h = null != t && null == n && f,
        v = !p && (null != n || h || m),
        _ = n ?? t ?? "",
        T = i?.startsWith("text-sm") ? s.WV : s.Dk,
        S = l.useCallback(() => {
            if (h) {
                let { current: e } = y;
                g((null != e && e.offsetWidth < e.scrollWidth) || null != n || m);
            } else g(!0);
        }, [h, n, m]),
        N = l.useCallback(() => {
            g(!1);
        }, []);
    return null == A && m
        ? null
        : v
          ? (0, r.jsx)(u.u, {
                body: _,
                asset: A,
                assetSize: 16,
                delay: 150,
                shouldShow: I,
                asContainer: !0,
                children: (0, r.jsxs)("div", {
                    className: a()(s.kL, s.O1, T),
                    "aria-label": c,
                    onMouseEnter: S,
                    onMouseLeave: N,
                    children: [A, !m && (0, r.jsx)(o.E, { ref: y, ...E, children: t })],
                }),
            })
          : (0, r.jsxs)("div", {
                className: a()(s.kL, s.O1, T),
                children: [A, !m && (0, r.jsx)(o.E, { ...E, children: t })],
            });
}
