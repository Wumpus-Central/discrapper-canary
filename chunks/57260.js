n.d(t, { z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(524979),
    l = n(481060),
    c = n(393238),
    u = n(397974);
let d = 100;
function _(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: _ } = e,
        [f, p] = i.useState(!1),
        [h, m] = i.useState(!0),
        [g, E] = i.useState(!1),
        b = null != _ ? _ : f,
        { ref: y, height: O = 0 } = (0, c.ZP)(),
        { ref: v, height: I = 0 } = (0, c.ZP)(),
        T = (0, l.q_F)(
            {
                height: b ? O + I : I,
                config: s.config.stiff,
                onRest: () => E(!0)
            },
            h ? 'animate-never' : 'respect-motion-settings'
        ),
        S = i.useCallback(() => {
            p(!f);
        }, [f, p]);
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
                style: T,
                children: [
                    (0, r.jsx)('div', {
                        ref: v,
                        className: o()(u.header, { [u.toggled]: b }),
                        children: t({ onClick: S })
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
