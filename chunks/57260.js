n.d(t, { z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(358458),
    l = n(481060),
    c = n(393238),
    u = n(484201);
let d = 100;
function f(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: f } = e,
        [_, p] = i.useState(!1),
        [h, m] = i.useState(!0),
        [g, E] = i.useState(!1),
        b = null != f ? f : _,
        { ref: y, height: O = 0 } = (0, c.ZP)(),
        { ref: v, height: I = 0 } = (0, c.ZP)(),
        T = (0, l.q_F)(
            {
                height: b ? O + I : I,
                config: s.config.stiff,
                onRest: () => E(!0),
            },
            h ? "animate-never" : "respect-motion-settings",
        ),
        S = i.useCallback(() => {
            p(!_);
        }, [_, p]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                m(!1);
            }, d);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)("div", {
            className: o()(u.collapseable, { [u.toggled]: b }, n),
            children: (0, r.jsxs)(s.animated.div, {
                className: o()(u.contentExpandContainer, { [u.showOverflow]: b && g }),
                style: T,
                children: [
                    (0, r.jsx)("div", {
                        ref: v,
                        className: o()(u.header, { [u.toggled]: b }),
                        children: t({ onClick: S }),
                    }),
                    (0, r.jsx)(l.Rny, {
                        enabled: !b,
                        children: (0, r.jsx)("div", {
                            ref: y,
                            "aria-hidden": !b,
                            children: a,
                        }),
                    }),
                ],
            }),
        })
    );
}
