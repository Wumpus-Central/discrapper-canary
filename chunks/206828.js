(n.d(t, { RD: () => y }), n(321073));
var i = n(582128),
    l = n(52133),
    r = n(958538),
    o = n(17928),
    u = n(975807),
    a = n(666860),
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
    C = [f._.RPC, f._.WEB];
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        y = (0, A.g)(e),
        E = (0, o.bG)([p.A], () => p.A.getGloballyDisabledAuthorizationFlows()),
        I = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !E.has(e)) : C.filter((e) => !E.has(e)),
            }),
            [t, E],
        ),
        R = (function (e, t) {
            var n, o, p, A;
            let _,
                y,
                E,
                I,
                R =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (o = t?.allowedFlows ?? C),
                    (_ = (0, r.A)(() => o, o, l.v)),
                    (p = S),
                    (A = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: c.A.isSubscribed(e.id, T),
                            })),
                        [n],
                    )),
                    (y = i.useRef(h)),
                    (E = i.useRef(A)),
                    (I = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                p(() => {
                                    ((y.current = h), e());
                                }),
                            [p],
                        ),
                        i.useCallback(
                            () => (
                                E.current !== A && ((E.current = A), (y.current = h)),
                                y.current === h && (y.current = A()),
                                y.current
                            ),
                            [A],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            I.map((e) => {
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
                        [I, _],
                    ));
            return R.length > 0 ? R[0] : null;
        })(y, I),
        O = R?.preferredFlow,
        w = null != O,
        { token: L, fetched: k } = (0, _.U)(y?.parentId ?? y?.id, { disableFetch: I.disableFetch });
    return {
        fetched: k,
        hasAlreadyLinked: k && null != L,
        canStartAuthorization: w,
        startAuthorization: i.useCallback((e) => (null == O ? null : (O.initiate(e), O.type)), [O]),
        connectionApp: y,
        chosenFlow: O?.type ?? null,
        token: L,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: R?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: L,
                  hasConnectionEntrypointUrl: y?.connectionEntrypointUrl != null,
                  validFlows: R?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function S(e) {
    return c.A.listenIsSubscribed(e);
}
