"use strict";
n.d(t, { A: () => d });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(459192),
    o = n(834730);
n(851883);
var c = n(124704);
function d(e) {
    let {
            text: t,
            tooltipText: n,
            textVariant: i = "text-xs/medium",
            textClassName: d,
            "aria-label": u,
            icon: _,
            canTruncate: p = !0,
            hideTooltip: m = !1,
            hideText: h = !1,
        } = e,
        f = r.useRef(null),
        [g, b] = r.useState(!1),
        v = { variant: i, color: "none", className: l()(p && c.ps, d) },
        A = null != t && null == n && p,
        x = !m && (null != n || A || h),
        E = n ?? t ?? "",
        T = i?.startsWith("text-sm") ? c.WV : c.Dk,
        S = r.useCallback(() => {
            if (A) {
                let { current: e } = f;
                b((null != e && e.offsetWidth < e.scrollWidth) || null != n || h);
            } else b(!0);
        }, [A, n, h]),
        C = r.useCallback(() => {
            b(!1);
        }, []);
    return null == _ && h
        ? null
        : x
          ? (0, a.jsx)(s.u, {
                body: E,
                asset: _,
                assetSize: 16,
                delay: 150,
                shouldShow: g,
                asContainer: !0,
                children: (0, a.jsxs)("div", {
                    className: l()(c.kL, c.O1, T),
                    "aria-label": u,
                    onMouseEnter: S,
                    onMouseLeave: C,
                    children: [_, !h && (0, a.jsx)(o.E, { ref: f, ...v, children: t })],
                }),
            })
          : (0, a.jsxs)("div", {
                className: l()(c.kL, c.O1, T),
                children: [_, !h && (0, a.jsx)(o.E, { ...v, children: t })],
            });
}
