n.d(t, { Z: () => q }), n(388685);
var r = n(255367),
    A = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(772848),
    i = n(481060),
    s = n(752305),
    c = n(893718),
    d = n(131704),
    u = n(703558),
    g = n(981631),
    f = n(388032),
    p = n(3840),
    m = n(999249);
let h = (0, o.Z)(),
    b = (0, d.kt)({
        id: '1',
        type: g.d4z.DM
    });
function v() {
    return new Promise((e) => {
        e({
            shouldClear: !1,
            shouldRefocus: !0
        });
    });
}
function C(e) {
    var t;
    let { hasError: n, maxLength: A, text: a } = e;
    return (0, r.jsxs)('div', {
        className: l()(m.maxLength, { [m.errorOverflow]: n }),
        'aria-hidden': 'true',
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, ' ', null != A && '/ '.concat(A)]
    });
}
function q(e) {
    var t;
    let { 'aria-labelledby': n, className: a, id: o, autoFocus: d, maxLength: g, onChange: m, onSubmit: q, showCharacterCount: x = !1, placeholder: j, required: O, value: U, enableThemedBackground: P = !1, parentModalKey: V } = e,
        y = (0, i.Gc0)(),
        [N, I] = A.useState(() => (0, s.JM)(U)),
        T = A.useRef(!0 === d),
        F = null != n ? n : null == y ? void 0 : y.titleId,
        Z = null != (t = null == y ? void 0 : y.errorId) ? t : h,
        K = A.useMemo(
            () => ({
                analyticsName: 'simple',
                autocomplete: {
                    alwaysUseLayer: !0,
                    small: !0
                },
                disableAutoFocus: !0 !== d,
                drafts: { type: u.d.ChannelMessage },
                emojis: { button: !0 },
                permissions: { requireSendMessages: !1 },
                submit: {
                    useDisabledStylesOnSubmit: !0,
                    disableEnterToSubmit: !0
                }
            }),
            [d]
        );
    return (0, r.jsxs)(c.Z, {
        'aria-describedby': Z,
        'aria-labelledby': F,
        innerClassName: l()(a, p.textArea),
        id: o,
        maxCharacterCount: g,
        onChange: function (e, t, n) {
            m(t), I(n);
        },
        placeholder: j,
        required: O,
        channel: b,
        textValue: U,
        richValue: N,
        type: K,
        onBlur: () => {
            T.current = !1;
        },
        onFocus: () => {
            T.current = !0;
        },
        focused: T.current,
        onSubmit: null != q ? q : v,
        disableThemedBackground: !P,
        parentModalKey: V,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === x &&
                (0, r.jsx)(C, {
                    hasError: null != y.error || (null != g && U.length > g),
                    text: U,
                    maxLength: g
                }),
            null != g &&
                (0, r.jsx)(i.nn4, {
                    id: h,
                    children: f.intl.format(f.t['+DFxLS'], { maxLength: g })
                })
        ]
    });
}
