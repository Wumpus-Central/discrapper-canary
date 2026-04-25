a.d(t, { A: () => d });
var r = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(459192),
    o = a(834730);
a(851883);
var c = a(124704);
function d(e) {
    let {
            text: t,
            tooltipText: a,
            textVariant: l = "text-xs/medium",
            textClassName: d,
            "aria-label": u,
            icon: h,
            canTruncate: p = !0,
            hideTooltip: m = !1,
            hideText: f = !1,
        } = e,
        b = n.useRef(null),
        [_, g] = n.useState(!1),
        x = { variant: l, color: "none", className: i()(p && c.ps, d) },
        v = null != t && null == a && p,
        A = !m && (null != a || v || f),
        y = a ?? t ?? "",
        E = l?.startsWith("text-sm") ? c.WV : c.Dk,
        I = n.useCallback(() => {
            if (v) {
                let { current: e } = b;
                g((null != e && e.offsetWidth < e.scrollWidth) || null != a || f);
            } else g(!0);
        }, [v, a, f]),
        S = n.useCallback(() => {
            g(!1);
        }, []);
    return null == h && f
        ? null
        : A
          ? (0, r.jsx)(s.u, {
                body: y,
                asset: h,
                assetSize: 16,
                delay: 150,
                shouldShow: _,
                asContainer: !0,
                children: (0, r.jsxs)("div", {
                    className: i()(c.kL, c.O1, E),
                    "aria-label": u,
                    onMouseEnter: I,
                    onMouseLeave: S,
                    children: [h, !f && (0, r.jsx)(o.E, { ref: b, ...x, children: t })],
                }),
            })
          : (0, r.jsxs)("div", {
                className: i()(c.kL, c.O1, E),
                children: [h, !f && (0, r.jsx)(o.E, { ...x, children: t })],
            });
}
