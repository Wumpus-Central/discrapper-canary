n.d(t, { h: () => T });
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
    _ = n(528157);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = [c.h8.PAYMENT_ELEMENT],
    O = i.memo(function (e) {
        var { wallets: t = [], options: n, originalPaymentType: o } = e,
            s = E(e, ['wallets', 'options', 'originalPaymentType']);
        let l = i.useMemo(() => {
            if (null == o || !(0, f.Qe)(o)) return;
            let e = (0, u.rI)();
            return (0, f.Ko)(o) ? [(0, f.ZK)(o, e)] : [f.zK[o]];
        }, [o]);
        return (0, r.jsx)(
            a.PaymentElement,
            h(
                {
                    id: 'stripe-payment-element',
                    options: h(
                        g(h({}, null != l && { paymentMethodOrder: l }), {
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
    v = i.memo(function (e) {
        var { options: t, renderWithoutElement: n } = e,
            i = E(e, ['options', 'renderWithoutElement']);
        let o = (0, r.jsx)(a.AddressElement, h({ options: h({ mode: 'billing' }, t) }, i));
        return n
            ? o
            : (0, r.jsx)(a.Elements, {
                  stripe: (0, u.d2)(),
                  children: o
              });
    }),
    I = (e) => {
        let { step: t, stripePaymentElementProps: n, stripeAddressElementProps: o, elementsRef: l, originalPaymentType: u, paymentElementSelectedType: d } = e,
            f = (0, a.useElements)();
        i.useEffect(() => {
            l.current = f;
        }, [f, l]);
        let p = y.includes(t),
            m = t === c.h8.ADDRESS;
        return (0, r.jsxs)('div', {
            className: _.body,
            children: [
                null != d &&
                    (0, r.jsx)('div', {
                        className: s()(p ? _.visible : _.hidden, { [_.cardElementContainer]: t === c.h8.CREDIT_CARD_INFORMATION }),
                        children: (0, r.jsx)(O, g(h({}, n), { originalPaymentType: u }))
                    }),
                (0, r.jsx)('div', {
                    className: s()(_.addressElementContainer, m ? _.visible : _.hidden),
                    children: (0, r.jsx)(v, g(h({}, o), { renderWithoutElement: !0 }))
                })
            ]
        });
    },
    T = (e) => {
        let { elementsOptions: t, isLoading: n } = (0, d.S)({ shouldGenerateSetupIntent: !0 });
        return n
            ? (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
            : (0, r.jsxs)(a.Elements, {
                  stripe: (0, u.d2)(),
                  options: h({}, t),
                  children: [(0, r.jsx)(I, h({}, e)), ';']
              });
    };
