n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(734530),
    a = n(120356),
    s = n.n(a),
    l = n(692547),
    c = n(481060),
    u = n(219929),
    d = n(388032),
    f = n(166188),
    _ = n(953100);
let p = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: a, updateCompleted: p, onFocus: h, onBlur: m } = e,
        [g, E] = i.useState(u.Qy.UNKNOWN),
        [b, y] = i.useState(!1),
        [v, O] = i.useState(!1),
        [I, S] = i.useState(null),
        [T, N] = i.useState({}),
        A = (0, o.useElements)(),
        C = i.useCallback(() => {
            if (null != A)
                switch (n) {
                    case 'cardNumber': {
                        let e = A.getElement(o.CardNumberElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardExpiry': {
                        let e = A.getElement(o.CardExpiryElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardCvc': {
                        let e = A.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                    }
                }
        }, [A, n]),
        R = i.useCallback(
            (e) => {
                v || e.empty || O(!0), null != p && p(e.complete), null != e.error && y(!1);
            },
            [v, p]
        ),
        P = i.useCallback(() => {
            y(!0), null == h || h();
        }, [h]),
        w = i.useCallback(() => {
            y(!1), null == m || m();
        }, [m]),
        D = i.useCallback(() => {
            if (null != A)
                switch (n) {
                    case 'cardNumber': {
                        let e = A.getElement(o.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            g !== e.brand && E(e.brand), e.empty && v ? S(d.NW.string(d.t.eOIfu7)) : null != e.error ? S(d.NW.string(d.t.x4pWtL)) : S(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = A.getElement(o.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && v) ? S(d.NW.string(d.t['9/zZdn'])) : S(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                        break;
                    }
                    case 'cardCvc': {
                        let e = A.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && v) ? S(d.NW.string(d.t.ro4isb)) : S(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                    }
                }
        }, [w, R, P, g, A, v, n]);
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
        return s()(f.cardInput, {
            [f.cardInputError]: null !== I,
            [f.cardInputFocused]: b,
            [f.cardNumberInput]: 'cardNumber' === n
        });
    }
    function k() {
        switch (n) {
            case 'cardNumber':
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.ZP, {
                            className: f.cardIcon,
                            type: g,
                            flipped: a
                        }),
                        (0, r.jsx)(o.CardNumberElement, {
                            options: {
                                style: T,
                                placeholder: d.NW.string(d.t.gPRHf3),
                                disableLink: !1
                            },
                            className: M()
                        })
                    ]
                });
            case 'cardExpiry':
                return (0, r.jsx)(o.CardExpiryElement, {
                    options: {
                        style: T,
                        placeholder: d.NW.string(d.t.xeEWQ0)
                    },
                    className: M()
                });
            case 'cardCvc':
                return (0, r.jsx)(o.CardCvcElement, {
                    options: {
                        style: T,
                        placeholder: d.NW.string(d.t.wZz04O)
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
            N({
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
            className: f.cardNumberWrapper,
            'data-stripe-type': n,
            children: [
                (0, r.jsx)('div', {
                    ref: t,
                    className: s()(f.hiddenDiv, _.input)
                }),
                k(),
                (0, r.jsx)(c.pdY, { error: I })
            ]
        })
    );
};
