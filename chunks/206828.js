n.d(t, { RD: () => R }), n(321073);
var i = n(582128),
    r = n(52133),
    o = n(958538),
    l = n(17928),
    a = n(975807),
    c = n(95561),
    u = n(289919),
    s = n(123917),
    p = n(878118),
    d = n(281020),
    _ = n(975460),
    A = n(704824);
let h = Symbol();
var b = n(942370),
    T = n(652215);
let C = "AUTHORIZE_REQUEST",
    E = [b._.RPC, b._.WEB];
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        R = (0, _.g)(e),
        y = (0, l.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        S = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !y.has(e)) : E.filter((e) => !y.has(e)),
            }),
            [t, y],
        ),
        w = (function (e, t) {
            var n, l, p, _;
            let A,
                R,
                y,
                S,
                w =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (l = t?.allowedFlows ?? E),
                    (A = (0, o.A)(() => l, l, r.v)),
                    (p = f),
                    (_ = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: u.A.isSubscribed(e.id, C),
                            })),
                        [n],
                    )),
                    (R = i.useRef(h)),
                    (y = i.useRef(_)),
                    (S = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                p(() => {
                                    (R.current = h), e();
                                }),
                            [p],
                        ),
                        i.useCallback(
                            () => (
                                y.current !== _ && ((y.current = _), (R.current = h)),
                                R.current === h && (R.current = _()),
                                R.current
                            ),
                            [_],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            S.map((e) => {
                                let t = [];
                                if (
                                    (A.includes(b._.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: b._.RPC,
                                            initiate(t) {
                                                u.A.dispatchToSubscriptions(
                                                    C,
                                                    (t) => t.socket.application.id === e.application.id,
                                                    {},
                                                ),
                                                    t.onConfirm?.(),
                                                    c.Ay.trackWithMetadata(
                                                        T.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                                                        {
                                                            location_stack: t.analyticsLocations,
                                                            application_id: e.application.id,
                                                            flow_type: b._.RPC,
                                                        },
                                                    ),
                                                    (0, d.gk)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    });
                                            },
                                        }),
                                    A.includes(b._.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let n = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: b._.WEB,
                                        initiate(t) {
                                            (0, s.h)({
                                                href: n,
                                                onConfirm: () => {
                                                    (0, a.A)(n),
                                                        t?.onConfirm?.(),
                                                        (0, d.gk)(e.application.id, {
                                                            onSuccess: t.onSuccess,
                                                            onError: t.onError,
                                                        });
                                                },
                                            }),
                                                c.Ay.trackWithMetadata(T.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: b._.WEB,
                                                });
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [S, A],
                    ));
            return w.length > 0 ? w[0] : null;
        })(R, S),
        O = w?.preferredFlow,
        L = null != O,
        { token: k, fetched: F } = (0, A.U)(R?.parentId ?? R?.id, { disableFetch: S.disableFetch });
    return {
        fetched: F,
        hasAlreadyLinked: F && null != k,
        canStartAuthorization: L,
        startAuthorization: i.useCallback((e) => (null == O ? null : (O.initiate(e), O.type)), [O]),
        connectionApp: R,
        chosenFlow: O?.type ?? null,
        token: k,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: w?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: k,
                  hasConnectionEntrypointUrl: R?.connectionEntrypointUrl != null,
                  validFlows: w?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function f(e) {
    return u.A.listenIsSubscribed(e);
}
