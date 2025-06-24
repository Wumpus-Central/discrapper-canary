n.d(t, { Z: () => E }), n(388685), n(35282), n(457542);
var r = n(255367),
    i = n(73800),
    l = n(593473),
    a = n(114858),
    o = n(442837),
    s = n(893776),
    c = n(899742),
    u = n(493773),
    d = n(743142),
    h = n(893607),
    p = n(703656),
    g = n(314897),
    m = n(781428),
    f = n(981631),
    _ = n(176505);
function E(e) {
    var t, n;
    let E = i.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, a.LX)(e, { path: f.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId()) });
                        return (null == n || null == (t = n.params) ? void 0 : t.channelId) === _.oC.ROLE_SUBSCRIPTIONS;
                    })(t)
                )
                    p.dL(t);
                else {
                    var n;
                    (null != (n = e.transitionTo) ? n : p.uL)(t);
                }
            },
            [e.transitionTo]
        ),
        { isAuthenticated: x, loginStatus: b } = (0, o.cj)([g.default], () => ({
            isAuthenticated: g.default.isAuthenticated(),
            loginStatus: g.default.getLoginStatus()
        })),
        { location: v, redirectTo: I } = e,
        [O, S] = i.useState(x);
    function N(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: r } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: r
        }),
            S(!1);
    }
    return ((0, u.ZP)(() => {
        if (null != v) {
            let { handoff_key: e, handoff_token: t } = (0, l.parse)(v.search);
            if (null != e && null != t) {
                let n = null != I ? (0, d.L)(I) : void 0;
                O
                    ? s.Z.logout('handoff', null).finally(() => {
                          N({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n
                          });
                      })
                    : N({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n
                      });
            }
        }
    }),
    O || b === f.u34.LOGGING_IN)
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
              (n = n = { transitionTo: E }),
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
