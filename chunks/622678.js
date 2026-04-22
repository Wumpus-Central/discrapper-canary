n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    a = n(342393),
    r = n(503698),
    s = n.n(r),
    o = n(827734),
    u = n(602853),
    c = n(511274),
    d = n(812745),
    p = n(985018),
    m = n(670739),
    h = n(661772);
let A = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: r, updateCompleted: A, onFocus: _, onBlur: C } = e,
        [E, y] = i.useState(d.Be.UNKNOWN),
        [f, P] = i.useState(!1),
        [S, x] = i.useState(!1),
        [T, N] = i.useState(null),
        [g, I] = i.useState({}),
        v = (0, a.useElements)(),
        b = i.useCallback(() => {
            if (null != v)
                switch (n) {
                    case "cardNumber": {
                        let e = v.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = v.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = v.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [v, n]),
        R = i.useCallback(
            (e) => {
                S || e.empty || x(!0), null != A && A(e.complete), null != e.error && P(!1);
            },
            [S, A],
        ),
        M = i.useCallback(() => {
            P(!0), _?.();
        }, [_]),
        j = i.useCallback(() => {
            P(!1), C?.();
        }, [C]),
        L = i.useCallback(() => {
            if (null != v)
                switch (n) {
                    case "cardNumber": {
                        let e = v.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            E !== e.brand && y(e.brand),
                                e.empty && S
                                    ? N(p.intl.string(p.t.eOIfuy))
                                    : null != e.error
                                      ? N(p.intl.string(p.t.x4pWtJ))
                                      : N(null),
                                R(e);
                        }),
                            e.on("focus", M),
                            e.on("blur", j);
                        break;
                    }
                    case "cardExpiry": {
                        let e = v.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && S) ? N(p.intl.string(p.t["9/zZdl"])) : N(null), R(e);
                        }),
                            e.on("focus", M),
                            e.on("blur", j);
                        break;
                    }
                    case "cardCvc": {
                        let e = v.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && S) ? N(p.intl.string(p.t.ro4isZ)) : N(null), R(e);
                        }),
                            e.on("focus", M),
                            e.on("blur", j);
                    }
                }
        }, [j, R, M, E, v, S, n]);
    i.useEffect(
        () => (
            L(),
            () => {
                b();
            }
        ),
        [L, b],
    );
    let O = (0, u.r)(o.A.colors.TEXT_SUBTLE).hex(),
        D = (0, u.r)(o.A.colors.TEXT_STRONG).hex();
    function U() {
        return s()(m.vB, { [m.Tn]: null !== T, [m.iH]: f, [m.yD]: "cardNumber" === n });
    }
    return (
        i.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            I({
                base: {
                    fontFamily: l,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: D,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: O },
                },
            });
        }, [t, O, D]),
        (0, l.jsxs)("div", {
            className: m.Zm,
            "data-stripe-type": n,
            children: [
                (0, l.jsx)("div", { ref: t, className: s()(m.iw, h.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(d.Ay, { className: m.Ie, type: E, flipped: r }),
                                    (0, l.jsx)(a.CardNumberElement, {
                                        options: { style: g, placeholder: p.intl.string(p.t.gPRHfw), disableLink: !1 },
                                        className: U(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, l.jsx)(a.CardExpiryElement, {
                                options: { style: g, placeholder: p.intl.string(p.t.xeEWQ6) },
                                className: U(),
                            });
                        case "cardCvc":
                            return (0, l.jsx)(a.CardCvcElement, {
                                options: { style: g, placeholder: p.intl.string(p.t.wZz04F) },
                                className: U(),
                            });
                    }
                })(),
                (0, l.jsx)(c.U, { error: T }),
            ],
        })
    );
};
