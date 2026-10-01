(n.d(t, { RD: () => C }), n(321073));
var i = n(582128),
    l = n(52133),
    r = n(958538),
    o = n(17928),
    u = n(975807),
    a = n(95561),
    c = n(289919),
    s = n(123917),
    p = n(878118),
    d = n(281020),
    A = n(975460),
    _ = n(704824);
let h = Symbol();
var f = n(942370),
    b = n(652215);
let T = "AUTHORIZE_REQUEST",
    y = [f._.RPC, f._.WEB];
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        C = (0, A.g)(e),
        R = (0, o.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        S = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !R.has(e)) : y.filter((e) => !R.has(e)),
            }),
            [t, R],
        ),
        O = (function (e, t) {
            var n, o, p, A;
            let _,
                C,
                R,
                S,
                O =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (o = t?.allowedFlows ?? y),
                    (_ = (0, r.A)(() => o, o, l.v)),
                    (p = E),
                    (A = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: c.A.isSubscribed(e.id, T),
                            })),
                        [n],
                    )),
                    (C = i.useRef(h)),
                    (R = i.useRef(A)),
                    (S = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                p(() => {
                                    ((C.current = h), e());
                                }),
                            [p],
                        ),
                        i.useCallback(
                            () => (
                                R.current !== A && ((R.current = A), (C.current = h)),
                                C.current === h && (C.current = A()),
                                C.current
                            ),
                            [A],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            S.map((e) => {
                                let t = [];
                                if (
                                    (_.includes(f._.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: f._.RPC,
                                            initiate(t) {
                                                (c.A.dispatchToSubscriptions(
                                                    T,
                                                    (t) => t.socket.application.id === e.application.id,
                                                    {},
                                                ),
                                                    t.onConfirm?.(),
                                                    a.Ay.trackWithMetadata(
                                                        b.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                                                        {
                                                            location_stack: t.analyticsLocations,
                                                            application_id: e.application.id,
                                                            flow_type: f._.RPC,
                                                        },
                                                    ),
                                                    (0, d.gk)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    }));
                                            },
                                        }),
                                    _.includes(f._.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let n = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: f._.WEB,
                                        initiate(t) {
                                            ((0, s.h)({
                                                href: n,
                                                onConfirm: () => {
                                                    ((0, u.A)(n),
                                                        t?.onConfirm?.(),
                                                        (0, d.gk)(e.application.id, {
                                                            onSuccess: t.onSuccess,
                                                            onError: t.onError,
                                                        }));
                                                },
                                            }),
                                                a.Ay.trackWithMetadata(b.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: f._.WEB,
                                                }));
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [S, _],
                    ));
            return O.length > 0 ? O[0] : null;
        })(C, S),
        w = O?.preferredFlow,
        L = null != w,
        { token: k, fetched: F } = (0, _.U)(C?.parentId ?? C?.id, { disableFetch: S.disableFetch });
    return {
        fetched: F,
        hasAlreadyLinked: F && null != k,
        canStartAuthorization: L,
        startAuthorization: i.useCallback((e) => (null == w ? null : (w.initiate(e), w.type)), [w]),
        connectionApp: C,
        chosenFlow: w?.type ?? null,
        token: k,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: O?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: k,
                  hasConnectionEntrypointUrl: C?.connectionEntrypointUrl != null,
                  validFlows: O?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function E(e) {
    return c.A.listenIsSubscribed(e);
}
