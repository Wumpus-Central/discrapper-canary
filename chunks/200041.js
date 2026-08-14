e.d(l, { A: () => p });
var n = e(477900),
    i = e(582128),
    a = e(503698),
    s = e.n(a),
    o = e(459192),
    r = e(834730);
e(851883);
var u = e(491160);
function p(t) {
    let {
            text: l,
            tooltipText: e,
            textVariant: a = "text-xs/medium",
            textClassName: p,
            "aria-label": d,
            icon: c,
            canTruncate: A = !0,
            hideTooltip: x = !1,
            hideText: T = !1,
        } = t,
        m = i.useRef(null),
        [h, N] = i.useState(!1),
        f = { variant: a, color: "none", className: s()(A && u.ps, p) },
        S = null != l && null == e && A,
        v = !x && (null != e || S || T),
        E = e ?? l ?? "",
        y = a?.startsWith("text-sm") ? u.WV : u.Dk,
        I = i.useCallback(() => {
            if (S) {
                let { current: t } = m;
                N((null != t && t.offsetWidth < t.scrollWidth) || T);
            } else N(!0);
        }, [S, T]),
        j = i.useCallback(() => {
            N(!1);
        }, []);
    return null == c && T
        ? null
        : v
          ? (0, n.jsx)(o.u, {
                body: E,
                asset: c,
                assetSize: 16,
                delay: 150,
                shouldShow: h,
                asContainer: !0,
                children: (0, n.jsxs)("div", {
                    className: s()(u.kL, u.O1, y),
                    "aria-label": d,
                    onMouseEnter: I,
                    onMouseLeave: j,
                    children: [c, !T && (0, n.jsx)(r.E, { ref: m, ...f, children: l })],
                }),
            })
          : (0, n.jsxs)("div", {
                className: s()(u.kL, u.O1, y),
                children: [c, !T && (0, n.jsx)(r.E, { ...f, children: l })],
            });
}
