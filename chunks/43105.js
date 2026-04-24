"use strict";
n.d(t, { A: () => m, h: () => h });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(353795),
    o = n(312640),
    c = n(208756),
    d = n(798618),
    u = n(916845),
    _ = n(627330),
    p = n(824078);
function m(e) {
    let {
            title: t,
            body: n,
            badge: i,
            graphic: m,
            size: h = "md",
            actions: f,
            textLink: g,
            gradientColor: b,
            onRequestClose: v,
            popoverRef: A,
            position: x,
            caretConfig: E,
            scrollBehavior: T,
            ...S
        } = e,
        C = r.useCallback(
            (e, t) => {
                v?.(t);
            },
            [v],
        ),
        I = r.useCallback(() => {
            v?.("user:explicit");
        }, [v]),
        y = {
            targetElementRef: S.targetElementRef,
            shouldShow: S.shouldShow,
            hasVideo: S.hasVideo,
            position: x,
            caretConfig: E,
            onRequestClose: C,
            gradientColor: b,
            scrollBehavior: T,
            ...("edge" === S.alignmentStrategy
                ? { alignmentStrategy: "edge", align: S.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(o.x, {
        ...y,
        children: (0, a.jsxs)("div", {
            ref: A,
            "data-mana-component": "popover",
            children: [
                (0, a.jsx)(u.q, { onClick: I, variant: null != b ? "color-mix" : void 0 }),
                null != m &&
                    (0, a.jsx)("div", {
                        className: l()(p.graphic, { [p[`graphic--${h}`]]: null != h }),
                        children: (0, a.jsx)(s.v, {
                            ...m,
                            aspectRatio: m.aspectRatio ?? ("sm" === h ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(_.D, { title: t, body: n, badge: i, textLink: g }),
                null != f && f.length > 0 ? (0, a.jsx)(c.Z, { actions: f }) : null,
                (0, a.jsx)(d.F, {}),
            ],
        }),
    });
}
let h = 21552 == n.j ? m : null;
