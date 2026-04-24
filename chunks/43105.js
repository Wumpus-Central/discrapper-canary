a.d(t, { A: () => m, h: () => f });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(353795),
    o = a(312640),
    c = a(208756),
    d = a(798618),
    u = a(916845),
    h = a(627330),
    p = a(824078);
function m(e) {
    let {
            title: t,
            body: a,
            badge: l,
            graphic: m,
            size: f = "md",
            actions: b,
            textLink: _,
            gradientColor: g,
            onRequestClose: x,
            popoverRef: v,
            position: A,
            caretConfig: E,
            scrollBehavior: y,
            ...I
        } = e,
        S = r.useCallback(
            (e, t) => {
                x?.(t);
            },
            [x],
        ),
        j = r.useCallback(() => {
            x?.("user:explicit");
        }, [x]),
        C = {
            targetElementRef: I.targetElementRef,
            shouldShow: I.shouldShow,
            hasVideo: I.hasVideo,
            position: A,
            caretConfig: E,
            onRequestClose: S,
            gradientColor: g,
            scrollBehavior: y,
            ...("edge" === I.alignmentStrategy
                ? { alignmentStrategy: "edge", align: I.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(o.x, {
        ...C,
        children: (0, n.jsxs)("div", {
            ref: v,
            "data-mana-component": "popover",
            children: [
                (0, n.jsx)(u.q, { onClick: j, variant: null != g ? "color-mix" : void 0 }),
                null != m &&
                    (0, n.jsx)("div", {
                        className: i()(p.graphic, { [p[`graphic--${f}`]]: null != f }),
                        children: (0, n.jsx)(s.v, {
                            ...m,
                            aspectRatio: m.aspectRatio ?? ("sm" === f ? "2/1" : "16/9"),
                        }),
                    }),
                (0, n.jsx)(h.D, { title: t, body: a, badge: l, textLink: _ }),
                null != b && b.length > 0 ? (0, n.jsx)(c.Z, { actions: b }) : null,
                (0, n.jsx)(d.F, {}),
            ],
        }),
    });
}
let f = 21552 == a.j ? m : null;
