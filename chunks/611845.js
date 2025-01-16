n.d(t, {
    $: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(170671),
    o = n(738672),
    c = n(388032),
    d = n(31497),
    u = n(946790);
function h(e) {
    let { hidden: t, onDismiss: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(d.demoCta, { [d.hidden]: t }),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)('div', {
                        className: d.wumpusContainer,
                        children: (0, i.jsx)(a.Image, {
                            src: u,
                            width: 72,
                            height: 52,
                            zoomable: !1
                        })
                    }),
                    (0, i.jsx)(a.Button, {
                        'aria-label': c.intl.string(c.t.cpT0Cg),
                        look: a.Button.Looks.BLANK,
                        size: a.Button.Sizes.NONE,
                        onClick: () => n(),
                        className: d.closeButton,
                        children: (0, i.jsx)(a.XSmallIcon, {
                            size: 'md',
                            className: d.closeIcon,
                            color: 'white'
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: d.textContainer,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/semibold',
                    color: 'always-white',
                    children: c.intl.string(c.t.TguaU1)
                })
            }),
            (0, i.jsxs)('div', {
                className: d.nitroTextAndBadge,
                children: [
                    (0, i.jsx)(s.Z, { isSelected: !0 }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'always-white',
                        children: c.intl.string(c.t['BMw+7O'])
                    })
                ]
            })
        ]
    });
}
function p(e) {
    return (0, i.jsx)(o.h, {
        ...e,
        renderComponent: (e) => (0, i.jsx)(h, { ...e })
    });
}
