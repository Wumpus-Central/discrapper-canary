t.d(e, { m: () => c });
var n = t(64700),
    r = t(475743),
    s = t(174459),
    i = t(52643),
    l = t(652215);
function c(a, e) {
    let [t, c] = n.useState(i.N.LANDING),
        o = (0, r.A)(t),
        [d, m] = n.useState(null),
        [x, u] = n.useState(null),
        [N, h] = n.useState(void 0),
        p = n.useCallback(() => {
            switch (t) {
                case i.N.LANDING:
                    c(i.N.PRE_CONNECT);
                    break;
                case i.N.DISCORD_CONSENT:
                    c(i.N.SUCCESS);
                    break;
                case i.N.ERROR:
                    c(i.N.PRE_CONNECT);
            }
        }, [t]),
        j = n.useCallback((a) => {
            m(null), h(a), c(i.N.ERROR);
        }, []),
        C = n.useCallback((a) => {
            m(a), c(i.N.PRE_CONNECT_WAITING);
        }, []),
        g = n.useCallback((a) => {
            m(null), u(a), c(i.N.DISCORD_CONSENT);
        }, []);
    return (
        n.useEffect(() => {
            t !== o &&
                s.default.track(l.HAw.ACCOUNT_LINK_STEP, {
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
            handleWaitingForConnection: C,
            handleAuthToken: g,
            expectedCallbackState: d,
            callbackData: x,
            errorCode: N,
        }
    );
}
