(i.d(t, { RD: () => L }), i(321073));
var n = i(582128),
    o = i(52133),
    l = i(125822),
    a = i(855986),
    r = i(975807),
    c = i(149468),
    s = i(223769),
    u = i(889558),
    p = i(878118),
    _ = i(281020),
    d = i(975460),
    A = i(704824);
let T = Symbol();
var h = i(942370),
    b = i(652215);
let C = "AUTHORIZE_REQUEST",
    I = [h._.RPC, h._.WEB];
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: i = !1 } = t,
        L = (0, d.g)(e),
        S = (0, a.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        E = n.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !S.has(e)) : I.filter((e) => !S.has(e)),
            }),
            [t, S],
        ),
        w = (function (e, t) {
            var i, a, p, d;
            let A,
                L,
                S,
                E,
                w =
                    ((i = n.useMemo(() => (null != e ? [e] : []), [e])),
                    (a = t?.allowedFlows ?? I),
                    (A = (0, l.A)(() => a, a, o.v)),
                    (p = O),
                    (d = n.useCallback(
                        () =>
                            i.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: s.A.isSubscribed(e.id, C),
                            })),
                        [i],
                    )),
                    (L = n.useRef(T)),
                    (S = n.useRef(d)),
                    (E = n.useSyncExternalStore(
                        n.useCallback(
                            (e) =>
                                p(() => {
                                    ((L.current = T), e());
                                }),
                            [p],
                        ),
                        n.useCallback(
                            () => (
                                S.current !== d && ((S.current = d), (L.current = T)),
                                L.current === T && (L.current = d()),
                                L.current
                            ),
                            [d],
                        ),
                    )),
                    n.useMemo(
                        () =>
                            E.map((e) => {
                                let t = [];
                                if (
                                    (A.includes(h._.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: h._.RPC,
                                            initiate(t) {
                                                (s.A.dispatchToSubscriptions(
                                                    C,
                                                    (t) => t.socket.application.id === e.application.id,
                                                    {},
                                                ),
                                                    t.onConfirm?.(),
                                                    c.Ay.trackWithMetadata(
                                                        b.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                                                        {
                                                            location_stack: t.analyticsLocations,
                                                            application_id: e.application.id,
                                                            flow_type: h._.RPC,
                                                        },
                                                    ),
                                                    (0, _.gk)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    }));
                                            },
                                        }),
                                    A.includes(h._.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let i = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: h._.WEB,
                                        initiate(t) {
                                            ((0, u.h)({
                                                href: i,
                                                onConfirm: () => {
                                                    ((0, r.A)(i),
                                                        t?.onConfirm?.(),
                                                        (0, _.gk)(e.application.id, {
                                                            onSuccess: t.onSuccess,
                                                            onError: t.onError,
                                                        }));
                                                },
                                            }),
                                                c.Ay.trackWithMetadata(b.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: h._.WEB,
                                                }));
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [E, A],
                    ));
            return w.length > 0 ? w[0] : null;
        })(L, E),
        y = w?.preferredFlow,
        R = null != y,
        { token: f, fetched: k } = (0, A.U)(L?.parentId ?? L?.id, { disableFetch: E.disableFetch });
    return {
        fetched: k,
        hasAlreadyLinked: k && null != f,
        canStartAuthorization: R,
        startAuthorization: n.useCallback((e) => (null == y ? null : (y.initiate(e), y.type)), [y]),
        connectionApp: L,
        chosenFlow: y?.type ?? null,
        token: f,
        debug: i
            ? {
                  isSubscribedToAuthorizeRequest: w?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: f,
                  hasConnectionEntrypointUrl: L?.connectionEntrypointUrl != null,
                  validFlows: w?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function O(e) {
    return s.A.listenIsSubscribed(e);
}
