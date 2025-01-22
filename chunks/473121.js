var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(454585),
    l = r(273744),
    u = r(388032),
    c = r(494045);
let d = (e) => {
    let {
            node: { header: n, subheader: r, button: d }
        } = e,
        f = (null == d ? void 0 : d.type) === 'submit',
        p = a.useRef(
            s.Z.reactParserFor({
                ...s.Z.defaultRules,
                link: l.s
            })
        );
    return (0, i.jsxs)('div', {
        className: c.headerContainer,
        children: [
            null != n && '' !== n
                ? (0, i.jsx)(o.Heading, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      children: n
                  })
                : null,
            null != r && '' !== n
                ? (0, i.jsx)(o.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: p.current(r)
                  })
                : null,
            f &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: u.intl.format(u.t.Q0tSKS, {})
                })
        ]
    });
};
n.Z = d;
