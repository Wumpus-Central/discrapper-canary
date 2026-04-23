"use strict";
n.d(t, { A: () => m, j: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(964892),
    l = n(208756),
    u = n(135564),
    c = n(916845),
    d = n(534514),
    _ = n(834730),
    f = n(608250),
    p = n(989108);
function h(e) {
    let { title: t, body: n } = e;
    return (0, r.jsxs)("div", {
        className: p.header,
        children: [
            (0, r.jsx)(d.D, { variant: "heading-md/semibold", className: p.title, children: t }),
            (0, r.jsx)("div", {
                className: p.headerBody,
                children: (0, r.jsx)(_.E, { variant: "text-sm/normal", color: "none", children: n }),
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
        [O, R] = i.useState(g ?? "top");
    i.useEffect(() => {
        null != g && R(g);
    }, [g]);
    let b = i.useMemo(() => ({ align: A?.align ?? "center", customOffset: A?.customOffset }), [A]),
        D = i.useCallback(() => {
            m?.();
        }, [m]),
        L = i.useCallback(
            (e) => {
                m?.(e);
            },
            [m],
        ),
        w = i.useCallback((e) => {
            R(e);
        }, []),
        M = S ? p.caretHoverable : void 0,
        P = {
            targetElementRef: C.targetElementRef,
            shouldShow: C.shouldShow,
            hasVideo: C.hasVideo,
            position: O,
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
    return (0, r.jsx)(o.x, {
        ...P,
        children: (0, r.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                T && (0, r.jsx)(c.q, { onClick: L, variant: null != E ? "color-mix" : void 0 }),
                null != s &&
                    (0, r.jsx)("div", {
                        className: a()(p.graphic, { [p[`graphic--${d}`]]: null != d }),
                        children: (0, r.jsx)(f.v, {
                            ...s,
                            aspectRatio: s.aspectRatio ?? ("sm" === d ? "2/1" : "16/9"),
                        }),
                    }),
                (0, r.jsx)(h, { title: t, body: n }),
                null != _ && _.length > 0 ? (0, r.jsx)(l.Z, { actions: _, className: p.actionBar }) : null,
                null != b && (0, r.jsx)(u.F, { className: M }),
            ],
        }),
    });
}
let m = E;
