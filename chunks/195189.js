n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(449226),
    l = n(231338),
    a = n(388032),
    o = n(296205);
function c(e) {
    let { title: t, details: n } = e;
    return (0, r.jsxs)('div', {
        className: o.simpleItemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: o.itemContent,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    'string' == typeof n
                        ? (0, r.jsx)(i.Text, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: n
                          })
                        : n
                ]
            }),
            (0, r.jsx)(i.ua7, {
                tooltipContentClassName: o.tooltip,
                text: a.NW.string(a.t.NQ4nCg),
                children: (e) =>
                    (0, r.jsx)(s.Z, {
                        checked: !0,
                        disabled: !0,
                        onChange: l.dG,
                        className: o.bringToFront,
                        tooltipProps: e
                    })
            })
        ]
    });
}
