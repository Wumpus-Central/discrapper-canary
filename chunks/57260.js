n.d(t, { z: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(272573),
    l = n(481060),
    c = n(393238),
    u = n(397974);
let d = 100;
function f(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: f } = e,
        [_, p] = i.useState(!1),
        [h, m] = i.useState(!0),
        [g, E] = i.useState(!1),
        b = null != f ? f : _,
        { ref: y, height: v = 0 } = (0, c.ZP)(),
        { ref: O, height: I = 0 } = (0, c.ZP)(),
        S = (0, l.q_F)(
            {
                height: b ? v + I : I,
                config: s.config.stiff,
                onRest: () => E(!0)
            },
            h ? 'animate-never' : 'respect-motion-settings'
        ),
        T = i.useCallback(() => {
            p(!_);
        }, [_, p]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                m(!1);
            }, d);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)('div', {
            className: o()(u.collapseable, { [u.toggled]: b }, n),
            children: (0, r.jsxs)(s.animated.div, {
                className: o()(u.contentExpandContainer, { [u.showOverflow]: b && g }),
                style: S,
                children: [
                    (0, r.jsx)('div', {
                        ref: O,
                        className: o()(u.header, { [u.toggled]: b }),
                        children: t({ onClick: T })
                    }),
                    (0, r.jsx)('div', {
                        ref: y,
                        children: a
                    })
                ]
            })
        })
    );
}
