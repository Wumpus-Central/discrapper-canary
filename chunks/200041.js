r.d(t, { A: () => E });
var n = r(627968),
    l = r(64700),
    i = r(503698),
    o = r.n(i),
    a = r(459192),
    s = r(834730);
r(851883);
var u = r(124704);
function E(e) {
    let {
            text: t,
            tooltipText: r,
            textVariant: i = "text-xs/medium",
            textClassName: E,
            "aria-label": d,
            icon: I,
            canTruncate: _ = !0,
            hideTooltip: c = !1,
            hideText: S = !1,
        } = e,
        T = l.useRef(null),
        [A, h] = l.useState(!1),
        G = { variant: i, color: "none", className: o()(_ && u.ps, E) },
        p = null != t && null == r && _,
        D = !c && (null != r || p || S),
        L = r ?? t ?? "",
        N = i?.startsWith("text-sm") ? u.WV : u.Dk,
        f = l.useCallback(() => {
            if (p) {
                let { current: e } = T;
                h((null != e && e.offsetWidth < e.scrollWidth) || null != r || S);
            } else h(!0);
        }, [p, r, S]),
        U = l.useCallback(() => {
            h(!1);
        }, []);
    return null == I && S
        ? null
        : D
          ? (0, n.jsx)(a.u, {
                body: L,
                asset: I,
                assetSize: 16,
                delay: 150,
                shouldShow: A,
                asContainer: !0,
                children: (0, n.jsxs)("div", {
                    className: o()(u.kL, u.O1, N),
                    "aria-label": d,
                    onMouseEnter: f,
                    onMouseLeave: U,
                    children: [I, !S && (0, n.jsx)(s.E, { ref: T, ...G, children: t })],
                }),
            })
          : (0, n.jsxs)("div", {
                className: o()(u.kL, u.O1, N),
                children: [I, !S && (0, n.jsx)(s.E, { ...G, children: t })],
            });
}
