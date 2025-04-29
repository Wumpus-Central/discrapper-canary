n.d(t, { Z: () => h }), n(642613), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(481060),
    i = n(138464),
    s = n(585483),
    o = n(246992),
    c = n(981631),
    d = n(616257),
    u = n(173166);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let x = {
    PremiumSubscriptionAprilMarketingDecoModal: async () => {
        let { default: e } = await n.e('18327').then(n.bind(n, 731433));
        return (t) => (0, a.jsx)(e, m({}, t));
    },
    PremiumSubscriptionMarketingErrorModal: async () => {
        let { default: e } = await n.e('76025').then(n.bind(n, 393185));
        return (t) => (0, a.jsx)(e, m({}, t));
    },
    CollectiblesExpiryModal: async () => {
        let { default: e } = await n.e('77370').then(n.bind(n, 83950));
        return (t) => (0, a.jsx)(e, m({}, t));
    },
    SelectionModal: async () => {
        let { default: e } = await n.e('74824').then(n.bind(n, 817357));
        return (t) => (0, a.jsx)(e, m({}, t));
    }
};
function h() {
    let e = r.useMemo(
            () =>
                Object.keys(x)
                    .map((e) => ({
                        label: e,
                        value: e
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            []
        ),
        [t, n] = r.useState(e[0].value);
    return (0, a.jsx)(l.zJl, {
        className: d.panel,
        children: (0, a.jsxs)('div', {
            className: u.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: u.section,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Open a Modal'
                        }),
                        (0, a.jsxs)('div', {
                            className: u.inputRow,
                            children: [
                                (0, a.jsx)(l.PhF, {
                                    className: u.input,
                                    options: e,
                                    isSelected: (e) => t === e,
                                    serialize: (e) => e,
                                    select: (e) => n(e),
                                    popoutLayerContext: o.O$
                                }),
                                (0, a.jsx)(l.zxk, {
                                    onClick: () => (0, l.ZDy)(x[t]),
                                    children: 'Open'
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: u.section,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Wow moment'
                        }),
                        (0, a.jsx)('div', {
                            className: u.inputRow,
                            children: (0, a.jsx)(l.zxk, {
                                onClick: () => {
                                    (0, i.H)(!0), s.S.dispatch(c.CkL.PREMIUM_SUBSCRIPTION_CREATED);
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
