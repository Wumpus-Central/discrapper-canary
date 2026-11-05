var t = n(582128),
    r = n(475743),
    s = n(129230),
    i = n(52643),
    l = n(652215);
n.d(
    e,
    {},
    {
        m: function (a, e) {
            let [n, c] = t.useState(i.N.LANDING),
                o = (0, r.Ay)(n),
                [d, m] = t.useState(null),
                [u, x] = t.useState(null),
                [N, h] = t.useState(void 0),
                p = t.useCallback(() => {
                    switch (n) {
                        case i.N.LANDING:
                            c(i.N.PRE_CONNECT);
                            break;
                        case i.N.DISCORD_CONSENT:
                            c(i.N.SUCCESS);
                            break;
                        case i.N.ERROR:
                            c(i.N.PRE_CONNECT);
                    }
                }, [n]),
                j = t.useCallback((a) => {
                    (m(null), h(a), c(i.N.ERROR));
                }, []),
                b = t.useCallback((a) => {
                    (m(a), c(i.N.PRE_CONNECT_WAITING));
                }, []),
                g = t.useCallback((a) => {
                    (m(null), x(a), c(i.N.DISCORD_CONSENT));
                }, []);
            return (
                t.useEffect(() => {
                    n !== o &&
                        s.default.track(l.HAw.ACCOUNT_LINK_STEP, {
                            location_stack: a,
                            previous_step: o,
                            current_step: n,
                            platform_type: e,
                        });
                }, [n, o, a, e]),
                {
                    slide: n,
                    gotoNext: p,
                    gotoError: j,
                    handleWaitingForConnection: b,
                    handleAuthToken: g,
                    expectedCallbackState: d,
                    callbackData: u,
                    errorCode: N,
                }
            );
        },
    },
);
