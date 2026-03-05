a.d(l, { N: () => m });
var t = a(627968),
    o = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(380278),
    r = a(110259),
    d = a(158954),
    u = a(397927),
    c = a(97469),
    b = a(9836),
    p = a(52379);
function m(e) {
    let {
            transitionState: l,
            animationVariant: a = "default",
            returnRef: n,
            "aria-label": m,
            onClose: x,
            trackingProps: h,
            children: v,
        } = e,
        y = o.useId(),
        f = o.useMemo(() => ({ id: y, headingId: `heading-${y}`, onClose: x, dismissable: !0 }), [y, x]),
        g = (0, c.NC)(),
        { theme: V } = (0, u.wRf)(),
        C = (0, d.kSI)(l, a);
    return (0, t.jsx)(d.Vs9.Provider, {
        value: f,
        children: (0, t.jsx)(u.lGe, {
            id: y,
            role: "dialog",
            "aria-label": m,
            "aria-labelledby": null != m ? void 0 : f.headingId,
            returnRef: n,
            ...h,
            impressionType: h?.impressionType ?? r.ImpressionTypes.MODAL,
            children: (0, t.jsx)(d.Fmo, {
                forceLevel: 1,
                children: (0, t.jsx)("div", {
                    className: b.nw,
                    children: (0, t.jsx)(u.NPJ, {
                        theme: g,
                        children: (e) =>
                            (0, t.jsx)(s.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: i()(p.container, b.yl, e),
                                style: C,
                                children: (0, t.jsx)("div", {
                                    className: b.jE,
                                    children: (0, t.jsx)(u.NPJ, {
                                        theme: V,
                                        children: (e) => (0, t.jsx)("div", { className: i()(e, b.h_), children: v }),
                                    }),
                                }),
                            }),
                    }),
                }),
            }),
        }),
    });
}
