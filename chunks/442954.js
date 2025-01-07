n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(138464),
    c = n(585483),
    d = n(246992),
    u = n(981631),
    h = n(941469),
    m = n(509345);
function x() {
    let e = {
            PremiumSubscriptionAprilMarketingDecoModal: async () => {
                let { default: e } = await n.e('18327').then(n.bind(n, 731433));
                return (t) => (0, r.jsx)(e, { ...t });
            },
            CollectiblesExpiryModal: async () => {
                let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                return (t) => (0, r.jsx)(e, { ...t });
            }
        },
        t = Object.keys(e).map((e) => ({
            label: e,
            value: e
        })),
        [l, x] = a.useState(t[0].value);
    return (0, r.jsx)(o.ScrollerThin, {
        className: i()(h.panel),
        children: (0, r.jsxs)('div', {
            className: m.panelInner,
            children: [
                (0, r.jsxs)('section', {
                    className: m.section,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Open a Modal'
                        }),
                        (0, r.jsxs)('div', {
                            className: m.inputRow,
                            children: [
                                (0, r.jsx)(o.Select, {
                                    className: m.input,
                                    options: t,
                                    isSelected: (e) => l === e,
                                    placeholder: 'Trial ID',
                                    serialize: (e) => String(e),
                                    select: (e) => x(e),
                                    popoutLayerContext: d.O$
                                }),
                                (0, r.jsx)(o.Button, {
                                    onClick: () => {
                                        (0, o.openModalLazy)(e[l]);
                                    },
                                    children: 'Open'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('section', {
                    className: m.section,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: 'heading-md/semibold',
                            children: 'Wow moment'
                        }),
                        (0, r.jsx)('div', {
                            className: m.inputRow,
                            children: (0, r.jsx)(o.Button, {
                                onClick: () => {
                                    (0, s.H)(!0), c.S.dispatch(u.CkL.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                                children: 'Open'
                            })
                        })
                    ]
                })
            ]
        })
    });
}
