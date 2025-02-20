r.d(t, { Z: () => q }), r(47120);
var A = r(200651),
    n = r(192379),
    o = r(120356),
    a = r.n(o),
    l = r(772848),
    i = r(481060),
    s = r(752305),
    c = r(893718),
    d = r(131704),
    u = r(703558),
    f = r(981631),
    g = r(388032),
    p = r(207798),
    m = r(549906);
let h = (0, l.Z)(),
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
    let { hasError: r, maxLength: n, text: o } = e;
    return (0, A.jsxs)('div', {
        className: a()(m.maxLength, { [m.errorOverflow]: r }),
        'aria-hidden': 'true',
        children: [null !== (t = null == o ? void 0 : o.length) && void 0 !== t ? t : 0, ' ', null != n && '/ '.concat(n)]
    });
}
function q(e) {
    var t;
    let { 'aria-labelledby': r, className: o, id: l, autoFocus: d, maxLength: f, onChange: m, onSubmit: q, showCharacterCount: x = !1, placeholder: j, required: N, value: O, enableThemedBackground: U = !1, parentModalKey: P } = e,
        V = (0, i.Gc0)(),
        [y, W] = n.useState(() => (0, s.JM)(O)),
        I = n.useRef(!0 === d),
        T = null != r ? r : null == V ? void 0 : V.titleId,
        F = null !== (t = null == V ? void 0 : V.errorId) && void 0 !== t ? t : h,
        K = n.useMemo(
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
    return (0, A.jsxs)(c.Z, {
        'aria-describedby': F,
        'aria-labelledby': T,
        innerClassName: a()(o, p.textArea),
        id: l,
        maxCharacterCount: f,
        onChange: function (e, t, r) {
            m(t), W(r);
        },
        placeholder: j,
        required: N,
        channel: b,
        textValue: O,
        richValue: y,
        type: K,
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
                (0, A.jsx)(C, {
                    hasError: null != V.error || (null != f && O.length > f),
                    text: O,
                    maxLength: f
                }),
            null != f &&
                (0, A.jsx)(i.nn4, {
                    id: h,
                    children: g.NW.format(g.t['+DFxLS'], { maxLength: f })
                })
        ]
    });
}
