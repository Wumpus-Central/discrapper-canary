"use strict";
n.d(t, { A: () => p, h: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(964892),
    u = n(208756),
    c = n(135564),
    d = n(916845),
    _ = n(627330),
    f = n(248789);
function p(e) {
    let {
            title: t,
            body: n,
            badge: a,
            graphic: p,
            size: h = "md",
            actions: m,
            textLink: g,
            gradientColor: E,
            onRequestClose: A,
            popoverRef: I,
            position: T,
            caretConfig: y,
            scrollBehavior: S,
            ...v
        } = e,
        C = i.useCallback(
            (e, t) => {
                A?.(t);
            },
            [A],
        ),
        b = i.useCallback(() => {
            A?.("user:explicit");
        }, [A]),
        N = {
            targetElementRef: v.targetElementRef,
            shouldShow: v.shouldShow,
            hasVideo: v.hasVideo,
            position: T,
            caretConfig: y,
            onRequestClose: C,
            gradientColor: E,
            scrollBehavior: S,
            ...("edge" === v.alignmentStrategy
                ? { alignmentStrategy: "edge", align: v.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(l.x, {
        ...N,
        children: (0, r.jsxs)("div", {
            ref: I,
            "data-mana-component": "popover",
            children: [
                (0, r.jsx)(d.q, { onClick: b, variant: null != E ? "color-mix" : void 0 }),
                null != p &&
                    (0, r.jsx)("div", {
                        className: s()(f.graphic, { [f[`graphic--${h}`]]: null != h }),
                        children: (0, r.jsx)(o.vYh, {
                            ...p,
                            aspectRatio: p.aspectRatio ?? ("sm" === h ? "2/1" : "16/9"),
                        }),
                    }),
                (0, r.jsx)(_.D, { title: t, body: n, badge: a, textLink: g }),
                null != m && m.length > 0 ? (0, r.jsx)(u.Z, { actions: m }) : null,
                (0, r.jsx)(c.F, {}),
            ],
        }),
    });
}
let h = p;
