"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(311907),
    a = n(289873),
    o = n(830215),
    c = n(6981),
    d = n(964486),
    u = n(351671),
    _ = n(854378),
    h = n(463347),
    m = n(334465),
    p = n(976860),
    g = n(961350),
    A = n(129851),
    f = n(652215),
    x = n(746080);
function E(e) {
    let t = s.useCallback(
            (t) => {
                let n;
                ((n = (0, m.B)(t, { path: f.BVt.CHANNEL(h.pv.guildId(), h.pv.channelId()) })),
                +(n?.params?.channelId !== x.VV.ROLE_SUBSCRIPTIONS))
                    ? (e.transitionTo ?? p.pX)(t)
                    : p.bG(t);
            },
            [e.transitionTo],
        ),
        { isAuthenticated: n, loginStatus: E } = (0, l.cf)([g.default], () => ({
            isAuthenticated: g.default.isAuthenticated(),
            loginStatus: g.default.getLoginStatus(),
        })),
        { location: I, redirectTo: v } = e,
        [N, j] = s.useState(n);
    function C(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), j(!1);
    }
    return ((0, d.Ay)(() => {
        if (null != I) {
            let { handoff_key: e, handoff_token: t } = (0, r.parse)(I.search);
            if (null != e && null != t) {
                let n = null != v ? (0, u.Q)(v) : void 0;
                N
                    ? o.A.logout("handoff", null).finally(() => {
                          C({ handoffKey: e, handoffToken: t, handoffSource: n });
                      })
                    : C({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
        }
    }),
    N || E === f.aUe.LOGGING_IN)
        ? (0, i.jsx)(_.Ay, { children: (0, i.jsx)(a.y, {}) })
        : (0, i.jsx)(A.A, { ...e, transitionTo: t });
}
