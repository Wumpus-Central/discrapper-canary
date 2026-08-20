e.d(l, { A: () => p });
var n = e(477900),
    a = e(582128),
    i = e(503698),
    s = e.n(i),
    o = e(459192),
    r = e(834730);
e(851883);
var u = e(607013);
function p(t) {
    let {
            text: l,
            tooltipText: e,
            textVariant: i = "text-xs/medium",
            textClassName: p,
            "aria-label": d,
            icon: c,
            canTruncate: A = !0,
            hideTooltip: x = !1,
            hideText: m = !1,
        } = t,
        T = a.useRef(null),
        [h, N] = a.useState(!1),
        f = { variant: i, color: "none", className: s()(A && u.ps, p) },
        S = null != l && null == e && A,
        v = !x && (null != e || S || m),
        I = e ?? l ?? "",
        E = i?.startsWith("text-sm") ? u.WV : u.Dk,
        y = a.useCallback(() => {
            if (S) {
                let { current: t } = T;
                N((null != t && t.offsetWidth < t.scrollWidth) || m);
            } else N(!0);
        }, [S, m]),
        C = a.useCallback(() => {
            N(!1);
        }, []);
    return null == c && m
        ? null
        : v
          ? (0, n.jsx)(o.u, {
                body: I,
                asset: c,
                assetSize: 16,
                delay: 150,
                shouldShow: h,
                asContainer: !0,
                children: (0, n.jsxs)("div", {
                    className: s()(u.kL, u.O1, E),
                    "aria-label": d,
                    onMouseEnter: y,
                    onMouseLeave: C,
                    children: [c, !m && (0, n.jsx)(r.E, { ref: T, ...f, children: l })],
                }),
            })
          : (0, n.jsxs)("div", {
                className: s()(u.kL, u.O1, E),
                children: [c, !m && (0, n.jsx)(r.E, { ...f, children: l })],
            });
}
