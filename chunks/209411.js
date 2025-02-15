n.d(t, { Z: () => x }), n(47120), n(773603);
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
    m = n(314897),
    g = n(781428),
    p = n(981631),
    f = n(176505);
function x(e) {
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
        { isAuthenticated: n, loginStatus: x } = (0, o.cj)([m.default], () => ({
            isAuthenticated: m.default.isAuthenticated(),
            loginStatus: m.default.getLoginStatus()
        })),
        { location: E, redirectTo: I } = e,
        [v, C] = r.useState(n);
    function N(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: i
        }),
            C(!1);
    }
    return ((0, d.ZP)(() => {
        if (null != E) {
            let { handoff_key: e, handoff_token: t } = (0, a.parse)(E.search);
            if (null != e && null != t) {
                let n = null != I ? (0, u.L)(I) : void 0;
                v
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
    v || x === p.u34.LOGGING_IN)
        ? (0, i.jsx)(g.q, {})
        : (0, i.jsx)(g.Z, {
              ...e,
              transitionTo: t
          });
}
