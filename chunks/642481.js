"use strict";
n.d(t, { A: () => f, j: () => I });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(312640),
    o = n(208756),
    d = n(798618),
    c = n(916845),
    u = n(297264),
    _ = n(834730),
    E = n(353795),
    A = n(989108);
function h(e) {
    let { title: t, body: n } = e;
    return (0, i.jsxs)("div", {
        className: A.header,
        children: [
            (0, i.jsx)(u.D, { variant: "heading-md/semibold", className: A.title, children: t }),
            (0, i.jsx)("div", {
                className: A.headerBody,
                children: (0, i.jsx)(_.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function I(e) {
    let {
            title: t,
            body: n,
            graphic: a,
            size: u = "md",
            actions: _,
            gradientColor: I,
            onRequestClose: f,
            position: p,
            caretConfig: T,
            scrollBehavior: m,
            showCloseButton: g = !0,
            isCaretHoverable: S = !1,
            shouldTrapFocus: N = !1,
            returnRef: C,
            onNudgeChange: R,
            ...O
        } = e,
        [L, y] = r.useState(p ?? "top");
    r.useEffect(() => {
        null != p && y(p);
    }, [p]);
    let D = r.useMemo(() => ({ align: T?.align ?? "center", customOffset: T?.customOffset }), [T]),
        v = r.useCallback(() => {
            f?.();
        }, [f]),
        b = r.useCallback(
            (e) => {
                f?.(e);
            },
            [f],
        ),
        M = r.useCallback((e) => {
            y(e);
        }, []),
        P = S ? A.caretHoverable : void 0,
        U = {
            targetElementRef: O.targetElementRef,
            shouldShow: O.shouldShow,
            hasVideo: O.hasVideo,
            position: L,
            caretConfig: D,
            onRequestClose: v,
            gradientColor: I,
            onPositionChange: M,
            onNudgeChange: R,
            scrollBehavior: m,
            modal: N,
            returnRef: C,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === O.alignmentStrategy
                ? { alignmentStrategy: "edge", align: O.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(l.x, {
        ...U,
        children: (0, i.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                g && (0, i.jsx)(c.q, { onClick: b, variant: null != I ? "color-mix" : void 0 }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: s()(A.graphic, { [A[`graphic--${u}`]]: null != u }),
                        children: (0, i.jsx)(E.v, {
                            ...a,
                            aspectRatio: a.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, i.jsx)(h, { title: t, body: n }),
                null != _ && _.length > 0 ? (0, i.jsx)(o.Z, { actions: _, className: A.actionBar }) : null,
                null != D && (0, i.jsx)(d.F, { className: P }),
            ],
        }),
    });
}
let f = I;
