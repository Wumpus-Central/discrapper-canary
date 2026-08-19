l.d(t, { A: () => d });
var n = l(477900),
    i = l(582128),
    r = l(503698),
    a = l.n(r),
    s = l(459192),
    o = l(834730);
l(851883);
var c = l(491160);
function d(e) {
    let {
            text: t,
            tooltipText: l,
            textVariant: r = "text-xs/medium",
            textClassName: d,
            "aria-label": u,
            icon: h,
            canTruncate: E = !0,
            hideTooltip: I = !1,
            hideText: _ = !1,
        } = e,
        T = i.useRef(null),
        [f, A] = i.useState(!1),
        p = { variant: r, color: "none", className: a()(E && c.ps, d) },
        g = null != t && null == l && E,
        S = !I && (null != l || g || _),
        v = l ?? t ?? "",
        N = r?.startsWith("text-sm") ? c.WV : c.Dk,
        L = i.useCallback(() => {
            if (g) {
                let { current: e } = T;
                A((null != e && e.offsetWidth < e.scrollWidth) || _);
            } else A(!0);
        }, [g, _]),
        D = i.useCallback(() => {
            A(!1);
        }, []);
    return null == h && _
        ? null
        : S
          ? (0, n.jsx)(s.u, {
                body: v,
                asset: h,
                assetSize: 16,
                delay: 150,
                shouldShow: f,
                asContainer: !0,
                children: (0, n.jsxs)("div", {
                    className: a()(c.kL, c.O1, N),
                    "aria-label": u,
                    onMouseEnter: L,
                    onMouseLeave: D,
                    children: [h, !_ && (0, n.jsx)(o.E, { ref: T, ...p, children: t })],
                }),
            })
          : (0, n.jsxs)("div", {
                className: a()(c.kL, c.O1, N),
                children: [h, !_ && (0, n.jsx)(o.E, { ...p, children: t })],
            });
}
