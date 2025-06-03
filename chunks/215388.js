r.d(t, { Z: () => x }), r(388685);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    o = r(772848),
    A = r(481060),
    s = r(752305),
    c = r(893718),
    d = r(131704),
    u = r(703558),
    f = r(981631),
    g = r(388032),
    h = r(3840),
    p = r(999249);
let m = (0, o.Z)(),
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
    let { hasError: r, maxLength: i, text: a } = e;
    return (0, n.jsxs)('div', {
        className: l()(p.maxLength, { [p.errorOverflow]: r }),
        'aria-hidden': 'true',
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, ' ', null != i && '/ '.concat(i)]
    });
}
function x(e) {
    var t;
    let { 'aria-labelledby': r, className: a, id: o, autoFocus: d, maxLength: f, onChange: p, onSubmit: x, showCharacterCount: q = !1, placeholder: j, required: O, value: P, enableThemedBackground: y = !1, parentModalKey: U } = e,
        V = (0, A.Gc0)(),
        [N, I] = i.useState(() => (0, s.JM)(P)),
        T = i.useRef(!0 === d),
        F = null != r ? r : null == V ? void 0 : V.titleId,
        Z = null != (t = null == V ? void 0 : V.errorId) ? t : m,
        S = i.useMemo(
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
        innerClassName: l()(a, h.textArea),
        id: o,
        maxCharacterCount: f,
        onChange: function (e, t, r) {
            p(t), I(r);
        },
        placeholder: j,
        required: O,
        channel: b,
        textValue: P,
        richValue: N,
        type: S,
        onBlur: () => {
            T.current = !1;
        },
        onFocus: () => {
            T.current = !0;
        },
        focused: T.current,
        onSubmit: null != x ? x : v,
        disableThemedBackground: !y,
        parentModalKey: U,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === q &&
                (0, n.jsx)(C, {
                    hasError: null != V.error || (null != f && P.length > f),
                    text: P,
                    maxLength: f
                }),
            null != f &&
                (0, n.jsx)(A.nn4, {
                    id: m,
                    children: g.intl.format(g.t['+DFxLS'], { maxLength: f })
                })
        ]
    });
}
