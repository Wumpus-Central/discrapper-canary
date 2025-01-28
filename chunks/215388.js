A.d(t, {
    Z: function () {
        return x;
    }
}),
    A(47120);
var n = A(200651),
    r = A(192379),
    a = A(120356),
    i = A.n(a),
    l = A(772848),
    o = A(481060),
    s = A(752305),
    d = A(893718),
    c = A(131704),
    u = A(703558),
    g = A(981631),
    h = A(388032),
    p = A(555162),
    m = A(394604);
let f = (0, l.Z)(),
    v = (0, c.kt)({
        id: '1',
        type: g.d4z.DM
    });
function C() {
    return new Promise((e) => {
        e({
            shouldClear: !1,
            shouldRefocus: !0
        });
    });
}
function q(e) {
    var t;
    let { hasError: A, maxLength: r, text: a } = e;
    return (0, n.jsxs)('div', {
        className: i()(m.maxLength, { [m.errorOverflow]: A }),
        'aria-hidden': 'true',
        children: [null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0, ' ', null != r && '/ '.concat(r)]
    });
}
function x(e) {
    var t;
    let { 'aria-labelledby': A, className: a, id: l, autoFocus: c, maxLength: g, onChange: m, onSubmit: x, showCharacterCount: b = !1, placeholder: U, required: V, value: j, enableThemedBackground: I = !1, parentModalKey: N } = e,
        T = (0, o.useFormContext)(),
        [F, P] = r.useState(() => (0, s.JM)(j)),
        K = r.useRef(!0 === c),
        Z = null != A ? A : null == T ? void 0 : T.titleId,
        W = null !== (t = null == T ? void 0 : T.errorId) && void 0 !== t ? t : f,
        X = r.useMemo(
            () => ({
                analyticsName: 'simple',
                autocomplete: {
                    alwaysUseLayer: !0,
                    small: !0
                },
                disableAutoFocus: !0 !== c,
                drafts: { type: u.d.ChannelMessage },
                emojis: { button: !0 },
                permissions: { requireSendMessages: !1 },
                submit: {
                    useDisabledStylesOnSubmit: !0,
                    disableEnterToSubmit: !0
                }
            }),
            [c]
        );
    return (0, n.jsxs)(d.Z, {
        'aria-describedby': W,
        'aria-labelledby': Z,
        innerClassName: i()(a, p.textArea),
        id: l,
        maxCharacterCount: g,
        onChange: function (e, t, A) {
            m(t), P(A);
        },
        placeholder: U,
        required: V,
        channel: v,
        textValue: j,
        richValue: F,
        type: X,
        onBlur: () => {
            K.current = !1;
        },
        onFocus: () => {
            K.current = !0;
        },
        focused: K.current,
        onSubmit: null != x ? x : C,
        disableThemedBackground: !I,
        parentModalKey: N,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === b &&
                (0, n.jsx)(q, {
                    hasError: null != T.error || (null != g && j.length > g),
                    text: j,
                    maxLength: g
                }),
            null != g &&
                (0, n.jsx)(o.HiddenVisually, {
                    id: f,
                    children: h.intl.format(h.t['+DFxLS'], { maxLength: g })
                })
        ]
    });
}
