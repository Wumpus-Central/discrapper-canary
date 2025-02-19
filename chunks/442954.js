n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(138464),
    c = n(585483),
    d = n(246992),
    u = n(981631),
    h = n(841699),
    m = n(833154);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p() {
    let e = {
            PremiumSubscriptionAprilMarketingDecoModal: async () => {
                let { default: e } = await n.e('18327').then(n.bind(n, 731433));
                return (t) => (0, r.jsx)(e, x({}, t));
            },
            CollectiblesExpiryModal: async () => {
                let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                return (t) => (0, r.jsx)(e, x({}, t));
            }
        },
        t = Object.keys(e).map((e) => ({
            label: e,
            value: e
        })),
        [i, p] = a.useState(t[0].value);
    return (0, r.jsx)(o.zJl, {
        className: l()(h.panel),
        children: (0, r.jsxs)('div', {
            className: m.panelInner,
            children: [
                (0, r.jsxs)('section', {
                    className: m.section,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Open a Modal'
                        }),
                        (0, r.jsxs)('div', {
                            className: m.inputRow,
                            children: [
                                (0, r.jsx)(o.PhF, {
                                    className: m.input,
                                    options: t,
                                    isSelected: (e) => i === e,
                                    placeholder: 'Trial ID',
                                    serialize: (e) => String(e),
                                    select: (e) => p(e),
                                    popoutLayerContext: d.O$
                                }),
                                (0, r.jsx)(o.zxk, {
                                    onClick: () => {
                                        (0, o.ZDy)(e[i]);
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
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Wow moment'
                        }),
                        (0, r.jsx)('div', {
                            className: m.inputRow,
                            children: (0, r.jsx)(o.zxk, {
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
