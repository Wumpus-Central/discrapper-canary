n.d(t, { h: () => N });
var r = n(255367),
    i = n(73800),
    a = n(245364),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(409813),
    u = n(626135),
    d = n(622999),
    f = n(878836),
    _ = n(561448),
    p = n(981631),
    h = n(231338),
    m = n(528157);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            }));
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let I = [c.h8.PAYMENT_ELEMENT],
    T = i.memo(function (e) {
        var { originalPaymentType: t, wallets: n = [], analyticsContext: o, options: s, onChange: l } = e,
            c = O(e, ['originalPaymentType', 'wallets', 'analyticsContext', 'options', 'onChange']);
        let f = i.useMemo(() => {
                if (null == t || !(0, _.qH)(t)) return;
                let e = (0, d.rI)();
                return (0, _.Ko)(t) ? [(0, _.ZK)(t, e)] : [_.zK[t]];
            }, [t]),
            h = i.useCallback(
                (e) => {
                    if ((null != l && l(e), null != o)) {
                        let { contextMetadata: t, activitySessionId: n, analyticsData: r } = o,
                            i = (0, _.hR)(e.value.type),
                            a = null != i ? _.Ho[i] : e.value.type;
                        u.default.track(p.rMx.PAYMENT_ELEMENT_CHANGED, {
                            load_id: t.loadId,
                            activity_session_id: n,
                            location: r.location,
                            payment_element_selected_method: a,
                            payment_source_type: i,
                            complete: e.complete,
                            empty: e.empty
                        });
                    }
                },
                [l, o]
            );
        return (0, r.jsx)(
            a.PaymentElement,
            E(
                {
                    id: 'stripe-payment-element',
                    options: E(
                        y(E({}, null != f && { paymentMethodOrder: f }), {
                            layout: { type: 'tabs' },
                            wallets: {
                                applePay: n.includes('applePay') ? 'auto' : 'never',
                                googlePay: n.includes('googlePay') ? 'auto' : 'never'
                            }
                        }),
                        s
                    ),
                    onChange: h
                },
                c
            )
        );
    }),
    S = i.memo(function (e) {
        var { options: t, renderWithoutElement: n } = e,
            i = O(e, ['options', 'renderWithoutElement']);
        let o = (0, r.jsx)(a.AddressElement, E({ options: E({ mode: 'billing' }, t) }, i));
        return n
            ? o
            : (0, r.jsx)(a.Elements, {
                  stripe: (0, d.d2)(),
                  children: o
              });
    }),
    A = (e) => {
        let { step: t, stripePaymentElementProps: n, stripeAddressElementProps: o, elementsRef: l, originalPaymentType: u, paymentElementSelectedType: d, analyticsContext: f } = e,
            _ = (0, a.useElements)();
        i.useEffect(() => {
            l.current = _;
        }, [_, l]);
        let p = I.includes(t) && null != d,
            g = t === c.h8.ADDRESS;
        return (0, r.jsxs)('div', {
            className: m.body,
            children: [
                (0, r.jsx)('div', {
                    className: s()(p ? m.visible : m.hidden, {
                        [m.cardElementContainer]: d === h.He.CARD,
                        [m.customPaymentElementContainer]: d === h.He.PAYPAL
                    }),
                    children: (0, r.jsx)(
                        T,
                        y(E({}, n), {
                            originalPaymentType: u,
                            analyticsContext: f
                        })
                    )
                }),
                (0, r.jsx)('div', {
                    className: s()(m.addressElementContainer, g ? m.visible : m.hidden),
                    children: (0, r.jsx)(S, y(E({}, o), { renderWithoutElement: !0 }))
                })
            ]
        });
    },
    N = (e) => {
        var { onSetupError: t } = e,
            n = O(e, ['onSetupError']);
        let { elementsOptions: i, isLoading: o, setupError: s } = (0, f.S)({ onSetupError: t });
        return o || null != s
            ? (0, r.jsx)('div', {
                  className: m.loadingContainer,
                  children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE_SIMPLE })
              })
            : (0, r.jsxs)(a.Elements, {
                  stripe: (0, d.d2)(),
                  options: E({}, i),
                  children: [(0, r.jsx)(A, E({}, n)), ';']
              });
    };
