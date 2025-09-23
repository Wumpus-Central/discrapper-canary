t.d(A, { Z: () => U }), t(388685);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
    i = t(772848),
    o = t(886025),
    s = t(481060),
    d = t(752305),
    u = t(893718),
    c = t(131704),
    g = t(703558),
    f = t(981631),
    p = t(388032),
    m = t(980272),
    q = t(258422);
let h = (0, i.Z)(),
    v = (0, c.kt)({
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
    var A;
    let { hasError: t, maxLength: r, text: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(q.maxLength, { [q.errorOverflow]: t }),
        "aria-hidden": "true",
        children: [null != (A = null == l ? void 0 : l.length) ? A : 0, " ", null != r && "/ ".concat(r)],
    });
}
function U(e) {
    var A;
    let {
            "aria-labelledby": t,
            className: l,
            id: i,
            autoFocus: c,
            maxLength: f,
            onChange: q,
            onSubmit: U,
            showCharacterCount: j = !1,
            placeholder: V,
            required: x,
            value: P,
            enableThemedBackground: O = !1,
            parentModalKey: F,
            label: I,
            errorMessage: K,
        } = e,
        y = (0, s.Gc0)(),
        [N, T] = r.useState(() => (0, d.JM)(P)),
        X = r.useRef(!0 === c),
        Z = null != t ? t : null == y ? void 0 : y.titleId,
        W = null != (A = null == y ? void 0 : y.errorId) ? A : h;
    function Q(e, A, t) {
        q(A), T(t);
    }
    let z = r.useMemo(
        () => ({
            analyticsName: "simple",
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0,
            },
            disableAutoFocus: !0 !== c,
            drafts: { type: g.d.ChannelMessage },
            emojis: { button: !0 },
            permissions: { requireSendMessages: !1 },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0,
            },
        }),
        [c],
    );
    return (0, n.jsx)(o.N, {
        label: I,
        errorMessage: K,
        id: i,
        required: x,
        children: (e) => {
            var A, t;
            return (0, n.jsxs)(u.ZP, {
                id: null != (A = null == e ? void 0 : e.controlId) ? A : i,
                "aria-describedby": null != (t = null == e ? void 0 : e.describedById) ? t : W,
                "aria-labelledby": Z,
                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                className: m.textArea,
                innerClassName: a()(l, m.textAreaInner),
                maxCharacterCount: f,
                onChange: Q,
                placeholder: V,
                required: x,
                channel: v,
                textValue: P,
                richValue: N,
                type: z,
                onBlur: () => {
                    X.current = !1;
                },
                onFocus: () => {
                    X.current = !0;
                },
                focused: X.current,
                onSubmit: null != U ? U : b,
                disableThemedBackground: !O,
                parentModalKey: F,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [
                    !0 === j &&
                        (0, n.jsx)(C, {
                            hasError: null != y.error || (null != f && P.length > f),
                            text: P,
                            maxLength: f,
                        }),
                    null != f &&
                        (0, n.jsx)(s.nn4, {
                            id: h,
                            children: p.intl.format(p.t["+DFxLS"], { maxLength: f }),
                        }),
                ],
            });
        },
    });
}
