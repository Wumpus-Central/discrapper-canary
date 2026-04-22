t.d(n, { d: () => p });
var l = t(627968),
    r = t(64700),
    i = t(534514),
    a = t(834730),
    s = t(964892),
    o = t(135564),
    d = t(206418),
    u = t(679970),
    c = t(985018),
    m = t(414690);
function p(e) {
    let { children: n, targetElementRef: t, delay: i, showSubtext: a, forceOpen: d } = e,
        [u, c] = r.useState(!1),
        m = r.useRef(null),
        p = r.useCallback(() => {
            null != m.current && (clearTimeout(m.current), (m.current = null));
        }, []);
    r.useEffect(() => p, [p]);
    let g = r.useCallback(() => {
        p(),
            (m.current = window.setTimeout(() => {
                (m.current = null), c(!0);
            }, i));
    }, [i, p]);
    r.useEffect(() => {
        d && !u && g();
    }, [d, u, g]);
    let h = r.useCallback(() => {
            g();
        }, [g]),
        x = r.useCallback(() => {
            p(), c(!1);
        }, [p]);
    return (0, l.jsxs)("div", {
        onMouseEnter: h,
        onMouseLeave: x,
        children: [
            n,
            (0, l.jsxs)(s.x, {
                targetElementRef: t,
                shouldShow: !!(u || d),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, l.jsx)(f, { showSubtext: a }), (0, l.jsx)(o.F, {})],
            }),
        ],
    });
}
function f(e) {
    let { showSubtext: n = !1 } = e;
    return (0, l.jsxs)(d.A, {
        assetComponent: (0, l.jsx)(u.A, { className: m.jc }),
        tooltipWordmarkComponent: (0, l.jsx)(i.D, {
            variant: "heading-md/extrabold",
            className: m.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, l.jsx)(i.D, {
                variant: "heading-xl/extrabold",
                className: n ? void 0 : m.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            n
                ? (0, l.jsx)(a.E, { variant: "text-xs/normal", className: m.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
