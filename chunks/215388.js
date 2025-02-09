t.d(e, { Z: () => x }), t(47120);
var n = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    i = t(772848),
    o = t(481060),
    s = t(752305),
    d = t(893718),
    c = t(131704),
    u = t(703558),
    g = t(981631),
    m = t(388032),
    h = t(757422),
    f = t(943257);
let C = (0, i.Z)(),
    p = (0, c.kt)({
        id: '1',
        type: g.d4z.DM
    });
function q() {
    return new Promise((A) => {
        A({
            shouldClear: !1,
            shouldRefocus: !0
        });
    });
}
function v(A) {
    var e;
    let { hasError: t, maxLength: a, text: l } = A;
    return (0, n.jsxs)('div', {
        className: r()(f.maxLength, { [f.errorOverflow]: t }),
        'aria-hidden': 'true',
        children: [null !== (e = null == l ? void 0 : l.length) && void 0 !== e ? e : 0, ' ', null != a && '/ '.concat(a)]
    });
}
function x(A) {
    var e;
    let { 'aria-labelledby': t, className: l, id: i, autoFocus: c, maxLength: g, onChange: f, onSubmit: x, showCharacterCount: U = !1, placeholder: b, required: V, value: j, enableThemedBackground: N = !1, parentModalKey: I } = A,
        T = (0, o.Gc0)(),
        [F, K] = a.useState(() => (0, s.JM)(j)),
        P = a.useRef(!0 === c),
        Z = null != t ? t : null == T ? void 0 : T.titleId,
        z = null !== (e = null == T ? void 0 : T.errorId) && void 0 !== e ? e : C,
        X = a.useMemo(
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
        'aria-describedby': z,
        'aria-labelledby': Z,
        innerClassName: r()(l, h.textArea),
        id: i,
        maxCharacterCount: g,
        onChange: function (A, e, t) {
            f(e), K(t);
        },
        placeholder: b,
        required: V,
        channel: p,
        textValue: j,
        richValue: F,
        type: X,
        onBlur: () => {
            P.current = !1;
        },
        onFocus: () => {
            P.current = !0;
        },
        focused: P.current,
        onSubmit: null != x ? x : q,
        disableThemedBackground: !N,
        parentModalKey: I,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === U &&
                (0, n.jsx)(v, {
                    hasError: null != T.error || (null != g && j.length > g),
                    text: j,
                    maxLength: g
                }),
            null != g &&
                (0, n.jsx)(o.nn4, {
                    id: C,
                    children: m.intl.format(m.t['+DFxLS'], { maxLength: g })
                })
        ]
    });
}
