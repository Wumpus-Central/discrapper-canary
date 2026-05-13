r.d(t, { A: () => f, h: () => m });
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
    p = r(824078);
function f(e) {
    let {
            title: t,
            body: r,
            badge: l,
            graphic: f,
            size: m = "md",
            actions: g,
            textLink: x,
            gradientColor: v,
            onRequestClose: j,
            popoverRef: C,
            position: b,
            caretConfig: y,
            scrollBehavior: k,
            ...w
        } = e,
        N = a.useCallback(
            (e, t) => {
                j?.(t);
            },
            [j],
        ),
        E = a.useCallback(() => {
            j?.("user:explicit");
        }, [j]),
        L = {
            targetElementRef: w.targetElementRef,
            shouldShow: w.shouldShow,
            hasVideo: w.hasVideo,
            position: b,
            caretConfig: y,
            onRequestClose: N,
            gradientColor: v,
            scrollBehavior: k,
            ...("edge" === w.alignmentStrategy
                ? { alignmentStrategy: "edge", align: w.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(o.x, {
        ...L,
        children: (0, n.jsxs)("div", {
            ref: C,
            "data-mana-component": "popover",
            children: [
                (0, n.jsx)(d.q, { onClick: E, variant: null != v ? "color-mix" : void 0 }),
                null != f &&
                    (0, n.jsx)("div", {
                        className: s()(p.graphic, { [p[`graphic--${m}`]]: null != m }),
                        children: (0, n.jsx)(i.v, {
                            ...f,
                            aspectRatio: f.aspectRatio ?? ("sm" === m ? "2/1" : "16/9"),
                        }),
                    }),
                (0, n.jsx)(h.D, { title: t, body: r, badge: l, textLink: x }),
                null != g && g.length > 0 ? (0, n.jsx)(c.Z, { actions: g }) : null,
                (0, n.jsx)(u.F, {}),
            ],
        }),
    });
}
let m = 21552 == r.j ? f : null;
