n.d(t, { A: () => h, h: () => m });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    o = n.n(l),
    s = n(353795),
    i = n(273875),
    c = n(208756),
    u = n(798618),
    d = n(916845),
    f = n(627330),
    p = n(489387);
function h(e) {
    let {
            title: t,
            body: n,
            badge: l,
            graphic: h,
            size: m = "md",
            actions: x,
            textLink: g,
            gradientColor: v,
            onRequestClose: j,
            popoverRef: C,
            position: b,
            caretConfig: k,
            scrollBehavior: y,
            ...w
        } = e,
        N = a.useCallback(
            (e, t) => {
                j?.(t);
            },
            [j],
        ),
        L = a.useCallback(() => {
            j?.("user:explicit");
        }, [j]),
        E = {
            targetElementRef: w.targetElementRef,
            shouldShow: w.shouldShow,
            hasVideo: w.hasVideo,
            position: b,
            caretConfig: k,
            onRequestClose: N,
            gradientColor: v,
            scrollBehavior: y,
            ...("edge" === w.alignmentStrategy
                ? { alignmentStrategy: "edge", align: w.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(i.x, {
        ...E,
        children: (0, r.jsxs)("div", {
            ref: C,
            "data-mana-component": "popover",
            children: [
                (0, r.jsx)(d.q, { onClick: L, variant: null != v ? "color-mix" : void 0 }),
                null != h &&
                    (0, r.jsx)("div", {
                        className: o()(p.graphic, { [p[`graphic--${m}`]]: null != m }),
                        children: (0, r.jsx)(s.v, {
                            ...h,
                            aspectRatio: h.aspectRatio ?? ("sm" === m ? "2/1" : "16/9"),
                        }),
                    }),
                (0, r.jsx)(f.D, { title: t, body: n, badge: l, textLink: g }),
                null != x && x.length > 0 ? (0, r.jsx)(c.Z, { actions: x }) : null,
                (0, r.jsx)(u.F, {}),
            ],
        }),
    });
}
let m = 221552 == n.j ? h : null;
