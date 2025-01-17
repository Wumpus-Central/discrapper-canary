n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    r = n(192379),
    s = n(593473),
    l = n(512969),
    o = n(442837),
    a = n(893776),
    c = n(899742),
    d = n(493773),
    u = n(743142),
    h = n(893607),
    f = n(703656),
    g = n(314897),
    m = n(781428),
    p = n(981631),
    x = n(176505);
function _(e) {
    let t = r.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, l.LX)(e, { path: p.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId()) });
                        return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === x.oC.ROLE_SUBSCRIPTIONS || !1;
                    })(t)
                )
                    f.dL(t);
                else {
                    var n;
                    (null !== (n = e.transitionTo) && void 0 !== n ? n : f.uL)(t);
                }
            },
            [e.transitionTo]
        ),
        { isAuthenticated: n, loginStatus: _ } = (0, o.cj)([g.default], () => ({
            isAuthenticated: g.default.isAuthenticated(),
            loginStatus: g.default.getLoginStatus()
        })),
        { location: E, redirectTo: I } = e,
        [v, N] = r.useState(n);
    function C(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: i
        }),
            N(!1);
    }
    return ((0, d.Z)(() => {
        if (null != E) {
            let { handoff_key: e, handoff_token: t } = (0, s.parse)(E.search);
            if (null != e && null != t) {
                let n = null != I ? (0, u.L)(I) : void 0;
                v
                    ? a.Z.logout(null).finally(() => {
                          C({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n
                          });
                      })
                    : C({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n
                      });
            }
        }
    }),
    v || _ === p.u34.LOGGING_IN)
        ? (0, i.jsx)(m.q, {})
        : (0, i.jsx)(m.Z, {
              ...e,
              transitionTo: t
          });
}
