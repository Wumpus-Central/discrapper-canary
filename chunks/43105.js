n.d(t, { A: () => I, h: () => A });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(353795),
    l = n(312640),
    o = n(208756),
    E = n(798618),
    d = n(916845),
    c = n(627330),
    u = n(824078);
function I(e) {
    let {
            title: t,
            body: n,
            badge: a,
            graphic: I,
            size: A = "md",
            actions: T,
            textLink: S,
            gradientColor: N,
            onRequestClose: O,
            popoverRef: R,
            position: f,
            caretConfig: C,
            scrollBehavior: p,
            ...m
        } = e,
        L = r.useCallback(
            (e, t) => {
                O?.(t);
            },
            [O],
        ),
        D = r.useCallback(() => {
            O?.("user:explicit");
        }, [O]),
        h = {
            targetElementRef: m.targetElementRef,
            shouldShow: m.shouldShow,
            hasVideo: m.hasVideo,
            position: f,
            caretConfig: C,
            onRequestClose: L,
            gradientColor: N,
            scrollBehavior: p,
            ...("edge" === m.alignmentStrategy
                ? { alignmentStrategy: "edge", align: m.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(l.x, {
        ...h,
        children: (0, i.jsxs)("div", {
            ref: R,
            "data-mana-component": "popover",
            children: [
                (0, i.jsx)(d.q, { onClick: D, variant: null != N ? "color-mix" : void 0 }),
                null != I &&
                    (0, i.jsx)("div", {
                        className: s()(u.graphic, { [u[`graphic--${A}`]]: null != A }),
                        children: (0, i.jsx)(_.v, {
                            ...I,
                            aspectRatio: I.aspectRatio ?? ("sm" === A ? "2/1" : "16/9"),
                        }),
                    }),
                (0, i.jsx)(c.D, { title: t, body: n, badge: a, textLink: S }),
                null != T && T.length > 0 ? (0, i.jsx)(o.Z, { actions: T }) : null,
                (0, i.jsx)(E.F, {}),
            ],
        }),
    });
}
let A = I;
