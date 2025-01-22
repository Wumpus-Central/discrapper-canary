n.d(t, {
    f: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(734530),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    c = n(801937),
    d = n(502109),
    u = n(241209),
    m = n(563132),
    g = n(586585),
    h = n(439021),
    p = n(450272),
    x = n(388032),
    f = n(713126),
    E = n(564952);
function _() {
    return (0, i.jsx)(m.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'info-help-text',
                    className: f.labelSpacing,
                    children: 'Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.'
                }),
                (0, i.jsx)(C, {}),
                (0, i.jsx)(N, {}),
                (0, i.jsx)(D, {})
            ]
        })
    });
}
function C() {
    return (0, i.jsxs)(p.$0, {
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Google Pay'
            }),
            (0, i.jsx)(p.E_, {
                label: 'Google Pay - Default View',
                children: (0, i.jsx)(T, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(p.E_, {
                label: 'Google Pay - Connector View',
                children: (0, i.jsx)(T, {
                    paymentRequestWallet: 'googlePay',
                    renderConnectorView: !0
                })
            }),
            (0, i.jsx)(p.E_, {
                label: 'Google Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(b, { paymentRequestWallet: 'googlePay' })
            }),
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Apple Pay'
            }),
            (0, i.jsx)(p.E_, {
                label: 'Apple Pay - Default View',
                children: (0, i.jsx)(T, { paymentRequestWallet: 'applePay' })
            }),
            (0, i.jsx)(p.E_, {
                label: 'Apple Pay - Connector View',
                children: (0, i.jsx)(T, {
                    renderConnectorView: !0,
                    paymentRequestWallet: 'applePay'
                })
            }),
            (0, i.jsx)(p.E_, {
                label: 'Apple Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(b, { paymentRequestWallet: 'applePay' })
            })
        ]
    });
}
function T(e) {
    let t = r.useRef(null),
        n = {
            paymentLabel: x.intl.string(x.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, i.jsx)(o.Button, {
                color: o.Button.Colors.TRANSPARENT,
                submitting: !0,
                look: o.Button.Looks.LINK
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
function S(e) {
    let { children: t, footer: n, className: r } = e;
    return (0, i.jsx)('div', {
        className: l()(E.root, E.focusLock, E.small, E.rootWithShadow, f.modal, r),
        'aria-label': x.intl.string(x.t.eQ2bLi),
        children: (0, i.jsxs)('form', {
            className: f.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, i.jsx)(o.ModalContent, {
                    className: f.scrollerContent,
                    children: t
                }),
                n
            ]
        })
    });
}
function b(e) {
    let { paymentRequestWallet: t } = e,
        n = r.useRef(null),
        [s, a] = r.useState(!1),
        l = () => {
            null != n.current && n.current.show();
        };
    return (0, i.jsx)(S, {
        footer: (0, i.jsx)(g.Z, {
            primaryCTA: g.Z.CTAType.CONTINUE,
            primaryText: x.intl.string('applePay' === t ? x.t.WoXvJC : x.t.wnVVr6),
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
function I(e) {
    let { children: t } = e;
    return (0, i.jsx)(S, {
        className: f.choosePaymentTypeModal,
        children: (0, i.jsx)('div', {
            className: f.choosePaymentTypeContainer,
            children: t
        })
    });
}
function N() {
    let e = {
        onChooseType: () => {},
        onStripePaymentMethodReceived: (e) => {
            console.log('onStripePaymentMethodReceived called: ', e);
        },
        isEligibleForTrial: !1
    };
    return (0, i.jsxs)(p.$0, {
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Choose Payment Source Type Component'
            }),
            (0, i.jsx)(p.E_, {
                label: 'All Payment Request Wallets Enabled',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(c.ZP, {
                        ...e,
                        onChooseType: () => {},
                        paymentRequestWallets: ['googlePay', 'applePay']
                    })
                })
            }),
            (0, i.jsx)(p.E_, {
                label: 'No Payment Wallets Enabled',
                children: (0, i.jsx)(I, {
                    children: (0, i.jsx)(c.ZP, {
                        ...e,
                        onChooseType: () => {},
                        paymentRequestWallets: []
                    })
                })
            }),
            (0, i.jsx)(p.E_, {
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
    j = {
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
    let [e, t] = r.useState(R(j)),
        [n, a] = r.useState(j),
        [l, c] = r.useState(R(O)),
        [d, m] = r.useState(O),
        [g, h] = r.useState(null),
        [x, E] = r.useState(
            (0, i.jsx)(p.DS, {
                errorLabel: v.CONFIGURABLE,
                elementOptions: j,
                children: (0, i.jsx)(s.ExpressCheckoutElement, {
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
                className: f.labelSpacing,
                children: ['Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.', (0, i.jsx)('br', {}), (0, i.jsx)('br', {}), 'Start by changing the `borderRadius` or `buttonHeight` as a test!']
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: f.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'elements.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(p.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632' })]
            }),
            (0, i.jsx)(o.TextArea, {
                className: f.textarea,
                placeholder: 'Stripe Elements Container Options',
                showCharacterCount: !0,
                value: e,
                onChange: t
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: f.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'expressCheckoutElement.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(p.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314' }), (0, i.jsx)('br', {}), (0, i.jsx)(p.lD, { href: 'https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element' })]
            }),
            (0, i.jsx)(o.TextArea, {
                className: f.textarea,
                placeholder: 'Stripe Express Checkout Element Options',
                showCharacterCount: !0,
                value: l,
                onChange: c
            }),
            null != g &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'text-danger',
                    children: g
                }),
            (0, i.jsx)(o.Button, {
                className: f.applyChangesButton,
                color: o.Button.Colors.BRAND,
                look: o.Button.Looks.FILLED,
                size: o.Button.Sizes.SMALL,
                onClick: () => {
                    try {
                        let t = JSON.parse(e),
                            n = JSON.parse(l);
                        E(null),
                            E(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            variant: 'text-md/normal',
                                            className: f.labelSpacing,
                                            children: ['Element updated at: ', new Date().toString()]
                                        }),
                                        (0, i.jsx)(p.DS, {
                                            errorLabel: v.CONFIGURABLE,
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
                className: f.labelSpacing,
                children: 'Current Element Options:'
            }),
            (0, i.jsx)(u.Z, {
                className: f.markdown,
                children: ''.concat('``', ' ').concat(R(n), ' ').concat('``')
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: f.labelSpacing,
                children: 'Current Express Checkout Element Options:'
            }),
            (0, i.jsx)(u.Z, {
                className: f.markdown,
                children: ''.concat('``', ' ').concat(R(d), ' ').concat('``')
            }),
            x
        ]
    });
}
function D() {
    return (0, i.jsxs)(p.$0, {
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Stripe Express Checkout Buttons'
            }),
            (0, i.jsx)(p.E_, {
                label: v.DEFAULT,
                children: (0, i.jsx)('div', {
                    children: (0, i.jsx)(p.DS, {
                        errorLabel: v.DEFAULT,
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
                let t = v[e];
                return (0, i.jsx)(
                    p.E_,
                    {
                        label: t,
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: f.labelSpacing,
                                    children: 'expressCheckoutElement.options:'
                                }),
                                (0, i.jsx)(u.Z, {
                                    className: f.markdown,
                                    children: ''.concat('``').concat(R(A[e]), ' ').concat('``')
                                }),
                                (0, i.jsx)(p.DS, {
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
            (0, i.jsx)(p.E_, {
                label: v.CONFIGURABLE,
                children: (0, i.jsx)(P, {})
            })
        ]
    });
}
