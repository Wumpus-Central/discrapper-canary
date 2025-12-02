n.d(t, { z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(481060),
    c = n(393238),
    u = n(484201);
let d = 100;
function f(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: f } = e,
        [p, _] = i.useState(!1),
        [m, h] = i.useState(!0),
        [g, E] = i.useState(!1),
        b = null != f ? f : p,
        { ref: y, height: O = 0 } = (0, c.ZP)(),
        { ref: v, height: S = 0 } = (0, c.ZP)(),
        I = (0, l.q_F)(
            {
                height: b ? O + S : S,
                config: s.config.stiff,
                onRest: () => E(!0),
            },
            m ? "animate-never" : "respect-motion-settings",
        ),
        T = i.useCallback(() => {
            _(!p);
        }, [p, _]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                h(!1);
            }, d);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)("div", {
            className: o()(u.collapseable, { [u.toggled]: b }, n),
            children: (0, r.jsxs)(s.animated.div, {
                className: o()(u.contentExpandContainer, { [u.showOverflow]: b && g }),
                style: I,
                children: [
                    (0, r.jsx)("div", {
                        ref: v,
                        className: o()(u.header, { [u.toggled]: b }),
                        children: t({ onClick: T }),
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
