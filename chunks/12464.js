var i,
    a,
    o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(734530);
var c = r(120356),
    d = r.n(c),
    f = r(692547),
    p = r(481060),
    h = r(219929),
    _ = r(388032),
    m = r(919616),
    g = r(716722);
function E(e) {
    let n = l.useRef(null),
        { stripeType: r, flipped: i, updateCompleted: a, onFocus: o, onBlur: c } = e,
        [E, v] = l.useState(h.Qy.UNKNOWN),
        [y, b] = l.useState(!1),
        [I, T] = l.useState(!1),
        [S, A] = l.useState(null),
        [C, N] = l.useState({}),
        R = (0, u.useElements)(),
        O = l.useCallback(() => {
            if (null != R)
                switch (r) {
                    case 'cardNumber': {
                        let e = R.getElement(u.CardNumberElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardExpiry': {
                        let e = R.getElement(u.CardExpiryElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardCvc': {
                        let e = R.getElement(u.CardCvcElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                    }
                }
        }, [R, r]),
        D = l.useCallback(
            (e) => {
                !I && !e.empty && T(!0), null != a && a(e.complete), null != e.error && b(!1);
            },
            [I, a]
        ),
        L = l.useCallback(() => {
            b(!0), null == o || o();
        }, [o]),
        x = l.useCallback(() => {
            b(!1), null == c || c();
        }, [c]),
        w = l.useCallback(() => {
            if (null != R)
                switch (r) {
                    case 'cardNumber': {
                        let e = R.getElement(u.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            E !== e.brand && v(e.brand), e.empty && I ? A(_.intl.string(_.t.eOIfu7)) : null != e.error ? A(_.intl.string(_.t.x4pWtL)) : A(null), D(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', x);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = R.getElement(u.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && I) ? A(_.intl.string(_.t['9/zZdn'])) : A(null), D(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', x);
                        break;
                    }
                    case 'cardCvc': {
                        let e = R.getElement(u.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && I) ? A(_.intl.string(_.t.ro4isb)) : A(null), D(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', x);
                    }
                }
        }, [x, D, L, E, R, I, r]);
    l.useEffect(
        () => (
            w(),
            () => {
                O();
            }
        ),
        [w, O]
    );
    let P = (0, p.useToken)(f.Z.colors.TEXT_SECONDARY).hex(),
        M = (0, p.useToken)(f.Z.colors.TEXT_PRIMARY).hex();
    function k() {
        return d()(m.cardInput, {
            [m.cardInputError]: null !== S,
            [m.cardInputFocused]: y,
            [m.cardNumberInput]: 'cardNumber' === r
        });
    }
    function U() {
        switch (r) {
            case 'cardNumber':
                return (0, s.jsxs)('div', {
                    children: [
                        (0, s.jsx)(h.ZP, {
                            className: m.cardIcon,
                            type: E,
                            flipped: i
                        }),
                        (0, s.jsx)(u.CardNumberElement, {
                            options: {
                                style: C,
                                placeholder: _.intl.string(_.t.gPRHf3),
                                disableLink: !1
                            },
                            className: k()
                        })
                    ]
                });
            case 'cardExpiry':
                return (0, s.jsx)(u.CardExpiryElement, {
                    options: {
                        style: C,
                        placeholder: _.intl.string(_.t.xeEWQ0)
                    },
                    className: k()
                });
            case 'cardCvc':
                return (0, s.jsx)(u.CardCvcElement, {
                    options: {
                        style: C,
                        placeholder: _.intl.string(_.t.wZz04O)
                    },
                    className: k()
                });
        }
    }
    return (
        l.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let r = window.getComputedStyle(e),
                i = r.getPropertyValue('font-family'),
                a = r.getPropertyValue('font-weight');
            N({
                base: {
                    fontFamily: i,
                    fontWeight: a,
                    color: M,
                    fontSize: r.getPropertyValue('font-size'),
                    '::placeholder': { color: P }
                }
            });
        }, [n, P, M]),
        (0, s.jsxs)('div', {
            className: d()(m.cardNumberWrapper),
            'data-stripe-type': r,
            children: [
                (0, s.jsx)('div', {
                    ref: n,
                    className: d()(m.hiddenDiv, g.input)
                }),
                U(),
                (0, s.jsx)(p.InputError, { error: S })
            ]
        })
    );
}
!(function (e) {
    (e.CardNumber = 'cardNumber'), (e.CardExpiry = 'cardExpiry'), (e.CardCvc = 'cardCvc');
})(i || (i = {})),
    !(function (e) {
        (e.Change = 'change'), (e.Focus = 'focus'), (e.Blur = 'blur');
    })(a || (a = {})),
    (n.Z = E);
