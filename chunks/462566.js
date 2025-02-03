n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(219929),
    u = n(594174),
    c = n(754103),
    d = n(12464),
    f = n(388032),
    _ = n(559195),
    p = n(498918);
let h = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        a = r.useRef(t),
        [h, m] = r.useState(!1),
        [g, E] = r.useState({}),
        [v, y] = r.useState({
            name: '',
            country: '',
            postalCode: ''
        }),
        [I, b] = r.useState({}),
        [T, S] = r.useState({});
    function A(e, t) {
        !!g[e] !== t &&
            E((n) => ({
                ...n,
                [e]: t
            }));
    }
    let N = r.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || I.name) && '' === v.name && (t.name = f.intl.string(f.t.lIkVsr)), t;
        },
        [I, v]
    );
    function C() {
        S(N());
    }
    r.useEffect(() => {
        let e = g.cardNumber && g.cardExpiry && g.cardCvc && 0 === Object.keys(N(!0)).length;
        a.current({ name: v.name }, !!e);
    }, [g, v, N]);
    let R = [
        {
            fields: [
                {
                    name: 'cardNumber',
                    title: () => f.intl.string(f.t.cVyJ3t),
                    getClassNameForLayout: () => p.width100,
                    renderInput: () =>
                        (0, i.jsx)(d.Z, {
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
                    title: () => f.intl.string(f.t['CeBa//']),
                    getClassNameForLayout: () => p.width50,
                    renderInput: () =>
                        (0, i.jsx)(d.Z, {
                            stripeType: 'cardExpiry',
                            updateCompleted: (e) => A('cardExpiry', e)
                        })
                },
                {
                    name: 'cardCvc',
                    title: () => f.intl.string(f.t.Fd3rOz),
                    getClassNameForLayout: () => p.width50,
                    renderInput: () =>
                        (0, i.jsx)(d.Z, {
                            stripeType: 'cardCvc',
                            updateCompleted: (e) => A('cardCvc', e),
                            onFocus: () => {
                                m(!0);
                            },
                            onBlur: () => {
                                m(!1);
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
                    title: () => f.intl.string(f.t.VUlFdX),
                    autoComplete: 'cc-name',
                    placeholder: () => f.intl.string(f.t.yf7ms7),
                    getClassNameForLayout: () => p.width100,
                    renderInput: (e) => (0, i.jsx)(o.oil, { ...e })
                }
            ]
        }
    ];
    function O(e, t) {
        if ('name' !== t && 'country' !== t && 'postalCode' !== t) return;
        let n = { ...v },
            i = { ...I },
            r = { name: T.name };
        I[t] || '' === e || (i[t] = !0), (n[t] = e), i[t] && '' === e ? 'name' === t && (r.name = f.intl.string(f.t.lIkVsr)) : delete r[t], y(n), b(i), S(r);
    }
    function D() {
        var e;
        return (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
            ? (0, i.jsxs)('div', {
                  className: _.cardBrands,
                  children: [(0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.visa, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.mastercard, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.discover, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.amex, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.jcb, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.dinersclub, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.unionpay, _.cardFormHeader) })]
              })
            : (0, i.jsxs)('div', {
                  className: _.cardBrands,
                  children: [(0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.visa_monochrome, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.mastercard_monochrome, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.discover_monochrome, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.amex_monochrome, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.jcb_monochrome, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.dinersclub_monochrome, _.cardFormHeader) }), (0, i.jsx)('div', { className: s()(l.Uy.SMALL, _.unionpay_monochrome, _.cardFormHeader) })]
              });
    }
    return (0, i.jsxs)('div', {
        children: [
            D(),
            (0, i.jsx)(c.Z, {
                form: R,
                errors: T,
                formError: n,
                values: v,
                onFieldChange: O,
                onFieldBlur: C
            })
        ]
    });
};
