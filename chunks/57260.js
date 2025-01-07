r.d(n, {
    z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(481060),
    d = r(393238),
    f = r(492611);
let _ = 100;
function h(e) {
    let { children: n, className: r, collapsibleContent: i, isExpanded: o } = e,
        [h, p] = s.useState(!1),
        [m, g] = s.useState(!0),
        [E, v] = s.useState(!1),
        I = null != o ? o : h,
        { ref: T, height: b = 0 } = (0, d.Z)(),
        { ref: y, height: S = 0 } = (0, d.Z)(),
        A = (0, c.useSpring)(
            {
                height: I ? b + S : S,
                config: u.config.stiff,
                onRest: () => v(!0)
            },
            m ? 'animate-never' : 'respect-motion-settings'
        ),
        N = s.useCallback(() => {
            p(!h);
        }, [h, p]);
    return (
        s.useLayoutEffect(() => {
            let e = setTimeout(() => {
                g(!1);
            }, _);
            return () => clearTimeout(e);
        }, []),
        (0, a.jsx)('div', {
            className: l()(f.collapseable, { [f.toggled]: I }, r),
            children: (0, a.jsxs)(u.animated.div, {
                className: l()(f.contentExpandContainer, { [f.showOverflow]: I && E }),
                style: A,
                children: [
                    (0, a.jsx)('div', {
                        ref: y,
                        className: l()(f.header, { [f.toggled]: I }),
                        children: n({ onClick: N })
                    }),
                    (0, a.jsx)('div', {
                        ref: T,
                        children: i
                    })
                ]
            })
        })
    );
}
