"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(459192),
    o = n(834730);
n(851883);
var d = n(124704);
function c(e) {
    let {
            text: t,
            tooltipText: n,
            textVariant: a = "text-xs/medium",
            textClassName: c,
            "aria-label": u,
            icon: _,
            canTruncate: E = !0,
            hideTooltip: A = !1,
            hideText: h = !1,
        } = e,
        I = r.useRef(null),
        [f, p] = r.useState(!1),
        T = { variant: a, color: "none", className: s()(E && d.ps, c) },
        m = null != t && null == n && E,
        g = !A && (null != n || m || h),
        S = n ?? t ?? "",
        N = a?.startsWith("text-sm") ? d.WV : d.Dk,
        C = r.useCallback(() => {
            if (m) {
                let { current: e } = I;
                p((null != e && e.offsetWidth < e.scrollWidth) || h);
            } else p(!0);
        }, [m, h]),
        O = r.useCallback(() => {
            p(!1);
        }, []);
    return null == _ && h
        ? null
        : g
          ? (0, i.jsx)(l.u, {
                body: S,
                asset: _,
                assetSize: 16,
                delay: 150,
                shouldShow: f,
                asContainer: !0,
                children: (0, i.jsxs)("div", {
                    className: s()(d.kL, d.O1, N),
                    "aria-label": u,
                    onMouseEnter: C,
                    onMouseLeave: O,
                    children: [_, !h && (0, i.jsx)(o.E, { ref: I, ...T, children: t })],
                }),
            })
          : (0, i.jsxs)("div", {
                className: s()(d.kL, d.O1, N),
                children: [_, !h && (0, i.jsx)(o.E, { ...T, children: t })],
            });
}
