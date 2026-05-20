r.d(t, { A: () => p, h: () => m });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(353795),
    o = r(312640),
    c = r(208756),
    u = r(798618),
    d = r(916845),
    h = r(627330),
    f = r(824078);
function p(e) {
    let {
            title: t,
            body: r,
            badge: l,
            graphic: p,
            size: m = "md",
            actions: x,
            textLink: g,
            gradientColor: v,
            onRequestClose: j,
            popoverRef: b,
            position: y,
            caretConfig: C,
            scrollBehavior: k,
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
        R = {
            targetElementRef: w.targetElementRef,
            shouldShow: w.shouldShow,
            hasVideo: w.hasVideo,
            position: y,
            caretConfig: C,
            onRequestClose: N,
            gradientColor: v,
            scrollBehavior: k,
            ...("edge" === w.alignmentStrategy
                ? { alignmentStrategy: "edge", align: w.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(o.x, {
        ...R,
        children: (0, n.jsxs)("div", {
            ref: b,
            "data-mana-component": "popover",
            children: [
                (0, n.jsx)(d.q, { onClick: L, variant: null != v ? "color-mix" : void 0 }),
                null != p &&
                    (0, n.jsx)("div", {
                        className: s()(f.graphic, { [f[`graphic--${m}`]]: null != m }),
                        children: (0, n.jsx)(i.v, {
                            ...p,
                            aspectRatio: p.aspectRatio ?? ("sm" === m ? "2/1" : "16/9"),
                        }),
                    }),
                (0, n.jsx)(h.D, { title: t, body: r, badge: l, textLink: g }),
                null != x && x.length > 0 ? (0, n.jsx)(c.Z, { actions: x }) : null,
                (0, n.jsx)(u.F, {}),
            ],
        }),
    });
}
let m = 21552 == r.j ? p : null;
