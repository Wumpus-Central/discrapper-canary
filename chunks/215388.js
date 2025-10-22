A.d(t, { Z: () => C }), A(388685);
var n = A(951288),
    r = A(647438),
    a = A(120356),
    i = A.n(a),
    l = A(772848),
    o = A(481060),
    s = A(752305),
    d = A(893718),
    u = A(131704),
    c = A(703558),
    g = A(981631),
    f = A(388032),
    p = A(980272),
    m = A(258422);
let h = (0, l.Z)(),
    v = (0, u.createChannelRecord)({
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
    let { hasError: A, maxLength: r, text: a } = e;
    return (0, n.jsxs)("div", {
        className: i()(m.maxLength, { [m.errorOverflow]: A }),
        "aria-hidden": "true",
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, " ", null != r && "/ ".concat(r)],
    });
}
function C(e) {
    var t;
    let {
            "aria-labelledby": A,
            className: a,
            id: l,
            autoFocus: u,
            maxLength: g,
            onChange: m,
            onSubmit: C,
            showCharacterCount: U = !1,
            placeholder: j,
            required: V,
            value: x,
            enableThemedBackground: O = !1,
            parentModalKey: P,
            label: F,
            errorMessage: y,
        } = e,
        I = (0, o.Gc0)(),
        [N, K] = r.useState(() => (0, s.JM)(x)),
        T = r.useRef(!0 === u),
        Z = null != A ? A : null == I ? void 0 : I.titleId,
        W = null != (t = null == I ? void 0 : I.errorId) ? t : h;
    function X(e, t, A) {
        m(t), K(A);
    }
    let Q = r.useMemo(
        () => ({
            analyticsName: "simple",
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0,
            },
            disableAutoFocus: !0 !== u,
            drafts: { type: c.d.ChannelMessage },
            emojis: { button: !0 },
            permissions: { requireSendMessages: !1 },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0,
            },
        }),
        [u],
    );
    return (0, n.jsx)(o.gNt, {
        label: F,
        errorMessage: y,
        id: l,
        required: V,
        children: (e) => {
            var t, A;
            return (0, n.jsxs)(d.ZP, {
                id: null != (t = null == e ? void 0 : e.controlId) ? t : l,
                "aria-describedby": null != (A = null == e ? void 0 : e.describedById) ? A : W,
                "aria-labelledby": Z,
                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                className: p.textArea,
                innerClassName: i()(a, p.textAreaInner),
                maxCharacterCount: g,
                onChange: X,
                placeholder: j,
                required: V,
                channel: v,
                textValue: x,
                richValue: N,
                type: Q,
                onBlur: () => {
                    T.current = !1;
                },
                onFocus: () => {
                    T.current = !0;
                },
                focused: T.current,
                onSubmit: null != C ? C : q,
                disableThemedBackground: !O,
                parentModalKey: P,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [
                    !0 === U &&
                        (0, n.jsx)(b, {
                            hasError: null != I.error || (null != g && x.length > g),
                            text: x,
                            maxLength: g,
                        }),
                    null != g &&
                        (0, n.jsx)(o.nn4, {
                            id: h,
                            children: f.intl.format(f.t["+DFxLc"], { maxLength: g }),
                        }),
                ],
            });
        },
    });
}
