n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(734530),
    s = n(120356),
    o = n.n(s),
    l = n(692547),
    u = n(481060),
    c = n(219929),
    d = n(388032),
    f = n(187839),
    _ = n(487768);
let p = function (e) {
    let t = r.useRef(null),
        { stripeType: n, flipped: s, updateCompleted: p, onFocus: h, onBlur: m } = e,
        [g, E] = r.useState(c.Qy.UNKNOWN),
        [v, y] = r.useState(!1),
        [I, T] = r.useState(!1),
        [b, S] = r.useState(null),
        [A, N] = r.useState({}),
        C = (0, a.useElements)(),
        R = r.useCallback(() => {
            if (null != C)
                switch (n) {
                    case 'cardNumber': {
                        let e = C.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardExpiry': {
                        let e = C.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardCvc': {
                        let e = C.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                    }
                }
        }, [C, n]),
        O = r.useCallback(
            (e) => {
                I || e.empty || T(!0), null != p && p(e.complete), null != e.error && y(!1);
            },
            [I, p]
        ),
        D = r.useCallback(() => {
            y(!0), null == h || h();
        }, [h]),
        L = r.useCallback(() => {
            y(!1), null == m || m();
        }, [m]),
        x = r.useCallback(() => {
            if (null != C)
                switch (n) {
                    case 'cardNumber': {
                        let e = C.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            g !== e.brand && E(e.brand), e.empty && I ? S(d.intl.string(d.t.eOIfu7)) : null != e.error ? S(d.intl.string(d.t.x4pWtL)) : S(null), O(e);
                        }),
                            e.on('focus', D),
                            e.on('blur', L);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = C.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && I) ? S(d.intl.string(d.t['9/zZdn'])) : S(null), O(e);
                        }),
                            e.on('focus', D),
                            e.on('blur', L);
                        break;
                    }
                    case 'cardCvc': {
                        let e = C.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && I) ? S(d.intl.string(d.t.ro4isb)) : S(null), O(e);
                        }),
                            e.on('focus', D),
                            e.on('blur', L);
                    }
                }
        }, [L, O, D, g, C, I, n]);
    r.useEffect(
        () => (
            x(),
            () => {
                R();
            }
        ),
        [x, R]
    );
    let w = (0, u.dQu)(l.Z.colors.TEXT_SECONDARY).hex(),
        P = (0, u.dQu)(l.Z.colors.TEXT_PRIMARY).hex();
    function M() {
        return o()(f.cardInput, {
            [f.cardInputError]: null !== b,
            [f.cardInputFocused]: v,
            [f.cardNumberInput]: 'cardNumber' === n
        });
    }
    function k() {
        switch (n) {
            case 'cardNumber':
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(c.ZP, {
                            className: f.cardIcon,
                            type: g,
                            flipped: s
                        }),
                        (0, i.jsx)(a.CardNumberElement, {
                            options: {
                                style: A,
                                placeholder: d.intl.string(d.t.gPRHf3),
                                disableLink: !1
                            },
                            className: M()
                        })
                    ]
                });
            case 'cardExpiry':
                return (0, i.jsx)(a.CardExpiryElement, {
                    options: {
                        style: A,
                        placeholder: d.intl.string(d.t.xeEWQ0)
                    },
                    className: M()
                });
            case 'cardCvc':
                return (0, i.jsx)(a.CardCvcElement, {
                    options: {
                        style: A,
                        placeholder: d.intl.string(d.t.wZz04O)
                    },
                    className: M()
                });
        }
    }
    return (
        r.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                i = n.getPropertyValue('font-family');
            N({
                base: {
                    fontFamily: i,
                    fontWeight: n.getPropertyValue('font-weight'),
                    color: P,
                    fontSize: n.getPropertyValue('font-size'),
                    '::placeholder': { color: w }
                }
            });
        }, [t, w, P]),
        (0, i.jsxs)('div', {
            className: o()(f.cardNumberWrapper),
            'data-stripe-type': n,
            children: [
                (0, i.jsx)('div', {
                    ref: t,
                    className: o()(f.hiddenDiv, _.input)
                }),
                k(),
                (0, i.jsx)(u.pdY, { error: b })
            ]
        })
    );
};
