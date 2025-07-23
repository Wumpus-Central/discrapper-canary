n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(313201),
    d = n(729894);
function _(e) {
    let { children: t, heading: n, headingIcon: a, introText: _, className: f, scrollIntoView: p = !1, headingClassName: h, headingVariant: m = 'text-xs/semibold', headingColor: g = 'header-secondary' } = e,
        E = (0, u.Dt)(),
        b = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        y = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = y.current;
            if (null == e) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: b ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(t);
        }, [b]),
        (0, r.jsxs)('section', {
            ref: p ? y : void 0,
            className: o()(d.section, f),
            'aria-labelledby': null != n ? E : void 0,
            children: [
                null != n &&
                    (0, r.jsxs)('div', {
                        className: d.headings,
                        children: [
                            (0, r.jsxs)('div', {
                                className: d.header,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: m,
                                        color: g,
                                        className: h,
                                        id: E,
                                        children: n
                                    }),
                                    a
                                ]
                            }),
                            null != _ &&
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: _
                                })
                        ]
                    }),
                (0, r.jsx)(l.y5t, { children: t })
            ]
        })
    );
}
