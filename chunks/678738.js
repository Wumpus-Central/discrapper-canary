n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(729894);
function d(e) {
    let { children: t, heading: n, headingIcon: o, subheading: d, className: f, scrollIntoView: _ = !1, headingClassName: p, headingVariant: h = 'text-xs/semibold', headingColor: m = 'header-secondary' } = e,
        g = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        E = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = E.current;
            if (null == e) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: g ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(t);
        }, [g]),
        (0, r.jsxs)('section', {
            ref: _ ? E : void 0,
            className: a()(u.section, f),
            children: [
                null != n &&
                    (0, r.jsxs)('div', {
                        className: u.headings,
                        children: [
                            (0, r.jsxs)('div', {
                                className: u.header,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: h,
                                        color: m,
                                        className: p,
                                        children: n
                                    }),
                                    null != o &&
                                        (0, r.jsx)(o, {
                                            size: 'xxs',
                                            color: m
                                        })
                                ]
                            }),
                            null != d &&
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: d
                                })
                        ]
                    }),
                t
            ]
        })
    );
}
