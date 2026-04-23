n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(459192),
    l = n(834730);
n(851883);
var o = n(124704);
function E(e) {
    let {
            text: t,
            tooltipText: n,
            textVariant: a = "text-xs/medium",
            textClassName: E,
            "aria-label": d,
            icon: c,
            canTruncate: u = !0,
            hideTooltip: I = !1,
            hideText: A = !1,
        } = e,
        T = r.useRef(null),
        [S, N] = r.useState(!1),
        O = { variant: a, color: "none", className: s()(u && o.ps, E) },
        R = null != t && null == n && u,
        f = !I && (null != n || R || A),
        C = n ?? t ?? "",
        p = a?.startsWith("text-sm") ? o.WV : o.Dk,
        m = r.useCallback(() => {
            if (R) {
                let { current: e } = T;
                N((null != e && e.offsetWidth < e.scrollWidth) || null != n || A);
            } else N(!0);
        }, [R, n, A]),
        L = r.useCallback(() => {
            N(!1);
        }, []);
    return null == c && A
        ? null
        : f
          ? (0, i.jsx)(_.u, {
                body: C,
                asset: c,
                assetSize: 16,
                delay: 150,
                shouldShow: S,
                asContainer: !0,
                children: (0, i.jsxs)("div", {
                    className: s()(o.kL, o.O1, p),
                    "aria-label": d,
                    onMouseEnter: m,
                    onMouseLeave: L,
                    children: [c, !A && (0, i.jsx)(l.E, { ref: T, ...O, children: t })],
                }),
            })
          : (0, i.jsxs)("div", {
                className: s()(o.kL, o.O1, p),
                children: [c, !A && (0, i.jsx)(l.E, { ...O, children: t })],
            });
}
