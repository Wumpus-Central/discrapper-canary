n.d(t, { f: () => E }), n(47120), n(26686);
var r = n(200651),
    i = n(192379),
    s = n(734530),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    c = n(801937),
    d = n(502109),
    u = n(241209),
    m = n(563132),
    g = n(586585),
    p = n(439021),
    h = n(450272),
    f = n(388032),
    b = n(296576),
    N = n(423931);
function x(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E() {
    return (0, r.jsx)(m.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'info-help-text',
                    className: b.labelSpacing,
                    children: 'Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.'
                }),
                (0, r.jsx)(j, {}),
                (0, r.jsx)(T, {}),
                (0, r.jsx)(Z, {})
            ]
        })
    });
}
function j() {
    return (0, r.jsxs)(h.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Google Pay'
            }),
            (0, r.jsx)(h.E_, {
                label: 'Google Pay - Default View',
                children: (0, r.jsx)(O, { paymentRequestWallet: 'googlePay' })
            }),
            (0, r.jsx)(h.E_, {
                label: 'Google Pay - Connector View',
                children: (0, r.jsx)(O, {
                    paymentRequestWallet: 'googlePay',
                    renderConnectorView: !0
                })
            }),
            (0, r.jsx)(h.E_, {
                label: 'Google Pay - Add Payment Step Body Connector View',
                children: (0, r.jsx)(S, { paymentRequestWallet: 'googlePay' })
            }),
            (0, r.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Apple Pay'
            }),
            (0, r.jsx)(h.E_, {
                label: 'Apple Pay - Default View',
                children: (0, r.jsx)(O, { paymentRequestWallet: 'applePay' })
            }),
            (0, r.jsx)(h.E_, {
                label: 'Apple Pay - Connector View',
                children: (0, r.jsx)(O, {
                    renderConnectorView: !0,
                    paymentRequestWallet: 'applePay'
                })
            }),
            (0, r.jsx)(h.E_, {
                label: 'Apple Pay - Add Payment Step Body Connector View',
                children: (0, r.jsx)(S, { paymentRequestWallet: 'applePay' })
            })
        ]
    });
}
function O(e) {
    let t = i.useRef(null),
        n = {
            paymentLabel: f.NW.string(f.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, r.jsx)(o.zxk, {
                color: o.zxk.Colors.TRANSPARENT,
                submitting: !0,
                look: o.zxk.Looks.LINK
            })
        };
    return e.renderStepBody ? (0, r.jsx)(p.t, x({}, n, e)) : 'applePay' === e.paymentRequestWallet ? (0, r.jsx)(d.Ch, x({}, n, e)) : (0, r.jsx)(d.Tr, x({}, n, e));
}
function C(e) {
    let { children: t, footer: n, className: i } = e;
    return (0, r.jsx)('div', {
        className: l()(N.root, N.focusLock, N.small, N.rootWithShadow, b.modal, i),
        'aria-label': f.NW.string(f.t.eQ2bLi),
        children: (0, r.jsxs)('form', {
            className: b.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, r.jsx)(o.hzk, {
                    className: b.scrollerContent,
                    children: t
                }),
                n
            ]
        })
    });
}
function S(e) {
    let { paymentRequestWallet: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1),
        l = () => {
            null != n.current && n.current.show();
        };
    return (0, r.jsx)(C, {
        footer: (0, r.jsx)(g.Z, {
            primaryCTA: g.Z.CTAType.CONTINUE,
            primaryText: f.NW.string('applePay' === t ? f.t.WoXvJC : f.t.wnVVr6),
            primaryDisabled: !s,
            onPrimary: () => l(),
            onBack: () => {}
        }),
        children: (0, r.jsx)(O, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => a(!0)
        })
    });
}
function v(e) {
    let { children: t } = e;
    return (0, r.jsx)(C, {
        className: b.choosePaymentTypeModal,
        children: (0, r.jsx)('div', {
            className: b.choosePaymentTypeContainer,
            children: t
        })
    });
}
function T() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log('onStripePaymentMethodReceived called: ', e);
        },
        isEligibleForTrial: !1
    };
    return (0, r.jsxs)(h.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Choose Payment Source Type Component'
            }),
            (0, r.jsx)(h.E_, {
                label: 'All Payment Request Wallets Enabled',
                children: (0, r.jsx)(v, {
                    children: (0, r.jsx)(
                        c.ZP,
                        _(x({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: ['googlePay', 'applePay']
                        })
                    )
                })
            }),
            (0, r.jsx)(h.E_, {
                label: 'No Payment Wallets Enabled',
                children: (0, r.jsx)(v, {
                    children: (0, r.jsx)(
                        c.ZP,
                        _(x({}, e), {
                            onChooseType: () => {},
                            paymentRequestWallets: []
                        })
                    )
                })
            }),
            (0, r.jsx)(h.E_, {
                label: 'Is Eligible for Trial',
                children: (0, r.jsx)(v, {
                    children: (0, r.jsx)(
                        c.ZP,
                        _(x({}, e), {
                            isEligibleForTrial: !0,
                            onChooseType: () => {},
                            paymentRequestWallets: []
                        })
                    )
                })
            })
        ]
    });
}
let I = {
        DEFAULT: 'Express Checkout Element - Default (No Config)',
        GPAY_FILTERED: 'Express Checkout Element - Filtered for Google Pay',
        APPLE_PAY_FILTERED: 'Express Checkout Element - Filtered for Apple Pay',
        APPLE_AND_GPAY_DISABLED: 'Express Checkout Element - Google Pay and Apple Pay Disabled',
        CONFIGURABLE: 'Express Checkout Element - Configurable'
    },
    y = {
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
    A = {
        appearance: {
            theme: 'flat',
            variables: {
                spacingUnit: '12px',
                borderRadius: '36px'
            }
        }
    },
    P = {
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
    R = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : 'undefined');
function D() {
    let [e, t] = i.useState(R(A)),
        [n, a] = i.useState(A),
        [l, c] = i.useState(R(P)),
        [d, m] = i.useState(P),
        [g, p] = i.useState(null),
        [f, N] = i.useState(
            (0, r.jsx)(h.DS, {
                errorLabel: I.CONFIGURABLE,
                elementOptions: A,
                children: (0, r.jsx)(s.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log('ExpressCheckoutElement onConfirm event: ', e);
                    },
                    options: P
                })
            })
        );
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: b.labelSpacing,
                children: ['Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.', (0, r.jsx)('br', {}), (0, r.jsx)('br', {}), 'Start by changing the `borderRadius` or `buttonHeight` as a test!']
            }),
            (0, r.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: b.labelSpacing,
                children: [(0, r.jsx)('b', { children: 'elements.options:' }), (0, r.jsx)('br', {}), (0, r.jsx)(h.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632' })]
            }),
            (0, r.jsx)(o.Kx8, {
                className: b.textarea,
                placeholder: 'Stripe Elements Container Options',
                showCharacterCount: !0,
                value: e,
                onChange: t
            }),
            (0, r.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: b.labelSpacing,
                children: [(0, r.jsx)('b', { children: 'expressCheckoutElement.options:' }), (0, r.jsx)('br', {}), (0, r.jsx)(h.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314' }), (0, r.jsx)('br', {}), (0, r.jsx)(h.lD, { href: 'https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element' })]
            }),
            (0, r.jsx)(o.Kx8, {
                className: b.textarea,
                placeholder: 'Stripe Express Checkout Element Options',
                showCharacterCount: !0,
                value: l,
                onChange: c
            }),
            null != g &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'text-danger',
                    children: g
                }),
            (0, r.jsx)(o.zxk, {
                className: b.applyChangesButton,
                color: o.zxk.Colors.BRAND,
                look: o.zxk.Looks.FILLED,
                size: o.zxk.Sizes.SMALL,
                onClick: () => {
                    try {
                        let t = JSON.parse(e),
                            n = JSON.parse(l);
                        N(null),
                            N(
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)(o.Text, {
                                            variant: 'text-md/normal',
                                            className: b.labelSpacing,
                                            children: ['Element updated at: ', new Date().toString()]
                                        }),
                                        (0, r.jsx)(h.DS, {
                                            errorLabel: I.CONFIGURABLE,
                                            elementOptions: t,
                                            children: (0, r.jsx)(s.ExpressCheckoutElement, {
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
                            m(n),
                            p(null);
                    } catch (e) {
                        console.error('ConfigurableStripeExpressCheckoutElement - error parsing JSON: ', e), p('Error parsing JSON. Check console for more information.');
                    }
                },
                children: 'Apply Changes'
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: b.labelSpacing,
                children: 'Current Element Options:'
            }),
            (0, r.jsx)(u.Z, {
                className: b.markdown,
                children: ''.concat('``', ' ').concat(R(n), ' ').concat('``')
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: b.labelSpacing,
                children: 'Current Express Checkout Element Options:'
            }),
            (0, r.jsx)(u.Z, {
                className: b.markdown,
                children: ''.concat('``', ' ').concat(R(d), ' ').concat('``')
            }),
            f
        ]
    });
}
function Z() {
    return (0, r.jsxs)(h.$0, {
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Stripe Express Checkout Buttons'
            }),
            (0, r.jsx)(h.E_, {
                label: I.DEFAULT,
                children: (0, r.jsx)('div', {
                    children: (0, r.jsx)(h.DS, {
                        errorLabel: I.DEFAULT,
                        children: (0, r.jsx)(s.ExpressCheckoutElement, {
                            onConfirm: (e) => {
                                console.log('ExpressCheckoutElement onConfirm event: ', e);
                            },
                            options: {}
                        })
                    })
                })
            }),
            ['GPAY_FILTERED', 'APPLE_PAY_FILTERED', 'APPLE_AND_GPAY_DISABLED'].map((e) => {
                let t = I[e];
                return (0, r.jsx)(
                    h.E_,
                    {
                        label: t,
                        children: (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: b.labelSpacing,
                                    children: 'expressCheckoutElement.options:'
                                }),
                                (0, r.jsx)(u.Z, {
                                    className: b.markdown,
                                    children: ''.concat('``').concat(R(y[e]), ' ').concat('``')
                                }),
                                (0, r.jsx)(h.DS, {
                                    errorLabel: t,
                                    children: (0, r.jsx)(s.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log('ExpressCheckoutElement onConfirm event: ', e);
                                        },
                                        options: y[e]
                                    })
                                })
                            ]
                        })
                    },
                    e
                );
            }),
            (0, r.jsx)(h.E_, {
                label: I.CONFIGURABLE,
                children: (0, r.jsx)(D, {})
            })
        ]
    });
}
