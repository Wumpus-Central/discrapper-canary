n.d(t, { Z: () => E }), n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    a = n(593473),
    l = n(512969),
    o = n(442837),
    s = n(893776),
    c = n(899742),
    d = n(493773),
    u = n(743142),
    h = n(893607),
    _ = n(703656),
    g = n(314897),
    m = n(781428),
    p = n(981631),
    f = n(176505);
function E(e) {
    let t = r.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, l.LX)(e, { path: p.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId()) });
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
        { location: x, redirectTo: I } = e,
        [C, v] = r.useState(n);
    function N(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: i
        }),
            v(!1);
    }
    return ((0, d.ZP)(() => {
        if (null != x) {
            let { handoff_key: e, handoff_token: t } = (0, a.parse)(x.search);
            if (null != e && null != t) {
                let n = null != I ? (0, u.L)(I) : void 0;
                C
                    ? s.Z.logout(null).finally(() => {
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
    C || E === p.u34.LOGGING_IN)
        ? (0, i.jsx)(m.q, {})
        : (0, i.jsx)(m.Z, {
              ...e,
              transitionTo: t
          });
}
