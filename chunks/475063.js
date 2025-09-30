n.d(t, { K: () => T }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(15127),
    c = n(841878),
    u = n(74655),
    d = n(897037),
    f = n(377089),
    _ = n(680874),
    p = n(231282),
    h = n(154257);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = 10,
    I = 7.23;
function T(e) {
    var t,
        {
            value: n,
            placeholder: a = "",
            autoFocus: l = !1,
            autosize: _ = !1,
            minLength: m,
            maxLength: E,
            error: O,
            defaultDirty: T,
            showCharacterCount: N,
            showRemainingCharacterCount: R = !0,
            rows: P = 3,
            disabled: w,
            label: D,
            hideLabel: L,
            description: x,
            helperText: j,
            successMessage: M,
            inputRef: k,
        } = e,
        U = y(e, [
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
    let G = (0, f.U)("UserSettingsDesignSystems"),
        B = (0, d.m)({
            validateOn: "change",
            error: O,
            value: n,
            minLength: m,
            maxLength: E,
            defaultDirty: T,
        }),
        Z = i.useMemo(() => {
            if (G) return;
            if (null == E) return v;
            let e = "".concat(E).length;
            return I * (e += "".concat(E, " / ").length) + v;
        }, [G, E]),
        F = (e) => {
            let { onChange: t } = U;
            null == t || t(e.currentTarget.value), B.setShouldValidate(!0);
        },
        V =
            G && N
                ? (0, r.jsx)(c.H, {
                      value: n,
                      maxLength: R && null != E ? E : void 0,
                  })
                : null;
    return (0, r.jsx)(s.NIc, {
        label: D,
        hideLabel: L,
        description: x,
        helperText: j,
        successMessage: M,
        trailingContent: V,
        errorMessage: B.hasError && null != (t = B.errorMessage) ? t : void 0,
        children: (0, r.jsxs)(u.U, {
            validation: B,
            disabled: w,
            children: [
                (0, r.jsx)(s.tEY, {
                    children: (0, r.jsx)(
                        S,
                        b(
                            g(
                                {
                                    autosize: _,
                                    className: o()(p.textArea, h.scrollbarDefault),
                                    style: { paddingRight: Z },
                                    placeholder: a,
                                    value: n,
                                    autoFocus: l,
                                    minLength: m,
                                    maxLength: E,
                                    rows: P,
                                    disabled: w,
                                },
                                U,
                            ),
                            {
                                onChange: F,
                                ref: k,
                            },
                        ),
                    ),
                }),
                G
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              N
                                  ? (0, r.jsx)(A, {
                                        value: n,
                                        maxLength: E,
                                        hasError: B.hasError,
                                    })
                                  : null,
                              N || !1 === R
                                  ? null
                                  : (0, r.jsx)(C, {
                                        value: n,
                                        maxLength: E,
                                    }),
                          ],
                      }),
            ],
        }),
    });
}
function S(e) {
    var { "aria-labelledby": t, autosize: n } = e,
        a = y(e, ["aria-labelledby", "autosize"]);
    let o = (0, l.Gc)(),
        c = i.useContext(s.UgQ),
        u = n ? _.l : "textarea";
    return (0, r.jsx)(
        u,
        b(g({}, a), {
            id: null == c ? void 0 : c.controlId,
            "aria-labelledby": null != t ? t : o.titleId,
            "aria-describedby": null == c ? void 0 : c.describedById,
            "aria-errormessage": null == c ? void 0 : c.errorMessageId,
            "aria-invalid": (null == c ? void 0 : c.errorMessageId) != null,
        }),
    );
}
function A(e) {
    var t;
    let { value: n, maxLength: i, hasError: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(p.maxLength, { [p.errorOverflow]: a }),
        "aria-hidden": "true",
        children: [null != (t = null == n ? void 0 : n.length) ? t : 0, " ", null != i && "/ ".concat(i)],
    });
}
function C(e) {
    let { value: t, maxLength: n } = e,
        a = i.useMemo(() => (null == n ? null : n - (null != t ? t.length : 0)), [n, t]);
    return null == a
        ? null
        : (0, r.jsx)("div", {
              className: o()(p.maxLength, { [p.errorOverflow]: a < 0 }),
              "aria-hidden": "true",
              children: a,
          });
}
