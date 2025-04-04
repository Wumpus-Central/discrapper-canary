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
    let { children: t, heading: n, headingIcon: o, subheading: d, className: f, scrollIntoView: _ = !1, headingColor: p = 'header-secondary' } = e,
        h = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        m = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = m.current;
            if (null == e) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: h ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(t);
        }, [h]),
        (0, r.jsxs)('section', {
            ref: _ ? m : void 0,
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
                                        variant: 'text-xs/semibold',
                                        color: p,
                                        children: n
                                    }),
                                    null != o &&
                                        (0, r.jsx)(o, {
                                            size: 'xxs',
                                            color: l.TVs.colors.HEADER_SECONDARY
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
