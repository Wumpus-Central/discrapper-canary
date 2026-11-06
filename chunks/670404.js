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
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                [c, o] = t.useState(null != n ? i.N.PRE_CONNECT_WAITING : i.N.LANDING),
                d = (0, r.Ay)(c),
                [m, u] = t.useState(n),
                [N, x] = t.useState(null),
                [h, p] = t.useState(void 0),
                j = t.useCallback(() => {
                    switch (c) {
                        case i.N.LANDING:
                            o(i.N.PRE_CONNECT);
                            break;
                        case i.N.DISCORD_CONSENT:
                            o(i.N.SUCCESS);
                            break;
                        case i.N.ERROR:
                            o(i.N.PRE_CONNECT);
                    }
                }, [c]),
                C = t.useCallback((a) => {
                    (u(null), p(a), o(i.N.ERROR));
                }, []),
                g = t.useCallback((a) => {
                    (u(a), o(i.N.PRE_CONNECT_WAITING));
                }, []),
                b = t.useCallback((a) => {
                    (u(null), x(a), o(i.N.DISCORD_CONSENT));
                }, []);
            return (
                t.useEffect(() => {
                    c !== d &&
                        s.default.track(l.HAw.ACCOUNT_LINK_STEP, {
                            location_stack: a,
                            previous_step: d,
                            current_step: c,
                            platform_type: e,
                        });
                }, [c, d, a, e]),
                {
                    slide: c,
                    gotoNext: j,
                    gotoError: C,
                    handleWaitingForConnection: g,
                    handleAuthToken: b,
                    expectedCallbackState: m,
                    callbackData: N,
                    errorCode: h,
                }
            );
        },
    },
);
