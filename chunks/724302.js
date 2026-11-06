(i.d(t, { RD: () => E }), i(321073));
var n = i(582128),
    o = i(52133),
    l = i(125822),
    a = i(855986),
    r = i(975807),
    c = i(149468),
    s = i(223769),
    u = i(889558),
    p = i(878118),
    d = i(281020),
    _ = i(975460),
    A = i(704824);
let h = Symbol();
var T = i(942370),
    b = i(652215);
let C = "AUTHORIZE_REQUEST",
    I = [T._.RPC, T._.WEB];
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: i = !1 } = t,
        E = (0, _.g)(e),
        L = (0, a.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        O = n.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !L.has(e)) : I.filter((e) => !L.has(e)),
            }),
            [t, L],
        ),
        w = (function (e, t) {
            var i, a, p, _;
            let A,
                E,
                L,
                O,
                w =
                    ((i = n.useMemo(() => (null != e ? [e] : []), [e])),
                    (a = t?.allowedFlows ?? I),
                    (A = (0, l.A)(() => a, a, o.v)),
                    (p = S),
                    (_ = n.useCallback(
                        () =>
                            i.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: s.A.isSubscribed(e.id, C),
                            })),
                        [i],
                    )),
                    (E = n.useRef(h)),
                    (L = n.useRef(_)),
                    (O = n.useSyncExternalStore(
                        n.useCallback(
                            (e) =>
                                p(() => {
                                    ((E.current = h), e());
                                }),
                            [p],
                        ),
                        n.useCallback(
                            () => (
                                L.current !== _ && ((L.current = _), (E.current = h)),
                                E.current === h && (E.current = _()),
                                E.current
                            ),
                            [_],
                        ),
                    )),
                    n.useMemo(
                        () =>
                            O.map((e) => {
                                let t = [];
                                if (
                                    (A.includes(T._.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: T._.RPC,
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
                                                            flow_type: T._.RPC,
                                                        },
                                                    ),
                                                    (0, d.gk)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    }));
                                            },
                                        }),
                                    A.includes(T._.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let i = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: T._.WEB,
                                        initiate(t) {
                                            ((0, u.h)({
                                                href: i,
                                                onConfirm: () => {
                                                    ((0, r.A)(i),
                                                        t?.onConfirm?.(),
                                                        (0, d.gk)(e.application.id, {
                                                            onSuccess: t.onSuccess,
                                                            onError: t.onError,
                                                        }));
                                                },
                                            }),
                                                c.Ay.trackWithMetadata(b.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: T._.WEB,
                                                }));
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [O, A],
                    ));
            return w.length > 0 ? w[0] : null;
        })(E, O),
        y = w?.preferredFlow,
        R = null != y,
        { token: f, fetched: k } = (0, A.U)(E?.parentId ?? E?.id, { disableFetch: O.disableFetch });
    return {
        fetched: k,
        hasAlreadyLinked: k && null != f,
        canStartAuthorization: R,
        startAuthorization: n.useCallback((e) => (null == y ? null : (y.initiate(e), y.type)), [y]),
        connectionApp: E,
        chosenFlow: y?.type ?? null,
        token: f,
        debug: i
            ? {
                  isSubscribedToAuthorizeRequest: w?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: f,
                  hasConnectionEntrypointUrl: E?.connectionEntrypointUrl != null,
                  validFlows: w?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function S(e) {
    return s.A.listenIsSubscribed(e);
}
