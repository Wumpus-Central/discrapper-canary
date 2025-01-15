n(47120);
var a,
    r,
    l,
    s,
    i = n(200651),
    o = n(192379),
    c = n(734530),
    u = n(120356),
    d = n.n(u),
    p = n(692547),
    m = n(481060),
    h = n(219929),
    A = n(388032),
    E = n(556200),
    y = n(520770);
((l = a || (a = {})).CardNumber = 'cardNumber'), (l.CardExpiry = 'cardExpiry'), (l.CardCvc = 'cardCvc'), ((s = r || (r = {})).Change = 'change'), (s.Focus = 'focus'), (s.Blur = 'blur');
t.Z = function (e) {
    let t = o.useRef(null),
        { stripeType: n, flipped: a, updateCompleted: r, onFocus: l, onBlur: s } = e,
        [u, f] = o.useState(h.Qy.UNKNOWN),
        [N, P] = o.useState(!1),
        [_, b] = o.useState(!1),
        [g, C] = o.useState(null),
        [T, I] = o.useState({}),
        S = (0, c.useElements)(),
        v = o.useCallback(() => {
            if (null != S)
                switch (n) {
                    case 'cardNumber': {
                        let e = S.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardExpiry': {
                        let e = S.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardCvc': {
                        let e = S.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                    }
                }
        }, [S, n]),
        R = o.useCallback(
            (e) => {
                !_ && !e.empty && b(!0), null != r && r(e.complete), null != e.error && P(!1);
            },
            [_, r]
        ),
        x = o.useCallback(() => {
            P(!0), null == l || l();
        }, [l]),
        L = o.useCallback(() => {
            P(!1), null == s || s();
        }, [s]),
        M = o.useCallback(() => {
            if (null != S)
                switch (n) {
                    case 'cardNumber': {
                        let e = S.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            u !== e.brand && f(e.brand), e.empty && _ ? C(A.intl.string(A.t.eOIfu7)) : null != e.error ? C(A.intl.string(A.t.x4pWtL)) : C(null), R(e);
                        }),
                            e.on('focus', x),
                            e.on('blur', L);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = S.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && _) ? C(A.intl.string(A.t['9/zZdn'])) : C(null), R(e);
                        }),
                            e.on('focus', x),
                            e.on('blur', L);
                        break;
                    }
                    case 'cardCvc': {
                        let e = S.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && _) ? C(A.intl.string(A.t.ro4isb)) : C(null), R(e);
                        }),
                            e.on('focus', x),
                            e.on('blur', L);
                    }
                }
        }, [L, R, x, u, S, _, n]);
    o.useEffect(
        () => (
            M(),
            () => {
                v();
            }
        ),
        [M, v]
    );
    let O = (0, m.useToken)(p.Z.colors.TEXT_SECONDARY).hex(),
        D = (0, m.useToken)(p.Z.colors.TEXT_PRIMARY).hex();
    function w() {
        return d()(E.cardInput, {
            [E.cardInputError]: null !== g,
            [E.cardInputFocused]: N,
            [E.cardNumberInput]: 'cardNumber' === n
        });
    }
    return (
        o.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                a = n.getPropertyValue('font-family'),
                r = n.getPropertyValue('font-weight');
            I({
                base: {
                    fontFamily: a,
                    fontWeight: r,
                    color: D,
                    fontSize: n.getPropertyValue('font-size'),
                    '::placeholder': { color: O }
                }
            });
        }, [t, O, D]),
        (0, i.jsxs)('div', {
            className: d()(E.cardNumberWrapper),
            'data-stripe-type': n,
            children: [
                (0, i.jsx)('div', {
                    ref: t,
                    className: d()(E.hiddenDiv, y.input)
                }),
                (function () {
                    switch (n) {
                        case 'cardNumber':
                            return (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(h.ZP, {
                                        className: E.cardIcon,
                                        type: u,
                                        flipped: a
                                    }),
                                    (0, i.jsx)(c.CardNumberElement, {
                                        options: {
                                            style: T,
                                            placeholder: A.intl.string(A.t.gPRHf3),
                                            disableLink: !1
                                        },
                                        className: w()
                                    })
                                ]
                            });
                        case 'cardExpiry':
                            return (0, i.jsx)(c.CardExpiryElement, {
                                options: {
                                    style: T,
                                    placeholder: A.intl.string(A.t.xeEWQ0)
                                },
                                className: w()
                            });
                        case 'cardCvc':
                            return (0, i.jsx)(c.CardCvcElement, {
                                options: {
                                    style: T,
                                    placeholder: A.intl.string(A.t.wZz04O)
                                },
                                className: w()
                            });
                    }
                })(),
                (0, i.jsx)(m.InputError, { error: g })
            ]
        })
    );
};
