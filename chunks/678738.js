n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(721232);
function d(e) {
    let { children: t, heading: n, headingIcon: a, subheading: d, className: f, scrollIntoView: _ = !1, headingColor: p = 'header-secondary' } = e,
        h = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        m = r.useRef(null);
    return (
        r.useEffect(() => {
            let e = m.current;
            if (null == e) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: h ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(t);
        }, [h]),
        (0, i.jsxs)('section', {
            ref: _ ? m : void 0,
            className: s()(c.section, f),
            children: [
                null != n &&
                    (0, i.jsxs)('div', {
                        className: c.headings,
                        children: [
                            (0, i.jsxs)('div', {
                                className: c.header,
                                children: [
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'text-xs/semibold',
                                        color: p,
                                        children: n
                                    }),
                                    null != a &&
                                        (0, i.jsx)(a, {
                                            size: 'xxs',
                                            color: l.TVs.colors.HEADER_SECONDARY
                                        })
                                ]
                            }),
                            null != d &&
                                (0, i.jsx)(l.Text, {
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
