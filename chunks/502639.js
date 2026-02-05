"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(305866),
    l = n(397927),
    u = n(812745),
    c = n(287809),
    d = n(832208),
    _ = n(622678),
    f = n(985018),
    p = n(150067),
    h = n(784550);
let m = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        a = i.useRef(t),
        [m, g] = i.useState(!1),
        [E, A] = i.useState({}),
        [I, T] = i.useState({ name: "", country: "", postalCode: "" }),
        [y, S] = i.useState({}),
        [v, C] = i.useState({}),
        { setFocusLockDisabled: b } = i.useContext(o.M);
    i.useEffect(() => () => {
        void 0 !== b && b(!1);
    });
    let N = i.useCallback(() => {
        void 0 !== b && b(!0);
    }, [b]);
    function R(e, t) {
        !!E[e] !== t && A((n) => ({ ...n, [e]: t }));
    }
    let O = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || y.name) && "" === I.name && (t.name = f.intl.string(f.t.lIkVsi)), t;
        },
        [y, I],
    );
    function D() {
        C(O());
    }
    i.useEffect(() => {
        let e = E.cardNumber && E.cardExpiry && E.cardCvc && 0 === Object.keys(O(!0)).length;
        a.current({ name: I.name }, !!e);
    }, [E, I, O]);
    let L = [
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
                            flipped: m,
                            updateCompleted: (e) => R("cardNumber", e),
                            onFocus: N,
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
                            onFocus: N,
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
                                N(), g(!0);
                            },
                            onBlur: () => {
                                g(!1);
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
                    renderInput: (e) => (0, r.jsx)(l.ksK, { ...e }),
                },
            ],
        },
    ];
    function w(e, t) {
        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
        let n = { ...I },
            r = { ...y },
            i = { name: v.name };
        y[t] || "" === e || (r[t] = !0),
            (n[t] = e),
            r[t] && "" === e ? "name" === t && (i.name = f.intl.string(f.t.lIkVsi)) : delete i[t],
            T(n),
            S(r),
            C(i);
    }
    function x() {
        return c.default.getCurrentUser()?.nsfwAllowed
            ? (0, r.jsxs)("div", {
                  className: p.Rm,
                  children: [
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.eo, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.DR, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.k4, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.a3, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.CY, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.Q5, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.YA, p.Ud) }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: p.Rm,
                  children: [
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.aq, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.VX, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.Yi, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.qR, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.m2, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p.Ij, p.Ud) }),
                      (0, r.jsx)("div", { className: s()(u.y3.SMALL, p._V, p.Ud) }),
                  ],
              });
    }
    return (0, r.jsxs)("div", {
        children: [
            x(),
            (0, r.jsx)(d.A, { form: L, errors: v, formError: n, values: I, onFieldChange: w, onFieldBlur: D }),
        ],
    });
};
