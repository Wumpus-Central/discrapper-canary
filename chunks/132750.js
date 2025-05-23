n.d(t, { Z: () => x }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(771173),
    c = n(963056),
    d = n(570928),
    u = n(100527),
    m = n(906732),
    g = n(51144),
    p = n(429467),
    h = n(676035),
    f = n(388032),
    b = n(493456);
function _(e) {
    let { openModal: t, hasCustomStatus: n, className: r, onFocus: s, onBlur: o } = e,
        c = (e) => {
            e.stopPropagation(), t();
        };
    return (0, i.jsxs)(a.P3F, {
        ignoreKeyPress: !0,
        className: l()(b.customStatusAction, r),
        onClick: c,
        onKeyDown: (e) => {
            ('Enter' === e.key || ' ' === e.key) && (e.preventDefault(), c(e));
        },
        onFocus: s,
        onBlur: o,
        'aria-label': n ? f.intl.string(f.t.PwknJC) : f.intl.string(f.t.Vq4UmZ),
        children: [
            n ? (0, i.jsx)(a.vdY, { size: 'xxs' }) : (0, i.jsx)(a.oFk, { size: 'xxs' }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/medium',
                children: n ? f.intl.string(f.t.PwknJC) : f.intl.string(f.t.Vq4UmZ)
            })
        ]
    });
}
function x(e) {
    let { hovered: t, activities: s, user: l, applicationStream: f, voiceChannel: x, status: E, userTag: C, customStatusHoverOnlyRTCEntrypointEnabled: O } = e,
        { analyticsLocations: j } = (0, m.ZP)(u.Z.RTC_PANEL),
        S = (0, h.a)(),
        v = r.useCallback(() => {
            (0, a.ZDy)(async () => {
                let e = (0, p.Z)(),
                    { default: t } = await n.e('31649').then(n.bind(n, 475613));
                return (n) => {
                    var r, s;
                    return (0, i.jsx)(
                        t,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (s = s =
                            {
                                sourceAnalyticsLocations: j,
                                location: 'CustomStatusRTCEntrypoint',
                                prompt: e
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        r)
                    );
                };
            });
        }, [j]),
        T = r.useMemo(() => (null != E && E !== a.Skl.UNKNOWN && null != l && l.isPomelo() ? (0, i.jsx)(c.Z, { text: g.ZP.humanizeStatus(E) }) : C), [E, l, C]),
        N = null != S,
        [I, y] = r.useState(!1),
        A = r.useMemo(
            () =>
                (0, i.jsx)(_, {
                    openModal: v,
                    hasCustomStatus: N,
                    className: b.customStatusActionHoverText,
                    onFocus: () => y(!0),
                    onBlur: () => y(!1)
                }),
            [v, N]
        ),
        P = O
            ? (0, i.jsx)(d.Z, {
                  hoverText: A,
                  forceHover: t || I,
                  children: T
              })
            : A;
    return (0, i.jsx)(m.Gt, {
        value: j,
        children:
            null != s && s.length > 0
                ? (0, i.jsx)(d.Z, {
                      hoverText: P,
                      forceHover: t || I,
                      children: (0, i.jsx)(o.Z, {
                          location: 'CustomStatusRTCEntrypoint',
                          user: l,
                          activities: s,
                          applicationStream: f,
                          voiceChannel: x,
                          hideTooltip: !0,
                          disableTextScroll: !0
                      })
                  })
                : P
    });
}
