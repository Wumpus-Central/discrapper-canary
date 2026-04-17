"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(311907),
    a = n(397927),
    o = n(830215),
    c = n(6981),
    d = n(964486),
    u = n(351671),
    _ = n(854378),
    h = n(463347),
    g = n(334465),
    p = n(976860),
    m = n(961350),
    A = n(129851),
    f = n(652215),
    E = n(746080);
function x(e) {
    let t = s.useCallback(
            (t) => {
                let n;
                ((n = (0, g.B)(t, { path: f.BVt.CHANNEL(h.pv.guildId(), h.pv.channelId()) })),
                +(n?.params?.channelId !== E.VV.ROLE_SUBSCRIPTIONS))
                    ? (e.transitionTo ?? p.pX)(t)
                    : p.bG(t);
            },
            [e.transitionTo],
        ),
        { isAuthenticated: n, loginStatus: x } = (0, l.cf)([m.default], () => ({
            isAuthenticated: m.default.isAuthenticated(),
            loginStatus: m.default.getLoginStatus(),
        })),
        { location: I, redirectTo: N } = e,
        [v, T] = s.useState(n);
    function j(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), T(!1);
    }
    return ((0, d.Ay)(() => {
        if (null != I) {
            let { handoff_key: e, handoff_token: t } = (0, r.parse)(I.search);
            if (null != e && null != t) {
                let n = null != N ? (0, u.Q)(N) : void 0;
                v
                    ? o.A.logout("handoff", null).finally(() => {
                          j({ handoffKey: e, handoffToken: t, handoffSource: n });
                      })
                    : j({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
        }
    }),
    v || x === f.aUe.LOGGING_IN)
        ? (0, i.jsx)(_.Ay, { children: (0, i.jsx)(a.y$y, {}) })
        : (0, i.jsx)(A.A, { ...e, transitionTo: t });
}
