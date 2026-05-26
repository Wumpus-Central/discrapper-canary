"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
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
            hideTooltip: h = !1,
            hideText: p = !1,
        } = e,
        E = r.useRef(null),
        [m, g] = r.useState(!1),
        A = { variant: s, color: "none", className: a()(f && u.ps, c) },
        I = null != t && null == n && f,
        T = !h && (null != n || I || p),
        S = n ?? t ?? "",
        N = s?.startsWith("text-sm") ? u.WV : u.Dk,
        y = r.useCallback(() => {
            if (I) {
                let { current: e } = E;
                g((null != e && e.offsetWidth < e.scrollWidth) || null != n || p);
            } else g(!0);
        }, [I, n, p]),
        C = r.useCallback(() => {
            g(!1);
        }, []);
    return null == _ && p
        ? null
        : T
          ? (0, i.jsx)(o.u, {
                body: S,
                asset: _,
                assetSize: 16,
                delay: 150,
                shouldShow: m,
                asContainer: !0,
                children: (0, i.jsxs)("div", {
                    className: a()(u.kL, u.O1, N),
                    "aria-label": d,
                    onMouseEnter: y,
                    onMouseLeave: C,
                    children: [_, !p && (0, i.jsx)(l.E, { ref: E, ...A, children: t })],
                }),
            })
          : (0, i.jsxs)("div", {
                className: a()(u.kL, u.O1, N),
                children: [_, !p && (0, i.jsx)(l.E, { ...A, children: t })],
            });
}
