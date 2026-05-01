n.d(t, { A: () => c });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(459192),
    o = n(834730);
n(851883);
var d = n(124704);
function c(e) {
    let {
            text: t,
            tooltipText: n,
            textVariant: r = "text-xs/medium",
            textClassName: c,
            "aria-label": _,
            icon: E,
            canTruncate: u = !0,
            hideTooltip: A = !1,
            hideText: I = !1,
        } = e,
        T = a.useRef(null),
        [h, S] = a.useState(!1),
        N = { variant: r, color: "none", className: s()(u && d.ps, c) },
        f = null != t && null == n && u,
        p = !A && (null != n || f || I),
        m = n ?? t ?? "",
        O = r?.startsWith("text-sm") ? d.WV : d.Dk,
        C = a.useCallback(() => {
            if (f) {
                let { current: e } = T;
                S((null != e && e.offsetWidth < e.scrollWidth) || null != n || I);
            } else S(!0);
        }, [f, n, I]),
        R = a.useCallback(() => {
            S(!1);
        }, []);
    return null == E && I
        ? null
        : p
          ? (0, i.jsx)(l.u, {
                body: m,
                asset: E,
                assetSize: 16,
                delay: 150,
                shouldShow: h,
                asContainer: !0,
                children: (0, i.jsxs)("div", {
                    className: s()(d.kL, d.O1, O),
                    "aria-label": _,
                    onMouseEnter: C,
                    onMouseLeave: R,
                    children: [E, !I && (0, i.jsx)(o.E, { ref: T, ...N, children: t })],
                }),
            })
          : (0, i.jsxs)("div", {
                className: s()(d.kL, d.O1, O),
                children: [E, !I && (0, i.jsx)(o.E, { ...N, children: t })],
            });
}
