t.d(e, { m: () => c });
var r = t(582128),
    n = t(475743),
    s = t(174459),
    l = t(52643),
    i = t(652215);
function c(a, e) {
    let [t, c] = r.useState(l.N.LANDING),
        o = (0, n.Ay)(t),
        [d, m] = r.useState(null),
        [x, u] = r.useState(null),
        [N, h] = r.useState(void 0),
        p = r.useCallback(() => {
            switch (t) {
                case l.N.LANDING:
                    c(l.N.PRE_CONNECT);
                    break;
                case l.N.DISCORD_CONSENT:
                    c(l.N.SUCCESS);
                    break;
                case l.N.ERROR:
                    c(l.N.PRE_CONNECT);
            }
        }, [t]),
        j = r.useCallback((a) => {
            m(null), h(a), c(l.N.ERROR);
        }, []),
        g = r.useCallback((a) => {
            m(a), c(l.N.PRE_CONNECT_WAITING);
        }, []),
        C = r.useCallback((a) => {
            m(null), u(a), c(l.N.DISCORD_CONSENT);
        }, []);
    return (
        r.useEffect(() => {
            t !== o &&
                s.default.track(i.HAw.ACCOUNT_LINK_STEP, {
                    location_stack: a,
                    previous_step: o,
                    current_step: t,
                    platform_type: e,
                });
        }, [t, o, a, e]),
        {
            slide: t,
            gotoNext: p,
            gotoError: j,
            handleWaitingForConnection: g,
            handleAuthToken: C,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: N,
        }
    );
}
