(n.d(t, { K: () => N }), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(84735),
    c = n(15127),
    u = n(766646),
    d = n(557818),
    _ = n(897037),
    f = n(388032),
    p = n(184614),
    h = n(283574);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
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
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let v = (0, s.Z)(),
    I = (0, s.Z)(),
    T = (0, s.Z)(),
    S = 10,
    A = 7.23;
function N(e) {
    var { value: t, placeholder: n = '', autoFocus: a = !1, minLength: s, maxLength: m, error: E, defaultDirty: O, showCharacterCountFullPadding: N, showCharacterCount: P, showRemainingCharacterCount: w, 'aria-labelledby': D, rows: L = 3 } = e,
        x = y(e, ['value', 'placeholder', 'autoFocus', 'minLength', 'maxLength', 'error', 'defaultDirty', 'showCharacterCountFullPadding', 'showCharacterCount', 'showRemainingCharacterCount', 'aria-labelledby', 'rows']);
    let M = (0, _.m)({
            validateOn: 'change',
            error: E,
            value: t,
            minLength: s,
            maxLength: m,
            defaultDirty: O
        }),
        k = i.useContext(c.q3),
        j = null != D ? D : null == k ? void 0 : k.titleId,
        U = i.useMemo(() => {
            let e = [],
                t = null == k ? void 0 : k.errorId;
            return (null != t && e.push(t), null != E ? e.push(v) : (null != m && e.push(T), null != s && e.push(I)), e.length > 0 ? e.join(' ') : void 0);
        }, [E, null == k ? void 0 : k.errorId, m, s]),
        G = i.useMemo(() => {
            if (null == m) return S;
            let e = ''.concat(m).length;
            return (N && (e += ''.concat(m, ' / ').length), A * e + S);
        }, [m, N]),
        B = (e) => {
            let { onChange: t } = x;
            (null == t || t(e.currentTarget.value), M.setShouldValidate(!0));
        };
    return (0, r.jsxs)(d.J, {
        validation: M,
        children: [
            (0, r.jsx)(l.t, {
                children: (0, r.jsx)(
                    'textarea',
                    b(
                        g(
                            {
                                className: o()(p.textArea, h.scrollbarDefault),
                                'aria-labelledby': j,
                                'aria-describedby': U,
                                'aria-invalid': M.hasError,
                                style: { paddingRight: G },
                                placeholder: n,
                                value: t,
                                autoFocus: a,
                                minLength: s,
                                maxLength: m,
                                rows: L
                            },
                            x
                        ),
                        { onChange: B }
                    )
                )
            }),
            null != s &&
                (0, r.jsx)(u.n, {
                    id: I,
                    children: f.intl.format(f.t['bmQU//'], { minLength: s })
                }),
            null != m &&
                (0, r.jsx)(u.n, {
                    id: T,
                    children: f.intl.format(f.t['+DFxLS'], { maxLength: m })
                }),
            P
                ? (0, r.jsx)(C, {
                      value: t,
                      maxLength: m,
                      hasError: M.hasError
                  })
                : null,
            P || !1 === w
                ? null
                : (0, r.jsx)(R, {
                      value: t,
                      maxLength: m
                  })
        ]
    });
}
function C(e) {
    var t;
    let { value: n, maxLength: i, hasError: a } = e;
    return (0, r.jsxs)('div', {
        className: o()(p.maxLength, { [p.errorOverflow]: a }),
        'aria-hidden': 'true',
        children: [null != (t = null == n ? void 0 : n.length) ? t : 0, ' ', null != i && '/ '.concat(i)]
    });
}
function R(e) {
    let { value: t, maxLength: n } = e,
        a = i.useMemo(() => (null == n ? null : n - (null != t ? t.length : 0)), [n, t]);
    return null == a
        ? null
        : (0, r.jsx)('div', {
              className: o()(p.maxLength, { [p.errorOverflow]: a < 0 }),
              'aria-hidden': 'true',
              children: a
          });
}
