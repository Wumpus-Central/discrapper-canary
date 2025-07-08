(n.d(t, { e: () => h }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(680018),
    l = n(481060),
    a = n(920155),
    o = n(454028),
    c = n(966902),
    d = n(237872),
    u = n(562618),
    m = n(388032),
    p = n(669546);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function h(e) {
    var t,
        n,
        h,
        f,
        b,
        x,
        {
            steps: _,
            caretConfig: E = {
                position: 'bottom',
                align: 'center'
            },
            size: j = 'md',
            onStepChange: O,
            onRequestClose: C,
            popoverRef: S,
            shouldShow: v
        } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['steps', 'caretConfig', 'size', 'onStepChange', 'onRequestClose', 'popoverRef', 'shouldShow']);
    let [N, I] = r.useState(0);
    (r.useEffect(() => {
        v && I(0);
    }, [v]),
        r.useEffect(() => {
            null == O || O(N);
        }, [N, O]));
    let y = _[N],
        A = N + 1 === _.length,
        P = r.useCallback(() => {
            var e;
            (null == y || null == (e = y.onCta) || e.call(y), A ? null == C || C() : I((e) => e + 1));
        }, [y, A, C]),
        R = r.useCallback(() => {
            null == C || C();
        }, [C]),
        D = r.useCallback(() => {
            null == C || C();
        }, [C]);
    if (!v || null == y) return null;
    let Z = g(
        {
            text: null != (b = null == (h = y.button) ? void 0 : h.text) ? b : A ? m.intl.string(m.t.i4jeWV) : m.intl.string(m.t.PDTjLC),
            variant: null != (x = null == (f = y.button) ? void 0 : f.variant) ? x : 'primary',
            onClick: P
        },
        y.button
    );
    return (0, i.jsx)(
        a.m,
        ((t = g({}, T)),
        (n = n =
            {
                shouldShow: v,
                onRequestClose: R,
                gradientColor: y.gradientColor,
                children: (0, i.jsxs)('div', {
                    ref: S,
                    children: [
                        (0, i.jsx)(d.u, {
                            onClick: D,
                            colorMix: null != y.gradientColor
                        }),
                        (0, i.jsx)(o.V, {
                            asset: y.asset,
                            size: j
                        }),
                        (0, i.jsx)(u.Y, {
                            title: y.title,
                            body: y.body,
                            badge: y.badge,
                            textLink: y.textLink
                        }),
                        (0, i.jsx)('div', {
                            className: p.actionBar,
                            children: (0, i.jsxs)('div', {
                                className: p.multistepActionLayout,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        className: p.multistepIndicator,
                                        children: m.intl.formatToPlainString(m.t.rO31eX, {
                                            count: N + 1,
                                            totalSteps: _.length
                                        })
                                    }),
                                    (0, i.jsx)(s.z, g({ size: 'sm' }, Z))
                                ]
                            })
                        }),
                        (0, i.jsx)(c.$, { caretConfig: E })
                    ]
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
