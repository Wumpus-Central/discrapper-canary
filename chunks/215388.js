A.d(t, { Z: () => C }), A(388685);
var r = A(951288),
    n = A(647438),
    a = A(120356),
    l = A.n(a),
    i = A(772848),
    o = A(481060),
    s = A(752305),
    d = A(893718),
    c = A(131704),
    u = A(703558),
    g = A(981631),
    f = A(388032),
    p = A(980272),
    m = A(258422);
let h = (0, i.Z)(),
    v = (0, c.kt)({
        id: "1",
        type: g.d4z.DM,
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
    let { hasError: A, maxLength: n, text: a } = e;
    return (0, r.jsxs)("div", {
        className: l()(m.maxLength, { [m.errorOverflow]: A }),
        "aria-hidden": "true",
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, " ", null != n && "/ ".concat(n)],
    });
}
function C(e) {
    var t;
    let {
            "aria-labelledby": A,
            className: a,
            id: i,
            autoFocus: c,
            maxLength: g,
            onChange: m,
            onSubmit: C,
            showCharacterCount: j = !1,
            placeholder: x,
            required: U,
            value: V,
            enableThemedBackground: O = !1,
            parentModalKey: P,
            label: F,
            errorMessage: y,
        } = e,
        I = (0, o.Gc0)(),
        [N, T] = n.useState(() => (0, s.JM)(V)),
        K = n.useRef(!0 === c),
        Z = null != A ? A : null == I ? void 0 : I.titleId,
        W = null != (t = null == I ? void 0 : I.errorId) ? t : h;
    function X(e, t, A) {
        m(t), T(A);
    }
    let Q = n.useMemo(
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
    return (0, r.jsx)(o.gNt, {
        label: F,
        errorMessage: y,
        id: i,
        required: U,
        children: (e) => {
            var t, A;
            return (0, r.jsxs)(d.ZP, {
                id: null != (t = null == e ? void 0 : e.controlId) ? t : i,
                "aria-describedby": null != (A = null == e ? void 0 : e.describedById) ? A : W,
                "aria-labelledby": Z,
                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                className: p.textArea,
                innerClassName: l()(a, p.textAreaInner),
                maxCharacterCount: g,
                onChange: X,
                placeholder: x,
                required: U,
                channel: v,
                textValue: V,
                richValue: N,
                type: Q,
                onBlur: () => {
                    K.current = !1;
                },
                onFocus: () => {
                    K.current = !0;
                },
                focused: K.current,
                onSubmit: null != C ? C : q,
                disableThemedBackground: !O,
                parentModalKey: P,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [
                    !0 === j &&
                        (0, r.jsx)(b, {
                            hasError: null != I.error || (null != g && V.length > g),
                            text: V,
                            maxLength: g,
                        }),
                    null != g &&
                        (0, r.jsx)(o.nn4, {
                            id: h,
                            children: f.intl.format(f.t["+DFxLS"], { maxLength: g }),
                        }),
                ],
            });
        },
    });
}
