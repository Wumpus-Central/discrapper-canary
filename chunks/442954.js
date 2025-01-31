n.d(t, { Z: () => x }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(481060),
    s = n(138464),
    c = n(585483),
    d = n(246992),
    u = n(981631),
    m = n(941469),
    h = n(509345);
function x() {
    let e = {
            PremiumSubscriptionAprilMarketingDecoModal: async () => {
                let { default: e } = await n.e('18327').then(n.bind(n, 731433));
                return (t) => (0, a.jsx)(e, { ...t });
            },
            CollectiblesExpiryModal: async () => {
                let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                return (t) => (0, a.jsx)(e, { ...t });
            }
        },
        t = Object.keys(e).map((e) => ({
            label: e,
            value: e
        })),
        [r, x] = l.useState(t[0].value);
    return (0, a.jsx)(o.zJl, {
        className: i()(m.panel),
        children: (0, a.jsxs)('div', {
            className: h.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: h.section,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Open a Modal'
                        }),
                        (0, a.jsxs)('div', {
                            className: h.inputRow,
                            children: [
                                (0, a.jsx)(o.PhF, {
                                    className: h.input,
                                    options: t,
                                    isSelected: (e) => r === e,
                                    placeholder: 'Trial ID',
                                    serialize: (e) => String(e),
                                    select: (e) => x(e),
                                    popoutLayerContext: d.O$
                                }),
                                (0, a.jsx)(o.zxk, {
                                    onClick: () => {
                                        (0, o.ZDy)(e[r]);
                                    },
                                    children: 'Open'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: h.section,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Wow moment'
                        }),
                        (0, a.jsx)('div', {
                            className: h.inputRow,
                            children: (0, a.jsx)(o.zxk, {
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
