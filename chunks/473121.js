n.d(t, { Z: () => c });
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    d = n(209223);
let c = (e) => {
    let {
            node: { header: t, subheader: n, button: c }
        } = e,
        u = (null == c ? void 0 : c.type) === 'submit',
        m = i.useRef(
            a.Z.reactParserFor({
                ...a.Z.defaultRules,
                link: s.s
            })
        );
    return (0, l.jsxs)('div', {
        className: d.headerContainer,
        children: [
            null != t && '' !== t
                ? (0, l.jsx)(r.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      children: t
                  })
                : null,
            null != n && '' !== t
                ? (0, l.jsx)(r.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: m.current(n)
                  })
                : null,
            u &&
                (0, l.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    children: o.intl.format(o.t.Q0tSKS, {})
                })
        ]
    });
};
