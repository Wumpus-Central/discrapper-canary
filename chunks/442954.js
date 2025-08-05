(a.d(t, { Z: () => p }), a(642613), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(481060),
    i = a(138464),
    s = a(585483),
    o = a(246992),
    c = a(981631),
    d = a(546147),
    u = a(616257);
let m = {
    CollectiblesExpiryModal: async () => {
        let { default: e } = await a.e('77370').then(a.bind(a, 83950));
        return (t) =>
            (0, n.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(a);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(a).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                ((n = a[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n));
                            }));
                    }
                    return e;
                })({}, t)
            );
    }
};
function p() {
    let e = r.useMemo(
            () =>
                Object.keys(m)
                    .map((e) => ({
                        label: e,
                        value: e
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            []
        ),
        [t, a] = r.useState(e[0].value);
    return (0, n.jsx)(l.zJl, {
        className: u.panel,
        children: (0, n.jsxs)('div', {
            className: d.panelInner,
            children: [
                (0, n.jsxs)('section', {
                    className: d.section,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Open a Modal'
                        }),
                        (0, n.jsxs)('div', {
                            className: d.inputRow,
                            children: [
                                (0, n.jsx)(l.PhF, {
                                    className: d.input,
                                    options: e,
                                    isSelected: (e) => t === e,
                                    serialize: (e) => e,
                                    select: (e) => a(e),
                                    popoutLayerContext: o.O$
                                }),
                                (0, n.jsx)(l.zxk, {
                                    variant: 'primary',
                                    text: 'Open',
                                    onClick: () => (0, l.ZDy)(m[t])
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsxs)('section', {
                    className: d.section,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Wow moment'
                        }),
                        (0, n.jsx)('div', {
                            className: d.inputRow,
                            children: (0, n.jsx)(l.zxk, {
                                variant: 'primary',
                                text: 'Open',
                                onClick: () => {
                                    ((0, i.H)(!0), s.S.dispatch(c.CkL.PREMIUM_SUBSCRIPTION_CREATED));
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
