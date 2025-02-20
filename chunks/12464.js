n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(734530),
    a = n(120356),
    s = n.n(a),
    l = n(692547),
    c = n(481060),
    u = n(219929),
    d = n(388032),
    f = n(689516),
    p = n(630824);
let _ = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: a, updateCompleted: _, onFocus: h, onBlur: m } = e,
        [g, E] = i.useState(u.Qy.UNKNOWN),
        [v, b] = i.useState(!1),
        [y, O] = i.useState(!1),
        [S, I] = i.useState(null),
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
                y || e.empty || O(!0), null != _ && _(e.complete), null != e.error && b(!1);
            },
            [y, _]
        ),
        P = i.useCallback(() => {
            b(!0), null == h || h();
        }, [h]),
        w = i.useCallback(() => {
            b(!1), null == m || m();
        }, [m]),
        D = i.useCallback(() => {
            if (null != A)
                switch (n) {
                    case 'cardNumber': {
                        let e = A.getElement(o.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            g !== e.brand && E(e.brand), e.empty && y ? I(d.NW.string(d.t.eOIfu7)) : null != e.error ? I(d.NW.string(d.t.x4pWtL)) : I(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = A.getElement(o.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && y) ? I(d.NW.string(d.t['9/zZdn'])) : I(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                        break;
                    }
                    case 'cardCvc': {
                        let e = A.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && y) ? I(d.NW.string(d.t.ro4isb)) : I(null), R(e);
                        }),
                            e.on('focus', P),
                            e.on('blur', w);
                    }
                }
        }, [w, R, P, g, A, y, n]);
    i.useEffect(
        () => (
            D(),
            () => {
                C();
            }
        ),
        [D, C]
    );
    let x = (0, c.dQu)(l.Z.colors.TEXT_SECONDARY).hex(),
        L = (0, c.dQu)(l.Z.colors.TEXT_PRIMARY).hex();
    function M() {
        return s()(f.cardInput, {
            [f.cardInputError]: null !== S,
            [f.cardInputFocused]: v,
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
                    color: L,
                    fontSize: n.getPropertyValue('font-size'),
                    '::placeholder': { color: x }
                }
            });
        }, [t, x, L]),
        (0, r.jsxs)('div', {
            className: s()(f.cardNumberWrapper),
            'data-stripe-type': n,
            children: [
                (0, r.jsx)('div', {
                    ref: t,
                    className: s()(f.hiddenDiv, p.input)
                }),
                k(),
                (0, r.jsx)(c.pdY, { error: S })
            ]
        })
    );
};
