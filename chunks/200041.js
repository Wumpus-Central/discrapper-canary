"use strict";
a.d(t, { A: () => c });
var r = a(627968),
    l = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(459192),
    o = a(834730);
a(851883);
var d = a(124704);
function c(e) {
    let {
            text: t,
            tooltipText: a,
            textVariant: n = "text-xs/medium",
            textClassName: c,
            "aria-label": u,
            icon: h,
            canTruncate: p = !0,
            hideTooltip: _ = !1,
            hideText: m = !1,
        } = e,
        b = l.useRef(null),
        [g, f] = l.useState(!1),
        x = { variant: n, color: "none", className: i()(p && d.ps, c) },
        v = null != t && null == a && p,
        A = !_ && (null != a || v || m),
        E = a ?? t ?? "",
        y = n?.startsWith("text-sm") ? d.WV : d.Dk,
        j = l.useCallback(() => {
            if (v) {
                let { current: e } = b;
                f((null != e && e.offsetWidth < e.scrollWidth) || null != a || m);
            } else f(!0);
        }, [v, a, m]),
        I = l.useCallback(() => {
            f(!1);
        }, []);
    return null == h && m
        ? null
        : A
          ? (0, r.jsx)(s.u, {
                body: E,
                asset: h,
                assetSize: 16,
                delay: 150,
                shouldShow: g,
                asContainer: !0,
                children: (0, r.jsxs)("div", {
                    className: i()(d.kL, d.O1, y),
                    "aria-label": u,
                    onMouseEnter: j,
                    onMouseLeave: I,
                    children: [h, !m && (0, r.jsx)(o.E, { ref: b, ...x, children: t })],
                }),
            })
          : (0, r.jsxs)("div", {
                className: i()(d.kL, d.O1, y),
                children: [h, !m && (0, r.jsx)(o.E, { ...x, children: t })],
            });
}
