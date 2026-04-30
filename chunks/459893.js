n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    s = n(492462),
    i = n(17928),
    r = n(289873),
    o = n(830215),
    u = n(6981),
    c = n(964486),
    d = n(351671),
    h = n(854378),
    m = n(463347),
    g = n(334465),
    f = n(976860),
    _ = n(495544),
    A = n(654921),
    x = n(652215),
    E = n(746080);
function p(e) {
    let t = a.useCallback(
            (t) => {
                let n;
                ((n = (0, g.B)(t, { path: x.BVt.CHANNEL(m.pv.guildId(), m.pv.channelId()) })),
                +(n?.params?.channelId !== E.VV.ROLE_SUBSCRIPTIONS))
                    ? (e.transitionTo ?? f.pX)(t)
                    : f.bG(t);
            },
            [e.transitionTo],
        ),
        { isAuthenticated: n, loginStatus: p } = (0, i.cf)([_.default], () => ({
            isAuthenticated: _.default.isAuthenticated(),
            loginStatus: _.default.getLoginStatus(),
        })),
        { location: S, redirectTo: j } = e,
        [N, C] = a.useState(n);
    function R(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: l } = e;
        (0, u.Qh)({ handoffKey: t, handoffToken: n, handoffSource: l }), C(!1);
    }
    return ((0, c.Ay)(() => {
        if (null != S) {
            let { handoff_key: e, handoff_token: t } = (0, s.parse)(S.search);
            if (null != e && null != t) {
                let n = null != j ? (0, d.Q)(j) : void 0;
                N
                    ? o.A.logout("handoff", null).finally(() => {
                          R({ handoffKey: e, handoffToken: t, handoffSource: n });
                      })
                    : R({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
        }
    }),
    N || p === x.aUe.LOGGING_IN)
        ? (0, l.jsx)(h.Ay, { children: (0, l.jsx)(r.y, {}) })
        : (0, l.jsx)(A.A, { ...e, transitionTo: t });
}
