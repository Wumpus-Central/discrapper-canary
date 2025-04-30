n.d(t, { Z: () => b });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(747017),
    c = n(570928),
    d = n(100527),
    u = n(906732),
    m = n(429467),
    p = n(981631),
    g = n(388032),
    h = n(493456);
function f(e) {
    let { openModal: t, hasCustomStatus: n, className: r } = e,
        s = (e) => {
            e.stopPropagation(), t();
        };
    return (0, i.jsxs)(a.P3F, {
        ignoreKeyPress: !0,
        className: l()(h.customStatusAction, r),
        onClick: s,
        onKeyDown: (e) => {
            ('Enter' === e.key || ' ' === e.key) && s(e);
        },
        'aria-label': n ? g.intl.string(g.t.PwknJC) : g.intl.string(g.t.Vq4UmZ),
        children: [
            n ? (0, i.jsx)(a.vdY, { size: 'xxs' }) : (0, i.jsx)(a.oFk, { size: 'xxs' }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/medium',
                children: n ? g.intl.string(g.t.PwknJC) : g.intl.string(g.t.Vq4UmZ)
            })
        ]
    });
}
function b(e) {
    let { hovered: t, activities: s, user: l, applicationStream: g, voiceChannel: b } = e,
        { analyticsLocations: _ } = (0, u.ZP)(d.Z.RTC_PANEL),
        x =
            null == s
                ? void 0
                : s.find((e) => {
                      let { type: t } = e;
                      return t === p.IIU.CUSTOM_STATUS;
                  }),
        E = r.useCallback(() => {
            (0, a.ZDy)(async () => {
                let e = (0, m.Z)(),
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
                                sourceAnalyticsLocations: _,
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
        }, [_]);
    return (0, i.jsx)(u.Gt, {
        value: _,
        children:
            null != s && s.length > 0
                ? (0, i.jsx)(c.Z, {
                      hoverText: (0, i.jsx)(f, {
                          openModal: E,
                          hasCustomStatus: void 0 !== x,
                          className: h.customStatusActionHoverText
                      }),
                      forceHover: t,
                      children: (0, i.jsx)(o.Z, {
                          user: l,
                          activities: s,
                          applicationStream: g,
                          voiceChannel: b,
                          hideTooltip: !0
                      })
                  })
                : (0, i.jsx)(f, {
                      openModal: E,
                      hasCustomStatus: !1
                  })
    });
}
