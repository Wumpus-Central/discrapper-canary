"use strict";
n.d(t, { A: () => m, j: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(312640),
    l = n(208756),
    u = n(798618),
    c = n(916845),
    d = n(534514),
    _ = n(834730),
    h = n(353795),
    f = n(989108);
function E(e) {
    let { title: t, body: n } = e;
    return (0, i.jsxs)("div", {
        className: f.header,
        children: [
            (0, i.jsx)(d.D, { variant: "heading-md/semibold", className: f.title, children: t }),
            (0, i.jsx)("div", {
                className: f.headerBody,
                children: (0, i.jsx)(_.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function p(e) {
    let {
            title: t,
            body: n,
            graphic: s,
            size: d = "md",
            actions: _,
            gradientColor: p,
            onRequestClose: m,
            position: g,
            caretConfig: A,
            scrollBehavior: I,
            showCloseButton: T = !0,
            isCaretHoverable: S = !1,
            shouldTrapFocus: N = !1,
            returnRef: C,
            onNudgeChange: y,
            ...O
        } = e,
        [R, v] = r.useState(g ?? "top");
    r.useEffect(() => {
        null != g && v(g);
    }, [g]);
    let b = r.useMemo(() => ({ align: A?.align ?? "center", customOffset: A?.customOffset }), [A]),
        L = r.useCallback(() => {
            m?.();
        }, [m]),
        D = r.useCallback(
            (e) => {
                m?.(e);
            },
            [m],
        ),
        w = r.useCallback((e) => {
            v(e);
        }, []),
        P = S ? f.caretHoverable : void 0,
        M = {
            targetElementRef: O.targetElementRef,
            shouldShow: O.shouldShow,
            hasVideo: O.hasVideo,
            position: R,
            caretConfig: b,
            onRequestClose: L,
            gradientColor: p,
            onPositionChange: w,
            onNudgeChange: y,
            scrollBehavior: I,
            modal: N,
            returnRef: C,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === O.alignmentStrategy
                ? { alignmentStrategy: "edge", align: O.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(o.x, {
        ...M,
        children: (0, i.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                T && (0, i.jsx)(c.q, { onClick: D, variant: null != p ? "color-mix" : void 0 }),
                null != s &&
                    (0, i.jsx)("div", {
                        className: a()(f.graphic, { [f[`graphic--${d}`]]: null != d }),
                        children: (0, i.jsx)(h.v, {
                            ...s,
                            aspectRatio: s.aspectRatio ?? ("sm" === d ? "2/1" : "16/9"),
                        }),
                    }),
                (0, i.jsx)(E, { title: t, body: n }),
                null != _ && _.length > 0 ? (0, i.jsx)(l.Z, { actions: _, className: f.actionBar }) : null,
                null != b && (0, i.jsx)(u.F, { className: P }),
            ],
        }),
    });
}
let m = p;
