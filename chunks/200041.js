"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    a = n(64700),
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
            hideTooltip: f = !1,
            hideText: m = !1,
        } = e,
        h = a.useRef(null),
        [g, b] = a.useState(!1),
        A = { variant: i, color: "none", className: l()(p && c.ps, d) },
        E = null != t && null == n && p,
        v = !f && (null != n || E || m),
        I = n ?? t ?? "",
        y = i?.startsWith("text-sm") ? c.WV : c.Dk,
        x = a.useCallback(() => {
            if (E) {
                let { current: e } = h;
                b((null != e && e.offsetWidth < e.scrollWidth) || null != n || m);
            } else b(!0);
        }, [E, n, m]),
        S = a.useCallback(() => {
            b(!1);
        }, []);
    return null == _ && m
        ? null
        : v
          ? (0, r.jsx)(s.u, {
                body: I,
                asset: _,
                assetSize: 16,
                delay: 150,
                shouldShow: g,
                asContainer: !0,
                children: (0, r.jsxs)("div", {
                    className: l()(c.kL, c.O1, y),
                    "aria-label": u,
                    onMouseEnter: x,
                    onMouseLeave: S,
                    children: [_, !m && (0, r.jsx)(o.E, { ref: h, ...A, children: t })],
                }),
            })
          : (0, r.jsxs)("div", {
                className: l()(c.kL, c.O1, y),
                children: [_, !m && (0, r.jsx)(o.E, { ...A, children: t })],
            });
}
