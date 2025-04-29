n.d(t, { f: () => C }), n(388685), n(49124);
var i = n(255367),
    r = n(73800),
    s = n(957957),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    c = n(801937),
    d = n(502109),
    u = n(241209),
    m = n(563132),
    p = n(586585),
    g = n(439021),
    h = n(450272),
    f = n(231338),
    b = n(388032),
    _ = n(296576),
    x = n(423931);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C() {
    return (0, i.jsx)(m.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'info-help-text',
                    className: _.labelSpacing,
                    children: 'Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.'
                }),
                (0, i.jsx)(O, {}),
                (0, i.jsx)(I, {}),
                (0, i.jsx)(w, {})
            ]
        })
    });
}
function O() {
    return (0, i.jsxs)(h.$0, {
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Google Pay'
            }),
            (0, i.jsx)(h.E_, {
                label: 'Google Pay - Default View',
                children: (0, i.jsx)(S, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(h.E_, {
                label: 'Google Pay - Connector View',
                children: (0, i.jsx)(S, {
                    paymentRequestWallet: 'googlePay',
                    renderConnectorView: !0
                })
            }),
            (0, i.jsx)(h.E_, {
                label: 'Google Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(T, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Apple Pay'
            }),
            (0, i.jsx)(h.E_, {
                label: 'Apple Pay - Default View',
                children: (0, i.jsx)(S, { paymentRequestWallet: 'applePay' })
            }),
            (0, i.jsx)(h.E_, {
                label: 'Apple Pay - Connector View',
                children: (0, i.jsx)(S, {
                    renderConnectorView: !0,
                    paymentRequestWallet: 'applePay'
                })
            }),
            (0, i.jsx)(h.E_, {
                label: 'Apple Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(T, { paymentRequestWallet: 'applePay' })
            })
        ]
    });
}
function S(e) {
    let t = r.useRef(null),
        n = {
            paymentLabel: b.intl.string(b.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, i.jsx)(o.zxk, {
                color: o.zxk.Colors.TRANSPARENT,
                submitting: !0,
                look: o.zxk.Looks.LINK
            })
        };
    return e.renderStepBody ? (0, i.jsx)(g.t, E({}, n, e)) : 'applePay' === e.paymentRequestWallet ? (0, i.jsx)(d.Ch, E({}, n, e)) : (0, i.jsx)(d.Tr, E({}, n, e));
}
function v(e) {
    let { children: t, footer: n, className: r } = e;
    return (0, i.jsx)('div', {
        className: a()(x.root, x.focusLock, x.small, x.rootWithShadow, _.modal, r),
        'aria-label': b.intl.string(b.t.eQ2bLi),
        children: (0, i.jsxs)('form', {
            className: _.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, i.jsx)(o.hzk, {
                    className: _.scrollerContent,
                    children: t
                }),
                n
            ]
        })
    });
}
function T(e) {
    let { paymentRequestWallet: t } = e,
        n = r.useRef(null),
        [s, l] = r.useState(!1),
        a = () => {
            null != n.current && n.current.show();
        };
    return (0, i.jsx)(v, {
        footer: (0, i.jsx)(p.Z, {
            primaryCTA: p.Z.CTAType.CONTINUE,
            primaryText: b.intl.string('applePay' === t ? b.t.WoXvJC : b.t.wnVVr6),
            primaryDisabled: !s,
            onPrimary: () => a(),
            onBack: () => {}
        }),
        children: (0, i.jsx)(S, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => l(!0)
        })
    });
}
function N(e) {
    let { children: t } = e;
    return (0, i.jsx)(v, {
        className: _.choosePaymentTypeModal,
        children: (0, i.jsx)('div', {
            className: _.choosePaymentTypeContainer,
            children: t
        })
    });
}
function I() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log('onStripePaymentMethodReceived called: ', e);
        },
        isEligibleForTrial: !1
    };
    return (0, i.jsxs)(h.$0, {
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Choose Payment Source Type Component'
            }),
            (0, i.jsx)(h.E_, {
                label: 'All Payment Request Wallets Enabled',
                children: (0, i.jsx)(N, {
                    children: (0, i.jsx)(
                        c.ZP,
                        j(E({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: ['googlePay', 'applePay']
                        })
                    )
                })
            }),
            (0, i.jsx)(h.E_, {
                label: 'No Payment Wallets Enabled',
                children: (0, i.jsx)(N, {
                    children: (0, i.jsx)(
                        c.ZP,
                        j(E({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: []
                        })
                    )
                })
            }),
            (0, i.jsx)(h.E_, {
                label: 'Is Eligible for Trial',
                children: (0, i.jsx)(N, {
                    children: (0, i.jsx)(
                        c.ZP,
                        j(E({}, e), {
                            isEligibleForTrial: !0,
                            onChooseType: () => {},
                            paymentRequestWallets: []
                        })
                    )
                })
            }),
            (0, i.jsx)(h.E_, {
                label: 'Only Stripe Card Enabled',
                children: (0, i.jsx)(N, {
                    children: (0, i.jsx)(
                        c.ZP,
                        j(E({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                            paymentSourceTypeRestrictions: [f.He.CARD.valueOf()]
                        })
                    )
                })
            })
        ]
    });
}
let y = {
        DEFAULT: 'Express Checkout Element - Default (No Config)',
        GPAY_FILTERED: 'Express Checkout Element - Filtered for Google Pay',
        APPLE_PAY_FILTERED: 'Express Checkout Element - Filtered for Apple Pay',
        APPLE_AND_GPAY_DISABLED: 'Express Checkout Element - Google Pay and Apple Pay Disabled',
        CONFIGURABLE: 'Express Checkout Element - Configurable'
    },
    A = {
        GPAY_FILTERED: {
            wallets: {
                googlePay: 'always',
                applePay: 'never'
            }
        },
        APPLE_PAY_FILTERED: {
            wallets: {
                googlePay: 'never',
                applePay: 'always'
            }
        },
        APPLE_AND_GPAY_DISABLED: {
            wallets: {
                googlePay: 'never',
                applePay: 'never'
            }
        }
    },
    P = {
        appearance: {
            theme: 'flat',
            variables: {
                spacingUnit: '12px',
                borderRadius: '36px'
            }
        }
    },
    R = {
        buttonType: {
            googlePay: 'pay',
            applePay: 'book'
        },
        buttonTheme: {
            applePay: 'black',
            googlePay: 'white'
        },
        buttonHeight: 40
    },
    D = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : 'undefined');
function Z() {
    let [e, t] = r.useState(D(P)),
        [n, l] = r.useState(P),
        [a, c] = r.useState(D(R)),
        [d, m] = r.useState(R),
        [p, g] = r.useState(null),
        [f, b] = r.useState(
            (0, i.jsx)(h.DS, {
                errorLabel: y.CONFIGURABLE,
                elementOptions: P,
                children: (0, i.jsx)(s.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log('ExpressCheckoutElement onConfirm event: ', e);
                    },
                    options: R
                })
            })
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: ['Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.', (0, i.jsx)('br', {}), (0, i.jsx)('br', {}), 'Start by changing the `borderRadius` or `buttonHeight` as a test!']
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'elements.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(h.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632' })]
            }),
            (0, i.jsx)(o.Kx8, {
                className: _.textarea,
                placeholder: 'Stripe Elements Container Options',
                showCharacterCount: !0,
                value: e,
                onChange: t
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'expressCheckoutElement.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(h.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314' }), (0, i.jsx)('br', {}), (0, i.jsx)(h.lD, { href: 'https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element' })]
            }),
            (0, i.jsx)(o.Kx8, {
                className: _.textarea,
                placeholder: 'Stripe Express Checkout Element Options',
                showCharacterCount: !0,
                value: a,
                onChange: c
            }),
            null != p &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'text-danger',
                    children: p
                }),
            (0, i.jsx)(o.zxk, {
                className: _.applyChangesButton,
                color: o.zxk.Colors.BRAND,
                look: o.zxk.Looks.FILLED,
                size: o.zxk.Sizes.SMALL,
                onClick: () => {
                    try {
                        let t = JSON.parse(e),
                            n = JSON.parse(a);
                        b(null),
                            b(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            variant: 'text-md/normal',
                                            className: _.labelSpacing,
                                            children: ['Element updated at: ', new Date().toString()]
                                        }),
                                        (0, i.jsx)(h.DS, {
                                            errorLabel: y.CONFIGURABLE,
                                            elementOptions: t,
                                            children: (0, i.jsx)(s.ExpressCheckoutElement, {
                                                onConfirm: (e) => {
                                                    console.log('ExpressCheckoutElement onConfirm event: ', e);
                                                },
                                                options: n
                                            })
                                        })
                                    ]
                                })
                            ),
                            l(t),
                            m(n),
                            g(null);
                    } catch (e) {
                        console.error('ConfigurableStripeExpressCheckoutElement - error parsing JSON: ', e), g('Error parsing JSON. Check console for more information.');
                    }
                },
                children: 'Apply Changes'
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: 'Current Element Options:'
            }),
            (0, i.jsx)(u.Z, {
                className: _.markdown,
                children: ''.concat('``', ' ').concat(D(n), ' ').concat('``')
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: 'Current Express Checkout Element Options:'
            }),
            (0, i.jsx)(u.Z, {
                className: _.markdown,
                children: ''.concat('``', ' ').concat(D(d), ' ').concat('``')
            }),
            f
        ]
    });
}
function w() {
    return (0, i.jsxs)(h.$0, {
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Stripe Express Checkout Buttons'
            }),
            (0, i.jsx)(h.E_, {
                label: y.DEFAULT,
                children: (0, i.jsx)('div', {
                    children: (0, i.jsx)(h.DS, {
                        errorLabel: y.DEFAULT,
                        children: (0, i.jsx)(s.ExpressCheckoutElement, {
                            onConfirm: (e) => {
                                console.log('ExpressCheckoutElement onConfirm event: ', e);
                            },
                            options: {}
                        })
                    })
                })
            }),
            ['GPAY_FILTERED', 'APPLE_PAY_FILTERED', 'APPLE_AND_GPAY_DISABLED'].map((e) => {
                let t = y[e];
                return (0, i.jsx)(
                    h.E_,
                    {
                        label: t,
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: _.labelSpacing,
                                    children: 'expressCheckoutElement.options:'
                                }),
                                (0, i.jsx)(u.Z, {
                                    className: _.markdown,
                                    children: ''.concat('``').concat(D(A[e]), ' ').concat('``')
                                }),
                                (0, i.jsx)(h.DS, {
                                    errorLabel: t,
                                    children: (0, i.jsx)(s.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log('ExpressCheckoutElement onConfirm event: ', e);
                                        },
                                        options: A[e]
                                    })
                                })
                            ]
                        })
                    },
                    e
                );
            }),
            (0, i.jsx)(h.E_, {
                label: y.CONFIGURABLE,
                children: (0, i.jsx)(Z, {})
            })
        ]
    });
}
