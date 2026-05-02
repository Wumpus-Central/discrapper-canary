r.d(t, { A: () => u });
var n = r(627968),
    l = r(64700),
    i = r(503698),
    o = r.n(i),
    a = r(459192),
    s = r(834730);
r(851883);
var E = r(124704);
function u(e) {
    let {
            text: t,
            tooltipText: r,
            textVariant: i = "text-xs/medium",
            textClassName: u,
            "aria-label": d,
            icon: I,
            canTruncate: _ = !0,
            hideTooltip: c = !1,
            hideText: S = !1,
        } = e,
        T = l.useRef(null),
        [h, A] = l.useState(!1),
        G = { variant: i, color: "none", className: o()(_ && E.ps, u) },
        p = null != t && null == r && _,
        D = !c && (null != r || p || S),
        L = r ?? t ?? "",
        N = i?.startsWith("text-sm") ? E.WV : E.Dk,
        U = l.useCallback(() => {
            if (p) {
                let { current: e } = T;
                A((null != e && e.offsetWidth < e.scrollWidth) || null != r || S);
            } else A(!0);
        }, [p, r, S]),
        f = l.useCallback(() => {
            A(!1);
        }, []);
    return null == I && S
        ? null
        : D
          ? (0, n.jsx)(a.u, {
                body: L,
                asset: I,
                assetSize: 16,
                delay: 150,
                shouldShow: h,
                asContainer: !0,
                children: (0, n.jsxs)("div", {
                    className: o()(E.kL, E.O1, N),
                    "aria-label": d,
                    onMouseEnter: U,
                    onMouseLeave: f,
                    children: [I, !S && (0, n.jsx)(s.E, { ref: T, ...G, children: t })],
                }),
            })
          : (0, n.jsxs)("div", {
                className: o()(E.kL, E.O1, N),
                children: [I, !S && (0, n.jsx)(s.E, { ...G, children: t })],
            });
}
