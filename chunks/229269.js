(n.d(t, { f: () => v }), n(388685), n(49124));
var i = n(255367),
    r = n(73800),
    s = n(245364),
    a = n(120356),
    l = n.n(a),
    o = n(680018),
    c = n(755721),
    d = n(481060),
    u = n(801937),
    m = n(502109),
    p = n(241209),
    g = n(563132),
    h = n(586585),
    f = n(439021),
    b = n(450272),
    x = n(231338),
    _ = n(388032),
    j = n(296576),
    O = n(423931);
function C(e) {
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
function E(e, t) {
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
function v() {
    return (0, i.jsx)(g.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    color: 'text-feedback-info',
                    className: j.labelSpacing,
                    children: 'Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.'
                }),
                (0, i.jsx)(S, {}),
                (0, i.jsx)(A, {}),
                (0, i.jsx)(L, {})
            ]
        })
    });
}
function S() {
    return (0, i.jsxs)(b.$0, {
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Google Pay'
            }),
            (0, i.jsx)(b.E_, {
                label: 'Google Pay - Default View',
                children: (0, i.jsx)(T, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(b.E_, {
                label: 'Google Pay - Connector View',
                children: (0, i.jsx)(T, {
                    paymentRequestWallet: 'googlePay',
                    renderConnectorView: !0
                })
            }),
            (0, i.jsx)(b.E_, {
                label: 'Google Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(I, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Apple Pay'
            }),
            (0, i.jsx)(b.E_, {
                label: 'Apple Pay - Default View',
                children: (0, i.jsx)(T, { paymentRequestWallet: 'applePay' })
            }),
            (0, i.jsx)(b.E_, {
                label: 'Apple Pay - Connector View',
                children: (0, i.jsx)(T, {
                    renderConnectorView: !0,
                    paymentRequestWallet: 'applePay'
                })
            }),
            (0, i.jsx)(b.E_, {
                label: 'Apple Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(I, { paymentRequestWallet: 'applePay' })
            })
        ]
    });
}
function T(e) {
    let t = r.useRef(null),
        n = {
            paymentLabel: _.intl.string(_.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, i.jsx)(d.$jN, {
                style: { marginTop: 16 },
                type: d.RAz.PULSING_ELLIPSIS
            })
        };
    return e.renderStepBody ? (0, i.jsx)(f.t, C({}, n, e)) : 'applePay' === e.paymentRequestWallet ? (0, i.jsx)(m.Ch, C({}, n, e)) : (0, i.jsx)(m.Tr, C({}, n, e));
}
function N(e) {
    let { children: t, footer: n, className: r } = e;
    return (0, i.jsx)('div', {
        className: l()(O.root, O.focusLock, O.small, O.rootWithShadow, j.modal, r),
        'aria-label': _.intl.string(_.t.eQ2bLi),
        children: (0, i.jsxs)('form', {
            className: j.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, i.jsx)(d.hzk, {
                    className: j.scrollerContent,
                    children: t
                }),
                n
            ]
        })
    });
}
function I(e) {
    let { paymentRequestWallet: t } = e,
        n = r.useRef(null),
        [s, a] = r.useState(!1),
        l = () => {
            null != n.current && n.current.show();
        };
    return (0, i.jsx)(N, {
        footer: (0, i.jsx)(h.Z, {
            primaryCTA: h.Z.CTAType.CONTINUE,
            primaryText: _.intl.string('applePay' === t ? _.t.WoXvJC : _.t.wnVVr6),
            primaryDisabled: !s,
            onPrimary: () => l(),
            onBack: () => {}
        }),
        children: (0, i.jsx)(T, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => a(!0)
        })
    });
}
function y(e) {
    let { children: t } = e;
    return (0, i.jsx)(N, {
        className: j.choosePaymentTypeModal,
        children: (0, i.jsx)('div', {
            className: j.choosePaymentTypeContainer,
            children: t
        })
    });
}
function A() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log('onStripePaymentMethodReceived called: ', e);
        },
        isEligibleForTrial: !1
    };
    return (0, i.jsxs)(b.$0, {
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Choose Payment Source Type Component'
            }),
            (0, i.jsx)(b.E_, {
                label: 'All Payment Request Wallets Enabled',
                children: (0, i.jsx)(y, {
                    children: (0, i.jsx)(
                        u.Z,
                        E(C({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: ['googlePay', 'applePay']
                        })
                    )
                })
            }),
            (0, i.jsx)(b.E_, {
                label: 'No Payment Wallets Enabled',
                children: (0, i.jsx)(y, {
                    children: (0, i.jsx)(
                        u.Z,
                        E(C({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: []
                        })
                    )
                })
            }),
            (0, i.jsx)(b.E_, {
                label: 'Is Eligible for Trial',
                children: (0, i.jsx)(y, {
                    children: (0, i.jsx)(
                        u.Z,
                        E(C({}, e), {
                            isEligibleForTrial: !0,
                            onChooseType: () => {},
                            paymentRequestWallets: []
                        })
                    )
                })
            }),
            (0, i.jsx)(b.E_, {
                label: 'Only Stripe Card Enabled',
                children: (0, i.jsx)(y, {
                    children: (0, i.jsx)(
                        u.Z,
                        E(C({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: [],
                            paymentSourceTypeRestrictions: [x.He.CARD.valueOf()]
                        })
                    )
                })
            })
        ]
    });
}
let P = {
        DEFAULT: 'Express Checkout Element - Default (No Config)',
        GPAY_FILTERED: 'Express Checkout Element - Filtered for Google Pay',
        APPLE_PAY_FILTERED: 'Express Checkout Element - Filtered for Apple Pay',
        APPLE_AND_GPAY_DISABLED: 'Express Checkout Element - Google Pay and Apple Pay Disabled',
        CONFIGURABLE: 'Express Checkout Element - Configurable'
    },
    R = {
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
    D = {
        appearance: {
            theme: 'flat',
            variables: {
                spacingUnit: '12px',
                borderRadius: '36px'
            }
        }
    },
    Z = {
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
    w = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : 'undefined');
function k() {
    let [e, t] = r.useState(w(D)),
        [n, a] = r.useState(D),
        [l, u] = r.useState(w(Z)),
        [m, g] = r.useState(Z),
        [h, f] = r.useState(null),
        [x, _] = r.useState(
            (0, i.jsx)(b.DS, {
                errorLabel: P.CONFIGURABLE,
                elementOptions: D,
                children: (0, i.jsx)(s.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log('ExpressCheckoutElement onConfirm event: ', e);
                    },
                    options: Z
                })
            })
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(d.Text, {
                variant: 'text-md/normal',
                className: j.labelSpacing,
                children: ['Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.', (0, i.jsx)('br', {}), (0, i.jsx)('br', {}), 'Start by changing the `borderRadius` or `buttonHeight` as a test!']
            }),
            (0, i.jsxs)(d.Text, {
                variant: 'text-md/normal',
                className: j.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'elements.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(b.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632' })]
            }),
            (0, i.jsx)(c.iS, {
                className: j.textarea,
                placeholder: 'Stripe Elements Container Options',
                showCharacterCount: !0,
                value: e,
                onChange: t
            }),
            (0, i.jsxs)(d.Text, {
                variant: 'text-md/normal',
                className: j.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'expressCheckoutElement.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(b.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314' }), (0, i.jsx)('br', {}), (0, i.jsx)(b.lD, { href: 'https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element' })]
            }),
            (0, i.jsx)(c.iS, {
                className: j.textarea,
                placeholder: 'Stripe Express Checkout Element Options',
                showCharacterCount: !0,
                value: l,
                onChange: u
            }),
            null != h &&
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    color: 'text-danger',
                    children: h
                }),
            (0, i.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: j.applyChangesButton,
                children: (0, i.jsx)(o.z, {
                    variant: 'primary',
                    size: 'sm',
                    text: 'Apply Changes',
                    onClick: () => {
                        try {
                            let t = JSON.parse(e),
                                n = JSON.parse(l);
                            (_(null),
                                _(
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsxs)(d.Text, {
                                                variant: 'text-md/normal',
                                                className: j.labelSpacing,
                                                children: ['Element updated at: ', new Date().toString()]
                                            }),
                                            (0, i.jsx)(b.DS, {
                                                errorLabel: P.CONFIGURABLE,
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
                                g(n),
                                f(null));
                        } catch (e) {
                            (console.error('ConfigurableStripeExpressCheckoutElement - error parsing JSON: ', e), f('Error parsing JSON. Check console for more information.'));
                        }
                    }
                })
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-md/normal',
                className: j.labelSpacing,
                children: 'Current Element Options:'
            }),
            (0, i.jsx)(p.Z, {
                className: j.markdown,
                children: ''.concat('``', ' ').concat(w(n), ' ').concat('``')
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-md/normal',
                className: j.labelSpacing,
                children: 'Current Express Checkout Element Options:'
            }),
            (0, i.jsx)(p.Z, {
                className: j.markdown,
                children: ''.concat('``', ' ').concat(w(m), ' ').concat('``')
            }),
            x
        ]
    });
}
function L() {
    return (0, i.jsxs)(b.$0, {
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Stripe Express Checkout Buttons'
            }),
            (0, i.jsx)(b.E_, {
                label: P.DEFAULT,
                children: (0, i.jsx)('div', {
                    children: (0, i.jsx)(b.DS, {
                        errorLabel: P.DEFAULT,
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
                let t = P[e];
                return (0, i.jsx)(
                    b.E_,
                    {
                        label: t,
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: j.labelSpacing,
                                    children: 'expressCheckoutElement.options:'
                                }),
                                (0, i.jsx)(p.Z, {
                                    className: j.markdown,
                                    children: ''.concat('``').concat(w(R[e]), ' ').concat('``')
                                }),
                                (0, i.jsx)(b.DS, {
                                    errorLabel: t,
                                    children: (0, i.jsx)(s.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log('ExpressCheckoutElement onConfirm event: ', e);
                                        },
                                        options: R[e]
                                    })
                                })
                            ]
                        })
                    },
                    e
                );
            }),
            (0, i.jsx)(b.E_, {
                label: P.CONFIGURABLE,
                children: (0, i.jsx)(k, {})
            })
        ]
    });
}
