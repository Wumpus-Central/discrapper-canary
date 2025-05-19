n.d(t, { Z: () => x }), n(388685), n(35282), n(457542);
var r = n(255367),
    i = n(73800),
    l = n(593473),
    a = n(114858),
    o = n(442837),
    s = n(893776),
    c = n(899742),
    u = n(493773),
    d = n(743142),
    g = n(893607),
    h = n(703656),
    p = n(314897),
    m = n(781428),
    f = n(981631),
    _ = n(176505);
function x(e) {
    var t, n;
    let x = i.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, a.LX)(e, { path: f.Z5c.CHANNEL(g.Hw.guildId(), g.Hw.channelId()) });
                        return (null == n || null == (t = n.params) ? void 0 : t.channelId) === _.oC.ROLE_SUBSCRIPTIONS;
                    })(t)
                )
                    h.dL(t);
                else {
                    var n;
                    (null != (n = e.transitionTo) ? n : h.uL)(t);
                }
            },
            [e.transitionTo]
        ),
        { isAuthenticated: b, loginStatus: E } = (0, o.cj)([p.default], () => ({
            isAuthenticated: p.default.isAuthenticated(),
            loginStatus: p.default.getLoginStatus()
        })),
        { location: v, redirectTo: O } = e,
        [S, I] = i.useState(b);
    function j(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: r } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: r
        }),
            I(!1);
    }
    return ((0, u.ZP)(() => {
        if (null != v) {
            let { handoff_key: e, handoff_token: t } = (0, l.parse)(v.search);
            if (null != e && null != t) {
                let n = null != O ? (0, d.L)(O) : void 0;
                S
                    ? s.Z.logout('handoff', null).finally(() => {
                          j({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n
                          });
                      })
                    : j({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n
                      });
            }
        }
    }),
    S || E === f.u34.LOGGING_IN)
        ? (0, r.jsx)(m.q, {})
        : (0, r.jsx)(
              m.Z,
              ((t = (function (e) {
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
              })({}, e)),
              (n = n = { transitionTo: x }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }),
              t)
          );
}
