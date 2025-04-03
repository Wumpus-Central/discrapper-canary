n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(618158),
    s = n(975985);
function u(e) {
    let { errorMessage: t, className: n, errorDetailMessage: l } = e,
        u = '';
    return (
        null != t && null != l ? (u = ''.concat(t, ' ').concat(l)) : null != t && (u = t),
        (0, r.jsx)(a.DY3, {
            className: i()(n, s.root),
            text: (0, r.jsxs)('div', {
                children: [
                    t,
                    null != l &&
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            color: 'text-muted',
                            style: { marginTop: '10px' },
                            children: l
                        })
                ]
            }),
            position: 'bottom',
            color: a.FGA.GREY,
            'aria-label': u,
            children: (0, r.jsx)(o.Z, {
                children: (0, r.jsx)(a.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    'aria-label': u,
                    className: s.warningIcon
                })
            })
        })
    );
}
