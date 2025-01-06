n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(449226),
    a = n(231338),
    s = n(388032),
    o = n(232203);
function c(e) {
    let { title: t, details: n } = e;
    return (0, i.jsxs)('div', {
        className: o.simpleItemWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: o.itemContent,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    'string' == typeof n
                        ? (0, i.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: n
                          })
                        : n
                ]
            }),
            (0, i.jsx)(r.Tooltip, {
                tooltipContentClassName: o.tooltip,
                text: s.intl.string(s.t.NQ4nCg),
                children: (e) =>
                    (0, i.jsx)(l.Z, {
                        checked: !0,
                        disabled: !0,
                        onChange: a.dG,
                        className: o.bringToFront,
                        tooltipProps: e
                    })
            })
        ]
    });
}
