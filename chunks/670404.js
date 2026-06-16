t.d(e, { m: () => c });
var n = t(64700),
    r = t(475743),
    i = t(174459),
    s = t(52643),
    l = t(652215);
function c(a, e) {
    let [t, c] = n.useState(s.N.LANDING),
        d = (0, r.A)(t),
        [o, m] = n.useState(null),
        [x, u] = n.useState(null),
        [N, h] = n.useState(void 0),
        p = n.useCallback(() => {
            switch (t) {
                case s.N.LANDING:
                    c(s.N.PRE_CONNECT);
                    break;
                case s.N.DISCORD_CONSENT:
                    c(s.N.SUCCESS);
                    break;
                case s.N.ERROR:
                    c(s.N.PRE_CONNECT);
            }
        }, [t]),
        j = n.useCallback((a) => {
            m(null), h(a), c(s.N.ERROR);
        }, []),
        g = n.useCallback((a) => {
            m(a), c(s.N.PRE_CONNECT_WAITING);
        }, []),
        C = n.useCallback((a) => {
            m(null), u(a), c(s.N.DISCORD_CONSENT);
        }, []);
    return (
        n.useEffect(() => {
            t !== d &&
                i.default.track(l.HAw.ACCOUNT_LINK_STEP, {
                    location_stack: a,
                    previous_step: d,
                    current_step: t,
                    platform_type: e,
                });
        }, [t, d, a, e]),
        {
            slide: t,
            gotoNext: p,
            gotoError: j,
            handleWaitingForConnection: g,
            handleAuthToken: C,
            expectedCallbackState: o,
            callbackData: x,
            errorCode: N,
        }
    );
}
