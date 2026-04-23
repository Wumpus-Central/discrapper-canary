"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(305866),
    l = n(292666),
    u = n(812745),
    c = n(287809),
    d = n(832208),
    _ = n(622678),
    f = n(985018),
    p = n(483770),
    h = n(536439);
let E = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        s = i.useRef(t),
        [E, m] = i.useState(!1),
        [g, A] = i.useState({}),
        [I, T] = i.useState({ name: "", country: "", postalCode: "" }),
        [S, y] = i.useState({}),
        [N, v] = i.useState({}),
        { setFocusLockDisabled: C } = i.useContext(o.M);
    i.useEffect(() => () => {
        void 0 !== C && C(!1);
    });
    let O = i.useCallback(() => {
        void 0 !== C && C(!0);
    }, [C]);
    function R(e, t) {
        !!g[e] !== t && A((n) => ({ ...n, [e]: t }));
    }
    let b = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || S.name) && "" === I.name && (t.name = f.intl.string(f.t.lIkVsi)), t;
        },
        [S, I],
    );
    return (
        i.useEffect(() => {
            let e = g.cardNumber && g.cardExpiry && g.cardCvc && 0 === Object.keys(b(!0)).length;
            s.current({ name: I.name }, !!e);
        }, [g, I, b]),
        (0, r.jsxs)("div", {
            children: [
                c.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: p.Rm,
                          children: [
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.eo, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.DR, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.k4, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.a3, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.CY, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.Q5, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.YA, p.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: p.Rm,
                          children: [
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.aq, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.VX, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.Yi, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.qR, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.m2, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p.Ij, p.Ud) }),
                              (0, r.jsx)("div", { className: a()(u.y3.SMALL, p._V, p.Ud) }),
                          ],
                      }),
                (0, r.jsx)(d.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => f.intl.string(f.t.cVyJ3o),
                                    getClassNameForLayout: () => h.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(_.A, {
                                            stripeType: "cardNumber",
                                            flipped: E,
                                            updateCompleted: (e) => R("cardNumber", e),
                                            onFocus: O,
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-expiration-date",
                                    name: "cardExpiry",
                                    title: () => f.intl.string(f.t["CeBa/4"]),
                                    getClassNameForLayout: () => h.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(_.A, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => R("cardExpiry", e),
                                            onFocus: O,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => f.intl.string(f.t.Fd3rOz),
                                    getClassNameForLayout: () => h.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(_.A, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => R("cardCvc", e),
                                            onFocus: () => {
                                                O(), m(!0);
                                            },
                                            onBlur: () => {
                                                m(!1);
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
                                    title: () => f.intl.string(f.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => f.intl.string(f.t["yf7ms+"]),
                                    getClassNameForLayout: () => h.c6,
                                    renderInput: (e) => (0, r.jsx)(l.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: N,
                    formError: n,
                    values: I,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ...I },
                            r = { ...S },
                            i = { name: N.name };
                        S[t] || "" === e || (r[t] = !0),
                            (n[t] = e),
                            r[t] && "" === e ? "name" === t && (i.name = f.intl.string(f.t.lIkVsi)) : delete i[t],
                            T(n),
                            y(r),
                            v(i);
                    },
                    onFieldBlur: function () {
                        v(b());
                    },
                }),
            ],
        })
    );
};
