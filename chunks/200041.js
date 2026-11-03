e.d(l, { A: () => p });
var n = e(477900),
    a = e(582128),
    i = e(503698),
    o = e.n(i),
    r = e(834730),
    s = e(683063);
e(851883);
var u = e(607013);
function p(t) {
    let {
            text: l,
            tooltipText: e,
            textVariant: i = "body-xs/medium",
            textClassName: p,
            "aria-label": c,
            icon: d,
            canTruncate: A = !0,
            hideTooltip: m = !1,
            hideText: x = !1,
        } = t,
        T = a.useRef(null),
        [N, S] = a.useState(!1),
        f = { variant: i, color: "none", className: o()(A && u.ps, p) },
        y = null != l && null == e && A,
        I = !m && (null != e || y || x),
        h = e ?? l ?? "",
        E = i?.startsWith("body-sm") ? u.WV : u.Dk,
        v = a.useCallback(() => {
            if (y) {
                let { current: t } = T;
                S((null != t && t.offsetWidth < t.scrollWidth) || x);
            } else S(!0);
        }, [y, x]),
        C = a.useCallback(() => {
            S(!1);
        }, []);
    return null == d && x
        ? null
        : I
          ? (0, n.jsx)(s.u, {
                body: h,
                asset: d,
                assetSize: 16,
                delay: 150,
                shouldShow: N,
                asContainer: !0,
                children: (0, n.jsxs)("div", {
                    className: o()(u.kL, u.O1, E),
                    "aria-label": c,
                    onMouseEnter: v,
                    onMouseLeave: C,
                    children: [d, !x && (0, n.jsx)(r.E, { ref: T, ...f, children: l })],
                }),
            })
          : (0, n.jsxs)("div", {
                className: o()(u.kL, u.O1, E),
                children: [d, !x && (0, n.jsx)(r.E, { ...f, children: l })],
            });
}
