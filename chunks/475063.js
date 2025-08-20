n.d(t, { K: () => N }), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(84735),
    c = n(15127),
    u = n(766646),
    d = n(557818),
    f = n(897037),
    _ = n(377089),
    p = n(388032),
    h = n(231282),
    m = n(154257);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = (0, s.Z)(),
    T = (0, s.Z)(),
    S = (0, s.Z)(),
    A = 10,
    C = 7.23;
function N(e) {
    var t,
        {
            value: n,
            placeholder: a = "",
            autoFocus: s = !1,
            minLength: g,
            maxLength: b,
            error: v,
            defaultDirty: N,
            showCharacterCountFullPadding: w,
            showCharacterCount: D,
            showRemainingCharacterCount: x = !0,
            "aria-labelledby": L,
            rows: j = 3,
            disabled: M,
            helperText: k,
            successMessage: U,
        } = e,
        G = O(e, [
            "value",
            "placeholder",
            "autoFocus",
            "minLength",
            "maxLength",
            "error",
            "defaultDirty",
            "showCharacterCountFullPadding",
            "showCharacterCount",
            "showRemainingCharacterCount",
            "aria-labelledby",
            "rows",
            "disabled",
            "helperText",
            "successMessage",
        ]);
    let B = (0, _.U)("UserSettingsDesignSystems"),
        Z = (0, f.m)({
            validateOn: "change",
            error: v,
            value: n,
            minLength: g,
            maxLength: b,
            defaultDirty: N,
        }),
        V = i.useContext(c.q3),
        F = null != L ? L : null == V ? void 0 : V.titleId,
        H = i.useMemo(() => {
            let e = [],
                t = null == V ? void 0 : V.errorId;
            return (
                null != t && e.push(t),
                null != v ? e.push(I) : (null != b && e.push(S), null != g && e.push(T)),
                e.length > 0 ? e.join(" ") : void 0
            );
        }, [v, null == V ? void 0 : V.errorId, b, g]),
        Y = i.useMemo(() => {
            if (B) return;
            if (null == b) return A;
            let e = "".concat(b).length;
            return w && (e += "".concat(b, " / ").length), C * e + A;
        }, [B, b, w]),
        W = (e) => {
            let { onChange: t } = G;
            null == t || t(e.currentTarget.value), Z.setShouldValidate(!0);
        };
    return (0, r.jsxs)(d.J, {
        validation: Z,
        disabled: M,
        helperText: k,
        successMessage: U,
        characterCount: B && D ? (null != (t = null == n ? void 0 : n.length) ? t : 0) : void 0,
        characterCountMaxLength: B && x ? b : void 0,
        children: [
            (0, r.jsx)(l.t, {
                children: (0, r.jsx)(
                    "textarea",
                    y(
                        E(
                            {
                                className: o()(h.textArea, m.scrollbarDefault),
                                "aria-labelledby": F,
                                "aria-describedby": H,
                                "aria-invalid": Z.hasError,
                                style: { paddingRight: Y },
                                placeholder: a,
                                value: n,
                                autoFocus: s,
                                minLength: g,
                                maxLength: b,
                                rows: j,
                                disabled: M,
                            },
                            G,
                        ),
                        { onChange: W },
                    ),
                ),
            }),
            null != g &&
                (0, r.jsx)(u.n, {
                    id: T,
                    children: p.intl.format(p.t["bmQU//"], { minLength: g }),
                }),
            null != b &&
                (0, r.jsx)(u.n, {
                    id: S,
                    children: p.intl.format(p.t["+DFxLS"], { maxLength: b }),
                }),
            !B && D
                ? (0, r.jsx)(R, {
                      value: n,
                      maxLength: b,
                      hasError: Z.hasError,
                  })
                : null,
            B || D || !1 === x
                ? null
                : (0, r.jsx)(P, {
                      value: n,
                      maxLength: b,
                  }),
        ],
    });
}
function R(e) {
    var t;
    let { value: n, maxLength: i, hasError: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(h.maxLength, { [h.errorOverflow]: a }),
        "aria-hidden": "true",
        children: [null != (t = null == n ? void 0 : n.length) ? t : 0, " ", null != i && "/ ".concat(i)],
    });
}
function P(e) {
    let { value: t, maxLength: n } = e,
        a = i.useMemo(() => (null == n ? null : n - (null != t ? t.length : 0)), [n, t]);
    return null == a
        ? null
        : (0, r.jsx)("div", {
              className: o()(h.maxLength, { [h.errorOverflow]: a < 0 }),
              "aria-hidden": "true",
              children: a,
          });
}
