n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    r = n(192379),
    s = n(593473),
    l = n(512969),
    a = n(442837),
    o = n(893776),
    c = n(899742),
    u = n(493773),
    d = n(743142),
    h = n(893607),
    g = n(703656),
    m = n(314897),
    p = n(781428),
    f = n(981631),
    _ = n(176505);
function x(e) {
    let t = r.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, l.LX)(e, { path: f.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId()) });
                        return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === _.oC.ROLE_SUBSCRIPTIONS || !1;
                    })(t)
                )
                    g.dL(t);
                else {
                    var n;
                    (null !== (n = e.transitionTo) && void 0 !== n ? n : g.uL)(t);
                }
            },
            [e.transitionTo]
        ),
        { isAuthenticated: n, loginStatus: x } = (0, a.cj)([m.default], () => ({
            isAuthenticated: m.default.isAuthenticated(),
            loginStatus: m.default.getLoginStatus()
        })),
        { location: E, redirectTo: I } = e,
        [v, N] = r.useState(n);
    function b(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: i
        }),
            N(!1);
    }
    return ((0, u.Z)(() => {
        if (null != E) {
            let { handoff_key: e, handoff_token: t } = (0, s.parse)(E.search);
            if (null != e && null != t) {
                let n = null != I ? (0, d.L)(I) : void 0;
                v
                    ? o.Z.logout(null).finally(() => {
                          b({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n
                          });
                      })
                    : b({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n
                      });
            }
        }
    }),
    v || x === f.u34.LOGGING_IN)
        ? (0, i.jsx)(p.q, {})
        : (0, i.jsx)(p.Z, {
              ...e,
              transitionTo: t
          });
}
