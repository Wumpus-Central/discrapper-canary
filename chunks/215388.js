A.d(t, { Z: () => j }), A(388685);
var r = A(951288),
    n = A(647438),
    a = A(120356),
    l = A.n(a),
    i = A(772848),
    o = A(886025),
    s = A(481060),
    d = A(752305),
    c = A(893718),
    u = A(131704),
    g = A(703558),
    f = A(981631),
    p = A(388032),
    m = A(231319),
    h = A(8542);
let v = (0, i.Z)(),
    q = (0, u.kt)({
        id: "1",
        type: f.d4z.DM,
    });
function b() {
    return new Promise((e) => {
        e({
            shouldClear: !1,
            shouldRefocus: !0,
        });
    });
}
function C(e) {
    var t;
    let { hasError: A, maxLength: n, text: a } = e;
    return (0, r.jsxs)("div", {
        className: l()(h.maxLength, { [h.errorOverflow]: A }),
        "aria-hidden": "true",
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, " ", null != n && "/ ".concat(n)],
    });
}
function j(e) {
    var t;
    let {
            "aria-labelledby": A,
            className: a,
            id: i,
            autoFocus: u,
            maxLength: f,
            onChange: h,
            onSubmit: j,
            showCharacterCount: x = !1,
            placeholder: U,
            required: V,
            value: O,
            enableThemedBackground: P = !1,
            parentModalKey: F,
            label: y,
            errorMessage: I,
        } = e,
        N = (0, s.Gc0)(),
        [T, K] = n.useState(() => (0, d.JM)(O)),
        Z = n.useRef(!0 === u),
        W = null != A ? A : null == N ? void 0 : N.titleId,
        X = null != (t = null == N ? void 0 : N.errorId) ? t : v;
    function Q(e, t, A) {
        h(t), K(A);
    }
    let z = n.useMemo(
        () => ({
            analyticsName: "simple",
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0,
            },
            disableAutoFocus: !0 !== u,
            drafts: { type: g.d.ChannelMessage },
            emojis: { button: !0 },
            permissions: { requireSendMessages: !1 },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0,
            },
        }),
        [u],
    );
    return (0, r.jsx)(o.N, {
        label: y,
        errorMessage: I,
        id: i,
        required: V,
        children: (e) => {
            var t, A;
            return (0, r.jsxs)(c.ZP, {
                id: null != (t = null == e ? void 0 : e.controlId) ? t : i,
                "aria-describedby": null != (A = null == e ? void 0 : e.describedById) ? A : X,
                "aria-labelledby": W,
                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                className: m.textArea,
                innerClassName: l()(a, m.textAreaInner),
                maxCharacterCount: f,
                onChange: Q,
                placeholder: U,
                required: V,
                channel: q,
                textValue: O,
                richValue: T,
                type: z,
                onBlur: () => {
                    Z.current = !1;
                },
                onFocus: () => {
                    Z.current = !0;
                },
                focused: Z.current,
                onSubmit: null != j ? j : b,
                disableThemedBackground: !P,
                parentModalKey: F,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [
                    !0 === x &&
                        (0, r.jsx)(C, {
                            hasError: null != N.error || (null != f && O.length > f),
                            text: O,
                            maxLength: f,
                        }),
                    null != f &&
                        (0, r.jsx)(s.nn4, {
                            id: v,
                            children: p.intl.format(p.t["+DFxLS"], { maxLength: f }),
                        }),
                ],
            });
        },
    });
}
