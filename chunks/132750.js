n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(747017),
    c = n(570928),
    d = n(100527),
    u = n(906732),
    m = n(429467),
    g = n(981631),
    p = n(388032),
    h = n(888433);
function f(e) {
    let { openModal: t, hasCustomStatus: n, className: i } = e,
        s = (e) => {
            e.stopPropagation(), t();
        };
    return (0, r.jsxs)(l.P3F, {
        ignoreKeyPress: !0,
        className: a()(h.customStatusAction, i),
        onClick: s,
        onKeyDown: (e) => {
            ('Enter' === e.key || ' ' === e.key) && s(e);
        },
        'aria-label': n ? p.NW.string(p.t.PwknJC) : p.NW.string(p.t.Vq4UmZ),
        children: [
            n ? (0, r.jsx)(l.vdY, { size: 'xxs' }) : (0, r.jsx)(l.oFk, { size: 'xxs' }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                children: n ? p.NW.string(p.t.PwknJC) : p.NW.string(p.t.Vq4UmZ)
            })
        ]
    });
}
function b(e) {
    let { hovered: t, activities: s, user: a, applicationStream: p, voiceChannel: b } = e,
        { analyticsLocations: _ } = (0, u.ZP)(d.Z.RTC_PANEL),
        N =
            null == s
                ? void 0
                : s.find((e) => {
                      let { type: t } = e;
                      return t === g.IIU.CUSTOM_STATUS;
                  }),
        x = i.useCallback(() => {
            (0, l.ZDy)(async () => {
                let e = (0, m.Z)(),
                    { default: t } = await n.e('31649').then(n.bind(n, 475613));
                return (n) => {
                    var i, s;
                    return (0, r.jsx)(
                        t,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
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
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        i)
                    );
                };
            });
        }, [_]);
    return (0, r.jsx)(u.Gt, {
        value: _,
        children:
            null != s && s.length > 0
                ? (0, r.jsx)(c.Z, {
                      hoverText: (0, r.jsx)(f, {
                          openModal: x,
                          hasCustomStatus: void 0 !== N,
                          className: h.customStatusActionHoverText
                      }),
                      forceHover: t,
                      children: (0, r.jsx)(o.Z, {
                          user: a,
                          activities: s,
                          applicationStream: p,
                          voiceChannel: b,
                          hideTooltip: !0
                      })
                  })
                : (0, r.jsx)(f, {
                      openModal: x,
                      hasCustomStatus: !1
                  })
    });
}
