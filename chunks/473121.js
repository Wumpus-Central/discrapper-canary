n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(454585),
    o = n(273744),
    l = n(388032),
    u = n(494045);
let c = (e) => {
    let {
            node: { header: t, subheader: n, button: c }
        } = e,
        d = (null == c ? void 0 : c.type) === 'submit',
        f = r.useRef(
            s.Z.reactParserFor({
                ...s.Z.defaultRules,
                link: o.s
            })
        );
    return (0, i.jsxs)('div', {
        className: u.headerContainer,
        children: [
            null != t && '' !== t
                ? (0, i.jsx)(a.X6q, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      children: t
                  })
                : null,
            null != n && '' !== t
                ? (0, i.jsx)(a.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: f.current(n)
                  })
                : null,
            d &&
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    children: l.intl.format(l.t.Q0tSKS, {})
                })
        ]
    });
};
