(n.d(t, { RD: () => S }), n(321073));
var i = n(582128),
    r = n(52133),
    l = n(958538),
    o = n(17928),
    a = n(975807),
    c = n(666860),
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
    I = [b._.RPC, b._.WEB];
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        S = (0, _.g)(e),
        R = (0, o.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        f = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !R.has(e)) : I.filter((e) => !R.has(e)),
            }),
            [t, R],
        ),
        y = (function (e, t) {
            var n, o, p, _;
            let A,
                S,
                R,
                f,
                y =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (o = t?.allowedFlows ?? I),
                    (A = (0, l.A)(() => o, o, r.v)),
                    (p = E),
                    (_ = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: u.A.isSubscribed(e.id, C),
                            })),
                        [n],
                    )),
                    (S = i.useRef(h)),
                    (R = i.useRef(_)),
                    (f = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                p(() => {
                                    ((S.current = h), e());
                                }),
                            [p],
                        ),
                        i.useCallback(
                            () => (
                                R.current !== _ && ((R.current = _), (S.current = h)),
                                S.current === h && (S.current = _()),
                                S.current
                            ),
                            [_],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            f.map((e) => {
                                let t = [];
                                if (
                                    (A.includes(b._.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: b._.RPC,
                                            initiate(t) {
                                                (u.A.dispatchToSubscriptions(
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
                                                    }));
                                            },
                                        }),
                                    A.includes(b._.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let n = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: b._.WEB,
                                        initiate(t) {
                                            ((0, s.h)({
                                                href: n,
                                                onConfirm: () => {
                                                    ((0, a.A)(n),
                                                        t?.onConfirm?.(),
                                                        (0, d.gk)(e.application.id, {
                                                            onSuccess: t.onSuccess,
                                                            onError: t.onError,
                                                        }));
                                                },
                                            }),
                                                c.Ay.trackWithMetadata(T.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: b._.WEB,
                                                }));
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [f, A],
                    ));
            return y.length > 0 ? y[0] : null;
        })(S, f),
        L = y?.preferredFlow,
        O = null != L,
        { token: w, fetched: k } = (0, A.U)(S?.parentId ?? S?.id, { disableFetch: f.disableFetch });
    return {
        fetched: k,
        hasAlreadyLinked: k && null != w,
        canStartAuthorization: O,
        startAuthorization: i.useCallback((e) => (null == L ? null : (L.initiate(e), L.type)), [L]),
        connectionApp: S,
        chosenFlow: L?.type ?? null,
        token: w,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: y?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: w,
                  hasConnectionEntrypointUrl: S?.connectionEntrypointUrl != null,
                  validFlows: y?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function E(e) {
    return u.A.listenIsSubscribed(e);
}
