n.d(t, { A: () => f, h: () => h });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(353795),
    s = n(312640),
    c = n(208756),
    d = n(798618),
    u = n(916845),
    _ = n(627330),
    p = n(824078);
function f(e) {
    let {
            title: t,
            body: n,
            badge: l,
            graphic: f,
            size: h = "md",
            actions: m,
            textLink: g,
            gradientColor: b,
            onRequestClose: A,
            popoverRef: E,
            position: v,
            caretConfig: I,
            scrollBehavior: y,
            ...S
        } = e,
        C = i.useCallback(
            (e, t) => {
                A?.(t);
            },
            [A],
        ),
        T = i.useCallback(() => {
            A?.("user:explicit");
        }, [A]),
        x = {
            targetElementRef: S.targetElementRef,
            shouldShow: S.shouldShow,
            hasVideo: S.hasVideo,
            position: v,
            caretConfig: I,
            onRequestClose: C,
            gradientColor: b,
            scrollBehavior: y,
            ...("edge" === S.alignmentStrategy
                ? { alignmentStrategy: "edge", align: S.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(s.x, {
        ...x,
        children: (0, a.jsxs)("div", {
            ref: E,
            "data-mana-component": "popover",
            children: [
                (0, a.jsx)(u.q, { onClick: T, variant: null != b ? "color-mix" : void 0 }),
                null != f &&
                    (0, a.jsx)("div", {
                        className: r()(p.graphic, { [p[`graphic--${h}`]]: null != h }),
                        children: (0, a.jsx)(o.v, {
                            ...f,
                            aspectRatio: f.aspectRatio ?? ("sm" === h ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(_.D, { title: t, body: n, badge: l, textLink: g }),
                null != m && m.length > 0 ? (0, a.jsx)(c.Z, { actions: m }) : null,
                (0, a.jsx)(d.F, {}),
            ],
        }),
    });
}
let h = 21552 == n.j ? f : null;
