"use strict";
n.d(t, { A: () => p, h: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(964892),
    u = n(208756),
    c = n(135564),
    d = n(916845),
    _ = n(627330),
    f = n(824078);
function p(e) {
    let {
            title: t,
            body: n,
            badge: s,
            graphic: p,
            size: h = "md",
            actions: m,
            textLink: E,
            gradientColor: g,
            onRequestClose: A,
            popoverRef: I,
            position: T,
            caretConfig: S,
            scrollBehavior: y,
            ...v
        } = e,
        N = i.useCallback(
            (e, t) => {
                A?.(t);
            },
            [A],
        ),
        C = i.useCallback(() => {
            A?.("user:explicit");
        }, [A]),
        R = {
            targetElementRef: v.targetElementRef,
            shouldShow: v.shouldShow,
            hasVideo: v.hasVideo,
            position: T,
            caretConfig: S,
            onRequestClose: N,
            gradientColor: g,
            scrollBehavior: y,
            ...("edge" === v.alignmentStrategy
                ? { alignmentStrategy: "edge", align: v.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(l.x, {
        ...R,
        children: (0, r.jsxs)("div", {
            ref: I,
            "data-mana-component": "popover",
            children: [
                (0, r.jsx)(d.q, { onClick: C, variant: null != g ? "color-mix" : void 0 }),
                null != p &&
                    (0, r.jsx)("div", {
                        className: a()(f.graphic, { [f[`graphic--${h}`]]: null != h }),
                        children: (0, r.jsx)(o.vYh, {
                            ...p,
                            aspectRatio: p.aspectRatio ?? ("sm" === h ? "2/1" : "16/9"),
                        }),
                    }),
                (0, r.jsx)(_.D, { title: t, body: n, badge: s, textLink: E }),
                null != m && m.length > 0 ? (0, r.jsx)(u.Z, { actions: m }) : null,
                (0, r.jsx)(c.F, {}),
            ],
        }),
    });
}
let h = p;
