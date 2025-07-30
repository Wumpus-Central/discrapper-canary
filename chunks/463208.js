(n.d(t, { o: () => E }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(84735),
    o = n(15127),
    s = n(897037),
    l = n(388032),
    c = n(953100);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function m(e, t) {
    let n = i.useContext(o.q3);
    return (
        i.useEffect(() => {
            var r, i;
            (null == (r = n.setHasValue) || r.call(n, (null != t && '' !== t) || (null != e && '' !== e)), null == (i = n.setIsFocused) || i.call(n, !1));
        }, []),
        i.useEffect(() => {
            if (null != e && '' !== e) {
                var t;
                null == (t = n.setHasValue) || t.call(n, !0);
            }
        }, [n, e]),
        n
    );
}
function g(e, t, n, r, a, o) {
    let [s, c] = i.useState(o),
        u = i.useMemo(() => {
            var i, o;
            return 'change' !== e ? null : null === t || '' === t ? null : null != t ? t : s ? (null != r && (null != (i = null == n ? void 0 : n.length) ? i : 0) < r ? l.intl.formatToPlainString(l.t['62rk1N'], { minLength: r }) : null != a && (null != (o = null == n ? void 0 : n.length) ? o : 0) > a ? l.intl.formatToPlainString(l.t.ICT5S0, { maxLength: a }) : null) : null;
        }, [e, t, s, r, null == n ? void 0 : n.length, a]),
        d = (null != t && '' !== t) || null != u;
    return {
        errorMessage: u,
        hasError: d,
        setShouldValidate: c
    };
}
function E(e) {
    var t;
    let { disabled: n = !1, editable: o, inputRef: l, focusProps: u, name: f = '', type: h = 'text', placeholder: E = '', maxLength: b = 999, value: y, defaultValue: O, minLength: v, error: I, defaultDirty: T = !1, leading: S, trailing: A, validateOn: N = 'change' } = e,
        C = p(e, ['disabled', 'editable', 'inputRef', 'focusProps', 'name', 'type', 'placeholder', 'maxLength', 'value', 'defaultValue', 'minLength', 'error', 'defaultDirty', 'leading', 'trailing', 'validateOn']),
        R = m(y, O),
        { errorMessage: P, hasError: w, setShouldValidate: D } = g(N, I, y, v, b, T),
        L = (e) => {
            var t, n;
            let r = e.currentTarget.value;
            (null == (t = C.onChange) || t.call(C, r, f), D(!0), null == (n = R.setHasValue) || n.call(R, '' !== r));
        },
        x = (e) => {
            var t, n;
            (null == (t = C.onFocus) || t.call(C, e, f), null == (n = R.setIsFocused) || n.call(R, !0));
        },
        M = (e) => {
            var t, n;
            (null == (t = C.onBlur) || t.call(C, e, f), null == (n = R.setIsFocused) || n.call(R, !1));
        },
        k = i.useRef(null),
        j = !1 === o || void 0;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsxs)('div', {
                className: c.wrapper,
                'data-leading': null != S,
                'data-trailing': null != A,
                ref: k,
                'data-error': w,
                'data-read-only': j,
                children: [
                    S,
                    (0, r.jsx)(
                        a.t,
                        _(d({ ringTarget: k }, u), {
                            children: (0, r.jsx)(
                                'input',
                                _(
                                    d(
                                        {
                                            name: f,
                                            className: c.input,
                                            disabled: n,
                                            readOnly: j,
                                            type: h,
                                            placeholder: E,
                                            maxLength: b,
                                            minLength: v,
                                            value: y,
                                            defaultValue: O
                                        },
                                        C
                                    ),
                                    {
                                        'aria-labelledby': null != (t = C['aria-labelledby']) ? t : R.titleId,
                                        onChange: L,
                                        onBlur: M,
                                        onFocus: x,
                                        ref: l
                                    }
                                )
                            )
                        })
                    ),
                    A
                ]
            }),
            (0, r.jsx)(s.V, { error: P })
        ]
    });
}
