n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(618158),
    s = n(110514);
function c(e) {
    let { errorMessage: t, className: n, errorDetailMessage: i } = e,
        c = '';
    return (
        null != t && null != i ? (c = ''.concat(t, ' ').concat(i)) : null != t && (c = t),
        (0, r.jsx)(o.DY3, {
            className: l()(n, s.root),
            text: (0, r.jsxs)('div', {
                children: [
                    t,
                    null != i &&
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            color: 'text-muted',
                            style: { marginTop: '10px' },
                            children: i
                        })
                ]
            }),
            position: 'bottom',
            color: o.FGA.GREY,
            'aria-label': c,
            children: (0, r.jsx)(a.Z, {
                children: (0, r.jsx)(o.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    'aria-label': c,
                    className: s.warningIcon
                })
            })
        })
    );
}
