n.d(t, { A: () => d });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(459192),
    s = n(834730);
n(851883);
var c = n(124704);
function d(e) {
    let {
            text: t,
            tooltipText: n,
            textVariant: l = "text-xs/medium",
            textClassName: d,
            "aria-label": u,
            icon: _,
            canTruncate: p = !0,
            hideTooltip: f = !1,
            hideText: h = !1,
        } = e,
        m = i.useRef(null),
        [g, b] = i.useState(!1),
        A = { variant: l, color: "none", className: r()(p && c.ps, d) },
        E = null != t && null == n && p,
        v = !f && (null != n || E || h),
        I = n ?? t ?? "",
        y = l?.startsWith("text-sm") ? c.WV : c.Dk,
        S = i.useCallback(() => {
            if (E) {
                let { current: e } = m;
                b((null != e && e.offsetWidth < e.scrollWidth) || null != n || h);
            } else b(!0);
        }, [E, n, h]),
        C = i.useCallback(() => {
            b(!1);
        }, []);
    return null == _ && h
        ? null
        : v
          ? (0, a.jsx)(o.u, {
                body: I,
                asset: _,
                assetSize: 16,
                delay: 150,
                shouldShow: g,
                asContainer: !0,
                children: (0, a.jsxs)("div", {
                    className: r()(c.kL, c.O1, y),
                    "aria-label": u,
                    onMouseEnter: S,
                    onMouseLeave: C,
                    children: [_, !h && (0, a.jsx)(s.E, { ref: m, ...A, children: t })],
                }),
            })
          : (0, a.jsxs)("div", {
                className: r()(c.kL, c.O1, y),
                children: [_, !h && (0, a.jsx)(s.E, { ...A, children: t })],
            });
}
