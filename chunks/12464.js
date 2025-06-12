n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(957957),
    o = n(120356),
    s = n.n(o),
    l = n(692547),
    c = n(481060),
    u = n(219929),
    d = n(388032),
    _ = n(166188),
    f = n(953100);
let p = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: o, updateCompleted: p, onFocus: h, onBlur: m } = e,
        [g, E] = i.useState(u.Qy.UNKNOWN),
        [b, y] = i.useState(!1),
        [O, v] = i.useState(!1),
        [I, T] = i.useState(null),
        [S, A] = i.useState({}),
        N = (0, a.useElements)(),
        C = i.useCallback(() => {
            if (null != N)
                switch (n) {
                    case 'cardNumber': {
                        let e = N.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardExpiry': {
                        let e = N.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardCvc': {
                        let e = N.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                    }
                }
        }, [N, n]),
        R = i.useCallback(
            (e) => {
                O || e.empty || v(!0), null != p && p(e.complete), null != e.error && y(!1);
            },
            [O, p]
        ),
        P = i.useCallback(() => {
            y(!0), null == h || h();
        }, [h]),
        w = i.useCallback(() => {
            y(!1), null == m || m();
        }, [m]),
        D = i.useCallback(() => {
            if (null != N)
                switch (n) {
                    case 'cardNumber': {
                        let e = N.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            g !== e.brand && E(e.brand), e.empty && O ? T(d.intl.string(d.t.eOIfu7)) : null != e.error ? T(d.intl.string(d.t.x4pWtL)) : T(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = N.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && O) ? T(d.intl.string(d.t['9/zZdn'])) : T(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                        break;
                    }
                    case 'cardCvc': {
                        let e = N.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && O) ? T(d.intl.string(d.t.ro4isb)) : T(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                    }
                }
        }, [w, R, P, g, N, O, n]);
    i.useEffect(
        () => (
            D(),
            () => {
                C();
            }
        ),
        [D, C]
    );
    let L = (0, c.dQu)(l.Z.colors.TEXT_SECONDARY).hex(),
        x = (0, c.dQu)(l.Z.colors.TEXT_PRIMARY).hex();
    function M() {
        return s()(_.cardInput, {
            [_.cardInputError]: null !== I,
            [_.cardInputFocused]: b,
            [_.cardNumberInput]: 'cardNumber' === n
        });
    }
    function k() {
        switch (n) {
            case 'cardNumber':
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.ZP, {
                            className: _.cardIcon,
                            type: g,
                            flipped: o
                        }),
                        (0, r.jsx)(a.CardNumberElement, {
                            options: {
                                style: S,
                                placeholder: d.intl.string(d.t.gPRHf3),
                                disableLink: !1
                            },
                            className: M()
                        })
                    ]
                });
            case 'cardExpiry':
                return (0, r.jsx)(a.CardExpiryElement, {
                    options: {
                        style: S,
                        placeholder: d.intl.string(d.t.xeEWQ0)
                    },
                    className: M()
                });
            case 'cardCvc':
                return (0, r.jsx)(a.CardCvcElement, {
                    options: {
                        style: S,
                        placeholder: d.intl.string(d.t.wZz04O)
                    },
                    className: M()
                });
        }
    }
    return (
        i.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                r = n.getPropertyValue('font-family');
            A({
                base: {
                    fontFamily: r,
                    fontWeight: n.getPropertyValue('font-weight'),
                    color: x,
                    fontSize: n.getPropertyValue('font-size'),
                    '::placeholder': { color: L }
                }
            });
        }, [t, L, x]),
        (0, r.jsxs)('div', {
            className: _.cardNumberWrapper,
            'data-stripe-type': n,
            children: [
                (0, r.jsx)('div', {
                    ref: t,
                    className: s()(_.hiddenDiv, f.input)
                }),
                k(),
                (0, r.jsx)(c.pdY, { error: I })
            ]
        })
    );
};
