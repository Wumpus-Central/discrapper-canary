(n.d(t, { RD: () => E }), n(321073));
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
    S = [b._.RPC, b._.WEB];
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        E = (0, _.g)(e),
        f = (0, o.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        y = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !f.has(e)) : S.filter((e) => !f.has(e)),
            }),
            [t, f],
        ),
        w = (function (e, t) {
            var n, o, p, _;
            let A,
                E,
                f,
                y,
                w =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (o = t?.allowedFlows ?? S),
                    (A = (0, l.A)(() => o, o, r.v)),
                    (p = R),
                    (_ = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: u.A.isSubscribed(e.id, C),
                            })),
                        [n],
                    )),
                    (E = i.useRef(h)),
                    (f = i.useRef(_)),
                    (y = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                p(() => {
                                    ((E.current = h), e());
                                }),
                            [p],
                        ),
                        i.useCallback(
                            () => (
                                f.current !== _ && ((f.current = _), (E.current = h)),
                                E.current === h && (E.current = _()),
                                E.current
                            ),
                            [_],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            y.map((e) => {
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
                        [y, A],
                    ));
            return w.length > 0 ? w[0] : null;
        })(E, y),
        I = w?.preferredFlow,
        O = null != I,
        { token: L, fetched: k } = (0, A.U)(E?.parentId ?? E?.id, { disableFetch: y.disableFetch });
    return {
        fetched: k,
        hasAlreadyLinked: k && null != L,
        canStartAuthorization: O,
        startAuthorization: i.useCallback((e) => (null == I ? null : (I.initiate(e), I.type)), [I]),
        connectionApp: E,
        chosenFlow: I?.type ?? null,
        token: L,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: w?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: L,
                  hasConnectionEntrypointUrl: E?.connectionEntrypointUrl != null,
                  validFlows: w?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function R(e) {
    return u.A.listenIsSubscribed(e);
}
