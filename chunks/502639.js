n.d(t, { A: () => _ });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(305866),
    o = n(292666),
    u = n(812745),
    c = n(287809),
    d = n(832208),
    p = n(622678),
    m = n(985018),
    h = n(483770),
    A = n(536439);
let _ = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        a = i.useRef(t),
        [_, C] = i.useState(!1),
        [E, y] = i.useState({}),
        [f, P] = i.useState({ name: "", country: "", postalCode: "" }),
        [S, x] = i.useState({}),
        [T, N] = i.useState({}),
        { setFocusLockDisabled: g } = i.useContext(s.M);
    i.useEffect(() => () => {
        void 0 !== g && g(!1);
    });
    let I = i.useCallback(() => {
        void 0 !== g && g(!0);
    }, [g]);
    function v(e, t) {
        !!E[e] !== t && y((n) => ({ ...n, [e]: t }));
    }
    let b = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || S.name) && "" === f.name && (t.name = m.intl.string(m.t.lIkVsi)), t;
        },
        [S, f],
    );
    return (
        i.useEffect(() => {
            let e = E.cardNumber && E.cardExpiry && E.cardCvc && 0 === Object.keys(b(!0)).length;
            a.current({ name: f.name }, !!e);
        }, [E, f, b]),
        (0, l.jsxs)("div", {
            children: [
                c.default.getCurrentUser()?.nsfwAllowed
                    ? (0, l.jsxs)("div", {
                          className: h.Rm,
                          children: [
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.eo, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.DR, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.k4, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.a3, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.CY, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.Q5, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.YA, h.Ud) }),
                          ],
                      })
                    : (0, l.jsxs)("div", {
                          className: h.Rm,
                          children: [
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.aq, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.VX, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.Yi, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.qR, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.m2, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h.Ij, h.Ud) }),
                              (0, l.jsx)("div", { className: r()(u.y3.SMALL, h._V, h.Ud) }),
                          ],
                      }),
                (0, l.jsx)(d.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => m.intl.string(m.t.cVyJ3o),
                                    getClassNameForLayout: () => A.c6,
                                    renderInput: () =>
                                        (0, l.jsx)(p.A, {
                                            stripeType: "cardNumber",
                                            flipped: _,
                                            updateCompleted: (e) => v("cardNumber", e),
                                            onFocus: I,
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-expiration-date",
                                    name: "cardExpiry",
                                    title: () => m.intl.string(m.t["CeBa/4"]),
                                    getClassNameForLayout: () => A.ep,
                                    renderInput: () =>
                                        (0, l.jsx)(p.A, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => v("cardExpiry", e),
                                            onFocus: I,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => m.intl.string(m.t.Fd3rOz),
                                    getClassNameForLayout: () => A.ep,
                                    renderInput: () =>
                                        (0, l.jsx)(p.A, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => v("cardCvc", e),
                                            onFocus: () => {
                                                I(), C(!0);
                                            },
                                            onBlur: () => {
                                                C(!1);
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
                                    title: () => m.intl.string(m.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => m.intl.string(m.t["yf7ms+"]),
                                    getClassNameForLayout: () => A.c6,
                                    renderInput: (e) => (0, l.jsx)(o.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: T,
                    formError: n,
                    values: f,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ...f },
                            l = { ...S },
                            i = { name: T.name };
                        S[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (i.name = m.intl.string(m.t.lIkVsi)) : delete i[t],
                            P(n),
                            x(l),
                            N(i);
                    },
                    onFieldBlur: function () {
                        N(b());
                    },
                }),
            ],
        })
    );
};
