n.d(t, { A: () => y }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(305866),
    l = n(397927),
    c = n(812745),
    u = n(287809),
    d = n(832208),
    f = n(622678),
    p = n(985018),
    _ = n(150067),
    h = n(784550);
function m(e, t, n) {
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
                m(e, t, n[t]);
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
        [m, E] = i.useState(!1),
        [y, O] = i.useState({}),
        [A, v] = i.useState({
            name: "",
            country: "",
            postalCode: "",
        }),
        [S, I] = i.useState({}),
        [T, C] = i.useState({}),
        { setFocusLockDisabled: N } = i.useContext(o.M);
    i.useEffect(() => () => {
        void 0 !== N && N(!1);
    });
    let R = i.useCallback(() => {
        void 0 !== N && N(!0);
    }, [N]);
    function w(e, t) {
        !!y[e] !== t && O((n) => b(g({}, n), { [e]: t }));
    }
    let P = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || S.name) && "" === A.name && (t.name = p.intl.string(p.t.lIkVsi)), t;
        },
        [S, A],
    );
    function D() {
        C(P());
    }
    i.useEffect(() => {
        let e = y.cardNumber && y.cardExpiry && y.cardCvc && 0 === Object.keys(P(!0)).length;
        a.current({ name: A.name }, !!e);
    }, [y, A, P]);
    let x = [
        {
            fields: [
                {
                    id: "card-number",
                    name: "cardNumber",
                    title: () => p.intl.string(p.t.cVyJ3o),
                    getClassNameForLayout: () => h.c6,
                    renderInput: () =>
                        (0, r.jsx)(f.A, {
                            stripeType: "cardNumber",
                            flipped: m,
                            updateCompleted: (e) => w("cardNumber", e),
                            onFocus: R,
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
                    getClassNameForLayout: () => h.ep,
                    renderInput: () =>
                        (0, r.jsx)(f.A, {
                            stripeType: "cardExpiry",
                            updateCompleted: (e) => w("cardExpiry", e),
                            onFocus: R,
                        }),
                },
                {
                    id: "card-cvc",
                    name: "cardCvc",
                    title: () => p.intl.string(p.t.Fd3rOz),
                    getClassNameForLayout: () => h.ep,
                    renderInput: () =>
                        (0, r.jsx)(f.A, {
                            stripeType: "cardCvc",
                            updateCompleted: (e) => w("cardCvc", e),
                            onFocus: () => {
                                R(), E(!0);
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
                    getClassNameForLayout: () => h.c6,
                    renderInput: (e) => (0, r.jsx)(l.ksK, g({}, e)),
                },
            ],
        },
    ];
    function L(e, t) {
        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
        let n = g({}, A),
            r = g({}, S),
            i = { name: T.name };
        S[t] || "" === e || (r[t] = !0),
            (n[t] = e),
            r[t] && "" === e ? "name" === t && (i.name = p.intl.string(p.t.lIkVsi)) : delete i[t],
            v(n),
            I(r),
            C(i);
    }
    function j() {
        var e;
        return (null == (e = u.default.getCurrentUser()) ? void 0 : e.nsfwAllowed)
            ? (0, r.jsxs)("div", {
                  className: _.Rm,
                  children: [
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.eo, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.DR, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.k4, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.a3, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.CY, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.Q5, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.YA, _.Ud) }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: _.Rm,
                  children: [
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.aq, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.VX, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.Yi, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.qR, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.m2, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _.Ij, _.Ud) }),
                      (0, r.jsx)("div", { className: s()(c.y3.SMALL, _._V, _.Ud) }),
                  ],
              });
    }
    return (0, r.jsxs)("div", {
        children: [
            j(),
            (0, r.jsx)(d.A, {
                form: x,
                errors: T,
                formError: n,
                values: A,
                onFieldChange: L,
                onFieldBlur: D,
            }),
        ],
    });
};
