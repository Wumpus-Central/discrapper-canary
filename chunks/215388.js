A.d(t, { Z: () => C }), A(388685);
var n = A(54381),
    r = A(473749),
    a = A(120356),
    l = A.n(a),
    i = A(772848),
    o = A(481060),
    s = A(752305),
    d = A(893718),
    c = A(131704),
    u = A(703558),
    f = A(981631),
    g = A(388032),
    p = A(108527),
    m = A(132648);
let v = (0, i.Z)(),
    h = (0, c.createChannelRecord)({
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
    let { hasError: A, maxLength: r, text: a } = e;
    return (0, n.jsxs)("div", {
        className: l()(m.maxLength, { [m.errorOverflow]: A }),
        "aria-hidden": "true",
        children: [null != (t = null == a ? void 0 : a.length) ? t : 0, " ", null != r && "/ ".concat(r)],
    });
}
function C(e) {
    var t;
    let {
            "aria-labelledby": A,
            className: a,
            id: i,
            autoFocus: c,
            maxLength: f,
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
        N = (0, o.Gc0)(),
        [I, K] = r.useState(() => (0, s.JM)(x)),
        T = r.useRef(!0 === c),
        Z = null != A ? A : null == N ? void 0 : N.titleId,
        W = null != (t = null == N ? void 0 : N.errorId) ? t : v;
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
    return (0, n.jsx)(o.gNt, {
        label: F,
        errorMessage: y,
        id: i,
        required: V,
        children: (e) => {
            var t, A;
            return (0, n.jsxs)(d.ZP, {
                id: null != (t = null == e ? void 0 : e.controlId) ? t : i,
                "aria-describedby": null != (A = null == e ? void 0 : e.describedById) ? A : W,
                "aria-labelledby": Z,
                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                className: p.textArea,
                innerClassName: l()(a, p.textAreaInner),
                maxCharacterCount: f,
                onChange: X,
                placeholder: j,
                required: V,
                channel: h,
                textValue: x,
                richValue: I,
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
                            hasError: null != N.error || (null != f && x.length > f),
                            text: x,
                            maxLength: f,
                        }),
                    null != f &&
                        (0, n.jsx)(o.nn4, {
                            id: v,
                            children: g.intl.format(g.t["+DFxLc"], { maxLength: f }),
                        }),
                ],
            });
        },
    });
}
