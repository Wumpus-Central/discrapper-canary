r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(607070),
    d = r(721148);
function f(e) {
    let { children: n, heading: r, subheading: o, className: f, scrollIntoView: p = !1, headingColor: h = 'header-secondary' } = e,
        _ = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        m = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = m.current;
            if (null == e) return;
            let n = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: _ ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(n);
        }, [_]),
        (0, i.jsxs)('section', {
            ref: p ? m : void 0,
            className: s()(d.section, f),
            children: [
                null != r &&
                    (0, i.jsxs)('div', {
                        className: d.headings,
                        children: [
                            (0, i.jsx)(u.Heading, {
                                variant: 'text-xs/semibold',
                                color: h,
                                children: r
                            }),
                            null != o &&
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    children: o
                                })
                        ]
                    }),
                n
            ]
        })
    );
}
