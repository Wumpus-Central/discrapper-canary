n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(289008),
    o = n(120356),
    s = n.n(o),
    l = n(692547),
    c = n(481060),
    u = n(219929),
    d = n(388032),
    f = n(785778),
    _ = n(219990);
let p = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: o, updateCompleted: p, onFocus: h, onBlur: m } = e,
        [g, E] = i.useState(u.Qy.UNKNOWN),
        [b, y] = i.useState(!1),
        [O, v] = i.useState(!1),
        [I, S] = i.useState(null),
        [T, A] = i.useState({}),
        C = (0, a.useElements)(),
        N = i.useCallback(() => {
            if (null != C)
                switch (n) {
                    case "cardNumber": {
                        let e = C.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = C.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = C.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [C, n]),
        R = i.useCallback(
            (e) => {
                O || e.empty || v(!0), null != p && p(e.complete), null != e.error && y(!1);
            },
            [O, p],
        ),
        P = i.useCallback(() => {
            y(!0), null == h || h();
        }, [h]),
        w = i.useCallback(() => {
            y(!1), null == m || m();
        }, [m]),
        D = i.useCallback(() => {
            if (null != C)
                switch (n) {
                    case "cardNumber": {
                        let e = C.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            g !== e.brand && E(e.brand),
                                e.empty && O
                                    ? S(d.intl.string(d.t.eOIfuy))
                                    : null != e.error
                                      ? S(d.intl.string(d.t.x4pWtJ))
                                      : S(null),
                                R(e);
                        }),
                            e.on("focus", P),
                            e.on("blur", w);
                        break;
                    }
                    case "cardExpiry": {
                        let e = C.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && O) ? S(d.intl.string(d.t["9/zZdl"])) : S(null), R(e);
                        }),
                            e.on("focus", P),
                            e.on("blur", w);
                        break;
                    }
                    case "cardCvc": {
                        let e = C.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && O) ? S(d.intl.string(d.t.ro4isZ)) : S(null), R(e);
                        }),
                            e.on("focus", P),
                            e.on("blur", w);
                    }
                }
        }, [w, R, P, g, C, O, n]);
    i.useEffect(
        () => (
            D(),
            () => {
                N();
            }
        ),
        [D, N],
    );
    let x = (0, c.dQu)(l.Z.colors.TEXT_SECONDARY).hex(),
        L = (0, c.dQu)(l.Z.colors.TEXT_PRIMARY).hex();
    function M() {
        return s()(f.cardInput, {
            [f.cardInputError]: null !== I,
            [f.cardInputFocused]: b,
            [f.cardNumberInput]: "cardNumber" === n,
        });
    }
    function j() {
        switch (n) {
            case "cardNumber":
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.ZP, {
                            className: f.cardIcon,
                            type: g,
                            flipped: o,
                        }),
                        (0, r.jsx)(a.CardNumberElement, {
                            options: {
                                style: T,
                                placeholder: d.intl.string(d.t.gPRHfw),
                                disableLink: !1,
                            },
                            className: M(),
                        }),
                    ],
                });
            case "cardExpiry":
                return (0, r.jsx)(a.CardExpiryElement, {
                    options: {
                        style: T,
                        placeholder: d.intl.string(d.t.xeEWQ6),
                    },
                    className: M(),
                });
            case "cardCvc":
                return (0, r.jsx)(a.CardCvcElement, {
                    options: {
                        style: T,
                        placeholder: d.intl.string(d.t.wZz04F),
                    },
                    className: M(),
                });
        }
    }
    return (
        i.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                r = n.getPropertyValue("font-family");
            A({
                base: {
                    fontFamily: r,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: L,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: x },
                },
            });
        }, [t, x, L]),
        (0, r.jsxs)("div", {
            className: f.cardNumberWrapper,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", {
                    ref: t,
                    className: s()(f.hiddenDiv, _.input),
                }),
                j(),
                (0, r.jsx)(c.pdY, { error: I }),
            ],
        })
    );
};
