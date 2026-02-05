"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(960488),
    a = n(311907),
    o = n(830215),
    c = n(6981),
    d = n(964486),
    u = n(351671),
    h = n(463347),
    _ = n(976860),
    p = n(961350),
    g = n(129851),
    m = n(652215),
    f = n(746080);
function A(e) {
    let t = s.useCallback(
            (t) => {
                let n;
                ((n = (0, l.B6)(t, { path: m.BVt.CHANNEL(h.pv.guildId(), h.pv.channelId()) })),
                +(n?.params?.channelId !== f.VV.ROLE_SUBSCRIPTIONS))
                    ? (e.transitionTo ?? _.pX)(t)
                    : _.bG(t);
            },
            [e.transitionTo],
        ),
        { isAuthenticated: n, loginStatus: A } = (0, a.cf)([p.default], () => ({
            isAuthenticated: p.default.isAuthenticated(),
            loginStatus: p.default.getLoginStatus(),
        })),
        { location: E, redirectTo: x } = e,
        [v, I] = s.useState(n);
    function N(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, c.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), I(!1);
    }
    return ((0, d.Ay)(() => {
        if (null != E) {
            let { handoff_key: e, handoff_token: t } = (0, r.parse)(E.search);
            if (null != e && null != t) {
                let n = null != x ? (0, u.Q)(x) : void 0;
                v
                    ? o.A.logout("handoff", null).finally(() => {
                          N({ handoffKey: e, handoffToken: t, handoffSource: n });
                      })
                    : N({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
        }
    }),
    v || A === m.aUe.LOGGING_IN)
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsx)(g.A, { ...e, transitionTo: t });
}
