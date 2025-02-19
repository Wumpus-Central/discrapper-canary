n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(219929),
    c = n(594174),
    u = n(754103),
    d = n(12464),
    f = n(388032),
    p = n(468943),
    _ = n(251127);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        o = i.useRef(t),
        [h, g] = i.useState(!1),
        [v, b] = i.useState({}),
        [y, O] = i.useState({
            name: '',
            country: '',
            postalCode: ''
        }),
        [S, I] = i.useState({}),
        [T, N] = i.useState({});
    function A(e, t) {
        !!v[e] !== t && b((n) => E(m({}, n), { [e]: t }));
    }
    let C = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || S.name) && '' === y.name && (t.name = f.NW.string(f.t.lIkVsr)), t;
        },
        [S, y]
    );
    function R() {
        N(C());
    }
    i.useEffect(() => {
        let e = v.cardNumber && v.cardExpiry && v.cardCvc && 0 === Object.keys(C(!0)).length;
        o.current({ name: y.name }, !!e);
    }, [v, y, C]);
    let P = [
        {
            fields: [
                {
                    name: 'cardNumber',
                    title: () => f.NW.string(f.t.cVyJ3t),
                    getClassNameForLayout: () => _.width100,
                    renderInput: () =>
                        (0, r.jsx)(d.Z, {
                            stripeType: 'cardNumber',
                            flipped: h,
                            updateCompleted: (e) => A('cardNumber', e)
                        })
                }
            ]
        },
        {
            fields: [
                {
                    name: 'cardExpiry',
                    title: () => f.NW.string(f.t['CeBa//']),
                    getClassNameForLayout: () => _.width50,
                    renderInput: () =>
                        (0, r.jsx)(d.Z, {
                            stripeType: 'cardExpiry',
                            updateCompleted: (e) => A('cardExpiry', e)
                        })
                },
                {
                    name: 'cardCvc',
                    title: () => f.NW.string(f.t.Fd3rOz),
                    getClassNameForLayout: () => _.width50,
                    renderInput: () =>
                        (0, r.jsx)(d.Z, {
                            stripeType: 'cardCvc',
                            updateCompleted: (e) => A('cardCvc', e),
                            onFocus: () => {
                                g(!0);
                            },
                            onBlur: () => {
                                g(!1);
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
                    title: () => f.NW.string(f.t.VUlFdX),
                    autoComplete: 'cc-name',
                    placeholder: () => f.NW.string(f.t.yf7ms7),
                    getClassNameForLayout: () => _.width100,
                    renderInput: (e) => (0, r.jsx)(s.oil, m({}, e))
                }
            ]
        }
    ];
    function w(e, t) {
        if ('name' !== t && 'country' !== t && 'postalCode' !== t) return;
        let n = m({}, y),
            r = m({}, S),
            i = { name: T.name };
        S[t] || '' === e || (r[t] = !0), (n[t] = e), r[t] && '' === e ? 'name' === t && (i.name = f.NW.string(f.t.lIkVsr)) : delete i[t], O(n), I(r), N(i);
    }
    function D() {
        var e;
        return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
            ? (0, r.jsxs)('div', {
                  className: p.cardBrands,
                  children: [(0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.visa, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.mastercard, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.discover, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.amex, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.jcb, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.dinersclub, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.unionpay, p.cardFormHeader) })]
              })
            : (0, r.jsxs)('div', {
                  className: p.cardBrands,
                  children: [(0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.visa_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.mastercard_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.discover_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.amex_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.jcb_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.dinersclub_monochrome, p.cardFormHeader) }), (0, r.jsx)('div', { className: a()(l.Uy.SMALL, p.unionpay_monochrome, p.cardFormHeader) })]
              });
    }
    return (0, r.jsxs)('div', {
        children: [
            D(),
            (0, r.jsx)(u.Z, {
                form: P,
                errors: T,
                formError: n,
                values: y,
                onFieldChange: w,
                onFieldBlur: R
            })
        ]
    });
};
