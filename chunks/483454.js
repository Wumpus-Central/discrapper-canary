n.d(t, {
    I9: () => T,
    Og: () => A,
    hR: () => w,
    hn: () => x
}),
    n(388685),
    n(35282);
var r = n(255367),
    i = n(73800),
    a = n(245364),
    o = n(120356),
    s = n.n(o),
    l = n(692547),
    c = n(481060),
    u = n(355467),
    d = n(493773),
    f = n(409813),
    _ = n(622999),
    p = n(288138),
    h = n(231338),
    m = n(388032),
    g = n(528157);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let T = (e) => ({ enabled: p.Z.getCurrentConfig(e).enabled }),
    S = (e) => {
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
    A = new Set([h.He.CARD, h.He.PAYPAL]),
    N = [f.h8.PAYMENT_ELEMENT],
    C = {
        [h.He.PAYPAL]: {
            live: 'cpmt_1RbPZnCR4aIufmH2qyrDhNFa',
            test: 'cpmt_1RRMZZCR4aIufmH2ZzcE5aS4'
        }
    },
    R = {
        [h.He.PAYPAL]: {
            getStripeId: (e) => ('live' === e ? C[h.He.PAYPAL].live : C[h.He.PAYPAL].test),
            subtitleTranslationKey: m.t.Djzd7O
        }
    },
    P = () => {
        let e = (0, _.rI)();
        return Object.values(R).map((t) => {
            let { getStripeId: n, subtitleTranslationKey: r } = t;
            return {
                id: n(e),
                options: {
                    type: 'static',
                    subtitle: m.intl.string(r)
                }
            };
        });
    },
    w = (e) => {
        let t = (0, _.rI)();
        return e === R[h.He.PAYPAL].getStripeId(t) ? h.He.PAYPAL : 'card' === e ? h.He.CARD : null;
    },
    D = i.memo(function (e) {
        var { paymentMethodTypes: t, customPaymentMethods: n, wallets: o = [], options: s, originalPaymentType: l } = e,
            c = v(e, ['paymentMethodTypes', 'customPaymentMethods', 'wallets', 'options', 'originalPaymentType']);
        let u = (0, a.useElements)(),
            d = i.useRef(!1);
        i.useEffect(() => {
            if (null != u && !d.current) {
                let e = b({ customPaymentMethods: null != n ? n : P() }, null != t && { paymentMethodTypes: t });
                u.update(e), (d.current = !0);
            }
        }, [u, n, t]);
        let f = i.useMemo(() => {
            let e = (0, _.rI)();
            return null != l && l in R ? [R[l].getStripeId(e)] : l === h.He.CARD ? ['card'] : void 0;
        }, [l]);
        return (0, r.jsx)(
            a.PaymentElement,
            b(
                {
                    id: 'stripe-payment-element',
                    options: b(
                        O(b({}, null != f && { paymentMethodOrder: f }), {
                            layout: { type: 'tabs' },
                            wallets: {
                                applePay: o.includes('applePay') ? 'auto' : 'never',
                                googlePay: o.includes('googlePay') ? 'auto' : 'never'
                            }
                        }),
                        s
                    )
                },
                c
            )
        );
    }),
    L = i.memo(function (e) {
        var { options: t, renderWithoutElement: n } = e,
            i = v(e, ['options', 'renderWithoutElement']);
        let o = (0, r.jsx)(a.AddressElement, b({ options: b({ mode: 'billing' }, t) }, i));
        return n
            ? o
            : (0, r.jsx)(a.Elements, {
                  stripe: (0, _.d2)(),
                  children: o
              });
    }),
    x = (e) => {
        let { elementsOptions: t } = S({ shouldGenerateSetupIntent: !1 });
        return (0, r.jsxs)(a.Elements, {
            stripe: (0, _.d2)(),
            options: t,
            children: [(0, r.jsx)(k, b({}, e)), ';']
        });
    },
    k = (e) => {
        let { step: t, stripePaymentElementProps: n, stripeAddressElementProps: o, elementsRef: l, originalPaymentType: c, paymentElementSelectedType: u } = e,
            d = (0, a.useElements)();
        i.useEffect(() => {
            l.current = d;
        }, [d, l]);
        let _ = N.includes(t),
            p = t === f.h8.ADDRESS;
        return (0, r.jsxs)('div', {
            className: g.body,
            children: [
                null != u &&
                    (0, r.jsx)('div', {
                        className: s()(_ ? g.visible : g.hidden, { [g.cardElementContainer]: t === f.h8.CREDIT_CARD_INFORMATION }),
                        children: (0, r.jsx)(D, O(b({}, n), { originalPaymentType: c }))
                    }),
                (0, r.jsx)('div', {
                    className: s()(g.addressElementContainer, p ? g.visible : g.hidden),
                    children: (0, r.jsx)(L, O(b({}, o), { renderWithoutElement: !0 }))
                })
            ]
        });
    };
