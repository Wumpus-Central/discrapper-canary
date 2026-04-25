a.d(t, { A: () => m, h: () => f });
var r = a(627968),
    n = a(64700),
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
            caretConfig: y,
            scrollBehavior: E,
            ...I
        } = e,
        S = n.useCallback(
            (e, t) => {
                x?.(t);
            },
            [x],
        ),
        j = n.useCallback(() => {
            x?.("user:explicit");
        }, [x]),
        C = {
            targetElementRef: I.targetElementRef,
            shouldShow: I.shouldShow,
            hasVideo: I.hasVideo,
            position: A,
            caretConfig: y,
            onRequestClose: S,
            gradientColor: g,
            scrollBehavior: E,
            ...("edge" === I.alignmentStrategy
                ? { alignmentStrategy: "edge", align: I.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(o.x, {
        ...C,
        children: (0, r.jsxs)("div", {
            ref: v,
            "data-mana-component": "popover",
            children: [
                (0, r.jsx)(u.q, { onClick: j, variant: null != g ? "color-mix" : void 0 }),
                null != m &&
                    (0, r.jsx)("div", {
                        className: i()(p.graphic, { [p[`graphic--${f}`]]: null != f }),
                        children: (0, r.jsx)(s.v, {
                            ...m,
                            aspectRatio: m.aspectRatio ?? ("sm" === f ? "2/1" : "16/9"),
                        }),
                    }),
                (0, r.jsx)(h.D, { title: t, body: a, badge: l, textLink: _ }),
                null != b && b.length > 0 ? (0, r.jsx)(c.Z, { actions: b }) : null,
                (0, r.jsx)(d.F, {}),
            ],
        }),
    });
}
let f = 21552 == a.j ? m : null;
