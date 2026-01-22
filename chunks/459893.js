n.d(t, {
    A: () => x,
}),
    n(896048),
    n(747238),
    n(492834);
var r = n(627968),
    i = n(64700),
    s = n(492462),
    l = n(960488),
    a = n(311907),
    o = n(830215),
    c = n(6981),
    u = n(964486),
    d = n(351671),
    h = n(463347),
    f = n(976860),
    p = n(961350),
    g = n(129851),
    m = n(652215),
    A = n(746080);

function x(e) {
    var t, n;
    let x = i.useCallback(
            (t) => {
                var n, r;
                let i;
                +(
                    (null ==
                        (i = (0, l.B6)(t, {
                            path: m.BVt.CHANNEL(h.pv.guildId(), h.pv.channelId()),
                        })) || null == (n = i.params)
                        ? void 0
                        : n.channelId) !== A.VV.ROLE_SUBSCRIPTIONS
                )
                    ? (null != (r = e.transitionTo) ? r : f.pX)(t)
                    : f.bG(t);
            },
            [e.transitionTo],
        ),
        { isAuthenticated: _, loginStatus: E } = (0, a.cf)([p.default], () => ({
            isAuthenticated: p.default.isAuthenticated(),
            loginStatus: p.default.getLoginStatus(),
        })),
        { location: b, redirectTo: v } = e,
        [j, y] = i.useState(_);

    function S(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: r } = e;
        (0, c.Qh)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: r,
        }),
            y(!1);
    }
    return ((0, u.Ay)(() => {
        if (null != b) {
            let { handoff_key: e, handoff_token: t } = (0, s.parse)(b.search);
            if (null != e && null != t) {
                let n = null != v ? (0, d.Q)(v) : void 0;
                j
                    ? o.A.logout("handoff", null).finally(() => {
                          S({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n,
                          });
                      })
                    : S({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n,
                      });
            }
        }
    }),
    j || E === m.aUe.LOGGING_IN)
        ? (0, r.jsx)(g.Z, {})
        : (0, r.jsx)(
              g.A,
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
              (n = n =
                  {
                      transitionTo: x,
                  }),
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
