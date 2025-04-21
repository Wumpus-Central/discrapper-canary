r.d(t, { Z: () => q }), r(388685);
var n = r(200651),
    A = r(192379),
    a = r(120356),
    l = r.n(a),
    o = r(772848),
    i = r(481060),
    s = r(752305),
    c = r(893718),
    d = r(131704),
    u = r(703558),
    g = r(981631),
    f = r(388032),
    p = r(3840),
    m = r(999249);
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
    let { hasError: r, maxLength: A, text: a } = e;
    return (0, n.jsxs)('div', {
        className: l()(m.maxLength, { [m.errorOverflow]: r }),
        'aria-hidden': 'true',
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, ' ', null != A && '/ '.concat(A)]
    });
}
function q(e) {
    var t;
    let { 'aria-labelledby': r, className: a, id: o, autoFocus: d, maxLength: g, onChange: m, onSubmit: q, showCharacterCount: x = !1, placeholder: j, required: O, value: U, enableThemedBackground: P = !1, parentModalKey: V } = e,
        N = (0, i.Gc0)(),
        [y, I] = A.useState(() => (0, s.JM)(U)),
        T = A.useRef(!0 === d),
        F = null != r ? r : null == N ? void 0 : N.titleId,
        Z = null != (t = null == N ? void 0 : N.errorId) ? t : h,
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
    return (0, n.jsxs)(c.Z, {
        'aria-describedby': Z,
        'aria-labelledby': F,
        innerClassName: l()(a, p.textArea),
        id: o,
        maxCharacterCount: g,
        onChange: function (e, t, r) {
            m(t), I(r);
        },
        placeholder: j,
        required: O,
        channel: b,
        textValue: U,
        richValue: y,
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
                (0, n.jsx)(C, {
                    hasError: null != N.error || (null != g && U.length > g),
                    text: U,
                    maxLength: g
                }),
            null != g &&
                (0, n.jsx)(i.nn4, {
                    id: h,
                    children: f.intl.format(f.t['+DFxLS'], { maxLength: g })
                })
        ]
    });
}
