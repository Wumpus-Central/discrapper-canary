"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(503698),
    o = n.n(s),
    l = n(827734),
    u = n(397927),
    c = n(812745),
    d = n(985018),
    _ = n(173900),
    f = n(713545);
let p = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: s, updateCompleted: p, onFocus: h, onBlur: m } = e,
        [g, E] = i.useState(c.Be.UNKNOWN),
        [A, I] = i.useState(!1),
        [T, y] = i.useState(!1),
        [S, v] = i.useState(null),
        [C, b] = i.useState({}),
        N = (0, a.useElements)(),
        R = i.useCallback(() => {
            if (null != N)
                switch (n) {
                    case "cardNumber": {
                        let e = N.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = N.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = N.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [N, n]),
        O = i.useCallback(
            (e) => {
                T || e.empty || y(!0), null != p && p(e.complete), null != e.error && I(!1);
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
            if (null != N)
                switch (n) {
                    case "cardNumber": {
                        let e = N.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            g !== e.brand && E(e.brand),
                                e.empty && T
                                    ? v(d.intl.string(d.t.eOIfuy))
                                    : null != e.error
                                      ? v(d.intl.string(d.t.x4pWtJ))
                                      : v(null),
                                O(e);
                        }),
                            e.on("focus", D),
                            e.on("blur", L);
                        break;
                    }
                    case "cardExpiry": {
                        let e = N.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && T) ? v(d.intl.string(d.t["9/zZdl"])) : v(null), O(e);
                        }),
                            e.on("focus", D),
                            e.on("blur", L);
                        break;
                    }
                    case "cardCvc": {
                        let e = N.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && T) ? v(d.intl.string(d.t.ro4isZ)) : v(null), O(e);
                        }),
                            e.on("focus", D),
                            e.on("blur", L);
                    }
                }
        }, [L, O, D, g, N, T, n]);
    i.useEffect(
        () => (
            w(),
            () => {
                R();
            }
        ),
        [w, R],
    );
    let x = (0, u.rdh)(l.A.colors.TEXT_SUBTLE).hex(),
        P = (0, u.rdh)(l.A.colors.TEXT_STRONG).hex();
    function M() {
        return o()(_.vB, { [_.Tn]: null !== S, [_.iH]: A, [_.yD]: "cardNumber" === n });
    }
    function k() {
        switch (n) {
            case "cardNumber":
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Ay, { className: _.Ie, type: g, flipped: s }),
                        (0, r.jsx)(a.CardNumberElement, {
                            options: { style: C, placeholder: d.intl.string(d.t.gPRHfw), disableLink: !1 },
                            className: M(),
                        }),
                    ],
                });
            case "cardExpiry":
                return (0, r.jsx)(a.CardExpiryElement, {
                    options: { style: C, placeholder: d.intl.string(d.t.xeEWQ6) },
                    className: M(),
                });
            case "cardCvc":
                return (0, r.jsx)(a.CardCvcElement, {
                    options: { style: C, placeholder: d.intl.string(d.t.wZz04F) },
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
            b({
                base: {
                    fontFamily: r,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: P,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: x },
                },
            });
        }, [t, x, P]),
        (0, r.jsxs)("div", {
            className: _.Zm,
            "data-stripe-type": n,
            children: [(0, r.jsx)("div", { ref: t, className: o()(_.iw, f.hF) }), k(), (0, r.jsx)(u.dzK, { error: S })],
        })
    );
};
