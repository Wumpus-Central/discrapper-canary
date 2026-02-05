"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(459192),
    l = n(397927);
n(851883);
var u = n(123511);
function c(e) {
    let {
            text: t,
            tooltipText: n,
            textVariant: a = "text-xs/medium",
            textClassName: c,
            "aria-label": d,
            icon: _,
            canTruncate: f = !0,
            hideTooltip: p = !1,
            hideText: h = !1,
        } = e,
        m = i.useRef(null),
        [g, E] = i.useState(!1),
        A = { variant: a, color: "none", className: s()(f && u.ps, c) },
        I = null != t && null == n && f,
        T = !p && (null != n || I || h),
        y = n ?? t ?? "",
        S = a?.startsWith("text-sm") ? u.WV : u.Dk,
        v = i.useCallback(() => {
            if (I) {
                let { current: e } = m;
                E((null != e && e.offsetWidth < e.scrollWidth) || null != n || h);
            } else E(!0);
        }, [I, n, h]),
        C = i.useCallback(() => {
            E(!1);
        }, []);
    return null == _ && h
        ? null
        : T
          ? (0, r.jsx)(o.u, {
                body: y,
                asset: _,
                assetSize: 16,
                delay: 150,
                shouldShow: g,
                asContainer: !0,
                children: (0, r.jsxs)("div", {
                    className: s()(u.kL, u.O1, S),
                    "aria-label": d,
                    onMouseEnter: v,
                    onMouseLeave: C,
                    children: [_, !h && (0, r.jsx)(l.Text, { ref: m, ...A, children: t })],
                }),
            })
          : (0, r.jsxs)("div", {
                className: s()(u.kL, u.O1, S),
                children: [_, !h && (0, r.jsx)(l.Text, { ...A, children: t })],
            });
}
