"use strict";
r.d(t, { A: () => f, h: () => m });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(353795),
    o = r(312640),
    c = r(208756),
    d = r(798618),
    u = r(916845),
    _ = r(627330),
    p = r(824078);
function f(e) {
    let {
            title: t,
            body: r,
            badge: a,
            graphic: f,
            size: m = "md",
            actions: h,
            textLink: g,
            gradientColor: b,
            onRequestClose: A,
            popoverRef: E,
            position: v,
            caretConfig: y,
            scrollBehavior: I,
            ...S
        } = e,
        x = i.useCallback(
            (e, t) => {
                A?.(t);
            },
            [A],
        ),
        T = i.useCallback(() => {
            A?.("user:explicit");
        }, [A]),
        C = {
            targetElementRef: S.targetElementRef,
            shouldShow: S.shouldShow,
            hasVideo: S.hasVideo,
            position: v,
            caretConfig: y,
            onRequestClose: x,
            gradientColor: b,
            scrollBehavior: I,
            ...("edge" === S.alignmentStrategy
                ? { alignmentStrategy: "edge", align: S.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(o.x, {
        ...C,
        children: (0, n.jsxs)("div", {
            ref: E,
            "data-mana-component": "popover",
            children: [
                (0, n.jsx)(u.q, { onClick: T, variant: null != b ? "color-mix" : void 0 }),
                null != f &&
                    (0, n.jsx)("div", {
                        className: s()(p.graphic, { [p[`graphic--${m}`]]: null != m }),
                        children: (0, n.jsx)(l.v, {
                            ...f,
                            aspectRatio: f.aspectRatio ?? ("sm" === m ? "2/1" : "16/9"),
                        }),
                    }),
                (0, n.jsx)(_.D, { title: t, body: r, badge: a, textLink: g }),
                null != h && h.length > 0 ? (0, n.jsx)(c.Z, { actions: h }) : null,
                (0, n.jsx)(d.F, {}),
            ],
        }),
    });
}
let m = 21552 == r.j ? f : null;
