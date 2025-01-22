r.d(n, {
    z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(481060),
    d = r(393238),
    f = r(492611);
let p = 100;
function h(e) {
    let { children: n, className: r, collapsibleContent: i, isExpanded: s } = e,
        [h, _] = o.useState(!1),
        [m, g] = o.useState(!0),
        [E, v] = o.useState(!1),
        y = null != s ? s : h,
        { ref: b, height: I = 0 } = (0, d.Z)(),
        { ref: T, height: S = 0 } = (0, d.Z)(),
        A = (0, c.useSpring)(
            {
                height: y ? I + S : S,
                config: u.config.stiff,
                onRest: () => v(!0)
            },
            m ? 'animate-never' : 'respect-motion-settings'
        ),
        C = o.useCallback(() => {
            _(!h);
        }, [h, _]);
    return (
        o.useLayoutEffect(() => {
            let e = setTimeout(() => {
                g(!1);
            }, p);
            return () => clearTimeout(e);
        }, []),
        (0, a.jsx)('div', {
            className: l()(f.collapseable, { [f.toggled]: y }, r),
            children: (0, a.jsxs)(u.animated.div, {
                className: l()(f.contentExpandContainer, { [f.showOverflow]: y && E }),
                style: A,
                children: [
                    (0, a.jsx)('div', {
                        ref: T,
                        className: l()(f.header, { [f.toggled]: y }),
                        children: n({ onClick: C })
                    }),
                    (0, a.jsx)('div', {
                        ref: b,
                        children: i
                    })
                ]
            })
        })
    );
}
