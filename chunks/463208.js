n.d(t, { o: () => b });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(84735),
    l = n(15127),
    c = n(557818),
    u = n(897037),
    d = n(953100);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function E(e, t) {
    let n = i.useContext(l.q3);
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
function b(e) {
    var t;
    let { disabled: n = !1, editable: a, inputRef: l, focusProps: f, name: p = '', type: g = 'text', placeholder: b = '', maxLength: y = 999, value: O, defaultValue: v, minLength: I, error: T, defaultDirty: S = !1, leading: A, trailing: N, validateOn: C = 'change', size: R = 'md', fullWidth: P = !1 } = e,
        w = m(e, ['disabled', 'editable', 'inputRef', 'focusProps', 'name', 'type', 'placeholder', 'maxLength', 'value', 'defaultValue', 'minLength', 'error', 'defaultDirty', 'leading', 'trailing', 'validateOn', 'size', 'fullWidth']),
        D = E(O, v),
        L = (0, u.m)({
            validateOn: C,
            error: T,
            value: O,
            minLength: I,
            maxLength: y,
            defaultDirty: S
        }),
        { setShouldValidate: x } = L,
        M = (e) => {
            var t, n;
            let r = e.currentTarget.value;
            (null == (t = w.onChange) || t.call(w, r, p), x(!0), null == (n = D.setHasValue) || n.call(D, '' !== r));
        },
        k = (e) => {
            var t, n;
            (null == (t = w.onFocus) || t.call(w, e), null == (n = D.setIsFocused) || n.call(D, !0));
        },
        j = (e) => {
            var t, n;
            (null == (t = w.onBlur) || t.call(w, e), null == (n = D.setIsFocused) || n.call(D, !1));
        },
        U = i.useRef(null),
        G = !1 === a || void 0;
    return (0, r.jsxs)(c.J, {
        validation: L,
        fullWidth: P,
        readOnly: G,
        className: o()(d[R], {
            [d.leading]: null != A,
            [d.trailing]: null != N
        }),
        children: [
            A,
            (0, r.jsx)(
                s.t,
                h(_({ ringTarget: U }, f), {
                    children: (0, r.jsx)(
                        'input',
                        h(
                            _(
                                {
                                    name: p,
                                    className: d.input,
                                    disabled: n,
                                    readOnly: G,
                                    type: g,
                                    placeholder: b,
                                    maxLength: y,
                                    minLength: I,
                                    value: O,
                                    defaultValue: v
                                },
                                w
                            ),
                            {
                                'aria-labelledby': null != (t = w['aria-labelledby']) ? t : D.titleId,
                                onChange: M,
                                onBlur: j,
                                onFocus: k,
                                ref: l
                            }
                        )
                    )
                })
            ),
            N
        ]
    });
}
