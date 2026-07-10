"use strict";
n.d(t, { A: () => A, h: () => h });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(353795),
    o = n(312640),
    d = n(208756),
    c = n(798618),
    u = n(916845),
    _ = n(627330),
    E = n(824078);
function A(e) {
    let {
            title: t,
            body: n,
            badge: a,
            graphic: A,
            size: h = "md",
            actions: I,
            textLink: f,
            gradientColor: p,
            onRequestClose: T,
            popoverRef: m,
            position: g,
            caretConfig: S,
            scrollBehavior: N,
            ...C
        } = e,
        R = r.useCallback(
            (e, t) => {
                T?.(t);
            },
            [T],
        ),
        O = r.useCallback(() => {
            T?.("user:explicit");
        }, [T]),
        L = {
            targetElementRef: C.targetElementRef,
            shouldShow: C.shouldShow,
            hasVideo: C.hasVideo,
            position: g,
            caretConfig: S,
            onRequestClose: R,
            gradientColor: p,
            scrollBehavior: N,
            ...("edge" === C.alignmentStrategy
                ? { alignmentStrategy: "edge", align: C.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(o.x, {
        ...L,
        children: (0, i.jsxs)("div", {
            ref: m,
            "data-mana-component": "popover",
            children: [
                (0, i.jsx)(u.q, { onClick: O, variant: null != p ? "color-mix" : void 0 }),
                null != A &&
                    (0, i.jsx)("div", {
                        className: s()(E.graphic, { [E[`graphic--${h}`]]: null != h }),
                        children: (0, i.jsx)(l.v, {
                            ...A,
                            aspectRatio: A.aspectRatio ?? ("sm" === h ? "2/1" : "16/9"),
                        }),
                    }),
                (0, i.jsx)(_.D, { title: t, body: n, badge: a, textLink: f }),
                null != I && I.length > 0 ? (0, i.jsx)(d.Z, { actions: I }) : null,
                (0, i.jsx)(c.F, {}),
            ],
        }),
    });
}
let h = A;
