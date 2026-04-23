"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(459192),
    l = n(834730);
n(851883);
var u = n(124704);
function c(e) {
    let {
            text: t,
            tooltipText: n,
            textVariant: s = "text-xs/medium",
            textClassName: c,
            "aria-label": d,
            icon: _,
            canTruncate: f = !0,
            hideTooltip: p = !1,
            hideText: h = !1,
        } = e,
        E = i.useRef(null),
        [m, g] = i.useState(!1),
        A = { variant: s, color: "none", className: a()(f && u.ps, c) },
        I = null != t && null == n && f,
        T = !p && (null != n || I || h),
        S = n ?? t ?? "",
        y = s?.startsWith("text-sm") ? u.WV : u.Dk,
        N = i.useCallback(() => {
            if (I) {
                let { current: e } = E;
                g((null != e && e.offsetWidth < e.scrollWidth) || null != n || h);
            } else g(!0);
        }, [I, n, h]),
        v = i.useCallback(() => {
            g(!1);
        }, []);
    return null == _ && h
        ? null
        : T
          ? (0, r.jsx)(o.u, {
                body: S,
                asset: _,
                assetSize: 16,
                delay: 150,
                shouldShow: m,
                asContainer: !0,
                children: (0, r.jsxs)("div", {
                    className: a()(u.kL, u.O1, y),
                    "aria-label": d,
                    onMouseEnter: N,
                    onMouseLeave: v,
                    children: [_, !h && (0, r.jsx)(l.E, { ref: E, ...A, children: t })],
                }),
            })
          : (0, r.jsxs)("div", {
                className: a()(u.kL, u.O1, y),
                children: [_, !h && (0, r.jsx)(l.E, { ...A, children: t })],
            });
}
