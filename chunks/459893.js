"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(311907),
    a = n(830215),
    o = n(6981),
    c = n(964486),
    d = n(351671),
    u = n(463347),
    h = n(334465),
    _ = n(976860),
    p = n(961350),
    g = n(129851),
    m = n(652215),
    f = n(746080);
function A(e) {
    let t = s.useCallback(
            (t) => {
                let n;
                ((n = (0, h.B)(t, { path: m.BVt.CHANNEL(u.pv.guildId(), u.pv.channelId()) })),
                +(n?.params?.channelId !== f.VV.ROLE_SUBSCRIPTIONS))
                    ? (e.transitionTo ?? _.pX)(t)
                    : _.bG(t);
            },
            [e.transitionTo],
        ),
        { isAuthenticated: n, loginStatus: A } = (0, l.cf)([p.default], () => ({
            isAuthenticated: p.default.isAuthenticated(),
            loginStatus: p.default.getLoginStatus(),
        })),
        { location: E, redirectTo: x } = e,
        [I, N] = s.useState(n);
    function v(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
        (0, o.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), N(!1);
    }
    return ((0, c.Ay)(() => {
        if (null != E) {
            let { handoff_key: e, handoff_token: t } = (0, r.parse)(E.search);
            if (null != e && null != t) {
                let n = null != x ? (0, d.Q)(x) : void 0;
                I
                    ? a.A.logout("handoff", null).finally(() => {
                          v({ handoffKey: e, handoffToken: t, handoffSource: n });
                      })
                    : v({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
        }
    }),
    I || A === m.aUe.LOGGING_IN)
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsx)(g.A, { ...e, transitionTo: t });
}
