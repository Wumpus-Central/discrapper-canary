var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(219929),
    f = r(594174),
    p = r(754103),
    h = r(12464),
    _ = r(388032),
    m = r(559195),
    g = r(498918);
function E(e) {
    let { onCardInfoChange: n, error: r } = e,
        i = s.useRef(n),
        [a, l] = s.useState(!1),
        [E, v] = s.useState({}),
        [y, b] = s.useState({
            name: '',
            country: '',
            postalCode: ''
        }),
        [I, T] = s.useState({}),
        [S, A] = s.useState({});
    function C(e, n) {
        !!E[e] !== n &&
            v((r) => ({
                ...r,
                [e]: n
            }));
    }
    let N = s.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = {};
            return (e || I.name) && '' === y.name && (n.name = _.intl.string(_.t.lIkVsr)), n;
        },
        [I, y]
    );
    function R() {
        A(N());
    }
    s.useEffect(() => {
        let e = E.cardNumber && E.cardExpiry && E.cardCvc && 0 === Object.keys(N(!0)).length;
        i.current({ name: y.name }, !!e);
    }, [E, y, N]);
    let O = {
            name: 'cardNumber',
            title: () => _.intl.string(_.t.cVyJ3t),
            getClassNameForLayout: () => g.width100,
            renderInput: () =>
                (0, o.jsx)(h.Z, {
                    stripeType: 'cardNumber',
                    flipped: a,
                    updateCompleted: (e) => C('cardNumber', e)
                })
        },
        D = {
            name: 'cardExpiry',
            title: () => _.intl.string(_.t['CeBa//']),
            getClassNameForLayout: () => g.width50,
            renderInput: () =>
                (0, o.jsx)(h.Z, {
                    stripeType: 'cardExpiry',
                    updateCompleted: (e) => C('cardExpiry', e)
                })
        },
        L = {
            name: 'cardCvc',
            title: () => _.intl.string(_.t.Fd3rOz),
            getClassNameForLayout: () => g.width50,
            renderInput: () =>
                (0, o.jsx)(h.Z, {
                    stripeType: 'cardCvc',
                    updateCompleted: (e) => C('cardCvc', e),
                    onFocus: () => {
                        l(!0);
                    },
                    onBlur: () => {
                        l(!1);
                    }
                })
        },
        x = {
            id: 'card-name',
            name: 'name',
            title: () => _.intl.string(_.t.VUlFdX),
            autoComplete: 'cc-name',
            placeholder: () => _.intl.string(_.t.yf7ms7),
            getClassNameForLayout: () => g.width100,
            renderInput: (e) => (0, o.jsx)(c.TextInput, { ...e })
        },
        w = [
            { fields: [O] },
            {
                fields: [D, L]
            },
            { fields: [x] }
        ];
    function P(e, n) {
        if ('name' !== n && 'country' !== n && 'postalCode' !== n) return;
        let r = { ...y },
            i = { ...I },
            a = { name: S.name };
        !I[n] && '' !== e && (i[n] = !0), (r[n] = e), i[n] && '' === e ? 'name' === n && (a.name = _.intl.string(_.t.lIkVsr)) : delete a[n], b(r), T(i), A(a);
    }
    function M() {
        var e;
        return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
            ? (0, o.jsxs)('div', {
                  className: m.cardBrands,
                  children: [(0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.visa, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.mastercard, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.discover, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.amex, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.jcb, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.dinersclub, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.unionpay, m.cardFormHeader) })]
              })
            : (0, o.jsxs)('div', {
                  className: m.cardBrands,
                  children: [(0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.visa_monochrome, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.mastercard_monochrome, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.discover_monochrome, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.amex_monochrome, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.jcb_monochrome, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.dinersclub_monochrome, m.cardFormHeader) }), (0, o.jsx)('div', { className: u()(d.Uy.SMALL, m.unionpay_monochrome, m.cardFormHeader) })]
              });
    }
    return (0, o.jsxs)('div', {
        children: [
            M(),
            (0, o.jsx)(p.Z, {
                form: w,
                errors: S,
                formError: r,
                values: y,
                onFieldChange: P,
                onFieldBlur: R
            })
        ]
    });
}
!(function (e) {
    (e.CARD_NUMBER = 'cardNumber'), (e.EXPIRATION_DATE = 'cardExpiry'), (e.CVC = 'cardCvc'), (e.NAME = 'name'), (e.COUNTRY = 'country'), (e.POSTAL_CODE = 'postalCode');
})(i || (i = {})),
    (n.Z = E);
