a.d(l, { A: () => m, h: () => h });
var t = a(627968),
    n = a(64700),
    i = a(503698),
    o = a.n(i),
    r = a(353795),
    s = a(312640),
    d = a(208756),
    u = a(798618),
    c = a(916845),
    b = a(627330),
    p = a(824078);
function m(e) {
    let {
            title: l,
            body: a,
            badge: i,
            graphic: m,
            size: h = "md",
            actions: x,
            textLink: g,
            gradientColor: f,
            onRequestClose: v,
            popoverRef: y,
            position: _,
            caretConfig: C,
            scrollBehavior: j,
            ...V
        } = e,
        S = n.useCallback(
            (e, l) => {
                v?.(l);
            },
            [v],
        ),
        k = n.useCallback(() => {
            v?.("user:explicit");
        }, [v]),
        w = {
            targetElementRef: V.targetElementRef,
            shouldShow: V.shouldShow,
            hasVideo: V.hasVideo,
            position: _,
            caretConfig: C,
            onRequestClose: S,
            gradientColor: f,
            scrollBehavior: j,
            ...("edge" === V.alignmentStrategy
                ? { alignmentStrategy: "edge", align: V.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, t.jsx)(s.x, {
        ...w,
        children: (0, t.jsxs)("div", {
            ref: y,
            "data-mana-component": "popover",
            children: [
                (0, t.jsx)(c.q, { onClick: k, variant: null != f ? "color-mix" : void 0 }),
                null != m &&
                    (0, t.jsx)("div", {
                        className: o()(p.graphic, { [p[`graphic--${h}`]]: null != h }),
                        children: (0, t.jsx)(r.v, {
                            ...m,
                            aspectRatio: m.aspectRatio ?? ("sm" === h ? "2/1" : "16/9"),
                        }),
                    }),
                (0, t.jsx)(b.D, { title: l, body: a, badge: i, textLink: g }),
                null != x && x.length > 0 ? (0, t.jsx)(d.Z, { actions: x }) : null,
                (0, t.jsx)(u.F, {}),
            ],
        }),
    });
}
let h = 21552 == a.j ? m : null;
