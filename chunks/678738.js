n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(721148);
function d(e) {
    let { children: t, heading: n, subheading: a, className: d, scrollIntoView: f = !1, headingColor: _ = 'header-secondary' } = e,
        p = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        h = r.useRef(null);
    return (
        r.useEffect(() => {
            let e = h.current;
            if (null == e) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: p ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(t);
        }, [p]),
        (0, i.jsxs)('section', {
            ref: f ? h : void 0,
            className: s()(c.section, d),
            children: [
                null != n &&
                    (0, i.jsxs)('div', {
                        className: c.headings,
                        children: [
                            (0, i.jsx)(l.X6q, {
                                variant: 'text-xs/semibold',
                                color: _,
                                children: n
                            }),
                            null != a &&
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: a
                                })
                        ]
                    }),
                t
            ]
        })
    );
}
