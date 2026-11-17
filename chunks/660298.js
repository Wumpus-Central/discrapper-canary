(n.d(e, { RD: () => I }), n(321073));
var i = n(582128),
    o = n(868714),
    l = n(855986),
    a = n(975807),
    r = n(149468),
    c = n(223769),
    s = n(889558),
    u = n(878118),
    p = n(281020),
    _ = n(975460),
    d = n(704824);
let A = Symbol();
var T = n(942370),
    h = n(652215);
let b = "AUTHORIZE_REQUEST",
    C = [T._M.RPC, T._M.WEB];
function I(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = e,
        I = (0, _.g)(t),
        O = (0, l.bG)([u.A], () => u.A.getGloballyDisabledAuthorizationFlows()),
        S = i.useMemo(
            () => ({
                ...e,
                allowedFlows:
                    null != e.allowedFlows ? e.allowedFlows.filter((t) => !O.has(t)) : C.filter((t) => !O.has(t)),
            }),
            [e, O],
        ),
        E = (function (t, e) {
            var n, l, u;
            let _,
                d,
                I,
                O,
                S =
                    ((n = i.useMemo(() => (null != t ? [t] : []), [t])),
                    (_ = (0, o.A)(e?.allowedFlows ?? C)),
                    (l = L),
                    (u = i.useCallback(
                        () =>
                            n.map((t) => ({
                                application: t,
                                isSubscribedToAuthorizeRequest: c.A.isSubscribed(t.id, b),
                            })),
                        [n],
                    )),
                    (d = i.useRef(A)),
                    (I = i.useRef(u)),
                    (O = i.useSyncExternalStore(
                        i.useCallback(
                            (t) =>
                                l(() => {
                                    ((d.current = A), t());
                                }),
                            [l],
                        ),
                        i.useCallback(
                            () => (
                                I.current !== u && ((I.current = u), (d.current = A)),
                                d.current === A && (d.current = u()),
                                d.current
                            ),
                            [u],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            O.map((t) => {
                                let e = [];
                                if (
                                    (_.includes(T._M.RPC) &&
                                        t.isSubscribedToAuthorizeRequest &&
                                        e.push({
                                            type: T._M.RPC,
                                            initiate(e) {
                                                (c.A.dispatchToSubscriptions(
                                                    b,
                                                    (e) => e.socket.application.id === t.application.id,
                                                    {},
                                                ),
                                                    e.onConfirm?.(),
                                                    r.Ay.trackWithMetadata(
                                                        h.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                                                        {
                                                            location_stack: e.analyticsLocations,
                                                            application_id: t.application.id,
                                                            flow_type: T._M.RPC,
                                                        },
                                                    ),
                                                    (0, p.gk)(t.application.id, {
                                                        onSuccess: e.onSuccess,
                                                        onError: e.onError,
                                                    }));
                                            },
                                        }),
                                    _.includes(T._M.WEB) && null != t.application.connectionEntrypointUrl)
                                ) {
                                    let n = t.application.connectionEntrypointUrl;
                                    e.push({
                                        type: T._M.WEB,
                                        initiate(e) {
                                            ((0, s.h)({
                                                href: n,
                                                onConfirm: () => {
                                                    ((0, a.A)(n),
                                                        e?.onConfirm?.(),
                                                        (0, p.gk)(t.application.id, {
                                                            onSuccess: e.onSuccess,
                                                            onError: e.onError,
                                                        }));
                                                },
                                            }),
                                                r.Ay.trackWithMetadata(h.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: e.analyticsLocations,
                                                    application_id: t.application.id,
                                                    flow_type: T._M.WEB,
                                                }));
                                        },
                                    });
                                }
                                return { context: t, availableFlows: e, preferredFlow: e.length > 0 ? e[0] : null };
                            }),
                        [O, _],
                    ));
            return S.length > 0 ? S[0] : null;
        })(I, S),
        w = E?.preferredFlow,
        y = null != w,
        { token: R, fetched: f } = (0, d.U)(I?.parentId ?? I?.id, { disableFetch: S.disableFetch });
    return {
        fetched: f,
        hasAlreadyLinked: f && null != R,
        canStartAuthorization: y,
        startAuthorization: i.useCallback((t) => (null == w ? null : (w.initiate(t), w.type)), [w]),
        connectionApp: I,
        chosenFlow: w?.type ?? null,
        token: R,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: E?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: R,
                  hasConnectionEntrypointUrl: I?.connectionEntrypointUrl != null,
                  validFlows: E?.availableFlows?.map((t) => t.type) ?? [],
              }
            : void 0,
    };
}
function L(t) {
    return c.A.listenIsSubscribed(t);
}
