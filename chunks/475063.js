n.d(t, { K: () => I });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(15127),
    c = n(841878),
    u = n(897037),
    d = n(377089),
    f = n(680874),
    _ = n(231282),
    p = n(154257);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = 10,
    v = 7.23;
function I(e) {
    var t,
        {
            value: n,
            placeholder: a = "",
            autoFocus: l = !1,
            autosize: f = !1,
            minLength: h,
            maxLength: g,
            error: y,
            defaultDirty: I,
            showCharacterCount: C,
            showRemainingCharacterCount: N = !0,
            rows: R = 3,
            inputRef: P,
        } = e,
        D = b(e, [
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
            "inputRef",
        ]);
    let { fieldProps: w, props: L } = (0, s.XF_)(D),
        { disabled: x } = w,
        M = (0, d.U)("UserSettingsDesignSystems"),
        k = (0, u.m)({
            validateOn: "change",
            error: y,
            value: n,
            minLength: h,
            maxLength: g,
            defaultDirty: I,
        }),
        j = i.useMemo(() => {
            if (M) return;
            if (null == g) return O;
            let e = "".concat(g).length;
            return v * (e += "".concat(g, " / ").length) + O;
        }, [M, g]),
        U = (e) => {
            let { onChange: t } = L;
            null == t || t(e.currentTarget.value), k.setShouldValidate(!0);
        },
        G =
            M && C
                ? (0, r.jsx)(c.H, {
                      value: n,
                      maxLength: N && null != g ? g : void 0,
                  })
                : null;
    return (0, r.jsx)(
        s.gNt,
        E(m({}, w), {
            trailingAuxiliaryContent: G,
            errorMessage: k.hasError && null != (t = k.errorMessage) ? t : void 0,
            children: (0, r.jsxs)(s.UPk, {
                validation: k,
                disabled: x,
                children: [
                    (0, r.jsx)(s.tEY, {
                        children: (0, r.jsx)(
                            T,
                            E(
                                m(
                                    {
                                        autosize: f,
                                        className: o()(_.textArea, p.scrollbarDefault),
                                        style: { paddingRight: j },
                                        placeholder: a,
                                        value: n,
                                        autoFocus: l,
                                        minLength: h,
                                        maxLength: g,
                                        rows: R,
                                        disabled: x,
                                        "data-mana-component": "text-area",
                                    },
                                    L,
                                ),
                                {
                                    onChange: U,
                                    ref: P,
                                },
                            ),
                        ),
                    }),
                    M
                        ? null
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  C
                                      ? (0, r.jsx)(S, {
                                            value: n,
                                            maxLength: g,
                                            hasError: k.hasError,
                                        })
                                      : null,
                                  C || !1 === N
                                      ? null
                                      : (0, r.jsx)(A, {
                                            value: n,
                                            maxLength: g,
                                        }),
                              ],
                          }),
                ],
            }),
        }),
    );
}
function T(e) {
    var { "aria-labelledby": t, autosize: n } = e,
        a = b(e, ["aria-labelledby", "autosize"]);
    let o = (0, l.Gc)(),
        c = i.useContext(s.zbb),
        u = n ? f.l : "textarea";
    return (0, r.jsx)(
        u,
        E(m({}, a), {
            id: null == c ? void 0 : c.controlId,
            "aria-labelledby": null != t ? t : o.titleId,
            "aria-describedby": null == c ? void 0 : c.describedById,
            "aria-errormessage": null == c ? void 0 : c.errorMessageId,
            "aria-invalid": (null == c ? void 0 : c.errorMessageId) != null,
        }),
    );
}
function S(e) {
    var t;
    let { value: n, maxLength: i, hasError: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(_.maxLength, { [_.errorOverflow]: a }),
        "aria-hidden": "true",
        children: [null != (t = null == n ? void 0 : n.length) ? t : 0, " ", null != i && "/ ".concat(i)],
    });
}
function A(e) {
    let { value: t, maxLength: n } = e,
        a = i.useMemo(() => (null == n ? null : n - (null != t ? t.length : 0)), [n, t]);
    return null == a
        ? null
        : (0, r.jsx)("div", {
              className: o()(_.maxLength, { [_.errorOverflow]: a < 0 }),
              "aria-hidden": "true",
              children: a,
          });
}
