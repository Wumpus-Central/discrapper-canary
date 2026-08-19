n.d(t, { A: () => u, h: () => A });
var i = n(477900),
    s = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(353795),
    E = n(273875),
    o = n(208756),
    c = n(798618),
    d = n(916845),
    _ = n(627330),
    S = n(753094);
function u(e) {
    let {
            title: t,
            body: n,
            badge: a,
            graphic: u,
            size: A = "md",
            actions: I,
            textLink: h,
            gradientColor: T,
            onRequestClose: R,
            popoverRef: N,
            position: m,
            caretConfig: C,
            scrollBehavior: P,
            ...O
        } = e,
        x = s.useCallback(
            (e, t) => {
                R?.(t);
            },
            [R],
        ),
        f = s.useCallback(() => {
            R?.("user:explicit");
        }, [R]),
        v = {
            targetElementRef: O.targetElementRef,
            shouldShow: O.shouldShow,
            hasVideo: O.hasVideo,
            position: m,
            caretConfig: C,
            onRequestClose: x,
            gradientColor: T,
            scrollBehavior: P,
            ...("edge" === O.alignmentStrategy
                ? { alignmentStrategy: "edge", align: O.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, i.jsx)(E.x, {
        ...v,
        children: (0, i.jsxs)("div", {
            ref: N,
            "data-mana-component": "popover",
            children: [
                (0, i.jsx)(d.q, { onClick: f, variant: null != T ? "color-mix" : void 0 }),
                null != u &&
                    (0, i.jsx)("div", {
                        className: l()(S.graphic, { [S[`graphic--${A}`]]: null != A }),
                        children: (0, i.jsx)(r.v, {
                            ...u,
                            aspectRatio: u.aspectRatio ?? ("sm" === A ? "2/1" : "16/9"),
                        }),
                    }),
                (0, i.jsx)(_.D, { title: t, body: n, badge: a, textLink: h }),
                null != I && I.length > 0 ? (0, i.jsx)(o.Z, { actions: I }) : null,
                (0, i.jsx)(c.F, {}),
            ],
        }),
    });
}
let A = 221552 == n.j ? u : null;
