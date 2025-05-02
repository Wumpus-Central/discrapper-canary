n.d(t, { Z: () => x });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(747017),
    c = n(963056),
    d = n(570928),
    u = n(100527),
    m = n(906732),
    p = n(51144),
    g = n(429467),
    h = n(981631),
    f = n(388032),
    b = n(493456);
function _(e) {
    let { openModal: t, hasCustomStatus: n, className: r } = e,
        s = (e) => {
            e.stopPropagation(), t();
        };
    return (0, i.jsxs)(a.P3F, {
        ignoreKeyPress: !0,
        className: l()(b.customStatusAction, r),
        onClick: s,
        onKeyDown: (e) => {
            ('Enter' === e.key || ' ' === e.key) && s(e);
        },
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
    let { hovered: t, activities: s, user: l, applicationStream: f, voiceChannel: x, status: E, userTag: j, customStatusHoverOnlyRTCEntrypointEnabled: C } = e,
        { analyticsLocations: O } = (0, m.ZP)(u.Z.RTC_PANEL),
        S =
            null == s
                ? void 0
                : s.find((e) => {
                      let { type: t } = e;
                      return t === h.IIU.CUSTOM_STATUS;
                  }),
        v = r.useCallback(() => {
            (0, a.ZDy)(async () => {
                let e = (0, g.Z)(),
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
                                sourceAnalyticsLocations: O,
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
        }, [O]),
        T = r.useMemo(() => (null != E && E !== a.Skl.UNKNOWN && null != l && l.isPomelo() ? (0, i.jsx)(c.Z, { text: p.ZP.humanizeStatus(E) }) : j), [E, l, j]),
        I = void 0 !== S,
        N = r.useMemo(
            () =>
                (0, i.jsx)(_, {
                    openModal: v,
                    hasCustomStatus: I,
                    className: b.customStatusActionHoverText
                }),
            [v, I]
        ),
        y = C
            ? (0, i.jsx)(d.Z, {
                  hoverText: N,
                  forceHover: t,
                  children: T
              })
            : N;
    return (0, i.jsx)(m.Gt, {
        value: O,
        children:
            null != s && s.length > 0
                ? (0, i.jsx)(d.Z, {
                      hoverText: y,
                      forceHover: t,
                      children: (0, i.jsx)(o.Z, {
                          user: l,
                          activities: s,
                          applicationStream: f,
                          voiceChannel: x,
                          hideTooltip: !0
                      })
                  })
                : y
    });
}
