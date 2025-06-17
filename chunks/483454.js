n.d(t, {
    I9: () => v,
    ai: () => I,
    hn: () => A
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(957957),
    o = n(120356),
    s = n.n(o),
    l = n(692547),
    c = n(481060),
    u = n(355467),
    d = n(493773),
    f = n(409813),
    _ = n(622999),
    p = n(288138),
    h = n(528157);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = (e) => ({ enabled: p.Z.getCurrentConfig(e).enabled }),
    I = (e) => {
        let { shouldGenerateSetupIntent: t } = e,
            [n, r] = i.useState(null),
            a = i.useCallback(async () => {
                t && r(await (0, u.R5)());
            }, [t]);
        (0, d.ZP)(() => {
            a();
        });
        let o = (0, c.dQu)(l.Z.colors.MODAL_BACKGROUND),
            s = (0, c.dQu)(l.Z.colors.TEXT_PRIMARY),
            f = (0, c.dQu)(l.Z.colors.INPUT_BACKGROUND);
        return {
            setupIntentSecret: n,
            elementsOptions: i.useMemo(
                () => ({
                    mode: 'setup',
                    currency: 'usd',
                    appearance: {
                        theme: 'flat',
                        variables: {
                            colorText: s.hex(),
                            colorBackground: o.hex()
                        },
                        rules: {
                            '.Input': { backgroundColor: f.hex() },
                            '.Tab': { backgroundColor: f.hex() }
                        }
                    }
                }),
                [o, s, f]
            )
        };
    },
    T = i.memo(function (e) {
        var { enforcePaymentMethodTypes: t, wallets: n = [], options: i } = e,
            o = y(e, ['enforcePaymentMethodTypes', 'wallets', 'options']);
        let s = (0, a.useElements)();
        return (
            (0, d.ZP)(() => {
                null != s && null != t && s.update({ paymentMethodTypes: t });
            }),
            (0, r.jsx)(
                a.PaymentElement,
                g(
                    {
                        id: 'stripe-payment-element',
                        options: g(
                            {
                                layout: { type: 'tabs' },
                                wallets: {
                                    applePay: n.includes('applePay') ? 'auto' : 'never',
                                    googlePay: n.includes('googlePay') ? 'auto' : 'never'
                                },
                                defaultValues: { billingDetails: { name: '' } },
                                fields: {
                                    billingDetails: {
                                        name: 'auto',
                                        address: 'auto'
                                    }
                                }
                            },
                            i
                        )
                    },
                    o
                )
            )
        );
    }),
    S = i.memo(function (e) {
        var { options: t, renderWithoutElement: n } = e,
            i = y(e, ['options', 'renderWithoutElement']);
        let o = (0, r.jsx)(a.AddressElement, g({ options: g({ mode: 'billing' }, t) }, i));
        return n
            ? o
            : (0, r.jsx)(a.Elements, {
                  stripe: (0, _.d2)(),
                  children: o
              });
    }),
    A = (e) => {
        let { step: t, shouldRender: n, shouldRenderPaymentElement: i, stripePaymentElementProps: a, stripeAddressElementProps: o } = e;
        if (!n) return null;
        let l = t === f.h8.CREDIT_CARD_INFORMATION,
            c = t === f.h8.ADDRESS;
        return (0, r.jsxs)('div', {
            className: h.body,
            children: [
                (0, r.jsx)('div', {
                    className: s()(l ? h.visible : h.hidden, { [h.cardElementContainer]: t === f.h8.CREDIT_CARD_INFORMATION }),
                    children: i && (0, r.jsx)(T, g({}, a))
                }),
                (0, r.jsx)('div', {
                    className: s()(h.addressElementContainer, c ? h.visible : h.hidden),
                    children: (0, r.jsx)(S, b(g({}, o), { renderWithoutElement: !0 }))
                })
            ]
        });
    };
