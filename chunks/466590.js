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
    g = n(669546);
function p(e) {
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
            onStepChange: C,
            onRequestClose: O,
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
            null == C || C(N);
        }, [N, C]));
    let y = _[N],
        A = N + 1 === _.length,
        P = r.useCallback(() => {
            var e;
            (null == y || null == (e = y.onCta) || e.call(y), A ? null == O || O() : I((e) => e + 1));
        }, [y, A, O]),
        R = r.useCallback(() => {
            null == O || O();
        }, [O]),
        D = r.useCallback(() => {
            null == O || O();
        }, [O]);
    if (!v || null == y) return null;
    let Z = p(
        {
            text: null != (b = null == (h = y.button) ? void 0 : h.text) ? b : A ? m.intl.string(m.t.i4jeWV) : m.intl.string(m.t.PDTjLC),
            variant: null != (x = null == (f = y.button) ? void 0 : f.variant) ? x : 'primary',
            onClick: P
        },
        y.button
    );
    return (0, i.jsx)(
        a.m,
        ((t = p({}, T)),
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
                            colorMix: !0
                        }),
                        (0, i.jsx)(o.V, {
                            asset: y.asset,
                            size: j
                        }),
                        (0, i.jsx)(u.Y, {
                            title: y.title,
                            body: y.body,
                            badge: y.badge,
                            footerLink: y.footerLink
                        }),
                        (0, i.jsx)('div', {
                            className: g.actionBar,
                            children: (0, i.jsxs)('div', {
                                className: g.multistepActionLayout,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        className: g.multistepIndicator,
                                        children: m.intl.formatToPlainString(m.t.rO31eX, {
                                            count: N + 1,
                                            totalSteps: _.length
                                        })
                                    }),
                                    (0, i.jsx)(s.z, p({ size: 'sm' }, Z))
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
