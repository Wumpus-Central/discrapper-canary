n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var A = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    i = n(772848),
    o = n(481060),
    s = n(752305),
    d = n(893718),
    c = n(131704),
    u = n(703558),
    g = n(981631),
    h = n(388032),
    p = n(555162),
    m = n(394604);
let f = (0, i.Z)(),
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
    let { hasError: n, maxLength: r, text: a } = e;
    return (0, A.jsxs)('div', {
        className: l()(m.maxLength, { [m.errorOverflow]: n }),
        'aria-hidden': 'true',
        children: [null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0, ' ', null != r && '/ '.concat(r)]
    });
}
function x(e) {
    var t;
    let { 'aria-labelledby': n, className: a, id: i, autoFocus: c, maxLength: g, onChange: m, onSubmit: x, showCharacterCount: b = !1, placeholder: U, required: V, value: j, enableThemedBackground: I = !1, parentModalKey: N } = e,
        T = (0, o.useFormContext)(),
        [F, P] = r.useState(() => (0, s.JM)(j)),
        K = r.useRef(!0 === c),
        Z = null != n ? n : null == T ? void 0 : T.titleId,
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
    return (0, A.jsxs)(d.Z, {
        'aria-describedby': W,
        'aria-labelledby': Z,
        innerClassName: l()(a, p.textArea),
        id: i,
        maxCharacterCount: g,
        onChange: function (e, t, n) {
            m(t), P(n);
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
                (0, A.jsx)(q, {
                    hasError: null != T.error || (null != g && j.length > g),
                    text: j,
                    maxLength: g
                }),
            null != g &&
                (0, A.jsx)(o.HiddenVisually, {
                    id: f,
                    children: h.intl.format(h.t['+DFxLS'], { maxLength: g })
                })
        ]
    });
}
