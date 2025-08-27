n.d(t, { K: () => R }), n(539854);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(772848),
    l = n(84735),
    c = n(15127),
    u = n(766646),
    d = n(74655),
    f = n(897037),
    _ = n(377089),
    p = n(680874),
    h = n(388032),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let T = (0, s.Z)(),
    S = (0, s.Z)(),
    A = (0, s.Z)(),
    C = 10,
    N = 7.23;
function R(e) {
    var t,
        {
            value: n,
            placeholder: o = "",
            autoFocus: s = !1,
            autosize: E = !1,
            minLength: y,
            maxLength: I,
            error: R,
            defaultDirty: D,
            showCharacterCount: x,
            showRemainingCharacterCount: L = !0,
            "aria-labelledby": j,
            rows: M = 3,
            disabled: k,
            helperText: U,
            successMessage: G,
            inputRef: B,
        } = e,
        Z = v(e, [
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
            "aria-labelledby",
            "rows",
            "disabled",
            "helperText",
            "successMessage",
            "inputRef",
        ]);
    let F = (0, _.U)("UserSettingsDesignSystems"),
        V = F ? !1 !== x : x,
        H = (0, f.m)({
            validateOn: "change",
            error: R,
            value: n,
            minLength: y,
            maxLength: I,
            defaultDirty: D,
        }),
        Y = i.useContext(c.q3),
        W = null != j ? j : null == Y ? void 0 : Y.titleId,
        K = i.useMemo(() => {
            let e = [],
                t = null == Y ? void 0 : Y.errorId;
            return (
                null != t && e.push(t),
                null != R ? e.push(T) : (null != I && e.push(A), null != y && e.push(S)),
                e.length > 0 ? e.join(" ") : void 0
            );
        }, [R, null == Y ? void 0 : Y.errorId, I, y]),
        z = i.useMemo(() => {
            if (F) return;
            if (null == I) return C;
            let e = "".concat(I).length;
            return N * (e += "".concat(I, " / ").length) + C;
        }, [F, I]),
        q = (e) => {
            let { onChange: t } = Z;
            null == t || t(e.currentTarget.value), H.setShouldValidate(!0);
        },
        X = E ? p.l : "textarea";
    return (0, r.jsxs)(d.U, {
        validation: H,
        disabled: k,
        helperText: U,
        successMessage: G,
        characterCount: F && V ? (null != (t = null == n ? void 0 : n.length) ? t : 0) : void 0,
        characterCountMaxLength: F && null != I ? I : void 0,
        children: [
            (0, r.jsx)(l.t, {
                children: (0, r.jsx)(
                    X,
                    O(
                        b(
                            {
                                className: a()(m.textArea, g.scrollbarDefault),
                                "aria-labelledby": W,
                                "aria-describedby": K,
                                "aria-invalid": H.hasError,
                                style: { paddingRight: z },
                                placeholder: o,
                                value: n,
                                autoFocus: s,
                                minLength: y,
                                maxLength: I,
                                rows: M,
                                disabled: k,
                            },
                            Z,
                        ),
                        {
                            onChange: q,
                            ref: B,
                        },
                    ),
                ),
            }),
            null != y &&
                (0, r.jsx)(u.n, {
                    id: S,
                    children: h.intl.format(h.t["bmQU//"], { minLength: y }),
                }),
            null != I &&
                (0, r.jsx)(u.n, {
                    id: A,
                    children: h.intl.format(h.t["+DFxLS"], { maxLength: I }),
                }),
            !F && V
                ? (0, r.jsx)(P, {
                      value: n,
                      maxLength: I,
                      hasError: H.hasError,
                  })
                : null,
            F || V || !1 === L
                ? null
                : (0, r.jsx)(w, {
                      value: n,
                      maxLength: I,
                  }),
        ],
    });
}
function P(e) {
    var t;
    let { value: n, maxLength: i, hasError: o } = e;
    return (0, r.jsxs)("div", {
        className: a()(m.maxLength, { [m.errorOverflow]: o }),
        "aria-hidden": "true",
        children: [null != (t = null == n ? void 0 : n.length) ? t : 0, " ", null != i && "/ ".concat(i)],
    });
}
function w(e) {
    let { value: t, maxLength: n } = e,
        o = i.useMemo(() => (null == n ? null : n - (null != t ? t.length : 0)), [n, t]);
    return null == o
        ? null
        : (0, r.jsx)("div", {
              className: a()(m.maxLength, { [m.errorOverflow]: o < 0 }),
              "aria-hidden": "true",
              children: o,
          });
}
