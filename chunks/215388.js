(A.d(t, { Z: () => q }), A(388685));
var n = A(255367),
    r = A(73800),
    a = A(120356),
    l = A.n(a),
    i = A(772848),
    o = A(481060),
    s = A(752305),
    c = A(893718),
    d = A(131704),
    u = A(703558),
    f = A(981631),
    g = A(388032),
    p = A(3840),
    h = A(999249);
let m = (0, i.Z)(),
    b = (0, d.kt)({
        id: '1',
        type: f.d4z.DM
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
    let { hasError: A, maxLength: r, text: a } = e;
    return (0, n.jsxs)('div', {
        className: l()(h.maxLength, { [h.errorOverflow]: A }),
        'aria-hidden': 'true',
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, ' ', null != r && '/ '.concat(r)]
    });
}
function q(e) {
    var t;
    let { 'aria-labelledby': A, className: a, id: i, autoFocus: d, maxLength: f, onChange: h, onSubmit: q, showCharacterCount: x = !1, placeholder: j, required: U, value: O, enableThemedBackground: V = !1, parentModalKey: P } = e,
        y = (0, o.Gc0)(),
        [N, I] = r.useState(() => (0, s.JM)(O)),
        F = r.useRef(!0 === d),
        T = null != A ? A : null == y ? void 0 : y.titleId,
        K = null != (t = null == y ? void 0 : y.errorId) ? t : m,
        Z = r.useMemo(
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
    return (0, n.jsxs)(c.ZP, {
        'aria-describedby': K,
        'aria-labelledby': T,
        innerClassName: l()(a, p.textArea),
        id: i,
        maxCharacterCount: f,
        onChange: function (e, t, A) {
            (h(t), I(A));
        },
        placeholder: j,
        required: U,
        channel: b,
        textValue: O,
        richValue: N,
        type: Z,
        onBlur: () => {
            F.current = !1;
        },
        onFocus: () => {
            F.current = !0;
        },
        focused: F.current,
        onSubmit: null != q ? q : v,
        disableThemedBackground: !V,
        parentModalKey: P,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === x &&
                (0, n.jsx)(C, {
                    hasError: null != y.error || (null != f && O.length > f),
                    text: O,
                    maxLength: f
                }),
            null != f &&
                (0, n.jsx)(o.nn4, {
                    id: m,
                    children: g.intl.format(g.t['+DFxLS'], { maxLength: f })
                })
        ]
    });
}
