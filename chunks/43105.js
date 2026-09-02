n.d(t, { A: () => h, h: () => _ });
var a = n(477900),
    r = n(582128),
    l = n(503698),
    i = n.n(l),
    s = n(353795),
    o = n(273875),
    c = n(208756),
    d = n(798618),
    u = n(916845),
    m = n(627330),
    p = n(489387);
function h(e) {
    let {
            title: t,
            body: n,
            badge: l,
            graphic: h,
            size: _ = "md",
            actions: g,
            textLink: f,
            gradientColor: E,
            onRequestClose: x,
            popoverRef: v,
            position: b,
            caretConfig: I,
            scrollBehavior: S,
            ...k
        } = e,
        C = r.useCallback(
            (e, t) => {
                x?.(t);
            },
            [x],
        ),
        y = r.useCallback(() => {
            x?.("user:explicit");
        }, [x]),
        M = {
            targetElementRef: k.targetElementRef,
            shouldShow: k.shouldShow,
            hasVideo: k.hasVideo,
            position: b,
            caretConfig: I,
            onRequestClose: C,
            gradientColor: E,
            scrollBehavior: S,
            ...("edge" === k.alignmentStrategy
                ? { alignmentStrategy: "edge", align: k.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(o.x, {
        ...M,
        children: (0, a.jsxs)("div", {
            ref: v,
            "data-mana-component": "popover",
            children: [
                (0, a.jsx)(u.q, { onClick: y, variant: null != E ? "color-mix" : void 0 }),
                null != h &&
                    (0, a.jsx)("div", {
                        className: i()(p.graphic, { [p[`graphic--${_}`]]: null != _ }),
                        children: (0, a.jsx)(s.v, {
                            ...h,
                            aspectRatio: h.aspectRatio ?? ("sm" === _ ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(m.D, { title: t, body: n, badge: l, textLink: f }),
                null != g && g.length > 0 ? (0, a.jsx)(c.Z, { actions: g }) : null,
                (0, a.jsx)(d.F, {}),
            ],
        }),
    });
}
let _ = 221552 == n.j ? h : null;
