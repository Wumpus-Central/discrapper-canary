n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(507274),
    l = n(481060),
    c = n(219929),
    u = n(594174),
    d = n(754103),
    f = n(795487),
    p = n(388032),
    _ = n(954873),
    m = n(189068);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        a = i.useRef(t),
        [h, E] = i.useState(!1),
        [y, O] = i.useState({}),
        [v, S] = i.useState({
            name: "",
            country: "",
            postalCode: "",
        }),
        [I, T] = i.useState({}),
        [C, A] = i.useState({}),
        { setFocusLockDisabled: N } = i.useContext(s.M);
    i.useEffect(() => () => {
        void 0 !== N && N(!1);
    });
    let P = i.useCallback(() => {
        void 0 !== N && N(!0);
    }, [N]);
    function R(e, t) {
        !!y[e] !== t && O((n) => b(g({}, n), { [e]: t }));
    }
    let D = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || I.name) && "" === v.name && (t.name = p.intl.string(p.t.lIkVsi)), t;
        },
        [I, v],
    );
    function w() {
        A(D());
    }
    i.useEffect(() => {
        let e = y.cardNumber && y.cardExpiry && y.cardCvc && 0 === Object.keys(D(!0)).length;
        a.current({ name: v.name }, !!e);
    }, [y, v, D]);
    let x = [
        {
            fields: [
                {
                    id: "card-number",
                    name: "cardNumber",
                    title: () => p.intl.string(p.t.cVyJ3o),
                    getClassNameForLayout: () => m.width100,
                    renderInput: () =>
                        (0, r.jsx)(f.Z, {
                            stripeType: "cardNumber",
                            flipped: h,
                            updateCompleted: (e) => R("cardNumber", e),
                            onFocus: P,
                        }),
                },
            ],
        },
        {
            fields: [
                {
                    id: "card-expiration-date",
                    name: "cardExpiry",
                    title: () => p.intl.string(p.t["CeBa/4"]),
                    getClassNameForLayout: () => m.width50,
                    renderInput: () =>
                        (0, r.jsx)(f.Z, {
                            stripeType: "cardExpiry",
                            updateCompleted: (e) => R("cardExpiry", e),
                            onFocus: P,
                        }),
                },
                {
                    id: "card-cvc",
                    name: "cardCvc",
                    title: () => p.intl.string(p.t.Fd3rOz),
                    getClassNameForLayout: () => m.width50,
                    renderInput: () =>
                        (0, r.jsx)(f.Z, {
                            stripeType: "cardCvc",
                            updateCompleted: (e) => R("cardCvc", e),
                            onFocus: () => {
                                P(), E(!0);
                            },
                            onBlur: () => {
                                E(!1);
                            },
                        }),
                },
            ],
        },
        {
            fields: [
                {
                    id: "card-name",
                    name: "name",
                    title: () => p.intl.string(p.t.VUlFdU),
                    autoComplete: "cc-name",
                    placeholder: () => p.intl.string(p.t["yf7ms+"]),
                    getClassNameForLayout: () => m.width100,
                    renderInput: (e) => (0, r.jsx)(l.oil, g({}, e)),
                },
            ],
        },
    ];
    function L(e, t) {
        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
        let n = g({}, v),
            r = g({}, I),
            i = { name: C.name };
        I[t] || "" === e || (r[t] = !0),
            (n[t] = e),
            r[t] && "" === e ? "name" === t && (i.name = p.intl.string(p.t.lIkVsi)) : delete i[t],
            S(n),
            T(r),
            A(i);
    }
    function j() {
        var e;
        return (null == (e = u.default.getCurrentUser()) ? void 0 : e.nsfwAllowed)
            ? (0, r.jsxs)("div", {
                  className: _.cardBrands,
                  children: [
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.visa, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.mastercard, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.discover, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.amex, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.jcb, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.dinersclub, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.unionpay, _.cardFormHeader) }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: _.cardBrands,
                  children: [
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.visa_monochrome, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.mastercard_monochrome, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.discover_monochrome, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.amex_monochrome, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.jcb_monochrome, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.dinersclub_monochrome, _.cardFormHeader) }),
                      (0, r.jsx)("div", { className: o()(c.Uy.SMALL, _.unionpay_monochrome, _.cardFormHeader) }),
                  ],
              });
    }
    return (0, r.jsxs)("div", {
        children: [
            j(),
            (0, r.jsx)(d.Z, {
                form: x,
                errors: C,
                formError: n,
                values: v,
                onFieldChange: L,
                onFieldBlur: w,
            }),
        ],
    });
};
