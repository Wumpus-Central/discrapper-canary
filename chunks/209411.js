n.d(t, { Z: () => x }), n(388685), n(35282), n(457542);
var r = n(951288),
    i = n(647438),
    s = n(593473),
    l = n(843611),
    a = n(442837),
    o = n(893776),
    c = n(899742),
    u = n(493773),
    d = n(743142),
    h = n(893607),
    g = n(703656),
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
                        let n = (0, l.LX)(e, { path: f.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId()) });
                        return (null == n || null == (t = n.params) ? void 0 : t.channelId) === _.oC.ROLE_SUBSCRIPTIONS;
                    })(t)
                )
                    g.dL(t);
                else {
                    var n;
                    (null != (n = e.transitionTo) ? n : g.uL)(t);
                }
            },
            [e.transitionTo],
        ),
        { isAuthenticated: E, loginStatus: v } = (0, a.cj)([p.default], () => ({
            isAuthenticated: p.default.isAuthenticated(),
            loginStatus: p.default.getLoginStatus(),
        })),
        { location: b, redirectTo: j } = e,
        [I, y] = i.useState(E);
    function O(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: r } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: r,
        }),
            y(!1);
    }
    return ((0, u.ZP)(() => {
        if (null != b) {
            let { handoff_key: e, handoff_token: t } = (0, s.parse)(b.search);
            if (null != e && null != t) {
                let n = null != j ? (0, d.L)(j) : void 0;
                I
                    ? o.Z.logout("handoff", null).finally(() => {
                          O({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n,
                          });
                      })
                    : O({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n,
                      });
            }
        }
    }),
    I || v === f.u34.LOGGING_IN)
        ? (0, r.jsx)(m.q, {})
        : (0, r.jsx)(
              m.Z,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
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
              t),
          );
}
