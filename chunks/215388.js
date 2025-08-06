A.d(t, { Z: () => v }), A(388685);
var n = A(255367),
    r = A(73800),
    l = A(120356),
    a = A.n(l),
    o = A(772848),
    i = A(481060),
    s = A(752305),
    d = A(893718),
    c = A(131704),
    u = A(703558),
    f = A(981631),
    g = A(388032),
    p = A(3840),
    m = A(30517);
let h = (0, o.Z)(),
    C = (0, c.kt)({
        id: "1",
        type: f.d4z.DM,
    });
function q() {
    return new Promise((e) => {
        e({
            shouldClear: !1,
            shouldRefocus: !0,
        });
    });
}
function b(e) {
    var t;
    let { hasError: A, maxLength: r, text: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(m.maxLength, { [m.errorOverflow]: A }),
        "aria-hidden": "true",
        children: [null != (t = null == l ? void 0 : l.length) ? t : 0, " ", null != r && "/ ".concat(r)],
    });
}
function v(e) {
    var t;
    let {
            "aria-labelledby": A,
            className: l,
            id: o,
            autoFocus: c,
            maxLength: f,
            onChange: m,
            onSubmit: v,
            showCharacterCount: x = !1,
            placeholder: j,
            required: U,
            value: V,
            enableThemedBackground: P = !1,
            parentModalKey: O,
        } = e,
        I = (0, i.Gc0)(),
        [N, F] = r.useState(() => (0, s.JM)(V)),
        y = r.useRef(!0 === c),
        K = null != A ? A : null == I ? void 0 : I.titleId,
        T = null != (t = null == I ? void 0 : I.errorId) ? t : h,
        Z = r.useMemo(
            () => ({
                analyticsName: "simple",
                autocomplete: {
                    alwaysUseLayer: !0,
                    small: !0,
                },
                disableAutoFocus: !0 !== c,
                drafts: { type: u.d.ChannelMessage },
                emojis: { button: !0 },
                permissions: { requireSendMessages: !1 },
                submit: {
                    useDisabledStylesOnSubmit: !0,
                    disableEnterToSubmit: !0,
                },
            }),
            [c],
        );
    return (0, n.jsxs)(d.ZP, {
        "aria-describedby": T,
        "aria-labelledby": K,
        innerClassName: a()(l, p.textArea),
        id: o,
        maxCharacterCount: f,
        onChange: function (e, t, A) {
            m(t), F(A);
        },
        placeholder: j,
        required: U,
        channel: C,
        textValue: V,
        richValue: N,
        type: Z,
        onBlur: () => {
            y.current = !1;
        },
        onFocus: () => {
            y.current = !0;
        },
        focused: y.current,
        onSubmit: null != v ? v : q,
        disableThemedBackground: !P,
        parentModalKey: O,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === x &&
                (0, n.jsx)(b, {
                    hasError: null != I.error || (null != f && V.length > f),
                    text: V,
                    maxLength: f,
                }),
            null != f &&
                (0, n.jsx)(i.nn4, {
                    id: h,
                    children: g.intl.format(g.t["+DFxLS"], { maxLength: f }),
                }),
        ],
    });
}
