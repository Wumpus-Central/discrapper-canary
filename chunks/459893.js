n.d(t, { A: () => x });
var r = n(627968),
    l = n(64700),
    i = n(492462),
    a = n(17928),
    s = n(289873),
    o = n(830215),
    u = n(6981),
    c = n(964486),
    d = n(351671),
    _ = n(854378),
    h = n(463347),
    m = n(334465),
    g = n(976860),
    f = n(495544),
    E = n(455686),
    A = n(652215),
    p = n(746080);
function x(e) {
    let t = l.useCallback(
            (t) => {
                let n;
                ((n = (0, m.B)(t, { path: A.BVt.CHANNEL(h.pv.guildId(), h.pv.channelId()) })),
                +(n?.params?.channelId !== p.VV.ROLE_SUBSCRIPTIONS))
                    ? (e.transitionTo ?? g.pX)(t)
                    : g.bG(t);
            },
            [e.transitionTo],
        ),
        { isAuthenticated: n, loginStatus: x } = (0, a.cf)([f.default], () => ({
            isAuthenticated: f.default.isAuthenticated(),
            loginStatus: f.default.getLoginStatus(),
        })),
        { location: N, redirectTo: I } = e,
        [v, S] = l.useState(n);
    function y(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: r } = e;
        (0, u.Qh)({ handoffKey: t, handoffToken: n, handoffSource: r }), S(!1);
    }
    return ((0, c.Ay)(() => {
        if (null != N) {
            let { handoff_key: e, handoff_token: t } = (0, i.parse)(N.search);
            if (null != e && null != t) {
                let n = null != I ? (0, d.Q)(I) : void 0;
                v
                    ? o.A.logout("handoff", null).finally(() => {
                          y({ handoffKey: e, handoffToken: t, handoffSource: n });
                      })
                    : y({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
        }
    }),
    v || x === A.aUe.LOGGING_IN)
        ? (0, r.jsx)(_.Ay, { children: (0, r.jsx)(s.y, {}) })
        : (0, r.jsx)(E.A, { ...e, transitionTo: t });
}
