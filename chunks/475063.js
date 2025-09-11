n.d(t, { K: () => A }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(15127),
    c = n(841878),
    u = n(74655),
    d = n(897037),
    f = n(886025),
    _ = n(440562),
    p = n(377089),
    h = n(680874),
    m = n(231282),
    g = n(154257);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let T = 10,
    S = 7.23;
function A(e) {
    var t,
        {
            value: n,
            placeholder: a = "",
            autoFocus: l = !1,
            autosize: _ = !1,
            minLength: h,
            maxLength: E,
            error: y,
            defaultDirty: I,
            showCharacterCount: A,
            showRemainingCharacterCount: P = !0,
            rows: w = 3,
            disabled: D,
            label: x,
            hideLabel: L,
            description: j,
            helperText: k,
            successMessage: M,
            inputRef: U,
        } = e,
        G = v(e, [
            "value",
            "placeholder",
            "autoFocus",
            "autosize",
            "minLength",
            "maxLength",
            "error",
            "defaultDirty",
            "showCharacterCount",
            "showRemainingCharacterCount",
            "rows",
            "disabled",
            "label",
            "hideLabel",
            "description",
            "helperText",
            "successMessage",
            "inputRef",
        ]);
    let B = (0, p.U)("UserSettingsDesignSystems"),
        Z = (0, d.m)({
            validateOn: "change",
            error: y,
            value: n,
            minLength: h,
            maxLength: E,
            defaultDirty: I,
        }),
        F = i.useMemo(() => {
            if (B) return;
            if (null == E) return T;
            let e = "".concat(E).length;
            return S * (e += "".concat(E, " / ").length) + T;
        }, [B, E]),
        V = (e) => {
            let { onChange: t } = G;
            null == t || t(e.currentTarget.value), Z.setShouldValidate(!0);
        },
        H =
            B && A
                ? (0, r.jsx)(c.H, {
                      value: n,
                      maxLength: P && null != E ? E : void 0,
                  })
                : null;
    return (0, r.jsx)(f.N, {
        label: x,
        hideLabel: L,
        description: j,
        helperText: k,
        successMessage: M,
        trailingContent: H,
        errorMessage: Z.hasError && null != (t = Z.errorMessage) ? t : void 0,
        children: (0, r.jsxs)(u.U, {
            validation: Z,
            disabled: D,
            children: [
                (0, r.jsx)(s.tEY, {
                    children: (0, r.jsx)(
                        C,
                        O(
                            b(
                                {
                                    autosize: _,
                                    className: o()(m.textArea, g.scrollbarDefault),
                                    style: { paddingRight: F },
                                    placeholder: a,
                                    value: n,
                                    autoFocus: l,
                                    minLength: h,
                                    maxLength: E,
                                    rows: w,
                                    disabled: D,
                                },
                                G,
                            ),
                            {
                                onChange: V,
                                ref: U,
                            },
                        ),
                    ),
                }),
                B
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              A
                                  ? (0, r.jsx)(N, {
                                        value: n,
                                        maxLength: E,
                                        hasError: Z.hasError,
                                    })
                                  : null,
                              A || !1 === P
                                  ? null
                                  : (0, r.jsx)(R, {
                                        value: n,
                                        maxLength: E,
                                    }),
                          ],
                      }),
            ],
        }),
    });
}
function C(e) {
    var { "aria-labelledby": t, autosize: n } = e,
        a = v(e, ["aria-labelledby", "autosize"]);
    let o = (0, l.Gc)(),
        s = i.useContext(_.U),
        c = n ? h.l : "textarea";
    return (0, r.jsx)(
        c,
        O(b({}, a), {
            id: null == s ? void 0 : s.controlId,
            "aria-labelledby": null != t ? t : o.titleId,
            "aria-describedby": null == s ? void 0 : s.describedById,
            "aria-errormessage": null == s ? void 0 : s.errorMessageId,
            "aria-invalid": (null == s ? void 0 : s.errorMessageId) != null,
        }),
    );
}
function N(e) {
    var t;
    let { value: n, maxLength: i, hasError: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(m.maxLength, { [m.errorOverflow]: a }),
        "aria-hidden": "true",
        children: [null != (t = null == n ? void 0 : n.length) ? t : 0, " ", null != i && "/ ".concat(i)],
    });
}
function R(e) {
    let { value: t, maxLength: n } = e,
        a = i.useMemo(() => (null == n ? null : n - (null != t ? t.length : 0)), [n, t]);
    return null == a
        ? null
        : (0, r.jsx)("div", {
              className: o()(m.maxLength, { [m.errorOverflow]: a < 0 }),
              "aria-hidden": "true",
              children: a,
          });
}
