n.d(t, { RD: () => f }), n(321073);
var i = n(64700),
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
    E = [b._M.RPC, b._M.WEB];
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        f = (0, _.g)(e),
        S = (0, l.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        w = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !S.has(e)) : E.filter((e) => !S.has(e)),
            }),
            [t, S],
        ),
        y = (function (e, t) {
            var n, l, p, _;
            let A,
                f,
                S,
                w,
                y =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (l = t?.allowedFlows ?? E),
                    (A = (0, o.A)(() => l, l, r.v)),
                    (p = R),
                    (_ = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: u.A.isSubscribed(e.id, C),
                            })),
                        [n],
                    )),
                    (f = i.useRef(h)),
                    (S = i.useRef(_)),
                    (w = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                p(() => {
                                    (f.current = h), e();
                                }),
                            [p],
                        ),
                        i.useCallback(
                            () => (
                                S.current !== _ && ((S.current = _), (f.current = h)),
                                f.current === h && (f.current = _()),
                                f.current
                            ),
                            [_],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            w.map((e) => {
                                let t = [];
                                if (
                                    (A.includes(b._M.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: b._M.RPC,
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
                                                            flow_type: b._M.RPC,
                                                        },
                                                    ),
                                                    (0, d.gk)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    });
                                            },
                                        }),
                                    A.includes(b._M.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let n = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: b._M.WEB,
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
                                                    flow_type: b._M.WEB,
                                                });
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [w, A],
                    ));
            return y.length > 0 ? y[0] : null;
        })(f, w),
        O = y?.preferredFlow,
        L = null != O,
        { token: k, fetched: M } = (0, A.U)(f?.parentId ?? f?.id, { disableFetch: w.disableFetch });
    return {
        fetched: M,
        hasAlreadyLinked: M && null != k,
        canStartAuthorization: L,
        startAuthorization: i.useCallback((e) => (null == O ? null : (O.initiate(e), O.type)), [O]),
        connectionApp: f,
        chosenFlow: O?.type ?? null,
        token: k,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: y?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: k,
                  hasConnectionEntrypointUrl: f?.connectionEntrypointUrl != null,
                  validFlows: y?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function R(e) {
    return u.A.listenIsSubscribed(e);
}
