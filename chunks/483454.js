n.d(t, { h: () => S });
var r = n(255367),
    i = n(73800),
    a = n(245364),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(409813),
    u = n(622999),
    d = n(878836),
    f = n(561448),
    _ = n(231338),
    p = n(528157);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let O = [c.h8.PAYMENT_ELEMENT],
    v = i.memo(function (e) {
        var { wallets: t = [], options: n, originalPaymentType: o } = e,
            s = b(e, ['wallets', 'options', 'originalPaymentType']);
        let l = i.useMemo(() => {
            if (null == o || !(0, f.qH)(o)) return;
            let e = (0, u.rI)();
            return (0, f.Ko)(o) ? [(0, f.ZK)(o, e)] : [f.zK[o]];
        }, [o]);
        return (0, r.jsx)(
            a.PaymentElement,
            m(
                {
                    id: 'stripe-payment-element',
                    options: m(
                        E(m({}, null != l && { paymentMethodOrder: l }), {
                            layout: { type: 'tabs' },
                            wallets: {
                                applePay: t.includes('applePay') ? 'auto' : 'never',
                                googlePay: t.includes('googlePay') ? 'auto' : 'never'
                            }
                        }),
                        n
                    )
                },
                s
            )
        );
    }),
    I = i.memo(function (e) {
        var { options: t, renderWithoutElement: n } = e,
            i = b(e, ['options', 'renderWithoutElement']);
        let o = (0, r.jsx)(a.AddressElement, m({ options: m({ mode: 'billing' }, t) }, i));
        return n
            ? o
            : (0, r.jsx)(a.Elements, {
                  stripe: (0, u.d2)(),
                  children: o
              });
    }),
    T = (e) => {
        let { step: t, stripePaymentElementProps: n, stripeAddressElementProps: o, elementsRef: l, originalPaymentType: u, paymentElementSelectedType: d } = e,
            f = (0, a.useElements)();
        i.useEffect(() => {
            l.current = f;
        }, [f, l]);
        let h = O.includes(t) && null != d,
            g = t === c.h8.ADDRESS;
        return (0, r.jsxs)('div', {
            className: p.body,
            children: [
                (0, r.jsx)('div', {
                    className: s()(h ? p.visible : p.hidden, {
                        [p.cardElementContainer]: d === _.He.CARD,
                        [p.customPaymentElementContainer]: d === _.He.PAYPAL
                    }),
                    children: (0, r.jsx)(v, E(m({}, n), { originalPaymentType: u }))
                }),
                (0, r.jsx)('div', {
                    className: s()(p.addressElementContainer, g ? p.visible : p.hidden),
                    children: (0, r.jsx)(I, E(m({}, o), { renderWithoutElement: !0 }))
                })
            ]
        });
    },
    S = (e) => {
        var { onSetupError: t } = e,
            n = b(e, ['onSetupError']);
        let { elementsOptions: i, isLoading: o, setupError: s } = (0, d.S)({ onSetupError: t });
        return o || null != s
            ? (0, r.jsx)('div', {
                  className: p.loadingContainer,
                  children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE_SIMPLE })
              })
            : (0, r.jsxs)(a.Elements, {
                  stripe: (0, u.d2)(),
                  options: m({}, i),
                  children: [(0, r.jsx)(T, m({}, n)), ';']
              });
    };
