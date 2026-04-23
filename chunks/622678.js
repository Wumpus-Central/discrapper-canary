"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(827734),
    u = n(602853),
    c = n(511274),
    d = n(812745),
    _ = n(985018),
    f = n(50579),
    p = n(482188);
let h = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: a, updateCompleted: h, onFocus: E, onBlur: m } = e,
        [g, A] = i.useState(d.Be.UNKNOWN),
        [I, T] = i.useState(!1),
        [S, y] = i.useState(!1),
        [N, v] = i.useState(null),
        [C, O] = i.useState({}),
        R = (0, s.useElements)(),
        b = i.useCallback(() => {
            if (null != R)
                switch (n) {
                    case "cardNumber": {
                        let e = R.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = R.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = R.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [R, n]),
        D = i.useCallback(
            (e) => {
                S || e.empty || y(!0), null != h && h(e.complete), null != e.error && T(!1);
            },
            [S, h],
        ),
        L = i.useCallback(() => {
            T(!0), E?.();
        }, [E]),
        w = i.useCallback(() => {
            T(!1), m?.();
        }, [m]),
        M = i.useCallback(() => {
            if (null != R)
                switch (n) {
                    case "cardNumber": {
                        let e = R.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            g !== e.brand && A(e.brand),
                                e.empty && S
                                    ? v(_.intl.string(_.t.eOIfuy))
                                    : null != e.error
                                      ? v(_.intl.string(_.t.x4pWtJ))
                                      : v(null),
                                D(e);
                        }),
                            e.on("focus", L),
                            e.on("blur", w);
                        break;
                    }
                    case "cardExpiry": {
                        let e = R.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && S) ? v(_.intl.string(_.t["9/zZdl"])) : v(null), D(e);
                        }),
                            e.on("focus", L),
                            e.on("blur", w);
                        break;
                    }
                    case "cardCvc": {
                        let e = R.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && S) ? v(_.intl.string(_.t.ro4isZ)) : v(null), D(e);
                        }),
                            e.on("focus", L),
                            e.on("blur", w);
                    }
                }
        }, [w, D, L, g, R, S, n]);
    i.useEffect(
        () => (
            M(),
            () => {
                b();
            }
        ),
        [M, b],
    );
    let P = (0, u.r)(l.A.colors.TEXT_SUBTLE).hex(),
        x = (0, u.r)(l.A.colors.TEXT_STRONG).hex();
    function k() {
        return o()(f.vB, { [f.Tn]: null !== N, [f.iH]: I, [f.yD]: "cardNumber" === n });
    }
    return (
        i.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                r = n.getPropertyValue("font-family");
            O({
                base: {
                    fontFamily: r,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: x,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: P },
                },
            });
        }, [t, P, x]),
        (0, r.jsxs)("div", {
            className: f.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: o()(f.iw, p.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(d.Ay, { className: f.Ie, type: g, flipped: a }),
                                    (0, r.jsx)(s.CardNumberElement, {
                                        options: { style: C, placeholder: _.intl.string(_.t.gPRHfw), disableLink: !1 },
                                        className: k(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(s.CardExpiryElement, {
                                options: { style: C, placeholder: _.intl.string(_.t.xeEWQ6) },
                                className: k(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(s.CardCvcElement, {
                                options: { style: C, placeholder: _.intl.string(_.t.wZz04F) },
                                className: k(),
                            });
                    }
                })(),
                (0, r.jsx)(c.U, { error: N }),
            ],
        })
    );
};
