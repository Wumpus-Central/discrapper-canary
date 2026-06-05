"use strict";
n.d(t, { A: () => f, h: () => p });
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
    h = n(824078);
function f(e) {
    let {
            title: t,
            body: n,
            badge: s,
            graphic: f,
            size: p = "md",
            actions: E,
            textLink: m,
            gradientColor: g,
            onRequestClose: A,
            popoverRef: I,
            position: T,
            caretConfig: S,
            scrollBehavior: y,
            ...N
        } = e,
        v = r.useCallback(
            (e, t) => {
                A?.(t);
            },
            [A],
        ),
        C = r.useCallback(() => {
            A?.("user:explicit");
        }, [A]),
        R = {
            targetElementRef: N.targetElementRef,
            shouldShow: N.shouldShow,
            hasVideo: N.hasVideo,
            position: T,
            caretConfig: S,
            onRequestClose: v,
            gradientColor: g,
            scrollBehavior: y,
            ...("edge" === N.alignmentStrategy
                ? { alignmentStrategy: "edge", align: N.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(l.x, {
        ...R,
        children: (0, i.jsxs)("div", {
            ref: I,
            "data-mana-component": "popover",
            children: [
                (0, i.jsx)(d.q, { onClick: C, variant: null != g ? "color-mix" : void 0 }),
                null != f &&
                    (0, i.jsx)("div", {
                        className: a()(h.graphic, { [h[`graphic--${p}`]]: null != p }),
                        children: (0, i.jsx)(o.v, {
                            ...f,
                            aspectRatio: f.aspectRatio ?? ("sm" === p ? "2/1" : "16/9"),
                        }),
                    }),
                (0, i.jsx)(_.D, { title: t, body: n, badge: s, textLink: m }),
                null != E && E.length > 0 ? (0, i.jsx)(u.Z, { actions: E }) : null,
                (0, i.jsx)(c.F, {}),
            ],
        }),
    });
}
let p = full;
