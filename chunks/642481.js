"use strict";
n.d(t, { A: () => m, j: () => E });
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
function p(e) {
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
function E(e) {
    let {
            title: t,
            body: n,
            graphic: s,
            size: d = "md",
            actions: _,
            gradientColor: E,
            onRequestClose: m,
            position: g,
            caretConfig: A,
            scrollBehavior: I,
            showCloseButton: T = !0,
            isCaretHoverable: S = !1,
            shouldTrapFocus: y = !1,
            returnRef: N,
            onNudgeChange: v,
            ...C
        } = e,
        [R, O] = r.useState(g ?? "top");
    r.useEffect(() => {
        null != g && O(g);
    }, [g]);
    let b = r.useMemo(() => ({ align: A?.align ?? "center", customOffset: A?.customOffset }), [A]),
        D = r.useCallback(() => {
            m?.();
        }, [m]),
        L = r.useCallback(
            (e) => {
                m?.(e);
            },
            [m],
        ),
        w = r.useCallback((e) => {
            O(e);
        }, []),
        M = S ? f.caretHoverable : void 0,
        P = {
            targetElementRef: C.targetElementRef,
            shouldShow: C.shouldShow,
            hasVideo: C.hasVideo,
            position: R,
            caretConfig: b,
            onRequestClose: D,
            gradientColor: E,
            onPositionChange: w,
            onNudgeChange: v,
            scrollBehavior: I,
            modal: y,
            returnRef: N,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === C.alignmentStrategy
                ? { alignmentStrategy: "edge", align: C.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(o.x, {
        ...P,
        children: (0, i.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                T && (0, i.jsx)(c.q, { onClick: L, variant: null != E ? "color-mix" : void 0 }),
                null != s &&
                    (0, i.jsx)("div", {
                        className: a()(f.graphic, { [f[`graphic--${d}`]]: null != d }),
                        children: (0, i.jsx)(h.v, {
                            ...s,
                            aspectRatio: s.aspectRatio ?? ("sm" === d ? "2/1" : "16/9"),
                        }),
                    }),
                (0, i.jsx)(p, { title: t, body: n }),
                null != _ && _.length > 0 ? (0, i.jsx)(l.Z, { actions: _, className: f.actionBar }) : null,
                null != b && (0, i.jsx)(u.F, { className: M }),
            ],
        }),
    });
}
let m = E;
