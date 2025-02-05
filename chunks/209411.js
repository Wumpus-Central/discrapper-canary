n.d(t, { Z: () => E }), n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    l = n(593473),
    a = n(512969),
    o = n(442837),
    s = n(893776),
    c = n(899742),
    d = n(493773),
    u = n(743142),
    h = n(893607),
    _ = n(703656),
    g = n(314897),
    p = n(781428),
    m = n(981631),
    f = n(176505);
function E(e) {
    let t = r.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, a.LX)(e, { path: m.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId()) });
                        return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === f.oC.ROLE_SUBSCRIPTIONS;
                    })(t)
                )
                    _.dL(t);
                else {
                    var n;
                    (null !== (n = e.transitionTo) && void 0 !== n ? n : _.uL)(t);
                }
            },
            [e.transitionTo]
        ),
        { isAuthenticated: n, loginStatus: E } = (0, o.cj)([g.default], () => ({
            isAuthenticated: g.default.isAuthenticated(),
            loginStatus: g.default.getLoginStatus()
        })),
        { location: I, redirectTo: x } = e,
        [C, N] = r.useState(n);
    function v(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: i
        }),
            N(!1);
    }
    return ((0, d.ZP)(() => {
        if (null != I) {
            let { handoff_key: e, handoff_token: t } = (0, l.parse)(I.search);
            if (null != e && null != t) {
                let n = null != x ? (0, u.L)(x) : void 0;
                C
                    ? s.Z.logout(null).finally(() => {
                          v({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n
                          });
                      })
                    : v({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n
                      });
            }
        }
    }),
    C || E === m.u34.LOGGING_IN)
        ? (0, i.jsx)(p.q, {})
        : (0, i.jsx)(p.Z, {
              ...e,
              transitionTo: t
          });
}
