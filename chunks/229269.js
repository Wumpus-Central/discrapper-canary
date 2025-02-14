n.d(t, { f: () => C }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(734530),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    c = n(801937),
    d = n(502109),
    u = n(241209),
    m = n(563132),
    g = n(586585),
    h = n(439021),
    x = n(450272),
    _ = n(388032),
    p = n(50734),
    E = n(174913);
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
                    className: p.labelSpacing,
                    children: 'Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.'
                }),
                (0, i.jsx)(f, {}),
                (0, i.jsx)(b, {}),
                (0, i.jsx)(D, {})
            ]
        })
    });
}
function f() {
    return (0, i.jsxs)(x.$0, {
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Google Pay'
            }),
            (0, i.jsx)(x.E_, {
                label: 'Google Pay - Default View',
                children: (0, i.jsx)(T, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(x.E_, {
                label: 'Google Pay - Connector View',
                children: (0, i.jsx)(T, {
                    paymentRequestWallet: 'googlePay',
                    renderConnectorView: !0
                })
            }),
            (0, i.jsx)(x.E_, {
                label: 'Google Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(S, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Apple Pay'
            }),
            (0, i.jsx)(x.E_, {
                label: 'Apple Pay - Default View',
                children: (0, i.jsx)(T, { paymentRequestWallet: 'applePay' })
            }),
            (0, i.jsx)(x.E_, {
                label: 'Apple Pay - Connector View',
                children: (0, i.jsx)(T, {
                    renderConnectorView: !0,
                    paymentRequestWallet: 'applePay'
                })
            }),
            (0, i.jsx)(x.E_, {
                label: 'Apple Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(S, { paymentRequestWallet: 'applePay' })
            })
        ]
    });
}
function T(e) {
    let t = s.useRef(null),
        n = {
            paymentLabel: _.intl.string(_.t.ZURqX1),
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
    return e.renderStepBody
        ? (0, i.jsx)(h.t, {
              ...n,
              ...e
          })
        : 'applePay' === e.paymentRequestWallet
          ? (0, i.jsx)(d.Ch, {
                ...n,
                ...e
            })
          : (0, i.jsx)(d.Tr, {
                ...n,
                ...e
            });
}
function N(e) {
    let { children: t, footer: n, className: s } = e;
    return (0, i.jsx)('div', {
        className: a()(E.root, E.focusLock, E.small, E.rootWithShadow, p.modal, s),
        'aria-label': _.intl.string(_.t.eQ2bLi),
        children: (0, i.jsxs)('form', {
            className: p.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, i.jsx)(o.hzk, {
                    className: p.scrollerContent,
                    children: t
                }),
                n
            ]
        })
    });
}
function S(e) {
    let { paymentRequestWallet: t } = e,
        n = s.useRef(null),
        [r, l] = s.useState(!1),
        a = () => {
            null != n.current && n.current.show();
        };
    return (0, i.jsx)(N, {
        footer: (0, i.jsx)(g.Z, {
            primaryCTA: g.Z.CTAType.CONTINUE,
            primaryText: _.intl.string('applePay' === t ? _.t.WoXvJC : _.t.wnVVr6),
            primaryDisabled: !r,
            onPrimary: () => a(),
            onBack: () => {}
        }),
        children: (0, i.jsx)(T, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => l(!0)
        })
    });
}
function I(e) {
    let { children: t } = e;
    return (0, i.jsx)(N, {
        className: p.choosePaymentTypeModal,
        children: (0, i.jsx)('div', {
            className: p.choosePaymentTypeContainer,
            children: t
        })
    });
}
function b() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log('onStripePaymentMethodReceived called: ', e);
        },
        isEligibleForTrial: !1
    };
    return (0, i.jsxs)(x.$0, {
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Choose Payment Source Type Component'
            }),
            (0, i.jsx)(x.E_, {
                label: 'All Payment Request Wallets Enabled',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(c.ZP, {
                        ...e,
                        onChooseType: () => {},
                        paymentRequestWallets: ['googlePay', 'applePay']
                    })
                })
            }),
            (0, i.jsx)(x.E_, {
                label: 'No Payment Wallets Enabled',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(c.ZP, {
                        ...e,
                        onChooseType: () => {},
                        paymentRequestWallets: []
                    })
                })
            }),
            (0, i.jsx)(x.E_, {
                label: 'Is Eligible for Trial',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(c.ZP, {
                        ...e,
                        isEligibleForTrial: !0,
                        onChooseType: () => {},
                        paymentRequestWallets: []
                    })
                })
            })
        ]
    });
}
let v = {
        DEFAULT: 'Express Checkout Element - Default (No Config)',
        GPAY_FILTERED: 'Express Checkout Element - Filtered for Google Pay',
        APPLE_PAY_FILTERED: 'Express Checkout Element - Filtered for Apple Pay',
        APPLE_AND_GPAY_DISABLED: 'Express Checkout Element - Google Pay and Apple Pay Disabled',
        CONFIGURABLE: 'Express Checkout Element - Configurable'
    },
    j = {
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
    O = {
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
function P() {
    let [e, t] = s.useState(R(A)),
        [n, l] = s.useState(A),
        [a, c] = s.useState(R(O)),
        [d, m] = s.useState(O),
        [g, h] = s.useState(null),
        [_, E] = s.useState(
            (0, i.jsx)(x.DS, {
                errorLabel: v.CONFIGURABLE,
                elementOptions: A,
                children: (0, i.jsx)(r.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log('ExpressCheckoutElement onConfirm event: ', e);
                    },
                    options: O
                })
            })
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: p.labelSpacing,
                children: ['Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.', (0, i.jsx)('br', {}), (0, i.jsx)('br', {}), 'Start by changing the `borderRadius` or `buttonHeight` as a test!']
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: p.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'elements.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(x.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632' })]
            }),
            (0, i.jsx)(o.Kx8, {
                className: p.textarea,
                placeholder: 'Stripe Elements Container Options',
                showCharacterCount: !0,
                value: e,
                onChange: t
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: p.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'expressCheckoutElement.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(x.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314' }), (0, i.jsx)('br', {}), (0, i.jsx)(x.lD, { href: 'https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element' })]
            }),
            (0, i.jsx)(o.Kx8, {
                className: p.textarea,
                placeholder: 'Stripe Express Checkout Element Options',
                showCharacterCount: !0,
                value: a,
                onChange: c
            }),
            null != g &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'text-danger',
                    children: g
                }),
            (0, i.jsx)(o.zxk, {
                className: p.applyChangesButton,
                color: o.zxk.Colors.BRAND,
                look: o.zxk.Looks.FILLED,
                size: o.zxk.Sizes.SMALL,
                onClick: () => {
                    try {
                        let t = JSON.parse(e),
                            n = JSON.parse(a);
                        E(null),
                            E(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            variant: 'text-md/normal',
                                            className: p.labelSpacing,
                                            children: ['Element updated at: ', new Date().toString()]
                                        }),
                                        (0, i.jsx)(x.DS, {
                                            errorLabel: v.CONFIGURABLE,
                                            elementOptions: t,
                                            children: (0, i.jsx)(r.ExpressCheckoutElement, {
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
                            h(null);
                    } catch (e) {
                        console.error('ConfigurableStripeExpressCheckoutElement - error parsing JSON: ', e), h('Error parsing JSON. Check console for more information.');
                    }
                },
                children: 'Apply Changes'
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: p.labelSpacing,
                children: 'Current Element Options:'
            }),
            (0, i.jsx)(u.Z, {
                className: p.markdown,
                children: ''.concat('``', ' ').concat(R(n), ' ').concat('``')
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: p.labelSpacing,
                children: 'Current Express Checkout Element Options:'
            }),
            (0, i.jsx)(u.Z, {
                className: p.markdown,
                children: ''.concat('``', ' ').concat(R(d), ' ').concat('``')
            }),
            _
        ]
    });
}
function D() {
    return (0, i.jsxs)(x.$0, {
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Stripe Express Checkout Buttons'
            }),
            (0, i.jsx)(x.E_, {
                label: v.DEFAULT,
                children: (0, i.jsx)('div', {
                    children: (0, i.jsx)(x.DS, {
                        errorLabel: v.DEFAULT,
                        children: (0, i.jsx)(r.ExpressCheckoutElement, {
                            onConfirm: (e) => {
                                console.log('ExpressCheckoutElement onConfirm event: ', e);
                            },
                            options: {}
                        })
                    })
                })
            }),
            ['GPAY_FILTERED', 'APPLE_PAY_FILTERED', 'APPLE_AND_GPAY_DISABLED'].map((e) => {
                let t = v[e];
                return (0, i.jsx)(
                    x.E_,
                    {
                        label: t,
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: p.labelSpacing,
                                    children: 'expressCheckoutElement.options:'
                                }),
                                (0, i.jsx)(u.Z, {
                                    className: p.markdown,
                                    children: ''.concat('``').concat(R(j[e]), ' ').concat('``')
                                }),
                                (0, i.jsx)(x.DS, {
                                    errorLabel: t,
                                    children: (0, i.jsx)(r.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log('ExpressCheckoutElement onConfirm event: ', e);
                                        },
                                        options: j[e]
                                    })
                                })
                            ]
                        })
                    },
                    e
                );
            }),
            (0, i.jsx)(x.E_, {
                label: v.CONFIGURABLE,
                children: (0, i.jsx)(P, {})
            })
        ]
    });
}
