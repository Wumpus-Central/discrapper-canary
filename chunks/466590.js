(n.d(t, { e: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(680018),
    o = n(481060),
    s = n(920155),
    l = n(454028),
    c = n(966902),
    u = n(237872),
    d = n(562618),
    f = n(388032),
    _ = n(669546);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function y(e) {
    var t,
        n,
        p,
        m,
        {
            steps: b,
            caretConfig: y = {
                position: 'bottom',
                align: 'center'
            },
            size: O = 'md',
            onStepChange: v,
            onRequestClose: I,
            popoverRef: T,
            shouldShow: S
        } = e,
        A = E(e, ['steps', 'caretConfig', 'size', 'onStepChange', 'onRequestClose', 'popoverRef', 'shouldShow']);
    let [N, C] = i.useState(0);
    (i.useEffect(() => {
        S && C(0);
    }, [S]),
        i.useEffect(() => {
            null == v || v(N);
        }, [N, v]));
    let w = b[N],
        R = N + 1 === b.length,
        P = i.useCallback(() => {
            var e;
            (null == w || null == (e = w.onCta) || e.call(w), R ? null == I || I() : C((e) => e + 1));
        }, [w, R, I]),
        D = i.useCallback(() => {
            null == I || I();
        }, [I]),
        L = i.useCallback(() => {
            null == I || I();
        }, [I]);
    if (!S || null == w) return null;
    let x = h(
        {
            text: null != (p = null == (t = w.action) ? void 0 : t.text) ? p : R ? f.intl.string(f.t.i4jeWV) : f.intl.string(f.t.PDTjLC),
            variant: null != (m = null == (n = w.action) ? void 0 : n.variant) ? m : 'primary',
            onClick: P
        },
        w.action
    );
    return (0, r.jsx)(
        s.m,
        g(h({}, A), {
            shouldShow: S,
            onRequestClose: D,
            gradientColor: w.gradientColor,
            children: (0, r.jsxs)('div', {
                ref: T,
                children: [
                    (0, r.jsx)(u.u, {
                        onClick: L,
                        colorMix: null != w.gradientColor
                    }),
                    null != w.asset
                        ? (0, r.jsx)(l.V, {
                              asset: w.asset,
                              size: O
                          })
                        : null,
                    (0, r.jsx)(d.Y, {
                        title: w.title,
                        body: w.body,
                        badge: w.badge,
                        textLink: w.textLink,
                        hasBottomMargin: !0
                    }),
                    (0, r.jsx)('div', {
                        className: _.actionBar,
                        children: (0, r.jsxs)('div', {
                            className: _.multistepActionLayout,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    className: _.multistepIndicator,
                                    children: f.intl.formatToPlainString(f.t.rO31eX, {
                                        count: N + 1,
                                        totalSteps: b.length
                                    })
                                }),
                                (0, r.jsx)(a.z, h({ size: 'sm' }, x))
                            ]
                        })
                    }),
                    (0, r.jsx)(c.$, { caretConfig: y })
                ]
            })
        })
    );
}
