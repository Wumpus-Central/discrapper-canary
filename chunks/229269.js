(n.d(t, { f: () => E }), n(388685), n(49124));
var i = n(255367),
    r = n(73800),
    s = n(245364),
    a = n(120356),
    l = n.n(a),
    o = n(755721),
    c = n(481060),
    d = n(801937),
    u = n(502109),
    m = n(241209),
    p = n(563132),
    g = n(586585),
    h = n(439021),
    f = n(450272),
    b = n(231338),
    x = n(388032),
    _ = n(296576),
    j = n(423931);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function C(e, t) {
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
function E() {
    return (0, i.jsx)(p.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    color: 'text-feedback-info',
                    className: _.labelSpacing,
                    children: 'Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.'
                }),
                (0, i.jsx)(v, {}),
                (0, i.jsx)(y, {}),
                (0, i.jsx)(k, {})
            ]
        })
    });
}
function v() {
    return (0, i.jsxs)(f.$0, {
        children: [
            (0, i.jsx)(c.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Google Pay'
            }),
            (0, i.jsx)(f.E_, {
                label: 'Google Pay - Default View',
                children: (0, i.jsx)(S, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(f.E_, {
                label: 'Google Pay - Connector View',
                children: (0, i.jsx)(S, {
                    paymentRequestWallet: 'googlePay',
                    renderConnectorView: !0
                })
            }),
            (0, i.jsx)(f.E_, {
                label: 'Google Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(N, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(c.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Apple Pay'
            }),
            (0, i.jsx)(f.E_, {
                label: 'Apple Pay - Default View',
                children: (0, i.jsx)(S, { paymentRequestWallet: 'applePay' })
            }),
            (0, i.jsx)(f.E_, {
                label: 'Apple Pay - Connector View',
                children: (0, i.jsx)(S, {
                    renderConnectorView: !0,
                    paymentRequestWallet: 'applePay'
                })
            }),
            (0, i.jsx)(f.E_, {
                label: 'Apple Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(N, { paymentRequestWallet: 'applePay' })
            })
        ]
    });
}
function S(e) {
    let t = r.useRef(null),
        n = {
            paymentLabel: x.intl.string(x.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, i.jsx)(o.zx, {
                color: o.zx.Colors.TRANSPARENT,
                submitting: !0,
                look: o.zx.Looks.LINK
            })
        };
    return e.renderStepBody ? (0, i.jsx)(h.t, O({}, n, e)) : 'applePay' === e.paymentRequestWallet ? (0, i.jsx)(u.Ch, O({}, n, e)) : (0, i.jsx)(u.Tr, O({}, n, e));
}
function T(e) {
    let { children: t, footer: n, className: r } = e;
    return (0, i.jsx)('div', {
        className: l()(j.root, j.focusLock, j.small, j.rootWithShadow, _.modal, r),
        'aria-label': x.intl.string(x.t.eQ2bLi),
        children: (0, i.jsxs)('form', {
            className: _.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, i.jsx)(c.hzk, {
                    className: _.scrollerContent,
                    children: t
                }),
                n
            ]
        })
    });
}
function N(e) {
    let { paymentRequestWallet: t } = e,
        n = r.useRef(null),
        [s, a] = r.useState(!1),
        l = () => {
            null != n.current && n.current.show();
        };
    return (0, i.jsx)(T, {
        footer: (0, i.jsx)(g.Z, {
            primaryCTA: g.Z.CTAType.CONTINUE,
            primaryText: x.intl.string('applePay' === t ? x.t.WoXvJC : x.t.wnVVr6),
            primaryDisabled: !s,
            onPrimary: () => l(),
            onBack: () => {}
        }),
        children: (0, i.jsx)(S, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => a(!0)
        })
    });
}
function I(e) {
    let { children: t } = e;
    return (0, i.jsx)(T, {
        className: _.choosePaymentTypeModal,
        children: (0, i.jsx)('div', {
            className: _.choosePaymentTypeContainer,
            children: t
        })
    });
}
function y() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log('onStripePaymentMethodReceived called: ', e);
        },
        isEligibleForTrial: !1
    };
    return (0, i.jsxs)(f.$0, {
        children: [
            (0, i.jsx)(c.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Choose Payment Source Type Component'
            }),
            (0, i.jsx)(f.E_, {
                label: 'All Payment Request Wallets Enabled',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(
                        d.Z,
                        C(O({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: ['googlePay', 'applePay']
                        })
                    )
                })
            }),
            (0, i.jsx)(f.E_, {
                label: 'No Payment Wallets Enabled',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(
                        d.Z,
                        C(O({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: []
                        })
                    )
                })
            }),
            (0, i.jsx)(f.E_, {
                label: 'Is Eligible for Trial',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(
                        d.Z,
                        C(O({}, e), {
                            isEligibleForTrial: !0,
                            onChooseType: () => {},
                            paymentRequestWallets: []
                        })
                    )
                })
            }),
            (0, i.jsx)(f.E_, {
                label: 'Only Stripe Card Enabled',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(
                        d.Z,
                        C(O({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                            paymentSourceTypeRestrictions: [b.He.CARD.valueOf()]
                        })
                    )
                })
            })
        ]
    });
}
let A = {
        DEFAULT: 'Express Checkout Element - Default (No Config)',
        GPAY_FILTERED: 'Express Checkout Element - Filtered for Google Pay',
        APPLE_PAY_FILTERED: 'Express Checkout Element - Filtered for Apple Pay',
        APPLE_AND_GPAY_DISABLED: 'Express Checkout Element - Google Pay and Apple Pay Disabled',
        CONFIGURABLE: 'Express Checkout Element - Configurable'
    },
    P = {
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
    R = {
        appearance: {
            theme: 'flat',
            variables: {
                spacingUnit: '12px',
                borderRadius: '36px'
            }
        }
    },
    D = {
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
    Z = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : 'undefined');
function w() {
    let [e, t] = r.useState(Z(R)),
        [n, a] = r.useState(R),
        [l, d] = r.useState(Z(D)),
        [u, p] = r.useState(D),
        [g, h] = r.useState(null),
        [b, x] = r.useState(
            (0, i.jsx)(f.DS, {
                errorLabel: A.CONFIGURABLE,
                elementOptions: R,
                children: (0, i.jsx)(s.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log('ExpressCheckoutElement onConfirm event: ', e);
                    },
                    options: D
                })
            })
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(c.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: ['Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.', (0, i.jsx)('br', {}), (0, i.jsx)('br', {}), 'Start by changing the `borderRadius` or `buttonHeight` as a test!']
            }),
            (0, i.jsxs)(c.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'elements.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(f.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632' })]
            }),
            (0, i.jsx)(o.iS, {
                className: _.textarea,
                placeholder: 'Stripe Elements Container Options',
                showCharacterCount: !0,
                value: e,
                onChange: t
            }),
            (0, i.jsxs)(c.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'expressCheckoutElement.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(f.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314' }), (0, i.jsx)('br', {}), (0, i.jsx)(f.lD, { href: 'https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element' })]
            }),
            (0, i.jsx)(o.iS, {
                className: _.textarea,
                placeholder: 'Stripe Express Checkout Element Options',
                showCharacterCount: !0,
                value: l,
                onChange: d
            }),
            null != g &&
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    color: 'text-danger',
                    children: g
                }),
            (0, i.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: _.applyChangesButton,
                children: (0, i.jsx)(c.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: 'Apply Changes',
                    onClick: () => {
                        try {
                            let t = JSON.parse(e),
                                n = JSON.parse(l);
                            (x(null),
                                x(
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsxs)(c.Text, {
                                                variant: 'text-md/normal',
                                                className: _.labelSpacing,
                                                children: ['Element updated at: ', new Date().toString()]
                                            }),
                                            (0, i.jsx)(f.DS, {
                                                errorLabel: A.CONFIGURABLE,
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
                                a(t),
                                p(n),
                                h(null));
                        } catch (e) {
                            (console.error('ConfigurableStripeExpressCheckoutElement - error parsing JSON: ', e), h('Error parsing JSON. Check console for more information.'));
                        }
                    }
                })
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: 'Current Element Options:'
            }),
            (0, i.jsx)(m.Z, {
                className: _.markdown,
                children: ''.concat('``', ' ').concat(Z(n), ' ').concat('``')
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                className: _.labelSpacing,
                children: 'Current Express Checkout Element Options:'
            }),
            (0, i.jsx)(m.Z, {
                className: _.markdown,
                children: ''.concat('``', ' ').concat(Z(u), ' ').concat('``')
            }),
            b
        ]
    });
}
function k() {
    return (0, i.jsxs)(f.$0, {
        children: [
            (0, i.jsx)(c.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Stripe Express Checkout Buttons'
            }),
            (0, i.jsx)(f.E_, {
                label: A.DEFAULT,
                children: (0, i.jsx)('div', {
                    children: (0, i.jsx)(f.DS, {
                        errorLabel: A.DEFAULT,
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
                let t = A[e];
                return (0, i.jsx)(
                    f.E_,
                    {
                        label: t,
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    className: _.labelSpacing,
                                    children: 'expressCheckoutElement.options:'
                                }),
                                (0, i.jsx)(m.Z, {
                                    className: _.markdown,
                                    children: ''.concat('``').concat(Z(P[e]), ' ').concat('``')
                                }),
                                (0, i.jsx)(f.DS, {
                                    errorLabel: t,
                                    children: (0, i.jsx)(s.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log('ExpressCheckoutElement onConfirm event: ', e);
                                        },
                                        options: P[e]
                                    })
                                })
                            ]
                        })
                    },
                    e
                );
            }),
            (0, i.jsx)(f.E_, {
                label: A.CONFIGURABLE,
                children: (0, i.jsx)(w, {})
            })
        ]
    });
}
