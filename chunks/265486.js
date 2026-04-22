a.d(t, { A: () => p, h: () => g });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(608250),
    o = a(964892),
    c = a(208756),
    d = a(135564),
    u = a(916845),
    h = a(627330),
    m = a(824078);
function p(e) {
    let {
            title: t,
            body: a,
            badge: l,
            graphic: p,
            size: g = "md",
            actions: _,
            textLink: f,
            gradientColor: v,
            onRequestClose: x,
            popoverRef: E,
            position: w,
            caretConfig: A,
            scrollBehavior: b,
            ...I
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
        S = {
            targetElementRef: I.targetElementRef,
            shouldShow: I.shouldShow,
            hasVideo: I.hasVideo,
            position: w,
            caretConfig: A,
            onRequestClose: C,
            gradientColor: v,
            scrollBehavior: b,
            ...("edge" === I.alignmentStrategy
                ? { alignmentStrategy: "edge", align: I.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, n.jsx)(o.x, {
        ...S,
        children: (0, n.jsxs)("div", {
            ref: E,
            "data-mana-component": "popover",
            children: [
                (0, n.jsx)(u.q, { onClick: y, variant: null != v ? "color-mix" : void 0 }),
                null != p &&
                    (0, n.jsx)("div", {
                        className: i()(m.graphic, { [m[`graphic--${g}`]]: null != g }),
                        children: (0, n.jsx)(s.v, {
                            ...p,
                            aspectRatio: p.aspectRatio ?? ("sm" === g ? "2/1" : "16/9"),
                        }),
                    }),
                (0, n.jsx)(h.D, { title: t, body: a, badge: l, textLink: f }),
                null != _ && _.length > 0 ? (0, n.jsx)(c.Z, { actions: _ }) : null,
                (0, n.jsx)(d.F, {}),
            ],
        }),
    });
}
let g = 21552 == a.j ? p : null;
