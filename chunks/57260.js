n.d(t, { z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(481060),
    c = n(393238),
    u = n(615339);
let d = 100;
function f(e) {
    let { children: t, className: n, collapsibleContent: o, isExpanded: f } = e,
        [p, _] = i.useState(!1),
        [h, m] = i.useState(!0),
        [g, E] = i.useState(!1),
        v = null != f ? f : p,
        { ref: b, height: y = 0 } = (0, c.Z)(),
        { ref: O, height: S = 0 } = (0, c.Z)(),
        I = (0, l.q_F)(
            {
                height: v ? y + S : S,
                config: s.config.stiff,
                onRest: () => E(!0)
            },
            h ? 'animate-never' : 'respect-motion-settings'
        ),
        T = i.useCallback(() => {
            _(!p);
        }, [p, _]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                m(!1);
            }, d);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)('div', {
            className: a()(u.collapseable, { [u.toggled]: v }, n),
            children: (0, r.jsxs)(s.animated.div, {
                className: a()(u.contentExpandContainer, { [u.showOverflow]: v && g }),
                style: I,
                children: [
                    (0, r.jsx)('div', {
                        ref: O,
                        className: a()(u.header, { [u.toggled]: v }),
                        children: t({ onClick: T })
                    }),
                    (0, r.jsx)('div', {
                        ref: b,
                        children: o
                    })
                ]
            })
        })
    );
}
