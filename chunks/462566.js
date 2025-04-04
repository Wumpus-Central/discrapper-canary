n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(507274),
    l = n(481060),
    c = n(219929),
    u = n(594174),
    d = n(754103),
    f = n(12464),
    _ = n(388032),
    p = n(142116),
    h = n(360797);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
        o = i.useRef(t),
        [m, E] = i.useState(!1),
        [y, v] = i.useState({}),
        [O, I] = i.useState({
            name: '',
            country: '',
            postalCode: ''
        }),
        [S, T] = i.useState({}),
        [N, A] = i.useState({}),
        { setFocusLockDisabled: C } = i.useContext(s.M);
    i.useEffect(() => () => {
        void 0 !== C && C(!1);
    });
    let R = i.useCallback(() => {
        void 0 !== C && C(!0);
    }, [C]);
    function P(e, t) {
        !!y[e] !== t && v((n) => b(g({}, n), { [e]: t }));
    }
    let w = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || S.name) && '' === O.name && (t.name = _.NW.string(_.t.lIkVsr)), t;
        },
        [S, O]
    );
    function D() {
        A(w());
    }
    i.useEffect(() => {
        let e = y.cardNumber && y.cardExpiry && y.cardCvc && 0 === Object.keys(w(!0)).length;
        o.current({ name: O.name }, !!e);
    }, [y, O, w]);
    let L = [
        {
            fields: [
                {
                    name: 'cardNumber',
                    title: () => _.NW.string(_.t.cVyJ3t),
                    getClassNameForLayout: () => h.width100,
                    renderInput: () =>
                        (0, r.jsx)(f.Z, {
                            stripeType: 'cardNumber',
                            flipped: m,
                            updateCompleted: (e) => P('cardNumber', e),
                            onFocus: R
                        })
                }
            ]
        },
        {
            fields: [
                {
                    name: 'cardExpiry',
                    title: () => _.NW.string(_.t['CeBa//']),
                    getClassNameForLayout: () => h.width50,
                    renderInput: () =>
                        (0, r.jsx)(f.Z, {
                            stripeType: 'cardExpiry',
                            updateCompleted: (e) => P('cardExpiry', e),
                            onFocus: R
                        })
                },
                {
                    name: 'cardCvc',
                    title: () => _.NW.string(_.t.Fd3rOz),
                    getClassNameForLayout: () => h.width50,
                    renderInput: () =>
                        (0, r.jsx)(f.Z, {
                            stripeType: 'cardCvc',
                            updateCompleted: (e) => P('cardCvc', e),
                            onFocus: () => {
                                R(), E(!0);
                            },
                            onBlur: () => {
                                E(!1);
                            }
                        })
                }
            ]
        },
        {
            fields: [
                {
                    id: 'card-name',
                    name: 'name',
                    title: () => _.NW.string(_.t.VUlFdX),
                    autoComplete: 'cc-name',
                    placeholder: () => _.NW.string(_.t.yf7ms7),
                    getClassNameForLayout: () => h.width100,
                    renderInput: (e) => (0, r.jsx)(l.oil, g({}, e))
                }
            ]
        }
    ];
    function x(e, t) {
        if ('name' !== t && 'country' !== t && 'postalCode' !== t) return;
        let n = g({}, O),
            r = g({}, S),
            i = { name: N.name };
        S[t] || '' === e || (r[t] = !0), (n[t] = e), r[t] && '' === e ? 'name' === t && (i.name = _.NW.string(_.t.lIkVsr)) : delete i[t], I(n), T(r), A(i);
    }
    function M() {
        var e;
        return (null == (e = u.default.getCurrentUser()) ? void 0 : e.nsfwAllowed)
            ? (0, r.jsxs)('div', {
                  className: p.cardBrands,
                  children: [(0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.visa, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.mastercard, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.discover, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.amex, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.jcb, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.dinersclub, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.unionpay, p.cardFormHeader) })]
              })
            : (0, r.jsxs)('div', {
                  className: p.cardBrands,
                  children: [(0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.visa_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.mastercard_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.discover_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.amex_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.jcb_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.dinersclub_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(c.Uy.SMALL, p.unionpay_monochrome, p.cardFormHeader) })]
              });
    }
    return (0, r.jsxs)('div', {
        children: [
            M(),
            (0, r.jsx)(d.Z, {
                form: L,
                errors: N,
                formError: n,
                values: O,
                onFieldChange: x,
                onFieldBlur: D
            })
        ]
    });
};
