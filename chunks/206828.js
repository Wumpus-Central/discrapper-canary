n.d(t, { RD: () => C }), n(321073);
var i = n(64700),
    l = n(52133),
    r = n(958538),
    o = n(17928),
    a = n(975807),
    u = n(95561),
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
    y = [f._M.RPC, f._M.WEB];
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        C = (0, A.g)(e),
        S = (0, o.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        R = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !S.has(e)) : y.filter((e) => !S.has(e)),
            }),
            [t, S],
        ),
        w = (function (e, t) {
            var n, o, p, A;
            let _,
                C,
                S,
                R,
                w =
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
                    (S = i.useRef(A)),
                    (R = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                p(() => {
                                    (C.current = h), e();
                                }),
                            [p],
                        ),
                        i.useCallback(
                            () => (
                                S.current !== A && ((S.current = A), (C.current = h)),
                                C.current === h && (C.current = A()),
                                C.current
                            ),
                            [A],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            R.map((e) => {
                                let t = [];
                                if (
                                    (_.includes(f._M.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: f._M.RPC,
                                            initiate(t) {
                                                c.A.dispatchToSubscriptions(
                                                    T,
                                                    (t) => t.socket.application.id === e.application.id,
                                                    {},
                                                ),
                                                    t.onConfirm?.(),
                                                    u.Ay.trackWithMetadata(
                                                        b.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                                                        {
                                                            location_stack: t.analyticsLocations,
                                                            application_id: e.application.id,
                                                            flow_type: f._M.RPC,
                                                        },
                                                    ),
                                                    (0, d.gk)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    });
                                            },
                                        }),
                                    _.includes(f._M.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let n = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: f._M.WEB,
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
                                                u.Ay.trackWithMetadata(b.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: f._M.WEB,
                                                });
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [R, _],
                    ));
            return w.length > 0 ? w[0] : null;
        })(C, R),
        O = w?.preferredFlow,
        M = null != O,
        { token: L, fetched: k } = (0, _.U)(C?.parentId ?? C?.id, { disableFetch: R.disableFetch });
    return {
        fetched: k,
        hasAlreadyLinked: k && null != L,
        canStartAuthorization: M,
        startAuthorization: i.useCallback((e) => (null == O ? null : (O.initiate(e), O.type)), [O]),
        connectionApp: C,
        chosenFlow: O?.type ?? null,
        token: L,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: w?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: L,
                  hasConnectionEntrypointUrl: C?.connectionEntrypointUrl != null,
                  validFlows: w?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function E(e) {
    return c.A.listenIsSubscribed(e);
}
