n.d(t, { z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(481060),
    u = n(393238),
    c = n(991209);
let d = 100;
function f(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: f } = e,
        [_, p] = r.useState(!1),
        [h, m] = r.useState(!0),
        [g, E] = r.useState(!1),
        v = null != f ? f : _,
        { ref: y, height: I = 0 } = (0, u.Z)(),
        { ref: T, height: b = 0 } = (0, u.Z)(),
        S = (0, l.q_F)(
            {
                height: v ? I + b : b,
                config: o.config.stiff,
                onRest: () => E(!0)
            },
            h ? 'animate-never' : 'respect-motion-settings'
        ),
        A = r.useCallback(() => {
            p(!_);
        }, [_, p]);
    return (
        r.useLayoutEffect(() => {
            let e = setTimeout(() => {
                m(!1);
            }, d);
            return () => clearTimeout(e);
        }, []),
        (0, i.jsx)('div', {
            className: s()(c.collapseable, { [c.toggled]: v }, n),
            children: (0, i.jsxs)(o.animated.div, {
                className: s()(c.contentExpandContainer, { [c.showOverflow]: v && g }),
                style: S,
                children: [
                    (0, i.jsx)('div', {
                        ref: T,
                        className: s()(c.header, { [c.toggled]: v }),
                        children: t({ onClick: A })
                    }),
                    (0, i.jsx)('div', {
                        ref: y,
                        children: a
                    })
                ]
            })
        })
    );
}
