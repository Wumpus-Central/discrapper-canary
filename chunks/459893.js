n.d(t, { A: () => x });
var l = n(627968),
    r = n(64700),
    a = n(492462),
    i = n(17928),
    s = n(289873),
    o = n(830215),
    u = n(6981),
    c = n(964486),
    d = n(351671),
    h = n(854378),
    m = n(463347),
    g = n(334465),
    f = n(976860),
    p = n(495544),
    _ = n(455686),
    E = n(652215),
    A = n(746080);
function x(e) {
    let t = r.useCallback(
            (t) => {
                let n;
                ((n = (0, g.B)(t, { path: E.BVt.CHANNEL(m.pv.guildId(), m.pv.channelId()) })),
                +(n?.params?.channelId !== A.VV.ROLE_SUBSCRIPTIONS))
                    ? (e.transitionTo ?? f.pX)(t)
                    : f.bG(t);
            },
            [e.transitionTo],
        ),
        { isAuthenticated: n, loginStatus: x } = (0, i.cf)([p.default], () => ({
            isAuthenticated: p.default.isAuthenticated(),
            loginStatus: p.default.getLoginStatus(),
        })),
        { location: N, redirectTo: I } = e,
        [j, S] = r.useState(n);
    function y(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: l } = e;
        (0, u.Qh)({ handoffKey: t, handoffToken: n, handoffSource: l }), S(!1);
    }
    return ((0, c.Ay)(() => {
        if (null != N) {
            let { handoff_key: e, handoff_token: t } = (0, a.parse)(N.search);
            if (null != e && null != t) {
                let n = null != I ? (0, d.Q)(I) : void 0;
                j
                    ? o.A.logout("handoff", null).finally(() => {
                          y({ handoffKey: e, handoffToken: t, handoffSource: n });
                      })
                    : y({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
        }
    }),
    j || x === E.aUe.LOGGING_IN)
        ? (0, l.jsx)(h.Ay, { children: (0, l.jsx)(s.y, {}) })
        : (0, l.jsx)(_.A, { ...e, transitionTo: t });
}
