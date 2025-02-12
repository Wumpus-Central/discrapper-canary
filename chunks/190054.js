n.d(t, { H: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    c = n(572004),
    a = n(388032),
    d = n(967602);
function u(e) {
    let { chunks: t, className: n, onCopy: l, ...u } = e,
        h = r.useMemo(() => (null == t ? void 0 : t.join(' ')), [t]),
        [x, m] = r.useState(!1),
        f = r.useCallback(() => {
            m(!0), (0, c.JG)(h), null == l || l();
        }, [l, h]),
        _ = x ? o.owK : o.TIy;
    return (0, i.jsx)(o.P3F, {
        className: s()(d.container, n),
        onClick: f,
        children: (0, i.jsx)(o.ua7, {
            text: x ? a.intl.string(a.t['t5VZ8/']) : a.intl.string(a.t.OpuAlJ),
            children: (e) =>
                (0, i.jsx)(_, {
                    ...u,
                    ...e,
                    size: 'xxs',
                    color: x ? o.TVs.colors.TEXT_POSITIVE : o.TVs.colors.INTERACTIVE_NORMAL
                })
        })
    });
}
