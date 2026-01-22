n.d(t, { p: () => b }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(504345),
    c = n(511274),
    u = n(985018),
    d = n(713545);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function E(e, t) {
    let n = i.useContext(l.cK);
    return (
        i.useEffect(() => {
            var r, i;
            null == (r = n.setHasValue) || r.call(n, (null != t && "" !== t) || (null != e && "" !== e)),
                null == (i = n.setIsFocused) || i.call(n, !1);
        }, []),
        i.useEffect(() => {
            if (null != e && "" !== e) {
                var t;
                null == (t = n.setHasValue) || t.call(n, !0);
            }
        }, [n, e]),
        n
    );
}
function b(e) {
    var t;
    let {
            className: n,
            inputClassName: a,
            disabled: l = !1,
            editable: f,
            inputRef: _,
            prefixElement: g,
            focusProps: b,
            name: y = "",
            type: O = "text",
            placeholder: A = "",
            maxLength: v = 999,
            value: S,
            defaultValue: I,
            minLength: T,
            error: C,
            defaultDirty: N = !1,
        } = e,
        R = m(e, [
            "className",
            "inputClassName",
            "disabled",
            "editable",
            "inputRef",
            "prefixElement",
            "focusProps",
            "name",
            "type",
            "placeholder",
            "maxLength",
            "value",
            "defaultValue",
            "minLength",
            "error",
            "defaultDirty",
        ]),
        [w, P] = i.useState(N),
        D = E(S, I),
        x = (e) => {
            var t, n;
            null == (t = R.onChange) || t.call(R, e.currentTarget.value, y),
                P(!0),
                null == (n = D.setHasValue) || n.call(D, "" !== e.currentTarget.value);
        },
        L = (e) => {
            var t, n;
            null == (t = R.onFocus) || t.call(R, e, y), null == (n = D.setIsFocused) || n.call(D, !0);
        },
        j = (e) => {
            var t, n;
            null == (t = R.onBlur) || t.call(R, e, y), null == (n = D.setIsFocused) || n.call(D, !1);
        },
        M = i.useMemo(() => {
            var e, t;
            return null === C || "" === C
                ? null
                : null != C
                  ? C
                  : w
                    ? null != T && (null != (e = null == S ? void 0 : S.length) ? e : 0) < T
                        ? u.intl.formatToPlainString(u.t["62rk1K"], { minLength: T })
                        : null != v && (null != (t = null == S ? void 0 : S.length) ? t : 0) > v
                          ? u.intl.formatToPlainString(u.t.ICT5S6, { maxLength: v })
                          : null
                    : null;
        }, [C, w, T, v, null == S ? void 0 : S.length]),
        k = (null != C && "" !== C) || null != M;
    return (0, r.jsxs)("div", {
        className: s()(d.I6, n),
        children: [
            null != g && g,
            (0, r.jsx)(
                o.vN3,
                h(p({}, b), {
                    children: (0, r.jsx)(
                        "input",
                        h(
                            p(
                                {
                                    name: y,
                                    className: s()(d.hF, a, {
                                        [d.z3]: k,
                                        [d.r9]: l,
                                        [d.LL]: f,
                                    }),
                                    disabled: l,
                                    readOnly: !1 === f || void 0,
                                    type: O,
                                    placeholder: A,
                                    maxLength: v,
                                    minLength: T,
                                    value: S,
                                    defaultValue: I,
                                },
                                R,
                            ),
                            {
                                "aria-labelledby": null != (t = R["aria-labelledby"]) ? t : D.titleId,
                                onChange: x,
                                onBlur: j,
                                onFocus: L,
                                ref: _,
                            },
                        ),
                    ),
                }),
            ),
            (0, r.jsx)(c.U, { error: M }),
        ],
    });
}
