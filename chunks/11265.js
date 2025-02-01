t.d(n, { Z: () => x }), t(47120);
var i = t(200651),
    l = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(642128),
    o = t(481060),
    c = t(393238),
    d = t(388032),
    u = t(872939);
let x = l.memo(function (e) {
    let { renderHeader: n, children: t, isExpanded: s, isStuck: x, onExpand: m, disableAnimation: h, disableBackground: f } = e,
        [v, g] = l.useState(!0),
        [j, C] = l.useState(!1),
        { ref: p, height: N = 0 } = (0, c.Z)(),
        { ref: R, height: y = 0 } = (0, c.Z)(),
        [w, E] = l.useState(s),
        T = (0, o.q_F)(
            {
                height: w ? y + N : N,
                config: {
                    ...r.config.stiff,
                    clamp: !0
                },
                onStart: () => {
                    C(!1);
                },
                onRest: () => {
                    C(!0);
                }
            },
            v || h ? 'animate-never' : 'respect-motion-settings'
        );
    return (
        l.useLayoutEffect(() => {
            C(!1), E(s);
        }, [s]),
        l.useLayoutEffect(() => {
            let e = setTimeout(() => {
                g(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, i.jsx)(o.P3F, {
            className: a()(u.editCard, {
                [u.toggled]: s,
                [u.noBackground]: f
            }),
            children: (0, i.jsxs)(r.animated.div, {
                className: a()(u.contentExpandContainer, { [u.showOverflow]: s && j }),
                style: T,
                children: [
                    (0, i.jsx)(o.P3F, {
                        innerRef: p,
                        onClick: x ? void 0 : m,
                        className: a()(u.innerHeader, { [u.toggled]: s && x }),
                        'aria-label': d.intl.string(d.t.dcl9MT),
                        children: n
                    }),
                    (0, i.jsx)('div', {
                        ref: R,
                        children: t
                    })
                ]
            })
        })
    );
});
