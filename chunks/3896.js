n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(456935),
    c = n(259580),
    d = n(981631),
    u = n(388032),
    m = n(232203);
function h(e) {
    let { guild: t } = e,
        l = t.verificationLevel,
        h = r.useMemo(() => (0, o.I9)(l), [l]);
    return (0, i.jsxs)(a.Clickable, {
        onClick: () =>
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e('27933').then(n.bind(n, 694278));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        hideColors: !0
                    });
            }),
        className: s()(m.simpleItemWrapper, m.clickable),
        children: [
            (0, i.jsxs)('div', {
                className: m.itemContent,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: u.intl.string(u.t.DpRdYG)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: u.intl.string(u.t.mA17eH)
                    }),
                    (0, i.jsx)('div', {
                        className: m.__invalid_pillRow,
                        children: (0, i.jsxs)(a.Text, {
                            variant: 'text-xs/medium',
                            color: 'interactive-normal',
                            className: m.valuePill,
                            children: [
                                l === d.sFg.VERY_HIGH
                                    ? (0, i.jsx)(a.MobilePhoneIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 16,
                                          height: 16
                                      })
                                    : (0, i.jsx)(a.EnvelopeIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 16,
                                          height: 16
                                      }),
                                h
                            ]
                        })
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                height: 24,
                width: 24,
                direction: c.Z.Directions.RIGHT,
                className: m.caret
            })
        ]
    });
}
