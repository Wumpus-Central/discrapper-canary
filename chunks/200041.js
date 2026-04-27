"use strict";
r.d(t, { A: () => d });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(459192),
    o = r(834730);
r(851883);
var c = r(124704);
function d(e) {
    let {
            text: t,
            tooltipText: r,
            textVariant: a = "text-xs/medium",
            textClassName: d,
            "aria-label": u,
            icon: _,
            canTruncate: p = !0,
            hideTooltip: f = !1,
            hideText: m = !1,
        } = e,
        h = i.useRef(null),
        [g, b] = i.useState(!1),
        A = { variant: a, color: "none", className: s()(p && c.ps, d) },
        E = null != t && null == r && p,
        v = !f && (null != r || E || m),
        y = r ?? t ?? "",
        I = a?.startsWith("text-sm") ? c.WV : c.Dk,
        S = i.useCallback(() => {
            if (E) {
                let { current: e } = h;
                b((null != e && e.offsetWidth < e.scrollWidth) || null != r || m);
            } else b(!0);
        }, [E, r, m]),
        x = i.useCallback(() => {
            b(!1);
        }, []);
    return null == _ && m
        ? null
        : v
          ? (0, n.jsx)(l.u, {
                body: y,
                asset: _,
                assetSize: 16,
                delay: 150,
                shouldShow: g,
                asContainer: !0,
                children: (0, n.jsxs)("div", {
                    className: s()(c.kL, c.O1, I),
                    "aria-label": u,
                    onMouseEnter: S,
                    onMouseLeave: x,
                    children: [_, !m && (0, n.jsx)(o.E, { ref: h, ...A, children: t })],
                }),
            })
          : (0, n.jsxs)("div", {
                className: s()(c.kL, c.O1, I),
                children: [_, !m && (0, n.jsx)(o.E, { ...A, children: t })],
            });
}
