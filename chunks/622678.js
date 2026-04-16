"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(827734),
    u = n(397927),
    c = n(812745),
    d = n(985018),
    _ = n(50579),
    f = n(482188);
let p = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: a, updateCompleted: p, onFocus: h, onBlur: m } = e,
        [E, g] = i.useState(c.Be.UNKNOWN),
        [A, I] = i.useState(!1),
        [T, S] = i.useState(!1),
        [y, v] = i.useState(null),
        [N, C] = i.useState({}),
        R = (0, s.useElements)(),
        O = i.useCallback(() => {
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
        b = i.useCallback(
            (e) => {
                T || e.empty || S(!0), null != p && p(e.complete), null != e.error && I(!1);
            },
            [T, p],
        ),
        D = i.useCallback(() => {
            I(!0), h?.();
        }, [h]),
        L = i.useCallback(() => {
            I(!1), m?.();
        }, [m]),
        w = i.useCallback(() => {
            if (null != R)
                switch (n) {
                    case "cardNumber": {
                        let e = R.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            E !== e.brand && g(e.brand),
                                e.empty && T
                                    ? v(d.intl.string(d.t.eOIfuy))
                                    : null != e.error
                                      ? v(d.intl.string(d.t.x4pWtJ))
                                      : v(null),
                                b(e);
                        }),
                            e.on("focus", D),
                            e.on("blur", L);
                        break;
                    }
                    case "cardExpiry": {
                        let e = R.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && T) ? v(d.intl.string(d.t["9/zZdl"])) : v(null), b(e);
                        }),
                            e.on("focus", D),
                            e.on("blur", L);
                        break;
                    }
                    case "cardCvc": {
                        let e = R.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && T) ? v(d.intl.string(d.t.ro4isZ)) : v(null), b(e);
                        }),
                            e.on("focus", D),
                            e.on("blur", L);
                    }
                }
        }, [L, b, D, E, R, T, n]);
    i.useEffect(
        () => (
            w(),
            () => {
                O();
            }
        ),
        [w, O],
    );
    let M = (0, u.rdh)(l.A.colors.TEXT_SUBTLE).hex(),
        P = (0, u.rdh)(l.A.colors.TEXT_STRONG).hex();
    function x() {
        return o()(_.vB, { [_.Tn]: null !== y, [_.iH]: A, [_.yD]: "cardNumber" === n });
    }
    function k() {
        switch (n) {
            case "cardNumber":
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Ay, { className: _.Ie, type: E, flipped: a }),
                        (0, r.jsx)(s.CardNumberElement, {
                            options: { style: N, placeholder: d.intl.string(d.t.gPRHfw), disableLink: !1 },
                            className: x(),
                        }),
                    ],
                });
            case "cardExpiry":
                return (0, r.jsx)(s.CardExpiryElement, {
                    options: { style: N, placeholder: d.intl.string(d.t.xeEWQ6) },
                    className: x(),
                });
            case "cardCvc":
                return (0, r.jsx)(s.CardCvcElement, {
                    options: { style: N, placeholder: d.intl.string(d.t.wZz04F) },
                    className: x(),
                });
        }
    }
    return (
        i.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                r = n.getPropertyValue("font-family");
            C({
                base: {
                    fontFamily: r,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: P,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: M },
                },
            });
        }, [t, M, P]),
        (0, r.jsxs)("div", {
            className: _.Zm,
            "data-stripe-type": n,
            children: [(0, r.jsx)("div", { ref: t, className: o()(_.iw, f.hF) }), k(), (0, r.jsx)(u.dzK, { error: y })],
        })
    );
};
