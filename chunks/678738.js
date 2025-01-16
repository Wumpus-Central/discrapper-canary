r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(607070),
    d = r(721148);
function f(e) {
    let { children: n, heading: r, subheading: s, className: f, scrollIntoView: _ = !1, headingColor: h = 'header-secondary' } = e,
        p = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        m = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = m.current;
            if (null == e) return;
            let n = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: p ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(n);
        }, [p]),
        (0, i.jsxs)('section', {
            ref: _ ? m : void 0,
            className: o()(d.section, f),
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
                            null != s &&
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    children: s
                                })
                        ]
                    }),
                n
            ]
        })
    );
}
