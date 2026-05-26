"use strict";
n.d(t, { A: () => h, h: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(353795),
    l = n(312640),
    u = n(208756),
    c = n(798618),
    d = n(916845),
    _ = n(627330),
    f = n(824078);
function h(e) {
    let {
            title: t,
            body: n,
            badge: s,
            graphic: h,
            size: p = "md",
            actions: E,
            textLink: m,
            gradientColor: g,
            onRequestClose: A,
            popoverRef: I,
            position: T,
            caretConfig: S,
            scrollBehavior: N,
            ...y
        } = e,
        C = r.useCallback(
            (e, t) => {
                A?.(t);
            },
            [A],
        ),
        v = r.useCallback(() => {
            A?.("user:explicit");
        }, [A]),
        O = {
            targetElementRef: y.targetElementRef,
            shouldShow: y.shouldShow,
            hasVideo: y.hasVideo,
            position: T,
            caretConfig: S,
            onRequestClose: C,
            gradientColor: g,
            scrollBehavior: N,
            ...("edge" === y.alignmentStrategy
                ? { alignmentStrategy: "edge", align: y.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(l.x, {
        ...O,
        children: (0, i.jsxs)("div", {
            ref: I,
            "data-mana-component": "popover",
            children: [
                (0, i.jsx)(d.q, { onClick: v, variant: null != g ? "color-mix" : void 0 }),
                null != h &&
                    (0, i.jsx)("div", {
                        className: a()(f.graphic, { [f[`graphic--${p}`]]: null != p }),
                        children: (0, i.jsx)(o.v, {
                            ...h,
                            aspectRatio: h.aspectRatio ?? ("sm" === p ? "2/1" : "16/9"),
                        }),
                    }),
                (0, i.jsx)(_.D, { title: t, body: n, badge: s, textLink: m }),
                null != E && E.length > 0 ? (0, i.jsx)(u.Z, { actions: E }) : null,
                (0, i.jsx)(c.F, {}),
            ],
        }),
    });
}
let p = h;
