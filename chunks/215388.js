t.d(e, { Z: () => v }), t(388685);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
    i = t(772848),
    o = t(481060),
    s = t(752305),
    d = t(893718),
    c = t(131704),
    u = t(703558),
    g = t(981631),
    f = t(388032),
    p = t(980272),
    m = t(258422);
let q = (0, i.Z)(),
    h = (0, c.kt)({
        id: "1",
        type: g.d4z.DM,
    });
function b() {
    return new Promise((A) => {
        A({
            shouldClear: !1,
            shouldRefocus: !0,
        });
    });
}
function C(A) {
    var e;
    let { hasError: t, maxLength: r, text: l } = A;
    return (0, n.jsxs)("div", {
        className: a()(m.maxLength, { [m.errorOverflow]: t }),
        "aria-hidden": "true",
        children: [null != (e = null == l ? void 0 : l.length) ? e : 0, " ", null != r && "/ ".concat(r)],
    });
}
function v(A) {
    var e;
    let {
            "aria-labelledby": t,
            className: l,
            id: i,
            autoFocus: c,
            maxLength: g,
            onChange: m,
            onSubmit: v,
            showCharacterCount: U = !1,
            placeholder: j,
            required: x,
            value: V,
            enableThemedBackground: P = !1,
            parentModalKey: O,
        } = A,
        F = (0, o.Gc0)(),
        [I, K] = r.useState(() => (0, s.JM)(V)),
        y = r.useRef(!0 === c),
        N = null != t ? t : null == F ? void 0 : F.titleId,
        T = null != (e = null == F ? void 0 : F.errorId) ? e : q,
        X = r.useMemo(
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
        "aria-labelledby": N,
        innerClassName: a()(l, p.textArea),
        id: i,
        maxCharacterCount: g,
        onChange: function (A, e, t) {
            m(e), K(t);
        },
        placeholder: j,
        required: x,
        channel: h,
        textValue: V,
        richValue: I,
        type: X,
        onBlur: () => {
            y.current = !1;
        },
        onFocus: () => {
            y.current = !0;
        },
        focused: y.current,
        onSubmit: null != v ? v : b,
        disableThemedBackground: !P,
        parentModalKey: O,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === U &&
                (0, n.jsx)(C, {
                    hasError: null != F.error || (null != g && V.length > g),
                    text: V,
                    maxLength: g,
                }),
            null != g &&
                (0, n.jsx)(o.nn4, {
                    id: q,
                    children: f.intl.format(f.t["+DFxLS"], { maxLength: g }),
                }),
        ],
    });
}
