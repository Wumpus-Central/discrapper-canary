r.d(t, { Z: () => q }), r(47120);
var n = r(200651),
    A = r(192379),
    a = r(120356),
    o = r.n(a),
    l = r(772848),
    i = r(481060),
    s = r(752305),
    c = r(893718),
    d = r(131704),
    u = r(703558),
    g = r(981631),
    f = r(388032),
    p = r(3840),
    h = r(999249);
let m = (0, l.Z)(),
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
        className: o()(h.maxLength, { [h.errorOverflow]: r }),
        'aria-hidden': 'true',
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, ' ', null != A && '/ '.concat(A)]
    });
}
function q(e) {
    var t;
    let { 'aria-labelledby': r, className: a, id: l, autoFocus: d, maxLength: g, onChange: h, onSubmit: q, showCharacterCount: x = !1, placeholder: j, required: N, value: O, enableThemedBackground: U = !1, parentModalKey: P } = e,
        y = (0, i.Gc0)(),
        [V, W] = A.useState(() => (0, s.JM)(O)),
        I = A.useRef(!0 === d),
        T = null != r ? r : null == y ? void 0 : y.titleId,
        F = null != (t = null == y ? void 0 : y.errorId) ? t : m,
        Z = A.useMemo(
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
        'aria-describedby': F,
        'aria-labelledby': T,
        innerClassName: o()(a, p.textArea),
        id: l,
        maxCharacterCount: g,
        onChange: function (e, t, r) {
            h(t), W(r);
        },
        placeholder: j,
        required: N,
        channel: b,
        textValue: O,
        richValue: V,
        type: Z,
        onBlur: () => {
            I.current = !1;
        },
        onFocus: () => {
            I.current = !0;
        },
        focused: I.current,
        onSubmit: null != q ? q : v,
        disableThemedBackground: !U,
        parentModalKey: P,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === x &&
                (0, n.jsx)(C, {
                    hasError: null != y.error || (null != g && O.length > g),
                    text: O,
                    maxLength: g
                }),
            null != g &&
                (0, n.jsx)(i.nn4, {
                    id: m,
                    children: f.NW.format(f.t['+DFxLS'], { maxLength: g })
                })
        ]
    });
}
